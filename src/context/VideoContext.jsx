import React, { createContext, useReducer, useCallback } from 'react';
import { videoReducer, initialVideoState } from '../store/videoStore';
import videoService from '../services/videoService';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialVideoState);

  const fetchVideos = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const videos = await videoService.getAll();
      dispatch({ type: 'FETCH_SUCCESS', payload: videos });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: error.message });
    }
  }, []);

  const fetchTrending = useCallback(async () => {
    try {
      const videos = await videoService.getTrending();
      dispatch({ type: 'FETCH_TRENDING_SUCCESS', payload: videos });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchRecommended = useCallback(async () => {
    try {
      const videos = await videoService.getRecommended();
      dispatch({ type: 'FETCH_RECOMMENDED_SUCCESS', payload: videos });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <VideoContext.Provider value={{ ...state, fetchVideos, fetchTrending, fetchRecommended }}>
      {children}
    </VideoContext.Provider>
  );
};
