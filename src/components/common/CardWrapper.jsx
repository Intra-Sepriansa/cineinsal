import React from 'react';
import { Paper } from '@mui/material';

const CardWrapper = ({ children, ...props }) => {
  return (
    <Paper sx={{ p: 2, borderRadius: 2 }} elevation={1} {...props}>
      {children}
    </Paper>
  );
};

export default CardWrapper;
