'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Upload, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: 'Upload Your PDF',
      description: 'Simply drag and drop your PDF documents or select them from your device. Our AI instantly begins processing and understanding your content.',
      mockup: (
        <div className="bg-white rounded-xl shadow-lg border-2 border-sandy-beige/50 p-6 w-full max-w-sm">
          <div className="border-2 border-dashed border-sandy-beige rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-terracotta mx-auto mb-4" />
            <p className="text-sm text-muted-sage mb-2">Drop your PDF here</p>
            <div className="w-full bg-sandy-beige/30 rounded-full h-2">
              <motion.div
                className="bg-gradient-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 2, delay: 1 }}
              />
            </div>
            <p className="text-xs text-muted-sage mt-2">Processing...</p>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      icon: MessageCircle,
      title: 'Chat & Learn',
      description: 'Start asking questions about your document. Our AI provides detailed explanations, generates questions, and helps you understand complex concepts.',
      mockup: (
        <div className="bg-white rounded-xl shadow-lg border-2 border-sandy-beige/50 p-4 w-full max-w-sm">
          <div className="space-y-3">
            <div className="bg-sandy-beige/30 rounded-lg p-3 text-right">
              <p className="text-sm text-olive-green">What is neural network?</p>
            </div>
            <div className="bg-terracotta/10 rounded-lg p-3">
              <p className="text-sm text-olive-green">A neural network is a computing system inspired by biological neural networks...</p>
            </div>
            <div className="bg-light-sage/20 rounded-lg p-2 text-center">
              <p className="text-xs text-muted-sage">✨ Generated 5 quiz questions</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 3,
      icon: CheckCircle,
      title: 'Test & Review',
      description: 'Take AI-generated quizzes, review your notes, and track your learning progress. Build confidence through interactive practice sessions.',
      mockup: (
        <div className="bg-white rounded-xl shadow-lg border-2 border-sandy-beige/50 p-4 w-full max-w-sm">
          <div className="space-y-4">
            <div className="text-center">
              <h4 className="font-semibold text-olive-green text-sm mb-2">Quiz Results</h4>
              <div className="relative w-20 h-20 mx-auto">
                <svg className="transform -rotate-90 w-20 h-20">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#DDBEA9"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#CB997E"
                    strokeWidth="8"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={226}
                    initial={{ strokeDashoffset: 226 }}
                    animate={{ strokeDashoffset: 56.5 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-terracotta">85%</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-sage">Questions Answered</span>
                <span className="text-olive-green font-medium">17/20</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-sage">Study Streak</span>
                <span className="text-olive-green font-medium">5 days</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 lg:pt-16 lg:pb-32 relative overflow-hidden">
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-olive-green mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-sage max-w-3xl mx-auto leading-relaxed">
            Get started with LuminalQ in three simple steps. Transform your learning 
            experience from passive reading to active, intelligent engagement.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="space-y-16 lg:space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-16 h-16 bg-gradient-primary border-2 border-sandy-beige/50 shadow-lg rounded-2xl flex items-center justify-center relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0"
                        whileHover={{ opacity: 0.8, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <div className="w-12 h-12 bg-terracotta/20 border-2 border-terracotta/30 shadow-md rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-terracotta" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-olive-green mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-sage leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mockup */}
                <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.mockup}
                  </motion.div>
                </div>
              </div>

              {/* Connecting Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="flex justify-center mt-12 lg:mt-16"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="w-12 h-12 bg-sandy-beige/50 border-2 border-sandy-beige shadow-md rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-terracotta transform rotate-90" />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Contact Form */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-md mx-auto space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-olive-green">
              If you are interested, enter your email below:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-sandy-beige/30 border-2 border-sandy-beige rounded-xl
                         placeholder:text-muted-sage text-olive-green
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
                className="bg-gradient-primary text-white font-semibold py-3 px-6 rounded-xl
                         transition-all duration-300 hover:scale-105 hover:shadow-lg
                         focus:outline-none focus:ring-4 focus:ring-terracotta/50
                         whitespace-nowrap"
              >
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;