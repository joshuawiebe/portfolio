import { translations, type Language } from '../i18n/translations';
import { language } from '../store/language';

export function useTranslations() {
  const lang = language.get();
  return translations[lang];
}

// Helper to get translations for a specific language
export function getTranslationsFor(lang: Language) {
  return translations[lang];
}