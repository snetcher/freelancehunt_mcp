import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
  api: {
    token: process.env.FREELANCEHUNT_API_TOKEN,
    baseUrl: 'https://api.freelancehunt.com/v2'
  },
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development'
  }
}; 