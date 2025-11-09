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
const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY;

// Session tracking for chat limits (3 chats per session)
const sessionChatCounts = new Map(); // sessionId -> { count, lastActivity }

// Cleanup old sessions every hour (sessions older than 2 hours)
setInterval(() => {
  const now = Date.now();
  const TWO_HOURS = 2 * 60 * 60 * 1000;
  
  for (const [sessionId, data] of sessionChatCounts.entries()) {
    if (now - data.lastActivity > TWO_HOURS) {
      sessionChatCounts.delete(sessionId);
    }
  }
  
  if (sessionChatCounts.size > 0) {
    console.log(`Cleaned up old sessions. Active sessions: ${sessionChatCounts.size}`);
  }
}, 60 * 60 * 1000); // Run every hour

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://127.0.0.1:3000',
    'https://bidyutinnovation.com',
    'http://bidyutinnovation.com'
  ],
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
  console.log("dfkjs");
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Chatbot API endpoint with 3-chat-per-session limit
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversation = [], sessionId } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: 'Message is required'
      });
    }

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        error: 'Session ID is required'
      });
    }

    // Check session chat count (limit 3 per session)
    const sessionData = sessionChatCounts.get(sessionId) || { count: 0, lastActivity: Date.now() };
    const currentCount = sessionData.count;
    
    if (currentCount >= 3) {
      return res.status(429).json({
        success: false,
        error: 'Chat limit reached',
        response: 'You have reached the maximum of 3 chats per session. Please refresh the page to start a new session.',
        limitReached: true
      });
    }

    if (!GOOGLE_AI_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'Google AI API key not configured'
      });
    }

    // Import Google Generative AI
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(GOOGLE_AI_API_KEY);

    const systemPrompt = `You are Buddy, an AI assistant for Bidyut Innovation, a leading robotics education company. You help users with:
    - Robotics concepts and learning
    - Coding and programming help
    - Information about Bidyut Innovation's programs, courses, and services
    - STEAM education and technology topics
    - General questions about educational robotics
    
    Keep responses helpful, friendly, and focused on education and robotics. If asked about topics outside your expertise, politely redirect to robotics and education.`;

    // Format conversation history
    const conversationHistory = conversation
      .map((msg) => `${msg.from === "me" ? "User" : "Buddy"}: ${msg.text}`)
      .join("\n");

    const fullPrompt = `${systemPrompt}\n\n${conversationHistory}\nUser: ${message}\nBuddy:`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    // Increment chat count for this session
    const newCount = currentCount + 1;
    sessionChatCounts.set(sessionId, {
      count: newCount,
      lastActivity: Date.now()
    });
    const remainingChats = 3 - newCount;

    res.json({
      success: true,
      response: text?.trim() || "I'm having trouble responding right now. Please try again!",
      timestamp: new Date().toISOString(),
      chatCount: newCount,
      remainingChats: remainingChats,
      limitReached: remainingChats === 0
    });

  } catch (error) {
    console.error('Error in chat endpoint:', error);
    
    let errorMessage = "Sorry, I encountered an error. Please try again.";
    let statusCode = 500;
    
    // Handle specific Google AI API errors
    if (error.status === 429) {
      errorMessage = "I'm currently experiencing high usage. Please try again in a few minutes.";
      statusCode = 429;
    } else if (error.status === 401 || error.status === 403) {
      errorMessage = "There's an issue with the AI service configuration. Please contact support.";
      statusCode = 503;
    }
    
    res.status(statusCode).json({
      success: false,
      error: 'Failed to generate response',
      response: errorMessage
    });
  }
});

// Fallback chatbot endpoint for when AI is unavailable
app.post('/api/chat/fallback', (req, res) => {
  const { message } = req.body;
  
  // Simple keyword-based responses
  const lowerMessage = message.toLowerCase();
  let response = "Thanks for your message! ";
  
  if (lowerMessage.includes('robot') || lowerMessage.includes('robotics')) {
    response += "Robotics is an exciting field that combines engineering, programming, and creativity. At Bidyut Innovation, we offer comprehensive robotics education programs for students of all ages.";
  } else if (lowerMessage.includes('course') || lowerMessage.includes('program') || lowerMessage.includes('learn')) {
    response += "We offer various robotics and STEAM education programs. Please visit our website or contact us directly to learn more about our courses and enrollment.";
  } else if (lowerMessage.includes('coding') || lowerMessage.includes('programming')) {
    response += "Programming is a crucial skill in robotics! We teach various programming languages and concepts as part of our robotics curriculum.";
  } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    response = "Hello! I'm Buddy, your AI assistant from Bidyut Innovation. I'm here to help you with questions about robotics, coding, and our educational programs. How can I assist you today?";
  } else {
    response += "I'd be happy to help you with questions about robotics, coding, or Bidyut Innovation's programs. Could you please tell me more about what you're interested in learning?";
  }
  
  res.json({
    success: true,
    response: response,
    timestamp: new Date().toISOString(),
    fallback: true
  });
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