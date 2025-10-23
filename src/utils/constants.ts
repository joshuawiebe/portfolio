import type { Section, NavItem } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { href: '#about', label: 'About', translateKey: 'nav.about' },
  { href: '#projects', label: 'Projects', translateKey: 'nav.projects' },
  { href: '#experience', label: 'Experience', translateKey: 'nav.experience' },
  { href: '#education', label: 'Education', translateKey: 'nav.education' },
];

export const SECTIONS: Section[] = [
  { id: 'about', title: 'About Me', translateKey: 'about.title' },
  { id: 'projects', title: 'Projects', translateKey: 'projects.title' },
  { id: 'experience', title: 'Experience', translateKey: 'experience.title' },
  { id: 'education', title: 'Education', translateKey: 'education.title' },
];

export const ANIMATION_DEFAULTS = {
  duration: 0.6,
  delay: 0,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  threshold: 0.1,
};

export const THEME_STORAGE_KEY = 'theme';
export const LANGUAGE_STORAGE_KEY = 'language';