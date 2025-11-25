import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          CineInSal
        </Typography>
      </Link>
    </Box>
  );
};

export default AuthHeader;
