import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Watermark = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [-20, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.12, 0.15, 0.08]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div 
      className="fixed inset-0 z-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="relative w-full h-full">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="border-[0.5px] border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.01 }}
            />
          ))}
        </div>

        {/* Main Watermark */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            scale,
            y,
            rotate
          }}
        >
          <motion.div
            className="relative"
            animate={{
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {/* Shadow Text for Depth */}
            <div className="absolute inset-0 text-[30vw] font-bold text-black/20 blur-sm transform translate-y-[2px] translate-x-[2px]">
              Aayush518
            </div>
            
            {/* Main Text */}
            <div className="relative text-[30vw] font-bold text-white/20 whitespace-nowrap select-none">
              Aayush518
            </div>

            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0 mix-blend-overlay"
              animate={{
                background: [
                  'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
                  'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
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

        {/* Dynamic Gradient Overlays */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 70%, rgba(168,85,247,0.05) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Scroll-based Gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))',
            opacity: useTransform(scrollYProgress, [0, 1], [0, 0.5])
          }}
        />

        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${20 * i}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              x: useTransform(
                scrollYProgress,
                [0, 1],
                ['-100%', '100%']
              )
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Watermark;