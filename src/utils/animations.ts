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

  // Add reveal classes to sections and their content
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    // Add reveal class to section heading
    const heading = section.querySelector('h2');
    if (heading) {
      heading.classList.add('reveal-on-scroll');
    }

    // Add reveal classes to content containers
    const containers = section.querySelectorAll('.card, .grid-item, .timeline-item');
    containers.forEach((container, index) => {
      container.classList.add('reveal-on-scroll');
      (container as HTMLElement).style.transitionDelay = `${index * 150}ms`;
    });

    // Add reveal classes to project cards
    const cards = section.querySelectorAll('.group.relative');
    cards.forEach((card, index) => {
      card.classList.add('reveal-on-scroll');
      (card as HTMLElement).style.transitionDelay = `${index * 150}ms`;
    });

    // Add reveal classes to skills
    const skills = section.querySelectorAll('[data-skill]');
    skills.forEach((skill, index) => {
      skill.classList.add('reveal-on-scroll');
      (skill as HTMLElement).style.transitionDelay = `${index * 100}ms`;
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