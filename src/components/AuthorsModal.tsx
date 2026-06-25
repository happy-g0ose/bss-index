import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Shield, Sparkles, Code2 } from 'lucide-react';
import type { Language } from '../locales';
import { t } from '../locales';

interface AuthorsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function AuthorsModal({ isOpen, onClose, lang }: AuthorsModalProps) {
  // Lock background scroll when open
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

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-lg rounded-2xl bg-[#0b0f19] border border-white/5 shadow-2xl overflow-hidden z-10 flex flex-col noise-overlay"
          >
            {/* Golden ambient background glow */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-10 bg-gradient-to-tr from-amber-500 to-yellow-400" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-5 bg-gradient-to-tr from-blue-500 to-indigo-600" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 relative z-10">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-black uppercase tracking-wider text-white">{t('authors.title', lang)}</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/80 transition-all cursor-pointer text-neutral-400 hover:text-neutral-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 relative z-10">
              {/* Creator Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-white/5 relative overflow-hidden flex flex-col items-center text-center space-y-4">
                
                {/* Honeycomb Glow Avatar */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 blur-md opacity-50 animate-pulse" />
                  <div className="relative h-20 w-20 rounded-full border-2 border-amber-500 bg-neutral-950 overflow-hidden flex items-center justify-center shadow-lg">
                    <img 
                      src="./avatar.jpg" 
                      alt="happy goose avatar" 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLElement).parentElement;
                        if (parent) {
                          const span = document.createElement('span');
                          span.className = 'text-3xl';
                          span.innerText = '🪿';
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-neutral-950 shadow-md">
                    👑
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white tracking-tight">happy goose</h3>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 flex items-center justify-center gap-1">
                    <Sparkles className="h-3 w-3" /> {t('authors.role', lang)}
                  </p>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                  {t('authors.desc', lang)}
                </p>

                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <a
                    href="https://github.com/happy-g0ose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/5 bg-neutral-950/60 hover:bg-white/5 text-xs text-neutral-300 font-semibold transition-all hover:text-white"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span>happy-g0ose</span>
                  </a>
                  <a
                    href="https://discord.com/users/1193225483932930159"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#5865F2]/20 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 text-xs text-[#5865F2] font-semibold transition-all hover:text-white"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <span>{t('authors.support', lang)}</span>
                  </a>
                </div>
              </div>

              {/* Specs & Tech Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-neutral-900/30 border border-white/5 space-y-1">
                  <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block">{t('authors.project', lang)}</span>
                  <p className="text-xs text-neutral-300 font-bold">Bee Swarm Index</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-900/30 border border-white/5 space-y-1">
                  <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block">{t('authors.tech', lang)}</span>
                  <p className="text-xs text-neutral-300 font-bold flex items-center gap-1">
                    <Code2 className="h-3.5 w-3.5 text-blue-400" /> React + TS
                  </p>
                </div>
              </div>

              {/* Thank you note */}
              <p className="text-[10px] text-neutral-500 text-center flex items-center justify-center gap-1 select-none">
                {t('authors.thanks', lang).replace('❤️', '')} <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
