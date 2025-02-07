import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';

interface TimelineWatchProps {
  watch: {
    name: string;
    year: string;
    price: string;
    image: string;
    features: string[];
    description: string;
    position: 'left' | 'right';
  };
  index: number;
}

const TimelineWatch: React.FC<TimelineWatchProps> = ({ watch, index }) => {
  const isLeft = watch.position === 'left';

  return (
    <div className={`relative mb-32 last:mb-0 ${isLeft ? 'text-right' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className={`grid grid-cols-[1fr,auto,1fr] gap-8 items-center ${isLeft ? 'direction-rtl' : ''}`}
      >
        {/* Content */}
        <div className={isLeft ? 'col-start-1' : 'col-start-3'}>
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${isLeft ? 'origin-right' : 'origin-left'}`} />
            
            <div className="relative space-y-6 bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              {/* Year Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Star className="w-4 h-4 text-white mr-2" fill="currentColor" />
                <span className="text-sm font-medium text-white">{watch.year}</span>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{watch.name}</h3>
                <p className="text-white/70">{watch.description}</p>
              </div>

              <div className="space-y-2">
                {watch.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-white/70 gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/60" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-2xl font-bold text-white">{watch.price}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors"
                >
                  Details
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Node */}
        <div className="relative col-start-2 w-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="w-4 h-4 rounded-full bg-white relative z-10"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-white/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>

        {/* Image */}
        <div className={isLeft ? 'col-start-3' : 'col-start-1'}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 mix-blend-multiply" />
            <img
              src={watch.image}
              alt={watch.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineWatch;