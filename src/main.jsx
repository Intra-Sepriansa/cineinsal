import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/theme.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import muiTheme from './config/muiTheme';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UIProvider } from './context/UIContext';
import { VideoProvider } from './context/VideoContext';
import { NotificationProvider } from './context/NotificationContext';
import { SearchProvider } from './context/SearchContext';
import { SubscriptionProvider } from './context/SubscriptionContext';
import { PlayerProvider } from './context/PlayerContext';
import { SettingsProvider } from './context/SettingsContext';
import { ToastContainer } from './components/toasts/ToastContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <AuthProvider>
          <UIProvider>
            <SettingsProvider>
              <NotificationProvider>
                <SubscriptionProvider>
                  <VideoProvider>
                    <SearchProvider>
                      <PlayerProvider>
                        <App />
                        <ToastContainer />
                      </PlayerProvider>
                    </SearchProvider>
                  </VideoProvider>
                </SubscriptionProvider>
              </NotificationProvider>
            </SettingsProvider>
          </UIProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
