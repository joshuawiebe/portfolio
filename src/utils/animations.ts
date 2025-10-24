import { addIntersectionObserver } from './helpers';

// Add fade-in-up animation to elements
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  // Add animation classes to section titles
  document.querySelectorAll('section h2').forEach((element) => {
    element.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'reveal');
  });

  // Add animation classes to project cards
  document.querySelectorAll('.group.relative').forEach((element, index) => {
    element.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'reveal');
    (element as HTMLElement).style.transitionDelay = `${index * 100}ms`;
  });

  // Add animation classes to skills
  document.querySelectorAll('[data-skill]').forEach((element, index) => {
    element.classList.add('opacity-0', 'scale-95', 'transition-all', 'duration-500', 'reveal');
    (element as HTMLElement).style.transitionDelay = `${index * 50}ms`;
  });

  // Add animation classes to education timeline items
  document.querySelectorAll('.education-item').forEach((element, index) => {
    element.classList.add('opacity-0', 'translate-x-4', 'transition-all', 'duration-700', 'reveal');
    (element as HTMLElement).style.transitionDelay = `${index * 150}ms`;
  });

  // Add animation classes to experience items
  document.querySelectorAll('.experience-item').forEach((element, index) => {
    element.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'reveal');
    (element as HTMLElement).style.transitionDelay = `${index * 150}ms`;
  });

  // Create intersection observer for reveal animations
  const observer = addIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-4', 'translate-x-4', 'scale-95');
        observer.unobserve(entry.target);
      }
    });
  });

  return observer;
}

// Add hover animations
export function initHoverAnimations() {
  if (typeof window === 'undefined') return;

  // Add hover effects to project cards
  document.querySelectorAll('.group.relative').forEach((element) => {
    element.classList.add('hover:-translate-y-1', 'transition-transform', 'duration-300');
  });

  // Add hover effects to social links
  document.querySelectorAll('.social-link').forEach((element) => {
    element.classList.add('hover:scale-110', 'transition-transform', 'duration-300');
  });

  // Add hover effects to navigation links
  document.querySelectorAll('.nav-link').forEach((element) => {
    element.classList.add('hover:text-accent', 'transition-colors', 'duration-300');
  });
}