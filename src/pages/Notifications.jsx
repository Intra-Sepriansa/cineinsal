import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import NotificationList from '../components/notifications/NotificationList';
import { useNotifications } from '../hooks/useNotifications';

const Notifications = () => {
  const { notifications, markAsRead, markAllAsRead } = useNotifications();

  return (
    <PageContainer title="Notifications">
      <NotificationList
        notifications={notifications}
        onMarkRead={markAsRead}
        onMarkAllRead={markAllAsRead}
      />
    </PageContainer>
  );
};

export default Notifications;
