export const initialPlayerState = {
  isPlaying: false,
  volume: 1,
  currentTime: 0,
  duration: 0,
  isFullscreen: false,
  quality: 'auto',
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case 'PLAY':
      return { ...state, isPlaying: true };
    case 'PAUSE':
      return { ...state, isPlaying: false };
    case 'SET_VOLUME':
      return { ...state, volume: action.payload };
    case 'SET_TIME':
      return { ...state, currentTime: action.payload };
    case 'SET_DURATION':
      return { ...state, duration: action.payload };
    case 'TOGGLE_FULLSCREEN':
      return { ...state, isFullscreen: !state.isFullscreen };
    default:
      return state;
  }
};
