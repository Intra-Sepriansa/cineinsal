import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

const WatchHistoryList = ({ history }) => {
  const navigate = useNavigate();

  if (!history || history.length === 0) {
    return <Typography color="text.secondary">No watch history yet.</Typography>;
  }

  return (
    <List>
      {history.map((item) => (
        <ListItem
          key={item.id}
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
          sx={{ bgcolor: 'background.paper', mb: 1, borderRadius: 1 }}
        >
          <ListItemAvatar sx={{ cursor: 'pointer' }} onClick={() => navigate(`/watch/${item.videoId}`)}>
            <Avatar variant="rounded" src={item.thumbnailUrl} sx={{ width: 120, height: 68, mr: 2 }}>
              <PlayArrowIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            secondary={`Watched on ${new Date(item.watchedAt).toLocaleDateString()}`}
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate(`/watch/${item.videoId}`)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default WatchHistoryList;
