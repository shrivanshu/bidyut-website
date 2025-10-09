import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(express.json());

// Cache file path
const CACHE_FILE = path.join(process.cwd(), 'news-cache.json');

// Default cache structure
const defaultCache = {
  lastUpdated: null,
  articles: []
};

// Read cache from file
async function readCache() {
  try {
    const data = await fs.readFile(CACHE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or is invalid, return default cache
    return { ...defaultCache };
  }
}

// Write cache to file
async function writeCache(cache) {
  try {
    await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
    console.log('Cache updated successfully');
  } catch (error) {
    console.error('Error writing cache:', error);
  }
}

// Check if cache is still valid (less than 3.5 days old)
function isCacheValid(lastUpdated) {
  if (!lastUpdated) return false;
  const now = new Date();
  const cacheDate = new Date(lastUpdated);
  const diffInHours = (now - cacheDate) / (1000 * 60 * 60);
  return diffInHours < 84; // 3.5 days in hours
}

// Fetch fresh news from EventRegistry API
async function fetchFreshNews() {
  try {
    console.log('Fetching fresh news from EventRegistry...');
    
    // Search for robotics, technology, and education news
    const searchQueries = [
      'robotics%20education',
      'educational%20robotics',
      'robotics%20technology',
      'education%20technology',
      'STEM%20robotics',
      'robotics',
    ];
    
    let mappedArticles = [];
    
    for (const query of searchQueries) {
      const url = `https://eventregistry.org/api/v1/article/getArticles?action=getArticles&keyword=${query}&apiKey=${NEWS_API_KEY}&lang=eng&articlesSortBy=date&articlesCount=15`;
      
      const response = await fetch(url);
      if (!response.ok) {
        continue;
      }
      
      const data = await response.json();
      
      if (data.articles?.results && data.articles.results.length > 0) {
        // Map EventRegistry format to our Article interface
        mappedArticles = data.articles.results.map((article) => ({
          title: article.title || 'No title available',
          description: article.body || 'No description available',
          url: article.url || '#',
          source: { title: article.source?.title || 'Unknown Source' },
          date: article.dateTimePub || new Date().toISOString(),
          image: article.image || null,
        }));
        
        console.log(`Successfully fetched ${mappedArticles.length} articles with query: ${query}`);
        break; // Stop at first successful query
      }
    }

    // Filter and limit articles
    if (mappedArticles.length > 12) {
      mappedArticles = mappedArticles.slice(0, 12);
    }

    return mappedArticles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

// Update news cache
async function updateNewsCache() {
  console.log('Updating news cache...');
  const articles = await fetchFreshNews();
  
  if (articles.length > 0) {
    const cache = {
      lastUpdated: new Date().toISOString(),
      articles: articles
    };
    
    await writeCache(cache);
    console.log('News cache updated successfully');
    return cache;
  } else {
    console.log('No articles fetched, keeping existing cache');
    return await readCache();
  }
}

// API endpoint to get news
app.get('/api/news', async (req, res) => {
  try {
    let cache = await readCache();
    
    // If cache is invalid or empty, fetch fresh news
    if (!isCacheValid(cache.lastUpdated) || cache.articles.length === 0) {
      cache = await updateNewsCache();
    }
    
    res.json({
      success: true,
      articles: cache.articles,
      lastUpdated: cache.lastUpdated,
      fromCache: isCacheValid(cache.lastUpdated)
    });
  } catch (error) {
    console.error('Error serving news:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch news',
      articles: []
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Schedule news updates twice a week (Monday and Thursday at 6 AM)
cron.schedule('0 6 * * 1,4', async () => {
  console.log('Scheduled news update triggered');
  await updateNewsCache();
}, {
  timezone: "Asia/Kolkata" // Adjust timezone as needed
});

// Initialize cache on server start
async function initializeCache() {
  console.log('Initializing news cache...');
  const cache = await readCache();
  
  if (!cache.lastUpdated || cache.articles.length === 0) {
    console.log('No existing cache found, fetching initial news...');
    await updateNewsCache();
  } else {
    console.log('Existing cache found:', {
      lastUpdated: cache.lastUpdated,
      articlesCount: cache.articles.length
    });
  }
}

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await initializeCache();
});

export default app;