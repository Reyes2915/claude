import type { RoastLevel } from '../types';

const ROAST_NAMES: Record<RoastLevel, string> = {
  1: 'Muy claro',
  2: 'Claro',
  3: 'Medio',
  4: 'Medio-oscuro',
  5: 'Oscuro',
};

export const roastLabel = (level: RoastLevel) => ROAST_NAMES[level];

export const roastPercent = (level: RoastLevel) => `${(level / 5) * 100}%`;

export const formatPrice = (value: number, decimals = 2) => `$${value.toFixed(decimals)}`;

export const pluralize = (n: number, singular: string, plural: string) =>
  `${n} ${n === 1 ? singular : plural}`;
