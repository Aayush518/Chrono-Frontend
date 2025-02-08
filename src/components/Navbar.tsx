import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  return (
    <>
      <motion.nav 
        initial={false}
        className={`fixed w-full z-[100] top-0 transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-[100]">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <div className="relative group">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-white to-white/70 text-transparent bg-clip-text group-hover:to-white transition-all duration-300">
                CHRONO
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-white/50 to-transparent group-hover:w-full transition-all duration-300" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {['Collection', 'Craftsmanship', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/80 hover:text-white transition-colors text-sm font-medium group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-white/50 to-transparent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Desktop Actions */}
              <div className="hidden sm:flex items-center space-x-4">
                {[Search, User, ShoppingBag].map((Icon, index) => (
                  <button
                    key={index}
                    className="relative group p-2"
                  >
                    <div className="absolute inset-0 bg-white/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <Icon className="w-5 h-5 text-white group-hover:text-white/90 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden relative z-[100] p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 sm:top-20 bg-black z-[90]"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {['Collection', 'Craftsmanship', 'About', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-white/80 hover:text-white text-2xl font-light py-3 border-b border-white/10"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        document.body.style.overflow = '';
                      }}
                    >
                      {item}
                    </a>
                  ))}
                  
                  {/* Mobile Actions */}
                  <div className="flex items-center justify-around pt-6">
                    {[
                      { icon: Search, label: 'Search' },
                      { icon: User, label: 'Account' },
                      { icon: ShoppingBag, label: 'Cart' }
                    ].map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        className="flex flex-col items-center space-y-2"
                      >
                        <Icon className="w-6 h-6 text-white" />
                        <span className="text-xs text-white/60">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.body.style.overflow = '';
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;