
import React from 'react';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/animations/FadeIn';
import { Logo } from '@/components/ui/logo';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const footerLinks = [
    {
      title: "Our Services",
      links: [
        { name: "Logo Design", serviceId: 1 },
        { name: "UI/UX Design", serviceId: 3 },
        { name: "Website Design", serviceId: 4 },
        { name: "Social Media Management", serviceId: 6 }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Work", href: "#portfolio" },
        { name: "Get a Quote", href: "#contact" }
      ]
    }
  ];

  const handleServiceClick = (serviceId: number) => {
    // If not on homepage, navigate there first
    if (!isHomePage) {
      window.location.href = `/#services`;
      return;
    }
    
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerOffset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        const event = new CustomEvent('activateService', { 
          detail: { serviceId } 
        });
        document.dispatchEvent(event);
      }, 800);
    }
  };

  const handleSectionLink = (href: string) => {
    // If not on homepage, navigate there with anchor
    if (!isHomePage) {
      window.location.href = `/${href}`;
      return;
    }
    
    // Remove the # symbol
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className={cn("bg-black dark:bg-slate-900 text-white dark:text-white pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden", className)}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn className="col-span-1 md:col-span-1">
            <div>
              <Logo size="md" />
              <p className="text-white/70 dark:text-white/70 mb-6 max-w-md text-sm">
                Sapphire Creations is a full-service marketing and design agency specializing in brand identity,
                digital marketing, and creative content development to help brands stand out in today's
                competitive market.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram className="h-4 w-4" />, name: "instagram" },
                  { icon: <Facebook className="h-4 w-4" />, name: "facebook" },
                  { icon: <Twitter className="h-4 w-4" />, name: "twitter" },
                  { icon: <Linkedin className="h-4 w-4" />, name: "linkedin" }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="https://example.com" 
                    className="w-8 h-8 rounded-full bg-white/10 dark:bg-white/10 flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/20 transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
          
          {footerLinks.map((column, index) => (
            <FadeIn key={column.title} delay={index * 100}>
              <div>
                <h3 className="text-white dark:text-white font-medium mb-3 text-sm">{column.title}</h3>
                <ul className="space-y-2">
                  {index === 0 ? (
                    (column.links as Array<{ name: string; serviceId: number }>).map((link) => (
                      <li key={link.name}>
                        <button 
                          className="text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white transition-colors text-xs sm:text-sm cursor-pointer text-left"
                          onClick={() => handleServiceClick(link.serviceId)}
                        >
                          {link.name}
                        </button>
                      </li>
                    ))
                  ) : (
                    (column.links as Array<{ name: string; href: string }>).map((link) => (
                      <li key={link.name}>
                        {link.href.startsWith("/") ? (
                          <Link to={link.href} className="text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white transition-colors text-xs sm:text-sm">
                            {link.name}
                          </Link>
                        ) : (
                          <button 
                            className="text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white transition-colors text-xs sm:text-sm cursor-pointer text-left"
                            onClick={() => handleSectionLink(link.href)}
                          >
                            {link.name}
                          </button>
                        )}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 dark:text-white/50 text-xs mb-4 md:mb-0">
              © {currentYear} Sapphire Creations. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/privacy-policy" className="text-white/50 dark:text-white/50 hover:text-white dark:hover:text-white text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 dark:text-white/50 hover:text-white dark:hover:text-white text-xs transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
