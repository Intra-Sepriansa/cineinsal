import { getToken } from '../utils/storage';

export const authMiddleware = (req, next) => {
  const token = getToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  next();
};
