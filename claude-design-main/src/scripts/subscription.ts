import { subscriptionQuote } from '../utils/subscription';
import { settleText } from './motion';

interface SubscriptionConfig {
  frequencies: string[];
  bags: number[];
  basePrice: number;
  discount: number;
}

/** Calculador de la suscripción: selección de frecuencia/bolsas y precio en vivo */
export function initSubscription() {
  document.querySelectorAll<HTMLElement>('[data-subscription]').forEach((root) => {
    const config: SubscriptionConfig = JSON.parse(root.dataset.config ?? '{}');
    const summary = root.querySelector('[data-summary]');
    const price = root.querySelector('[data-price]');
    const full = root.querySelector('[data-full]');

    const selectedIndex = (group: string) => {
      const checked = root.querySelector<HTMLElement>(
        `[data-option-group="${group}"] [aria-checked="true"]`,
      );
      return Number(checked?.dataset.index ?? 0);
    };

    const render = () => {
      const quote = subscriptionQuote({
        bags: config.bags[selectedIndex('bags')],
        frequencyLabel: config.frequencies[selectedIndex('frequency')],
        basePrice: config.basePrice,
        discount: config.discount,
      });
      settleText(summary, quote.summary, { lift: '0.4em', duration: 300 });
      settleText(price, quote.price);
      settleText(full, quote.full, { duration: 300 });
    };

    root.querySelectorAll<HTMLElement>('[data-option-group]').forEach((group) => {
      group.addEventListener('click', (event) => {
        const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[role="radio"]');
        if (!button || button.getAttribute('aria-checked') === 'true') return;
        group.querySelectorAll('[role="radio"]').forEach((el) => {
          el.setAttribute('aria-checked', String(el === button));
        });
        render();
      });
    });
  });
}

