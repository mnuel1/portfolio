import React, { useState } from 'react';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  const switchStyles = {
    opacity: isOn ? 1 : 0.5, // Fade in when on, fade out when off
    transform: isOn ? 'scale(1.2)' : 'scale(1)', // Scale up when on
    backgroundColor: isOn ? '#6e7281' : '#ccc', // Green when on, gray when off
    marginLeft: isOn ? '60%' : '0%', // Move to the right when on
    transition: 'all 0.3s ease', // Smooth transition animation
  };

  return (
    <div className='flex items-center px-2 py-0 h-12 hover:cursor-pointer border-4 rounded-full w-28' onClick={toggleSwitch}>
      <div
        className='w-8 h-8 rounded-full'
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
