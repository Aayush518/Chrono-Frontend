import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ModelContent = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <motion.div 
      className="relative space-y-16 p-12"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-white/30"
          />
          <span className="text-white/70 text-sm tracking-[0.2em] uppercase">Black Edition 2025</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-light tracking-wider text-white"
        >
          Royal Oak
          <span className="block text-2xl mt-2 text-white/80 font-light">Black Series</span>
        </motion.h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-white/70 text-lg leading-relaxed font-light max-w-xl"
      >
        A masterpiece of horological excellence, where centuries of craftsmanship meet contemporary innovation. Each timepiece is meticulously assembled by our master watchmakers in Switzerland.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 gap-12"
      >
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-sm text-white/50 uppercase tracking-widest">Movement</div>
            <div className="text-white/90">Calibre 4401</div>
            <div className="text-white/60 text-sm">Self-winding mechanism</div>
          </div>

          <div className="space-y-2">
            <div className="text-sm text-white/50 uppercase tracking-widest">Power Reserve</div>
            <div className="text-white/90">72 Hours</div>
            <div className="text-white/60 text-sm">Automatic winding</div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-sm text-white/50 uppercase tracking-widest">Case</div>
            <div className="text-white/90">41mm</div>
            <div className="text-white/60 text-sm">Black ceramic</div>
          </div>

          <div className="space-y-2">
            <div className="text-sm text-white/50 uppercase tracking-widest">Edition</div>
            <div className="text-white/90">Limited to 500</div>
            <div className="text-white/60 text-sm">Individually numbered</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8 pt-8"
      >
        <div className="space-y-2">
          <div className="text-sm text-white/50 uppercase tracking-widest">Starting Price</div>
          <div className="text-6xl font-light tracking-wider text-white">$85,000</div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 bg-white text-black tracking-wider hover:bg-white/90 transition-all duration-300"
          >
            Configure Watch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 border border-white/20 text-white tracking-wider hover:bg-white/5 transition-all duration-300 group"
          >
            Book Consultation
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModelContent;