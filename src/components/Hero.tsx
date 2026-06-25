import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToGrid = () => {
    const gridElement = document.getElementById('values-grid');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center px-4 md:px-8 py-16 text-center overflow-hidden grid-bg noise-overlay">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-64 md:w-96 h-64 md:h-96 rounded-full bg-violet-600/10 dark:bg-violet-500/5 blur-[80px] md:blur-[140px] pointer-events-none ambient-shape-1 z-0" />
      <div className="absolute bottom-10 right-10 w-72 md:w-[420px] h-72 md:h-[420px] rounded-full bg-indigo-600/10 dark:bg-indigo-500/5 blur-[90px] md:blur-[160px] pointer-events-none ambient-shape-2 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Tag badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-xs font-semibold tracking-wider uppercase text-violet-600 dark:text-violet-400 mb-6 select-none"
        >
          <Sparkles className="h-3.5 w-3.5" />
          The Cultural Atlas
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.1] mb-6 font-serif max-w-3xl"
        >
          Guiding Culture. <br />
          <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Living Truth.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-500 dark:text-neutral-400 text-lg md:text-xl font-normal max-w-2xl leading-relaxed mb-12 px-2"
        >
          Explore the core values, cultural pillars, and relational declarations that define who we are. Undergirded by truth, lived out in community, and expressed in honor.
        </motion.p>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <button
            onClick={scrollToGrid}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-neutral-900 dark:bg-neutral-50 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-medium text-sm transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-black/20 hover:scale-[1.02] cursor-pointer"
          >
            Explore Core Values
            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 1.5 }}
        onClick={scrollToGrid}
        className="absolute bottom-6 flex flex-col items-center gap-1.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer text-xs tracking-widest uppercase font-semibold select-none z-10 transition-colors"
      >
        <span>Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
