import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ChevronLeft } from 'lucide-react';
import { bssItemsData } from '../data/items';
import { transliterate } from './BeequipsPage';
import type { BSSItem } from '../data/items';
import type { Language } from '../locales';
import { t, translateCategory } from '../locales';

interface ItemPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: BSSItem) => void;
  lang: Language;
}

export default function ItemPickerModal({ isOpen, onClose, onSelect, lang }: ItemPickerModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [selectedBeequip, setSelectedBeequip] = useState<BSSItem | null>(null);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedCategory('Все');
      setSelectedBeequip(null);
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const categories = useMemo(() => {
    return ['Все', ...Array.from(new Set(bssItemsData.map(item => item.category)))];
  }, []);

  const filteredItems = useMemo(() => {
    return bssItemsData.filter(item => {
      if (selectedCategory !== 'Все' && item.category !== selectedCategory) return false;
      const query = searchQuery.toLowerCase();
      if (!query) return true;
      const transQ = transliterate(query);
      return (
        item.name.toLowerCase().includes(query) ||
        item.englishName.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(transQ) ||
        item.englishName.toLowerCase().includes(transQ)
      );
    });
  }, [searchQuery, selectedCategory]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[85vh] bg-[#0e1220] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {selectedBeequip ? (
            <>
              {/* Header for Beequip Roll Selection */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-neutral-900/50">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedBeequip(null)}
                    className="p-1.5 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all text-neutral-400 hover:text-neutral-200"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-neutral-950/50 flex items-center justify-center p-0.5">
                      <img src={selectedBeequip.image} alt={selectedBeequip.name} className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-sm font-bold text-neutral-200">
                      {lang === 'ru' ? selectedBeequip.name : selectedBeequip.englishName}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all text-neutral-400 hover:text-neutral-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              {/* Rolls List */}
              <div className="flex-1 overflow-y-auto p-4 bg-[#0b0f19] space-y-4">
                <p className="text-xs text-neutral-400 mb-2 font-medium px-1">
                  {lang === 'ru' ? 'Выберите конкретный ролл для обмена:' : 'Select a specific roll to trade:'}
                </p>
                {selectedBeequip.beequipData?.map((group, gIdx) => (
                  <div key={gIdx} className="rounded-xl border border-white/5 bg-neutral-950/60 p-3 space-y-2">
                    <h5 className="text-[10px] uppercase font-mono font-black text-neutral-500 tracking-wider select-none border-b border-white/5 pb-1">
                      {group.groupName}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {group.rolls.map((roll, rIdx) => {
                        const formatVal = (v: number) => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v.toString();
                        let valueText = 'TBD';
                        if (roll.valueLow !== 0 || roll.valueHigh !== 0) {
                          valueText = roll.valueLow === roll.valueHigh 
                            ? `${formatVal(roll.valueLow)} ★` 
                            : `${formatVal(roll.valueLow)} - ${formatVal(roll.valueHigh)} ★`;
                        }
                        
                        let demandStyle = 'bg-neutral-800 text-neutral-400 border-neutral-700/20';
                        if (roll.demand === 'Хайп') demandStyle = 'bg-rose-500/10 text-rose-400 border-rose-500/20';
                        else if (roll.demand === 'Высокий') demandStyle = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
                        else if (roll.demand === 'Средний') demandStyle = 'bg-blue-500/10 text-blue-400 border-blue-500/20';
                        else demandStyle = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

                        return (
                          <button
                            key={rIdx}
                            onClick={() => {
                              const rollItem: BSSItem = {
                                ...selectedBeequip,
                                id: `${selectedBeequip.id}-roll-${roll.rollName.replace(/\s+/g, '-')}`,
                                name: `${selectedBeequip.name} (${roll.rollName})`,
                                englishName: `${selectedBeequip.englishName} (${roll.rollName})`,
                                value: roll.value,
                                valueLow: roll.valueLow,
                                valueHigh: roll.valueHigh,
                                demand: roll.demand,
                              };
                              onSelect(rollItem);
                            }}
                            className="flex flex-col text-left p-2.5 rounded-lg bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-amber-500/30 transition-all border border-white/5 cursor-pointer group"
                          >
                            <span className="text-xs font-bold text-neutral-200 group-hover:text-amber-400 truncate mb-1 w-full" title={roll.rollName}>
                              {roll.rollName}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono font-bold text-amber-400 bg-amber-400/5 px-1.5 py-0.5 rounded border border-amber-400/10 text-[10px]">
                                {valueText}
                              </span>
                              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${demandStyle}`}>
                                {roll.demand}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-neutral-900/50">
                <h2 className="text-sm font-bold text-neutral-200 uppercase tracking-wider">
                  {lang === 'ru' ? 'Выберите предмет' : 'Select an item'}
                </h2>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all text-neutral-400 hover:text-neutral-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Controls */}
              <div className="p-4 space-y-4 border-b border-white/10 bg-neutral-900/30">
                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedCategory === cat
                          ? 'bg-amber-500 text-neutral-950 border-amber-500 shadow-md'
                          : 'bg-neutral-900/50 text-neutral-400 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {translateCategory(cat, lang)}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('catalog.search.placeholder', lang)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950/50 border border-white/10 text-neutral-200 text-sm outline-none focus:border-amber-500/50 transition-colors"
                    autoFocus
                  />
                </div>
              </div>

              {/* Grid */}
              <div className="flex-1 overflow-y-auto p-4 bg-[#0b0f19]">
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {filteredItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          if (item.category === 'Биквипы' && item.beequipData) {
                            setSelectedBeequip(item);
                          } else {
                            onSelect(item);
                          }
                        }}
                        className="flex flex-col items-center p-3 rounded-xl bg-neutral-900/40 border border-white/5 hover:bg-neutral-900/80 hover:border-amber-500/30 transition-all cursor-pointer group text-center"
                      >
                        <div className="h-12 w-12 rounded-lg bg-neutral-950/50 mb-3 flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-neutral-300 group-hover:text-amber-400 line-clamp-2 leading-tight">
                          {lang === 'ru' ? item.name : item.englishName}
                        </span>
                        {item.category !== 'Биквипы' && (
                          <div className="flex flex-col items-center mt-1">
                            <span className="text-xs font-black text-amber-400 font-mono">
                              {Number(item.value.toFixed(2))}★
                            </span>
                            {item.valueLow !== item.valueHigh && (
                              <span className="text-[9px] text-neutral-500 font-bold font-mono leading-none mt-0.5">
                                {Number(item.valueLow.toFixed(2))} - {Number(item.valueHigh.toFixed(2))}
                              </span>
                            )}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-40 text-neutral-500 text-sm">
                    {t('catalog.empty', lang)}
                  </div>
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
