import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to CineInSal!
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Discover a world of entertainment and education. Personalize your experience to get started.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/')}
          sx={{ mt: 4 }}
        >
          Start Watching
        </Button>
      </Container>
    </Box>
  );
};

export default Onboarding;
