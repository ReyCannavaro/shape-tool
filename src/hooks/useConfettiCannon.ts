import { useCallback } from 'react';
import confetti from 'canvas-confetti';

export function useConfettiCannon() {
  const fireCelebration = useCallback(() => {
    const itsColors = ['#FFB800', '#00E5FF', '#002C6C', '#FFFFFF'];

    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: itsColors,
      disableForReducedMotion: true,
    });

    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: itsColors,
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors: itsColors,
        ticks: 200,
        gravity: 0.8,
        scalar: 1.1,
        disableForReducedMotion: true,
      });
    }, 250);
  }, []);

  return { fireCelebration };
}
