import faqs from '../mocks/faqs.json';

const faqService = {
  getAll: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return faqs;
  },
};

export default faqService;
