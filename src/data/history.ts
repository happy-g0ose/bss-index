export interface PriceChange {
  id: string;
  itemName: string;
  englishName: string;
  oldValue: number;
  newValue: number;
  date: string; // ISO format or simple date string
}

export const recentPriceChanges: PriceChange[] = [
  {
    id: 'h1',
    itemName: 'Красный ваучер',
    englishName: 'Red Extract Voucher',
    oldValue: 1.5,
    newValue: 1.7,
    date: '2026-06-24',
  },
  {
    id: 'h2',
    itemName: 'Светящаяся пчела',
    englishName: 'Glowing Bee',
    oldValue: 0.8,
    newValue: 0.65,
    date: '2026-06-23',
  },
  {
    id: 'h3',
    itemName: 'Звездный знак: Овен',
    englishName: 'Star Sign: Aries',
    oldValue: 5.0,
    newValue: 5.5,
    date: '2026-06-22',
  },
  {
    id: 'h4',
    itemName: 'Скин на медведя: Пчеловод',
    englishName: 'Cub Buddy: Beekeeper',
    oldValue: 12.0,
    newValue: 11.0,
    date: '2026-06-20',
  },
];
