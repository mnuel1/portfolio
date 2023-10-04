import  { useState, useEffect } from 'react';
import '../css/animation.css';

const numRows = 3;
let boxesPerRow = 12;
const totalBoxes = numRows * boxesPerRow;

function getRandomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-=_+[{}]|;:,<.>/?';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function LetterBox() {
    const hero = 'Your friendly dev!';
    
    const [characters, setCharacters] = useState(Array.from({ length: totalBoxes }, () => getRandomChar()));
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [startBoxIndex, setStartBoxIndex] = useState(Math.floor(Math.random() * 4));// setting random starting index
    const [animationFinished, setAnimationFinished] = useState(false);
    
    let animationInterval:number;
    let matchingInterval:number;

  
    useEffect(() => {
        animationInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * totalBoxes);
        const targetChar = getRandomChar();

        setCharacters((prevCharacters) => {
            const newCharacters = [...prevCharacters];
            newCharacters[randomIndex] = targetChar;
            return newCharacters;
        });
        }, 1); // Change the character every 0.01 second

        setTimeout(() => {
        clearInterval(animationInterval);
        setAnimationFinished(true); // Animation finished
        }, 3000); // Run the initial animation for 3 seconds

        return () => {
        clearInterval(animationInterval);
        };
    }, []);

    let i = 0
    let length:number = 0
    useEffect(() => {
        if (animationFinished) {

            matchingInterval = setInterval(() => {
                if (currentIndex < hero.length) {
                    const heros = hero.split(' ')
                    const targetChar = hero[currentIndex];
                    
                    
                    if (targetChar === ' ') {
                        i++
                        length = heros[i].length      
                        // console.log(startBoxIndex);
                        // console.log(length);
                        // console.log(startBoxIndex + length);                                                                                        
                    }

                    // write in the next row
                    const test = startBoxIndex + length < boxesPerRow
                                        
                    if (!test) {                       
                        const remBox = Math.abs(startBoxIndex - boxesPerRow)
                        // console.log(remBox);
                                          
                        boxesPerRow +=12
                        setStartBoxIndex((prevBoxIndex) => Math.abs((prevBoxIndex + remBox) - boxesPerRow));
                        
                    }
                    // Calculate the random index for the upper row
                    const randomIndex = startBoxIndex % totalBoxes;
                                                       
                    setCharacters((prevCharacters) => {
                        const newCharacters = [...prevCharacters];
                        newCharacters[randomIndex] = targetChar;
                        return newCharacters;
                    });
            
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                    console.log(startBoxIndex);
                    
                    setStartBoxIndex((prevBoxIndex) => prevBoxIndex + 1);
                }
            }, 100); // Change the character every 0.1 second
        
            // Stop matching after all characters are matched
            setTimeout(() => {
                clearInterval(matchingInterval);
            }, (hero.length - currentIndex) * 100);
        }
      
        return () => {
            clearInterval(matchingInterval);
        };
    }, [hero, currentIndex, animationFinished, startBoxIndex]);



    return (
        <div className="grid grid-cols-12 md:grid-cols-12 gap-0 w-full md:w-11/12">
        {characters.map((char, index) => (
            char !== ' ' ? (
                <div key={index} className="m-auto flex items-center justify-center p-2 md:p-4  w-full y-full border border-gray-700">
                    <p className={`text-xl md:text-2xl lg:text-4xl random-character`} data-random-char={char} data-target-char={getRandomChar()}>
                        {char}
                    </p>
                </div>
            ) : (
                <div className='flex items-center justify-center p-2 md:p-4 w-full y-full '></div>
            )
        ))}
        </div>
    );
}

export default LetterBox;
