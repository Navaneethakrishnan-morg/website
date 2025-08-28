'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-olive-green text-cream py-16">
      <div className="container-custom">
        {/* Email Signup Section */}
        <div className="text-center">
          <div className="max-w-md mx-auto space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-cream">
              If you are interested, enter your email below:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-cream/10 border-2 border-cream/20 rounded-xl
                         placeholder:text-cream/50 text-cream
                         focus:outline-none focus:border-terracotta focus:ring-4 focus:ring-terracotta/20
                         transition-all duration-300"
                id="footer-email"
              />
              <button
                onClick={() => {
                  const emailInput = document.getElementById('footer-email') as HTMLInputElement;
                  const email = emailInput?.value || '';
                  window.location.href = `mailto:${email}`;
                }}
                className="bg-terracotta text-white font-semibold py-3 px-6 rounded-xl
                         transition-all duration-300 hover:scale-105 hover:shadow-lg
                         focus:outline-none focus:ring-4 focus:ring-terracotta/50
                         whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-cream/70 text-sm">
              © 2024 LuminalQ. All rights reserved. Built with ❤️ for learners everywhere.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-cream/70 hover:text-terracotta transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/70 hover:text-terracotta transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-cream/70 hover:text-terracotta transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;