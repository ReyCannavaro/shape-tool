'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, Compass, Award } from 'lucide-react';

interface LandingViewProps {
  onStart: () => void;
}

export default function LandingView({ onStart }: LandingViewProps) {
  const targetPrograms = [
    { title: 'Bisnis Digital', tag: 'CREABIZ' },
    { title: 'Sains Komunikasi', tag: 'FSAD' },
    { title: 'Analitika Logistik', tag: 'VOKASI' },
    { title: 'Bioteknologi', tag: 'FSAD' },
    { title: 'Rekayasa Keselamatan', tag: 'FTIRS' },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      {/* Top Header Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/30 bg-[#002C6C]/60 px-4 py-1.5 backdrop-blur-md"
      >
        <Sparkles className="h-4 w-4 text-[#FFB800] animate-pulse" />
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#00E5FF]">
          ShapeTool Magazine Vol. 12
        </span>
      </motion.div>

      {/* Main Title & Tagline */}
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
        Cocoklogi{' '}
        <span className="bg-gradient-to-r from-[#FFB800] via-[#00E5FF] to-white bg-clip-text text-transparent">
          DNA Prodi Baru
        </span>{' '}
        ITS
      </h1>
      <p className="mb-8 max-w-md text-sm text-white/70 sm:text-base">
        Jawab 5 pertanyaan situasional singkat untuk mengungkap program studi baru ITS yang paling
        selaras dengan naluri analitis, kepemimpinan, dan visi masa depanmu!
      </p>

      {/* 5 Target Programs Badge Grid */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 max-w-lg">
        {targetPrograms.map((prog, idx) => (
          <motion.div
            key={prog.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.08 }}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#001F4D]/80 px-3 py-1.5 text-xs text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
            <span className="font-medium">{prog.title}</span>
            <span className="rounded bg-white/10 px-1 py-0.5 font-mono text-[10px] text-[#FFB800]">
              {prog.tag}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Feature Highlights Banner */}
      <div className="mb-8 grid grid-cols-3 gap-3 w-full max-w-md rounded-2xl border border-white/10 bg-[#002C6C]/20 p-4 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Compass className="h-5 w-5 text-[#00E5FF]" />
          <span className="text-xs font-semibold text-white">5 Soal Praktis</span>
          <span className="text-[10px] text-white/50">Cepat & Akurat</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center border-x border-white/10">
          <BookOpen className="h-5 w-5 text-[#FFB800]" />
          <span className="text-xs font-semibold text-white">Panduan Resmi</span>
          <span className="text-[10px] text-white/50">Hal 12-20</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <Award className="h-5 w-5 text-[#00E5FF]" />
          <span className="text-xs font-semibold text-white">Kartu DNA</span>
          <span className="text-[10px] text-white/50">Siap Share IG</span>
        </div>
      </div>

      {/* Interactive CTA Launch Button */}
      <button
        onClick={onStart}
        className="group relative flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#FFB800] to-[#FFA000] py-4 px-6 text-base font-bold text-[#001433] shadow-[0_0_30px_rgba(255,184,0,0.3)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        <span>Mulai Uji DNA Sekarang</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
}
