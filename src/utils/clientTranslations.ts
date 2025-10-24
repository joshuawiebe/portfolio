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

  // Update config content
  const titleElement = document.querySelector('[data-config-title]');
  if (titleElement) {
    titleElement.textContent = t.content.title;
  }

  const aboutElement = document.querySelector('[data-config-about]');
  if (aboutElement) {
    aboutElement.textContent = t.content.aboutMe;
  }

  // Update project descriptions
  document.querySelectorAll('[data-project-desc]').forEach(element => {
    const project = element.getAttribute('data-project-desc');
    if (!project || !t.content.projectDescriptions[project as keyof typeof t.content.projectDescriptions]) return;
    element.textContent = t.content.projectDescriptions[project as keyof typeof t.content.projectDescriptions];
  });

  // Update experience bullets
  document.querySelectorAll('[data-exp-bullets]').forEach(element => {
    const exp = element.getAttribute('data-exp-bullets');
    if (!exp || !t.content.experienceBullets[exp as keyof typeof t.content.experienceBullets]) return;
    
    const bullets = t.content.experienceBullets[exp as keyof typeof t.content.experienceBullets];
    const bulletElements = element.querySelectorAll('li span');
    bullets.forEach((bullet: string, index: number) => {
      if (bulletElements[index]) {
        bulletElements[index].textContent = bullet;
      }
    });
  });

  // Update education achievements
  document.querySelectorAll('[data-edu-achievements]').forEach(element => {
    const edu = element.getAttribute('data-edu-achievements');
    if (!edu || !t.content.educationAchievements[edu as keyof typeof t.content.educationAchievements]) return;
    
    const achievements = t.content.educationAchievements[edu as keyof typeof t.content.educationAchievements];
    const achievementElements = element.querySelectorAll('li span');
    achievements.forEach((achievement: string, index: number) => {
      if (achievementElements[index]) {
        achievementElements[index].textContent = achievement;
      }
    });

    // Update education degrees, schools, and dates
    document.querySelectorAll('[data-edu-degree]').forEach(element => {
      const type = element.getAttribute('data-edu-degree');
      if (!type || !t.content.educationDegrees[type as keyof typeof t.content.educationDegrees]) return;
      element.textContent = t.content.educationDegrees[type as keyof typeof t.content.educationDegrees];
    });

    document.querySelectorAll('[data-edu-school]').forEach(element => {
      const type = element.getAttribute('data-edu-school');
      if (!type || !t.content.educationSchools[type as keyof typeof t.content.educationSchools]) return;
      element.textContent = t.content.educationSchools[type as keyof typeof t.content.educationSchools];
    });

    document.querySelectorAll('[data-edu-date]').forEach(element => {
      const type = element.getAttribute('data-edu-date');
      if (!type || !t.content.educationDates[type as keyof typeof t.content.educationDates]) return;
      element.textContent = t.content.educationDates[type as keyof typeof t.content.educationDates];
    });
  });

  // Update document title
  document.title = `${t.hero.greeting} ${t.hero.intro} - ${t.content.title}`;
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