import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface ReadingSpeedContextType {
  isAutoScrolling: boolean;
  setIsAutoScrolling: (val: boolean) => void;
  speed: number;
  setSpeed: (val: number) => void;
}

const ReadingSpeedContext = createContext<ReadingSpeedContextType | undefined>(undefined);

export const ReadingSpeedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [speed, setSpeed] = useState(1); // Pixels per frame or some unit
  const scrollRef = useRef<number | null>(null);

  useEffect(() => {
    if (isAutoScrolling) {
      const scroll = () => {
        window.scrollBy(0, speed * 0.5); // Adjust multiplier for feel
        scrollRef.current = requestAnimationFrame(scroll);
      };
      scrollRef.current = requestAnimationFrame(scroll);
    } else {
      if (scrollRef.current) {
        cancelAnimationFrame(scrollRef.current);
      }
    }

    return () => {
      if (scrollRef.current) {
        cancelAnimationFrame(scrollRef.current);
      }
    };
  }, [isAutoScrolling, speed]);

  return (
    <ReadingSpeedContext.Provider value={{ isAutoScrolling, setIsAutoScrolling, speed, setSpeed }}>
      {children}
    </ReadingSpeedContext.Provider>
  );
};

export const useReadingSpeed = () => {
  const context = useContext(ReadingSpeedContext);
  if (!context) {
    throw new Error('useReadingSpeed must be used within a ReadingSpeedProvider');
  }
  return context;
};
