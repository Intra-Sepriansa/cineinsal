import React from 'react';
import { Box, Chip } from '@mui/material';

const ChipFilterGroup = ({ options, selected, onSelect }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
      {options.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          onClick={() => onSelect(option.value)}
          color={selected === option.value ? 'primary' : 'default'}
          variant={selected === option.value ? 'filled' : 'outlined'}
          clickable
        />
      ))}
    </Box>
  );
};

export default ChipFilterGroup;
