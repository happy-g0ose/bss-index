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
            src="./logo.png" 
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

          {/* Discord Link */}
          <a
            href="https://discord.gg/ZXmycxjvv9"
            target="_blank"
            rel="noopener noreferrer"
            title="Join our Discord"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#5865F2]/20 bg-[#5865F2]/10 hover:bg-[#5865F2]/25 hover:border-[#5865F2]/40 text-[#8a96ff] hover:text-white text-xs select-none cursor-pointer font-bold transition-all duration-300"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.88-.65,1.72-1.34,2.51-2.07a75.76,75.76,0,0,0,72.93,0c.79.73,1.63,1.42,2.51,2.07a68.51,68.51,0,0,1-10.5,5,77.06,77.06,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.06-18.83C129,50.7,122.64,27.78,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.9,46,53.9,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.14,46,96.14,53,91,65.69,84.69,65.69Z"/>
            </svg>
            <span className="hidden sm:inline">Discord</span>
          </a>

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
