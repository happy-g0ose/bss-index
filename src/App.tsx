import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, AlertCircle, Search } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ItemCard from './components/ItemCard';
import TradeCalculator from './components/TradeCalculator';
import ItemDetailModal from './components/ItemDetailModal';
import CommandMenu from './components/CommandMenu';
import AuthorsModal from './components/AuthorsModal';
import BeequipsPage from './components/BeequipsPage';
import { bssItemsData } from './data/items';
import type { BSSItem } from './data/items';
import type { Language } from './locales';
import { t, translateCategory } from './locales';

type CategoryType = string;
type SortType = 'value-desc' | 'value-asc' | 'demand-desc' | 'name-asc';
type TabType = 'home' | 'catalog' | 'calculator' | 'beequips';

export default function App() {
  const [sideA, setSideA] = useState<BSSItem[]>([]);
  const [sideB, setSideB] = useState<BSSItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<BSSItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Все');
  const [sortingOption, setSortingOption] = useState<SortType>('value-desc');
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [isAuthorsModalOpen, setIsAuthorsModalOpen] = useState(false);
  
  const [lang, setLang] = useState<Language>('ru');
  const [activeTab, setActiveTab] = useState<TabType>('home');

  // Sync trade calculator data from localStorage (optional persistence for good UX)
  useEffect(() => {
    try {
      // Check if URL has shared trade parameters
      const params = new URLSearchParams(window.location.search);
      const sharedTrade = params.get('trade');
      if (sharedTrade) {
        const [partA, partB] = sharedTrade.split('|');
        const idsA = partA ? partA.split(',') : [];
        const idsB = partB ? partB.split(',') : [];

        // Find items in bssItemsData
        const newSideA = idsA
          .map(id => bssItemsData.find(item => item.id === id))
          .filter(Boolean) as BSSItem[];
        const newSideB = idsB
          .map(id => bssItemsData.find(item => item.id === id))
          .filter(Boolean) as BSSItem[];

        if (newSideA.length > 0 || newSideB.length > 0) {
          setSideA(newSideA);
          setSideB(newSideB);
          saveTradeToLocal(newSideA, newSideB);
          setActiveTab('calculator'); // automatically open calculator tab to show the trade!
          
          // Clean up search parameters so refreshing doesn't overwrite modifications
          const newUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);
          return;
        }
      }

      const savedA = localStorage.getItem('bss-trade-sideA');
      const savedB = localStorage.getItem('bss-trade-sideB');
      if (savedA) setSideA(JSON.parse(savedA));
      if (savedB) setSideB(JSON.parse(savedB));
    } catch (e) {
      console.error('Failed to load trades', e);
    }
  }, []);

  const saveTradeToLocal = (newSideA: BSSItem[], newSideB: BSSItem[]) => {
    localStorage.setItem('bss-trade-sideA', JSON.stringify(newSideA));
    localStorage.setItem('bss-trade-sideB', JSON.stringify(newSideB));
  };

  const handleAddToSideA = (item: BSSItem) => {
    const updated = [...sideA, item];
    setSideA(updated);
    saveTradeToLocal(updated, sideB);
  };

  const handleAddToSideB = (item: BSSItem) => {
    const updated = [...sideB, item];
    setSideB(updated);
    saveTradeToLocal(sideA, updated);
  };

  const handleRemoveFromSideA = (idx: number) => {
    const updated = sideA.filter((_, i) => i !== idx);
    setSideA(updated);
    saveTradeToLocal(updated, sideB);
  };

  const handleRemoveFromSideB = (idx: number) => {
    const updated = sideB.filter((_, i) => i !== idx);
    setSideB(updated);
    saveTradeToLocal(sideA, updated);
  };

  const handleClearTrade = () => {
    setSideA([]);
    setSideB([]);
    localStorage.removeItem('bss-trade-sideA');
    localStorage.removeItem('bss-trade-sideB');
  };

  // Categories list dynamically compiled from dataset
  const categories: CategoryType[] = [
    'Все',
    ...Array.from(new Set(bssItemsData.map(item => item.category)))
  ];

  // Demand ranking helper for sorting
  const demandRank: Record<string, number> = {
    'Хайп': 4,
    'Высокий': 3,
    'Средний': 2,
    'Низкий': 1,
  };

  // Filter & Sort Items
  const processedItems = bssItemsData
    .filter(item => {
      // Category filter
      if (selectedCategory !== 'Все' && item.category !== selectedCategory) {
        return false;
      }
      // Search filter
      const query = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(query) ||
        item.englishName.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.rarity.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      switch (sortingOption) {
        case 'value-asc':
          return a.value - b.value;
        case 'demand-desc':
          return demandRank[b.demand] - demandRank[a.demand];
        case 'name-asc':
          return a.name.localeCompare(b.name, 'ru');
        case 'value-desc':
        default:
          return b.value - a.value;
      }
    });

  return (
    <div className="min-h-screen bg-[#0b0f19] text-neutral-100 font-sans relative antialiased grid-bg noise-overlay">
      
      {/* Keyboard Shortcut Announcement Banner */}
      <div className="bg-gradient-to-r from-amber-500/80 to-yellow-600/80 text-neutral-950 text-[10px] font-extrabold py-1.5 px-4 text-center tracking-wider uppercase select-none flex items-center justify-center gap-2 shadow-md border-b border-amber-500/10 flex-wrap">
        <span className="bg-neutral-950 text-amber-500 px-1.5 py-0.5 rounded text-[8px] font-black border border-amber-500/20 tracking-normal inline-block">
          {lang === 'ru' ? 'БЕТА ТЕСТ' : 'BETA TEST'}
        </span>
        <span className="opacity-95">
          {lang === 'ru' ? 'Открыть поиск:' : 'Open search:'}{' '}
          <kbd className="bg-neutral-950/20 px-1 py-0.5 rounded font-mono border border-neutral-950/10">Ctrl + K</kbd>
        </span>
      </div>

      <Navbar
        onSearchClick={() => setIsCommandMenuOpen(true)}
        onAuthorsClick={() => setIsAuthorsModalOpen(true)}
        lang={lang}
        setLang={setLang}
        onLogoClick={() => setActiveTab('home')}
      />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
        {/* Tabs Navigation */}
        <div className="flex items-center justify-center gap-2 md:gap-4 border-b border-white/5 pb-6 select-none">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'home' 
                ? 'bg-amber-500 text-neutral-950 shadow-md' 
                : 'bg-neutral-900/40 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60 border border-white/5'
            }`}
          >
            {t('nav.tab.home', lang)}
          </button>
          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'catalog' 
                ? 'bg-amber-500 text-neutral-950 shadow-md' 
                : 'bg-neutral-900/40 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60 border border-white/5'
            }`}
          >
            {t('nav.tab.catalog', lang)}
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'calculator' 
                ? 'bg-amber-500 text-neutral-950 shadow-md' 
                : 'bg-neutral-900/40 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60 border border-white/5'
            }`}
          >
            {t('nav.tab.calculator', lang)}
            {(sideA.length > 0 || sideB.length > 0) && (
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                activeTab === 'calculator' ? 'bg-neutral-950/20' : 'bg-amber-500/20 text-amber-400'
              }`}>
                {sideA.length + sideB.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('beequips')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'beequips' 
                ? 'bg-amber-500 text-neutral-950 shadow-md' 
                : 'bg-neutral-900/40 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60 border border-white/5'
            }`}
          >
            {t('nav.tab.beequips', lang)}
          </button>
        </div>

        {activeTab === 'home' && (
          <Home
            onNavigate={setActiveTab}
            onSearchClick={() => setIsCommandMenuOpen(true)}
            lang={lang}
          />
        )}

        {activeTab === 'calculator' && (
          <section id="trade-calculator-section" className="animate-in fade-in duration-500">
            <TradeCalculator
              sideA={sideA}
              sideB={sideB}
              onAddToSideA={handleAddToSideA}
              onAddToSideB={handleAddToSideB}
              onRemoveFromSideA={handleRemoveFromSideA}
              onRemoveFromSideB={handleRemoveFromSideB}
              onClearTrade={handleClearTrade}
              lang={lang}
            />
          </section>
        )}

        {activeTab === 'beequips' && (
          <BeequipsPage
            lang={lang}
            onAddToSideA={handleAddToSideA}
            onAddToSideB={handleAddToSideB}
            onSelectItem={setSelectedItem}
          />
        )}

        {activeTab === 'catalog' && (
          <section className="space-y-6 animate-in fade-in duration-500">
            
            {/* Controls Bar: Search, Category Tabs, Sorting */}
            <div className="space-y-4">
              
              {/* Top controls: Search & Sort */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Local Search bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                  <input
                    type="text"
                    placeholder={t('catalog.search.placeholder', lang)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-900/50 border border-white/5 placeholder-neutral-500 text-xs outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 text-neutral-100 transition-all"
                  />
                </div>

                {/* Sorting options select */}
                <div className="flex items-center gap-2 select-none self-end md:self-auto">
                  <SlidersHorizontal className="h-4 w-4 text-neutral-500" />
                  <span className="text-xs text-neutral-400 font-bold">{t('catalog.sort.label', lang)}</span>
                  <select
                    value={sortingOption}
                    onChange={(e) => setSortingOption(e.target.value as SortType)}
                    className="bg-neutral-900/50 border border-white/5 text-xs text-neutral-300 font-semibold py-1.5 px-3 rounded-xl outline-none cursor-pointer hover:border-white/10"
                  >
                    <option value="value-desc">{t('catalog.sort.valDesc', lang)}</option>
                    <option value="value-asc">{t('catalog.sort.valAsc', lang)}</option>
                    <option value="demand-desc">{t('catalog.sort.demDesc', lang)}</option>
                    <option value="name-asc">{t('catalog.sort.nameAsc', lang)}</option>
                  </select>
                </div>
              </div>

              {/* Category tabs */}
              <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-4 select-none">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mr-2 flex items-center gap-1">
                  <Filter className="h-3.5 w-3.5 text-neutral-500" /> {t('catalog.filter.label', lang)}
                </span>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-amber-500 border-amber-500 text-neutral-950 font-black shadow-md'
                        : 'bg-neutral-900/40 border-white/5 text-neutral-400 hover:text-neutral-200 hover:border-white/10'
                    }`}
                  >
                    {translateCategory(cat, lang)}
                  </button>
                ))}
              </div>

            </div>

            {/* Cards Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {processedItems.length > 0 ? (
                  processedItems.map((item, idx) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      index={idx}
                      onClick={() => setSelectedItem(item)}
                      onAddToSideA={handleAddToSideA}
                      onAddToSideB={handleAddToSideB}
                      lang={lang}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="col-span-full py-16 text-center text-neutral-500 border border-dashed border-white/5 rounded-2xl"
                  >
                    <AlertCircle className="h-9 w-9 mx-auto opacity-35 mb-2 text-amber-500" />
                    <p className="text-xs font-semibold">{t('catalog.empty', lang)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-10 bg-neutral-950/20 mt-20 select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-neutral-500">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center">
              <svg className="h-3.5 w-3.5 text-neutral-950" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 01.832.445l5 7.5a1 1 0 010 1.11l-5 7.5A1 1 0 0110 19a1 1 0 01-.832-.445l-5-7.5a1 1 0 010-1.11l5-7.5A1 1 0 0110 2zm0 2.443L5.628 10 10 15.557 14.372 10 10 4.443z" />
              </svg>
            </div>
            <span className="font-extrabold tracking-widest text-neutral-400">BSS INDEX</span>
            <span>• {lang === 'ru' ? 'Гайд ценников стикеров Roblox' : 'Roblox Sticker Value Guide'}</span>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <p className="flex items-center gap-1">
              © {new Date().getFullYear()} BSS INDEX. {lang === 'ru' ? 'Создано для трейдеров Bee Swarm Simulator.' : 'Created for Bee Swarm Simulator traders.'}
            </p>
            <p className="text-amber-500/80 font-bold flex items-center gap-1">
              {lang === 'ru' ? 'Автор проекта:' : 'Project Author:'} <span className="hover:text-amber-400 transition-colors cursor-pointer underline decoration-dotted" onClick={() => setIsAuthorsModalOpen(true)}>happy goose</span> 🪿
            </p>
          </div>
        </div>
      </footer>

      {/* Deep-Dive Detailed Item Modal Drawer */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToSideA={handleAddToSideA}
        onAddToSideB={handleAddToSideB}
        lang={lang}
      />

      {/* Command Spotlight Dialogue search */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        setIsOpen={setIsCommandMenuOpen}
        onSelectItem={setSelectedItem}
        lang={lang}
      />

      {/* Authors Information Modal */}
      <AuthorsModal
        isOpen={isAuthorsModalOpen}
        onClose={() => setIsAuthorsModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
