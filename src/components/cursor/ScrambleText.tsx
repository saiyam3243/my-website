import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import smoothScrollTo from '../utils/SmoothScrollTo';

const ScrambleText: React.FC<{ text: string, id: string }> = ({ text, id }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const scramble = () => {
      let result = text.split('');
      for (let i = 0; i < text.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        if (j >= 0 && j < text.length - 1) {
          [result[i], result[j]] = [result[j], result[i]];
        }
      }
      setScrambledText(result.join(''));
    };

    if (isHovered) {
      intervalId = setInterval(scramble, 30);
      setTimeout(() => {
        clearInterval(intervalId);
        setScrambledText(text); // Reveal the original text after scrambling
      }, 300); // Adjust time as needed
    }

    return () => clearInterval(intervalId);
  }, [isHovered, text]);

  const handleScroll = (selector: string, duration: number) => {
    smoothScrollTo(selector, duration);
  };
  return (
    <Link href={id} onClick={() => handleScroll(id, 1200)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover:text-[#fca311] ease-in delay-100"
    >
      {scrambledText}
    </Link>
  );
};

export default ScrambleText;
