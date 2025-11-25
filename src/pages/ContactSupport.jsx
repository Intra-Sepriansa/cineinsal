import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import { Box, TextField, Button, Alert } from '@mui/material';

const ContactSupport = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageContainer title="Contact Support">
        <Alert severity="success">
          Thank you for contacting us! We have received your message and will get back to you shortly.
        </Alert>
      </PageContainer>
    );
  }

  return (
    <PageContainer title="Contact Support">
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
        <TextField fullWidth label="Name" margin="normal" required />
        <TextField fullWidth label="Email" margin="normal" required type="email" />
        <TextField fullWidth label="Subject" margin="normal" required />
        <TextField
          fullWidth
          label="Message"
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </PageContainer>
  );
};

export default ContactSupport;
