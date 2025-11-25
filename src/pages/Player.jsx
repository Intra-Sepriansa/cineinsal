import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import PlayerShell from '../components/player/PlayerShell';
import PlayerInfoBar from '../components/player/PlayerInfoBar';
import VideoTabs from '../components/player/VideoTabs';
import EpisodeList from '../components/player/EpisodeList';
import KeyboardShortcutsHint from '../components/player/KeyboardShortcutsHint';
import videoService from '../services/videoService';
import LoadingOverlay from '../components/common/LoadingOverlay';

const Player = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideo = async () => {
      setLoading(true);
      try {
        const v = await videoService.getById(id);
        setVideo(v);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadVideo();
  }, [id]);

  if (loading) return <LoadingOverlay open={true} />;
  if (!video) return <Box>Video not found</Box>;

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          <PlayerShell videoUrl={video.videoUrl} />
          <PlayerInfoBar video={video} />
          <KeyboardShortcutsHint />
          <VideoTabs video={video} />
        </Grid>
        <Grid item xs={12} lg={3}>
          {/* Mock episodes for now */}
          <EpisodeList
            episodes={[video, video, video]}
            currentEpisodeId={video.id}
            onEpisodeSelect={(ep) => console.log(ep)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Player;
