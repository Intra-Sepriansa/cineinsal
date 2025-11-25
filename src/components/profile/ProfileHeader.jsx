import React from 'react';
import { Box, Avatar, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProfileHeader = ({ user }) => {
  if (!user) return null;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Avatar
        src={user.avatarUrl}
        alt={user.name}
        sx={{ width: 100, height: 100, mr: 3 }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" fontWeight="bold">
          {user.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Member since {new Date().getFullYear()}
        </Typography>
      </Box>
      <Button variant="outlined" startIcon={<EditIcon />}>
        Edit Profile
      </Button>
    </Box>
  );
};

export default ProfileHeader;
