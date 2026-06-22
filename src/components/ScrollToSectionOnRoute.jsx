import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pathToSection, scrollToSection } from '@/lib/navigation';

export default function ScrollToSectionOnRoute() {
  const location = useLocation();

  useEffect(() => {
    const section = pathToSection(location.pathname);

    if (section) {
      const timer = setTimeout(() => scrollToSection(section, 'auto'), 50);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}
