// Warm sun with a soft glow halo and a solid core. The core pulses gently in
// animations.js.
export function sun() {
  return `<svg class="sun-svg" viewBox="0 0 220 220" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="var(--sun)" stop-opacity="0.9" />
        <stop offset="42%" stop-color="var(--sun)" stop-opacity="0.35" />
        <stop offset="100%" stop-color="var(--sun)" stop-opacity="0" />
      </radialGradient>
    </defs>
    <circle cx="110" cy="110" r="108" fill="url(#sunGlow)" />
    <circle class="sun-core" cx="110" cy="110" r="52" fill="var(--sun)" />
  </svg>`;
}
