import React, { createContext, useReducer, useEffect } from 'react';
import { subscriptionReducer, initialSubscriptionState } from '../store/subscriptionStore';
import subscriptionService from '../services/subscriptionService';

export const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(subscriptionReducer, initialSubscriptionState);

  useEffect(() => {
    const loadSubscription = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const plan = await subscriptionService.getCurrentSubscription();
        dispatch({ type: 'SET_PLAN', payload: plan });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    };
    loadSubscription();
  }, []);

  return (
    <SubscriptionContext.Provider value={{ ...state }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
