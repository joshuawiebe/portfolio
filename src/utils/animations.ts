// Initialize scroll reveal animations
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    },
    {
      rootMargin: '-10% 0px', // Start animation slightly before element enters viewport
      threshold: 0
    }
  );

  // Observe all sections
  document.querySelectorAll('section').forEach((section) => {
    section.classList.add('reveal-on-scroll');
    observer.observe(section);
  });

  return () => observer.disconnect();
}