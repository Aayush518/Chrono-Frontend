import React from 'react';
import { motion } from 'framer-motion';

interface BlurredCardProps {
  children: React.ReactNode;
  className?: string;
}

const BlurredCard: React.FC<BlurredCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative group ${className}`}
    >
      {/* Premium Glass Effect */}
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl rounded-lg" />
      
      {/* Dynamic Border */}
      <div className="absolute inset-0 rounded-lg p-[1px]">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-white/0 to-white/20 animate-[gradient_3s_ease-in-out_infinite]" />
      </div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>

      {/* Hover Effects */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
        }}
      />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-white/30 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 transform rotate-90">
        <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-white/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 transform -rotate-90">
        <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-white/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 transform rotate-180">
        <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-white/30 to-transparent" />
      </div>
    </motion.div>
  );
};

export default BlurredCard;