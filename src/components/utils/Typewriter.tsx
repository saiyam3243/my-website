import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  toType: string[]; // Array of strings to type out
  typingSpeed?: number; // Speed of typing in milliseconds
  deletingSpeed?: number; // Speed of deleting in milliseconds
  delayBeforeDelete?: number; // Delay before starting to delete in milliseconds
delayBeforeType?: number; // Delay before starting to type the next string in milliseconds
}

const Typewriter: React.FC<TypewriterProps> = ({
    toType,
    typingSpeed = 200,
    deletingSpeed = 100,
    delayBeforeDelete = 2000, // 1 second delay before starting to delete
    delayBeforeType = 500, // 0.5 second delay before typing the next string
  }) => {
    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [delta, setDelta] = useState(typingSpeed)
  
    useEffect(() => {
      let timer = setTimeout(() => {}, 0);
  
      // Adjusting delay based on the action (typing or deleting)
      if (isDeleting) {
        setDelta(deletingSpeed)
      } else {
        setDelta(typingSpeed)
      }
    
      // When the full text has been typed out, wait for `delayBeforeDelete` before starting to delete
      if (!isDeleting && text === toType[index]) {
        setDelta(delayBeforeDelete); // Wait for specified delay before deleting
        timer = setTimeout(() => setIsDeleting(true), delta);
      } else if (isDeleting && text === '') {
        setDelta(delayBeforeType); // Set delay before typing the next text
        timer = setTimeout(() => { setIndex((prevIndex) => (prevIndex + 1) % toType.length);setIsDeleting(false)}, delta)
      } else if (isDeleting) {
        timer = setTimeout(() => setText(text.slice(0, text.length - 1)), delta)
      } else {
        const fullText = toType[index];
        timer = setTimeout(() => setText(fullText.slice(0, text.length + 1)), delta)
      }
  
      return () => clearTimeout(timer);
    }, [text, isDeleting, index, toType, typingSpeed, deletingSpeed, delta, delayBeforeDelete, delayBeforeType])
  
  return (
    <h1 className="typewrite text-6xl relative z-30">
      {text}
      <span className="cursor animate-blink">|</span>
    </h1>
  );
};

export default Typewriter;
