import React from 'react';
import { Box, Paper } from '@mui/material';

const PlayerShell = ({ videoUrl }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: 'relative',
        paddingTop: '56.25%', // 16:9 Aspect Ratio
        bgcolor: 'black',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        component="iframe"
        src={videoUrl}
        title="Video Player"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Paper>
  );
};

export default PlayerShell;
