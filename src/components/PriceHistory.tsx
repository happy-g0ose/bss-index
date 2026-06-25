import { TrendingUp, TrendingDown, Clock } from 'lucide-react';
import type { PriceChange } from '../data/history';
import { recentPriceChanges } from '../data/history';
import type { Language } from '../locales';
import { t } from '../locales';

interface PriceHistoryProps {
  lang: Language;
}

export default function PriceHistory({ lang }: PriceHistoryProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
        <div className="h-10 w-10 rounded-xl bg-neutral-900/50 border border-white/5 flex items-center justify-center">
          <Clock className="h-5 w-5 text-blue-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-neutral-100 uppercase tracking-wider font-sans">
            {t('history.title', lang)}
          </h2>
          <p className="text-xs text-neutral-400">
            {t('history.desc', lang)}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {recentPriceChanges.length === 0 ? (
          <p className="text-sm text-neutral-500 text-center py-10">{t('history.empty', lang)}</p>
        ) : (
          recentPriceChanges.map((change) => {
            const diff = change.newValue - change.oldValue;
            const isUp = diff > 0;

            return (
              <div 
                key={change.id}
                className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/40 border border-white/5 hover:bg-neutral-900/60 transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-200">
                    {lang === 'ru' ? change.itemName : change.englishName}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono mt-0.5">
                    {change.date}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-mono font-bold">
                    <span className="text-neutral-500">{Number(change.oldValue.toFixed(2))}★</span>
                    <span className="text-neutral-600">➔</span>
                    <span className={isUp ? 'text-emerald-400' : 'text-red-400'}>
                      {Number(change.newValue.toFixed(2))}★
                    </span>
                  </div>
                  
                  <div className={`flex items-center justify-center h-8 w-8 rounded-lg border ${
                    isUp 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                      : 'bg-red-500/10 border-red-500/20 text-red-400'
                  }`}>
                    {isUp ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
