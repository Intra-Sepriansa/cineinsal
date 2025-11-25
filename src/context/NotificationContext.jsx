import React, { createContext, useReducer, useEffect } from 'react';
import { notificationReducer, initialNotificationState } from '../store/notificationStore';
import notificationService from '../services/notificationService';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialNotificationState);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await notificationService.getAll();
        dispatch({ type: 'SET_NOTIFICATIONS', payload: data });
      } catch (error) {
        console.error('Failed to load notifications', error);
      }
    };
    loadNotifications();
  }, []);

  const markAsRead = async (id) => {
    await notificationService.markAsRead(id);
    dispatch({ type: 'MARK_READ', payload: id });
  };

  const markAllAsRead = async () => {
    await notificationService.markAllAsRead();
    dispatch({ type: 'MARK_ALL_READ' });
  };

  return (
    <NotificationContext.Provider value={{ ...state, markAsRead, markAllAsRead }}>
      {children}
    </NotificationContext.Provider>
  );
};
