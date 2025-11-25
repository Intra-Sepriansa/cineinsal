import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import { Grid, Typography, Button, Box, Divider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import VideoCard from '../components/common/VideoCard';
import videoService from '../services/videoService';
import LoadingOverlay from '../components/common/LoadingOverlay';
import { formatDuration } from '../utils/formatTime';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const v = await videoService.getById(id);
        setVideo(v);
        const r = await videoService.getRecommended();
        setRelated(r.slice(0, 4));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (loading) return <LoadingOverlay open={true} />;
  if (!video) return <Typography>Video not found</Typography>;

  return (
    <PageContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              width: '100%',
              height: 400,
              backgroundImage: `url(${video.thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
            }}
          >
             <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'rgba(0,0,0,0.4)',
                  borderRadius: 2,
                }}
              />
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayArrowIcon />}
              onClick={() => navigate(`/play/${video.id}`)}
              sx={{ zIndex: 1, py: 2, px: 4, fontSize: '1.2rem' }}
            >
              Play
            </Button>
          </Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {video.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button startIcon={<AddIcon />} variant="outlined">
              My List
            </Button>
            <Button startIcon={<ShareIcon />} variant="outlined">
              Share
            </Button>
          </Box>
          <Typography variant="body1" paragraph>
            {video.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, color: 'text.secondary', mb: 4 }}>
            <Typography>Duration: {formatDuration(video.duration)}</Typography>
            <Typography>Released: {new Date(video.uploadedAt).getFullYear()}</Typography>
            <Typography>Views: {video.views}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Related Videos
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {related.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Detail;
