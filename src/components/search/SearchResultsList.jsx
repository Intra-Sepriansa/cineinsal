import React from 'react';
import { Box, Typography } from '@mui/material';
import VideoCard from '../common/VideoCard';
import { Grid } from '@mui/material';

const SearchResultsList = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          No results found. Try different keywords.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {results.map((video) => (
        <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResultsList;
