const languages = ['en', 'de', 'es', 'fr'] as const;
export type Language = typeof languages[number];

export type Translation = {
  nav: {
    readonly about: string;
    readonly projects: string;
    readonly experience: string;
    readonly education: string;
  };
  settings: {
    readonly theme: string;
    readonly language: string;
    readonly system: string;
    readonly light: string;
    readonly dark: string;
    readonly reset: string;
  };
  hero: {
    readonly greeting: string;
    readonly intro: string;
    readonly title: string;
  };
  about: {
    readonly title: string;
    readonly skills: string;
    readonly content: string;
  };
  projects: {
    readonly title: string;
    readonly viewProject: string;
    readonly descriptions: {
      readonly homelab: string;
      readonly scripts: string;
      readonly doorbell: string;
      readonly clickCounter: string;
      readonly stopwatch: string;
      readonly leonardo: string;
    };
  };
  experience: {
    readonly title: string;
    readonly bullets: {
      readonly personalprojects: readonly string[];
    };
  };
  education: {
    readonly title: string;
    readonly degrees: {
      readonly gymnasium: string;
      readonly elementary: string;
    };
    readonly schools: {
      readonly gymnasium: string;
      readonly elementary: string;
    };
    readonly dates: {
      readonly gymnasium: string;
      readonly elementary: string;
    };
    readonly achievements: {
      readonly gymnasium: readonly string[];
      readonly elementary: readonly string[];
    };
  };
};

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
      title: "Full Stack Developer & Student"
    },
    about: {
      title: 'About Me',
      skills: 'Skills',
      content: "I'm a German student born on August 24, 2010, passionate about full stack development, IoT projects, and road biking. Currently attending Gymnasium am Markt in Bünde, I actively pursue my interest in programming and software development alongside my studies. From managing my own homelab to creating IoT solutions, I love exploring different aspects of technology. In my free time, I enjoy challenging myself with both technical projects and cycling adventures, combining my love for technology with an active lifestyle."
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      descriptions: {
        homelab: "Docker-based personal homeserver setup featuring Nextcloud, Vaultwarden, Traefik, and other self-hosted services. Production-ready configuration with MIT license.",
        scripts: "Personal collection of automation scripts and development tools written in Python, Bash, and other languages. Includes system tasks and workflow automation tools.",
        doorbell: "Integration of ESP32 WROOM with Grow R503 fingerprint sensor, Home Assistant, and Nuki 3 Pro for secure door access with visual feedback.",
        clickCounter: "A sleek and modern click counter application with intuitive interface and responsive design.",
        stopwatch: "A clean and functional stopwatch application for precise time tracking.",
        leonardo: "Interactive web project about Leonardo da Vinci."
      }
    },
    experience: {
      title: 'Experience',
      bullets: {
        personalprojects: [
          "Developed and maintained personal web projects using modern technologies",
          "Implemented responsive designs and user-friendly interfaces",
          "Applied best practices in web development and version control"
        ]
      }
    },
    education: {
      title: 'Education',
      degrees: {
        gymnasium: "10th Grade",
        elementary: "Primary Education"
      },
      schools: {
        gymnasium: "Gymnasium am Markt, Bünde",
        elementary: "Elementary School"
      },
      dates: {
        gymnasium: "2020 - Present",
        elementary: "2016 - 2020"
      },
      achievements: {
        gymnasium: [
          "Focusing on computer science and mathematics",
          "Developing full stack applications alongside studies",
          "Active participation in coding projects and self-learning"
        ],
        elementary: [
          "Built strong foundation in core subjects",
          "Developed early interest in technology and computers"
        ]
      }
    }
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
      title: "Fullstack-Entwickler & Schüler"
    },
    about: {
      title: 'Über mich',
      skills: 'Fähigkeiten',
      content: "Ich bin ein deutscher Schüler, geboren am 24. August 2010, mit Leidenschaft für Fullstack-Entwicklung, IoT-Projekte und Rennradfahren. Derzeit besuche ich das Gymnasium am Markt in Bünde und verfolge aktiv mein Interesse an Programmierung und Softwareentwicklung neben meinem Studium. Von der Verwaltung meines eigenen Homelabs bis zur Entwicklung von IoT-Lösungen liebe ich es, verschiedene Aspekte der Technologie zu erkunden. In meiner Freizeit fordere ich mich gerne sowohl mit technischen Projekten als auch mit Fahrradabenteuern heraus und verbinde so meine Liebe zur Technologie mit einem aktiven Lebensstil."
    },
    projects: {
      title: 'Projekte',
      viewProject: 'Projekt ansehen',
      descriptions: {
        homelab: "Docker-basierte persönliche Homeserver-Einrichtung mit Nextcloud, Vaultwarden, Traefik und anderen selbst gehosteten Diensten. Produktionsreife Konfiguration mit MIT-Lizenz.",
        scripts: "Persönliche Sammlung von Automatisierungsskripten und Entwicklungswerkzeugen, geschrieben in Python, Bash und anderen Sprachen. Enthält Systemaufgaben und Workflow-Automatisierungswerkzeuge.",
        doorbell: "Integration von ESP32 WROOM mit Grow R503 Fingerabdrucksensor, Home Assistant und Nuki 3 Pro für sicheren Türzugang mit visueller Rückmeldung.",
        clickCounter: "Eine elegante und moderne Klickzähler-Anwendung mit intuitiver Benutzeroberfläche und responsivem Design.",
        stopwatch: "Eine übersichtliche und funktionale Stoppuhr-Anwendung für präzise Zeitmessung.",
        leonardo: "Interaktives Webprojekt über Leonardo da Vinci."
      }
    },
    experience: {
      title: 'Erfahrung',
      bullets: {
        personalprojects: [
          "Entwicklung und Wartung persönlicher Webprojekte mit modernen Technologien",
          "Implementierung von responsiven Designs und benutzerfreundlichen Oberflächen",
          "Anwendung von Best Practices in der Webentwicklung und Versionskontrolle"
        ]
      }
    },
    education: {
      title: 'Ausbildung',
      degrees: {
        gymnasium: "10. Klasse",
        elementary: "Grundschule"
      },
      schools: {
        gymnasium: "Gymnasium am Markt, Bünde",
        elementary: "Grundschule"
      },
      dates: {
        gymnasium: "2020 - Heute",
        elementary: "2016 - 2020"
      },
      achievements: {
        gymnasium: [
          "Fokus auf Informatik und Mathematik",
          "Entwicklung von Fullstack-Anwendungen neben dem Studium",
          "Aktive Teilnahme an Coding-Projekten und Selbststudium"
        ],
        elementary: [
          "Aufbau einer starken Grundlage in Kernfächern",
          "Entwicklung eines frühen Interesses an Technologie und Computern"
        ]
      }
    }
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
      title: "Desarrollador Full Stack y Estudiante"
    },
    about: {
      title: 'Sobre mí',
      skills: 'Habilidades',
      content: "Soy un estudiante alemán nacido el 24 de agosto de 2010, apasionado por el desarrollo full stack, proyectos IoT y el ciclismo de carretera. Actualmente estudio en el Gymnasium am Markt en Bünde, y persigo activamente mi interés por la programación y el desarrollo de software junto con mis estudios. Desde administrar mi propio homelab hasta crear soluciones IoT, me encanta explorar diferentes aspectos de la tecnología. En mi tiempo libre, disfruto desafiándome tanto con proyectos técnicos como con aventuras en bicicleta, combinando mi amor por la tecnología con un estilo de vida activo."
    },
    projects: {
      title: 'Proyectos',
      viewProject: 'Ver proyecto',
      descriptions: {
        homelab: "Configuración de servidor personal basado en Docker con Nextcloud, Vaultwarden, Traefik y otros servicios auto-alojados. Configuración lista para producción con licencia MIT.",
        scripts: "Colección personal de scripts de automatización y herramientas de desarrollo escritas en Python, Bash y otros lenguajes. Incluye tareas del sistema y herramientas de automatización de flujo de trabajo.",
        doorbell: "Integración de ESP32 WROOM con sensor de huellas dactilares Grow R503, Home Assistant y Nuki 3 Pro para acceso seguro a puertas con retroalimentación visual.",
        clickCounter: "Una aplicación de contador de clics elegante y moderna con interfaz intuitiva y diseño responsivo.",
        stopwatch: "Una aplicación de cronómetro limpia y funcional para el seguimiento preciso del tiempo.",
        leonardo: "Proyecto web interactivo sobre Leonardo da Vinci."
      }
    },
    experience: {
      title: 'Experiencia',
      bullets: {
        personalprojects: [
          "Desarrollo y mantenimiento de proyectos web personales utilizando tecnologías modernas",
          "Implementación de diseños responsivos e interfaces amigables para el usuario",
          "Aplicación de mejores prácticas en desarrollo web y control de versiones"
        ]
      }
    },
    education: {
      title: 'Educación',
      degrees: {
        gymnasium: "10° Grado",
        elementary: "Educación Primaria"
      },
      schools: {
        gymnasium: "Gymnasium am Markt, Bünde",
        elementary: "Escuela Primaria"
      },
      dates: {
        gymnasium: "2020 - Presente",
        elementary: "2016 - 2020"
      },
      achievements: {
        gymnasium: [
          "Enfoque en informática y matemáticas",
          "Desarrollo de aplicaciones full stack junto con los estudios",
          "Participación activa en proyectos de codificación y autoaprendizaje"
        ],
        elementary: [
          "Construcción de una base sólida en materias principales",
          "Desarrollo de interés temprano en tecnología y computadoras"
        ]
      }
    }
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
      title: "Développeur Full Stack et Étudiant"
    },
    about: {
      title: 'À propos',
      skills: 'Compétences',
      content: "Je suis un étudiant allemand né le 24 août 2010, passionné par le développement full stack, les projets IoT et le vélo de route. Actuellement au Gymnasium am Markt à Bünde, je poursuis activement mon intérêt pour la programmation et le développement logiciel parallèlement à mes études. De la gestion de mon propre homelab à la création de solutions IoT, j'aime explorer différents aspects de la technologie. Dans mon temps libre, j'aime me mettre au défi avec des projets techniques et des aventures à vélo, combinant mon amour pour la technologie avec un mode de vie actif."
    },
    projects: {
      title: 'Projets',
      viewProject: 'Voir le projet',
      descriptions: {
        homelab: "Configuration de serveur personnel basé sur Docker avec Nextcloud, Vaultwarden, Traefik et autres services auto-hébergés. Configuration prête pour la production avec licence MIT.",
        scripts: "Collection personnelle de scripts d'automatisation et d'outils de développement écrits en Python, Bash et autres langages. Inclut des tâches système et des outils d'automatisation de flux de travail.",
        doorbell: "Intégration d'ESP32 WROOM avec capteur d'empreintes digitales Grow R503, Home Assistant et Nuki 3 Pro pour un accès sécurisé aux portes avec retour visuel.",
        clickCounter: "Une application de compteur de clics élégante et moderne avec une interface intuitive et un design responsif.",
        stopwatch: "Une application de chronomètre propre et fonctionnelle pour un suivi précis du temps.",
        leonardo: "Projet web interactif sur Léonard de Vinci."
      }
    },
    experience: {
      title: 'Expérience',
      bullets: {
        personalprojects: [
          "Développement et maintenance de projets web personnels utilisant des technologies modernes",
          "Implémentation de designs responsifs et d'interfaces conviviales",
          "Application des meilleures pratiques en développement web et contrôle de version"
        ]
      }
    },
    education: {
      title: 'Formation',
      degrees: {
        gymnasium: "10ème année",
        elementary: "École primaire"
      },
      schools: {
        gymnasium: "Gymnasium am Markt, Bünde",
        elementary: "École élémentaire"
      },
      dates: {
        gymnasium: "2020 - Présent",
        elementary: "2016 - 2020"
      },
      achievements: {
        gymnasium: [
          "Concentration sur l'informatique et les mathématiques",
          "Développement d'applications full stack en parallèle des études",
          "Participation active aux projets de codage et auto-apprentissage"
        ],
        elementary: [
          "Construction d'une base solide dans les matières principales",
          "Développement d'un intérêt précoce pour la technologie et les ordinateurs"
        ]
      }
    }
  }
} as const;