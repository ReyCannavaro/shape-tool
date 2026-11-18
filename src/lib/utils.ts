import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

export function formatProdiTitle(id: string): string {
  const titles: Record<string, string> = {
    'bisnis-digital': 'S1 Bisnis Digital',
    'sains-komunikasi': 'S1 Sains Komunikasi',
    'analitika-logistik': 'D4 Analitika Logistik Terapan',
    'bioteknologi': 'S1 Bioteknologi',
    'rekayasa-keselamatan-proses': 'S1 Rekayasa Keselamatan Proses',
  };
  return titles[id] || id;
}
