import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useUI } from '../../hooks/useUI';

const Toast = () => {
  const { toast, hideToast } = useUI();

  if (!toast) return null;

  return (
    <Snackbar open={!!toast} autoHideDuration={6000} onClose={hideToast}>
      <Alert onClose={hideToast} severity={toast.type} sx={{ width: '100%' }}>
        {toast.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
