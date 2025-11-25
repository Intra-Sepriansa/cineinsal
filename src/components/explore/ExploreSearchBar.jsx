import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ExploreSearchBar = ({ value, onChange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: 600, mb: 4 }}
      onSubmit={(e) => { e.preventDefault(); onSearch(); }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search videos, categories, channels..."
        inputProps={{ 'aria-label': 'search videos' }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default ExploreSearchBar;
