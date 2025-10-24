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
    
    // Add reveal classes to cards with stagger
    section.querySelectorAll('.card').forEach((card, index) => {
      card.classList.add('reveal-on-scroll');
      (card as HTMLElement).style.transitionDelay = `${index * 150}ms`;
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