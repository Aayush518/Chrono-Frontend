import React from 'react';
import WatchDisplay from '../WatchDisplay';
import CustomerReviews from '../CustomerReviews';

const HeroDisplay = () => {
  return (
    <div className="relative flex items-center justify-center lg:justify-end px-4 md:px-8 lg:px-20">
      <div className="relative w-full">
        <WatchDisplay />
        <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-10">
          <CustomerReviews />
        </div>
      </div>
    </div>
  );
};

export default HeroDisplay;