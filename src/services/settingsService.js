const settingsService = {
  updateSettings: async (settings) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return settings;
  },
  changePassword: async (oldPassword, newPassword) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return true;
  },
};

export default settingsService;
