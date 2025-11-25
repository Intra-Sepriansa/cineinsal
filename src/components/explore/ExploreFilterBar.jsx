import React from 'react';
import { Box } from '@mui/material';
import SortDropdown from './SortDropdown';
import FilterTagGroup from './FilterTagGroup';

const ExploreFilterBar = ({ sort, onSortChange, filters, onFilterChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
      <FilterTagGroup filters={filters} onFilterChange={onFilterChange} />
      <SortDropdown value={sort} onChange={onSortChange} />
    </Box>
  );
};

export default ExploreFilterBar;
