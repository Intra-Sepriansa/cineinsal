import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import { Box, Typography, Switch, FormControlLabel, Divider, Button } from '@mui/material';
import { useUI } from '../hooks/useUI';

const Settings = () => {
  const { theme, setTheme } = useUI();

  return (
    <PageContainer title="Settings">
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="h6" gutterBottom>
          Appearance
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={theme === 'dark'}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          }
          label="Dark Mode"
        />

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          Playback
        </Typography>
        <FormControlLabel control={<Switch defaultChecked />} label="Autoplay next episode" />
        <FormControlLabel control={<Switch defaultChecked />} label="Show subtitles by default" />

        <Divider sx={{ my: 4 }} />

        <Button variant="contained" color="primary">
          Save Settings
        </Button>
      </Box>
    </PageContainer>
  );
};

export default Settings;
