const TOKEN_KEY = 'cineinsal_token';
const USER_KEY = 'cineinsal_user';
const THEME_KEY = 'cineinsal_theme';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const getUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};
export const setUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user));
export const removeUser = () => localStorage.removeItem(USER_KEY);

export const getTheme = () => localStorage.getItem(THEME_KEY) || 'dark';
export const setTheme = (theme) => localStorage.setItem(THEME_KEY, theme);
