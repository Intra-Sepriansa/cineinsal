import React from 'react';
import { List, Typography, Box, Button } from '@mui/material';
import NotificationItem from './NotificationItem';

const NotificationList = ({ notifications, onMarkRead, onMarkAllRead }) => {
  if (!notifications || notifications.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="text.secondary">No notifications</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button size="small" onClick={onMarkAllRead}>
          Mark all as read
        </Button>
      </Box>
      <List>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkRead={() => onMarkRead(notification.id)}
          />
        ))}
      </List>
    </Box>
  );
};

export default NotificationList;
