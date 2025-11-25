import { useContext } from 'react';
import { VideoContext } from '../context/VideoContext';

export const useVideos = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideos must be used within a VideoProvider');
  }
  return context;
};
