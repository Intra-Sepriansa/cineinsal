import React from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const PlayerInfoBar = ({ video }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
      <Box>
        <Typography variant="h5" component="h1" fontWeight="bold">
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.views} views • {new Date(video.uploadedAt).toLocaleDateString()}
        </Typography>
      </Box>
      <Box>
        <Tooltip title="Like">
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Share">
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Save to Watchlist">
          <IconButton>
            <PlaylistAddIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default PlayerInfoBar;
