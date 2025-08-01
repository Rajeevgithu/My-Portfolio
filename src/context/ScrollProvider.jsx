import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ScrollContext = createContext();

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotiveRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Wait for DOM to be ready and check if we should use smooth scrolling
    const initScroll = async () => {
      try {
        // Only initialize on desktop and if the container exists
        if (!scrollRef.current || window.innerWidth < 768) {
          setIsInitialized(true);
          return;
        }

        // Dynamic import to avoid SSR issues
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        // Initialize Locomotive Scroll with minimal config
        locomotiveRef.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.1,
          multiplier: 0.8,
          reloadOnContextChange: true,
          touchMultiplier: 2,
          smoothMobile: false, // Disable on mobile for better performance
        });

        // Update scroll on page load
        locomotiveRef.current.on('load', () => {
          if (locomotiveRef.current) {
            locomotiveRef.current.update();
          }
          setIsInitialized(true);
        });

        // Handle hash navigation
        locomotiveRef.current.on('scroll', (args) => {
          // Update URL hash based on current section
          const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact'];
          const currentScroll = args.scroll.y;
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 100) {
                const newHash = `#${sections[i]}`;
                if (window.location.hash !== newHash) {
                  window.history.replaceState(null, null, newHash);
                }
                break;
              }
            }
          }
        });

        // Handle resize
        const handleResize = () => {
          if (locomotiveRef.current) {
            locomotiveRef.current.update();
          }
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      } catch (error) {
        console.warn('Locomotive Scroll initialization failed, using native scrolling:', error);
        // Fallback to normal scrolling
        setIsInitialized(true);
      }
    };

    // Longer delay to ensure everything is ready
    const timer = setTimeout(initScroll, 200);

    return () => {
      clearTimeout(timer);
      if (locomotiveRef.current) {
        try {
          locomotiveRef.current.destroy();
        } catch (error) {
          console.warn('Error destroying Locomotive Scroll:', error);
        }
      }
    };
  }, []);

  const scrollTo = (target) => {
    if (locomotiveRef.current && isInitialized) {
      try {
        locomotiveRef.current.scrollTo(target);
      } catch (error) {
        // Fallback to native scrolling
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Fallback to native scrolling
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToElement = (element) => {
    if (locomotiveRef.current && isInitialized) {
      try {
        locomotiveRef.current.scrollTo(element);
      } catch (error) {
        // Fallback to native scrolling
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Fallback to native scrolling
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const value = {
    scroll: locomotiveRef.current,
    scrollTo,
    scrollToElement,
    isInitialized,
  };

  return (
    <ScrollContext.Provider value={value}>
      <div ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </ScrollContext.Provider>
  );
}; 