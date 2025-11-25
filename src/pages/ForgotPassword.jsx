import React from 'react';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';
import AuthHeader from '../components/auth/AuthHeader';
import { Box } from '@mui/material';

const ForgotPassword = () => {
  return (
    <Box>
      <AuthHeader />
      <ForgotPasswordForm />
    </Box>
  );
};

export default ForgotPassword;
