import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, bgcolor: 'background.paper', mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              CineInSal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Edu-tainment streaming platform.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links
            </Typography>
            <Link href="/" color="inherit" display="block">Home</Link>
            <Link href="/explore" color="inherit" display="block">Explore</Link>
            <Link href="/about" color="inherit" display="block">About Us</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Link href="/privacy" color="inherit" display="block">Privacy Policy</Link>
            <Link href="/terms" color="inherit" display="block">Terms of Service</Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://cineinsal.com/">
              CineInSal
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
