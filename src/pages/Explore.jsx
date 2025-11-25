import React, { useEffect } from 'react';
import PageContainer from '../components/layout/PageContainer';
import ExploreSearchBar from '../components/explore/ExploreSearchBar';
import ExploreFilterBar from '../components/explore/ExploreFilterBar';
import ExploreResultsGrid from '../components/explore/ExploreResultsGrid';
import { useSearch } from '../hooks/useSearch';
import { useVideos } from '../hooks/useVideos';
import { Box } from '@mui/material';

const Explore = () => {
  const { query, search, filters, setFilters } = useSearch();
  const { videos, isLoading, fetchVideos } = useVideos();

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  // In a real app, we'd filter on the backend or use the search service results
  // For now, just filtering the loaded videos
  // Filter and sort videos
  const filteredVideos = videos
    .filter(v => {
      // Search query filter
      const matchesQuery = v.title.toLowerCase().includes(query.toLowerCase());
      
      // Category filter
      let matchesCategory = true;
      if (filters.category === 'free') {
        matchesCategory = !v.isPremium;
      } else if (filters.category === 'premium') {
        matchesCategory = v.isPremium;
      } else if (filters.category !== 'all') {
        matchesCategory = v.category === filters.category;
      }

      return matchesQuery && matchesCategory;
    })
    .sort((a, b) => {
      if (filters.sort === 'popular') {
        return b.views - a.views;
      } else if (filters.sort === 'oldest') {
        return new Date(a.uploadedAt) - new Date(b.uploadedAt);
      }
      // Default to newest
      return new Date(b.uploadedAt) - new Date(a.uploadedAt);
    });

  return (
    <PageContainer title="Explore">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ExploreSearchBar
          value={query}
          onChange={(val) => search(val)}
          onSearch={() => search(query)}
        />
      </Box>
      <ExploreFilterBar
        sort={filters.sort}
        onSortChange={(sort) => setFilters({ sort })}
        filters={filters.category}
        onFilterChange={(category) => setFilters({ category })}
      />
      <ExploreResultsGrid videos={filteredVideos} isLoading={isLoading} />
    </PageContainer>
  );
};

export default Explore;
