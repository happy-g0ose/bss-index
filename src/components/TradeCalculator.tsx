import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, X, ArrowLeftRight, Share2, Plus } from 'lucide-react';
import type { BSSItem } from '../data/items';
import html2canvas from 'html2canvas';
import type { Language } from '../locales';
import { t } from '../locales';
import ItemPickerModal from './ItemPickerModal';

interface TradeCalculatorProps {
  sideA: BSSItem[];
  sideB: BSSItem[];
  onAddToSideA: (item: BSSItem) => void;
  onAddToSideB: (item: BSSItem) => void;
  onRemoveFromSideA: (index: number) => void;
  onRemoveFromSideB: (index: number) => void;
  onClearTrade: () => void;
  lang: Language;
}

export default function TradeCalculator({
  sideA,
  sideB,
  onAddToSideA,
  onAddToSideB,
  onRemoveFromSideA,
  onRemoveFromSideB,
  onClearTrade,
  lang,
}: TradeCalculatorProps) {
  const calculatorRef = useRef<HTMLElement>(null);
  const [pickerTarget, setPickerTarget] = useState<'A' | 'B' | null>(null);

  const totalA = sideA.reduce((sum, item) => sum + item.value, 0);
  const totalB = sideB.reduce((sum, item) => sum + item.value, 0);

  // Calculate percentage difference relative to Side A
  const getVerdict = () => {
    if (sideA.length === 0 && sideB.length === 0) {
      return {
        text: t('calc.verdict.empty', lang),
        style: 'bg-neutral-800/40 text-neutral-400 border-neutral-800/60',
        diffText: '',
      };
    }

    if (totalA === 0 && totalB > 0) {
      return {
        text: t('calc.verdict.hugeWin', lang),
        style: 'bg-purple-500/15 text-purple-400 border-purple-500/30 shadow-lg shadow-purple-500/5',
        diffText: t('calc.verdict.freeGain', lang),
      };
    }

    if (totalA > 0 && totalB === 0) {
      return {
        text: t('calc.verdict.hugeLoss', lang),
        style: 'bg-red-500/15 text-red-400 border-red-500/30',
        diffText: t('calc.verdict.freeLoss', lang),
      };
    }

    const diffPercent = ((totalB - totalA) / totalA) * 100;
    const formattedDiff = `${diffPercent > 0 ? '+' : ''}${diffPercent.toFixed(1)}%`;

    if (diffPercent < -15) {
      return {
        text: t('calc.verdict.hugeLoss', lang),
        style: 'bg-red-500/20 text-red-400 border-red-500/40 border-2 shadow-lg shadow-red-500/5',
        diffText: `${t('calc.verdict.loseMsg', lang)} ${formattedDiff}`,
      };
    } else if (diffPercent >= -15 && diffPercent < -5) {
      return {
        text: t('calc.verdict.loss', lang),
        style: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
        diffText: `${t('calc.verdict.loseMsg', lang)} ${formattedDiff}`,
      };
    } else if (diffPercent >= -5 && diffPercent <= 5) {
      return {
        text: t('calc.verdict.fair', lang),
        style: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        diffText: `${t('calc.verdict.fairMsg', lang)} ${formattedDiff})`,
      };
    } else if (diffPercent > 5 && diffPercent <= 15) {
      return {
        text: t('calc.verdict.win', lang),
        style: 'bg-blue-500/15 text-blue-400 border-blue-500/30 shadow-lg shadow-blue-500/5',
        diffText: `${t('calc.verdict.winMsg', lang)} ${formattedDiff}`,
      };
    } else {
      return {
        text: t('calc.verdict.hugeWin', lang),
        style: 'bg-purple-500/20 text-purple-300 border-purple-500/40 border-2 shadow-lg shadow-purple-500/5',
        diffText: `${t('calc.verdict.hugeWinMsg', lang)} ${formattedDiff}!`,
      };
    }
  };

  const verdict = getVerdict();

  const handleShare = async () => {
    if (!calculatorRef.current) return;
    try {
      const canvas = await html2canvas(calculatorRef.current, {
        backgroundColor: '#0b0f19',
        scale: 2,
        useCORS: true,
      });
      const image = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = image;
      a.download = `bss-trade-${Date.now()}.png`;
      a.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    }
  };

  const handleSelectItem = (item: BSSItem) => {
    if (pickerTarget === 'A') onAddToSideA(item);
    if (pickerTarget === 'B') onAddToSideB(item);
    setPickerTarget(null);
  };

  return (
    <>
      <section ref={calculatorRef} className="w-full rounded-2xl glass-card border border-white/5 p-6 space-y-6">
        {/* Title Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-amber-400" />
            <h2 className="text-lg font-bold text-neutral-100 uppercase tracking-wider font-sans">
              {t('calc.title', lang)}
            </h2>
          </div>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 px-3 py-1.5 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/10 hover:border-blue-500/20 transition-all cursor-pointer"
            >
              <Share2 className="h-3.5 w-3.5" />
              {t('calc.share', lang)}
            </button>
            {(sideA.length > 0 || sideB.length > 0) && (
              <button
                onClick={onClearTrade}
                className="text-xs font-semibold text-red-400 hover:text-red-300 px-3 py-1.5 rounded-lg bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/20 transition-all cursor-pointer"
              >
                {t('calc.clear', lang)}
              </button>
            )}
          </div>
        </div>

        {/* Grid: Side A & Side B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Decorative Divider in center on desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-neutral-900 border border-white/5 items-center justify-center text-neutral-500 z-10">
            <ArrowLeftRight className="h-4 w-4" />
          </div>

          {/* Side A: You Give */}
          <div className="rounded-xl bg-neutral-900/40 border border-white/5 p-4 flex flex-col min-h-[280px]">
            <h3 className="text-sm font-bold text-violet-400 border-b border-violet-500/10 pb-2 mb-3 flex justify-between items-center">
              <span>{t('calc.sideA', lang)}</span>
              <span className="text-[10px] uppercase bg-violet-500/10 text-violet-400 px-2 py-0.5 rounded-full border border-violet-500/20">
                {t('calc.sideA.badge', lang)}
              </span>
            </h3>
            
            <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1 flex-1">
              <AnimatePresence mode="popLayout">
                {sideA.map((item, idx) => (
                  <motion.div
                    layout
                    key={`sideA-${item.id}-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#0e1220]/60 border border-white/5 hover:border-violet-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border leading-none ${item.badgeColor}`}>
                        {item.rarity[0]}
                      </span>
                      <span className="text-xs font-semibold text-neutral-200 truncate max-w-[120px] sm:max-w-[160px]">
                        {lang === 'ru' ? item.name : item.englishName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-bold text-amber-400 font-mono">
                        {Number(item.value.toFixed(2))}★
                      </span>
                      <button
                        onClick={() => onRemoveFromSideA(idx)}
                        className="p-1 rounded text-neutral-500 hover:text-red-400 hover:bg-red-500/10 cursor-pointer transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Add Button */}
              <button
                onClick={() => setPickerTarget('A')}
                className="w-full mt-2 py-3 border-2 border-dashed border-violet-500/20 hover:border-violet-500/50 hover:bg-violet-500/5 rounded-xl flex items-center justify-center gap-2 text-violet-400/50 hover:text-violet-400 transition-all cursor-pointer group"
              >
                <div className="p-1 rounded-full bg-violet-500/10 group-hover:bg-violet-500/20">
                  <Plus className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'ru' ? 'Добавить предмет' : 'Add Item'}
                </span>
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs font-bold font-mono">
              <span className="text-neutral-400">{t('calc.total', lang)}</span>
              <span className="text-base text-violet-400">{Number(totalA.toFixed(2))}★</span>
            </div>
          </div>

          {/* Side B: They Give */}
          <div className="rounded-xl bg-neutral-900/40 border border-white/5 p-4 flex flex-col min-h-[280px]">
            <h3 className="text-sm font-bold text-emerald-400 border-b border-emerald-500/10 pb-2 mb-3 flex justify-between items-center">
              <span>{t('calc.sideB', lang)}</span>
              <span className="text-[10px] uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                {t('calc.sideB.badge', lang)}
              </span>
            </h3>
            
            <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1 flex-1">
              <AnimatePresence mode="popLayout">
                {sideB.map((item, idx) => (
                  <motion.div
                    layout
                    key={`sideB-${item.id}-${idx}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#0e1220]/60 border border-white/5 hover:border-emerald-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border leading-none ${item.badgeColor}`}>
                        {item.rarity[0]}
                      </span>
                      <span className="text-xs font-semibold text-neutral-200 truncate max-w-[120px] sm:max-w-[160px]">
                        {lang === 'ru' ? item.name : item.englishName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-bold text-amber-400 font-mono">
                        {Number(item.value.toFixed(2))}★
                      </span>
                      <button
                        onClick={() => onRemoveFromSideB(idx)}
                        className="p-1 rounded text-neutral-500 hover:text-red-400 hover:bg-red-500/10 cursor-pointer transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Add Button */}
              <button
                onClick={() => setPickerTarget('B')}
                className="w-full mt-2 py-3 border-2 border-dashed border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 rounded-xl flex items-center justify-center gap-2 text-emerald-400/50 hover:text-emerald-400 transition-all cursor-pointer group"
              >
                <div className="p-1 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20">
                  <Plus className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'ru' ? 'Добавить предмет' : 'Add Item'}
                </span>
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs font-bold font-mono">
              <span className="text-neutral-400">{t('calc.total', lang)}</span>
              <span className="text-base text-emerald-400">{Number(totalB.toFixed(2))}★</span>
            </div>
          </div>
        </div>

        {/* Verdict Panel */}
        <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 ${verdict.style}`}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-neutral-950 flex items-center justify-center border border-white/5 shadow-inner shrink-0">
              <ArrowLeftRight className="h-5 w-5 text-amber-400" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">{t('calc.verdict.title', lang)}</div>
              <h4 className="text-lg font-black tracking-tight uppercase leading-tight font-sans">
                {verdict.text}
              </h4>
            </div>
          </div>
          {verdict.diffText && (
            <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-neutral-950/50 border border-white/5 text-neutral-300 font-mono text-center sm:text-right shrink-0">
              {verdict.diffText}
            </span>
          )}
        </div>
      </section>

      <ItemPickerModal
        isOpen={pickerTarget !== null}
        onClose={() => setPickerTarget(null)}
        onSelect={handleSelectItem}
        lang={lang}
      />
    </>
  );
}
