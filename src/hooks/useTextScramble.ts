import { useState, useEffect } from 'react';

export function useTextScramble(text: string, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScrambling(true);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!isScrambling) return;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let iteration = 0;
    const maxIterations = text.length;
    
    const interval = setInterval(() => {
      setDisplayText(
        text.split('').map((_, index) => {
          if (index < Math.floor(iteration / 2)) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      
      iteration += 0.5;
      
      if (iteration >= maxIterations * 2) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [isScrambling, text]);
  
  return displayText;
}
