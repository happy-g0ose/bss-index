import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, TrendingUp, Calculator, Layers, Search, ArrowRight } from 'lucide-react';
import type { Language } from '../locales';
import { t, translateDemand } from '../locales';
import { bssItemsData } from '../data/items';

interface HomeProps {
  onNavigate: (tab: 'catalog' | 'calculator') => void;
  onSearchClick: () => void;
  lang: Language;
}

// Popular display stickers with real details
const floatingStickers = [
  {
    name: 'Stick Cub',
    value: '23.50',
    demand: 'Высокий',
    demandEn: 'High',
    image: 'https://bssmvalues.com/images/Stick_Cub.webp',
    glow: 'rgba(168, 85, 247, 0.3)',
    borderColor: 'border-purple-500/35',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
  },
  {
    name: 'Robo Cub',
    value: '15.50',
    demand: 'Высокий',
    demandEn: 'High',
    image: 'https://bssmvalues.com/images/Robo_Cub.webp',
    glow: 'rgba(59, 130, 246, 0.3)',
    borderColor: 'border-blue-500/35',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
  },
  {
    name: 'Star Cub',
    value: '10.25',
    demand: 'Средний',
    demandEn: 'Average',
    image: 'https://bssmvalues.com/images/Star_Cub.webp',
    glow: 'rgba(245, 158, 11, 0.3)',
    borderColor: 'border-amber-500/35',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
  },
  {
    name: 'Leo Star Sign',
    value: '1.00',
    demand: 'Средний',
    demandEn: 'Average',
    image: 'https://bssmvalues.com/images/leo_star_sign.webp',
    glow: 'rgba(16, 185, 129, 0.25)',
    borderColor: 'border-emerald-500/35',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  }
];

export default function Home({ onNavigate, onSearchClick, lang }: HomeProps) {
  const [stickers, setStickers] = useState(() =>
    floatingStickers.map((st, index) => ({
      ...st,
      keyId: `sticker-${index}`
    }))
  );

  const handleStickerClick = (index: number) => {
    if (bssItemsData.length === 0) return;
    const randomIndex = Math.floor(Math.random() * bssItemsData.length);
    const randomItem = bssItemsData[randomIndex];

    setStickers(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        name: randomItem.name,
        value: Number(randomItem.value.toFixed(2)).toString(),
        demand: randomItem.demand,
        demandEn: translateDemand(randomItem.demand, 'en'),
        image: randomItem.image,
        glow: randomItem.glowColor,
        borderColor: randomItem.borderColor,
        badge: randomItem.badgeColor,
      };
      return updated;
    });
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-white/5 bg-gradient-to-br from-neutral-900/85 via-[#0c1220]/90 to-[#0b0f19]/90 backdrop-blur-xl min-h-[480px] flex flex-col justify-center">
        {/* Glow Spheres */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none ambient-shape-1" />
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none ambient-shape-2" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-[10px] font-extrabold tracking-widest uppercase text-amber-400 select-none">
              <Sparkles className="h-3 w-3" />
              {t('hero.badge', lang)}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight font-sans">
              {t('home.hero.title1', lang)} <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                {t('home.hero.title2', lang)}
              </span>
            </h1>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl leading-relaxed font-medium">
              {t('home.hero.desc', lang)}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('catalog')}
                className="group px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.02] cursor-pointer"
              >
                <span>{t('home.btn.values', lang)}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('calculator')}
                className="px-6 py-3.5 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-white/20 text-neutral-200 hover:text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:bg-neutral-900/80 cursor-pointer"
              >
                <Calculator className="h-4 w-4 text-amber-500" />
                <span>{t('home.btn.calc', lang)}</span>
              </button>
            </div>
          </div>

          {/* Animated Float Stickers Side */}
          <div className="lg:col-span-5 hidden lg:block relative min-h-[350px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {stickers.map((sticker, idx) => {
                // Configure drift animations for floating feel
                const xOffset = idx % 2 === 0 ? -30 : 30;
                const yOffset = idx < 2 ? -60 : 60;
                const duration = 5 + idx * 0.5;

                return (
                  <motion.div
                    key={sticker.keyId}
                    className="absolute cursor-pointer select-none"
                    style={{
                      transform: `translate(${xOffset * 3}px, ${yOffset * 1.5}px)`,
                      perspective: 1000,
                    }}
                    animate={{
                      y: [yOffset * 1.5 - 6, yOffset * 1.5 + 6, yOffset * 1.5 - 6],
                      rotate: [idx % 2 === 0 ? -2 : 2, idx % 2 === 0 ? 2 : -2, idx % 2 === 0 ? -2 : 2]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: duration,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.08, zIndex: 30 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={sticker.name}
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-3 bg-neutral-900/80 backdrop-blur-md rounded-2xl border ${sticker.borderColor} flex items-center gap-3 w-48 shadow-xl hover:border-amber-500/30 transition-colors`}
                        style={{ 
                          boxShadow: `0 8px 30px ${sticker.glow}`,
                          backfaceVisibility: 'hidden',
                          transformStyle: 'preserve-3d'
                        }}
                        onClick={() => handleStickerClick(idx)}
                      >
                        <img 
                          src={sticker.image} 
                          alt={sticker.name} 
                          className="w-11 h-11 object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]" 
                        />
                        <div className="text-left leading-tight">
                          <div className="text-[10px] font-bold text-neutral-400 truncate w-32">{sticker.name}</div>
                          <div className="text-xs font-black text-white mt-0.5">{sticker.value} <span className="text-[9px] text-amber-500 font-bold">Val</span></div>
                          <span className={`inline-block text-[8px] font-bold px-1.5 py-0.5 rounded border mt-1 ${sticker.badge}`}>
                            {lang === 'ru' ? sticker.demand : sticker.demandEn}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">
            {t('home.features.title', lang)}
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 font-medium">
            {t('home.features.desc', lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: Database */}
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 flex flex-col items-start text-left space-y-4 hover:border-amber-500/10 transition-all duration-300">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-black uppercase text-white tracking-wider">
              {t('home.features.catalog.title', lang)}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
              {t('home.features.catalog.desc', lang)}
            </p>
            <button
              onClick={() => onNavigate('catalog')}
              className="text-[10px] font-extrabold text-amber-400 hover:text-amber-300 uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer pt-2 mt-auto"
            >
              <span>{lang === 'ru' ? 'Перейти' : 'Explore'}</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Feature 2: Calculator */}
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 flex flex-col items-start text-left space-y-4 hover:border-amber-500/10 transition-all duration-300">
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Calculator className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-black uppercase text-white tracking-wider">
              {t('home.features.calc.title', lang)}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
              {t('home.features.calc.desc', lang)}
            </p>
            <button
              onClick={() => onNavigate('calculator')}
              className="text-[10px] font-extrabold text-amber-400 hover:text-amber-300 uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer pt-2 mt-auto"
            >
              <span>{lang === 'ru' ? 'Открыть' : 'Open'}</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Feature 3: Search */}
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 flex flex-col items-start text-left space-y-4 hover:border-amber-500/10 transition-all duration-300">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-black uppercase text-white tracking-wider">
              {t('home.features.search.title', lang)}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
              {t('home.features.search.desc', lang)}
            </p>
            <button
              onClick={onSearchClick}
              className="text-[10px] font-extrabold text-amber-400 hover:text-amber-300 uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer pt-2 mt-auto"
            >
              <span>{lang === 'ru' ? 'Искать' : 'Search'}</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Popular Items Showcase */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-wider text-white flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-amber-500" />
            <span>{t('home.popular.title', lang)}</span>
          </h2>
          <button
            onClick={() => onNavigate('catalog')}
            className="text-[10px] font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>{lang === 'ru' ? 'Показать все' : 'Show all'}</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {floatingStickers.map((sticker) => (
            <div
              key={`pop-${sticker.name}`}
              onClick={() => onNavigate('catalog')}
              className={`p-4 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-900/60 transition-all duration-300 cursor-pointer flex flex-col items-center text-center space-y-3 relative group`}
            >
              {/* Card top glow shadow */}
              <div 
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" 
              />
              
              <div 
                className="h-16 w-16 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300"
                style={{ background: sticker.glow }}
              >
                <img 
                  src={sticker.image} 
                  alt={sticker.name} 
                  className="h-12 w-12 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]" 
                />
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-200 truncate w-32">
                  {sticker.name}
                </h4>
                <p className="text-[10px] font-black text-amber-400 mt-1">
                  {sticker.value} <span className="text-[8px] text-neutral-400 font-bold">Val</span>
                </p>
              </div>

              <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full border ${sticker.badge}`}>
                {lang === 'ru' ? sticker.demand : sticker.demandEn}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
