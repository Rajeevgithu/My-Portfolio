export const SECTION_IDS = [
  'home',
  'about',
  'services',
  'process',
  'proof',
  'projects',
  'skills',
  'resume',
  'contact',
];

export function sectionToPath(section) {
  return section === 'home' ? '/' : `/${section}`;
}

export function pathToSection(pathname) {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized === '/') return 'home';
  const section = normalized.slice(1);
  return SECTION_IDS.includes(section) ? section : null;
}

export function scrollToSection(section, behavior = 'smooth') {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior, block: 'start' });
  }
}
