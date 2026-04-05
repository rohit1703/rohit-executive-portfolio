
import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "" }) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(val) {
          // Preserve decimal places if the target has them (e.g. 3.9)
          const decimals = String(value).includes('.') ? String(value).split('.')[1].length : 0;
          setCount(Number(val.toFixed(decimals)));
        }
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default Counter;
