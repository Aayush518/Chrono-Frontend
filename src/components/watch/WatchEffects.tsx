import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const WatchEffects = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const rotateX = useTransform(springY, [-300, 300], [15, -15]);
  const rotateY = useTransform(springX, [-300, 300], [-15, 15]);

  return (
    <>
      {/* Enhanced Premium Metallic Reflection */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 45%, transparent 50%)',
          backgroundSize: '200% 200%',
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Enhanced Dynamic Light Reflections */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.15) 0%, transparent 50%)',
          rotateX,
          rotateY,
        }}
        animate={{
          '--mouse-x': ['0%', '100%', '0%'],
          '--mouse-y': ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Enhanced Ambient Light Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 mix-blend-overlay"
          style={{ rotateX, rotateY }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
          style={{ rotateX, rotateY }}
        />
      </div>

      {/* Enhanced Dynamic Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ rotateX, rotateY }}
      />

      {/* Enhanced Sparkle Effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.8), rgba(255,255,255,0.3))',
            borderRadius: '50%',
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Chromatic Aberration Effect */}
      <motion.div
        className="absolute inset-0 mix-blend-screen pointer-events-none"
        style={{
          rotateX,
          rotateY,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(255,0,0,0.1), transparent 70%)',
            transform: 'translate(-2px, -2px)',
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(0,255,255,0.1), transparent 70%)',
            transform: 'translate(2px, 2px)',
          }}
        />
      </motion.div>
    </>
  );
};

export default WatchEffects;