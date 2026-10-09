import { experience, projects, contact } from './data.js';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

// Soft sky-vignette placeholder for projects without an image yet.
function projectPlaceholder(i) {
  return `<svg viewBox="0 0 400 240" class="card__art" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="cardSky${i}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--sky-top)" />
        <stop offset="100%" stop-color="var(--sky-bottom)" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#cardSky${i})" />
    <g fill="var(--cloud)" opacity="0.95">
      <circle cx="120" cy="150" r="38" /><circle cx="160" cy="135" r="46" />
      <circle cx="205" cy="150" r="36" /><rect x="86" y="150" width="150" height="34" rx="17" />
    </g>
    <circle cx="320" cy="70" r="26" fill="var(--sun)" />
    <text x="24" y="214" fill="var(--ink)" opacity="0.14" font-size="40" font-family="Newsreader, serif" font-weight="700">0${i + 1}</text>
  </svg>`;
}

function renderExperience() {
  const mount = document.querySelector('[data-experience]');
  if (!mount) return;
  mount.innerHTML = '';
  experience.forEach((job) => {
    const item = el('article', 'job');
    item.setAttribute('data-reveal', '');
    item.appendChild(el('span', 'job__range', job.range));

    const body = el('div', 'job__body');
    const head = el('div', 'job__head');
    head.appendChild(el('h3', 'job__role', job.role));
    const meta = el('p', 'job__meta');
    meta.textContent = `${job.company} · ${job.location}`;
    head.appendChild(meta);
    body.appendChild(head);

    const list = el('ul', 'job__bullets');
    job.bullets.forEach((b) => list.appendChild(el('li', null, b)));
    body.appendChild(list);

    item.appendChild(body);
    mount.appendChild(item);
  });
}

function renderProjects() {
  const mount = document.querySelector('[data-projects]');
  if (!mount) return;
  mount.innerHTML = '';
  projects.forEach((p, i) => {
    const card = el('article', 'card');
    card.setAttribute('data-reveal', '');

    const art = el('a', 'card__media');
    art.href = p.link || '#';
    if (p.link && p.link !== '#') {
      art.target = '_blank';
      art.rel = 'noopener';
    }
    if (p.video) {
      const video = el('video', 'card__video');
      video.src = p.video;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;
      video.preload = 'metadata';
      video.setAttribute('aria-hidden', 'true');
      art.appendChild(video);
    } else if (p.image) {
      const img = el('img', 'card__img');
      img.src = p.image;
      img.alt = p.name;
      img.loading = 'lazy';
      art.appendChild(img);
    } else {
      art.innerHTML = projectPlaceholder(i);
    }
    card.appendChild(art);

    const body = el('div', 'card__body');
    body.appendChild(el('span', 'card__stack', p.stack));
    body.appendChild(el('h3', 'card__name', p.name));
    const lines = el('div', 'card__lines');
    p.lines.forEach((l) => lines.appendChild(el('p', null, l)));
    body.appendChild(lines);
    const more = el('a', 'card__more', 'Show me more →');
    more.href = p.link || '#';
    body.appendChild(more);

    card.appendChild(body);
    mount.appendChild(card);
  });
}

function renderContact() {
  const emailEl = document.querySelector('[data-contact-email]');
  if (emailEl) {
    emailEl.textContent = contact.email;
    emailEl.href = `mailto:${contact.email}`;
  }
  const socialMount = document.querySelector('[data-contact-socials]');
  if (socialMount) {
    socialMount.innerHTML = '';
    contact.socials.forEach((s) => {
      const a = el('a', 'social', s.label);
      a.href = s.href;
      a.target = '_blank';
      a.rel = 'noopener';
      socialMount.appendChild(a);
    });
  }
}

export function renderContent() {
  renderExperience();
  renderProjects();
  renderContact();
}
