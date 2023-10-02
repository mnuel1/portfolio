import React, { useState, useEffect } from 'react';
import '../css/animation.css';

const numRows = 3;
const boxesPerRow = 12;
const totalBoxes = numRows * boxesPerRow;

function getRandomChar() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-=_+[{}]|;:,<.>/?';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function LetterBox() {
  const hero = 'Your friendly developer';

  const letters = hero.split('');
  const [characters, setCharacters] = useState(Array.from({ length: totalBoxes }, () => getRandomChar()));
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    if (animationFinished) {
      matchingInterval = setInterval(() => {
        if (currentIndex < hero.length) {
          const targetChar = hero[currentIndex];
          const randomIndex = currentIndex % totalBoxes;

          setCharacters((prevCharacters) => {
            const newCharacters = [...prevCharacters];
            newCharacters[randomIndex] = targetChar;
            return newCharacters;
          });

          setCurrentIndex((prevIndex) => prevIndex + 1);
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
  }, [hero, currentIndex, animationFinished]);

  return (
    <div className="grid grid-cols-12 gap-4">
      {characters.map((char, index) => (
        char !== ' ' ? (
            <div key={index} className="flex items-center justify-center p-4 w-11/12 y-full border border-gray-600">
                <p className={`text-5xl random-character`} data-random-char={char} data-target-char={getRandomChar()}>
                    {char}
                </p>
            </div>
        ) : (
            <div className='flex items-center justify-center p-4 w-11/12 y-full '></div>
        )
      ))}
    </div>
  );
}

export default LetterBox;
