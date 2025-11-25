import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchSuggestions = ({ suggestions, onSelect }) => {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <Paper sx={{ position: 'absolute', width: '100%', zIndex: 10, mt: 1 }}>
      <List>
        {suggestions.map((suggestion, index) => (
          <ListItem button key={index} onClick={() => onSelect(suggestion)}>
            <ListItemIcon>
              <SearchIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={suggestion} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SearchSuggestions;
