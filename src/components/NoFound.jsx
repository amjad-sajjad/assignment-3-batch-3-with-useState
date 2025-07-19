import React from 'react';

const NoFound = ({children,textSize}) => {
  return (
    <div className={`text-gray-500 ${textSize ? textSize : 'text-2xl'} col-span-3 text-center italic mt-2`}>There is no {children} found.</div>
  );
};

export default NoFound;