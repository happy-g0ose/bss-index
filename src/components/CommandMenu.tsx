import { useState, useEffect, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Search, Command, ChevronRight, FileText, X } from 'lucide-react';
import { bssItemsData } from '../data/items';
import type { BSSItem } from '../data/items';
import type { Language } from '../locales';
import { translateRarity } from '../locales';

interface CommandMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onSelectItem: (item: BSSItem) => void;
  lang: Language;
}

export default function CommandMenu({ isOpen, setIsOpen, onSelectItem, lang }: CommandMenuProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Toggle open on Ctrl+K / Ctrl+L (supports Russian layout л/д)
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

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Scroll active item into view when selectedIndex changes
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeItem = scrollContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
    if (activeItem) {
      activeItem.scrollIntoView({
        block: 'nearest',
      });
    }
  }, [selectedIndex]);

  // Filter items
  const filteredItems = bssItemsData.filter(item => {
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.englishName.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.rarity.toLowerCase().includes(query)
    );
  });

  // Handle arrow navigation and enter key
  useEffect(() => {
    if (!isOpen || filteredItems.length === 0) return;

    const handleNav = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          onSelectItem(filteredItems[selectedIndex]);
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleNav);
    return () => window.removeEventListener('keydown', handleNav);
  }, [isOpen, filteredItems, selectedIndex, onSelectItem, setIsOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300" />
        
        <Dialog.Content className="fixed top-[20%] left-[50%] -translate-x-[50%] z-50 w-full max-w-xl bg-[#0b0f19] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/5 noise-overlay">
          <Dialog.Title className="sr-only">Поиск ценностей предметов</Dialog.Title>
          <Dialog.Description className="sr-only">Введите русское или английское название предмета.</Dialog.Description>
          
          <div className="relative flex items-center border-b border-white/5 px-4 py-3.5 bg-neutral-950/20">
            <Search className="h-5 w-5 text-neutral-500 mr-3" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Поиск ценностей предметов (на русском или английском)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedIndex(0);
              }}
              className="w-full bg-transparent text-neutral-100 placeholder-neutral-500 text-sm outline-none border-none"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-white/5 text-neutral-500 hover:text-neutral-300 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollContainerRef} className="max-h-[300px] overflow-y-auto p-2">
            {filteredItems.length > 0 ? (
              <div className="space-y-1">
                <div className="px-3 py-1.5 text-[10px] font-bold text-neutral-500 tracking-wider uppercase select-none">
                  Ценники стикеров и ваучеров Bee Swarm
                </div>
                {filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      data-index={idx}
                      onClick={() => {
                        onSelectItem(item);
                        setIsOpen(false);
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 border ${
                        isSelected 
                          ? 'bg-amber-500/10 border-amber-500/20 text-white' 
                          : 'border-transparent text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-7 w-7 rounded bg-neutral-950 border border-white/5 flex items-center justify-center overflow-hidden shrink-0 select-none relative">
                          <FileText className="h-4 w-4 absolute text-neutral-600" />
                          <img
                            src={item.image}
                            alt=""
                            className="h-5.5 w-5.5 object-contain absolute z-10 bg-neutral-950"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-neutral-200 truncate">{item.name}</div>
                          <div className="text-[10px] text-neutral-500 font-mono truncate">
                            {item.englishName}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 shrink-0">
                        <span className="text-xs font-black text-amber-400 font-mono">
                          {item.valueLow !== item.valueHigh ? `${Number(item.valueLow.toFixed(2))} - ${Number(item.valueHigh.toFixed(2))}` : Number(item.value.toFixed(2))}★
                        </span>
                        <span className={`text-[8px] font-bold px-2 py-0.5 rounded border leading-none ${item.badgeColor}`}>
                          {translateRarity(item.rarity, lang)}
                        </span>
                        <ChevronRight className="h-4 w-4 opacity-45" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-12 text-center text-neutral-500">
                <Command className="h-8 w-8 mx-auto mb-3 opacity-25 animate-pulse text-amber-500" />
                <p className="text-xs">{lang === 'ru' ? 'Предметы не найдены.' : 'No items found.'}</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 text-[10px] text-neutral-500 bg-neutral-950/40 select-none">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/5">↑↓</kbd> навигация
              </span>
              <span className="flex items-center gap-1">
                <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/5">↵</kbd> выбрать
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-[9px] font-mono border border-white/5">esc</kbd> закрыть
            </span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
