import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Switch, FormControlLabel, Divider } from '@mui/material';

const AccountSettingsForm = ({ user }) => {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h6" gutterBottom>
        Account Information
      </Typography>
      <Box component="form" sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Email"
          defaultValue={user?.email}
          margin="normal"
          disabled
        />
        <TextField
          fullWidth
          label="Display Name"
          defaultValue={user?.name}
          margin="normal"
        />
        <Button variant="contained" sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" gutterBottom>
        Preferences
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
          />
        }
        label="Receive email notifications"
      />
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h6" color="error" gutterBottom>
        Danger Zone
      </Typography>
      <Button variant="outlined" color="error">
        Delete Account
      </Button>
    </Box>
  );
};

export default AccountSettingsForm;
