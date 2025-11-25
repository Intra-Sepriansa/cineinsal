import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import SocialLoginButtons from '../components/auth/SocialLoginButtons';
import AuthHeader from '../components/auth/AuthHeader';
import { Box } from '@mui/material';

const Login = () => {
  return (
    <Box>
      <AuthHeader />
      <LoginForm />
      <SocialLoginButtons />
    </Box>
  );
};

export default Login;
