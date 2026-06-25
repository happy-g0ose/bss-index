import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { bssItemsData } from '../data/items';
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

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedCategory('Все');
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
      return (
        item.name.toLowerCase().includes(query) ||
        item.englishName.toLowerCase().includes(query)
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
                    onClick={() => onSelect(item)}
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
                    <span className="text-[10px] text-amber-500/80 font-mono mt-1 whitespace-nowrap overflow-hidden max-w-full px-1">
                      {item.valueLow !== item.valueHigh ? `${Number(item.valueLow.toFixed(2))} - ${Number(item.valueHigh.toFixed(2))}` : Number(item.value.toFixed(2))}★
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-40 text-neutral-500 text-sm">
                {t('catalog.empty', lang)}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
