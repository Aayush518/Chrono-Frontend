import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/layout/Hero';
import Collection from './components/sections/Collection';
import CollectionShowcase from './components/sections/CollectionShowcase';
import Craftsmanship from './components/sections/Craftsmanship';
import ModelShowcase from './components/sections/ModelShowcase';
import Fashion from './components/sections/Fashion';
import Footer from './components/layout/Footer';
import Watermark from './components/Watermark';
import { Clock } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '20%']);
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.98, 0.96]);

  useEffect(() => {
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
          <Navbar />
          <main className="relative">
            <Hero />
            <CollectionShowcase />
            <ModelShowcase />
            <Collection />
            <Fashion />
            <Craftsmanship />
          </main>
          <Footer />
          <Watermark />

          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
            style={{ scaleX: smoothProgress }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;