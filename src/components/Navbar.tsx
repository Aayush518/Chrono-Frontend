import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <motion.nav 
      style={{ backgroundColor: navBackground }}
      className="fixed w-full z-50 top-0 backdrop-blur-sm transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-white to-white/70 text-transparent bg-clip-text group-hover:to-white transition-all duration-300">
              CHRONO
            </div>
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-white/50 to-transparent group-hover:w-full transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {['Collection', 'Craftsmanship', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative text-white/80 hover:text-white transition-colors text-sm font-medium group"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-white/50 to-transparent group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              {[Search, User, ShoppingBag].map((Icon, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative group p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <Icon className="w-5 h-5 text-white group-hover:text-white/90 transition-colors" />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={toggleMobileMenu}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        className={`lg:hidden overflow-hidden bg-black/95 backdrop-blur-lg ${isMobileMenuOpen ? 'fixed inset-0 top-16 sm:top-20' : ''}`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {['Collection', 'Craftsmanship', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-white/80 hover:text-white text-2xl font-light py-3 border-b border-white/10"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                {item}
              </motion.a>
            ))}
            
            {/* Mobile Actions */}
            <div className="flex items-center justify-around pt-6">
              {[
                { icon: Search, label: 'Search' },
                { icon: User, label: 'Account' },
                { icon: ShoppingBag, label: 'Cart' }
              ].map(({ icon: Icon, label }, index) => (
                <motion.button
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <Icon className="w-6 h-6 text-white" />
                  <span className="text-xs text-white/60">{label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;