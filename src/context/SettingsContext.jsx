import React, { createContext, useState } from 'react';
import settingsService from '../services/settingsService';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({});

  const updateSettings = async (newSettings) => {
    const updated = await settingsService.updateSettings(newSettings);
    setSettings(updated);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
