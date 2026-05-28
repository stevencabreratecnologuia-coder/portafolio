// CURSOR PERSONALIZADO
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top = e.clientY + 'px';
});

// Efecto hover en links y botones
document.querySelectorAll('a, button, .skill-group, .project-card, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
    cursorRing.style.width = '56px';
    cursorRing.style.height = '56px';
    cursorRing.style.opacity = '1';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorRing.style.width = '36px';
    cursorRing.style.height = '36px';
    cursorRing.style.opacity = '0.6';
  });
});

// ANIMACIONES AL HACER SCROLL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));
