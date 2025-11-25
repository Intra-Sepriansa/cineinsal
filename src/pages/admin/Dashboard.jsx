import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import DashboardStats from '../../components/admin/DashboardStats';
import AdminHeader from '../../components/admin/AdminHeader';
import VideoTable from '../../components/admin/VideoTable';
import UserTable from '../../components/admin/UserTable';
import { useVideos } from '../../hooks/useVideos';

const Dashboard = () => {
  const { videos } = useVideos();
  
  // Mock recent videos
  const recentVideos = videos.slice(0, 5);

  return (
    <Box>
      <AdminHeader title="Dashboard" />
      <DashboardStats />
      
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Videos
            </Typography>
            <VideoTable videos={recentVideos} />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              New Users
            </Typography>
            <UserTable />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
