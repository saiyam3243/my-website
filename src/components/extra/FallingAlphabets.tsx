import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

const FallingAlphabets: React.FC = () => {
  const { y: scrollY } = useWindowScroll();
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    // Example letters, you can customize this as needed
    setLetters("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''));
  }, []);

  return (
    <div className="relative">
      {letters.map((letter, index) => (
        <div
          key={index}
          className=""
          style={{
            transform: `translateY(${scrollY * 0.5 + index * 30}px)`,
            transition: 'transform 5s linear',
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default FallingAlphabets;
