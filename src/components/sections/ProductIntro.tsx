
import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Parallax } from '@/components/animations/Parallax';
import { cn } from '@/lib/utils';

interface ProductIntroProps {
  className?: string;
  id?: string;
}

export const ProductIntro: React.FC<ProductIntroProps> = ({ className, id }) => {
  return (
    <div id={id} className={cn("py-24 px-6 md:px-10 relative overflow-hidden bg-black", className)}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-0"></div>
      <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-b from-blue-500/10 to-purple-500/5 blur-2xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn direction="right">
              <div className="text-sm font-medium text-blue-400 mb-3 tracking-wider">THE CONCEPT</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
                Designed to transform your experience
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Created with meticulous attention to detail, our product represents a fundamental 
                rethinking of what's possible. Every element has been carefully considered to 
                deliver a seamless, intuitive experience.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unparalleled performance",
                  "Thoughtful, intuitive design",
                  "Seamless integration",
                  "Revolutionary technology"
                ].map((item, index) => (
                  <FadeIn key={index} delay={index * 100} duration={800}>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
              
              <FadeIn duration={1000}>
                <button className="px-6 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Learn about our approach
                </button>
              </FadeIn>
            </FadeIn>
          </div>
          
          <div className="relative">
            <Parallax speed={0.1}>
              <div className="relative rounded-xl overflow-hidden aspect-square md:aspect-auto md:h-[500px] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm z-0"></div>
                <div className="relative z-10 h-full flex items-center justify-center p-6">
                  <div className="glass rounded-xl w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md mx-auto mb-6 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse-soft"></div>
                      </div>
                      <h3 className="text-2xl font-display font-medium text-white mb-2">Premium Design</h3>
                      <p className="text-white/70 max-w-xs mx-auto">
                        Crafted with precision and care to provide an exceptional experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
            
            <FadeIn>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-xl">
                <p className="text-white font-medium">
                  "A truly revolutionary product that changed how I work."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/30"></div>
                  <div className="ml-3">
                    <div className="text-white font-medium text-sm">Sarah Johnson</div>
                    <div className="text-white/70 text-xs">Creative Director</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};
