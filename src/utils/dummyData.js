export const generateDummyVideos = (count = 10) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `v${i + 1}`,
    title: `Video Title ${i + 1}`,
    description: `This is a description for video ${i + 1}. It is very interesting.`,
    thumbnailUrl: 'https://via.placeholder.com/300x169',
    duration: 120 + i * 10,
    views: 1000 + i * 50,
    uploadedAt: new Date().toISOString(),
  }));
};
