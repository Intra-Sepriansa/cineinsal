import React, { createContext, useReducer } from 'react';
import { searchReducer, initialSearchState } from '../store/searchStore';
import searchService from '../services/searchService';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);

  const search = async (query) => {
    dispatch({ type: 'SET_QUERY', payload: query });
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const results = await searchService.search(query);
      dispatch({ type: 'SET_RESULTS', payload: results });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const setFilters = (filters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };

  return (
    <SearchContext.Provider value={{ ...state, search, setFilters }}>
      {children}
    </SearchContext.Provider>
  );
};
