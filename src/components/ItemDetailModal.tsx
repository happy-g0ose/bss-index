import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Clock, SlidersHorizontal } from 'lucide-react';
import type { BSSItem } from '../data/items';
import type { Language } from '../locales';
import { t, translateDemand, translateStability, translateCategory, translateRarity } from '../locales';

interface ItemDetailModalProps {
  item: BSSItem | null;
  onClose: () => void;
  onAddToSideA: (item: BSSItem) => void;
  onAddToSideB: (item: BSSItem) => void;
  lang: Language;
}

export default function ItemDetailModal({ item, onClose, onAddToSideA, onAddToSideB, lang }: ItemDetailModalProps) {
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);

  // Lock background scroll when open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  // Custom SVG Sparkline Graph Math
  const drawSparkline = () => {
    const prices = item.historicalPrices;
    const width = 500;
    const height = 150;
    const padding = 20;
    const minVal = Math.min(...prices);
    const maxVal = Math.max(...prices);
    const range = maxVal - minVal || 10;

    // Build line coordinates
    const points = prices.map((price, idx) => {
      const x = padding + (idx * (width - padding * 2)) / (prices.length - 1);
      const y = height - padding - ((price - minVal) / range) * (height - padding * 2);
      return { x, y };
    });

    const pathD = `M ${points.map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')}`;
    const areaD = `${pathD} L ${points[points.length - 1].x.toFixed(1)} ${height} L ${points[0].x.toFixed(1)} ${height} Z`;

    return { pathD, areaD, points, width, height };
  };

  const sparkline = drawSparkline();

  // Mouse event handlers for interactive sparkline
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const svgX = (clientX / rect.width) * sparkline.width;
    
    let closestIdx = 0;
    let minDistance = Infinity;
    sparkline.points.forEach((p, idx) => {
      const dist = Math.abs(p.x - svgX);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });
    
    setHoveredPointIndex(closestIdx);
  };

  const handleMouseLeave = () => {
    setHoveredPointIndex(null);
  };

  const getWeeksAgoText = (index: number, lang: Language) => {
    if (item.historicalDates && item.historicalDates[index]) {
      const d = item.historicalDates[index];
      const parts = d.split('-');
      return parts.length === 3 ? `${parts[2]}.${parts[1]}.${parts[0]}` : d;
    }
    if (lang === 'ru') {
      switch (index) {
        case 0: return '6 недель назад';
        case 1: return '5 недель назад';
        case 2: return '4 недели назад';
        case 3: return '3 недели назад';
        case 4: return '2 недели назад';
        case 5: return 'Текущая неделя';
        default: return '';
      }
    } else {
      switch (index) {
        case 0: return '6 weeks ago';
        case 1: return '5 weeks ago';
        case 2: return '4 weeks ago';
        case 3: return '3 weeks ago';
        case 4: return '2 weeks ago';
        case 5: return 'Current week';
        default: return '';
      }
    }
  };



  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          style={{ '--hover-glow': item.glowColor } as any}
          className="relative w-full max-w-3xl rounded-2xl bg-[#0b0f19] border border-white/5 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col noise-overlay"
        >
          {/* Neon Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-10" style={{ background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)` }} />

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5 bg-neutral-950/40 backdrop-blur-md z-20">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${item.badgeColor}`}>
                {translateRarity(item.rarity, lang)}
              </span>
              <span className="text-xs text-neutral-400 font-semibold">• &nbsp; {translateCategory(item.category, lang)}</span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-neutral-200 cursor-pointer transition-colors"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 z-10">
            {/* Title & Base info with Image */}
            <div className="flex items-center gap-5">
              <div className="h-20 w-20 rounded-2xl bg-neutral-950/60 border border-white/5 flex items-center justify-center shadow-inner overflow-hidden select-none shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-neutral-50 tracking-tight leading-none">
                  {lang === 'ru' ? item.name : item.englishName}
                </h2>
                <span className="text-xs md:text-sm text-neutral-500 font-mono block mt-1.5">
                  {lang === 'ru' ? item.englishName : item.name}
                </span>
              </div>
            </div>

            {/* Core Stats Badge Grid */}
            {item.category !== 'Биквипы' && (
              <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-4">
                <div className="text-center md:text-left overflow-hidden">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">{t('item.baseValue', lang)}</div>
                  <div className="flex flex-col items-center md:items-start leading-none mt-1">
                    <span className="text-xl md:text-2xl font-black text-amber-400 font-mono flex items-center gap-0.5">
                      {Number(item.value.toFixed(2))} <span className="text-xs font-normal text-amber-500">★</span>
                    </span>
                    {item.valueLow !== item.valueHigh && (
                      <span className="text-xs text-neutral-500 font-bold font-mono">
                        {Number(item.valueLow.toFixed(2))} - {Number(item.valueHigh.toFixed(2))}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">{t('item.demandLevel', lang)}</div>
                  <span className={`text-[10px] md:text-xs font-bold px-3 py-1 rounded border inline-block mt-1 ${
                    item.demand === 'Хайп' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                    item.demand === 'Высокий' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                    item.demand === 'Средний' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                    'bg-neutral-800 text-neutral-400 border-neutral-700'
                  }`}>
                    {translateDemand(item.demand, lang)}
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">{t('item.stability', lang)}</div>
                  <span className={`text-[10px] md:text-xs font-bold px-3 py-1 rounded border inline-block mt-1 ${
                    item.stability === 'Растет' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    item.stability === 'Падает' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                    'bg-neutral-800 text-neutral-400 border-neutral-700'
                  }`}>
                    {translateStability(item.stability, lang)}
                  </span>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-400 flex items-center gap-1.5 select-none">
                <Info className="h-4 w-4 text-amber-400" />
                {t('item.desc', lang)}
              </h4>
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-sans font-medium">
                {lang === 'en' 
                  ? item.description
                      .replace('Индикаторы:', 'Indicators:')
                      .replace('Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.', 'Bee equipment. Click to view all rolls and their values in detail.')
                  : item.description}
              </p>
            </div>

            {/* Price Chart Graphic or Beequip Stats and Rolls */}
            {item.beequipData ? (
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-400 flex items-center gap-1.5 select-none">
                  <SlidersHorizontal className="h-4 w-4 text-amber-400" />
                  {lang === 'ru' ? 'Характеристики и Роллы' : 'Stats & Rolls'}
                </h4>
                
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                  {item.beequipData.map((group, gIdx) => (
                    <div key={gIdx} className="rounded-xl border border-white/5 bg-neutral-950/60 p-4 space-y-2.5">
                      <h5 className="text-[10px] uppercase font-mono font-black text-neutral-400 tracking-wider select-none border-b border-white/5 pb-1">
                        {group.groupName}
                      </h5>
                      <div className="grid grid-cols-1 gap-2">
                        {group.rolls.map((roll, rIdx) => {
                          // Determine demand color
                          let demandStyle = 'bg-neutral-800 text-neutral-400 border-neutral-700/20';
                          if (roll.demand === 'Хайп') {
                            demandStyle = 'bg-rose-500/10 text-rose-400 border-rose-500/20';
                          } else if (roll.demand === 'Высокий') {
                            demandStyle = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
                          } else if (roll.demand === 'Средний') {
                            demandStyle = 'bg-blue-500/10 text-blue-400 border-blue-500/20';
                          } else {
                            demandStyle = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
                          }
                          
                          const formatVal = (v: number) => {
                            if (v >= 1000) return `${(v / 1000).toFixed(1)}k`;
                            return v.toString();
                          };
                          
                          let valueText = 'TBD';
                          if (roll.valueLow !== 0 || roll.valueHigh !== 0) {
                            valueText = roll.valueLow === roll.valueHigh 
                              ? `${formatVal(roll.valueLow)} ★` 
                              : `${formatVal(roll.valueLow)} - ${formatVal(roll.valueHigh)} ★`;
                          }

                          return (
                            <div key={rIdx} className="flex items-center justify-between gap-3 text-xs p-2 rounded-lg bg-neutral-900/40 hover:bg-neutral-900/80 transition-colors border border-white/5">
                              <span className="font-medium text-neutral-200 flex-1 min-w-0 truncate pr-2" title={roll.rollName}>
                                {roll.rollName}
                              </span>
                              <div className="flex items-center gap-2 shrink-0">
                                {/* Value */}
                                <span className="font-mono font-bold text-amber-400 bg-amber-400/5 px-2 py-0.5 rounded border border-amber-400/10">
                                  {valueText}
                                </span>
                                {/* Demand */}
                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${demandStyle}`}>
                                  {roll.demand}
                                </span>
                                {/* Quick add to Calculator */}
                                <div className="flex items-center gap-1 ml-1">
                                  <button
                                    onClick={() => {
                                      // Create a custom roll-specific item
                                      const rollItem: BSSItem = {
                                        ...item,
                                        id: `${item.id}-roll-${roll.rollName.replace(/\s+/g, '-')}`,
                                        name: `${item.name} (${roll.rollName})`,
                                        englishName: `${item.englishName} (${roll.rollName})`,
                                        value: roll.value,
                                        valueLow: roll.valueLow,
                                        valueHigh: roll.valueHigh,
                                        demand: roll.demand,
                                      };
                                      onAddToSideA(rollItem);
                                    }}
                                    className="p-1.5 rounded bg-violet-600 hover:bg-violet-500 text-white font-mono text-[9px] font-black cursor-pointer shadow-sm hover:scale-105 transition-transform"
                                    title={lang === 'ru' ? 'Добавить в Левую сторону' : 'Add to Side A'}
                                  >
                                    +A
                                  </button>
                                  <button
                                    onClick={() => {
                                      const rollItem: BSSItem = {
                                        ...item,
                                        id: `${item.id}-roll-${roll.rollName.replace(/\s+/g, '-')}`,
                                        name: `${item.name} (${roll.rollName})`,
                                        englishName: `${item.englishName} (${roll.rollName})`,
                                        value: roll.value,
                                        valueLow: roll.valueLow,
                                        valueHigh: roll.valueHigh,
                                        demand: roll.demand,
                                      };
                                      onAddToSideB(rollItem);
                                    }}
                                    className="p-1.5 rounded bg-amber-600 hover:bg-amber-500 text-white font-mono text-[9px] font-black cursor-pointer shadow-sm hover:scale-105 transition-transform"
                                    title={lang === 'ru' ? 'Добавить в Правою сторону' : 'Add to Side B'}
                                  >
                                    +B
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-400 flex items-center gap-1.5 select-none">
                  <Clock className="h-4 w-4 text-blue-400" />
                  {t('item.chart', lang)}
                </h4>
                
                <div className="relative rounded-xl bg-neutral-950/60 border border-white/5 p-4 overflow-hidden">
                  {/* SVG Area Sparkline */}
                  <svg 
                    className="w-full h-32 md:h-40 overflow-visible cursor-crosshair" 
                    viewBox={`0 0 ${sparkline.width} ${sparkline.height}`} 
                    preserveAspectRatio="none"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <defs>
                      <linearGradient id="gradient-glow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={item.rarity === 'Мифический' ? '#f43f5e' : item.rarity === 'Легендарный' ? '#f59e0b' : '#a855f7'} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={item.rarity === 'Мифический' ? '#f43f5e' : item.rarity === 'Легендарный' ? '#f59e0b' : '#a855f7'} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Vertical Guide Line */}
                    {hoveredPointIndex !== null && (
                      <line
                        x1={sparkline.points[hoveredPointIndex].x}
                        y1={0}
                        x2={sparkline.points[hoveredPointIndex].x}
                        y2={sparkline.height}
                        stroke="rgba(255, 255, 255, 0.12)"
                        strokeDasharray="4 4"
                        strokeWidth="1.5"
                      />
                    )}

                    {/* Shaded Area */}
                    <motion.path 
                      d={sparkline.areaD} 
                      fill="url(#gradient-glow)" 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />

                    {/* Stroke Line */}
                    <motion.path 
                      d={sparkline.pathD} 
                      fill="none" 
                      stroke={item.rarity === 'Мифический' ? '#f43f5e' : item.rarity === 'Легендарный' ? '#f59e0b' : '#a855f7'} 
                      strokeWidth="2.5" 
                    />

                    {/* Interactive dots */}
                    {sparkline.points.map((p, idx) => (
                      <g key={idx}>
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={hoveredPointIndex === idx ? 6 : 4}
                          className="transition-all duration-150 cursor-pointer"
                          fill={item.rarity === 'Мифический' ? '#f43f5e' : item.rarity === 'Легендарный' ? '#f59e0b' : '#a855f7'}
                          stroke="rgba(11, 15, 25, 0.9)"
                          strokeWidth="2"
                        />
                      </g>
                    ))}
                  </svg>

                  {/* Tooltip Overlay */}
                  {(() => {
                    if (hoveredPointIndex === null) return null;
                    const activePoint = sparkline.points[hoveredPointIndex];
                    const rawVal = item.historicalPrices[hoveredPointIndex];
                    
                    const priceValue = rawVal >= 1000 ? `${(rawVal / 1000).toFixed(1)}k` : rawVal.toFixed(2);
                    const tooltipLeft = `${(activePoint.x / sparkline.width) * 100}%`;
                    const tooltipTop = `${(activePoint.y / sparkline.height) * 100}%`;
                    
                    const lastIndex = item.historicalPrices.length - 1;
                    let transformStr = 'translateX(-50%)';
                    if (hoveredPointIndex === 0) {
                      transformStr = 'translateX(10px)';
                    } else if (hoveredPointIndex === lastIndex) {
                      transformStr = 'translateX(-105%)';
                    }
                    
                    return (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-30 pointer-events-none p-2 bg-neutral-900/90 backdrop-blur border border-white/10 rounded-lg shadow-xl text-[10px] font-mono leading-tight flex flex-col gap-0.5 whitespace-nowrap"
                        style={{
                          left: tooltipLeft,
                          top: `calc(${tooltipTop} - 55px)`,
                          transform: transformStr,
                        }}
                      >
                        <span className="text-neutral-400 font-bold">{getWeeksAgoText(hoveredPointIndex, lang)}</span>
                        <span className="text-amber-400 font-black text-[11px] flex items-center gap-0.5 justify-center">
                          {priceValue} <span className="text-[9px] text-amber-500 font-normal">★</span>
                        </span>
                      </motion.div>
                    );
                  })()}

                  {/* X-Axis labels */}
                  <div className="flex justify-between items-center text-[9px] text-neutral-500 font-mono font-bold mt-2 pt-2 border-t border-white/5">
                    {(() => {
                      const dates = item.historicalDates || [];
                      if (dates.length === 0) {
                        return (
                          <>
                            <span>{lang === 'ru' ? '6 нед. назад' : '6 weeks ago'}</span>
                            <span>{lang === 'ru' ? '4 нед. назад' : '4 weeks ago'}</span>
                            <span>{lang === 'ru' ? '2 нед. назад' : '2 weeks ago'}</span>
                            <span>{lang === 'ru' ? 'Текущая неделя' : 'Current week'}</span>
                          </>
                        );
                      }
                      const formatDateStr = (d: string) => {
                        const parts = d.split('-');
                        return parts.length === 3 ? `${parts[2]}.${parts[1]}.${parts[0]}` : d;
                      };
                      const len = dates.length;
                      if (len < 4) {
                        return dates.map((d, k) => (
                          <span key={k}>{formatDateStr(d)}</span>
                        ));
                      }
                      const idxs = [
                        0,
                        Math.floor((len - 1) * 0.33),
                        Math.floor((len - 1) * 0.66),
                        len - 1
                      ];
                      return idxs.map((i, k) => (
                        <span key={k}>{formatDateStr(dates[i])}</span>
                      ));
                    })()}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer controls: Add directly to Trade side A/B */}
          <div className="p-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-950/40 z-10 text-xs">
            <span className="text-neutral-500">BSS Value Guide • {lang === 'ru' ? 'Все цены обновляются еженедельно' : 'All prices are updated weekly'}</span>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => {
                  onAddToSideA(item);
                  onClose();
                }}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all duration-200 cursor-pointer"
              >
                + {lang === 'ru' ? 'Отдать (А)' : 'Give (A)'}
              </button>
              <button
                onClick={() => {
                  onAddToSideB(item);
                  onClose();
                }}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all duration-200 cursor-pointer"
              >
                + {lang === 'ru' ? 'Получить (Б)' : 'Receive (B)'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
