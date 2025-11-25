import React, { useEffect, useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import ProfileHeader from '../components/profile/ProfileHeader';
import WatchHistoryList from '../components/profile/WatchHistoryList';
import WatchlistGrid from '../components/profile/WatchlistGrid';
import AccountSettingsForm from '../components/profile/AccountSettingsForm';
import TabNavigation from '../components/common/TabNavigation';
import { useAuth } from '../hooks/useAuth';
import historyService from '../services/historyService';
import videoService from '../services/videoService';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [history, setHistory] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const h = await historyService.getHistory();
      setHistory(h);
      // Mock watchlist
      const w = await videoService.getAll();
      setWatchlist(w.slice(0, 3));
    };
    loadData();
  }, []);

  return (
    <PageContainer title="My Profile">
      <ProfileHeader user={user} />
      <TabNavigation
        tabs={[
          { label: 'Watch History' },
          { label: 'Watchlist' },
          { label: 'Settings' },
        ]}
        activeTab={activeTab}
        onChange={(e, val) => setActiveTab(val)}
      />
      {activeTab === 0 && <WatchHistoryList history={history} />}
      {activeTab === 1 && <WatchlistGrid videos={watchlist} />}
      {activeTab === 2 && <AccountSettingsForm user={user} />}
    </PageContainer>
  );
};

export default Profile;
