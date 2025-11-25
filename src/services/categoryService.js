import categories from '../mocks/categories.json';

const categoryService = {
  getAll: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return categories;
  },
};

export default categoryService;
