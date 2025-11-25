import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const KeyboardShortcutsHint = () => {
  const shortcuts = [
    { key: 'Space', action: 'Play/Pause' },
    { key: '←/→', action: 'Seek 5s' },
    { key: 'F', action: 'Fullscreen' },
  ];

  return (
    <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
        Shortcuts:
      </Typography>
      {shortcuts.map((s) => (
        <Box key={s.key} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Chip label={s.key} size="small" variant="outlined" sx={{ height: 20, fontSize: '0.7rem' }} />
          <Typography variant="caption" color="text.secondary">
            {s.action}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default KeyboardShortcutsHint;
