// Initialize scroll reveal animations
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  // Function to handle reveal animations
  function reveal() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    
    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Reveal when element is 15% into the viewport
      if (elementTop < windowHeight * 0.85) {
        el.classList.add('revealed');
      }
    });
  }

  // Add reveal classes to elements
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    // Add reveal class to section
    section.classList.add('reveal-on-scroll');
    
    // Project section animations
    const projectsSection = section.querySelector('.projects-grid');
    if (projectsSection) {
      // Animate heading with content
      const heading = section.querySelector('h2');
      if (heading) {
        heading.classList.add('reveal-on-scroll', 'section-heading');
      }

      // Animate project cards with stagger
      section.querySelectorAll('.group.relative').forEach((card, index) => {
        card.classList.add('reveal-on-scroll', 'project-card');
        (card as HTMLElement).style.transitionDelay = `${400 + index * 200}ms`;
      });
    }

    // Skills section animations
    const skillsSection = section.querySelector('.skills-grid');
    if (skillsSection) {
      // Animate heading with content
      const heading = section.querySelector('h2');
      if (heading) {
        heading.classList.add('reveal-on-scroll', 'section-heading');
      }

      // Animate skills container and individual skills
      skillsSection.classList.add('reveal-on-scroll', 'skills-container');
      skillsSection.querySelectorAll('[data-skill]').forEach((skill, index) => {
        (skill as HTMLElement).style.transitionDelay = `${500 + index * 100}ms`;
      });
    }

    // About section animations
    const aboutContent = section.querySelector('.about-content');
    if (aboutContent) {
      // Animate heading with content
      const heading = section.querySelector('h2');
      if (heading) {
        heading.classList.add('reveal-on-scroll', 'section-heading');
      }

      aboutContent.classList.add('reveal-on-scroll', 'about-container');
    }

    // Experience section animations
    const experienceItems = section.querySelectorAll('.experience-item');
    if (experienceItems.length > 0) {
      // Animate heading with content
      const heading = section.querySelector('h2');
      if (heading) {
        heading.classList.add('reveal-on-scroll', 'section-heading');
      }

      experienceItems.forEach((item, index) => {
        item.classList.add('reveal-on-scroll', 'timeline-item');
        (item as HTMLElement).style.transitionDelay = `${400 + index * 200}ms`;
      });
    }

    // Education section animations
    const educationItems = section.querySelectorAll('.education-item');
    if (educationItems.length > 0) {
      // Animate heading with content
      const heading = section.querySelector('h2');
      if (heading) {
        heading.classList.add('reveal-on-scroll', 'section-heading');
      }

      educationItems.forEach((item, index) => {
        item.classList.add('reveal-on-scroll', 'timeline-item');
        (item as HTMLElement).style.transitionDelay = `${400 + index * 200}ms`;
      });
    }
  });

  // Initial check
  reveal();
  
  // Add scroll listener with throttling
  let isThrottled = false;
  window.addEventListener('scroll', () => {
    if (!isThrottled) {
      isThrottled = true;
      requestAnimationFrame(() => {
        reveal();
        isThrottled = false;
      });
    }
  });
  
  return () => {
    window.removeEventListener('scroll', reveal);
  };
}