import type { Metadata } from 'next';
import QuizApp from '@/components/QuizApp';

export const metadata: Metadata = {
  title: 'Cocoklogi DNA Prodi Baru ITS 2026 | ShapeTool Magazine Vol. 12',
  description:
    'Temukan program studi baru ITS (Bisnis Digital, Sains Komunikasi, Analitika Logistik, Bioteknologi, Rekayasa Keselamatan Proses) yang paling selaras dengan DNA kepribadian dan potensi masa depanmu.',
  openGraph: {
    title: 'Cocoklogi DNA Prodi Baru ITS 2026',
    description:
      'Temukan prodi baru ITS yang paling kamu banget di Booth ShapeTool Magazine, ITS Open Campus 2026!',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#001433] text-white selection:bg-[#00E5FF] selection:text-[#001433]">
      <QuizApp />
    </main>
  );
}
