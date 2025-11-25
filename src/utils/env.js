export const getEnv = (key, defaultValue = '') => {
  return import.meta.env[key] || defaultValue;
};
