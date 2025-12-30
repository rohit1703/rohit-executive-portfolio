import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
  target?: string;
  rel?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className, onClick, href, target, rel }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device has a coarse pointer (touchscreen)
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(mediaQuery.matches);

    const handleResize = () => setIsTouchDevice(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    // PERFECTION FIX: Disable magnetic effect on touch devices to prevent "sticky" glitch
    if (!ref.current || isTouchDevice) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
    >
      <Component
        href={href}
        target={target}
        rel={rel}
        onClick={onClick as any}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={className}
      >
        {children}
      </Component>
    </div>
  );
};

export default MagneticButton;