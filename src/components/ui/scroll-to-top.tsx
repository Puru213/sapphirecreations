
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } fixed bottom-6 right-6 z-50 p-3 rounded-full bg-mint-500 text-white shadow-lg transition-all duration-300 hover:bg-mint-600 focus:outline-none focus:ring-2 focus:ring-mint-400 light:bg-mint-600 light:hover:bg-mint-700`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
};
