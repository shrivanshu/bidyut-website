// API Configuration
const API_CONFIG = {
  development: {
    BASE_URL: 'https://news-api-bidyut.vercel.app'
  },
  production: {
    BASE_URL: 'https://news-api-bidyut.vercel.app' // Use relative URLs in production (same domain)
  }
};

const getApiUrl = (endpoint: string): string => {
  const env = process.env.NODE_ENV || 'development';
  console.log("env", env)
  const baseUrl = API_CONFIG[env as keyof typeof API_CONFIG]?.BASE_URL || '';
  return `${baseUrl}/api${endpoint}`;
};

export { getApiUrl };