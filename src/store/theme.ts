import { atom } from 'nanostores';
import type { Theme, Language } from '../utils/types';

// Helper functions for theme detection
const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getSystemLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const userLanguages = navigator.languages.map(l => l.toLowerCase());
  
  if (userLanguages.some(l => l.startsWith('de'))) return 'de';
  return 'en';
};

// Initialize theme store with auto-detection
export const themeStore = atom<Theme>(
  typeof localStorage !== 'undefined'
    ? (localStorage.getItem('theme') as Theme) || getSystemTheme()
    : 'light'
);

// Initialize language store with auto-detection
export const languageStore = atom<Language>(
  typeof localStorage !== 'undefined'
    ? (localStorage.getItem('language') as Language) || getSystemLanguage()
    : 'en'
);

// Theme observers
if (typeof window !== 'undefined') {
  // Watch for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      themeStore.set(e.matches ? 'dark' : 'light');
    }
  });

  // Watch for language changes
  window.addEventListener('languagechange', () => {
    if (!localStorage.getItem('language')) {
      languageStore.set(getSystemLanguage());
    }
  });
}

// Theme actions
export const toggleTheme = () => {
  const newTheme = themeStore.get() === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeStore.set(newTheme);
};

export const setTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeStore.set(theme);
};

// Language actions
export const toggleLanguage = () => {
  const newLang = languageStore.get() === 'en' ? 'de' : 'en';
  document.documentElement.setAttribute('lang', newLang);
  localStorage.setItem('language', newLang);
  languageStore.set(newLang);
};

export const setLanguage = (lang: Language) => {
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('language', lang);
  languageStore.set(lang);
};