
import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  className?: string;
  id?: string;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ className, id }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Plan",
      description: "We dive deep into your business goals, target audience, and competitors (don't worry, no corporate espionage—just good research)."
    },
    {
      id: 2,
      title: "Create",
      description: "Our design wizards craft stunning, on-brand visuals and content that don't just look good—they work."
    },
    {
      id: 3,
      title: "Manage",
      description: "From handling social media chaos to ensuring smooth content distribution, we keep things running while you focus on your business."
    },
    {
      id: 4,
      title: "Grow",
      description: "We help your brand reach the right people, at the right time, in the right way—because success shouldn't be left to chance."
    }
  ];

  return (
    <div 
      id={id} 
      className={cn(
        "py-24 px-6 md:px-10 relative",
        isLight ? "bg-gradient-to-b from-mint-100 to-white" : "bg-gradient-to-b from-blue-950 to-black",
        className
      )}
    >
      <div className="absolute inset-0 bg-[url('/lovable-uploads/fe5dd66c-021a-419d-8b51-ac6396c9a78f.png')] bg-center bg-contain bg-no-repeat opacity-10 z-0"></div>
      <div className={cn(
        "absolute inset-0 z-0",
        isLight ? "bg-gradient-to-b from-mint-100/70 to-white/90" : "bg-gradient-to-b from-blue-950/70 to-black/90"
      )}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className={cn(
              "inline-block px-4 py-1 mb-4 text-sm font-medium backdrop-blur-md rounded-full",
              isLight ? "bg-mint-200/50 border border-mint-300 text-gray-800" : "bg-white/10 border border-white/20 text-white"
            )}>
              Our Process
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className={cn(
              "text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight",
              isLight ? "text-gray-900" : "text-white"
            )}>
              Our Process: How We Work
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <p className={cn(
              "text-lg max-w-3xl mx-auto",
              isLight ? "text-gray-600" : "text-white/70"
            )}>
              We keep things simple, smart, and effective—no unnecessary jargon, just results.
            </p>
          </FadeIn>
        </div>
        
        <div className="relative timeline-container">
          {/* Enhanced Glowing Connector Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block timeline-line">
            <div className={cn(
              "absolute inset-0 animate-pulse-soft",
              isLight 
                ? "bg-gradient-to-b from-mint-400/20 via-mint-500/60 to-mint-400/20" 
                : "bg-gradient-to-b from-blue-500/20 via-blue-500/60 to-blue-500/20"
            )}></div>
          </div>
          
          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => (
              <FadeIn key={step.id} delay={index * 200}>
                <div className={cn(
                  "flex flex-col md:flex-row items-center",
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                )}>
                  <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <div className="relative">
                      {/* Step Number with Enhanced Glow */}
                      <div className={cn(
                        "w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative z-10",
                        isLight 
                          ? "bg-gradient-to-r from-mint-500 to-mint-600" 
                          : "bg-gradient-to-r from-blue-500 to-indigo-500"
                      )}>
                        <span className="text-3xl md:text-4xl font-display font-bold text-white">{step.id}</span>
                      </div>
                      <div className={cn(
                        "absolute -inset-3 rounded-full blur-md -z-10 animate-pulse-soft",
                        isLight 
                          ? "bg-gradient-to-r from-mint-500/20 to-mint-600/20" 
                          : "bg-gradient-to-r from-blue-500/20 to-indigo-500/20"
                      )}></div>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "md:w-1/2 text-center md:text-left",
                    index % 2 === 1 ? "md:text-right md:pr-16" : "md:pl-16"
                  )}>
                    <h3 className={cn(
                      "text-2xl md:text-3xl font-display font-bold mb-4",
                      isLight ? "text-gray-800" : "text-white"
                    )}>
                      {step.title}
                    </h3>
                    <p className={cn(
                      "text-lg",
                      isLight ? "text-gray-600" : "text-white/70"
                    )}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
