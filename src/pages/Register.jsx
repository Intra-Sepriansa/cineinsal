import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import SocialLoginButtons from '../components/auth/SocialLoginButtons';
import AuthHeader from '../components/auth/AuthHeader';
import { Box } from '@mui/material';

const Register = () => {
  return (
    <Box>
      <AuthHeader />
      <RegisterForm />
      <SocialLoginButtons />
    </Box>
  );
};

export default Register;
