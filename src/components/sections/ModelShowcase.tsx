import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ModelImage from './model/ModelImage';
import ModelContent from './model/ModelContent';
import ModelBackground from './model/ModelBackground';

const ModelShowcase = () => {
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
  const modelOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const modelScale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      <ModelBackground />
      
      {/* Enhanced Ambient Light Effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 70%, rgba(168,85,247,0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Dynamic Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute h-full w-px"
            style={{
              left: `${i * 10}%`,
              background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.05), transparent)',
              y: useTransform(
                smoothProgress,
                [0, 1],
                [`${i % 2 === 0 ? '-100%' : '100%'}`, `${i % 2 === 0 ? '100%' : '-100%'}`]
              )
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        {/* Enhanced Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-20 sticky top-32 z-10"
        >
          {/* Premium Glass Effect Background */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-2xl"
            style={{
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            whileInView={{
              boxShadow: [
                '0 0 20px rgba(56,189,248,0.1)',
                '0 0 40px rgba(168,85,247,0.1)',
                '0 0 20px rgba(56,189,248,0.1)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Enhanced Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {/* Animated Corner Accents */}
            {[0, 90, 180, 270].map((rotation, index) => (
              <motion.div
                key={index}
                className="absolute w-16 h-16"
                style={{
                  top: rotation < 180 ? -1 : 'auto',
                  bottom: rotation >= 180 ? -1 : 'auto',
                  left: rotation < 90 || rotation > 270 ? -1 : 'auto',
                  right: rotation >= 90 && rotation <= 270 ? -1 : 'auto',
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-px h-8 origin-top"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
                  }}
                  animate={{ scaleY: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-px w-8 origin-left"
                  style={{
                    background: 'linear-gradient(to right, rgba(255,255,255,0.3), transparent)',
                  }}
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="relative py-12 px-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"
            />
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative text-4xl md:text-6xl font-bold mb-6"
            >
              {/* Text Gradient with Animation */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/70 opacity-0 text-transparent bg-clip-text"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Royal Oak Collection
              </motion.span>
              <span className="bg-gradient-to-r from-white via-white to-white/70 text-transparent bg-clip-text">
                Royal Oak Collection
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 max-w-2xl mx-auto text-lg"
            >
              A masterpiece of precision engineering and timeless elegance
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Model Display Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ opacity: modelOpacity, scale: modelScale }}
            className="relative group"
          >
            {/* Premium Hover Effect */}
            <motion.div
              className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(168,85,247,0.1) 0%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <ModelImage />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ opacity: modelOpacity, scale: modelScale }}
            className="relative group"
          >
            {/* Enhanced Glass Effect */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-2xl"
              style={{
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              whileHover={{
                boxShadow: [
                  '0 0 20px rgba(56,189,248,0.1)',
                  '0 0 40px rgba(168,85,247,0.1)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <ModelContent />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'rgba(56,189,248,0.3)' 
                : i % 3 === 1 
                  ? 'rgba(168,85,247,0.3)'
                  : 'rgba(255,255,255,0.3)',
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

export default ModelShowcase;