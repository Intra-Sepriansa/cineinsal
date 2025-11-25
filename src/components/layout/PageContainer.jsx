import React from 'react';
import { Container, Box } from '@mui/material';
import Breadcrumbs from './Breadcrumbs';

const PageContainer = ({ children, title, breadcrumbs = true }) => {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {breadcrumbs && <Breadcrumbs />}
      {title && (
        <Box sx={{ mb: 3 }}>
          <h1>{title}</h1>
        </Box>
      )}
      {children}
    </Container>
  );
};

export default PageContainer;
