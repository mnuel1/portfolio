import { lazy, useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

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
            <Parallax ref={parallax} pages={5}>
                <ParallaxLayer offset={0} speed={0} factor={5} style={{ backgroundColor: '#1f1f1f' }} />     
                {/* <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#5e616e' }} />
                <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#d0cfc8' }} /> */}


                <ParallaxLayer offset={0} speed={0.2} //onClick={() => parallax.current.scrollTo(3)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >

                    <section id="home" className="element">
                        <LazyHome />
                    </section>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} 
                // onClick={() => parallax.current.scrollTo(2)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >

                    <section id="about" className="element">
                        <LazyAbout scrollTo={scrollTo}/>
                    </section>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.2}                
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                    <section id="work" className="element">
                        <LazyWork />
                    </section>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.2}
                    // onClick={() => parallax.current.scrollTo(1)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >

                    <section id="contact" className="element">
                        <LazyContact />
                    </section>
                </ParallaxLayer>

                <ParallaxLayer offset={4} speed={0.2}
                    // onClick={() => parallax.current.scrollTo(1)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >

                    <section id="footer" className="element">
                        <LazyFooter />
                    </section>
                </ParallaxLayer>
            
            </Parallax>
        </>
    );
};

export default App;
