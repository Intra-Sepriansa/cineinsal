import logger from './logger';

export const handleError = (error, context = '') => {
  logger.error(`Error in ${context}:`, error);
  // Could add toast notification logic here or return a user-friendly message
  return error.message || 'An unexpected error occurred.';
};
