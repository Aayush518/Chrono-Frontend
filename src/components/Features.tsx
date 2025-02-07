import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Swiss Movement",
    description: "Precision engineered mechanics"
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Guaranteed excellence"
  },
  {
    icon: Award,
    title: "Limited Edition",
    description: "Exclusive timepieces"
  }
];

const Features = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
            className="group relative flex flex-col items-center text-center p-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="relative w-10 sm:w-12 h-10 sm:h-12 mb-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg transform group-hover:scale-125 transition-transform duration-300" />
              <div className="relative w-full h-full rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-colors">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </motion.div>
            <h3 className="text-sm sm:text-base font-medium mb-1 group-hover:text-white/90 transition-colors text-white">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-white/60 group-hover:text-white/70 transition-colors">{feature.description}</p>
            
            {/* Hover line animation */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:w-full transition-all duration-300"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Features;