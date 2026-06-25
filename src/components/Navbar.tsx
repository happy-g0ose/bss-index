import { Search, Scale } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
  onAuthorsClick: () => void;
}

export default function Navbar({ onSearchClick, onAuthorsClick }: NavbarProps) {
  const scrollToCalculator = () => {
    const calcElement = document.getElementById('trade-calculator-section');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#0b0f19]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
            {/* Custom SVG Honeycomb/Bee */}
            <svg className="h-5 w-5 text-neutral-950" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 01.832.445l5 7.5a1 1 0 010 1.11l-5 7.5A1 1 0 0110 19a1 1 0 01-.832-.445l-5-7.5a1 1 0 010-1.11l5-7.5A1 1 0 0110 2zm0 2.443L5.628 10 10 15.557 14.372 10 10 4.443z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="leading-none text-left">
            <span className="text-sm font-black tracking-widest uppercase bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent font-sans">
              BSS INDEX
            </span>
            <span className="text-[10px] text-neutral-400 block font-bold tracking-tight">ЦЕННОСТЬ СТИКЕРОВ</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Spotlight Search button */}
          <button
            onClick={onSearchClick}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 text-neutral-500 hover:text-neutral-400 text-xs select-none cursor-pointer"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline text-neutral-400 pr-1">Поиск цен предметов...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 bg-neutral-800 border border-white/5 px-1.5 py-0.5 rounded text-[9px] font-mono text-neutral-400">
              ⌘K
            </kbd>
          </button>

          {/* Authors button */}
          <button
            onClick={onAuthorsClick}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 text-neutral-400 hover:text-white text-xs select-none cursor-pointer font-bold"
          >
            <span>🪿</span>
            <span className="hidden sm:inline">Авторы</span>
          </button>

          {/* Scroll to Calculator */}
          <button
            onClick={scrollToCalculator}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-amber-500/25 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-bold text-amber-400 transition-all duration-300 cursor-pointer"
          >
            <Scale className="h-4 w-4" />
            <span className="hidden sm:inline">Калькулятор обменов</span>
            <span className="sm:hidden">Трейд</span>
          </button>
        </div>

      </div>
    </header>
  );
}
