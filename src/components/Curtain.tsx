// Curtain.js

import React, { useState, useEffect } from 'react';

const Curtain = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [lineAnimation, setLineAnimation] = useState(false);

  useEffect(() => {
    // Simulate a 2-second delay
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Start the line animation after a short delay (adjust as needed)
    const lineAnimationTimeout = setTimeout(() => {
      setLineAnimation(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(lineAnimationTimeout);
    }; // Cleanup the timeouts on component unmount
  }, []);

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-black transition-transform duration-1000 ${isLoaded ? '-translate-x-full' : '-translate-x-1/2'}`}
      />
      {!isLoaded && (
        <div
          className={`fixed left-1/2 top-0 h-full w-0.5 origin-center transform bg-white transition-transform duration-1000 scale-y-${lineAnimation ? '100' : '0'} z-20`}
        />
      )}
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-black transition-transform duration-1000 ${isLoaded ? 'translate-x-full' : 'translate-x-1/2'}`}
      />
    </>
  );
};

export default Curtain;
