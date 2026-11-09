import { formatPrice, pluralize } from './format';

interface QuoteInput {
  bags: number;
  frequencyLabel: string;
  basePrice: number;
  discount: number;
}

/** Calcula el precio por envío de la suscripción */
export const subscriptionQuote = ({ bags, frequencyLabel, basePrice, discount }: QuoteInput) => {
  const full = basePrice * bags;
  return {
    summary: `${pluralize(bags, 'bolsa', 'bolsas')} · ${frequencyLabel.toLowerCase()} · por envío`,
    price: formatPrice(full * (1 - discount)),
    full: formatPrice(full),
  };
};
