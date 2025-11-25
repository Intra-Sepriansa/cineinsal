import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <PageContainer title="About CineInSal">
      <Box sx={{ maxWidth: 800 }}>
        <Typography variant="h6" gutterBottom>
          Our Mission
        </Typography>
        <Typography paragraph>
          CineInSal is dedicated to providing high-quality educational and entertainment content to viewers around the world. We believe in the power of storytelling to inspire, educate, and connect people.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Our Story
        </Typography>
        <Typography paragraph>
          Founded in 2023, CineInSal started as a small project to share local indie films. Today, we have grown into a platform hosting thousands of videos across various genres, supporting creators and delighting audiences.
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default About;
