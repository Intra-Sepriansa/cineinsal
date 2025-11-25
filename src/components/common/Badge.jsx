import React from 'react';
import { Chip } from '@mui/material';

const Badge = ({ label, color = 'primary', ...props }) => {
  return <Chip label={label} color={color} size="small" {...props} />;
};

export default Badge;
