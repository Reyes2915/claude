import { EASE_OUT, prefersReducedMotion } from './motion';

/** Tabs accesibles: click y navegación con flechas entre [role=tab] */
export function initTabs(selector: string) {
  document.querySelectorAll<HTMLElement>(selector).forEach((root) => {
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const tablist = root.querySelector<HTMLElement>('[role="tablist"]');
    const indicator = root.querySelector<HTMLElement>('[data-tab-indicator]');

    // Indicador deslizante: sustituye el fondo de la pestaña activa una vez que JS está listo
    const moveIndicator = (tab: HTMLButtonElement, animate: boolean) => {
      if (!tablist || !indicator) return;
      indicator.style.transition = animate && !prefersReducedMotion() ? '' : 'none';
      indicator.style.width = `${tab.offsetWidth}px`;
      indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
    };

    const current = () => tabs.find((t) => t.getAttribute('aria-selected') === 'true') ?? tabs[0];

    if (tablist && indicator) {
      moveIndicator(current(), false);
      tablist.dataset.enhanced = '';
      new ResizeObserver(() => moveIndicator(current(), false)).observe(tablist);
    }

    const select = (tab: HTMLButtonElement) => {
      if (tab === current()) return;
      tabs.forEach((t) => {
        const active = t === tab;
        t.setAttribute('aria-selected', String(active));
        t.tabIndex = active ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls') ?? '');
        if (!panel) return;
        panel.hidden = !active;
        if (active) {
          panel.animate(
            prefersReducedMotion()
              ? [{ opacity: 0 }, { opacity: 1 }]
              : [
                  { opacity: 0, transform: 'translateY(10px)' },
                  { opacity: 1, transform: 'none' },
                ],
            { duration: 360, easing: EASE_OUT },
          );
        }
      });
      moveIndicator(tab, true);
      tab.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (event) => {
        const delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
        if (!delta) return;
        const next = tabs[(i + delta + tabs.length) % tabs.length];
        select(next);
        next.focus();
      });
    });
  });
}
