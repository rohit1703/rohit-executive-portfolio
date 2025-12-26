
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Only enable custom cursor on devices with a mouse/precise pointer
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .premium-card')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);
    window.addEventListener('mouseout', handleHoverEnd);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
      window.removeEventListener('mouseout', handleHoverEnd);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        x: '-50%',
        y: '-50%',
        willChange: 'transform, width, height', // GPU Hint
      }}
      animate={{
        width: isHovering ? 60 : 20,
        height: isHovering ? 60 : 20,
        backgroundColor: isHovering ? 'rgba(255, 107, 53, 0.15)' : 'rgba(255, 107, 53, 1)',
        border: isHovering ? '1px solid rgba(255, 107, 53, 0.5)' : '0px solid transparent',
        scale: isClicking ? 0.8 : 1,
      }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden lg:block backdrop-blur-[2px]"
    >
      {isHovering && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-1 h-1 bg-[#FF6B35] rounded-full" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CustomCursor;
