import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none inline-flex items-center justify-center';
    
    const variantClasses = {
      primary: 'bg-gradient-primary text-white hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-terracotta focus:ring-opacity-50',
      secondary: 'bg-transparent border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white focus:ring-4 focus:ring-terracotta focus:ring-opacity-50'
    };
    
    const sizeClasses = {
      sm: 'py-2 px-4 text-sm',
      md: 'py-4 px-8 text-base',
      lg: 'py-5 px-10 text-lg'
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };