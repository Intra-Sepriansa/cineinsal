import React from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { SORT_OPTIONS } from '../../utils/constants';

const SortDropdown = ({ value, onChange }) => {
  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="sort-select-label">Sort By</InputLabel>
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={value}
        label="Sort By"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value={SORT_OPTIONS.NEWEST}>Newest</MenuItem>
        <MenuItem value={SORT_OPTIONS.POPULAR}>Popular</MenuItem>
        <MenuItem value={SORT_OPTIONS.OLDEST}>Oldest</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
