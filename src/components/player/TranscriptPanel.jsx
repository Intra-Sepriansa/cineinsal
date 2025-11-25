import React from 'react';
import { Box, Typography } from '@mui/material';

const TranscriptPanel = ({ videoId }) => {
  // Mock transcript data
  return (
    <Box>
      <Typography variant="body2" paragraph>
        [00:00] Welcome to this tutorial.
      </Typography>
      <Typography variant="body2" paragraph>
        [00:15] Today we are going to discuss React components.
      </Typography>
      <Typography variant="body2" paragraph>
        [01:30] Let's look at the code structure.
      </Typography>
    </Box>
  );
};

export default TranscriptPanel;
