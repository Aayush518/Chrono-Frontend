import React from 'react';
import { motion } from 'framer-motion';
import Features from '../Features';

const HeroContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-20 pt-12 md:pt-24 lg:pt-0 z-10"
    >
      <div className="space-y-6 md:space-y-8">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center gap-2 text-white/60 overflow-hidden"
        >
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="h-px bg-white/60"
          />
          <span className="text-xs sm:text-sm font-light tracking-[0.2em] whitespace-nowrap">LUXURY TIMEPIECES</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative"
        >
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-white to-white/70 text-transparent bg-clip-text">
            CHRONO
          </span>
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-white/50 to-transparent"
          />
          <span className="block text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 text-white/80 font-light tracking-wider">MASTERPIECE COLLECTION</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-base sm:text-lg md:text-xl text-white/60 max-w-md leading-relaxed font-light"
        >
          Experience the pinnacle of Swiss craftsmanship, where timeless elegance meets cutting-edge innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.95)" }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-medium transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 text-sm sm:text-base"
          >
            Explore Collection
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-white transition-all duration-300 hover:border-white/40 text-sm sm:text-base"
          >
            Watch Video
            <motion.span 
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        <Features />
      </div>
    </motion.div>
  );
};

export default HeroContent;