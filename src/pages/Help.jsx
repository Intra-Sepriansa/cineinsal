import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();

  return (
    <PageContainer title="Help Center">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          How can we help you today?
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent sx={{ py: 4 }}>
              <HelpOutlineIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Frequently Asked Questions
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Find answers to common questions about subscriptions, playback, and account management.
              </Typography>
              <Button variant="outlined" onClick={() => navigate('/faq')}>
                View FAQs
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent sx={{ py: 4 }}>
              <SupportAgentIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Contact Support
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Need personalized assistance? Our support team is here to help you 24/7.
              </Typography>
              <Button variant="outlined" onClick={() => navigate('/contact')}>
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Help;
