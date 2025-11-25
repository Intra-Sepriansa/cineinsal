import videos from '../mocks/videos.json';

const videoService = {
  getAll: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return videos;
  },
  getById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return videos.find((v) => v.id === id) || null;
  },
  getTrending: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return videos.filter((v) => v.isTrending);
  },
  getRecommended: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return videos.slice(0, 4); // Just return first 4 as recommended
  },
  getByCategory: async (category) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    if (category === 'all') return videos;
    return videos.filter((v) => v.category === category);
  },
};

export default videoService;
