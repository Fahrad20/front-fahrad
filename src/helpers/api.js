export const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export const api = async (url, cache = 'default', method = 'GET') => {
  const response = await fetch(baseURL + url, {
    method,
    cache,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
};
