const isLocal = window.location.hostname === 'localhost';

export const apiEndpoints = {
  PRODUCTS: isLocal ? "http://localhost:3001/api/products" : `https://poppara-server.vercel.app/api/products`,
  SUPPORT_BOT: isLocal ? "http://localhost:3001/api/supportBot" : `https://poppara-server.vercel.app/api/supportBot`,
  LOGIN: isLocal ? "http://localhost:3001/api/login" : `https://poppara-server.vercel.app/api/login`,
};
