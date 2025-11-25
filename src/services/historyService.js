import history from '../mocks/history.json';

const historyService = {
  getHistory: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return history;
  },
  addToHistory: async (videoId) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return true;
  },
  clearHistory: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  },
};

export default historyService;
