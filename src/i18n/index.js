import en from './locales/en.json';
import id from './locales/id.json';

const translations = {
  en,
  id,
};

let currentLang = 'en';

export const setLanguage = (lang) => {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('cineinsal_lang', lang);
  }
};

export const t = (key) => {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k];
    } else {
      return key;
    }
  }
  return value;
};

export const initI18n = () => {
  const savedLang = localStorage.getItem('cineinsal_lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
};

initI18n();
