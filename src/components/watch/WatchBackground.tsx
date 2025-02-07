import React from 'react';
import { motion } from 'framer-motion';
import { useParallaxEffect } from '../../hooks/useParallaxEffect';

const WatchBackground = () => {
  const { rotateX, rotateY } = useParallaxEffect();

  return (
    <motion.div
      className="absolute inset-0 -z-10"
      style={{ rotateX, rotateY }}
    >
      {/* Primary Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-[100px]" />
      </motion.div>

      {/* Secondary Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-500/5 rounded-full blur-[60px]" />
      </motion.div>

      {/* Ambient Light */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        style={{
          background: 'radial-gradient(circle at center, transparent, black)',
        }}
      />
    </motion.div>
  );
};

export default WatchBackground;