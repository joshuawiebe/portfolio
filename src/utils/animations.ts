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

  // Wait for loader to finish before initializing animations
  const loader = document.querySelector('.loading-screen');
  if (loader) {
    loader.addEventListener('animationend', () => {
      // Add reveal classes to sections and their content
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionContainer = section.querySelector('.section-container');
        const heading = section.querySelector('h2');
        
        // Add animation classes to heading
        if (heading) {
          heading.classList.add('reveal-on-scroll', 'section-heading');
        }
        
        // Add animation classes to container and its children
        if (sectionContainer) {
          sectionContainer.classList.add('reveal-on-scroll', 'content-container');
          
          // Add staggered animations to grid items
          const gridItems = sectionContainer.querySelectorAll('.grid-item');
          gridItems.forEach((item, index) => {
            item.classList.add('reveal-on-scroll');
            (item as HTMLElement).style.transitionDelay = `${index * 150}ms`;
          });

          // Add animations to cards
          const cards = sectionContainer.querySelectorAll('.card');
          cards.forEach((card, index) => {
            card.classList.add('reveal-on-scroll');
            (card as HTMLElement).style.transitionDelay = `${index * 150}ms`;
          });

          // Add animations to timeline items
          const timelineItems = sectionContainer.querySelectorAll('.timeline-item');
          timelineItems.forEach((item, index) => {
            item.classList.add('reveal-on-scroll');
            (item as HTMLElement).style.transitionDelay = `${index * 150}ms`;
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
    });
  }
}