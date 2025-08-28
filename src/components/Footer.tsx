'use client';

import React from 'react';
import { BookOpen, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui';

const Footer = () => {
  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Demo', href: '#demo' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Status', href: '#status' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-olive-green text-cream py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-cream">LuminalQ</span>
                <div className="text-sm text-cream/70 -mt-1">made with Genrec-AI</div>
              </div>
            </div>
            <p className="text-cream/80 leading-relaxed mb-6 max-w-sm">
              Transform your learning experience with AI-powered document analysis, 
              interactive conversations, and personalized study tools.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center 
                           hover:bg-terracotta transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-cream/70 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-cream mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-terracotta transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-cream mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-terracotta transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-cream mb-4">Support</h3>
            <ul className="space-y-3">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-terracotta transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-cream mb-4">Stay Updated</h3>
            <p className="text-cream/70 text-sm mb-4">
              Get the latest features and learning tips delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg 
                         text-cream placeholder:text-cream/50 focus:outline-none 
                         focus:border-terracotta transition-colors duration-300"
              />
              <Button size="sm" className="w-full">
                Subscribe
              </Button>
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