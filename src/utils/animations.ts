// Initialize scroll reveal animations
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  // Wait a bit before initializing animations
  setTimeout(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('revealed');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '-5% 0px', // Start animation when element is more visible
        threshold: 0.1 // Require more of the element to be visible
      }
    );

    // Observe all sections except hero (which is handled separately)
    document.querySelectorAll('section:not(.hero-section)').forEach((section) => {
      section.classList.add('reveal-on-scroll');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, 800); // Wait for page load and initial animations to complete
}