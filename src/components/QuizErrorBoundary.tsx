'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class QuizErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Quiz UI Boundary Caught Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-red-500/30 bg-[#001433] p-8 text-center text-white">
          <AlertTriangle className="mb-4 h-12 w-12 text-red-400" />
          <h2 className="mb-2 text-xl font-bold">Terjadi Gangguan Tampilan</h2>
          <p className="mb-6 max-w-sm text-sm text-white/70">
            Aplikasi mengalami kendala teknis sementara. Silakan muat ulang halaman kuis.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-xl bg-[#00E5FF] px-5 py-2.5 font-bold text-[#001433]"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Muat Ulang Halaman</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
