# CLAUDE.md — Cloud portfolio

## Concept

A calm single-page portfolio for Aryan Tiwari (brand & growth marketer). Mood,
colour scheme and gentle motion are inspired by heyganesh.com — a **sky-blue
cloud hero** that gives way to **warm cream content sections** — but all code and
illustrations here are original. The keyboard interaction and desktop-OS icon
metaphor from the reference are deliberately **not** used.

The sky holds drifting **clouds**, a soft **sun**, and parallax depth; content
is set in a serif display face over cream.

## Stack

Vite + vanilla JS + GSAP ScrollTrigger + Lenis. Clouds and sun are original
inline SVG in `src/svg/`. No framework, no 3D.

## Palette & type (CSS variables, `src/css/style.css` `:root`)

| Token         | Value       | Use                         |
| ------------- | ----------- | --------------------------- |
| `--sky-top/bottom` | blue gradient | hero sky              |
| `--cloud`     | white       | clouds                      |
| `--sun`       | warm yellow | sun                         |
| `--cream`     | `#ebebe4`   | content sections            |
| `--ink`/`--ink-2` | navy    | headings / strong text      |
| `--muted`     | slate       | body text                   |
| `--amber`     | `#8a6a2e`   | mono micro-labels           |
| `--accent`    | `#6b4ef5`   | links, hero emphasis word   |

Fonts (Google Fonts): **Newsreader** (serif display), **Inter** (body),
**IBM Plex Mono** (eyebrows/labels).

## Structure

```
clouds/
├─ index.html                 # hero + About / Experience / Work / Contact
├─ public/works/              # project images (added later)
└─ src/
   ├─ main.js                 # build sky → render content → start motion
   ├─ css/style.css           # palette, fonts, all styles
   ├─ svg/                    # original inline SVG
   │  ├─ clouds.js            # flat cloud silhouettes
   │  └─ sun.js               # sun with glow
   └─ js/
      ├─ data.js              # experience / projects / contact — EDIT HERE
      ├─ scene.js             # composes sun + cloud depth layers into the sky
      ├─ content.js           # renders data.js into the sections
      └─ animations.js        # Lenis + ScrollTrigger, cloud parallax/drift, sun pulse, reveals
```

## Content

Pulled from Aryan's résumé + previous portfolio: AdLift (Marketing Manager) and
Rian (Specialist → Executive → Intern) experience, projects (Quote Tracker,
Cookie Brand site, BrightonSEO, Tesseract AI video), and contact. **Project
images are placeholders** (sky vignettes) until real images are supplied.

## Motion

- **Parallax:** cloud layers carry `data-depth`; `animations.js` translates each
  by `scroll * depth`, and the sun drifts up slowly.
- **Idle:** clouds drift sideways on sine loops; the sun core breathes.
- **On scroll:** text fades up (`[data-reveal]`), `power2.out`, 0.6–0.9s.
- **`prefers-reduced-motion` respected** — motion skipped, content shown, transforms cleared.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # production build
npm run preview   # preview build
```

> Lives in the `clouds/` subfolder, alongside the earlier `night-match/` and
> `v2/` explorations and the original root site.
