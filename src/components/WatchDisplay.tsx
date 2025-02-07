import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParallaxEffect } from '../hooks/useParallaxEffect';
import WatchImage from './watch/WatchImage';
import WatchBackground from './watch/WatchBackground';
import WatchHotspots from './watch/WatchHotspots';
import WatchLoader from './watch/WatchLoader';
import CustomerReviews from './CustomerReviews';

const hotspots = [
  { 
    top: '30%', 
    left: '20%', 
    label: 'Swiss Movement',
    description: 'Precision-engineered automatic movement with 72-hour power reserve'
  },
  { 
    top: '50%', 
    left: '80%', 
    label: 'Sapphire Crystal',
    description: 'Scratch-resistant double-domed sapphire with anti-reflective coating'
  },
  { 
    top: '70%', 
    left: '40%', 
    label: 'Premium Leather',
    description: 'Hand-stitched alligator leather with deployant clasp'
  },
];

const WatchDisplay = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSpot, setActiveSpot] = useState<number | null>(null);
  const { handleMouseMove, handleMouseLeave, rotateX, rotateY } = useParallaxEffect();

  return (
    <div className="relative w-full">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center px-4">
          <WatchBackground />
          
          <motion.div
            className="relative w-full max-w-[80vw] aspect-square"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {!isLoaded && <WatchLoader />}
            
            <WatchImage
              src="https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Watch"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>

          {/* Mobile Feature List */}
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full mt-8 space-y-4"
            >
              {hotspots.map((spot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <h3 className="text-white font-medium mb-1">{spot.label}</h3>
                  <p className="text-white/70 text-sm">{spot.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Mobile Reviews */}
          <div className="w-full mt-8">
            <CustomerReviews isMobile={true} />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-[80vh] flex items-center justify-center px-4">
        <WatchBackground />

        <motion.div
          style={{ 
            rotateX, 
            rotateY,
            perspective: 1000,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-[600px] aspect-square flex items-center justify-center"
        >
          {!isLoaded && <WatchLoader />}

          <motion.div
            className="relative w-full h-full p-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <WatchImage
              src="https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Watch"
              onLoad={() => setIsLoaded(true)}
            />

            {isLoaded && (
              <WatchHotspots
                hotspots={hotspots}
                activeSpot={activeSpot}
                setActiveSpot={setActiveSpot}
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WatchDisplay;