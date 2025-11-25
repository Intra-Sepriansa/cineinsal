import notifications from '../mocks/notifications.json';

const notificationService = {
  getAll: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return notifications;
  },
  markAsRead: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return true;
  },
  markAllAsRead: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  },
};

export default notificationService;
