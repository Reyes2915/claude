import { EASE_OUT, prefersReducedMotion } from './motion';

/** Formulario del boletín: muestra el código de descuento al enviar */
export function initNewsletter() {
  document.querySelectorAll<HTMLElement>('[data-newsletter]').forEach((root) => {
    const form = root.querySelector<HTMLFormElement>('[data-newsletter-form]');
    const success = root.querySelector<HTMLElement>('[data-newsletter-success]');
    const code = success?.querySelector<HTMLElement>('[data-newsletter-code]');

    form?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const reduced = prefersReducedMotion();

      // Salida rápida del formulario; la entrada del mensaje es más lenta
      await form
        .animate(
          reduced ? [{ opacity: 1 }, { opacity: 0 }] : [{ opacity: 1 }, { opacity: 0, transform: 'scale(0.98)' }],
          { duration: 160, easing: 'ease-in', fill: 'forwards' },
        )
        .finished.catch(() => {});
      form.hidden = true;
      if (!success) return;
      success.hidden = false;

      success.animate(
        reduced
          ? [{ opacity: 0 }, { opacity: 1 }]
          : [
              { opacity: 0, transform: 'translateY(8px) scale(0.98)' },
              { opacity: 1, transform: 'none' },
            ],
        { duration: 420, easing: EASE_OUT },
      );
      // El código se "revela" como si se despegara una etiqueta
      code?.animate(
        reduced
          ? [{ opacity: 0 }, { opacity: 1 }]
          : [
              { clipPath: 'inset(0 100% 0 0)', opacity: 0.4 },
              { clipPath: 'inset(0 0 0 0)', opacity: 1 },
            ],
        { duration: 640, delay: reduced ? 0 : 220, easing: EASE_OUT, fill: 'backwards' },
      );
    });
  });
}
