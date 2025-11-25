import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import { VideoProvider } from '../../context/VideoContext';

// Mock child components to simplify test
jest.mock('../../components/home/HeroSection', () => () => <div>Hero Section</div>);
jest.mock('../../components/home/VideoRow', () => () => <div>Video Row</div>);

test('renders home page', () => {
  render(
    <BrowserRouter>
      <VideoProvider>
        <Home />
      </VideoProvider>
    </BrowserRouter>
  );
  // Check for main sections
  expect(screen.getByText('Hero Section')).toBeInTheDocument();
});
