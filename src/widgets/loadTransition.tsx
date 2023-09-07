import { useEffect, useState } from 'react';

const loadTransition = (delay: number = 1000) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
};

export default loadTransition;
