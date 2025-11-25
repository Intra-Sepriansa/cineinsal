import React, { useEffect, useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import subscriptionService from '../services/subscriptionService';

const Subscription = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const loadPlans = async () => {
      const p = await subscriptionService.getPlans();
      setPlans(p);
    };
    loadPlans();
  }, []);

  return (
    <PageContainer title="Subscription Plans">
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan) => (
          <Grid item key={plan.id} xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: plan.isPopular ? '2px solid' : 'none',
                borderColor: 'primary.main',
                position: 'relative',
              }}
            >
              {plan.isPopular && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  Popular
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="h3" component="div" fontWeight="bold" sx={{ my: 2 }}>
                  ${plan.price}
                  <Typography variant="caption" color="text.secondary">
                    /month
                  </Typography>
                </Typography>
                <Box sx={{ textAlign: 'left', my: 4 }}>
                  {plan.features.map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CheckIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button variant="contained" fullWidth size="large">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Subscription;
