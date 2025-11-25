import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import TranscriptPanel from './TranscriptPanel';
import NotesPanel from './NotesPanel';

const VideoTabs = ({ video }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="video tabs">
          <Tab label="Description" />
          <Tab label="Transcript" />
          <Tab label="Notes" />
        </Tabs>
      </Box>
      <Box sx={{ p: 3 }}>
        {value === 0 && (
          <Typography variant="body1" color="text.secondary">
            {video.description}
          </Typography>
        )}
        {value === 1 && <TranscriptPanel videoId={video.id} />}
        {value === 2 && <NotesPanel videoId={video.id} />}
      </Box>
    </Box>
  );
};

export default VideoTabs;
