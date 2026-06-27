import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { bssItemsData } from '../data/items';
import type { BSSItem } from '../data/items';
import type { Language } from '../locales';

interface BeequipsPageProps {
  lang: Language;
  onAddToSideA: (item: BSSItem) => void;
  onAddToSideB: (item: BSSItem) => void;
  onSelectItem: (item: BSSItem) => void;
}

export const STAT_ABBR_LABELS: Record<string, string> = {
  AR: 'Ability Rate',
  ATL: 'Ability Token Lifespan',
  BAP: 'Bee Ability Pollen',
  BAR: 'Bee Ability Rate',
  BP: 'Blue Pollen',
  BBP: 'Blue Bomb Pollen',
  BFC: 'Blue Field Capacity',
  BFT: 'Bond From Treats',
  BGP: 'Bee Gather Pollen',
  BMS: 'Bee Movespeed',
  CC: 'Critical Chance',
  CR: 'Convert Rate',
  CRAH: 'Convert Rate at Hive',
  GBP: 'Gold Bubble Pollen',
  HAH: 'Honey at Hive',
  HFT: 'Honey From Tokens',
  HM: 'Honeymark',
  HPG: 'Honey Per Goo',
  HFIC: 'Honey From Instant Conversion',
  IC: 'Instant Conversion',
  MBE: 'Max Bee Energy',
  MD: 'Mark Duration',
  MEL: 'Melody',
  MRT: 'Monster Respawn Time',
  PMS: 'Player Movespeed',
  RBA: 'Red Bee Attack',
  RP: 'Red Pollen',
  SCC: 'Super-Crit Chance',
  SCP: 'Super-Crit Power',
  TL: 'Token Link',
  WFC: 'White Field Capacity',
  WP: 'White Pollen',
  WGA: 'White Gather Amount',
};

// Russian abbreviation aliases → EN abbreviation
export const RU_ABBR_MAP: Record<string, string> = {
  'хах': 'HAH',
  'вфс': 'WFC',
  'вп': 'WP',
  'вга': 'WGA',
  'бп': 'BP',
  'ббп': 'BBP',
  'бфс': 'BFC',
  'бфт': 'BFT',
  'бгп': 'BGP',
  'бмс': 'BMS',
  'кк': 'CC',
  'кр': 'CR',
  'крах': 'CRAH',
  'гбп': 'GBP',
  'хфт': 'HFT',
  'хм': 'HM',
  'хпг': 'HPG',
  'хфик': 'HFIC',
  'ик': 'IC',
  'мбе': 'MBE',
  'мд': 'MD',
  'мел': 'MEL',
  'мрт': 'MRT',
  'пмс': 'PMS',
  'рба': 'RBA',
  'рп': 'RP',
  'скк': 'SCC',
  'скп': 'SCP',
  'тл': 'TL',
  'ар': 'AR',
  'атл': 'ATL',
  'бап': 'BAP',
  'бар': 'BAR',
};

const allBeequips = bssItemsData.filter(item => item.category === 'Биквипы');

function getStatBadge(groupName: string): string | null {
  const upper = groupName.toUpperCase();
  // Sort by length descending so CRAH matches before CR
  const sorted = Object.keys(STAT_ABBR_LABELS).sort((a, b) => b.length - a.length);
  for (const abbr of sorted) {
    if (upper.includes(abbr)) return abbr;
  }
  return null;
}

function resolveQuery(raw: string): { statAbbr: string | null; query: string } {
  const q = raw.trim().toLowerCase();
  // Check Russian aliases
  if (RU_ABBR_MAP[q]) return { statAbbr: RU_ABBR_MAP[q], query: q };
  // Check English abbreviations
  const upper = q.toUpperCase();
  if (STAT_ABBR_LABELS[upper]) return { statAbbr: upper, query: q };
  return { statAbbr: null, query: q };
}

export default function BeequipsPage({ lang, onAddToSideA, onAddToSideB, onSelectItem }: BeequipsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredBeequips = useMemo(() => {
    const raw = searchQuery.trim().toLowerCase();
    if (!raw) return allBeequips;

    const { statAbbr } = resolveQuery(raw);

    return allBeequips.filter(item => {
      if (!item.beequipData) return false;

      // If this is a stat abbr query, match only items whose groups contain that stat
      if (statAbbr) {
        for (const group of item.beequipData) {
          const badge = getStatBadge(group.groupName);
          if (badge === statAbbr) return true;
        }
        return false;
      }

      // Otherwise: match by name or group/roll name
      if (item.name.toLowerCase().includes(raw) || item.englishName.toLowerCase().includes(raw)) return true;
      for (const group of item.beequipData) {
        if (group.groupName.toLowerCase().includes(raw)) return true;
        for (const roll of group.rolls) {
          if (roll.rollName.toLowerCase().includes(raw)) return true;
        }
      }
      return false;
    });
  }, [searchQuery]);

  const formatVal = (v: number) => {
    if (v >= 1000) return `${(v / 1000).toFixed(1)}k`;
    return v % 1 === 0 ? v.toString() : v.toFixed(2);
  };

  const demandColor = (d: string) => {
    if (d === 'Хайп') return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
    if (d === 'Высокий') return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    if (d === 'Средний') return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
  };

  const { statAbbr: activeStatFilter } = resolveQuery(searchQuery);

  return (
    <section className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <span className="bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
              {lang === 'ru' ? 'Биквипы' : 'Beequips'}
            </span>
          </h2>
          <p className="text-xs text-neutral-500 mt-1 font-medium">
            {lang === 'ru'
              ? `${allBeequips.length} экипировок — нажмите карточку чтобы развернуть роллы`
              : `${allBeequips.length} beequips — click a card to expand its rolls`}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
          <input
            type="text"
            placeholder={lang === 'ru' ? 'Поиск или аббрев. (хах, wfc, bp...)' : 'Search or abbrev. (hah, wfc, bp...)'}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900/60 border border-white/5 placeholder-neutral-500 text-xs outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 text-neutral-100 transition-all"
          />
        </div>
      </div>

      {/* Abbreviation quick-filter chips */}
      <div className="space-y-2">
        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest select-none">
          {lang === 'ru' ? 'Быстрый фильтр по характеристике:' : 'Quick stat filter:'}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(STAT_ABBR_LABELS).map(([abbr, full]) => {
            const isActive = activeStatFilter === abbr;
            return (
              <button
                key={abbr}
                onClick={() => setSearchQuery(isActive ? '' : abbr.toLowerCase())}
                title={full}
                className={`px-2 py-0.5 rounded-full text-[9px] font-black font-mono border transition-all cursor-pointer select-none uppercase tracking-wider ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                    : 'border-white/5 bg-neutral-900/40 text-neutral-400 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/20'
                }`}
              >
                {abbr}
              </button>
            );
          })}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-2 py-0.5 rounded-full text-[9px] font-black border border-rose-500/20 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-all cursor-pointer"
            >
              ✕ {lang === 'ru' ? 'Сброс' : 'Clear'}
            </button>
          )}
        </div>

        {/* Active filter info */}
        {activeStatFilter && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs text-amber-400 font-semibold"
          >
            <span className="px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 font-mono font-black text-[10px]">{activeStatFilter}</span>
            <span className="text-neutral-400">=</span>
            <span>{STAT_ABBR_LABELS[activeStatFilter]}</span>
            <span className="text-neutral-500 ml-1">· {filteredBeequips.length} {lang === 'ru' ? 'биквипов' : 'beequips'}</span>
          </motion.div>
        )}
      </div>

      {/* Items Grid */}
      {filteredBeequips.length === 0 ? (
        <div className="py-16 text-center text-neutral-500">
          <SlidersHorizontal className="h-8 w-8 mx-auto mb-3 opacity-25 animate-pulse text-amber-500" />
          <p className="text-sm">{lang === 'ru' ? 'Биквипы не найдены.' : 'No beequips found.'}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredBeequips.map((item, idx) => {
              const isExpanded = expandedIds.has(item.id);
              const groups = item.beequipData || [];

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22, delay: Math.min(idx * 0.02, 0.3) }}
                  className={`rounded-2xl border bg-neutral-950/70 backdrop-blur overflow-hidden transition-shadow duration-300 ${item.borderColor}`}
                  style={{ boxShadow: isExpanded ? `0 0 24px ${item.glowColor}` : undefined }}
                >
                  {/* Card Header — click to expand */}
                  <div
                    className="flex items-center gap-3 p-4 cursor-pointer hover:bg-white/[0.02] transition-colors select-none"
                    onClick={() => toggleExpand(item.id)}
                  >
                    {/* Image */}
                    <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.englishName}
                        className="h-10 w-10 object-contain"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="text-sm font-black text-neutral-100 truncate">{item.name}</div>
                          <div className="text-[10px] text-neutral-500 font-mono truncate">{item.englishName}</div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${demandColor(item.demand)}`}>
                            {item.demand}
                          </span>
                          {isExpanded
                            ? <ChevronUp className="h-3.5 w-3.5 text-neutral-500" />
                            : <ChevronDown className="h-3.5 w-3.5 text-neutral-500" />
                          }
                        </div>
                      </div>

                      {/* Stat abbreviation preview badges */}
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {Array.from(new Set(groups.map(g => getStatBadge(g.groupName)).filter(Boolean))).slice(0, 5).map((badge, bi) => (
                          <span key={bi} className={`px-1.5 py-0.5 rounded text-[9px] font-black font-mono border uppercase ${
                            activeStatFilter === badge
                              ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                              : 'border-white/5 bg-neutral-800/60 text-neutral-400'
                          }`}>
                            {badge}
                          </span>
                        ))}
                        {groups.length > 5 && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold border border-white/5 bg-neutral-800/40 text-neutral-500">
                            +{groups.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Rolls Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/5 px-4 pb-4 pt-3 space-y-3 max-h-96 overflow-y-auto">
                          {groups.map((group, gi) => {
                            const statBadge = getStatBadge(group.groupName);
                            const isHighlighted = activeStatFilter && statBadge === activeStatFilter;
                            return (
                              <div
                                key={gi}
                                className={`space-y-1.5 rounded-lg p-2 transition-colors ${isHighlighted ? 'bg-amber-500/5 border border-amber-500/10' : ''}`}
                              >
                                {/* Group label */}
                                <div className="flex items-center gap-2">
                                  {statBadge && (
                                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-black font-mono border uppercase ${
                                      isHighlighted
                                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                                        : 'bg-neutral-800/60 text-neutral-400 border-white/5'
                                    }`}>
                                      {statBadge}
                                    </span>
                                  )}
                                  <span className="text-[10px] text-neutral-500 font-mono truncate flex-1" title={group.groupName}>
                                    {statBadge ? STAT_ABBR_LABELS[statBadge] : group.groupName}
                                  </span>
                                </div>

                                {/* Roll rows */}
                                {group.rolls.map((roll, ri) => (
                                  <div
                                    key={ri}
                                    className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg bg-neutral-900/50 border border-white/[0.04] hover:bg-neutral-900/80 transition-colors"
                                  >
                                    <span className="text-[11px] font-semibold text-neutral-300 truncate flex-1 min-w-0" title={roll.rollName}>
                                      {roll.rollName}
                                    </span>
                                    <div className="flex items-center gap-1.5 shrink-0">
                                      <span className="font-mono font-black text-[11px] text-amber-400 whitespace-nowrap">
                                        {roll.valueLow === roll.valueHigh
                                          ? `${formatVal(roll.valueLow)}★`
                                          : `${formatVal(roll.valueLow)}-${formatVal(roll.valueHigh)}★`}
                                      </span>
                                      <span className={`text-[9px] font-bold px-1 py-0.5 rounded border whitespace-nowrap ${demandColor(roll.demand)}`}>
                                        {roll.demand}
                                      </span>
                                      <button
                                        onClick={() => {
                                          onAddToSideA({
                                            ...item,
                                            id: `${item.id}-${roll.rollName.replace(/\s+/g, '-')}`,
                                            name: `${item.name} (${roll.rollName})`,
                                            englishName: `${item.englishName} (${roll.rollName})`,
                                            value: roll.value,
                                            valueLow: roll.valueLow,
                                            valueHigh: roll.valueHigh,
                                            demand: roll.demand,
                                          });
                                        }}
                                        className="px-1.5 py-0.5 rounded bg-violet-600 hover:bg-violet-500 text-white font-mono text-[9px] font-black cursor-pointer transition-all hover:scale-105"
                                        title="Add to Side A"
                                      >+A</button>
                                      <button
                                        onClick={() => {
                                          onAddToSideB({
                                            ...item,
                                            id: `${item.id}-${roll.rollName.replace(/\s+/g, '-')}`,
                                            name: `${item.name} (${roll.rollName})`,
                                            englishName: `${item.englishName} (${roll.rollName})`,
                                            value: roll.value,
                                            valueLow: roll.valueLow,
                                            valueHigh: roll.valueHigh,
                                            demand: roll.demand,
                                          });
                                        }}
                                        className="px-1.5 py-0.5 rounded bg-amber-600 hover:bg-amber-500 text-white font-mono text-[9px] font-black cursor-pointer transition-all hover:scale-105"
                                        title="Add to Side B"
                                      >+B</button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          })}

                          <button
                            onClick={() => onSelectItem(item)}
                            className="w-full mt-1 py-2 rounded-xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/70 text-neutral-400 hover:text-neutral-200 text-[11px] font-bold transition-all cursor-pointer"
                          >
                            {lang === 'ru' ? '📋 Открыть полную карточку' : '📋 Open full card'}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
