import { useState, useEffect } from 'react';

const Switch = () => {
    const [isOn, setIsOn] = useState(false);
    const [isMobileView, setMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 600) {
            setMobileView(true);
            
            } else {
            setMobileView(false);
            
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 


    const toggleSwitch = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    };

    const switchStyles = {
        opacity: isOn ? 1 : 0.5, // Fade in when on, fade out when off
        transform: isOn ? 'scale(1.2)' : 'scale(1)', // Scale up when on
        backgroundColor: isOn ? '#6e7281' : '#ccc', 
        marginLeft: isMobileView ? '' : (isOn ? '70%' : '0%'), // Move to the right when on (conditionally)
        transition: 'all 0.3s ease', // Smooth transition animation
    };
   
    return (
        <div className={`flex items-center px-2 py-0 h-12 hover:cursor-pointer border-4 rounded-full 
            ${isMobileView ? 'w-11/12' : 'sm:w-28 md:w-32 lg:w-36'}`}             
            onClick={toggleSwitch}>
            <div
                className='w-8 h-8 rounded-full flex justify-center items-center'
                style={switchStyles}                
            >
                {isOn ? (
                    <img src="src\assets\dark.png" alt="dark" />
                ) : (
                    <img src="src\assets\light.png" alt="light" />
                )}
            </div>
        </div>
    );
};

export default Switch;
