import { useState, useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef(mousePosition);

  useEffect(() => {
    mouseRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const animate = () => {
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.1;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.1;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseRef.current.x}px, ${mouseRef.current.y}px)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  useEffect(() => {
    targetRef.current = { x: mousePosition.x, y: mousePosition.y };
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = () => setIsHovering(false);
    
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hovering' : ''}`} />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
