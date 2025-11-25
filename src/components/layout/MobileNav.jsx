import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { mainNavigation, userNavigation } from '../../config/navigation';
import { useNavigate } from 'react-router-dom';

const MobileNav = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {mainNavigation.map((item) => (
            <ListItem button key={item.label} onClick={() => handleNavigate(item.path)}>
              <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <List>
          {userNavigation.map((item) => (
            <ListItem button key={item.label} onClick={() => handleNavigate(item.path)}>
              <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileNav;
