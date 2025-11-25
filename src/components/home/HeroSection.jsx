import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ featuredVideo }) => {
  const navigate = useNavigate();

  if (!featuredVideo) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '85vh' },
        width: '100%',
        backgroundImage: `url(${featuredVideo.thumbnailUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(to bottom, 
            rgba(20,20,20,0.5) 0%, 
            rgba(20,20,20,0) 20%, 
            rgba(20,20,20,0.6) 80%, 
            #141414 100%)`,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)',
        },
      }}
    >
      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, px: { xs: 4, md: 8 }, mt: 10 }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 800,
            mb: 2,
            maxWidth: '800px',
            fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            lineHeight: 1.1,
          }}
        >
          {featuredVideo.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: '600px',
            display: { xs: 'none', md: 'block' },
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            fontSize: '1.2rem',
            fontWeight: 500,
          }}
        >
          {featuredVideo.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrowIcon sx={{ fontSize: '2rem !important' }} />}
            onClick={() => navigate(`/watch/${featuredVideo.id}`)}
            sx={{ 
              px: 4, 
              py: 1.5, 
              fontSize: '1.2rem', 
              bgcolor: 'white', 
              color: 'black',
              fontWeight: 700,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.75)' }
            }}
          >
            Play
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<InfoOutlinedIcon />}
            onClick={() => navigate(`/watch/${featuredVideo.id}`)}
            sx={{ 
              px: 4, 
              py: 1.5, 
              fontSize: '1.2rem', 
              bgcolor: 'rgba(109, 109, 110, 0.7)', 
              color: 'white',
              fontWeight: 700,
              '&:hover': { bgcolor: 'rgba(109, 109, 110, 0.4)' }
            }}
          >
            More Info
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
