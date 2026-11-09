/** Curvas y utilidades de movimiento compartidas por los scripts de la página */
export const EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';

const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

export const prefersReducedMotion = () => reducedQuery.matches;

/** Reemplaza el texto y lo "asienta": entra desde abajo y desenfocado. Con movimiento reducido solo cruza opacidad. */
export function settleText(el: Element | null, text: string, { lift = '0.22em', duration = 420 } = {}) {
  if (!(el instanceof HTMLElement) || el.textContent === text) return;
  el.textContent = text;
  const keyframes = prefersReducedMotion()
    ? [{ opacity: 0.35 }, { opacity: 1 }]
    : [
        { opacity: 0, transform: `translateY(${lift})`, filter: 'blur(4px)' },
        { opacity: 1, transform: 'none', filter: 'blur(0)' },
      ];
  el.animate(keyframes, { duration, easing: EASE_OUT });
}
