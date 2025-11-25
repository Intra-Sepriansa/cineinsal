import videos from '../mocks/videos.json';

const searchService = {
  search: async (query) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const lowerQuery = query.toLowerCase();
    return videos.filter((v) => v.title.toLowerCase().includes(lowerQuery));
  },
  getSuggestions: async (query) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    if (!query) return [];
    return ['React', 'AI', 'Comedy', 'Documentary'].filter((s) =>
      s.toLowerCase().includes(query.toLowerCase())
    );
  },
};

export default searchService;
