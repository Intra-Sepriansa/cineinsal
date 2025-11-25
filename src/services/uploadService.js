const uploadService = {
  uploadVideo: async (file, metadata) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { id: 'new_video_1', ...metadata };
  },
  uploadAvatar: async (file) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return 'https://via.placeholder.com/150?text=New+Avatar';
  },
};

export default uploadService;
