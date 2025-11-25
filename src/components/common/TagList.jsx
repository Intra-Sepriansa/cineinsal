import React from 'react';
import { Box, Chip } from '@mui/material';

const TagList = ({ tags }) => {
  return (
    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} size="small" variant="outlined" />
      ))}
    </Box>
  );
};

export default TagList;
