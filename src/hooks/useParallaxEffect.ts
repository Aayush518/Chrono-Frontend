import { useMotionValue, useTransform, useSpring } from 'framer-motion';

export const useParallaxEffect = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(springY, [-300, 300], [15, -15]);
  const rotateY = useTransform(springX, [-300, 300], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return {
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave,
  };
};