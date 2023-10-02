import { lazy, useEffect, useRef, useState } from 'react';
import { IParallax } from '@react-spring/parallax'

import Navbar from './layouts/navigation';

// Import the correct components for each section
const LazyHome = lazy(() => import('./pages/Home'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyWork = lazy(() => import('./pages/Work'));
const LazyContact = lazy(() => import('./pages/Contact'));
const LazyFooter = lazy(() => import('./pages/Footer'));

import './css/tailwind.css';

const App = () => {
    
    const parallax = useRef<IParallax>(null!);

    const scrollTo = (section: number) => {
        parallax.current.scrollTo(section);
        
        
    };

    const [activeSection, setActiveSection] = useState('home');

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = parallax.current.current;
            // Determine which section is in view based on scroll position
            if (scrollY === 0) {
                setActiveSection('home');
            } else if (scrollY === 1) {
                setActiveSection('about');
            } else if (scrollY === 2) {
                setActiveSection('work');
            } else if (scrollY === 3) {
                setActiveSection('contact');
            } else {
                setActiveSection('footer');
            }
            
        };

        window.addEventListener('scroll', handleScroll);
        
        
        return () => {
            console.log(activeSection);
            window.removeEventListener('scroll', handleScroll);
            
        };
    }, [parallax]);

    return (
        <>
           
            <Navbar scrollTo={scrollTo} />            
            <div className='flex items-center justify-center flex-col z-10' id='bg'>     
                <LazyContact />                     
                <section id="home" className="element">
                    <LazyHome />
                </section>                        
                <section id="about" className="element">
                    <LazyAbout scrollTo={scrollTo}/>
                </section>                                        
                <section id="work" className="element">
                    <LazyWork />
                </section>
                                    
                <section id="footer" className="element">
                    <LazyFooter />
                </section>                                
            </div> 
                 
            
        </>
    );
};

export default App;
