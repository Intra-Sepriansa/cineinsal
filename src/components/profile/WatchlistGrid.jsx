import React from 'react';
import { Grid, Typography } from '@mui/material';
import VideoCard from '../common/VideoCard';

const WatchlistGrid = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <Typography color="text.secondary">Your watchlist is empty.</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {videos.map((video) => (
        <Grid item key={video.id} xs={12} sm={6} md={4}>
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WatchlistGrid;
