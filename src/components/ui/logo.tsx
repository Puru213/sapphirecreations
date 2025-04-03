
import React from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/use-theme';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
  linkToHome?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md',
  variant = 'default',
  linkToHome = true
}) => {
  const { theme } = useTheme();
  const location = useLocation();
  
  const sizes = {
    sm: 'text-xs md:text-sm',
    md: 'text-sm md:text-base',
    lg: 'text-base md:text-lg'
  };

  const logoContent = (
    <div className={cn(
      "flex items-center font-display font-bold relative", 
      sizes[size],
      className
    )}>
      {variant === 'default' && (
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className={cn(
            "absolute inset-0 rounded-full blur-lg",
            theme === 'light' 
              ? "bg-gradient-to-r from-mint-500/10 to-mint-600/10" 
              : "bg-gradient-to-r from-blue-500/10 to-indigo-500/10"
          )}></div>
        </div>
      )}
      
      <div className="flex flex-col items-center">
        <span className={cn(
          "bg-clip-text text-transparent",
          theme === 'light' 
            ? "bg-gradient-to-r from-mint-500 to-mint-600" 
            : "bg-gradient-to-r from-blue-400 to-indigo-400"
        )}>
          Sapphire
        </span>
        <span className="text-white text-opacity-80 -mt-1 text-[0.65em]">
          creations
        </span>
        
        {variant === 'default' && (
          <div className="absolute -inset-1 border border-white/10 rounded-full opacity-30"></div>
        )}
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
