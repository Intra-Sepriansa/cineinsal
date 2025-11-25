import subscriptions from '../mocks/subscriptions.json';

const billingService = {
  getHistory: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return subscriptions.history;
  },
  downloadInvoice: async (invoiceId) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true; // Simulate download
  },
};

export default billingService;
