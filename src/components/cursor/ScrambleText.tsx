import React, { useState, useEffect } from 'react';

const ScrambleText: React.FC<{ text: string }> = ({ text }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const scramble = () => {
      let result = text.split('');
      for (let i = 0; i < text.length ; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        if (j >= 0 && j < text.length - 1) {
          [result[i], result[j]] = [result[j], result[i]];
        }
      }
      setScrambledText(result.join(''));
    };

    if (isHovered) {
      intervalId = setInterval(scramble, 50);
      setTimeout(() => {
        clearInterval(intervalId);
        setScrambledText(text); // Reveal the original text after scrambling
      }, 400); // Adjust time as needed
    }

    return () => clearInterval(intervalId);
  }, [isHovered, text]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover:text-orange-600"
    >
      {scrambledText}
    </div>
  );
};

export default ScrambleText;
