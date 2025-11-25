import React from 'react';
import VideoRow from './VideoRow';

const TrendingRow = ({ videos }) => {
  return <VideoRow title="Trending Now" videos={videos} />;
};

export default TrendingRow;
