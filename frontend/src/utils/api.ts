// API Configuration
const API_CONFIG = {
  development: {
    BASE_URL: 'http://localhost:3001'
  },
  production: {
    BASE_URL: '' // Use relative URLs in production (same domain)
  }
};

const getApiUrl = (endpoint: string): string => {
  const env = process.env.NODE_ENV || 'development';
  const baseUrl = API_CONFIG[env as keyof typeof API_CONFIG]?.BASE_URL || '';
  return `${baseUrl}/api${endpoint}`;
};

export { getApiUrl };