import apiConfig from '../config/apiConfig';
import { getToken } from './storage';

const apiClient = {
  get: async (url, params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${apiConfig.baseUrl}${url}${queryString ? `?${queryString}` : ''}`;
    return fetchWithAuth(fullUrl, { method: 'GET' });
  },
  post: async (url, data = {}) => {
    return fetchWithAuth(`${apiConfig.baseUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  put: async (url, data = {}) => {
    return fetchWithAuth(`${apiConfig.baseUrl}${url}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  delete: async (url) => {
    return fetchWithAuth(`${apiConfig.baseUrl}${url}`, { method: 'DELETE' });
  },
};

async function fetchWithAuth(url, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'API Error');
  }

  return response.json();
}

export default apiClient;
