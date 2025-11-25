import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAuth } from '../../hooks/useAuth';

const TopBar = () => {
  const { user } = useAuth();

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>
            {user?.name}
          </Typography>
          <Avatar src={user?.avatarUrl} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
