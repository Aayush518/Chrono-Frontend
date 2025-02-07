import React from 'react';
import { motion } from 'framer-motion';
import BlurredCard from '../../effects/BlurredCard';
import { ChevronRight, Star } from 'lucide-react';

interface WatchCardProps {
  watch: {
    name: string;
    price: string;
    image: string;
    features: string[];
    color: string;
    description: string;
  };
  index: number;
}

const WatchCard: React.FC<WatchCardProps> = ({ watch, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <BlurredCard>
        <div className="relative overflow-hidden rounded-lg group">
          {/* Background Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${watch.color} opacity-30 group-hover:opacity-40 transition-opacity duration-700`} />
          
          {/* Watch Image */}
          <div className="relative aspect-[4/5]">
            <img
              src={watch.image}
              alt={watch.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Premium Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4 text-white" fill="currentColor" />
              <span className="text-xs font-medium text-white">Premium</span>
            </div>

            {/* Content Overlay - Now always visible but transforms on hover */}
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="space-y-4 backdrop-blur-sm bg-black/20 p-6 rounded-xl border border-white/10">
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2">{watch.name}</h3>
                  <p className="text-white/70 text-sm">{watch.description}</p>
                </div>

                <div className="space-y-2">
                  {watch.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-white/70">
                      <div className="w-1 h-1 rounded-full bg-white/60 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xl font-medium text-white">{watch.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black backdrop-blur-sm hover:bg-white/90 transition-colors"
                  >
                    Details
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurredCard>
    </motion.div>
  );
};

export default WatchCard;