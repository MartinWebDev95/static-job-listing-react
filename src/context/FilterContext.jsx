import React, { createContext, useMemo, useReducer } from 'react';
import FilterReducer from '../reducer/FilterReducer';

const FilterContext = createContext(
  {
    filters: [],
    dispatch: () => {},
  },
);

export function FilterContextProvider({ children }) {
  const [filters, dispatch] = useReducer(FilterReducer, []);

  const value = useMemo(() => ({ filters, dispatch }), [filters, dispatch]);

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
