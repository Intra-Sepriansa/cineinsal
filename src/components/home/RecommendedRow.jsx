import React from 'react';
import VideoRow from './VideoRow';

const RecommendedRow = ({ videos }) => {
  return <VideoRow title="Recommended for You" videos={videos} />;
};

export default RecommendedRow;
