import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fashionImages = [
  {
    url: "/model1.webp",
    price: "$85,000",
    accent: "from-blue-500/20 to-purple-500/20",
    position: "center 20%"
  },
  {
    url: "/gensmodel.webp",
    price: "$95,000",
    accent: "from-purple-500/20 to-blue-500/20",
    position: "center 30%"
  },
  {
    url: "/model2.webp",
    price: "$78,000",
    accent: "from-indigo-500/20 to-blue-500/20",
    position: "center top"
  }
];

const Fashion = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-black">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
        
        {/* Light Effects */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(168,85,247,0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Simple Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-9xl font-light tracking-wider text-white/90 text-center mb-20"
        >
          Timeless
        </motion.h2>

        {/* Portrait Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {fashionImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                {/* Image */}
                <motion.div
                  className="relative h-full transform-gpu"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.img
                    src={image.url}
                    alt="Fashion Portrait"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: image.position }}
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                  />

                  {/* Overlay Effects */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${image.accent} opacity-30`}
                    style={{ mixBlendMode: 'overlay' }}
                    animate={{
                      opacity: hoveredIndex === index ? 0.4 : 0.2
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Vignette */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
                    }}
                  />
                </motion.div>

                {/* Minimal Price Overlay */}
                <motion.div
                  className="absolute bottom-0 right-0 p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                >
                  <div className="text-2xl text-white font-light">{image.price}</div>
                </motion.div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  animate={{
                    background: [
                      'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
                      'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)',
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-5 bg-white text-black rounded-full inline-flex items-center gap-3"
          >
            Explore Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Fashion;