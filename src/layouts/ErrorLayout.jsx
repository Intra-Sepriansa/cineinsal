import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorLayout = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Outlet />
        <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 4 }}>
          Go Home
        </Button>
      </Container>
    </Box>
  );
};

export default ErrorLayout;
