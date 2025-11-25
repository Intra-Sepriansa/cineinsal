import analytics from '../mocks/analytics.json';

const analyticsService = {
  getDashboardData: async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return analytics;
  },
};

export default analyticsService;
