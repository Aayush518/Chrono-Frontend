import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParallaxEffect } from '../../hooks/useParallaxEffect';

interface Hotspot {
  top: string;
  left: string;
  label: string;
  description: string;
}

interface WatchHotspotsProps {
  hotspots: Hotspot[];
  activeSpot: number | null;
  setActiveSpot: (index: number | null) => void;
}

const WatchHotspots: React.FC<WatchHotspotsProps> = ({ hotspots, activeSpot, setActiveSpot }) => {
  const { rotateX, rotateY } = useParallaxEffect();

  return (
    <>
      {hotspots.map((spot, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: spot.top, left: spot.left }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + index * 0.2 }}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setActiveSpot(index)}
            onHoverEnd={() => setActiveSpot(null)}
          >
            {/* Hotspot Dot */}
            <motion.div
              className="relative"
              animate={{
                scale: activeSpot === index ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: activeSpot === index ? Infinity : 0,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-white/30"
                animate={{
                  scale: [1, 2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="w-3 h-3 bg-white rounded-full relative z-10" />
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {activeSpot === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute left-full ml-4 top-1/2 -translate-y-1/2 z-20"
                  style={{ rotateX, rotateY }}
                >
                  <div className="bg-black/80 backdrop-blur-xl p-4 rounded-lg border border-white/20 shadow-2xl">
                    <h4 className="text-white font-medium mb-1">{spot.label}</h4>
                    <p className="text-white/70 text-sm w-48">{spot.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default WatchHotspots;