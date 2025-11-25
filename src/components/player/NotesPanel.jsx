import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const NotesPanel = ({ videoId }) => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (note.trim()) {
      setNotes([...notes, { id: Date.now(), text: note, timestamp: '00:00' }]);
      setNote('');
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Add a note at current time..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddNote}>
          Add
        </Button>
      </Box>
      <List>
        {notes.map((n) => (
          <ListItem
            key={n.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={n.text} secondary={n.timestamp} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NotesPanel;
