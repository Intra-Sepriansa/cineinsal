import React from 'react';
import { TextField } from '@mui/material';

const FormInput = ({ label, name, value, onChange, error, type = 'text', ...props }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
      type={type}
      {...props}
    />
  );
};

export default FormInput;
