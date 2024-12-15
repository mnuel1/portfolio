import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

interface Props {
    id: string;
    children: React.ReactNode;
}

const MotionWrapper: React.FC<Props> = ({ id, children }) => {
  return (
    <>
       
    <AnimatePresence>
      <motion.div
        key={id}
        id={id}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}    
      >
        {children}
      </motion.div>
    </AnimatePresence>
    
    </>
  );
  
};


export default MotionWrapper;
