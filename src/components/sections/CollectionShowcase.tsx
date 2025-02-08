import React from 'react';
import { motion } from 'framer-motion';
import { Watch } from 'lucide-react';
import BlurredCard from '../effects/BlurredCard';

const CollectionShowcase = () => {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-black">
      {/* Enhanced Background Effects */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030303] to-black" />
        
        {/* Intensified Dynamic Light Effects */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(168,85,247,0.2) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8"
          />
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Watch className="w-6 h-6 text-white/80" />
            <span className="text-white/80 text-sm tracking-[0.2em] uppercase">The Collection</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white mb-8"
          >
            Black Edition Series
          </motion.h2>
        </motion.div>

        {/* Enhanced Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <BlurredCard>
            <div className="relative aspect-square md:aspect-[16/9] overflow-hidden rounded-lg group">
              {/* Premium Background Glow */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
              />
              
              {/* Enhanced Image Container */}
              <div className="relative w-full h-full">
                {/* Contrast Enhancement Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 mix-blend-color-burn" />
                
                <motion.img
                  src="/collection1.webp"
                  alt="Black Edition Watch Collection"
                  className="w-full h-full object-cover object-center contrast-125 brightness-110"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  style={{
                    filter: 'contrast(1.2) brightness(1.1)',
                    mixBlendMode: 'luminosity',
                  }}
                />

                {/* Dynamic Lighting Overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'radial-gradient(circle at 30% 30%, transparent 20%, rgba(0,0,0,0.9) 70%)',
                      'radial-gradient(circle at 70% 70%, transparent 20%, rgba(0,0,0,0.9) 70%)',
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{ mixBlendMode: 'soft-light' }}
                />

                {/* Premium Edge Highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />

                {/* Enhanced Hover Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  animate={{
                    background: [
                      'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 45%, transparent 50%)',
                      'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.15) 50%, transparent 55%)',
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{ mixBlendMode: 'overlay' }}
                />

                {/* Dramatic Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              </div>
            </div>

            {/* Enhanced Collection Details */}
            <div className="p-8 space-y-4 relative">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "3rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-px bg-white/40"
                  />
                  <h3 className="text-xl text-white font-light">Complete Black Edition</h3>
                  <p className="text-white/80 text-sm">13 Exclusive Timepieces</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors shadow-lg shadow-white/10"
                >
                  Explore All
                </motion.button>
              </div>
            </div>
          </BlurredCard>
        </motion.div>
      </div>

      {/* Enhanced Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'rgba(56,189,248,0.4)' 
                : i % 3 === 1 
                  ? 'rgba(168,85,247,0.4)'
                  : 'rgba(255,255,255,0.4)',
              borderRadius: '50%',
              filter: 'blur(1px)',
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
      </div>
    </section>
  );
};

export default CollectionShowcase;