import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealAll(instant) {
  gsap.utils.toArray('[data-reveal]').forEach((elm) => {
    if (instant) {
      elm.style.opacity = 1;
      return;
    }
    gsap.from(elm, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: { trigger: elm, start: 'top 88%' },
    });
  });
}

// Slow idle motion: clouds drift sideways, the sun breathes.
function idleLoops(clouds) {
  clouds.forEach((cloud, i) => {
    const dist = 24 + (i % 4) * 10;
    const dur = 16 + (i % 5) * 4;
    gsap.to(cloud, {
      x: i % 2 ? dist : -dist,
      duration: dur,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: i * 0.4,
    });
  });
  gsap.to('.sun-core', {
    scale: 1.06,
    transformOrigin: '50% 50%',
    duration: 4.5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });
}

export function initAnimations({ parallaxLayers = [], sunEl = null, clouds = [] } = {}) {
  if (reduceMotion) {
    revealAll(true);
    return { lenis: null };
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        lenis.scrollTo(id, { offset: 0 });
      }
    });
  });

  // Parallax: sky layers rise at their own depth; the sun drifts up gently.
  function applyParallax(scroll) {
    for (const { el, depth } of parallaxLayers) {
      el.style.transform = `translate3d(0, ${(-scroll * depth).toFixed(1)}px, 0)`;
    }
    if (sunEl) {
      sunEl.style.transform = `translate3d(0, ${(-scroll * 0.06).toFixed(1)}px, 0)`;
    }
  }
  lenis.on('scroll', ({ scroll }) => applyParallax(scroll));
  applyParallax(0);

  idleLoops(clouds);
  revealAll(false);

  return { lenis };
}
