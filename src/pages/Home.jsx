import React, { useEffect } from 'react';
import { useVideos } from '../hooks/useVideos';
import HeroSection from '../components/home/HeroSection';
import CategoryFilter from '../components/home/CategoryFilter';
import ContinueWatchingRow from '../components/home/ContinueWatchingRow';
import TrendingRow from '../components/home/TrendingRow';
import NewReleasesRow from '../components/home/NewReleasesRow';
import RecommendedRow from '../components/home/RecommendedRow';
import LoadingOverlay from '../components/common/LoadingOverlay';
import { Box } from '@mui/material';
import { VIDEO_CATEGORIES } from '../utils/constants';

const Home = () => {
  const {
    videos,
    trending,
    recommended,
    isLoading,
    fetchVideos,
    fetchTrending,
    fetchRecommended,
  } = useVideos();

  useEffect(() => {
    fetchVideos();
    fetchTrending();
    fetchRecommended();
  }, [fetchVideos, fetchTrending, fetchRecommended]);

  if (isLoading) return <LoadingOverlay open={true} />;

  // Mock featured video
  const featuredVideo = videos.length > 0 ? videos[0] : null;
  
  // Mock continue watching
  const continueWatching = videos.slice(0, 4);

  return (
    <Box sx={{ bgcolor: '#141414', minHeight: '100vh', pb: 8 }}>
      <HeroSection featuredVideo={featuredVideo} />
      
      <Box sx={{ mt: -10, position: 'relative', zIndex: 2, background: 'transparent' }}>
        <Box sx={{ px: { xs: 2, md: 6 }, mb: 4 }}>
          <CategoryFilter
            categories={[{ id: 'all', name: 'All', slug: 'all' }, ...VIDEO_CATEGORIES]}
            selectedCategory="all"
            onSelectCategory={(cat) => console.log(cat)}
          />
        </Box>
        
        <ContinueWatchingRow videos={continueWatching} />
        <TrendingRow videos={trending} />
        <NewReleasesRow videos={videos.slice(0, 4)} />
        <RecommendedRow videos={recommended} />
      </Box>
    </Box>
  );
};

export default Home;
