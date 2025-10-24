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
    
    // Add reveal classes to section title with initial delay
    section.querySelectorAll('h2').forEach((heading) => {
      heading.classList.add('reveal-on-scroll');
      (heading as HTMLElement).style.transitionDelay = '100ms';
    });

    // Add reveal classes to project cards with stagger
    section.querySelectorAll('.group.relative').forEach((card, index) => {
      card.classList.add('reveal-on-scroll', 'project-card');
      (card as HTMLElement).style.transitionDelay = `${200 + index * 100}ms`;
    });

    // Add reveal classes to skill groups with stagger
    const skillsContainer = section.querySelector('.skills-grid');
    if (skillsContainer) {
      skillsContainer.classList.add('reveal-on-scroll', 'skills-container');
      skillsContainer.querySelectorAll('[data-skill]').forEach((skill, index) => {
        (skill as HTMLElement).style.transitionDelay = `${300 + index * 50}ms`;
      });
    }

    // Add reveal classes to about section content
    const aboutContent = section.querySelector('.about-content');
    if (aboutContent) {
      aboutContent.classList.add('reveal-on-scroll', 'about-container');
    }

    // Add reveal classes to experience items with stagger
    section.querySelectorAll('.experience-item').forEach((item, index) => {
      item.classList.add('reveal-on-scroll', 'timeline-item');
      (item as HTMLElement).style.transitionDelay = `${200 + index * 150}ms`;
    });

    // Add reveal classes to education items with stagger
    section.querySelectorAll('.education-item').forEach((item, index) => {
      item.classList.add('reveal-on-scroll', 'timeline-item');
      (item as HTMLElement).style.transitionDelay = `${200 + index * 150}ms`;
    });
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