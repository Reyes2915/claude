import type {
  BrewMethod,
  Faq,
  Frequency,
  Product,
  Review,
  SubscriptionStep,
  ValueProp,
} from '../types';

export const valueProps: ValueProp[] = [
  { title: 'Origen único', description: 'Cada bolsa viene de una sola finca, con nombre y altura en la etiqueta.' },
  { title: 'Tostado cada semana', description: 'Tostamos en lotes pequeños los lunes y enviamos esa misma semana.' },
  { title: 'Envío gratis', description: 'Sin mínimo de compra. Llega en bolsa con válvula para conservar el aroma.' },
  { title: 'Comercio directo', description: 'Compramos directo al productor y pagamos por encima del precio de mercado.' },
];

export const products: Product[] = [
  { id: 'huila', name: 'Huila Reserva', origin: 'Colombia', process: 'Lavado · 1,700 msnm', notes: ['Panela', 'Cereza', 'Cacao'], roast: 3, price: 18 },
  { id: 'yirga', name: 'Yirgacheffe', origin: 'Etiopía', process: 'Natural · 2,000 msnm', notes: ['Jazmín', 'Arándano', 'Limón'], roast: 2, price: 22 },
  { id: 'chiapas', name: 'Chiapas Oscuro', origin: 'México', process: 'Lavado · 1,400 msnm', notes: ['Chocolate', 'Nuez', 'Melaza'], roast: 5, price: 16 },
  { id: 'antigua', name: 'Antigua', origin: 'Guatemala', process: 'Lavado · 1,500 msnm', notes: ['Caramelo', 'Naranja', 'Especias'], roast: 3, price: 19 },
  { id: 'cerrado', name: 'Cerrado Mineiro', origin: 'Brasil', process: 'Natural · 1,100 msnm', notes: ['Avellana', 'Cacao', 'Dulce'], roast: 4, price: 15 },
  { id: 'tarrazu', name: 'Tarrazú', origin: 'Costa Rica', process: 'Honey · 1,800 msnm', notes: ['Miel', 'Durazno', 'Vainilla'], roast: 2, price: 21 },
];

export const subscription = {
  /** Precio base por bolsa usado en el calculador */
  basePrice: 18,
  discount: 0.15,
  steps: [
    { title: 'Eliges', description: 'Tu café, la molienda y cada cuánto lo quieres.' },
    { title: 'Recibes', description: 'Lo tostamos el lunes y llega a tu puerta esa misma semana.' },
    { title: 'Disfrutas', description: 'Con una guía de preparación incluida en cada envío.' },
  ] satisfies SubscriptionStep[],
  frequencies: [
    { label: 'Cada 2 semanas', perMonth: 2 },
    { label: 'Mensual', perMonth: 1 },
    { label: 'Cada 2 meses', perMonth: 0.5 },
  ] satisfies Frequency[],
  bags: [1, 2, 3],
  defaultFrequency: 1,
  defaultBags: 0,
};

export const brewMethods: BrewMethod[] = [
  {
    name: 'Espresso',
    description: 'Concentrado, con cuerpo y crema densa. Ideal para tuestes medios a oscuros y para bebidas con leche.',
    specs: [['Molienda', 'Fina'], ['Proporción', '1 : 2'], ['Tiempo', '25–30 s'], ['Temperatura', '200 °F']],
    steps: [
      'Muele 18 g de café justo antes de preparar.',
      'Distribuye y compacta de forma pareja.',
      'Extrae 36 g de bebida en 25 a 30 segundos.',
      'Si sabe ácido, muele más fino; si sabe amargo, más grueso.',
    ],
  },
  {
    name: 'V60',
    description: 'Taza limpia y brillante que resalta las notas florales y frutales de los cafés claros.',
    specs: [['Molienda', 'Media-fina'], ['Proporción', '1 : 16'], ['Tiempo', '2:30–3:00'], ['Temperatura', '205 °F']],
    steps: [
      'Enjuaga el filtro con agua caliente y desecha el agua.',
      'Agrega 15 g de café y vierte 30 g de agua para el bloom (30 s).',
      'Vierte en círculos lentos hasta llegar a 250 g.',
      'Deja drenar y sirve al terminar los 3 minutos.',
    ],
  },
  {
    name: 'Prensa francesa',
    description: 'Cuerpo pleno y textura sedosa. Perfecta para tuestes medios y oscuros con notas a chocolate.',
    specs: [['Molienda', 'Gruesa'], ['Proporción', '1 : 15'], ['Tiempo', '4:00'], ['Temperatura', '200 °F']],
    steps: [
      'Agrega 30 g de café molido grueso.',
      'Vierte 450 g de agua y revuelve suavemente.',
      'Tapa y deja reposar 4 minutos.',
      'Presiona despacio y sirve de inmediato.',
    ],
  },
  {
    name: 'Cold brew',
    description: 'Dulce, suave y con muy poca acidez. Se prepara en frío y dura varios días en el refrigerador.',
    specs: [['Molienda', 'Extra gruesa'], ['Proporción', '1 : 8'], ['Tiempo', '16–18 h'], ['Temperatura', 'Fría']],
    steps: [
      'Mezcla 100 g de café con 800 g de agua fría.',
      'Revuelve, tapa y refrigera de 16 a 18 horas.',
      'Filtra con papel o tela.',
      'Sirve con hielo; diluye al gusto con agua o leche.',
    ],
  },
];

export const reviews: Review[] = [
  { quote: 'El Yirgacheffe me cambió la idea de lo que puede saber un café. Huele a flores desde que abres la bolsa.', name: 'Mariana R.', meta: 'Suscriptora desde 2024' },
  { quote: 'Llega siempre a los pocos días del tueste y se nota. Ya no compro café en el súper.', name: 'Daniel P.', meta: 'Cliente frecuente' },
  { quote: 'La guía de preparación que viene en la caja es oro. Mi V60 por fin sabe como en la cafetería.', name: 'Sofía L.', meta: 'Primera compra' },
];

export const faqs: Faq[] = [
  { question: '¿Cuánto cuesta el envío?', answer: 'Nada. El envío es gratis en todos los pedidos, sin monto mínimo.' },
  { question: '¿Cuándo se tuesta mi café?', answer: 'Tostamos cada lunes y enviamos entre martes y jueves. La fecha de tueste viene impresa en cada bolsa.' },
  { question: '¿Lo puedo pedir molido?', answer: 'Sí. Elige tu método (espresso, V60, prensa francesa, cold brew o en grano) y lo molemos para ti.' },
  { question: '¿Cuánto dura fresco?', answer: 'Está en su mejor punto entre los días 5 y 30 después del tueste. Guárdalo en la bolsa cerrada, lejos de la luz y del calor.' },
  { question: '¿Puedo pausar o cancelar mi suscripción?', answer: 'Cuando quieras y sin penalización. También puedes saltar un envío o cambiar de café.' },
];
