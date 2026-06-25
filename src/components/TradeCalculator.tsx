import { motion, AnimatePresence } from 'framer-motion';
import { Scale, X, ArrowLeftRight } from 'lucide-react';
import type { BSSItem } from '../data/items';

interface TradeCalculatorProps {
  sideA: BSSItem[];
  sideB: BSSItem[];
  onRemoveFromSideA: (index: number) => void;
  onRemoveFromSideB: (index: number) => void;
  onClearTrade: () => void;
}

export default function TradeCalculator({
  sideA,
  sideB,
  onRemoveFromSideA,
  onRemoveFromSideB,
  onClearTrade,
}: TradeCalculatorProps) {
  
  const totalA = sideA.reduce((sum, item) => sum + item.value, 0);
  const totalB = sideB.reduce((sum, item) => sum + item.value, 0);

  // Calculate percentage difference relative to Side A
  const getVerdict = () => {
    if (sideA.length === 0 && sideB.length === 0) {
      return {
        text: 'Добавьте стикеры для оценки обмена',
        style: 'bg-neutral-800/40 text-neutral-400 border-neutral-800/60',
        diffText: '',
      };
    }

    if (totalA === 0 && totalB > 0) {
      return {
        text: 'Огромный плюс',
        style: 'bg-purple-500/15 text-purple-400 border-purple-500/30 shadow-lg shadow-purple-500/5',
        diffText: 'Получаете бесплатную ценность',
      };
    }

    if (totalA > 0 && totalB === 0) {
      return {
        text: 'Слив',
        style: 'bg-red-500/15 text-red-400 border-red-500/30',
        diffText: 'Вы отдаете предметы бесплатно',
      };
    }

    const diffPercent = ((totalB - totalA) / totalA) * 100;
    const formattedDiff = `${diffPercent > 0 ? '+' : ''}${diffPercent.toFixed(1)}%`;

    if (diffPercent < -15) {
      return {
        text: 'Слив',
        style: 'bg-red-500/20 text-red-400 border-red-500/40 border-2 shadow-lg shadow-red-500/5',
        diffText: `Вы теряете ${formattedDiff} от общей ценности`,
      };
    } else if (diffPercent >= -15 && diffPercent < -5) {
      return {
        text: 'Убыточный трейд',
        style: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
        diffText: `Вы теряете ${formattedDiff}`,
      };
    } else if (diffPercent >= -5 && diffPercent <= 5) {
      return {
        text: 'Честный трейд',
        style: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        diffText: `Равный обмен (разница ${formattedDiff})`,
      };
    } else if (diffPercent > 5 && diffPercent <= 15) {
      return {
        text: 'Выгодный трейд',
        style: 'bg-blue-500/15 text-blue-400 border-blue-500/30 shadow-lg shadow-blue-500/5',
        diffText: `Прибыль ${formattedDiff}`,
      };
    } else {
      return {
        text: 'Огромный плюс',
        style: 'bg-purple-500/20 text-purple-300 border-purple-500/40 border-2 shadow-lg shadow-purple-500/5',
        diffText: `Сверхприбыль ${formattedDiff}!`,
      };
    }
  };

  const verdict = getVerdict();

  return (
    <section className="w-full rounded-2xl glass-card border border-white/5 p-6 space-y-6">
      {/* Title Header */}
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-amber-400" />
          <h2 className="text-lg font-bold text-neutral-100 uppercase tracking-wider font-sans">
            Калькулятор обменов BSS
          </h2>
        </div>
        {(sideA.length > 0 || sideB.length > 0) && (
          <button
            onClick={onClearTrade}
            className="text-xs font-semibold text-red-400 hover:text-red-300 px-3 py-1.5 rounded-lg bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/20 transition-all cursor-pointer"
          >
            Очистить трейд
          </button>
        )}
      </div>

      {/* Grid: Side A & Side B */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Decorative Divider in center on desktop */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-neutral-900 border border-white/5 items-center justify-center text-neutral-500 z-10">
          <ArrowLeftRight className="h-4 w-4" />
        </div>

        {/* Side A: You Give */}
        <div className="rounded-xl bg-neutral-900/40 border border-white/5 p-4 flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-sm font-bold text-violet-400 border-b border-violet-500/10 pb-2 mb-3 flex justify-between items-center">
              <span>Сторона А (Вы отдаете)</span>
              <span className="text-[10px] uppercase bg-violet-500/10 text-violet-400 px-2 py-0.5 rounded-full border border-violet-500/20">
                Отдача
              </span>
            </h3>
            
            <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
              <AnimatePresence mode="popLayout">
                {sideA.length > 0 ? (
                  sideA.map((item, idx) => (
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
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-bold text-amber-400 font-mono">
                          {item.value}★
                        </span>
                        <button
                          onClick={() => onRemoveFromSideA(idx)}
                          className="p-1 rounded text-neutral-500 hover:text-red-400 hover:bg-red-500/10 cursor-pointer transition-colors"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-xs text-neutral-500 text-center py-10 select-none">
                    Выберите стикеры из списка ниже, чтобы добавить их сюда
                  </p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs font-bold font-mono">
            <span className="text-neutral-400">Итоговая ценность:</span>
            <span className="text-base text-violet-400">{totalA}★</span>
          </div>
        </div>

        {/* Side B: They Give */}
        <div className="rounded-xl bg-neutral-900/40 border border-white/5 p-4 flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-sm font-bold text-emerald-400 border-b border-emerald-500/10 pb-2 mb-3 flex justify-between items-center">
              <span>Сторона Б (Вам отдают)</span>
              <span className="text-[10px] uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Получение
              </span>
            </h3>
            
            <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
              <AnimatePresence mode="popLayout">
                {sideB.length > 0 ? (
                  sideB.map((item, idx) => (
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
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-bold text-amber-400 font-mono">
                          {item.value}★
                        </span>
                        <button
                          onClick={() => onRemoveFromSideB(idx)}
                          className="p-1 rounded text-neutral-500 hover:text-red-400 hover:bg-red-500/10 cursor-pointer transition-colors"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-xs text-neutral-500 text-center py-10 select-none">
                    Выберите стикеры из списка ниже, чтобы добавить их сюда
                  </p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs font-bold font-mono">
            <span className="text-neutral-400">Итоговая ценность:</span>
            <span className="text-base text-emerald-400">{totalB}★</span>
          </div>
        </div>
      </div>

      {/* Verdict Panel */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 ${verdict.style}`}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-neutral-950 flex items-center justify-center border border-white/5 shadow-inner">
            <ArrowLeftRight className="h-5 w-5 text-amber-400" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Вердикт сделки</div>
            <h4 className="text-lg font-black tracking-tight uppercase leading-tight font-sans">
              {verdict.text}
            </h4>
          </div>
        </div>
        {verdict.diffText && (
          <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-neutral-950/50 border border-white/5 text-neutral-300 font-mono text-center sm:text-right">
            {verdict.diffText}
          </span>
        )}
      </div>
    </section>
  );
}
