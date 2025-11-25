import React from 'react';
import { Box, Chip } from '@mui/material';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1.5, overflowX: 'auto', py: 2, mb: 4, scrollbarWidth: 'none' }}>
      {categories.map((category) => (
        <Chip
          key={category.id}
          label={category.name}
          onClick={() => onSelectCategory(category.slug)}
          color={selectedCategory === category.slug ? 'primary' : 'default'}
          variant={selectedCategory === category.slug ? 'filled' : 'outlined'}
          sx={{ fontSize: '0.95rem', py: 2.5, px: 1 }}
          clickable
        />
      ))}
    </Box>
  );
};

export default CategoryFilter;
