import React, { createContext, useReducer, useEffect } from 'react';
import { authReducer, initialAuthState } from '../store/authStore';
import authService from '../services/authService';
import { getToken, setToken, removeToken, getUser, setUser, removeUser } from '../utils/storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const initAuth = async () => {
      const token = getToken();
      const user = getUser();
      if (token && user) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    initAuth();
  }, []);

  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const { user, token } = await authService.login(email, password);
      setToken(token);
      setUser(user);
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
      return user;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
      throw error;
    }
  };

  const logout = async () => {
    await authService.logout();
    removeToken();
    removeUser();
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (data) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const { user, token } = await authService.register(data);
      setToken(token);
      setUser(user);
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
      return user;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
