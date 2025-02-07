import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BlurredCard from '../effects/BlurredCard';

const watches = [
  {
    name: "Royal Oak Black Ceramic",
    price: "$185,000",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",
    specs: {
      case: "41mm",
      movement: "Calibre 4401",
      power: "72h Reserve"
    },
    details: "A masterpiece in black ceramic, featuring our signature octagonal bezel and self-winding movement."
  },
  {
    name: "Nautilus Dark Side",
    price: "$220,000",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=800&q=80",
    specs: {
      case: "40mm",
      movement: "Calibre 240 Q",
      power: "48h Reserve"
    },
    details: "The iconic silhouette reimagined in mysterious dark tones with perpetual calendar."
  },
  {
    name: "Daytona Stealth",
    price: "$195,000",
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=800&q=80",
    specs: {
      case: "40mm",
      movement: "Calibre 4130",
      power: "70h Reserve"
    },
    details: "Ultimate precision meets dark sophistication in this limited edition chronograph."
  }
];

const Collection = () => {
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section className="relative min-h-screen py-16 md:py-32 overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#080808]" />
        
        {/* Animated Gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 70%, rgba(168,85,247,0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px"
              style={{
                top: `${i * 10}%`,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                x: useTransform(
                  smoothProgress,
                  [0, 1],
                  [`${i % 2 === 0 ? '-100%' : '100%'}`, `${i % 2 === 0 ? '100%' : '-100%'}`]
                )
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-white/30"
            />
            <span className="text-white/70 text-sm tracking-[0.2em] uppercase">Black Edition</span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-white/30"
            />
          </div>
          
          <div className="relative -mx-4 md:mx-0 overflow-hidden">
            <div className="relative px-4 md:px-0">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="text-[15vw] md:text-7xl font-light tracking-wider text-white mb-8 md:mb-12 whitespace-nowrap overflow-visible relative"
                style={{
                  textShadow: '0 0 40px rgba(255,255,255,0.2)',
                  transform: 'translateX(-5%)'
                }}
              >
                Dark Elegance
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto px-4"
          >
            Discover our exclusive black edition timepieces, where sophistication meets the art of darkness.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {watches.map((watch, index) => (
            <motion.div
              key={watch.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="group"
            >
              <BlurredCard>
                <div className="relative overflow-hidden rounded-lg">
                  <motion.div
                    className="relative aspect-square"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.img
                      src={watch.image}
                      alt={watch.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))'
                      }}
                    />
                  </motion.div>

                  {/* Premium Hover Effect */}
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
                </div>

                <motion.div 
                  className="p-8 space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <div className="space-y-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "2rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      className="h-px bg-white/30"
                    />
                    <h3 className="text-2xl font-light tracking-wider text-white">{watch.name}</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
                    {Object.entries(watch.specs).map(([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + i * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-sm text-white/50 mb-1">{key}</div>
                        <div className="text-white/90 text-sm">{value}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-end justify-between">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="text-sm text-white/50 mb-1">Starting at</div>
                      <div className="text-2xl font-light tracking-wider text-white">{watch.price}</div>
                    </motion.div>
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
                    >
                      Details
                    </motion.button>
                  </div>
                </motion.div>
              </BlurredCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2 }}
          className="flex justify-center gap-8 mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 bg-white text-black tracking-wider hover:bg-white/90 transition-all duration-300"
          >
            View All Models
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 border border-white/20 text-white tracking-wider hover:bg-white/5 transition-all duration-300 group"
          >
            Book Consultation
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'rgba(56,189,248,0.2)' : 'rgba(168,85,247,0.2)',
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

export default Collection;