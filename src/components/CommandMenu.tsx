import { useState, useEffect, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Search, Command, ChevronRight, FileText, SlidersHorizontal, X } from 'lucide-react';
import { bssItemsData } from '../data/items';
import type { BSSItem } from '../data/items';
import type { Language } from '../locales';
import { translateRarity } from '../locales';
import { STAT_ABBR_LABELS, RU_ABBR_MAP, transliterate } from './BeequipsPage';

interface CommandMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onSelectItem: (item: BSSItem) => void;
  lang: Language;
}

function parseAbbrQuery(raw: string): { abbr: string | null } {
  const q = raw.trim().toLowerCase();
  if (RU_ABBR_MAP[q]) return { abbr: RU_ABBR_MAP[q] };
  const upper = q.toUpperCase();
  if (STAT_ABBR_LABELS[upper]) return { abbr: upper };
  const parts = q.split(/\s+/);
  for (const part of parts) {
    if (RU_ABBR_MAP[part]) return { abbr: RU_ABBR_MAP[part] };
    if (STAT_ABBR_LABELS[part.toUpperCase()]) return { abbr: part.toUpperCase() };
  }
  return { abbr: null };
}

function getStatBadgeFromGroup(groupName: string): string | null {
  const upper = groupName.toUpperCase();
  const sorted = Object.keys(STAT_ABBR_LABELS).sort((a, b) => b.length - a.length);
  for (const abbr of sorted) {
    if (upper.includes(abbr)) return abbr;
  }
  return null;
}

export default function CommandMenu({ isOpen, setIsOpen, onSelectItem, lang }: CommandMenuProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && (key === 'k' || key === 'l' || key === 'л' || key === 'д')) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeItem = scrollContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
    if (activeItem) activeItem.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  const { abbr: statAbbr } = parseAbbrQuery(searchQuery);

  const filteredItems = bssItemsData.filter(item => {
    if (item.category === 'Биквипы') return false;
    const q = searchQuery.toLowerCase();
    if (!q) return false;
    const transQ = transliterate(q);
    return (
      item.name.toLowerCase().includes(q) ||
      item.englishName.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(transQ) ||
      item.englishName.toLowerCase().includes(transQ) ||
      item.category.toLowerCase().includes(q) ||
      item.rarity.toLowerCase().includes(q)
    );
  });

  const filteredBeequips = statAbbr
    ? bssItemsData.filter(item => {
        if (item.category !== 'Биквипы' || !item.beequipData) return false;
        return item.beequipData.some(g => getStatBadgeFromGroup(g.groupName) === statAbbr);
      })
    : searchQuery.trim().length > 0
      ? bssItemsData.filter(item => {
          if (item.category !== 'Биквипы') return false;
          const q = searchQuery.toLowerCase();
          const transQ = transliterate(q);
          return (
            item.name.toLowerCase().includes(q) || 
            item.englishName.toLowerCase().includes(q) ||
            item.name.toLowerCase().includes(transQ) || 
            item.englishName.toLowerCase().includes(transQ)
          );
        })
      : [];

  const allResults = [...filteredItems, ...filteredBeequips];

  useEffect(() => {
    if (!isOpen || allResults.length === 0) return;
    const handleNav = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % allResults.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + allResults.length) % allResults.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (allResults[selectedIndex]) {
          onSelectItem(allResults[selectedIndex]);
          setIsOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleNav);
    return () => window.removeEventListener('keydown', handleNav);
  }, [isOpen, allResults, selectedIndex, onSelectItem, setIsOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-[20%] left-[50%] -translate-x-[50%] z-50 w-full max-w-xl bg-[#0b0f19] rounded-2xl overflow-hidden shadow-2xl border border-white/5 noise-overlay">
          <Dialog.Title className="sr-only">Поиск</Dialog.Title>
          <Dialog.Description className="sr-only">Введите название предмета или аббревиатуру стата.</Dialog.Description>

          {/* Search Input */}
          <div className="relative flex items-center border-b border-white/5 px-4 py-3.5 bg-neutral-950/20">
            <Search className="h-5 w-5 text-neutral-500 mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder={lang === 'ru' ? 'Поиск или стат биквипа: хах, wfc, hah...' : 'Search or beequip stat: hah, wfc, bp...'}
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setSelectedIndex(0); }}
              className="w-full bg-transparent text-neutral-100 placeholder-neutral-500 text-sm outline-none border-none"
            />
            <button onClick={() => setIsOpen(false)} className="p-1 rounded-md hover:bg-white/5 text-neutral-500 hover:text-neutral-300 cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Stat abbreviation hint banner */}
          {statAbbr && (
            <div className="px-4 py-2 bg-amber-500/5 border-b border-amber-500/10 flex items-center gap-2 text-[10px]">
              <SlidersHorizontal className="h-3 w-3 text-amber-400 shrink-0" />
              <span className="font-black font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">{statAbbr}</span>
              <span className="text-neutral-400">=</span>
              <span className="text-neutral-300 font-semibold">{STAT_ABBR_LABELS[statAbbr]}</span>
              <span className="text-neutral-500 ml-auto">{filteredBeequips.length} {lang === 'ru' ? 'биквипов' : 'beequips'}</span>
            </div>
          )}

          {/* Results */}
          <div ref={scrollContainerRef} className="max-h-[360px] overflow-y-auto p-2 space-y-1">
            {allResults.length === 0 && searchQuery ? (
              <div className="py-12 text-center text-neutral-500">
                <Command className="h-8 w-8 mx-auto mb-3 opacity-25 animate-pulse text-amber-500" />
                <p className="text-xs">{lang === 'ru' ? 'Предметы не найдены.' : 'No items found.'}</p>
              </div>
            ) : allResults.length === 0 ? (
              <div className="py-8 text-center text-neutral-600 text-xs select-none">
                {lang === 'ru' ? 'Начните вводить название или аббревиатуру стата биквипа...' : 'Start typing a name or beequip stat abbreviation...'}
              </div>
            ) : (
              <>
                {filteredItems.length > 0 && (
                  <div className="space-y-0.5">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-neutral-500 tracking-wider uppercase select-none">
                      {lang === 'ru' ? 'Стикеры и ваучеры' : 'Stickers & Vouchers'}
                    </div>
                    {filteredItems.map((item, idx) => {
                      const isSelected = idx === selectedIndex;
                      return (
                        <div
                          key={item.id}
                          data-index={idx}
                          onClick={() => { onSelectItem(item); setIsOpen(false); }}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 border ${
                            isSelected ? 'bg-amber-500/10 border-amber-500/20 text-white' : 'border-transparent text-neutral-400 hover:text-neutral-200'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="h-7 w-7 rounded bg-neutral-950 border border-white/5 flex items-center justify-center overflow-hidden shrink-0 relative">
                              <FileText className="h-4 w-4 absolute text-neutral-600" />
                              <img src={item.image} alt="" className="h-5 w-5 object-contain absolute z-10 bg-neutral-950" onError={e => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-neutral-200 truncate">{item.name}</div>
                              <div className="text-[10px] text-neutral-500 font-mono truncate">{item.englishName}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2.5 shrink-0">
                            <span className="text-xs font-black text-amber-400 font-mono">
                              {item.valueLow !== item.valueHigh ? `${Number(item.valueLow.toFixed(2))}-${Number(item.valueHigh.toFixed(2))}` : Number(item.value.toFixed(2))}★
                            </span>
                            <span className={`text-[8px] font-bold px-2 py-0.5 rounded border leading-none ${item.badgeColor}`}>{translateRarity(item.rarity, lang)}</span>
                            <ChevronRight className="h-4 w-4 opacity-45" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {filteredBeequips.length > 0 && (
                  <div className="space-y-0.5">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-amber-500/70 tracking-wider uppercase select-none flex items-center gap-1.5">
                      <SlidersHorizontal className="h-3 w-3" />
                      {lang === 'ru' ? 'Биквипы' : 'Beequips'}
                      {statAbbr && <span className="text-neutral-600 normal-case font-normal">· {STAT_ABBR_LABELS[statAbbr]}</span>}
                    </div>
                    {filteredBeequips.map((item, idx) => {
                      const globalIdx = filteredItems.length + idx;
                      const isSelected = globalIdx === selectedIndex;
                      return (
                        <div
                          key={item.id}
                          data-index={globalIdx}
                          onClick={() => { onSelectItem(item); setIsOpen(false); }}
                          onMouseEnter={() => setSelectedIndex(globalIdx)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 border ${
                            isSelected ? 'bg-amber-500/10 border-amber-500/20 text-white' : 'border-transparent text-neutral-400 hover:text-neutral-200'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="h-7 w-7 rounded bg-amber-950/40 border border-amber-500/10 flex items-center justify-center overflow-hidden shrink-0 relative">
                              <SlidersHorizontal className="h-3.5 w-3.5 absolute text-amber-700/50" />
                              <img src={item.image} alt="" className="h-5 w-5 object-contain absolute z-10" onError={e => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-neutral-200 truncate">{item.name}</div>
                              <div className="text-[10px] text-neutral-500 font-mono truncate">{item.englishName}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2.5 shrink-0">
                            <span className={`text-[8px] font-bold px-2 py-0.5 rounded border leading-none ${item.badgeColor}`}>🐝 {lang === 'ru' ? 'Биквип' : 'Beequip'}</span>
                            <ChevronRight className="h-4 w-4 opacity-45" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 text-[10px] text-neutral-500 bg-neutral-950/40 select-none">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/5">↑↓</kbd> навигация</span>
              <span className="flex items-center gap-1"><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/5">↵</kbd> выбрать</span>
            </div>
            <span className="flex items-center gap-1"><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/5">esc</kbd> закрыть</span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
