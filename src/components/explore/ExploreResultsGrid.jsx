import React from 'react';
import { Grid, Typography } from '@mui/material';
import VideoCard from '../common/VideoCard';
import EmptyState from '../common/EmptyState';

const ExploreResultsGrid = ({ videos, isLoading }) => {
  if (!isLoading && (!videos || videos.length === 0)) {
    return <EmptyState message="No videos found matching your criteria" />;
  }

  return (
    <Grid container spacing={3}>
      {videos.map((video) => (
        <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExploreResultsGrid;
