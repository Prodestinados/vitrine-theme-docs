# Animations

Atelier includes subtle scroll-reveal animations and hero section effects.

## Scroll Reveal

Sections and content blocks fade in as they enter the viewport. This is handled by the `<scroll-reveal>` component and works automatically.

## Hero Animations

The Hero Banner section offers:
- **None** — No animation
- **Fade up** — Content fades in from below
- **Subtle zoom** — Image gently zooms on load

The Scroll Expansion Hero section offers more dramatic effects — see [Scroll Expansion Hero](../sections-guide/scroll-expansion-hero.md).

## Reduced Motion

All animations respect the user's **prefers-reduced-motion** system setting. When enabled:
- Scroll reveal shows content instantly (no fade)
- Hero animations are disabled
- Marquee still scrolls but can be paused

## Tips

- Animations are intentionally subtle — they enhance rather than distract
- Test on mobile to ensure animations feel smooth
