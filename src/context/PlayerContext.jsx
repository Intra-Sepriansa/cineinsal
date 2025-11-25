import React, { createContext, useReducer } from 'react';
import { playerReducer, initialPlayerState } from '../store/playerStore';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, initialPlayerState);

  const play = () => dispatch({ type: 'PLAY' });
  const pause = () => dispatch({ type: 'PAUSE' });
  const setVolume = (vol) => dispatch({ type: 'SET_VOLUME', payload: vol });

  return (
    <PlayerContext.Provider value={{ ...state, play, pause, setVolume }}>
      {children}
    </PlayerContext.Provider>
  );
};
