import React, { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface StatCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentVal = progress * end;
      setCount(parseFloat(currentVal.toFixed(decimals)));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, decimals, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default StatCounter;