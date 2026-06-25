import { useState } from 'react';
import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Plus } from 'lucide-react';
import type { BSSItem } from '../data/items';
import type { Language } from '../locales';
import { t, translateDemand } from '../locales';

interface ItemCardProps {
  item: BSSItem;
  onClick: () => void;
  onAddToSideA: (item: BSSItem) => void;
  onAddToSideB: (item: BSSItem) => void;
  index: number;
  lang: Language;
}

export default function ItemCard({ item, onClick, onAddToSideA, onAddToSideB, index, lang }: ItemCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getDemandColor = (demand: BSSItem['demand']) => {
    switch (demand) {
      case 'Хайп':
        return 'bg-red-500/15 text-red-400 border-red-500/30 animate-pulse';
      case 'Высокий':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'Средний':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'Низкий':
      default:
        return 'bg-neutral-800 text-neutral-400 border-neutral-700/50';
    }
  };

  const getStabilityIcon = (stability: BSSItem['stability']) => {
    switch (stability) {
      case 'Растет':
        return (
          <span className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
            <TrendingUp className="h-3.5 w-3.5" /> {t('item.stability.up', lang)}
          </span>
        );
      case 'Падает':
        return (
          <span className="flex items-center gap-1 text-red-400 text-xs font-semibold">
            <TrendingDown className="h-3.5 w-3.5" /> {t('item.stability.down', lang)}
          </span>
        );
      case 'Стабильно':
      default:
        return (
          <span className="flex items-center gap-1 text-neutral-400 text-xs font-semibold">
            <Minus className="h-3.5 w-3.5" /> {t('item.stability.stable', lang)}
          </span>
        );
    }
  };

  // Card staggered animation entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 110,
        damping: 15,
        delay: index * 0.04,
      },
    },
  };

  // Custom vector background illustration matching categories
  const renderItemIllustration = () => {
    const iconColor = item.textColor;
    if (item.category === 'Звездные знаки') {
      return (
        <svg className={`h-12 w-12 ${iconColor} opacity-80`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" strokeDasharray="2 2" />
        </svg>
      );
    }
    if (item.category === 'Ваучеры') {
      return (
        <svg className={`h-12 w-12 ${iconColor} opacity-80`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    }
    if (item.category === 'Скины на куба') {
      return (
        <svg className={`h-12 w-12 ${iconColor} opacity-80`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      );
    }
    // Bee stickers or fields
    return (
      <svg className={`h-12 w-12 ${iconColor} opacity-85`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.003 9.003 0 008.361-5.638L19.45 13H4.55l-.911 2.362A9.003 9.003 0 0012 21zM20.5 10c0-1.657-1.343-3-3-3H12V3h-1v4H6.5c-1.657 0-3 1.343-3 3v2h17v-2z" />
      </svg>
    );
  };

  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.99 }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={{ '--hover-glow': item.glowColor } as any}
      className={`group relative rounded-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden cursor-pointer glass-card glass-card-hover border ${item.borderColor}`}
    >
      {/* Dynamic mouse glow overlay */}
      <div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, ${item.glowColor}, transparent 80%)`,
        }}
      />

      {/* Rarity & Stats Header */}
      <div className="relative z-10 flex justify-between items-center w-full gap-2">
        <span className={`text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded border ${item.badgeColor}`}>
          {item.rarity}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
          {item.category}
        </span>
      </div>

      {/* Center Layout: Visual SVG + Info */}
      <div className="relative z-10 flex items-center gap-4 my-4 flex-1">
        <div className="h-16 w-16 rounded-xl bg-neutral-900/60 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300 overflow-hidden shrink-0 select-none">
          {imageError ? (
            renderItemIllustration()
          ) : (
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onError={() => setImageError(true)}
              className="h-12 w-12 object-contain"
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-neutral-100 group-hover:text-white transition-colors truncate">
            {lang === 'ru' ? item.name : item.englishName}
          </h3>
          <span className="text-xs text-neutral-400 font-mono block">
            {lang === 'ru' ? item.englishName : item.name}
          </span>
        </div>
      </div>

      {/* Stats and Calculator triggers */}
      <div className="relative z-10 pt-4 border-t border-white/5 space-y-4">
        {/* Core details */}
        <div className="flex justify-between items-center text-xs select-none">
          <div className="text-left">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">{t('item.value', lang)}</div>
            <div className="text-base font-black text-amber-400 font-mono flex items-center gap-0.5 whitespace-nowrap overflow-hidden">
              {item.valueLow !== item.valueHigh ? `${Number(item.valueLow.toFixed(2))} - ${Number(item.valueHigh.toFixed(2))}` : Number(item.value.toFixed(2))} <span className="text-[10px] font-normal text-amber-500">★</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">{t('item.demand', lang)}</div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border block mt-0.5 ${getDemandColor(item.demand)}`}>
              {translateDemand(item.demand, lang)}
            </span>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">{t('item.stability', lang)}</div>
            <div className="mt-0.5 flex justify-end">
              {getStabilityIcon(item.stability)}
            </div>
          </div>
        </div>

        {/* Quick Add buttons */}
        <div className="grid grid-cols-2 gap-2 select-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToSideA(item);
            }}
            className="flex items-center justify-center gap-1 py-1.5 rounded-lg border border-violet-500/25 bg-violet-600/10 hover:bg-violet-600/25 hover:border-violet-500/50 text-[10px] font-bold text-violet-300 transition-all duration-200 cursor-pointer"
          >
            <Plus className="h-3 w-3" />
            {t('item.addA', lang)}
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToSideB(item);
            }}
            className="flex items-center justify-center gap-1 py-1.5 rounded-lg border border-emerald-500/25 bg-emerald-600/10 hover:bg-emerald-600/25 hover:border-emerald-500/50 text-[10px] font-bold text-emerald-300 transition-all duration-200 cursor-pointer"
          >
            <Plus className="h-3 w-3" />
            {t('item.addB', lang)}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
