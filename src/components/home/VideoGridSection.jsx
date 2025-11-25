import React from 'react';
import { Grid, Box } from '@mui/material';
import VideoCard from '../common/VideoCard';
import SectionTitle from '../common/SectionTitle';

const VideoGridSection = ({ title, videos }) => {
  return (
    <Box sx={{ mb: 6 }}>
      <SectionTitle title={title} />
      <Grid container spacing={3}>
        {videos.map((video) => (
          <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoGridSection;
