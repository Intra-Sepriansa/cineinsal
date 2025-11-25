import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const EpisodeList = ({ episodes, currentEpisodeId, onEpisodeSelect }) => {
  if (!episodes || episodes.length === 0) return null;

  return (
    <Paper sx={{ maxHeight: 400, overflow: 'auto' }}>
      <List>
        {episodes.map((episode, index) => (
          <ListItem
            button
            key={episode.id}
            selected={episode.id === currentEpisodeId}
            onClick={() => onEpisodeSelect(episode)}
          >
            <ListItemAvatar>
              <Avatar variant="rounded" src={episode.thumbnailUrl}>
                <PlayArrowIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Ep ${index + 1}: ${episode.title}`}
              secondary={`${Math.floor(episode.duration / 60)} mins`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default EpisodeList;
