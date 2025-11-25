import React from 'react';
import { Box, Button, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialLoginButtons = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Divider sx={{ mb: 3 }}>OR</Divider>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
          Google
        </Button>
        <Button fullWidth variant="outlined" startIcon={<GitHubIcon />}>
          GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default SocialLoginButtons;
