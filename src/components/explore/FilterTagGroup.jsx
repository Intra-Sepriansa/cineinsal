import React from 'react';
import { Box, Chip } from '@mui/material';

import { VIDEO_CATEGORIES } from '../../utils/constants';

const FilterTagGroup = ({ filters, onFilterChange }) => {
  // Combine static options with dynamic categories
  const options = [
    { label: 'All', value: 'all' },
    { label: 'Free', value: 'free' },
    { label: 'Premium', value: 'premium' },
    ...VIDEO_CATEGORIES.map(cat => ({ label: cat.name, value: cat.id }))
  ];

  return (
    <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', pb: 1, maxWidth: '100%', '::-webkit-scrollbar': { display: 'none' } }}>
      {options.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          onClick={() => onFilterChange(option.value)}
          color={filters === option.value ? 'primary' : 'default'}
          variant={filters === option.value ? 'filled' : 'outlined'}
          clickable
          sx={{ 
            bgcolor: filters === option.value ? 'primary.main' : 'rgba(255,255,255,0.1)',
            color: 'white',
            border: 'none',
            '&:hover': { bgcolor: filters === option.value ? 'primary.dark' : 'rgba(255,255,255,0.2)' }
          }}
        />
      ))}
    </Box>
  );
};

export default FilterTagGroup;
