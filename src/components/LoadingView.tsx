'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingView() {
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    'Menganalisis matriks respons keputusan...',
    'Menyelaraskan bobot kompetensi 5 program studi baru...',
    'Menghitung vektor bakat dan kepribadian...',
    'Menyiapkan kartu diagnosis DNA prodi ITS kamu...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 550);
    return () => clearInterval(interval);
  }, [statuses.length]);

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {/* SVG Radar Scanner Graphic */}
      <div className="relative mb-8 h-48 w-48">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          {/* Radar Background Rings */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="1" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(0, 229, 255, 0.1)" strokeWidth="1" />

          {/* Axis Crosshairs */}
          <line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            stroke="rgba(0, 229, 255, 0.2)"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="rgba(0, 229, 255, 0.2)"
            strokeWidth="1"
            strokeDasharray="2,2"
          />

          {/* 5-Axis Polygon Reference */}
          <polygon
            points="100,30 166,78 141,156 59,156 34,78"
            fill="rgba(0, 44, 108, 0.3)"
            stroke="#00E5FF"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />

          {/* Sweeping Radar Beam */}
          <motion.line
            x1="100"
            y1="100"
            x2="100"
            y2="20"
            stroke="#00E5FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
            style={{ originX: '100px', originY: '100px' }}
          />

          {/* Center Blinking Node */}
          <circle cx="100" cy="100" r="5" fill="#FFB800" />
        </svg>

        {/* Ambient Pulsing Radar Aura */}
        <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#00E5FF]/10" />
      </div>

      <h3 className="mb-2 font-mono text-sm uppercase tracking-widest text-[#00E5FF]">
        PROSES IDENTIFIKASI DNA
      </h3>
      <p className="h-6 font-medium text-white/90 transition-all duration-300">
        {statuses[statusIndex]}
      </p>
    </div>
  );
}
