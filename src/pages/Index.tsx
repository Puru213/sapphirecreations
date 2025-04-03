
import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductIntro } from '@/components/sections/ProductIntro';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CTASection } from '@/components/sections/CallToAction';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ProcessSection } from '@/components/sections/ProcessSection';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId as string);
      if (targetElement) {
        // Add offset for header
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Handle URL hash on initial load (for direct links to sections)
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If no hash, ensure we start at the top
      window.scrollTo(0, 0);
    }
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="bg-black dark:bg-black light:bg-white min-h-screen text-white dark:text-white light:text-gray-900">
      <Header />
      
      <main className="min-h-[calc(100vh-64px)] pb-0">
        <HeroSection />
        <ProductIntro id="about" />
        <FeatureShowcase id="services" />
        <PortfolioSection id="portfolio" />
        <ProcessSection id="process" />
        <BenefitsSection id="benefits" />
        <CTASection id="contact" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
