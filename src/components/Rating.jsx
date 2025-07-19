import React from 'react';

const Rating = ({ number }) => {
  const stars = Array.from({ length: 5 });

  return (
    <div className="flex text-gray-300">
      {stars.map((_, index) => (
        <i
          key={index}
          style={{ fontSize:"10px"}}
          className={`fa-solid fa-star ${index < number && 'text-yellow-400'}`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;