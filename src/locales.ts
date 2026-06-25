export type Language = 'ru' | 'en';

type Dictionary = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const locales: Dictionary = {
  ru: {
    'nav.authors': 'Авторы',
    'nav.search': 'Быстрый поиск (Ctrl+K)',
    'nav.tab.catalog': 'Прайс-лист',
    'nav.tab.calculator': 'Калькулятор',
    'hero.badge': 'Прайс-лист предметов Bee Swarm',
    'hero.title1': 'Ценность Стикеров &',
    'hero.title2': 'Ваучеров BSS',
    'hero.desc': 'Исследуйте актуальные расценки на все предметы из симулятора пчеловода. Добавляйте предметы в калькулятор сделок, чтобы оценить прибыльность вашего обмена.',
    'catalog.search.placeholder': 'Быстрый поиск стикера по названию...',
    'catalog.sort.label': 'Сортировка:',
    'catalog.sort.valDesc': 'По ценности (убыв.)',
    'catalog.sort.valAsc': 'По ценности (возр.)',
    'catalog.sort.demDesc': 'По спросу (хайп)',
    'catalog.sort.nameAsc': 'По названию (А-Я)',
    'catalog.filter.all': 'Все',
    'catalog.filter.label': 'Фильтр:',
    'catalog.empty': 'Предметы по вашему запросу не найдены.',
    'item.value': 'Ценность',
    'item.demand': 'Спрос',
    'item.stability': 'Стабильность',
    'item.stability.up': 'Растет',
    'item.stability.down': 'Падает',
    'item.stability.stable': 'Стабильно',
    'item.addA': 'Вам (А)',
    'item.addB': 'Им (Б)',
    'item.baseValue': 'Базовая ценность',
    'item.demandLevel': 'Уровень спроса',
    'item.desc': 'Описание предмета',
    'item.chart': 'Динамика изменения ценности (6 недель)',
    'calc.title': 'Калькулятор обменов BSS',
    'calc.clear': 'Очистить трейд',
    'calc.share': 'Поделиться трейдом',
    'calc.sideA': 'Сторона А (Вы отдаете)',
    'calc.sideA.badge': 'Отдача',
    'calc.sideB': 'Сторона Б (Вам отдают)',
    'calc.sideB.badge': 'Получение',
    'calc.emptySide': 'Выберите стикеры из списка в каталоге, чтобы добавить их сюда',
    'calc.total': 'Итоговая ценность:',
    'calc.verdict.title': 'Вердикт сделки',
    'calc.verdict.empty': 'Добавьте стикеры для оценки обмена',
    'calc.verdict.hugeLoss': 'Слив',
    'calc.verdict.loss': 'Убыточный трейд',
    'calc.verdict.fair': 'Честный трейд',
    'calc.verdict.win': 'Выгодный трейд',
    'calc.verdict.hugeWin': 'Огромный плюс',
    'calc.verdict.freeGain': 'Получаете бесплатную ценность',
    'calc.verdict.freeLoss': 'Вы отдаете предметы бесплатно',
    'calc.verdict.loseMsg': 'Вы теряете',
    'calc.verdict.fairMsg': 'Равный обмен (разница',
    'calc.verdict.winMsg': 'Прибыль',
    'calc.verdict.hugeWinMsg': 'Сверхприбыль',
    'authors.title': 'Авторы Проекта',
    'authors.role': 'Создатель BSS Index',
    'authors.desc': 'Разработчик и идейный вдохновитель этого проекта. Создал сайт для удобного отслеживания ценностей стикеров и ваучеров, а также для автоматического расчёта выгоды в обменах.',
    'authors.project': 'Проект',
    'authors.tech': 'Технологии',
    'authors.support': 'Поддержка',
    'authors.thanks': 'Сделано с ❤️ для сообщества трейдеров Bee Swarm Simulator.',
    'authors.thanks': 'Сделано с ❤️ для сообщества трейдеров Bee Swarm Simulator.',
  },
  en: {
    'nav.authors': 'Authors',
    'nav.search': 'Quick Search (Ctrl+K)',
    'nav.tab.catalog': 'Value List',
    'nav.tab.calculator': 'Calculator',
    'hero.badge': 'Bee Swarm Items Value List',
    'hero.title1': 'Values of Stickers &',
    'hero.title2': 'BSS Vouchers',
    'hero.desc': 'Explore current prices for all items in Bee Swarm Simulator. Add items to the trade calculator to estimate the profitability of your trades.',
    'catalog.search.placeholder': 'Quick search for a sticker by name...',
    'catalog.sort.label': 'Sort by:',
    'catalog.sort.valDesc': 'Value (Desc)',
    'catalog.sort.valAsc': 'Value (Asc)',
    'catalog.sort.demDesc': 'Demand (Hype)',
    'catalog.sort.nameAsc': 'Name (A-Z)',
    'catalog.filter.all': 'All',
    'catalog.filter.label': 'Filter:',
    'catalog.empty': 'No items found matching your request.',
    'item.value': 'Value',
    'item.demand': 'Demand',
    'item.stability': 'Stability',
    'item.stability.up': 'Rising',
    'item.stability.down': 'Falling',
    'item.stability.stable': 'Stable',
    'item.addA': 'You Give (A)',
    'item.addB': 'They Give (B)',
    'item.baseValue': 'Base Value',
    'item.demandLevel': 'Demand Level',
    'item.desc': 'Item Description',
    'item.chart': 'Value Dynamics (6 weeks)',
    'calc.title': 'BSS Trade Calculator',
    'calc.clear': 'Clear Trade',
    'calc.share': 'Share Trade',
    'calc.sideA': 'Side A (You Give)',
    'calc.sideA.badge': 'Giving',
    'calc.sideB': 'Side B (They Give)',
    'calc.sideB.badge': 'Receiving',
    'calc.emptySide': 'Select stickers from the catalog list to add them here',
    'calc.total': 'Total Value:',
    'calc.verdict.title': 'Trade Verdict',
    'calc.verdict.empty': 'Add stickers to evaluate trade',
    'calc.verdict.hugeLoss': 'Huge L',
    'calc.verdict.loss': 'L Trade',
    'calc.verdict.fair': 'Fair Trade (F)',
    'calc.verdict.win': 'W Trade',
    'calc.verdict.hugeWin': 'Huge W',
    'calc.verdict.freeGain': 'Receiving free value',
    'calc.verdict.freeLoss': 'Giving items away for free',
    'calc.verdict.loseMsg': 'You lose',
    'calc.verdict.fairMsg': 'Equal exchange (difference',
    'calc.verdict.winMsg': 'Profit',
    'calc.verdict.hugeWinMsg': 'Massive Profit',
    'authors.title': 'Project Authors',
    'authors.role': 'Creator of BSS Index',
    'authors.desc': 'Developer and mastermind behind this project. Created the site for convenient tracking of sticker and voucher values, as well as automatic trade profitability calculation.',
    'authors.project': 'Project',
    'authors.tech': 'Technology',
    'authors.support': 'Support',
    'authors.thanks': 'Made with ❤️ for the Bee Swarm Simulator trading community.',
    'authors.thanks': 'Made with ❤️ for the Bee Swarm Simulator trading community.',
  }
};

export function t(key: string, lang: Language): string {
  return locales[lang]?.[key] || key;
}

export function translateDemand(demand: string, lang: Language): string {
  if (lang === 'ru') return demand;
  switch (demand) {
    case 'Хайп': return 'Hype';
    case 'Высокий': return 'High';
    case 'Средний': return 'Average';
    case 'Низкий': return 'Low';
    default: return demand;
  }
}

export function translateStability(stability: string, lang: Language): string {
  if (lang === 'ru') return stability;
  switch (stability) {
    case 'Растет': return 'Rising';
    case 'Падает': return 'Falling';
    case 'Стабильно': return 'Stable';
    default: return stability;
  }
}

export function translateCategory(cat: string, lang: Language): string {
  if (lang === 'ru') return cat;
  switch (cat) {
    case 'Все': return 'All';
    case 'Стикеры мобов': return 'Mob Stickers';
    case 'Стикеры пчел': return 'Bee Stickers';
    case 'Стикеры полей': return 'Field Stickers';
    case 'Драгоценности': return 'Gems';
    case 'Листья': return 'Leaves';
    case 'Ваучеры': return 'Vouchers';
    case 'Скины на куба': return 'Cub Skins';
    case 'Звездные знаки': return 'Star Signs';
    case 'Цветы': return 'Flowers';
    case 'Инструменты': return 'Tools';
    default: return cat;
  }
}
