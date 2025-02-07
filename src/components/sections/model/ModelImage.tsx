import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ModelImage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <motion.div 
      className="relative group"
      style={{ scale, y, opacity, rotate }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Premium Watch Background Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-lg blur-xl opacity-50"
      />

      {/* Image Container */}
      <motion.div 
        className="relative overflow-hidden rounded-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative">
          {/* Watch Image */}
          <div className="relative aspect-[3/4]">
            <motion.img
              src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=800&q=80"
              alt="Luxury black watch"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Enhanced Overlay Effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"
            />
            
            {/* Premium Light Effects */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)',
                  'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 60%)'
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
                  'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)',
                  'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Watch Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "2rem" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-px bg-white/40"
                  />
                  <span className="text-white/80 text-sm uppercase tracking-wider">Royal Collection</span>
                </div>
                <h3 className="text-2xl font-medium text-white">Black Edition</h3>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span>Limited Series</span>
                  <span>•</span>
                  <span>500 Pieces</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Premium Corner Accents with Enhanced Animations */}
      {[0, 90, 180, 270].map((rotation, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
          className="absolute w-20 h-20"
          style={{
            top: rotation < 180 ? 0 : 'auto',
            bottom: rotation >= 180 ? 0 : 'auto',
            left: rotation < 90 || rotation > 270 ? 0 : 'auto',
            right: rotation >= 90 && rotation <= 270 ? 0 : 'auto',
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <motion.div
            className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-white/30 to-transparent"
            whileHover={{ height: 48, opacity: 0.5 }}
            animate={{
              height: [48, 56, 48],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-white/30 to-transparent"
            whileHover={{ width: 48, opacity: 0.5 }}
            animate={{
              width: [48, 56, 48],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ModelImage