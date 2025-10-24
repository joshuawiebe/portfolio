import { atom } from 'nanostores';
import type { Language } from '../utils/types';

// Get system language
const getSystemLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const userLanguages = navigator.languages.map(l => l.toLowerCase());
  
  if (userLanguages.some(l => l.startsWith('de'))) return 'de';
  return 'en';
};

// Initialize language store with auto-detection
export const languageStore = atom<Language>(
  typeof localStorage !== 'undefined'
    ? (localStorage.getItem('language') as Language) || getSystemLanguage()
    : 'en'
);

// Watch for language changes
if (typeof window !== 'undefined') {
  window.addEventListener('languagechange', () => {
    if (!localStorage.getItem('language')) {
      languageStore.set(getSystemLanguage());
    }
  });
}

// Language actions
export const setLanguage = (lang: Language) => {
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('language', lang);
  languageStore.set(lang);
};