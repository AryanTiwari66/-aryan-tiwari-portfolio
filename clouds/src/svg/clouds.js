// Original flat clouds — overlapping puffs on a rounded base, filled with the
// --cloud palette token. A few silhouette variants give the sky variety.
function puff(cx, cy, r) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" />`;
}

const SHAPES = [
  // 0 — classic
  `<rect x="14" y="66" width="172" height="34" rx="17" />${puff(52, 66, 34)}${puff(96, 50, 46)}${puff(142, 62, 38)}${puff(172, 72, 24)}${puff(30, 74, 22)}`,
  // 1 — wide + low
  `<rect x="10" y="70" width="180" height="30" rx="15" />${puff(46, 70, 30)}${puff(90, 56, 42)}${puff(132, 64, 34)}${puff(166, 72, 26)}`,
  // 2 — compact
  `<rect x="22" y="64" width="150" height="36" rx="18" />${puff(58, 62, 32)}${puff(102, 52, 40)}${puff(142, 66, 30)}`,
];

export function cloudSVG(variant = 0) {
  return `<svg class="cloud" viewBox="0 0 200 110" aria-hidden="true" focusable="false">
    <g fill="var(--cloud)">${SHAPES[variant % SHAPES.length]}</g>
  </svg>`;
}
