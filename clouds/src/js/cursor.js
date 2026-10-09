import { gsap } from 'gsap';

// A clean custom cursor: a crisp dot that tracks the pointer, with a larger ring
// that eases behind it and reacts to interactive elements (grows + turns the
// accent colour). Disabled on touch / reduced-motion (native cursor).
export function initCursor() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = window.matchMedia('(pointer: coarse)').matches;
  if (reduce || touch) return;

  document.documentElement.classList.add('has-cursor');

  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  ring.setAttribute('aria-hidden', 'true');
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  dot.setAttribute('aria-hidden', 'true');
  document.body.append(ring, dot);

  gsap.set([ring, dot], {
    xPercent: -50,
    yPercent: -50,
    x: innerWidth / 2,
    y: innerHeight / 2,
  });

  // Dot follows fast; ring trails with a gentle ease.
  const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
  const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
  const ringX = gsap.quickTo(ring, 'x', { duration: 0.42, ease: 'power3' });
  const ringY = gsap.quickTo(ring, 'y', { duration: 0.42, ease: 'power3' });

  window.addEventListener('pointermove', (e) => {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  });

  const interactive = 'a, button, [data-cursor], input, textarea, .card, .social';
  document.addEventListener('pointerover', (e) => {
    if (e.target.closest(interactive)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('pointerout', (e) => {
    if (e.target.closest(interactive)) document.body.classList.remove('cursor-hover');
  });
  window.addEventListener('pointerdown', () => document.body.classList.add('cursor-down'));
  window.addEventListener('pointerup', () => document.body.classList.remove('cursor-down'));
}
