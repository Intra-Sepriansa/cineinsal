import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoCard from '../../components/common/VideoCard';

const mockVideo = {
  id: '1',
  title: 'Test Video',
  thumbnailUrl: 'http://example.com/thumb.jpg',
  views: '100',
  category: 'Action',
  duration: 120,
};

test('renders video card with title', () => {
  render(
    <BrowserRouter>
      <VideoCard video={mockVideo} />
    </BrowserRouter>
  );
  const titleElement = screen.getByText(/Test Video/i);
  expect(titleElement).toBeInTheDocument();
});
