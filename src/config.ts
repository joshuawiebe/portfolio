export const siteConfig = {
  name: "Joshua Wiebe",
  title: "Full Stack Developer & Student",
  description: "Portfolio website of Joshua Wiebe - Full Stack Developer and Student at Gymnasium am Markt Bünde",
  accentColor: "#1d4ed8",
  social: {
    email: "joshua.wiebe2010@gmail.com",
    github: "https://github.com/joshuawiebe",
    instagram: "https://www.instagram.com/joshuawiebe2010/",
  },
  aboutMe:
    "I'm a German student born on August 24, 2010, passionate about full stack development, IoT projects, and road biking. Currently attending Gymnasium am Markt in Bünde, I actively pursue my interest in programming and software development alongside my studies. From managing my own homelab to creating IoT solutions, I love exploring different aspects of technology. In my free time, I enjoy challenging myself with both technical projects and cycling adventures, combining my love for technology with an active lifestyle.",
  skills: ["JavaScript", "Python", "Shell/Bash", "Docker", "IoT/ESP32", "HTML/CSS", "Git", "Home Assistant"],
  projects: [
    {
      name: "Homelab",
      description: "Docker-based personal homeserver setup featuring Nextcloud, Vaultwarden, Traefik, and other self-hosted services. Production-ready configuration with MIT license.",
      link: "https://github.com/joshuawiebe/homelab",
      skills: ["Docker", "Shell", "Self-hosting", "Networking"],
    },
    {
      name: "Scripts Collection",
      description: "Personal collection of automation scripts and development tools written in Python, Bash, and other languages. Includes system tasks and workflow automation tools.",
      link: "https://github.com/joshuawiebe/scripts",
      skills: ["Python", "Bash", "Shell", "Automation"],
    },
    {
      name: "ESP Fingerprint Doorbell",
      description: "Integration of ESP32 WROOM with Grow R503 fingerprint sensor, Home Assistant, and Nuki 3 Pro for secure door access with visual feedback.",
      link: "https://github.com/joshuawiebe/esp-fingerprint-doorbell",
      skills: ["ESP32", "IoT", "Home Assistant", "C++"],
    },
    {
      name: "Click Counter",
      description: "A sleek and modern click counter application with intuitive interface and responsive design.",
      link: "https://github.com/joshuawiebe/click-counter",
      skills: ["JavaScript", "CSS", "HTML", "UI Design"],
    },
    {
      name: "Stopwatch",
      description: "A clean and functional stopwatch application for precise time tracking.",
      link: "https://github.com/joshuawiebe/stopwatch",
      skills: ["JavaScript", "CSS", "HTML", "Web Development"],
    },
    {
      name: "Leonardo da Vinci",
      description: "Interactive web project about Leonardo da Vinci.",
      link: "https://github.com/joshuawiebe/leonardodavinci",
      skills: ["JavaScript", "Web Development", "Research"],
    }
  ],
  experience: [
    {
      company: "Personal Projects",
      title: "Full Stack Developer",
      dateRange: "2023 - Present",
      bullets: [
        "Developed and maintained personal web projects using modern technologies",
        "Implemented responsive designs and user-friendly interfaces",
        "Applied best practices in web development and version control",
      ],
    }
  ],
  education: [
    {
      school: "Gymnasium am Markt, Bünde",
      degree: "10th Grade",
      dateRange: "2020 - Present",
      achievements: [
        "Focusing on computer science and mathematics",
        "Developing full stack applications alongside studies",
        "Active participation in coding projects and self-learning",
      ],
    },
    {
      school: "Elementary School",
      degree: "Primary Education",
      dateRange: "2016 - 2020",
      achievements: [
        "Built strong foundation in core subjects",
        "Developed early interest in technology and computers",
      ],
    }
  ],
};
