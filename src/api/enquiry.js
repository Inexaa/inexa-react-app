import axiosInstance from './axiosInstance';

export const submitEnquiry = async (data) => {
  return axiosInstance.post('/enquiries', data);
};

export const checkEnquirySubmission = async (courseId) => {
  return axiosInstance.get(`/enquiries/check/${courseId}`);
};
