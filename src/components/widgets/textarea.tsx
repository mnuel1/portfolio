import React, { useState, useEffect } from 'react';
import Typewriter from './writer';

const NumberedTextArea: React.FC = () => {
    const [counter, setCounter] = useState(0);
    
    const text = ` `;
    const maxCharsPerLine = 80; // Set your character limit per line
    
    
    const splitTextIntoLines = (text: string, maxCharsPerLine: number) => {
        const lines = [];
        let currentLine = '';
        const words = text.split(' ');

        for (const word of words) {
            if (currentLine.length + word.length <= maxCharsPerLine) {
                currentLine += word + ' ';
            } else {
                lines.push(currentLine.trim());
                currentLine = word + ' ';
            }
        }
        if (currentLine) {
            lines.push(currentLine.trim());
        }
        return lines;
    };    
    const lines = splitTextIntoLines(text, maxCharsPerLine);

    return (
        <div className="max-h-96 overflow-auto" style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '40px', backgroundColor: '#333', padding: '20px 10px', height:"max-content", }} >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {lines.map((_, index) => (
                        <div key={index}
                            style={{
                                color: counter === index ? '#fff' : 'gray',
                                fontWeight: counter === index ? 'bold' : 'normal',
                            }}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
            <div className="items-center w-full" style={{ padding: '20px 10px' }}>
                <Typewriter text={text} delay={1} infinite={true} />
            </div>
        </div>
    );
};

export default NumberedTextArea;
