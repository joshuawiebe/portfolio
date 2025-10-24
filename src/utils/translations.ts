import { translations, type Language } from '../i18n/translations';
import { language } from '../store/language';

export function useTranslations() {
  return translations[language.get()];
}

// Add client-side script to handle translation updates
if (typeof window !== 'undefined') {
  language.subscribe((newLang) => {
    const t = translations[newLang];
    
    // Update hero section
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (!key) return;
      
      // Split the key by dots to access nested translations
      const value = key.split('.').reduce((obj, key) => obj?.[key], t);
      if (value) {
        element.textContent = value;
      }
    });
  });
}

// Helper to get translations for a specific language
export function getTranslationsFor(lang: Language) {
  return translations[lang];
}