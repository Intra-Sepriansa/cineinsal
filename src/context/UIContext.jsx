import React, { createContext, useReducer } from 'react';
import { uiReducer, initialUIState } from '../store/uiStore';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialUIState);

  const toggleSidebar = () => dispatch({ type: 'TOGGLE_SIDEBAR' });
  const setTheme = (theme) => dispatch({ type: 'SET_THEME', payload: theme });
  const setLoading = (isLoading) => dispatch({ type: 'SET_LOADING', payload: isLoading });
  const showToast = (message, type = 'info') =>
    dispatch({ type: 'SHOW_TOAST', payload: { message, type } });
  const hideToast = () => dispatch({ type: 'HIDE_TOAST' });

  return (
    <UIContext.Provider
      value={{ ...state, toggleSidebar, setTheme, setLoading, showToast, hideToast }}
    >
      {children}
    </UIContext.Provider>
  );
};
