const isLocal = window.location.hostname === 'localhost';

export const apiEndpoints = {
  PRODUCTS: isLocal ? "http://localhost:3001/api/products" : `${process.env.REACT_APP_API_URL}/api/products`,
  SUPPORT_BOT: isLocal ? "http://localhost:3001/api/supportBot" : `${process.env.REACT_APP_API_URL}/api/supportBot`,
  LOGIN: isLocal ? "http://localhost:3001/api/login" : `${process.env.REACT_APP_API_URL}/api/login`,
};
