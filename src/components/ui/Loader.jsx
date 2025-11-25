import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = ({ size = 40, color = 'primary', fullScreen = false }) => {
  if (fullScreen) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          bgcolor: 'background.default',
        }}
      >
        <CircularProgress size={size} color={color} />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <CircularProgress size={size} color={color} />
    </Box>
  );
};

export default Loader;
