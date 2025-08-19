// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Example: attach token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Handle known errors
      if (error.response.status === 401) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        window.dispatchEvent(new Event('show-login-popup'));
        // Optionally redirect to login
      } else if (error.response.status === 500) {
        console.error('Server error:', error.response.data);
      }
    } else {
      console.error('Network error or server not reachable');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
