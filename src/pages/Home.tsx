import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './About';
import MotionWrapper from '../components/motion';
const hero = [
  "full stack developer",
  "backend developer",
  "no code developer",
  "automation",
  "travel",
  "bikes"
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hero.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className='flex relative justify-end 
        flex-col items-center h-[500px] gap-2'
      >
        
        <div className='h-[90px] text-center overflow-hidden mb-24'>
            <AnimatePresence>
                <motion.h1
                    key={hero[currentIndex]}
                    className='text-4xl md:text-8xl header '
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{
                        opacity: 1,
                        rotateX: 0,                    
                    }}
                    exit={{ opacity: 0, rotateX: -90 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        scale: { type: "spring", stiffness: 300 },
                    }}
                    >
                    {hero[currentIndex].toUpperCase()}
                </motion.h1>
            </AnimatePresence>
        </div>

        <div className='flex-end'>
            <MotionWrapper id='about'>
                <About />
            </MotionWrapper>
        </div>
      </div>
    </>
  );
};

export default Home;
