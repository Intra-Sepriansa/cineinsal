import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import { AuthProvider } from '../../context/AuthContext';
import { UIProvider } from '../../context/UIContext';

test('renders navbar with logo', () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <UIProvider>
          <Navbar />
        </UIProvider>
      </AuthProvider>
    </BrowserRouter>
  );
  const logoElement = screen.getByText(/CineInSal/i);
  expect(logoElement).toBeInTheDocument();
});
