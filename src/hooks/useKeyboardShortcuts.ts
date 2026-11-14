import { useEffect } from 'react';
import type { OptionKey } from '@/types/quiz';

export function useKeyboardShortcuts(
  isActive: boolean,
  onSelectOption: (key: OptionKey) => void,
  onBack?: () => void
) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const key = e.key.toUpperCase();
      if (['A', '1'].includes(key)) onSelectOption('A');
      else if (['B', '2'].includes(key)) onSelectOption('B');
      else if (['C', '3'].includes(key)) onSelectOption('C');
      else if (['D', '4'].includes(key)) onSelectOption('D');
      else if (['E', '5'].includes(key)) onSelectOption('E');
      else if (['BACKSPACE', 'ARROWLEFT'].includes(e.key) && onBack) onBack();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onSelectOption, onBack]);
}
