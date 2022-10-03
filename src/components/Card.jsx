import React, { useContext } from 'react';
import ListOfButtons from './ListOfButtons';
import FilterContext from '../context/FilterContext';

function Card({ job }) {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const filtersTags = [role, level, ...languages, ...tools];

  const { filters } = useContext(FilterContext);

  const isFiltered = filters.every((filter) => filtersTags.includes(filter));

  return (
    filters.length > 0 && isFiltered === false ? null : (
      <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-center my-12 rounded-lg ${featured && 'border-l-4 border-l-teal-700'} shadow-xl lg:px-6`}>
        <div className="border-b-2 lg:border-0 mx-4 lg:mx-0 flex flex-col lg:flex-row lg:gap-x-8  lg:items-center lg:flex-1">
          <img src={logo} alt={company} className="mt-[-30px] w-16 lg:mt-0" />
          <div>
            <p className="mt-4 flex gap-x-4 items-center">
              <span className="text-teal-700 font-semibold">
                {company}
              </span>
              {job.new && <span className="text-white bg-teal-700 uppercase font-semibold rounded-xl px-2 text-sm">New!</span>}
              {featured && <span className="text-white bg-slate-800 uppercase font-semibold rounded-xl px-2 text-sm">Featured</span>}
            </p>
            <h1 className="font-bold hover:text-teal-700 cursor-pointer">{position}</h1>
            <p className="mb-4 text-gray-400">
              <span>{postedAt}</span>
              <span> - </span>
              <span>{contract}</span>
              <span> - </span>
              <span>{location}</span>
            </p>
          </div>
        </div>
        <ListOfButtons filters={filtersTags} />
      </div>
    )
  );
}

export default Card;
