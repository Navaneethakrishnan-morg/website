'use client';

import React from 'react';
import { Button } from '@/components/ui';
import { BookOpen, MessageSquare, Brain, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const features = [
    {
      icon: BookOpen,
      text: 'Smart PDF Processing',
    },
    {
      icon: MessageSquare,
      text: 'AI-Powered Chat',
    },
    {
      icon: Brain,
      text: 'Interactive Learning',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-terracotta/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-light-sage/10 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-sandy-beige/20 rounded-full blur-xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-olive-green leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Illuminate Your{' '}
                <span className="text-gradient">Learning Journey</span>
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-muted-sage leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform any PDF into an intelligent learning experience with 
                AI-powered insights, interactive conversations, and personalized 
                study tools.
              </motion.p>
            </div>

            {/* Feature Highlights */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-terracotta/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-terracotta" />
                  </div>
                  <span className="text-olive-green font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button size="lg" className="group">
                Start Learning Now
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Mock Interface */}
            <div className="relative max-w-lg mx-auto">
              {/* Chat Interface Mockup */}
              <motion.div
                className="bg-white rounded-2xl shadow-2xl border-2 border-sandy-beige/50 p-6 relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-sandy-beige/30">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-olive-green">
                        AI Learning Assistant
                      </h3>
                      <p className="text-sm text-muted-sage">
                        Analyzing: Introduction to AI.pdf
                      </p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-3">
                    <motion.div
                      className="bg-sandy-beige/30 rounded-lg p-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <p className="text-sm text-olive-green">
                        "Explain the concept of machine learning in simple terms"
                      </p>
                    </motion.div>
                    
                    <motion.div
                      className="bg-terracotta/10 rounded-lg p-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.0 }}
                    >
                      <p className="text-sm text-olive-green">
                        Machine learning is like teaching a computer to recognize patterns...
                      </p>
                    </motion.div>
                  </div>

                  {/* Input */}
                  <div className="flex items-center space-x-2 pt-2">
                    <div className="flex-1 bg-sandy-beige/20 rounded-lg px-3 py-2">
                      <p className="text-sm text-muted-sage">Ask another question...</p>
                    </div>
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border-2 border-sandy-beige/50 p-3"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-terracotta" />
                  <span className="text-xs font-medium text-olive-green">
                    Quiz Generated
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border-2 border-sandy-beige/50 p-3"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-terracotta" />
                  <span className="text-xs font-medium text-olive-green">
                    Notes Saved
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;