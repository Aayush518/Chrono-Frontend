import React from 'react';
import { Watch, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: Mail, text: 'contact@chrono.com' },
    { icon: MapPin, text: '123 Luxury Avenue, NY 10001' }
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Watch className="w-6 h-6 text-white" />
              <span className="text-2xl font-bold text-white">CHRONO</span>
            </div>
            <p className="text-white/60">
              Crafting timeless elegance since 1900. Each timepiece tells a unique story of precision and luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Collection', 'About Us', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center gap-2 text-white/60">
                    <Icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-medium mb-4">Newsletter</h3>
            <p className="text-white/60 mb-4">
              Subscribe to receive updates about new collections and special offers.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/20"
              />
              <button className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 CHRONO. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;