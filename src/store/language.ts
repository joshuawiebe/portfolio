import { atom } from 'nanostores';
import type { Language } from '../i18n/translations';

export const language = atom<Language>('en');

// Only run in browser environment
if (typeof window !== 'undefined') {
  // Set language with browser preference fallback
  const browserLang = navigator.language.split('-')[0] as Language;
  if (['en', 'de', 'es', 'fr'].includes(browserLang)) {
    language.set(browserLang);
  }

  // Initialize from stored preference
  const storedLang = localStorage.getItem('language') as Language;
  if (storedLang && ['en', 'de', 'es', 'fr'].includes(storedLang)) {
    language.set(storedLang);
  }

  // Persist language preference
  language.subscribe((value) => {
    localStorage.setItem('language', value);
  });
}