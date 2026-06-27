import { Search, Globe } from 'lucide-react';
import type { Language } from '../locales';
import { t } from '../locales';

interface NavbarProps {
  onSearchClick: () => void;
  onAuthorsClick: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onLogoClick?: () => void;
}

export default function Navbar({ onSearchClick, onAuthorsClick, lang, setLang, onLogoClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#0b0f19]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div 
          onClick={() => {
            if (onLogoClick) onLogoClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <img 
            src="/logo.png" 
            alt="BSS Index Logo" 
            className="h-9 w-9 object-contain drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)] transition-transform duration-300 hover:scale-110 active:scale-95" 
          />
          <div className="leading-none text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black tracking-widest uppercase bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent font-sans">
                BSS INDEX
              </span>
              <span className="px-1 py-0.5 rounded text-[8px] font-black bg-amber-500/10 text-amber-400 border border-amber-500/25 uppercase tracking-wider select-none align-middle inline-block">
                BETA
              </span>
            </div>
            <span className="text-[10px] text-neutral-400 block font-bold tracking-tight">
              {t('hero.badge', lang).split(' ')[0]}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Spotlight Search button */}
          <button
            onClick={onSearchClick}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 text-neutral-500 hover:text-neutral-400 text-xs select-none cursor-pointer"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline text-neutral-400 pr-1">{t('nav.search', lang).replace(' (Ctrl+K)', '')}</span>
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
            <span className="hidden sm:inline">{t('nav.authors', lang)}</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all duration-300 text-neutral-400 hover:text-white text-xs select-none cursor-pointer font-bold uppercase"
          >
            <Globe className="h-3.5 w-3.5 text-blue-400" />
            <span>{lang}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
