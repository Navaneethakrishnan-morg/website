'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:pt-8 lg:pb-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-sandy-beige/30" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 bg-terracotta/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-light-sage/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Dark Box with Email Form */}
        <motion.div
          className="bg-olive-green rounded-2xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-cream">
              If you are interested, enter your email below:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-cream/10 border-2 border-cream/20 rounded-xl
                         placeholder:text-cream/50 text-cream
                         focus:outline-none focus:border-terracotta focus:ring-4 focus:ring-terracotta/20
                         transition-all duration-300"
                id="contact-email"
              />
              <button
                onClick={() => {
                  const emailInput = document.getElementById('contact-email') as HTMLInputElement;
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
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;