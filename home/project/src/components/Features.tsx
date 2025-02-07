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
      className="grid grid-cols-3 gap-6 mt-12"
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
            className="flex flex-col items-center text-center p-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3"
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-white text-sm font-medium mb-1">{feature.title}</h3>
            <p className="text-white/60 text-xs">{feature.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Features;