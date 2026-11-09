export type HeroLayout = 'split' | 'fullbleed';
export type CtaMode = 'Comprar' | 'Suscribirme';

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/** Nivel de tueste de 1 (muy claro) a 5 (oscuro) */
export type RoastLevel = 1 | 2 | 3 | 4 | 5;

export interface Product {
  id: string;
  name: string;
  origin: string;
  process: string;
  notes: string[];
  roast: RoastLevel;
  price: number;
  image?: string;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface SubscriptionStep {
  title: string;
  description: string;
}

export interface Frequency {
  label: string;
  /** Envíos por mes */
  perMonth: number;
}

export interface BrewMethod {
  name: string;
  description: string;
  specs: [label: string, value: string][];
  steps: string[];
}

export interface Review {
  quote: string;
  name: string;
  meta: string;
}

export interface Faq {
  question: string;
  answer: string;
}
