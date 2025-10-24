import { language } from '../store/language';
import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

// Update all translatable elements on the page
function updateTranslations(newLang: Language) {
  const t = translations[newLang];
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (!key) return;
    
    // Split the key by dots to access nested translations
    const value = key.split('.').reduce((obj, k) => obj?.[k], t);
    if (value) {
      element.textContent = value;
    }
  });

  // Update config title
  const titleElement = document.querySelector('[data-config-title]');
  if (titleElement) {
    titleElement.textContent = t.hero.title;
  }

  // Update about section
  const aboutElement = document.querySelector('[data-config-about]');
  if (aboutElement) {
    aboutElement.textContent = t.about.content;
  }

  // Update education sections
  document.querySelectorAll('[data-edu-type="degree"]').forEach(element => {
    const level = element.getAttribute('data-edu-level');
    if (!level || !t.education.degrees[level as keyof typeof t.education.degrees]) return;
    element.textContent = t.education.degrees[level as keyof typeof t.education.degrees];
  });

  document.querySelectorAll('[data-edu-type="school"]').forEach(element => {
    const level = element.getAttribute('data-edu-level');
    if (!level || !t.education.schools[level as keyof typeof t.education.schools]) return;
    element.textContent = t.education.schools[level as keyof typeof t.education.schools];
  });

  document.querySelectorAll('[data-edu-type="date"]').forEach(element => {
    const level = element.getAttribute('data-edu-level');
    if (!level || !t.education.dates[level as keyof typeof t.education.dates]) return;
    element.textContent = t.education.dates[level as keyof typeof t.education.dates];
  });

  document.querySelectorAll('[data-edu-type="achievement"]').forEach(element => {
    const level = element.getAttribute('data-edu-level');
    const index = element.getAttribute('data-edu-index');
    if (!level || !index || !t.education.achievements[level as keyof typeof t.education.achievements]) return;
    
    const achievements = t.education.achievements[level as keyof typeof t.education.achievements];
    if (achievements[parseInt(index)]) {
      element.textContent = achievements[parseInt(index)];
    }
  });

  // Update experience sections
  document.querySelectorAll('[data-exp-bullets]').forEach(element => {
    const type = element.getAttribute('data-exp-bullets');
    if (!type || !t.experience.bullets[type as keyof typeof t.experience.bullets]) return;
    
    const bullets = t.experience.bullets[type as keyof typeof t.experience.bullets];
    const bulletElements = element.querySelectorAll('li span:last-child');
    bullets.forEach((bullet: string, index: number) => {
      if (bulletElements[index]) {
        bulletElements[index].textContent = bullet;
      }
    });
  });

  // Update project descriptions
  document.querySelectorAll('[data-project-desc]').forEach(element => {
    const project = element.getAttribute('data-project-desc')?.toLowerCase();
    if (!project || !t.projects.descriptions[project as keyof typeof t.projects.descriptions]) return;
    element.textContent = t.projects.descriptions[project as keyof typeof t.projects.descriptions];
  });

  // Update document title
  document.title = `${t.hero.greeting} ${t.hero.intro} - ${t.hero.title}`;
}

// Initialize translations
if (typeof window !== 'undefined') {
  // Initial update
  updateTranslations(language.get());
  
  // Subscribe to language changes
  language.subscribe((newLang) => {
    updateTranslations(newLang);
  });
}