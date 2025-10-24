import type { Language } from './types';

export const getSystemLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('de') ? 'de' : 'en';
};

export const setLanguage = (lang: Language) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
};

export const addIntersectionObserver = (callback: IntersectionObserverCallback) => {
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

export const addScrollSpy = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href')?.slice(1) === entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    rootMargin: '-20% 0px -70% 0px',
  });

  sections.forEach((section) => observer.observe(section));
  return observer;
};