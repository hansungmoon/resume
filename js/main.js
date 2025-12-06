// Typing Effect
const typedText = document.getElementById('typed-text');
const textToType = 'cat portfolio.yaml | kubectl apply -f -';
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typedText.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 80);
  }
}

// Start typing after page load
window.addEventListener('load', () => {
  setTimeout(typeText, 500);
});

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply to project cards and stack categories
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.project-card, .stack-category, .link-card');
  
  animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add subtle parallax effect to hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  if (hero && scrolled < window.innerHeight) {
    hero.style.backgroundPositionY = `${scrolled * 0.3}px`;
  }
});

// Console easter egg
console.log('%c🚀 DevOps Portfolio', 'font-size: 24px; font-weight: bold; color: #00d4ff;');
console.log('%cInfrastructure as Code • Kubernetes • Cloud Native', 'font-size: 14px; color: #a1a1aa;');
console.log('%c\nInterested in the code? Check out: github.com/hansungmoon', 'font-size: 12px; color: #22c55e;');
