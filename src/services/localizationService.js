const localizationService = {
  getLocale: () => {
    return localStorage.getItem('cineinsal_lang') || 'en';
  },
  setLocale: (lang) => {
    localStorage.setItem('cineinsal_lang', lang);
    window.location.reload(); // Simple reload to apply changes
  },
};

export default localizationService;
