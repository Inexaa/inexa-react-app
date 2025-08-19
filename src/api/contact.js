import axiosInstance from './axiosInstance';

// Sends contact form data to the backend /api/contact endpoint
export const sendContactForm = async (data) => {
  return axiosInstance.post('/contact', data);
}; 