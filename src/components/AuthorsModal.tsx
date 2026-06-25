import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Shield, Sparkles, Code2 } from 'lucide-react';

interface AuthorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthorsModal({ isOpen, onClose }: AuthorsModalProps) {
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
                <span className="text-sm font-black uppercase tracking-wider text-white">Авторы Проекта</span>
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
                
                {/* Honeycomb Glow Avatar Placeholder */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 blur-md opacity-50 animate-pulse" />
                  <div className="relative h-20 w-20 rounded-full border-2 border-amber-500 bg-neutral-950 flex items-center justify-center shadow-inner">
                    {/* Golden Goose Logo Icon */}
                    <span className="text-3xl">🪿</span>
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-neutral-950 shadow-md">
                    👑
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white tracking-tight">happy goose</h3>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 flex items-center justify-center gap-1">
                    <Sparkles className="h-3 w-3" /> Создатель BSS Index
                  </p>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                  Разработчик и идейный вдохновитель этого проекта. Создал сайт для удобного отслеживания ценностей стикеров и ваучеров, а также для автоматического расчёта выгоды в обменах.
                </p>

                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <a
                    href="https://github.com/happy-g00se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/5 bg-neutral-950/60 hover:bg-white/5 text-xs text-neutral-300 font-semibold transition-all hover:text-white"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span>happy-g00se</span>
                  </a>
                </div>
              </div>

              {/* Specs & Tech Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-neutral-900/30 border border-white/5 space-y-1">
                  <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block">Проект</span>
                  <p className="text-xs text-neutral-300 font-bold">Bee Swarm Index</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-900/30 border border-white/5 space-y-1">
                  <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block">Технологии</span>
                  <p className="text-xs text-neutral-300 font-bold flex items-center gap-1">
                    <Code2 className="h-3.5 w-3.5 text-blue-400" /> React + TS
                  </p>
                </div>
              </div>

              {/* Thank you note */}
              <p className="text-[10px] text-neutral-500 text-center flex items-center justify-center gap-1 select-none">
                Сделано с <Heart className="h-3 w-3 text-red-500 fill-red-500" /> для сообщества трейдеров Bee Swarm Simulator.
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
