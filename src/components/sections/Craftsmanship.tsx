import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import BlurredCard from '../effects/BlurredCard';

const stats = [
  { label: "Years of Excellence", value: "125+" },
  { label: "Master Craftsmen", value: "50+" },
  { label: "Unique Pieces", value: "1000+" }
];

const craftsmanshipDetails = [
  {
    title: "Swiss Precision",
    description: "Every movement contains over 300 components, each meticulously assembled by hand.",
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=1600&q=80",
    accent: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Heritage",
    description: "Five generations of watchmaking expertise, preserving traditional craftsmanship.",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=1600&q=80",
    accent: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Materials",
    description: "Ethically sourced precious metals and rare gemstones of the highest quality.",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1600&q=80",
    accent: "from-blue-500/20 to-purple-500/20"
  }
];

const Craftsmanship = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-16 md:py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed bg-center"
        style={{ y: backgroundY, filter: 'brightness(0.15)' }}
      />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-32"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8 md:mb-12"
          />
          
          <div className="relative -mx-6 md:mx-0 overflow-hidden">
            <div className="relative px-6 md:px-0">
              <motion.h2 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="text-[10vw] md:text-8xl font-light tracking-wider text-white mb-8 md:mb-12 whitespace-nowrap overflow-visible relative"
                style={{
                  textShadow: '0 0 40px rgba(255,255,255,0.2)',
                  transform: 'translateX(-5%)'
                }}
              >
                Artisanal Excellence
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    background: [
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0), transparent)',
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.h2>
            </div>
          </div>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/70 leading-relaxed font-light px-4"
          >
            Where centuries of tradition meet cutting-edge innovation, creating timepieces that transcend generations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-16 md:mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
            >
              <BlurredCard className="relative group overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <div className="p-8 md:p-12 text-center relative z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.3 + index * 0.2,
                      type: "spring",
                      bounce: 0.4
                    }}
                    className="text-5xl md:text-7xl font-light tracking-wider text-white mb-4"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="h-px bg-white/30 mx-auto mb-4"
                  />
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    className="text-white/70 tracking-wider text-base md:text-lg"
                  >
                    {stat.label}
                  </motion.p>
                </div>
              </BlurredCard>
            </motion.div>
          ))}
        </div>

        <div className="space-y-16 md:space-y-32">
          {craftsmanshipDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="flex-1 group">
                <BlurredCard className="relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${detail.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <motion.img
                      src={detail.image}
                      alt={detail.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      style={{
                        background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)'
                      }}
                    />
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
                        'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)',
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </BlurredCard>
              </div>
              
              <div className="flex-1 space-y-6 md:space-y-8">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "5rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-px bg-white/30"
                />
                <motion.h3 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1,
                    type: "spring",
                    bounce: 0.3
                  }}
                  className="text-4xl md:text-6xl font-light tracking-wider text-white"
                >
                  {detail.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-lg md:text-xl text-white/70 leading-relaxed font-light"
                >
                  {detail.description}
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-px bg-gradient-to-r from-white/30 to-transparent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'rgba(56,189,248,0.3)' : 'rgba(168,85,247,0.3)',
              borderRadius: '50%',
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
    </section>
  );
};

export default Craftsmanship;