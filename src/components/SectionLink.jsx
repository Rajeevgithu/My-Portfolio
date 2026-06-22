import { useNavigate, useLocation } from 'react-router-dom';
import { sectionToPath, scrollToSection } from '@/lib/navigation';

export default function SectionLink({ to, children, className, onClick, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = sectionToPath(to);

  const handleClick = (e) => {
    e.preventDefault();
    onClick?.(e);

    if (location.pathname !== path) {
      navigate(path);
    }
    scrollToSection(to);
  };

  return (
    <a href={path} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (section) => {
    const path = sectionToPath(section);
    if (location.pathname !== path) {
      navigate(path);
    }
    requestAnimationFrame(() => scrollToSection(section));
  };

  return { goToSection };
}

export function isSectionActive(pathname, section) {
  return sectionToPath(section) === pathname;
}
