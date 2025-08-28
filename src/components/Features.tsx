'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  MessageSquare, 
  HelpCircle, 
  Brain, 
  StickyNote, 
  BookOpen 
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: 'Smart PDF Processing',
      description: 'Upload and analyze any PDF document with advanced AI processing that understands context and extracts key insights.',
      gradient: 'from-terracotta/20 to-sandy-beige/20',
    },
    {
      icon: MessageSquare,
      title: 'Interactive AI Chat',
      description: 'Ask questions and get detailed explanations about your documents through natural conversation with our AI assistant.',
      gradient: 'from-light-sage/20 to-muted-sage/20',
    },
    {
      icon: HelpCircle,
      title: 'Question Generation',
      description: 'Automatically generate relevant questions to test your understanding and reinforce key concepts from your materials.',
      gradient: 'from-sandy-beige/20 to-cream/40',
    },
    {
      icon: Brain,
      title: 'Quiz Mode',
      description: 'Interactive quizzes to reinforce learning and track progress with personalized feedback and performance analytics.',
      gradient: 'from-terracotta/20 to-light-sage/20',
    },
    {
      icon: StickyNote,
      title: 'Smart Notes',
      description: 'Take notes that integrate seamlessly with your learning materials and sync with AI insights for comprehensive understanding.',
      gradient: 'from-muted-sage/20 to-sandy-beige/20',
    },
    {
      icon: BookOpen,
      title: 'Personal Library',
      description: 'Organize and manage your learning materials in one place with smart categorization and easy search functionality.',
      gradient: 'from-cream/40 to-terracotta/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(203,153,126,0.1),transparent)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(183,183,164,0.1),transparent)] pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-olive-green mb-6">
            Powerful Features for{' '}
            <span className="text-gradient">Enhanced Learning</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-sage max-w-3xl mx-auto leading-relaxed">
            Discover how LuminalQ transforms your learning experience with 
            cutting-edge AI technology and intuitive design.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Card 
                variant="feature" 
                className="h-full group cursor-pointer relative overflow-hidden border-2 border-olive-green/40 shadow-md"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-olive-green/90 group-hover:text-terracotta transition-colors duration-300">
                    {feature.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-olive-green/80 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <motion.div
                    className="mt-4 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-terracotta font-medium text-sm inline-flex items-center">
                      Learn more
                      <motion.span
                        className="ml-1"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-muted-sage mb-8 max-w-2xl mx-auto">
            Ready to revolutionize your learning experience? Join thousands of students 
            and professionals who are already learning smarter with LuminalQ.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="bg-gradient-primary text-white font-semibold py-4 px-8 rounded-xl 
                         shadow-lg hover:shadow-xl transition-all duration-300 
                         focus:outline-none focus:ring-4 focus:ring-terracotta/50"
              whileHover={{
                boxShadow: "0 20px 40px rgba(203, 153, 126, 0.3)",
              }}
            >
              Try LuminalQ Free
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;