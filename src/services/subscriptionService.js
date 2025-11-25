import plans from '../mocks/plans.json';
import subscriptions from '../mocks/subscriptions.json';

const subscriptionService = {
  getPlans: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return plans;
  },
  getCurrentSubscription: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return subscriptions.activePlan;
  },
  subscribe: async (planId) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { status: 'active', planId };
  },
  cancelSubscription: async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { status: 'canceled' };
  },
};

export default subscriptionService;
