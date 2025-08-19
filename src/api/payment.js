import axiosInstance from './axiosInstance';

// Sends contact form data to the backend /api/contact endpoint
export const sendPayment = async (data) => {
    return axiosInstance.post('/payment/checkout', data);
};