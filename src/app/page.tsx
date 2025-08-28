import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}