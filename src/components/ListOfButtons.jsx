import React from 'react';
import Button from './Button';

function ListOfButtons({ filters }) {
  return (
    <div className="mx-4 lg:mx-0 flex gap-4 lg:gap-6 flex-wrap my-4">
      {filters.map((filter) => (
        <Button text={filter} key={filter} />
      ))}
    </div>
  );
}

export default ListOfButtons;
