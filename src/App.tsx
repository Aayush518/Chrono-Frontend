import React, { useState, useEffect, Suspense } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/layout/Hero';
import Watermark from './components/Watermark';

// Lazy load components that are not immediately visible
const Collection = React.lazy(() => import('./components/sections/Collection'));
const CollectionShowcase = React.lazy(() => import('./components/sections/CollectionShowcase'));
const Craftsmanship = React.lazy(() => import('./components/sections/Craftsmanship'));
const ModelShowcase = React.lazy(() => import('./components/sections/ModelShowcase'));
const Fashion = React.lazy(() => import('./components/sections/Fashion'));
const Footer = React.lazy(() => import('./components/layout/Footer'));

// Loading component with smooth fade
const SectionLoader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-full h-[50vh] flex items-center justify-center"
  >
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
    >
      <div className="w-8 h-8 rounded-full bg-white/20" />
    </motion.div>
  </motion.div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const springConfig = { 
    stiffness: 70, // Reduced for smoother motion
    damping: 20, 
    restDelta: 0.001 
  };
  
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '20%']);
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.98, 0.96]);

  useEffect(() => {
    // Preload critical resources
    const preloadImages = [
      "https://images.unsplash.com/photo-1622434641406-a158123450f9",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e"
    ];

    Promise.all(
      preloadImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    ).then(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
      setTimeout(() => setIsLoading(false), 1000);
    });

    return () => {
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
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-white/20"
              animate={{
                borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.2)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <motion.div
                className="absolute inset-1 rounded-full border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
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
            <Suspense fallback={<SectionLoader />}>
              <CollectionShowcase />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <ModelShowcase />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Collection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Fashion />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Craftsmanship />
            </Suspense>
          </main>
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
          <Watermark />

          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
            style={{ 
              scaleX: smoothProgress,
              filter: 'blur(1px)',
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;