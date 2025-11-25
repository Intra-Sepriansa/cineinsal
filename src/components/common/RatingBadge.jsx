import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const RatingBadge = ({ rating }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255, 193, 7, 0.1)', px: 1, borderRadius: 1 }}>
      <StarIcon sx={{ color: '#ffc107', fontSize: 16, mr: 0.5 }} />
      <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#ffc107' }}>
        {rating}
      </Typography>
    </Box>
  );
};

export default RatingBadge;
