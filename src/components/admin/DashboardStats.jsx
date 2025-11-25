import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', height: '100%' }}>
    <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: `${color}20`, mr: 2 }}>
      <Icon sx={{ color: color, fontSize: 32 }} />
    </Box>
    <Box>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        {value}
      </Typography>
    </Box>
  </Paper>
);

const DashboardStats = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Users" value="1,234" icon={PeopleIcon} color="#4F46E5" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Videos" value="456" icon={VideoLibraryIcon} color="#10B981" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Views" value="89.2K" icon={VisibilityIcon} color="#F59E0B" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Revenue" value="$12.4K" icon={AttachMoneyIcon} color="#EC4899" />
      </Grid>
    </Grid>
  );
};

export default DashboardStats;
