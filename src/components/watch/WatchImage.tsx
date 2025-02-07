import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useParallaxEffect } from '../../hooks/useParallaxEffect';

interface WatchImageProps {
  src: string;
  alt: string;
  onLoad: () => void;
}

const WatchImage: React.FC<WatchImageProps> = ({ src, alt, onLoad }) => {
  const { rotateX, rotateY } = useParallaxEffect();

  return (
    <motion.div
      className="relative w-full h-full"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background Mask */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, black 100%)',
          rotateX,
          rotateY,
        }}
      />

      {/* Watch Image with Blend Mode */}
      <motion.img 
        src={src}
        alt={alt}
        onLoad={onLoad}
        className="w-full h-full object-contain"
        style={{
          mixBlendMode: 'screen',
          filter: 'brightness(1.2) contrast(1.4)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          rotateX,
          rotateY,
        }}
      />

      {/* Premium Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%)',
          mixBlendMode: 'overlay',
          rotateX,
          rotateY,
        }}
      />
    </motion.div>
  );
};

export default WatchImage;