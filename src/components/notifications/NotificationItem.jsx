import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, IconButton, Box } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationItem = ({ notification, onMarkRead }) => {
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        bgcolor: notification.read ? 'transparent' : 'action.hover',
        borderRadius: 1,
        mb: 1,
      }}
      secondaryAction={
        !notification.read && (
          <IconButton edge="end" aria-label="mark as read" onClick={onMarkRead}>
            <CircleIcon sx={{ fontSize: 12, color: 'primary.main' }} />
          </IconButton>
        )
      }
    >
      <ListItemAvatar>
        <Avatar>
          <NotificationsIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={notification.title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {notification.message}
            </Typography>
            <br />
            <Typography variant="caption" color="text.secondary">
              {new Date(notification.createdAt).toLocaleString()}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default NotificationItem;
