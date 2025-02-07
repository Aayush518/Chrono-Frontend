import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Features from '../Features';
import HeroContent from './HeroContent';
import HeroDisplay from './HeroDisplay';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.8]);

  // Constellation effect
  useEffect(() => {
    const canvas = document.getElementById('constellation') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100; // Reduce particles on mobile
    const connectionDistance = window.innerWidth < 768 ? 50 : 100; // Reduce connection distance on mobile
    const particleSize = window.innerWidth < 768 ? 0.5 : 1; // Smaller particles on mobile

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / connectionDistance)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen pt-24 overflow-hidden">
      {/* Constellation Canvas */}
      <canvas
        id="constellation"
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Dynamic Background */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="fixed inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A]" />
        
        {/* Animated Gradient Overlay */}
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

        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${20 * i}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              x: useTransform(
                smoothProgress,
                [0, 1],
                ['-100%', '100%']
              )
            }}
          />
        ))}

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'rgba(56,189,248,0.3)' : 'rgba(168,85,247,0.3)',
              borderRadius: '50%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0"
        style={{ scale }}
      >
        <HeroContent />
        <HeroDisplay />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-px h-24 bg-gradient-to-b from-white/0 via-white/20 to-white/0"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;