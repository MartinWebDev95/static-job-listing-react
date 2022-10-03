/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function FilterBar() {
  const { filters, dispatch } = useContext(FilterContext);

  return (
    filters.length > 0 && (
      <div className="bg-white w-full mt-[-30px] shadow-xl rounded py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-4">
            {filters.map((text) => (
              <button
                type="button"
                className="font-semibold text-teal-700 bg-teal-100 pl-2 rounded flex items-center cursor-default"
                key={text}
              >
                {text}
                <img
                  src="./assets/icon-remove.svg"
                  alt="icon-remove"
                  className="bg-teal-700 ml-2 p-2 cursor-pointer rounded-tr rounded-br"
                  onClick={() => dispatch({ type: 'REMOVE_FILTER', payload: text })}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="font-semibold text-teal-700 hover:underline"
            onClick={() => dispatch({ type: 'CLEAR_FILTER', payload: [] })}
          >
            Clear
          </button>
        </div>
      </div>
    )
  );
}

export default FilterBar;
