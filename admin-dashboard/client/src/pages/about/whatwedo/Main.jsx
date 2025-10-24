import React from 'react';
import Cards from './Cards';
import Texts from './Texts';

const Main = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
        <div className="w-full lg:w-1/2">
          <Cards />
        </div>
        <div className="w-full lg:w-1/2">
          <Texts />
        </div>
      </div>
    </div>
  );
};

export default Main;