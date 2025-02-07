import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface CustomerReviewsProps {
  isMobile?: boolean;
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ isMobile = false }) => {
  const customerImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
  ];

  if (isMobile) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
      >
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75" />
                <div className="relative bg-black rounded-full p-2">
                  <Star className="w-4 h-4 text-white" fill="white" />
                </div>
              </motion.div>
              <div>
                <div className="text-xl font-bold text-white">10K+</div>
                <div className="text-xs text-white/60">Satisfied Customers</div>
              </div>
            </div>

            <div className="flex -space-x-2">
              {customerImages.slice(0, 3).map((imgSrc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
                    <img
                      src={imgSrc}
                      alt={`Customer ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              </motion.div>
            ))}
            <span className="ml-2 text-sm text-white/60">4.9/5</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl"
    >
      <div className="flex items-center gap-6">
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75" />
          <div className="relative bg-black rounded-full p-3">
            <Star className="w-6 h-6 text-white" fill="white" />
          </div>
        </motion.div>
        
        <div>
          <motion.div 
            className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            10K+
          </motion.div>
          <div className="text-sm text-white/60">Satisfied Customers</div>
        </div>

        <div className="flex -space-x-3">
          {customerImages.map((imgSrc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
              className="relative"
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors">
                <img
                  src={imgSrc}
                  alt={`Customer ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + i * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 180 }}
          >
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          </motion.div>
        ))}
        <span className="ml-2 text-sm text-white/60">4.9/5</span>
      </div>
    </motion.div>
  );
};

export default CustomerReviews;