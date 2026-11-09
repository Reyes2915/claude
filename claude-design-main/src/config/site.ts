import type { CtaMode, FooterColumn, HeroLayout, NavLink } from '../types';

export const site = {
  name: 'Crema & Nogal',
  description:
    'Tostadores de café de especialidad. Lotes pequeños, origen único, envío gratis.',
  lang: 'es',
  announcement: 'Envío gratis en todos los pedidos',
  email: 'hola@cremaynogal.com',
  phone: '(555) 012-3456',
  phoneHref: 'tel:5550123456',
  address: 'Pike Place Market, Seattle, WA',
  hours: ['Lun–Vie 7:00–18:00', 'Sáb–Dom 8:00–15:00'],
  newsletterCode: 'PRIMERATAZA',
} as const;

/** Variantes de la landing (equivalen a los props del diseño) */
export const landing: {
  heroLayout: HeroLayout;
  ctaMode: CtaMode;
  productCount: 3 | 6;
} = {
  heroLayout: 'split',
  ctaMode: 'Comprar',
  productCount: 3,
};

export const navLinks: NavLink[] = [
  { label: 'Cafés', href: '#cafes' },
  { label: 'Suscripción', href: '#suscripcion' },
  { label: 'Origen', href: '#origen' },
  { label: 'Preparación', href: '#preparacion' },
  { label: 'Visítanos', href: '#visitanos' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Tienda',
    links: [
      { label: 'Cafés', href: '#cafes' },
      { label: 'Suscripción', href: '#suscripcion' },
      { label: 'Tarjetas de regalo', href: '#' },
      { label: 'Mayoreo para cafeterías', href: '#' },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { label: 'Envíos y devoluciones', href: '#' },
      { label: 'Guía de preparación', href: '#preparacion' },
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Contacto', href: '#visitanos' },
    ],
  },
  {
    title: 'Síguenos',
    links: [
      { label: 'Instagram', href: '#' },
      { label: 'TikTok', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'WhatsApp', href: '#' },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: 'Términos', href: '#' },
  { label: 'Privacidad', href: '#' },
];

export const paymentMethods = ['VISA', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];
