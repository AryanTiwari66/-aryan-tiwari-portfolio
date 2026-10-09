import './css/style.css';
import { buildScene } from './js/scene.js';
import { renderContent } from './js/content.js';
import { initAnimations } from './js/animations.js';
import { initCursor } from './js/cursor.js';

// Build the sky + data-driven sections first, then start motion so parallax
// and ScrollTrigger see the final DOM.
const { parallaxLayers, sunEl, clouds } = buildScene();
renderContent();
initAnimations({ parallaxLayers, sunEl, clouds });
initCursor();
