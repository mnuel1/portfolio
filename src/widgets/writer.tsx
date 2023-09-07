import React, { useState, useEffect } from 'react';

type TypewriterProps = {
    text: string;
    delay: number;
    infinite: boolean;
};

const Typewriter: React.FC<TypewriterProps> = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState(' ');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout: number;
    
        if (currentIndex <= text.length - 1) {
            timeout = setTimeout(() => {
                if (text[currentIndex] === '\n') {
                    setCurrentText((prevText) => prevText + '<br />');                                   
                } else if (text[currentIndex] === '\t') {
                    setCurrentText((prevText) => prevText + '\t'); 
                }else {
                    setCurrentText((prevText) => prevText + text[currentIndex]);
                }
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
        
        }
        // } else if (infinite) {
        //   setCurrentIndex(0);
        //   setCurrentText('');
        // }
        
        return () => clearTimeout(timeout);
    }, [currentIndex, delay, text]); // add an infinite here if want to loop it

    return <span className="text-white" dangerouslySetInnerHTML={{ __html: currentText }} style={{ whiteSpace: 'pre' }}/>
};

export default Typewriter;
