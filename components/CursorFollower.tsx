import React, { useState, useEffect } from 'react';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button')) {
        setIsHovering(true);
      }
      if (target.closest('input[type="text"], input[type="email"], textarea')) {
        setIsText(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button')) {
        setIsHovering(false);
      }
       if (target.closest('input[type="text"], input[type="email"], textarea')) {
        setIsText(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorClasses = `hidden md:block fixed pointer-events-none z-[9999] rounded-full transition-all duration-200 ease-out`;

  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: isHovering ? '40px' : (isText ? '10px' : '20px'),
    height: isHovering ? '40px' : (isText ? '30px' : '20px'),
    transform: `translate(-50%, -50%)`,
    borderRadius: isText ? '2px' : '50%',
    backdropFilter: isHovering ? 'blur(2px)' : 'none',
  };
  
  const cursorBg = isHovering 
    ? 'bg-white/20 dark:bg-white/20 border-2 border-white/50 dark:border-white/50' 
    : isText 
    ? 'bg-purple-500' 
    : 'bg-purple-400/50 dark:bg-purple-400/50';

  return (
    <div
      className={`${cursorClasses} ${cursorBg}`}
      style={cursorStyle}
    />
  );
};

export default CursorFollower;