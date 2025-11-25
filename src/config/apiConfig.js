const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.cineinsal.mock',
  timeout: 10000,
  endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
      me: '/auth/me',
    },
    videos: {
      list: '/videos',
      detail: (id) => `/videos/${id}`,
      trending: '/videos/trending',
      recommended: '/videos/recommended',
    },
    users: {
      profile: '/users/profile',
      update: '/users/update',
    },
  },
};

export default apiConfig;
