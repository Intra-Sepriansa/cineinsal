import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, IconButton, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { formatDuration } from '../../utils/formatTime';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  // Use a timeout to prevent flickering on quick mouse movements
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
        zIndex: isHovered ? 10 : 1,
        transition: 'all 0.3s ease-in-out',
        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
        transformOrigin: 'center center',
      }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#141414',
          boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.7)' : 'none',
          borderRadius: 1,
          position: isHovered ? 'absolute' : 'relative',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: isHovered ? '300px' : 'auto',
        }}
        onClick={() => !isHovered && navigate(`/watch/${video.id}`)}
      >
        <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
          <CardMedia
            component="img"
            image={video.thumbnailUrl}
            alt={video.title}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px 4px 0 0',
            }}
          />
          {!isHovered && (
             <Typography
             variant="caption"
             sx={{
               position: 'absolute',
               bottom: 8,
               right: 8,
               bgcolor: 'rgba(0,0,0,0.7)',
               color: 'white',
               px: 0.5,
               borderRadius: 0.5,
               fontWeight: 600,
             }}
           >
             {formatDuration(video.duration)}
           </Typography>
          )}
        </Box>

        {isHovered && (
          <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              <IconButton 
                size="small" 
                sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#e6e6e6' } }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/watch/${video.id}`);
                }}
              >
                <PlayArrowIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ border: '1px solid rgba(255,255,255,0.5)', color: 'white' }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ border: '1px solid rgba(255,255,255,0.5)', color: 'white' }}
              >
                <ThumbUpOffAltIcon fontSize="small" />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton 
                size="small" 
                sx={{ border: '1px solid rgba(255,255,255,0.5)', color: 'white' }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/watch/${video.id}`);
                }}
              >
                <KeyboardArrowDownIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#46d369', mb: 0.5 }}>
              98% Match <Typography component="span" variant="caption" sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.4)', px: 0.5, ml: 1 }}>HD</Typography>
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
              <Typography variant="caption" sx={{ color: 'white' }}>{video.category}</Typography>
              <Typography variant="caption" sx={{ color: 'gray' }}>•</Typography>
              <Typography variant="caption" sx={{ color: 'white' }}>{formatDuration(video.duration)}</Typography>
            </Stack>
            
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {video.title}
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
};

export default VideoCard;
