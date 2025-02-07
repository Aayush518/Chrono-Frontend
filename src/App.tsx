import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/layout/Hero';
import Collection from './components/sections/Collection';
import Craftsmanship from './components/sections/Craftsmanship';
import ModelShowcase from './components/sections/ModelShowcase';
import Footer from './components/layout/Footer';
import Watermark from './components/Watermark';
import { Clock } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values for various scroll-based animations
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '20%']);
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.98, 0.96]);

  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-[#080808] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            className="relative"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <Clock className="w-12 h-12 text-white" />
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Fixed Background with Parallax */}
          <motion.div 
            className="fixed inset-0 -z-10"
            style={{ y: backgroundY, opacity: backgroundOpacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A]" />
            
            {/* Dynamic Grid */}
            <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-20">
              {[...Array(400)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border-[0.5px] border-white/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.001 }}
                />
              ))}
            </div>

            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 80%, rgba(168,85,247,0.15) 0%, transparent 50%)',
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>

          {/* Main Content */}
          <motion.div style={{ scale }}>
            <Navbar />
            <main className="relative">
              <Hero />
              <ModelShowcase />
              <Collection />
              <Craftsmanship />
            </main>
            <Footer />
          </motion.div>

          <Watermark />

          {/* Smooth Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
            style={{ scaleX: smoothProgress }}
          />

          {/* Scroll Indicator */}
          <motion.div
            className="fixed bottom-8 right-8 z-40 mix-blend-difference"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <motion.div
                className="w-1 h-4 bg-white/50 rounded-full"
                animate={{
                  scaleY: [1, 0.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;