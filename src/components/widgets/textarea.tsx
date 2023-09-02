import React, { useState, useEffect, useRef } from 'react';

const NumberedTextArea: React.FC = () => {
  const [counter, setCounter] = useState(2);
  const [text, setText] = useState<string>('1  ');
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && textAreaRef.current) {
        e.preventDefault();
        e.stopPropagation();
        const start = textAreaRef.current.selectionStart;
        const end = textAreaRef.current.selectionEnd;
        const newText = `${text.substring(0, start)}\n${counter} ${text.substring(end)}`;
        setText(newText);
        setCounter((prevCounter) => prevCounter + 1);
        setCursorPosition(start + 3);
        textAreaRef.current.setSelectionRange(start + 3, start + 3);
      }
    };

    if (textAreaRef.current) {
      textAreaRef.current.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (textAreaRef.current) {
        textAreaRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [counter, text]);

  useEffect(() => {
    if (cursorPosition !== null && textAreaRef.current) {
      textAreaRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [cursorPosition]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTextareaClick = () => {
    if (textAreaRef.current) {
      const cursorPos = textAreaRef.current.selectionStart;
      setCursorPosition(cursorPos);
    }
  };

  const style = {
    height: '100%',
    width: '100%',
    backgroundColor: '#24292e',
    color: 'white',
    padding: '20px',
    outline: 'none'
    
  };

  return (
    <div style={{ display: 'flex', height: '100%', width:'100%'}}>
      <div
        style={{
          width: '40px',
        //   backgroundColor: '#333',
          padding: '20px 10px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {text.split('\n').map((_, index) => (
            <div
              key={index}
              style={{
                color: cursorPosition === index ? '#fff' : '#273546',
                fontWeight: cursorPosition === index ? 'bold' : 'normal',
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <textarea
        ref={textAreaRef}
        value={text}
        // onKeyDown={handleTextareaChange}
        onChange={handleTextareaChange}
        onClick={handleTextareaClick}
        style={style}
      />
    </div>
  );
};

export default NumberedTextArea;
