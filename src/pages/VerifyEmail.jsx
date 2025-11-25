import React from 'react';
import VerifyEmailNotice from '../components/auth/VerifyEmailNotice';
import AuthHeader from '../components/auth/AuthHeader';
import { Box } from '@mui/material';

const VerifyEmail = () => {
  return (
    <Box>
      <AuthHeader />
      <VerifyEmailNotice />
    </Box>
  );
};

export default VerifyEmail;
