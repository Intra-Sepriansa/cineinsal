import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSubscription } from '../hooks/useSubscription';

const SubscriptionGuard = ({ children, requiredPlan }) => {
  const { currentPlan } = useSubscription();

  if (!currentPlan || (requiredPlan && currentPlan.level < requiredPlan.level)) {
    return <Navigate to="/subscription" replace />;
  }

  return children;
};

export default SubscriptionGuard;
