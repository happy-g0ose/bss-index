import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Filter } from 'lucide-react';
import { bssItemsData } from '../data/items';
import type { BSSItem } from '../data/items';
import type { Language } from '../locales';
import ItemCard from './ItemCard';

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
  CC: 'Critical Power',
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

export function getStatBadgesForGroup(groupName: string, rolls: any[] = []): string[] {
  const matches: string[] = [];
  const normalizedGroup = groupName.toLowerCase().replace(/[-\s]/g, '');

  const sortedAbbrs = Object.keys(STAT_ABBR_LABELS).sort(
    (a, b) => STAT_ABBR_LABELS[b].length - STAT_ABBR_LABELS[a].length
  );

  for (const abbr of sortedAbbrs) {
    const label = STAT_ABBR_LABELS[abbr].toLowerCase();
    const normalizedLabel = label.replace(/[-\s]/g, '');

    // Check if group name contains the label
    let matched = normalizedGroup.includes(normalizedLabel);

    // If not matched, check rolls
    if (!matched) {
      matched = rolls.some(roll => {
        const normalizedRoll = roll.rollName.toLowerCase().replace(/[-\s]/g, '');
        return normalizedRoll.includes(normalizedLabel);
      });
    }

    // Special case check: check if the abbreviation itself matches standalone (e.g. HAH, WFC)
    if (!matched) {
      const abbrLower = abbr.toLowerCase();
      const regex = new RegExp(`\\b${abbrLower}\\b|\\{${abbrLower}\\}`, 'i');
      matched = regex.test(groupName) || rolls.some(roll => regex.test(roll.rollName));
    }

    if (matched) {
      // Overlap prevention rules
      if (abbr === 'CR' && matches.includes('CRAH')) {
        const clean = (s: string) => s.toLowerCase().replace('convert rate at hive', '');
        const hasIndependentCR = clean(groupName).includes('convert rate') ||
          rolls.some(roll => clean(roll.rollName).includes('convert rate'));
        if (!hasIndependentCR) continue;
      }
      
      if (abbr === 'BP' && (matches.includes('BBP') || matches.includes('BAP') || matches.includes('BGP') || matches.includes('GBP'))) {
        const clean = (s: string) => s.toLowerCase()
          .replace('blue bomb pollen', '')
          .replace('blue ability pollen', '')
          .replace('bee gather pollen', '')
          .replace('gold bubble pollen', '');
        const hasIndependentBP = clean(groupName).includes('blue pollen') ||
          rolls.some(roll => clean(roll.rollName).includes('blue pollen'));
        if (!hasIndependentBP) continue;
      }

      if (abbr === 'RP' && matches.includes('RBA')) {
        const clean = (s: string) => s.toLowerCase().replace('red bee attack', '');
        const hasIndependentRP = clean(groupName).includes('red pollen') ||
          rolls.some(roll => clean(roll.rollName).includes('red pollen'));
        if (!hasIndependentRP) continue;
      }
      
      if (abbr === 'WP' && (matches.includes('WFC') || matches.includes('WGA'))) {
        const clean = (s: string) => s.toLowerCase()
          .replace('white field capacity', '')
          .replace('white gather amount', '');
        const hasIndependentWP = clean(groupName).includes('white pollen') ||
          rolls.some(roll => clean(roll.rollName).includes('white pollen'));
        if (!hasIndependentWP) continue;
      }

      matches.push(abbr);
    }
  }

  return matches;
}

export function getStatBadge(groupName: string): string | null {
  const badges = getStatBadgesForGroup(groupName);
  return badges.length > 0 ? badges[0] : null;
}

export function resolveQuery(raw: string): { statAbbr: string | null; query: string } {
  const q = raw.trim().toLowerCase();
  // Check Russian aliases
  if (RU_ABBR_MAP[q]) return { statAbbr: RU_ABBR_MAP[q], query: q };
  // Check English abbreviations
  const upper = q.toUpperCase();
  if (STAT_ABBR_LABELS[upper]) return { statAbbr: upper, query: q };
  return { statAbbr: null, query: q };
}

const translitMap: Record<string, string> = {
  'а': 'a', 'б': 'b', 'в': 'w', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
  'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
  'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
  'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '',
  'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
};

export function transliterate(text: string): string {
  return text.split('').map(char => translitMap[char] || char).join('');
}

export default function BeequipsPage({ lang, onAddToSideA, onAddToSideB, onSelectItem }: BeequipsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortingOption, setSortingOption] = useState<'value-desc' | 'value-asc' | 'demand-desc' | 'name-asc'>('value-desc');

  const demandRank: Record<string, number> = {
    'Хайп': 4,
    'Высокий': 3,
    'Средний': 2,
    'Низкий': 1,
  };

  const filteredBeequips = useMemo(() => {
    const raw = searchQuery.trim().toLowerCase();
    const transRaw = transliterate(raw);
    const { statAbbr } = resolveQuery(raw);

    if (!raw) return allBeequips;

    return allBeequips.filter(item => {
      if (!item.beequipData) return false;

      if (statAbbr) {
        for (const group of item.beequipData) {
          const badges = getStatBadgesForGroup(group.groupName, group.rolls);
          if (badges.includes(statAbbr)) return true;
        }
        return false;
      }

      if (item.name.toLowerCase().includes(raw) || item.englishName.toLowerCase().includes(raw) ||
          item.name.toLowerCase().includes(transRaw) || item.englishName.toLowerCase().includes(transRaw)) return true;
          
      for (const group of item.beequipData) {
        if (group.groupName.toLowerCase().includes(raw) || group.groupName.toLowerCase().includes(transRaw)) return true;
        for (const roll of group.rolls) {
          if (roll.rollName.toLowerCase().includes(raw) || roll.rollName.toLowerCase().includes(transRaw)) return true;
        }
      }
      return false;
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
  }, [searchQuery, sortingOption]);

  const { statAbbr: activeStatFilter } = resolveQuery(searchQuery);

  return (
    <section className="space-y-6 animate-in fade-in duration-500">
      {/* Controls Bar */}
      <div className="space-y-4">
        {/* Top controls: Search & Sort */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Local Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <input
              type="text"
              placeholder={lang === 'ru' ? 'Поиск или аббрев. (хах, wfc, bp...)' : 'Search or abbrev. (hah, wfc, bp...)'}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-900/50 border border-white/5 placeholder-neutral-500 text-xs outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 text-neutral-100 transition-all"
            />
          </div>

          {/* Sorting options select */}
          <div className="flex items-center gap-2 select-none self-end md:self-auto">
            <SlidersHorizontal className="h-4 w-4 text-neutral-500" />
            <span className="text-xs text-neutral-400 font-bold">{lang === 'ru' ? 'Сортировка:' : 'Sort by:'}</span>
            <select
              value={sortingOption}
              onChange={(e) => setSortingOption(e.target.value as any)}
              className="bg-neutral-900/50 border border-white/5 text-xs text-neutral-300 font-semibold py-1.5 px-3 rounded-xl outline-none cursor-pointer hover:border-white/10"
            >
              <option value="value-desc">{lang === 'ru' ? 'По ценности (убыв.)' : 'By value (desc)'}</option>
              <option value="value-asc">{lang === 'ru' ? 'По ценности (возр.)' : 'By value (asc)'}</option>
              <option value="demand-desc">{lang === 'ru' ? 'По спросу (убыв.)' : 'By demand (desc)'}</option>
              <option value="name-asc">{lang === 'ru' ? 'По названию (А-Я)' : 'By name (A-Z)'}</option>
            </select>
          </div>
        </div>

        {/* Category tabs (Stat Filters) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-4 select-none">
          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mr-2 flex items-center gap-1">
            <Filter className="h-3.5 w-3.5 text-neutral-500" /> {lang === 'ru' ? 'Фильтр:' : 'Filter:'}
          </span>
          {Object.entries(STAT_ABBR_LABELS).map(([abbr, full]) => {
            const isActive = activeStatFilter === abbr;
            return (
              <button
                key={abbr}
                onClick={() => setSearchQuery(isActive ? '' : abbr.toLowerCase())}
                title={full}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 border-amber-500 text-neutral-950 font-black shadow-md'
                    : 'bg-neutral-900/40 border-white/5 text-neutral-400 hover:text-neutral-200 hover:border-white/10'
                }`}
              >
                {abbr}
              </button>
            );
          })}
        </div>
      </div>

      {/* Items Grid */}
      {filteredBeequips.length === 0 ? (
        <div className="py-16 text-center text-neutral-500">
          <SlidersHorizontal className="h-8 w-8 mx-auto mb-3 opacity-25 animate-pulse text-amber-500" />
          <p className="text-sm">{lang === 'ru' ? 'Биквипы не найдены.' : 'No beequips found.'}</p>
        </div>
      ) : (
        <motion.div 
          layout
          className="columns-1 md:columns-2 xl:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredBeequips.map((item, idx) => (
              <ItemCard
                key={item.id}
                item={item}
                index={idx}
                lang={lang}
                searchQuery={searchQuery}
                onClick={() => onSelectItem(item)}
                onAddToSideA={onAddToSideA}
                onAddToSideB={onAddToSideB}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
