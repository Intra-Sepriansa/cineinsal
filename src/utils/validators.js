export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

export const minLength = (value, min) => {
  return value && value.length >= min;
};
