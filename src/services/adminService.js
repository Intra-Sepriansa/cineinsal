import videos from '../mocks/videos.json';
import userMock from '../mocks/user.json';
import logs from '../mocks/logs.json';

const adminService = {
  getStats: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      totalUsers: 1250,
      totalVideos: 450,
      activeSubscriptions: 890,
      revenue: 12500,
    };
  },
  getVideos: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return videos;
  },
  getUsers: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [userMock, { ...userMock, id: 'u2', name: 'Jane Doe', role: 'admin' }];
  },
  getLogs: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return logs;
  },
};

export default adminService;
