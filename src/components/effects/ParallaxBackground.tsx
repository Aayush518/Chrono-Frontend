import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxBackgroundProps {
  imageUrl?: string;
  opacity?: number;
  children?: React.ReactNode;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  imageUrl, 
  opacity = 0.5,
  children 
}) => {
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springScroll = useSpring(scrollYProgress, springConfig);
  const y = useTransform(springScroll, [0, 1], ['0%', '30%']);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {imageUrl && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y,
            opacity
          }}
        />
      )}
      
      {/* Premium Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
          backdropFilter: 'blur(10px)',
        }}
      />

      {/* Animated Gradient Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full"
          style={{
            top: `${20 * i}%`,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            x: useTransform(springScroll, [0, 1], ['-100%', '100%'])
          }}
        />
      ))}

      {/* Dynamic Particles */}
      <div className="absolute inset-0 mix-blend-screen">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              background: i % 2 === 0 
                ? 'rgba(56,189,248,0.3)' 
                : 'rgba(168,85,247,0.3)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {children}
    </div>
  );
};

export default ParallaxBackground;