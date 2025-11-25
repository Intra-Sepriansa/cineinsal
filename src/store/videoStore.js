export const initialVideoState = {
  videos: [],
  trending: [],
  recommended: [],
  selectedVideo: null,
  isLoading: false,
  error: null,
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, videos: action.payload };
    case 'FETCH_TRENDING_SUCCESS':
      return { ...state, trending: action.payload };
    case 'FETCH_RECOMMENDED_SUCCESS':
      return { ...state, recommended: action.payload };
    case 'SET_SELECTED_VIDEO':
      return { ...state, selectedVideo: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
