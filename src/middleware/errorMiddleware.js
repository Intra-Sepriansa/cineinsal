import { toast } from 'react-toastify'; // Assuming react-toastify or similar

export const errorMiddleware = (error) => {
  console.error('Global Error Handler:', error);
  // toast.error(error.message || 'An unexpected error occurred');
  return Promise.reject(error);
};
