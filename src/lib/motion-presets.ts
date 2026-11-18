export const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 380,
  damping: 30,
};

export const GENTLE_TRANSITION = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: GENTLE_TRANSITION },
  exit: { opacity: 0, y: -16, transition: GENTLE_TRANSITION },
};
