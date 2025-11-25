import React from 'react';
import VideoRow from './VideoRow';

const ContinueWatchingRow = ({ videos }) => {
  if (!videos || videos.length === 0) return null;
  return <VideoRow title="Continue Watching" videos={videos} />;
};

export default ContinueWatchingRow;
