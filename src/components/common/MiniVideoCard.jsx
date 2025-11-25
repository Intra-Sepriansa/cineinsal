import React from 'react';
import { Card, Box, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MiniVideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ display: 'flex', mb: 2, cursor: 'pointer', bgcolor: 'transparent', boxShadow: 'none' }}
      onClick={() => navigate(`/watch/${video.id}`)}
    >
      <CardMedia
        component="img"
        sx={{ width: 160, borderRadius: 1 }}
        image={video.thumbnailUrl}
        alt={video.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', p: '0 !important' }}>
          <Typography component="div" variant="subtitle2" sx={{ fontWeight: 'bold' }}>
            {video.title}
          </Typography>
          <Typography variant="caption" color="text.secondary" component="div">
            {video.views} views • 2 days ago
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MiniVideoCard;
