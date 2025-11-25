import React from 'react';
import VideoRow from './VideoRow';

const NewReleasesRow = ({ videos }) => {
  return <VideoRow title="New Releases" videos={videos} />;
};

export default NewReleasesRow;
