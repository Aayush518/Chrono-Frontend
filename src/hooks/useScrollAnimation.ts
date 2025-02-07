import { useScroll, useTransform, useSpring } from 'framer-motion';
import { RefObject } from 'react';

export const useScrollAnimation = (ref: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  const scale = useTransform(smoothProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 1], [100, -100]);

  return {
    scale,
    opacity,
    y,
    progress: smoothProgress
  };
};