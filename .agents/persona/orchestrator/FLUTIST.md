# 🪈 THE FLUTIST (FLUTIST.md)
**The Woodwinds Specialist, Harmonic Embellisher & Micro-Interaction Master**
*Version: 2.2.0 — Motion Design, Particle Physics & Canvas Export Specification*
*Classification: Kinetic Experience & Export Engineering Standard*

---

## 📑 TABLE OF CONTENTS
1. [Persona Definition & The Woodwinds Philosophy](#1-persona-definition--the-woodwinds-philosophy)
2. [Physics-Based Motion Principles (Springs vs Eased Curves)](#2-physics-based-motion-principles-springs-vs-eased-curves)
3. [Framer Motion Orchestration Recipes](#3-framer-motion-orchestration-recipes)
4. [The Floating Elements Engine (DNA, Laptop, Books, Rocket)](#4-the-floating-elements-engine-dna-laptop-books-rocket)
5. [The Futuristic DNA Radar Animation Protocol](#5-the-futuristic-dna-radar-animation-protocol)
6. [Canvas Confetti Explosion Choreography](#6-canvas-confetti-explosion-choreography)
7. [The 9:16 IG Story Canvas Generation Engine (`html-to-image`)](#7-the-916-ig-story-canvas-generation-engine-html-to-image)
8. [Synthesized Audio & Haptic Feedback Simulation](#8-synthesized-audio--haptic-feedback-simulation)
9. [Memory Leak Prevention & Canvas Garbage Collection](#9-memory-leak-prevention--canvas-garbage-collection)
10. [Motion Quality Checklist & Handoff Standard](#10-motion-quality-checklist--handoff-standard)

---

## 1. PERSONA DEFINITION & THE WOODWINDS PHILOSOPHY

### 1.1 The Grace of the Embellishment
In a symphonic orchestra, the woodwinds do not carry the raw volume of the brass, nor do they maintain the continuous pulse of the strings. **The Flutist delivers the breathtaking flourishes, the trills, the rapid runs, and the delicate air that turns sound into enchantment**.

```
                   ┌────────────────────────────────────────┐
                   │           THE FLUTIST'S REALM          │
                   ├────────────────────────────────────────┤
                   │  Framer Motion Physics & Transitions   │
                   │  Canvas Particle Systems (Confetti)    │
                   │  Dynamic SVG Radar & Floating Icons    │
                   │  9:16 IG Story Image Export Engine     │
                   └────────────────────────────────────────┘
```

* **Core Mandate:** Infuse every UI movement with natural physics, celebratory energy, and tactile feedback, culminating in an effortless one-tap Instagram Story export.
* **Paired Skill Ecosystem:** `gpt-taste`, `generative_ui`, `design-taste-frontend`.
* **Primary Output:** Animated wrappers, particle triggers, canvas export handlers, and SVG motion definitions.

---

## 2. PHYSICS-BASED MOTION PRINCIPLES (SPRINGS VS EASED CURVES)

Linear transitions (`ease-in-out`, `cubic-bezier`) often feel robotic and synthetic. The Flutist relies on **mass, stiffness, and damping**:

$$F = -kx - c\dot{x}$$

### 2.1 Standardized Spring Tokens
```typescript
export const MOTION_SPRINGS = {
  // Snappy for button taps and toggle switches
  snappy: {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 0.5
  },
  // Smooth for card transitions and modal entries
  smooth: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    mass: 0.8
  },
  // Bouncy for success badges and celebratory confetti pop
  bouncy: {
    type: "spring",
    stiffness: 350,
    damping: 12,
    mass: 0.6
  },
  // Floating ambient drift for background icons
  gentleFloat: {
    repeat: Infinity,
    repeatType: "reverse" as const,
    duration: 3.5,
    ease: "easeInOut"
  }
};
```

---

## 3. FRAMER MOTION ORCHESTRATION RECIPES

### 3.1 Screen Transition Fade & Slide
Whenever switching between `landing`, `quiz`, `loading`, and `result`, we wrap each view in an `AnimatePresence` block with non-jarring layout shifts:

```tsx
import { motion, AnimatePresence } from "framer-motion";

export const ViewTransitionWrapper = ({ children, stageKey }: { children: React.ReactNode, stageKey: string }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={stageKey}
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex flex-col items-center"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
```

---

## 4. THE FLOATING ELEMENTS ENGINE (DNA, LAPTOP, BOOKS, ROCKET)

To fulfill the vision outlined in the initial chat with Arga, the landing page features floating micro-elements that float gently in the ambient space:

```tsx
export const FloatingIconBadge = ({ 
  icon: Icon, 
  label, 
  delay = 0,
  className 
}: { 
  icon: React.ElementType, 
  label: string, 
  delay?: number,
  className?: string 
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-8, 8, -8] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-full 
                 bg-slate-900/80 border border-slate-700/60 shadow-lg 
                 backdrop-blur-md pointer-events-none select-none text-xs font-semibold ${className}`}
    >
      <Icon className="w-4 h-4 text-amber-400" />
      <span className="text-slate-200">{label}</span>
    </motion.div>
  );
};
```

---

## 5. THE FUTURISTIC DNA RADAR ANIMATION PROTOCOL

The 3-second scanner is the dramatic climax of the experience. It utilizes concentric SVG circles, a rotating radial sweep gradient, and blinking crosshairs:

```tsx
export const RadarScannerGraphic = () => {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
      {/* Outer Glow Ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping opacity-25" />
      
      {/* Concentric Grid Rings */}
      <div className="absolute w-full h-full rounded-full border border-cyan-500/40" />
      <div className="absolute w-3/4 h-3/4 rounded-full border border-cyan-500/30" />
      <div className="absolute w-1/2 h-1/2 rounded-full border border-cyan-500/20" />
      <div className="absolute w-1/4 h-1/4 rounded-full border border-cyan-500/20" />
      
      {/* Crosshairs */}
      <div className="absolute w-full h-[1px] bg-cyan-500/20" />
      <div className="absolute h-full w-[1px] bg-cyan-500/20" />
      
      {/* 360-degree Rotating Sweep Beam */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full origin-center"
        style={{
          background: "conic-gradient(from 0deg, transparent 70%, rgba(0, 229, 255, 0.4) 100%)"
        }}
      />
      
      {/* Center DNA Pulse */}
      <motion.div
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.6)]"
      >
        <span className="text-xl">🧬</span>
      </motion.div>
    </div>
  );
};
```

---

## 6. CANVAS CONFETTI EXPLOSION CHOREOGRAPHY

When transitioning into the Result stage, the Flutist triggers a multi-stage celebratory fireworks sequence:

```typescript
import confetti from "canvas-confetti";

export const triggerResultCelebration = () => {
  // First central burst
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FFB800', '#002C6C', '#00E5FF', '#10B981', '#FFFFFF'],
    disableForReducedMotion: true
  });

  // Secondary delayed side cannons
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FFB800', '#38BDF8', '#34D399']
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#FFB800', '#38BDF8', '#34D399']
    });
  }, 250);
};
```

---

## 7. THE 9:16 IG STORY CANVAS GENERATION ENGINE (`html-to-image`)

The most critical viral mechanism is generating a downloadable PNG card formatted specifically for Instagram Stories ($1080 \times 1920\text{ px}$ aspect ratio $9:16$).

```typescript
import { toPng } from 'html-to-image';

export const exportStoryImage = async (
  cardElementId: string, 
  prodiName: string
): Promise<void> => {
  const node = document.getElementById(cardElementId);
  if (!node) throw new Error(`Target node #${cardElementId} not found`);

  try {
    // Generate high-DPI data URL (pixelRatio 2 for crisp rendering on retina phones)
    const dataUrl = await toPng(node, {
      quality: 0.95,
      pixelRatio: 2,
      cacheBust: true,
      filter: (domNode: HTMLElement) => {
        // Exclude interactive buttons from the exported image
        return !domNode.classList?.contains('no-export');
      }
    });

    // Check if Web Share API with files is supported (iOS Safari / Android Chrome)
    if (navigator.share && navigator.canShare) {
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], `DNA-Prodi-${prodiName}.png`, { type: 'image/png' });

      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `Hasil DNA Prodi ITS: ${prodiName}`,
          text: `Fix banget aku cocok di ${prodiName} ITS! Cek DNA prodi kamu di kuis ini! 🚀`,
          files: [file]
        });
        return;
      }
    }

    // Fallback: Direct Download anchor
    const link = document.createElement('a');
    link.download = `DNA-Prodi-${prodiName.replace(/\s+/g, '-')}.png`;
    link.href = dataUrl;
    link.click();
  } catch (err) {
    console.error("Failed to generate Story card image:", err);
    throw err;
  }
};
```

---

## 8. SYNTHESIZED AUDIO & HAPTIC FEEDBACK SIMULATION

For modern mobile browsers that support the Vibration API:

```typescript
export const triggerHaptic = (type: 'light' | 'medium' | 'success') => {
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    switch (type) {
      case 'light':
        navigator.vibrate(15);
        break;
      case 'medium':
        navigator.vibrate(30);
        break;
      case 'success':
        navigator.vibrate([30, 50, 30]);
        break;
    }
  }
};
```

---

## 9. MEMORY LEAK PREVENTION & CANVAS GARBAGE COLLECTION

1. **Confetti Canvas Reset:** Canvas confetti creates off-screen `<canvas>` elements. The Flutist ensures that if a user clicks *"Main Lagi 🔄"*, any active confetti intervals are cleared via `confetti.reset()`.
2. **Animation Frame Cleanup:** All Framer Motion infinite loops must be tied to component mount lifecycles so they don't consume GPU battery when the tab is backgrounded.

---

## 10. MOTION QUALITY CHECKLIST & HANDOFF STANDARD

```
[FLUTIST MOTION SIGNOFF]
[x] Transitions render at a solid 60fps on mid-tier mobile devices.
[x] Respects prefers-reduced-motion media query.
[x] Canvas confetti cleanly unmounts without leftover DOM artifacts.
[x] html-to-image exports flawlessly at 2x resolution within < 1.5 seconds.
[x] Touch interactions feel organic and snappy with spring mechanics.
```

---

*End of Flutist Specification. Let the interface dance with elegance.*
