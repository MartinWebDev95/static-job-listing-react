import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Button({ text }) {
  const { dispatch } = useContext(FilterContext);

  return (
    <button
      type="button"
      className="font-semibold text-teal-700 bg-teal-100 px-2 rounded hover:bg-teal-700 hover:text-white"
      onClick={() => dispatch({ type: 'SET_FILTER', payload: text })}
    >
      {text}
    </button>
  );
}

export default Button;
