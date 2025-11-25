import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const TabNavigation = ({ tabs, activeTab, onChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
      <Tabs value={activeTab} onChange={onChange} aria-label="tabs">
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabNavigation;
