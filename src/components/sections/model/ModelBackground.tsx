import React from 'react';
import { motion } from 'framer-motion';

const ModelBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Pure Black Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      
      {/* Dynamic Light Effects */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(168,85,247,0.05) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Ambient Light */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      </motion.div>

      {/* Enhanced Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, black 100%)',
        }}
      />
    </div>
  );
};

export default ModelBackground;