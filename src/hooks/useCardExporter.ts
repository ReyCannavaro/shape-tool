import { useState, useCallback, RefObject } from 'react';
import { toPng } from 'html-to-image';

export interface UseCardExporterReturn {
  isExporting: boolean;
  exportSuccess: boolean;
  exportError: string | null;
  downloadStoryCard: () => Promise<void>;
}

export function useCardExporter(
  cardRef: RefObject<HTMLDivElement | null>,
  programName: string
): UseCardExporterReturn {
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);
  const [exportError, setExportError] = useState<string | null>(null);

  const downloadStoryCard = useCallback(async () => {
    if (!cardRef.current) {
      setExportError('Elemen story card tidak ditemukan pada DOM.');
      return;
    }

    try {
      setIsExporting(true);
      setExportError(null);

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        quality: 0.95,
        backgroundColor: '#001433',
      });

      const cleanName = programName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const filename = `DNA-ITS-2026-${cleanName}.png`;

      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Gagal mengekspor gambar story.';
      setExportError(message);
    } finally {
      setIsExporting(false);
    }
  }, [cardRef, programName]);

  return { isExporting, exportSuccess, exportError, downloadStoryCard };
}
