export const initialSubscriptionState = {
  currentPlan: null,
  history: [],
  isLoading: false,
  error: null,
};

export const subscriptionReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_PLAN':
      return { ...state, currentPlan: action.payload, isLoading: false };
    case 'SET_HISTORY':
      return { ...state, history: action.payload, isLoading: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
