// Typing Effect
const typedText = document.getElementById('typed-text');
const text = 'kubectl apply -f portfolio.yaml';
let i = 0;

function type() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}

window.addEventListener('load', function() {
  setTimeout(type, 400);
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.project, .stack-card, .link-card');
  elements.forEach((el, idx) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease ' + (idx * 0.05) + 's';
    observer.observe(el);
  });
});

// Console message
console.log('%c🚀 DevOps Portfolio', 'font-size:20px;color:#58a6ff;font-weight:bold;');
console.log('%cBuilt with Kubernetes mindset', 'color:#8b949e;');
