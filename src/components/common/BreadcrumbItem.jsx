import React from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const BreadcrumbItem = ({ to, label }) => {
  return (
    <Link component={RouterLink} underline="hover" color="inherit" to={to}>
      {label}
    </Link>
  );
};

export default BreadcrumbItem;
