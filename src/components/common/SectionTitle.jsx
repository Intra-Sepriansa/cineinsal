import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
