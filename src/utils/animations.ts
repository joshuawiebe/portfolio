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
    
    // Add reveal classes to headings with delay
    section.querySelectorAll('h2').forEach((heading) => {
      heading.classList.add('reveal-on-scroll');
    });

    // Add reveal classes to paragraphs
    section.querySelectorAll('p').forEach((p, index) => {
      p.classList.add('reveal-on-scroll');
      (p as HTMLElement).style.transitionDelay = `${100 + index * 100}ms`;
    });
    
    // Add reveal classes to skills
    section.querySelectorAll('[data-skill]').forEach((skill, index) => {
      skill.classList.add('reveal-on-scroll');
      (skill as HTMLElement).style.transitionDelay = `${200 + index * 50}ms`;
    });
    
    // Add reveal classes to cards with stagger
    section.querySelectorAll('.card').forEach((card, index) => {
      card.classList.add('reveal-on-scroll');
      (card as HTMLElement).style.transitionDelay = `${200 + index * 150}ms`;
    });

    // Add reveal classes to timeline items
    section.querySelectorAll('.education-item, .experience-item').forEach((item, index) => {
      item.classList.add('reveal-on-scroll');
      (item as HTMLElement).style.transitionDelay = `${200 + index * 200}ms`;
    });

    // Add reveal classes to links and buttons
    section.querySelectorAll('a, button').forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      (element as HTMLElement).style.transitionDelay = `${300 + index * 50}ms`;
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