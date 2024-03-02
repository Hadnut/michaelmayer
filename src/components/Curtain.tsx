import { useState, useEffect } from 'react';

const Curtain = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [lineAnimation, setLineAnimation] = useState<boolean>(false);

  useEffect(() => {
    // Simulate a 2-second delay
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Start the line animation after a short delay (adjust as needed)
    const lineAnimationTimeout = setTimeout(() => {
      setLineAnimation(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
      clearTimeout(lineAnimationTimeout);
    }; // Cleanup the timeouts on component unmount
  }, []);

  const scale = !lineAnimation ? "scale-y-0" : "scale-y-100"

  return (
    <>
      (
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-black transition-transform duration-500 ${isLoaded ? '-translate-x-full' : '-translate-x-1/2'}`}
      />
      <div
        className={`fixed left-1/2 top-0 h-full w-0.5 origin-center transform bg-white ${isLoaded ? 'invisible' : 'visible'} transition-transform duration-700 ${scale} z-20`}
      />
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-black transition-transform duration-500 ${isLoaded ? 'translate-x-full' : 'translate-x-1/2'}`}
      />
    </>
  );
};

export default Curtain;
