import React from 'react';
import AppRoutes from './routes/AppRoutes';
import LoadingOverlay from './components/common/LoadingOverlay';
import { useUI } from './hooks/useUI';

function App() {
  const { isLoading } = useUI();

  return (
    <>
      <AppRoutes />
      {isLoading && <LoadingOverlay open={true} />}
    </>
  );
}

export default App;
