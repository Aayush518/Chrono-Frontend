import React from 'react';
import { motion } from 'framer-motion';
import { Watch } from 'lucide-react';

const WatchLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="relative"
      >
        <Watch className="w-12 h-12 text-white" />
        <motion.div
          className="absolute inset-0"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255,255,255,0.2)",
              "0 0 40px rgba(255,255,255,0.4)",
              "0 0 20px rgba(255,255,255,0.2)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default WatchLoader;