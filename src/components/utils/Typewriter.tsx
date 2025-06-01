import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  toType: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
  delayBeforeType?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
    toType,
    typingSpeed = 200,
    deletingSpeed = 100,
    delayBeforeDelete = 2000,
    delayBeforeType = 500,
  }) => {
    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [delta, setDelta] = useState(typingSpeed)
  
    useEffect(() => {
      let timer = setTimeout(() => {}, 0);
  
      if (isDeleting) {
        setDelta(deletingSpeed)
      } else {
        setDelta(typingSpeed)
      }
    
      if (!isDeleting && text === toType[index]) {
        setDelta(delayBeforeDelete);
        timer = setTimeout(() => setIsDeleting(true), delta);
      } else if (isDeleting && text === '') {
        setDelta(delayBeforeType);
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
    <h1 className="typewrite text-3xl md:text-6xl relative z-30">
      {text}
      <span className="cursor animate-blink">|</span>
    </h1>
  );
};

export default Typewriter;