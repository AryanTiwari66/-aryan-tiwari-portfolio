import { cloudSVG } from '../svg/clouds.js';
import { sun } from '../svg/sun.js';

// Builds the fixed sky: a sun plus three depth layers of clouds. Positions are
// in % of the viewport. Each `.cloud-item` gets a static scale on an inner
// wrapper so animations.js can drift it on the x axis without fighting scale.
const LAYERS = [
  {
    depth: 0.03,
    clouds: [
      { x: 6, y: 12, s: 0.6, v: 1 },
      { x: 58, y: 8, s: 0.55, v: 2 },
      { x: 82, y: 20, s: 0.7, v: 0 },
    ],
  },
  {
    depth: 0.08,
    clouds: [
      { x: 18, y: 26, s: 0.95, v: 0 },
      { x: 68, y: 34, s: 1.05, v: 1 },
      { x: 40, y: 15, s: 0.8, v: 2 },
    ],
  },
  {
    depth: 0.18,
    clouds: [
      { x: -6, y: 58, s: 1.5, v: 2 },
      { x: 52, y: 68, s: 1.7, v: 0 },
      { x: 86, y: 54, s: 1.3, v: 1 },
    ],
  },
];

export function buildScene() {
  const mount = document.querySelector('[data-sky]');
  if (!mount) return { parallaxLayers: [], sunEl: null, clouds: [] };

  let html = `<div class="sun-wrap" data-sun>${sun()}</div>`;
  LAYERS.forEach((layer, i) => {
    let inner = '';
    layer.clouds.forEach((c) => {
      inner += `<div class="cloud-item" style="left:${c.x}%;top:${c.y}%;">
        <div class="cloud-scale" style="transform:scale(${c.s});">${cloudSVG(c.v)}</div>
      </div>`;
    });
    html += `<div class="sky-layer" data-depth="${layer.depth}" data-layer="${i}">${inner}</div>`;
  });
  mount.innerHTML = html;

  const parallaxLayers = [...mount.querySelectorAll('.sky-layer')].map((el) => ({
    el,
    depth: parseFloat(el.dataset.depth),
  }));
  const sunEl = mount.querySelector('[data-sun]');
  const clouds = [...mount.querySelectorAll('.cloud-item')];

  return { parallaxLayers, sunEl, clouds };
}
