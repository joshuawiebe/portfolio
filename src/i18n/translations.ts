export const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
    },
    settings: {
      theme: 'Theme',
      language: 'Language',
      system: 'System',
      light: 'Light',
      dark: 'Dark',
      reset: 'Reset'
    },
    hero: {
      greeting: 'Hello! 👋',
      intro: "I'm",
    },
    about: {
      title: 'About Me',
      skills: 'Skills',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project'
    },
    experience: {
      title: 'Experience',
    },
    education: {
      title: 'Education',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      projects: 'Projekte',
      experience: 'Erfahrung',
      education: 'Ausbildung',
    },
    settings: {
      theme: 'Design',
      language: 'Sprache',
      system: 'System',
      light: 'Hell',
      dark: 'Dunkel',
      reset: 'Zurücksetzen'
    },
    hero: {
      greeting: 'Hallo! 👋',
      intro: 'Ich bin',
    },
    about: {
      title: 'Über mich',
      skills: 'Fähigkeiten',
    },
    projects: {
      title: 'Projekte',
      viewProject: 'Projekt ansehen'
    },
    experience: {
      title: 'Erfahrung',
    },
    education: {
      title: 'Ausbildung',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Educación',
    },
    settings: {
      theme: 'Tema',
      language: 'Idioma',
      system: 'Sistema',
      light: 'Claro',
      dark: 'Oscuro',
      reset: 'Restablecer'
    },
    hero: {
      greeting: '¡Hola! 👋',
      intro: 'Soy',
    },
    about: {
      title: 'Sobre mí',
      skills: 'Habilidades',
    },
    projects: {
      title: 'Proyectos',
      viewProject: 'Ver proyecto'
    },
    experience: {
      title: 'Experiencia',
    },
    education: {
      title: 'Educación',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Formation',
    },
    settings: {
      theme: 'Thème',
      language: 'Langue',
      system: 'Système',
      light: 'Clair',
      dark: 'Sombre',
      reset: 'Réinitialiser'
    },
    hero: {
      greeting: 'Bonjour! 👋',
      intro: 'Je suis',
    },
    about: {
      title: 'À propos',
      skills: 'Compétences',
    },
    projects: {
      title: 'Projets',
      viewProject: 'Voir le projet'
    },
    experience: {
      title: 'Expérience',
    },
    education: {
      title: 'Formation',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translation = typeof translations.en;