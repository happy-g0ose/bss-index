export interface BeequipRoll {
  rollName: string;
  valueLow: number;
  valueHigh: number;
  value: number;
  demand: "Низкий" | "Средний" | "Высокий" | "Хайп";
}

export interface BeequipStatGroup {
  groupName: string;
  rolls: BeequipRoll[];
}

export interface BSSItem {
  id: string;
  name: string;
  englishName: string;
  category: "Скины на каба" | "Скины на куба" | "Скины на улей" | "Ваучеры" | "Стикеры пчел" | "Стикеры медведей" | "Стикеры мобов" | "Искусство" | "Драгоценности" | "Иконки нектара" | "Цветы" | "Грибы" | "Листья" | "Инструменты" | "Марки" | "Стикеры Пчелождества" | "Разное" | "Звездные знаки" | "Биквипы";
  value: number;
  valueLow: number;
  valueHigh: number;
  demand: "Низкий" | "Средний" | "Высокий" | "Хайп";
  stability: "Растет" | "Стабильно" | "Падает";
  rarity: "Обычный" | "Редкий" | "Эпический" | "Легендарный" | "Мифический";
  glowColor: string;
  borderColor: string;
  badgeColor: string;
  textColor: string;
  description: string;
  historicalPrices: number[];
  historicalDates?: string[];
  image: string;
  beequipData?: BeequipStatGroup[];
}

const rawBssItemsData: any[] = [
  {
    "id": "star-cub-0",
    "name": "Star Cub",
    "englishName": "Star Cub",
    "category": "Скины на куба",
    "value": 10.25,
    "valueLow": 10.0,
    "valueHigh": 10.5,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      10.25,
      10.25
    ],
    "image": "https://bssmvalues.com/images/Star_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "robo-cub-0",
    "name": "Robo Cub",
    "englishName": "Robo Cub",
    "category": "Скины на куба",
    "value": 15.5,
    "valueLow": 15.0,
    "valueHigh": 16.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      15.5,
      15.5
    ],
    "image": "https://bssmvalues.com/images/Robo_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "stick-cub-0",
    "name": "Stick Cub",
    "englishName": "Stick Cub",
    "category": "Скины на куба",
    "value": 23.5,
    "valueLow": 22.0,
    "valueHigh": 25.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      23.5,
      23.5
    ],
    "image": "https://bssmvalues.com/images/Stick_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "brown-cub-0",
    "name": "Brown Cub",
    "englishName": "Brown Cub",
    "category": "Скины на куба",
    "value": 31.5,
    "valueLow": 30.0,
    "valueHigh": 33.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      31.5,
      31.5
    ],
    "image": "https://bssmvalues.com/images/Brown_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "doodle-cub-0",
    "name": "Doodle Cub (DDC)",
    "englishName": "Doodle Cub",
    "category": "Скины на куба",
    "value": 42.5,
    "valueLow": 40.0,
    "valueHigh": 45.0,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Легендарный",
    "glowColor": "rgba(245, 158, 11, 0.25)",
    "borderColor": "border-amber-500/30 group-hover:border-amber-500/60",
    "badgeColor": "bg-amber-500/10 text-amber-400 border-amber-500/25",
    "textColor": "text-amber-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      42.5,
      42.5
    ],
    "image": "https://bssmvalues.com/images/Doodle_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "petal-cub-0",
    "name": "Petal Cub",
    "englishName": "Petal Cub",
    "category": "Скины на куба",
    "value": 57.5,
    "valueLow": 55.0,
    "valueHigh": 60.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Легендарный",
    "glowColor": "rgba(245, 158, 11, 0.25)",
    "borderColor": "border-amber-500/30 group-hover:border-amber-500/60",
    "badgeColor": "bg-amber-500/10 text-amber-400 border-amber-500/25",
    "textColor": "text-amber-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      57.5,
      57.5
    ],
    "image": "https://bssmvalues.com/images/Petal_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "gingerbread-cub-0",
    "name": "Gingerbread Cub (GGB)",
    "englishName": "Gingerbread Cub",
    "category": "Скины на куба",
    "value": 60.5,
    "valueLow": 58.0,
    "valueHigh": 63.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Легендарный",
    "glowColor": "rgba(245, 158, 11, 0.25)",
    "borderColor": "border-amber-500/30 group-hover:border-amber-500/60",
    "badgeColor": "bg-amber-500/10 text-amber-400 border-amber-500/25",
    "textColor": "text-amber-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      60.5,
      60.5
    ],
    "image": "https://bssmvalues.com/images/Gingerbread_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "gloomy-cub-0",
    "name": "Gloomy Cub",
    "englishName": "Gloomy Cub",
    "category": "Скины на куба",
    "value": 82.5,
    "valueLow": 80.0,
    "valueHigh": 85.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Легендарный",
    "glowColor": "rgba(245, 158, 11, 0.25)",
    "borderColor": "border-amber-500/30 group-hover:border-amber-500/60",
    "badgeColor": "bg-amber-500/10 text-amber-400 border-amber-500/25",
    "textColor": "text-amber-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      82.5,
      82.5
    ],
    "image": "https://bssmvalues.com/images/Gloomy_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "noob-cub-0",
    "name": "Noob Cub",
    "englishName": "Noob Cub",
    "category": "Скины на куба",
    "value": 82.5,
    "valueLow": 80.0,
    "valueHigh": 85.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Легендарный",
    "glowColor": "rgba(245, 158, 11, 0.25)",
    "borderColor": "border-amber-500/30 group-hover:border-amber-500/60",
    "badgeColor": "bg-amber-500/10 text-amber-400 border-amber-500/25",
    "textColor": "text-amber-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      82.5,
      82.5
    ],
    "image": "https://bssmvalues.com/images/Noob_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "peppermint-cub-0",
    "name": "Peppermint Cub (PPM)",
    "englishName": "Peppermint Cub",
    "category": "Скины на куба",
    "value": 225.0,
    "valueLow": 220.0,
    "valueHigh": 230.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Мифический",
    "glowColor": "rgba(244, 63, 94, 0.25)",
    "borderColor": "border-rose-500/30 group-hover:border-rose-500/60",
    "badgeColor": "bg-rose-500/10 text-rose-400 border-rose-500/25",
    "textColor": "text-rose-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      225.0,
      225.0
    ],
    "image": "https://bssmvalues.com/images/Peppermint_Robo_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "snow-cub-0",
    "name": "Snow Cub",
    "englishName": "Snow Cub",
    "category": "Скины на куба",
    "value": 245.0,
    "valueLow": 240.0,
    "valueHigh": 250.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Мифический",
    "glowColor": "rgba(244, 63, 94, 0.25)",
    "borderColor": "border-rose-500/30 group-hover:border-rose-500/60",
    "badgeColor": "bg-rose-500/10 text-rose-400 border-rose-500/25",
    "textColor": "text-rose-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      245.0,
      245.0
    ],
    "image": "https://bssmvalues.com/images/Snow_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "bee-cub-0",
    "name": "Bee Cub",
    "englishName": "Bee Cub",
    "category": "Скины на куба",
    "value": 405.0,
    "valueLow": 400.0,
    "valueHigh": 410.0,
    "demand": "Средний",
    "stability": "Растет",
    "rarity": "Мифический",
    "glowColor": "rgba(244, 63, 94, 0.25)",
    "borderColor": "border-rose-500/30 group-hover:border-rose-500/60",
    "badgeColor": "bg-rose-500/10 text-rose-400 border-rose-500/25",
    "textColor": "text-rose-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      405.0,
      405.0
    ],
    "image": "https://bssmvalues.com/images/Bee_Cub.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "blue-hive-skin-0",
    "name": "Blue Hive Skin",
    "englishName": "Blue Hive Skin",
    "category": "Скины на улей",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hive_model_basic_blue.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "green-hive-skin-0",
    "name": "Green Hive Skin",
    "englishName": "Green Hive Skin",
    "category": "Скины на улей",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hive_model_basic_green.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pink-hive-skin-0",
    "name": "Pink Hive Skin",
    "englishName": "Pink Hive Skin",
    "category": "Скины на улей",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hive_model_basic_pink.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "red-hive-skin-0",
    "name": "Red Hive Skin",
    "englishName": "Red Hive Skin",
    "category": "Скины на улей",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hive_model_basic_red.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "black-hive-skin-0",
    "name": "Black Hive Skin",
    "englishName": "Black Hive Skin",
    "category": "Скины на улей",
    "value": 0.12,
    "valueLow": 0.1,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.12,
      0.12
    ],
    "image": "https://bssmvalues.com/images/Hive_model_basic_black.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "white-hive-skin-0",
    "name": "White Hive Skin",
    "englishName": "White Hive Skin",
    "category": "Скины на улей",
    "value": 0.12,
    "valueLow": 0.1,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.12,
      0.12
    ],
    "image": "https://bssmvalues.com/images/Hive_model_basic_white.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "wavy-festive-hive-skin-0",
    "name": "Wavy Festive Hive Skin",
    "englishName": "Wavy Festive Hive Skin",
    "category": "Скины на улей",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hive_model_wavy_festive.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "wavy-gold-hive-skin-0",
    "name": "Wavy Gold Hive Skin",
    "englishName": "Wavy Gold Hive Skin",
    "category": "Скины на улей",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hive_model_wavy_yellow.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "wavy-cyan-hive-skin-0",
    "name": "Wavy Cyan Hive Skin",
    "englishName": "Wavy Cyan Hive Skin",
    "category": "Скины на улей",
    "value": 2.75,
    "valueLow": 2.5,
    "valueHigh": 3.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      2.75,
      2.75
    ],
    "image": "https://bssmvalues.com/images/Hive_model_wavy_cyan.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "doodle-hive-skin-0",
    "name": "Doodle Hive Skin (DDH)",
    "englishName": "Doodle Hive Skin",
    "category": "Скины на улей",
    "value": 14.5,
    "valueLow": 14.0,
    "valueHigh": 15.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      14.5,
      14.5
    ],
    "image": "https://bssmvalues.com/images/Hive_model_wavy_doodle.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "wavy-purple-hive-skin-0",
    "name": "Wavy Purple Hive Skin",
    "englishName": "Wavy Purple Hive Skin",
    "category": "Скины на улей",
    "value": 28.5,
    "valueLow": 27.0,
    "valueHigh": 30.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      28.5,
      28.5
    ],
    "image": "https://bssmvalues.com/images/Hive_model_wavy_purple.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "icy-crowned-hive-skin-0",
    "name": "Icy Crowned Hive Skin",
    "englishName": "Icy Crowned Hive Skin",
    "category": "Скины на улей",
    "value": 67.5,
    "valueLow": 65.0,
    "valueHigh": 70.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Легендарный",
    "glowColor": "rgba(245, 158, 11, 0.25)",
    "borderColor": "border-amber-500/30 group-hover:border-amber-500/60",
    "badgeColor": "bg-amber-500/10 text-amber-400 border-amber-500/25",
    "textColor": "text-amber-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      67.5,
      67.5
    ],
    "image": "https://bssmvalues.com/images/Hive_model_icy_crowned.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "ticket-voucher-0",
    "name": "Ticket Voucher (TV)",
    "englishName": "Ticket Voucher",
    "category": "Ваучеры",
    "value": 0.72,
    "valueLow": 0.7,
    "valueHigh": 0.75,
    "demand": "Хайп",
    "stability": "Растет",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells instantly or near instantly at full value or above. Индикаторы: Sells instantly, people overpay for it, multiple buyers at once.",
    "historicalPrices": [
      0.72,
      0.72
    ],
    "image": "https://bssmvalues.com/images/Ticket_Voucher.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "convert-speed-voucher-0",
    "name": "Convert Speed Voucher (CSV)",
    "englishName": "Convert Speed Voucher",
    "category": "Ваучеры",
    "value": 4.25,
    "valueLow": 4.0,
    "valueHigh": 4.5,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      4.25,
      4.25
    ],
    "image": "https://bssmvalues.com/images/X2_Convert_Speed_Voucher.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cub-voucher-0",
    "name": "Cub Voucher (CBV)",
    "englishName": "Cub Voucher",
    "category": "Ваучеры",
    "value": 5.25,
    "valueLow": 5.0,
    "valueHigh": 5.5,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      5.25,
      5.25
    ],
    "image": "https://bssmvalues.com/images/Cub_Buddy_Voucher.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "bee-gather-voucher-0",
    "name": "Bee Gather Voucher (BGV)",
    "englishName": "Bee Gather Voucher",
    "category": "Ваучеры",
    "value": 6.25,
    "valueLow": 6.0,
    "valueHigh": 6.5,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      6.25,
      6.25
    ],
    "image": "https://bssmvalues.com/images/X2_Bee_Gather_Voucher.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "bear-bee-voucher-0",
    "name": "Bear Bee Voucher (BBV)",
    "englishName": "Bear Bee Voucher",
    "category": "Ваучеры",
    "value": 10.0,
    "valueLow": 10.0,
    "valueHigh": 10.0,
    "demand": "Хайп",
    "stability": "Растет",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item sells instantly or near instantly at full value or above. Индикаторы: Sells instantly, people overpay for it, multiple buyers at once.",
    "historicalPrices": [
      10.0,
      10.0
    ],
    "image": "https://bssmvalues.com/images/Bear_Bee_Voucher.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "offline-voucher-0",
    "name": "Offline Voucher (OFV)",
    "englishName": "Offline Voucher",
    "category": "Ваучеры",
    "value": 25.5,
    "valueLow": 24.0,
    "valueHigh": 27.0,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      25.5,
      25.5
    ],
    "image": "https://bssmvalues.com/images/Offline_Voucher.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "fuzz-bomb-0",
    "name": "Fuzz Bomb",
    "englishName": "Fuzz Bomb",
    "category": "Стикеры пчел",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_fuzz_bomb.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "flying-brave-bee-0",
    "name": "Flying Brave Bee",
    "englishName": "Flying Brave Bee",
    "category": "Стикеры пчел",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_flying_brave_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "flying-ninja-bee-0",
    "name": "Flying Ninja Bee",
    "englishName": "Flying Ninja Bee",
    "category": "Стикеры пчел",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_flying_ninja_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "flying-rad-bee-0",
    "name": "Flying Rad Bee",
    "englishName": "Flying Rad Bee",
    "category": "Стикеры пчел",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_flying_rad_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "tabby-scratch-0",
    "name": "Tabby Scratch",
    "englishName": "Tabby Scratch",
    "category": "Стикеры пчел",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_tabby_scratch.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "blob-bumble-0",
    "name": "Blob Bumble",
    "englishName": "Blob Bumble",
    "category": "Стикеры пчел",
    "value": 0.12,
    "valueLow": 0.1,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.12,
      0.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_blob_bumble_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "diamond-diamond-bee-0",
    "name": "Diamond Diamond Bee",
    "englishName": "Diamond Diamond Bee",
    "category": "Стикеры пчел",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_diamond_diamond_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "round-rascal-bee-0",
    "name": "Round Rascal Bee",
    "englishName": "Round Rascal Bee",
    "category": "Стикеры пчел",
    "value": 0.12,
    "valueLow": 0.1,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.12,
      0.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_round_rascal_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "shocked-hive-slot-0",
    "name": "Shocked Hive Slot",
    "englishName": "Shocked Hive Slot",
    "category": "Стикеры пчел",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_shocked_hive_slot.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "4-pronged-vector-bee-0",
    "name": "4-Pronged Vector Bee",
    "englishName": "4-Pronged Vector Bee",
    "category": "Стикеры пчел",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_4_Pronged_Vector_Bee.png",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "precise-eye-0",
    "name": "Precise Eye",
    "englishName": "Precise Eye",
    "category": "Стикеры пчел",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_precise_eye.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "flying-photon-bee-0",
    "name": "Flying Photon Bee",
    "englishName": "Flying Photon Bee",
    "category": "Стикеры пчел",
    "value": 0.42,
    "valueLow": 0.33,
    "valueHigh": 0.5,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.42,
      0.42
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_flying_photon_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "drooping-stubborn-bee-0",
    "name": "Drooping Stubborn Bee",
    "englishName": "Drooping Stubborn Bee",
    "category": "Стикеры пчел",
    "value": 0.58,
    "valueLow": 0.5,
    "valueHigh": 0.66,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.58,
      0.58
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_drooping_stubborn_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "wobbly-looker-0",
    "name": "Wobbly Looker",
    "englishName": "Wobbly Looker",
    "category": "Стикеры пчел",
    "value": 0.62,
    "valueLow": 0.5,
    "valueHigh": 0.75,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.62,
      0.62
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_wobbly_looker_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "tabby-from-behind-0",
    "name": "Tabby From Behind",
    "englishName": "Tabby From Behind",
    "category": "Стикеры пчел",
    "value": 2.25,
    "valueLow": 2.0,
    "valueHigh": 2.5,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      2.25,
      2.25
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_tabby_from_behind.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "bear-bee-offer-0",
    "name": "Bear Bee Offer",
    "englishName": "Bear Bee Offer",
    "category": "Стикеры пчел",
    "value": 2.75,
    "valueLow": 2.5,
    "valueHigh": 3.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      2.75,
      2.75
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_bear_bee_offer.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "round-basic-0",
    "name": "Round Basic",
    "englishName": "Round Basic",
    "category": "Стикеры пчел",
    "value": 10.5,
    "valueLow": 10.0,
    "valueHigh": 11.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      10.5,
      10.5
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_round_basic_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "chef-hat-polar-bear-0",
    "name": "Chef Hat Polar Bear",
    "englishName": "Chef Hat Polar Bear",
    "category": "Стикеры медведей",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_chef_hat_polar_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "honey-bee-bear-0",
    "name": "Honey Bee Bear (HBB)",
    "englishName": "Honey Bee Bear",
    "category": "Стикеры медведей",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_honey_bee_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "panicked-science-bear-0",
    "name": "Panicked Science Bear",
    "englishName": "Panicked Science Bear",
    "category": "Стикеры медведей",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_panicked_science_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "sitting-green-shirt-bear-0",
    "name": "Sitting Green Shirt Bear",
    "englishName": "Sitting Green Shirt Bear",
    "category": "Стикеры медведей",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_sitting_green_shirt_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "uplooking-bear-0",
    "name": "Uplooking Bear",
    "englishName": "Uplooking Bear",
    "category": "Стикеры медведей",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_uplooking_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "bomber-bear-0",
    "name": "Bomber Bear",
    "englishName": "Bomber Bear",
    "category": "Стикеры медведей",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_bomber_bee_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "squashed-head-bear-0",
    "name": "Squashed Head Bear",
    "englishName": "Squashed Head Bear",
    "category": "Стикеры медведей",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_squashed_head_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "stretched-head-bear-0",
    "name": "Stretched Head Bear",
    "englishName": "Stretched Head Bear",
    "category": "Стикеры медведей",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_stretched_head_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "sideways-spirit-bear-0",
    "name": "Sideways Spirit Bear",
    "englishName": "Sideways Spirit Bear",
    "category": "Стикеры медведей",
    "value": 0.2,
    "valueLow": 0.15,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.2,
      0.2
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_sideways_spirit_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "dapper-bear-from-above-0",
    "name": "Dapper Bear From Above",
    "englishName": "Dapper Bear From Above",
    "category": "Стикеры медведей",
    "value": 0.58,
    "valueLow": 0.5,
    "valueHigh": 0.66,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.58,
      0.58
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_dapper_from_above.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "shy-brown-bear-0",
    "name": "Shy Brown Bear",
    "englishName": "Shy Brown Bear",
    "category": "Стикеры медведей",
    "value": 0.62,
    "valueLow": 0.5,
    "valueHigh": 0.75,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.62,
      0.62
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_shy_brown_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "sitting-mother-bear-0",
    "name": "Sitting Mother Bear",
    "englishName": "Sitting Mother Bear",
    "category": "Стикеры медведей",
    "value": 2.25,
    "valueLow": 2.0,
    "valueHigh": 2.5,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      2.25,
      2.25
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_sitting_mother_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "glowering-gummy-bear-0",
    "name": "Glowering Gummy Bear",
    "englishName": "Glowering Gummy Bear",
    "category": "Стикеры медведей",
    "value": 19.0,
    "valueLow": 18.0,
    "valueHigh": 20.0,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      19.0,
      19.0
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_glowering_gummy_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "sunbear-0",
    "name": "Sunbear",
    "englishName": "Sunbear",
    "category": "Стикеры медведей",
    "value": 29.0,
    "valueLow": 28.0,
    "valueHigh": 30.0,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      29.0,
      29.0
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_stranded_sun_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "coiled-snake-0",
    "name": "Coiled Snake",
    "englishName": "Coiled Snake",
    "category": "Стикеры мобов",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_coiled_snake.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "forward-facing-aphid-0",
    "name": "Forward Facing Aphid",
    "englishName": "Forward Facing Aphid",
    "category": "Стикеры мобов",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_forward_facing_aphid.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "happy-fish-0",
    "name": "Happy Fish",
    "englishName": "Happy Fish",
    "category": "Стикеры мобов",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_happy_fish.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "menacing-mantis-0",
    "name": "Menacing Mantis",
    "englishName": "Menacing Mantis",
    "category": "Стикеры мобов",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_menacing_mantis.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "standing-caterpillar-0",
    "name": "Standing Caterpillar",
    "englishName": "Standing Caterpillar",
    "category": "Стикеры мобов",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_standing_caterpillar.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "tadpole-0",
    "name": "Tadpole",
    "englishName": "Tadpole",
    "category": "Стикеры мобов",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_tadpole.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "forward-facing-spider-0",
    "name": "Forward Facing Spider",
    "englishName": "Forward Facing Spider",
    "category": "Стикеры мобов",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_forward_facing_spider.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "left-facing-ant-0",
    "name": "Left Facing Ant",
    "englishName": "Left Facing Ant",
    "category": "Стикеры мобов",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_left_facing_ant.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "little-scorpion-0",
    "name": "Little Scorpion",
    "englishName": "Little Scorpion",
    "category": "Стикеры мобов",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_little_scorpion.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "right-facing-stump-snail-0",
    "name": "Right Facing Stump Snail",
    "englishName": "Right Facing Stump Snail",
    "category": "Стикеры мобов",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_right_facing_stump_snail.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "flying-magenta-critter-0",
    "name": "Flying Magenta Critter",
    "englishName": "Flying Magenta Critter",
    "category": "Стикеры мобов",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_flying_magenta_critter.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "blue-triangle-critter-0",
    "name": "Blue Triangle Critter",
    "englishName": "Blue Triangle Critter",
    "category": "Стикеры мобов",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_blue_triangle_critter.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "orange-leg-critter-0",
    "name": "Orange Leg Critter",
    "englishName": "Orange Leg Critter",
    "category": "Стикеры мобов",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_orange_leg_critter.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "purple-pointed-critter-0",
    "name": "Purple Pointed Critter",
    "englishName": "Purple Pointed Critter",
    "category": "Стикеры мобов",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_purple_pointed_critter.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "walking-stick-nymph-0",
    "name": "Walking Stick Nymph",
    "englishName": "Walking Stick Nymph",
    "category": "Стикеры мобов",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_walking_stick_nymph.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "round-green-critter-0",
    "name": "Round Green Critter",
    "englishName": "Round Green Critter",
    "category": "Стикеры мобов",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_round_green_critter.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "small-blue-chick-0",
    "name": "Small Blue Chick",
    "englishName": "Small Blue Chick",
    "category": "Стикеры мобов",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_small_blue_chick.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "standing-bean-bug-0",
    "name": "Standing Bean Bug",
    "englishName": "Standing Bean Bug",
    "category": "Стикеры мобов",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_standing_bean_bug.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "nessie-0",
    "name": "Nessie",
    "englishName": "Nessie",
    "category": "Искусство",
    "value": 75.0,
    "valueLow": 70.0,
    "valueHigh": 80.0,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      75.0,
      75.0
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_nessie.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "red-doodle-person-0",
    "name": "Red Doodle Person",
    "englishName": "Red Doodle Person",
    "category": "Искусство",
    "value": 0.03,
    "valueLow": 0.0,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.03,
      0.03
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_red_doodle_person.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "moai-0",
    "name": "Moai",
    "englishName": "Moai",
    "category": "Искусство",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_moai.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "orange-step-array-0",
    "name": "Orange Step Array",
    "englishName": "Orange Step Array",
    "category": "Искусство",
    "value": 0.12,
    "valueLow": 0.1,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.12,
      0.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_orange_step_array.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "orange-green-tri-deco-0",
    "name": "Orange Green Tri Deco",
    "englishName": "Orange Green Tri Deco",
    "category": "Искусство",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_orange_green_tri_deco.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "banana-painting-0",
    "name": "Banana Painting",
    "englishName": "Banana Painting",
    "category": "Искусство",
    "value": 0.75,
    "valueLow": 0.5,
    "valueHigh": 1.0,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.75,
      0.75
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_banana_painting.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pearl-girl-0",
    "name": "Pearl Girl",
    "englishName": "Pearl Girl",
    "category": "Искусство",
    "value": 0.75,
    "valueLow": 0.5,
    "valueHigh": 1.0,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.75,
      0.75
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pearl_girl.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "prism-painting-0",
    "name": "Prism Painting",
    "englishName": "Prism Painting",
    "category": "Искусство",
    "value": 0.75,
    "valueLow": 0.5,
    "valueHigh": 1.0,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.75,
      0.75
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_prism_painting.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "abstract-color-painting-0",
    "name": "Abstract Color Painting",
    "englishName": "Abstract Color Painting",
    "category": "Искусство",
    "value": 3.5,
    "valueLow": 3.0,
    "valueHigh": 4.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      3.5,
      3.5
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_abstract_color_painting.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "ionic-column-middle-0",
    "name": "Ionic Column Middle",
    "englishName": "Ionic Column Middle",
    "category": "Искусство",
    "value": 5.5,
    "valueLow": 5.0,
    "valueHigh": 6.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      5.5,
      5.5
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_ionic_column_middle.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "ionic-column-base-0",
    "name": "Ionic Column Base",
    "englishName": "Ionic Column Base",
    "category": "Искусство",
    "value": 28.5,
    "valueLow": 27.0,
    "valueHigh": 30.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      28.5,
      28.5
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_ionic_column_base.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "ionic-column-top-0",
    "name": "Ionic Column Top",
    "englishName": "Ionic Column Top",
    "category": "Искусство",
    "value": 28.5,
    "valueLow": 27.0,
    "valueHigh": 30.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      28.5,
      28.5
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_ionic_column_top.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "blue-and-green-marble-0",
    "name": "Blue And Green Marble",
    "englishName": "Blue And Green Marble",
    "category": "Драгоценности",
    "value": 0.03,
    "valueLow": 0.0,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.03,
      0.03
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_blue_and_green_marble.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "diamond-cluster-0",
    "name": "Diamond Cluster",
    "englishName": "Diamond Cluster",
    "category": "Драгоценности",
    "value": 0.03,
    "valueLow": 0.0,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.03,
      0.03
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_diamond_cluster.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "diamond-trim-0",
    "name": "Diamond Trim",
    "englishName": "Diamond Trim",
    "category": "Драгоценности",
    "value": 0.03,
    "valueLow": 0.0,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.03,
      0.03
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_diamond_trim.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "orange-swirled-marble-0",
    "name": "Orange Swirled Marble",
    "englishName": "Orange Swirled Marble",
    "category": "Драгоценности",
    "value": 0.03,
    "valueLow": 0.0,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.03,
      0.03
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_orange_swirled_marble.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "yellow-swirled-marble-0",
    "name": "Yellow Swirled Marble",
    "englishName": "Yellow Swirled Marble",
    "category": "Драгоценности",
    "value": 0.03,
    "valueLow": 0.0,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.03,
      0.03
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_yellow_swirled_marble.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cyan-decorative-border-0",
    "name": "Cyan Decorative Border",
    "englishName": "Cyan Decorative Border",
    "category": "Драгоценности",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_cyan_decorative_border.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "mythic-m-0",
    "name": "Mythic M",
    "englishName": "Mythic M",
    "category": "Драгоценности",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_mythic_m.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "purple-fleuron-0",
    "name": "Purple Fleuron",
    "englishName": "Purple Fleuron",
    "category": "Драгоценности",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_purple_fleuron.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "royal-bear-0",
    "name": "Royal Bear",
    "englishName": "Royal Bear",
    "category": "Драгоценности",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_royal_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "left-mythic-gem-fleuron-0",
    "name": "Left Mythic Gem Fleuron",
    "englishName": "Left Mythic Gem Fleuron",
    "category": "Драгоценности",
    "value": 2.25,
    "valueLow": 2.0,
    "valueHigh": 2.5,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      2.25,
      2.25
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_left_mythic_gem_fleuron.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "right-mythic-gem-fleuron-0",
    "name": "Right Mythic Gem Fleuron",
    "englishName": "Right Mythic Gem Fleuron",
    "category": "Драгоценности",
    "value": 2.25,
    "valueLow": 2.0,
    "valueHigh": 2.5,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      2.25,
      2.25
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_right_mythic_gem_fleuron.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "left-gold-swirl-fleuron-0",
    "name": "Left Gold Swirl Fleuron",
    "englishName": "Left Gold Swirl Fleuron",
    "category": "Драгоценности",
    "value": 2.25,
    "valueLow": 2.0,
    "valueHigh": 2.5,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      2.25,
      2.25
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_left_gold_swirl_fleuron.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "right-gold-swirl-fleuron-0",
    "name": "Right Gold Swirl Fleuron",
    "englishName": "Right Gold Swirl Fleuron",
    "category": "Драгоценности",
    "value": 2.25,
    "valueLow": 2.0,
    "valueHigh": 2.5,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      2.25,
      2.25
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_right_gold_swirl_fleuron.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "left-shining-diamond-fleuron-0",
    "name": "Left Shining Diamond Fleuron",
    "englishName": "Left Shining Diamond Fleuron",
    "category": "Драгоценности",
    "value": 2.75,
    "valueLow": 2.5,
    "valueHigh": 3.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      2.75,
      2.75
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_left_shining_diamond_fleuron.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "right-shining-diamond-fleuron-0",
    "name": "Right Shining Diamond Fleuron",
    "englishName": "Right Shining Diamond Fleuron",
    "category": "Драгоценности",
    "value": 2.75,
    "valueLow": 2.5,
    "valueHigh": 3.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      2.75,
      2.75
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_right_shining_diamond_fleuron.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "royal-symbol-0",
    "name": "Royal Symbol",
    "englishName": "Royal Symbol",
    "category": "Драгоценности",
    "value": 14.5,
    "valueLow": 14.0,
    "valueHigh": 15.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Эпический",
    "glowColor": "rgba(168, 85, 247, 0.25)",
    "borderColor": "border-purple-500/30 group-hover:border-purple-500/60",
    "badgeColor": "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "textColor": "text-purple-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      14.5,
      14.5
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_royal_symbol.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "comforting-nectar-icon-0",
    "name": "Comforting Nectar Icon",
    "englishName": "Comforting Nectar Icon",
    "category": "Иконки нектара",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_comforting_nectar_icon.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "invigorating-nectar-icon-0",
    "name": "Invigorating Nectar Icon",
    "englishName": "Invigorating Nectar Icon",
    "category": "Иконки нектара",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_invigorating_nectar_icon.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "motivating-nectar-icon-0",
    "name": "Motivating Nectar Icon",
    "englishName": "Motivating Nectar Icon",
    "category": "Иконки нектара",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_motivating_nectar_icon.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "refreshing-nectar-icon-0",
    "name": "Refreshing Nectar Icon",
    "englishName": "Refreshing Nectar Icon",
    "category": "Иконки нектара",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_refreshing_nectar_icon.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "satisfying-nectar-icon-0",
    "name": "Satisfying Nectar Icon",
    "englishName": "Satisfying Nectar Icon",
    "category": "Иконки нектара",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_satisfying_nectar_icon.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "small-dandelion-0",
    "name": "Small Dandelion",
    "englishName": "Small Dandelion",
    "category": "Цветы",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_small_dandelion.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "small-pink-tulip-0",
    "name": "Small Pink Tulip",
    "englishName": "Small Pink Tulip",
    "category": "Цветы",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_small_pink_tulip.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "small-tickseed-0",
    "name": "Small Tickseed",
    "englishName": "Small Tickseed",
    "category": "Цветы",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_small_tickseed.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "small-white-daisy-0",
    "name": "Small White Daisy",
    "englishName": "Small White Daisy",
    "category": "Цветы",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_small_white_daisy.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "purple-4-point-flower-0",
    "name": "Purple 4-Point Flower",
    "englishName": "Purple 4-Point Flower",
    "category": "Цветы",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_purple_4-point_flower.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "spore-covered-puffshroom-0",
    "name": "Spore Covered Puffshroom",
    "englishName": "Spore Covered Puffshroom",
    "category": "Грибы",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_spore_covered_puffshroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "white-button-mushroom-0",
    "name": "White Button Mushroom",
    "englishName": "White Button Mushroom",
    "category": "Грибы",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_white_button_mushroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "black-truffle-mushroom-0",
    "name": "Black Truffle Mushroom",
    "englishName": "Black Truffle Mushroom",
    "category": "Грибы",
    "value": 0.12,
    "valueLow": 0.1,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.12,
      0.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_black_truffle_mushroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "fly-agaric-mushroom-0",
    "name": "Fly Agaric Mushroom",
    "englishName": "Fly Agaric Mushroom",
    "category": "Грибы",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_fly_agaric_mushroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "porcini-mushroom-0",
    "name": "Porcini Mushroom",
    "englishName": "Porcini Mushroom",
    "category": "Грибы",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_porcini_mushroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "chanterelle-mushroom-0",
    "name": "Chanterelle Mushroom",
    "englishName": "Chanterelle Mushroom",
    "category": "Грибы",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_chanterelle_mushroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "morel-mushroom-0",
    "name": "Morel Mushroom",
    "englishName": "Morel Mushroom",
    "category": "Грибы",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_morel_mushroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "oiler-mushroom-0",
    "name": "Oiler Mushroom",
    "englishName": "Oiler Mushroom",
    "category": "Грибы",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_oiler_mushroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "shiitake-mushroom-0",
    "name": "Shiitake Mushroom",
    "englishName": "Shiitake Mushroom",
    "category": "Грибы",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_shiitake_mushroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "prismatic-mushroom-0",
    "name": "Prismatic Mushroom",
    "englishName": "Prismatic Mushroom",
    "category": "Грибы",
    "value": 1.12,
    "valueLow": 1.0,
    "valueHigh": 1.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      1.12,
      1.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_prismatic_mushroom.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "blowing-leaf-0",
    "name": "Blowing Leaf",
    "englishName": "Blowing Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_blowing_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cordate-leaf-0",
    "name": "Cordate Leaf",
    "englishName": "Cordate Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_cordate_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cunate-leaf-0",
    "name": "Cunate Leaf",
    "englishName": "Cunate Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_cunate_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "elliptic-leaf-0",
    "name": "Elliptic Leaf",
    "englishName": "Elliptic Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_elliptic_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "hastate-leaf-0",
    "name": "Hastate Leaf",
    "englishName": "Hastate Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_hastate_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "lanceolate-leaf-0",
    "name": "Lanceolate Leaf",
    "englishName": "Lanceolate Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_lanceolate_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "lyrate-leaf-0",
    "name": "Lyrate Leaf",
    "englishName": "Lyrate Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_lyrate_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "oblique-leaf-0",
    "name": "Oblique Leaf",
    "englishName": "Oblique Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_oblique_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "reniform-leaf-0",
    "name": "Reniform Leaf",
    "englishName": "Reniform Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_reniform_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "rhomboid-leaf-0",
    "name": "Rhomboid Leaf",
    "englishName": "Rhomboid Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_rhomboid_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "spatulate-leaf-0",
    "name": "Spatulate Leaf",
    "englishName": "Spatulate Leaf",
    "category": "Листья",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_spatulate_leaf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "petal-wand-0",
    "name": "Petal Wand",
    "englishName": "Petal Wand",
    "category": "Инструменты",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_petal_wand.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "dark-scythe-0",
    "name": "Dark Scythe",
    "englishName": "Dark Scythe",
    "category": "Инструменты",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_dark_scythe.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "porcelain-dipper-0",
    "name": "Porcelain Dipper",
    "englishName": "Porcelain Dipper",
    "category": "Инструменты",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_porcelain_dipper.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "tide-popper-0",
    "name": "Tide Popper",
    "englishName": "Tide Popper",
    "category": "Инструменты",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_tide_popper.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "bubble-wand-0",
    "name": "Bubble Wand",
    "englishName": "Bubble Wand",
    "category": "Инструменты",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_bubble_wand.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "golden-rake-0",
    "name": "Golden Rake",
    "englishName": "Golden Rake",
    "category": "Инструменты",
    "value": 0.12,
    "valueLow": 0.1,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.12,
      0.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_golden_rake.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "honey-dipper-0",
    "name": "Honey Dipper",
    "englishName": "Honey Dipper",
    "category": "Инструменты",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_honey_dipper.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "scythe-0",
    "name": "Scythe",
    "englishName": "Scythe",
    "category": "Инструменты",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_scythe.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "clippers-0",
    "name": "Clippers",
    "englishName": "Clippers",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_clippers.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "electro-magnet-0",
    "name": "Electro-Magnet",
    "englishName": "Electro-Magnet",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_electro-magnet.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "magnet-0",
    "name": "Magnet",
    "englishName": "Magnet",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_magnet.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pulsar-0",
    "name": "Pulsar",
    "englishName": "Pulsar",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pulsar.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "rake-0",
    "name": "Rake",
    "englishName": "Rake",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_rake.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "scissors-0",
    "name": "Scissors",
    "englishName": "Scissors",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_scissors.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "scooper-0",
    "name": "Scooper",
    "englishName": "Scooper",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_scooper.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "spark-staff-0",
    "name": "Spark Staff",
    "englishName": "Spark Staff",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_spark_staff.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "super-scooper-0",
    "name": "Super-Scooper",
    "englishName": "Super-Scooper",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_super-scooper.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "vacuum-0",
    "name": "Vacuum",
    "englishName": "Vacuum",
    "category": "Инструменты",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_vacuum.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "gummyballer-0",
    "name": "Gummyballer",
    "englishName": "Gummyballer",
    "category": "Инструменты",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_gummyballer.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "ant-field-stamp-0",
    "name": "Ant Field Stamp",
    "englishName": "Ant Field Stamp",
    "category": "Марки",
    "value": 0.42,
    "valueLow": 0.33,
    "valueHigh": 0.5,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.42,
      0.42
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_ant_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "hub-field-stamp-0",
    "name": "Hub Field Stamp",
    "englishName": "Hub Field Stamp",
    "category": "Марки",
    "value": 0.62,
    "valueLow": 0.5,
    "valueHigh": 0.75,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.62,
      0.62
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_hub_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "bamboo-field-stamp-0",
    "name": "Bamboo Field Stamp",
    "englishName": "Bamboo Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_bamboo_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "blue-flower-field-stamp-0",
    "name": "Blue Flower Field Stamp",
    "englishName": "Blue Flower Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_blue_flower_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cactus-field-stamp-0",
    "name": "Cactus Field Stamp",
    "englishName": "Cactus Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_cactus_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "clover-field-stamp-0",
    "name": "Clover Field Stamp",
    "englishName": "Clover Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_clover_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "coconut-field-stamp-0",
    "name": "Coconut Field Stamp",
    "englishName": "Coconut Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_coconut_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "dandelion-field-stamp-0",
    "name": "Dandelion Field Stamp",
    "englishName": "Dandelion Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_dandelion_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "mountain-top-field-stamp-0",
    "name": "Mountain Top Field Stamp",
    "englishName": "Mountain Top Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_mountain_top_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "mushroom-field-stamp-0",
    "name": "Mushroom Field Stamp",
    "englishName": "Mushroom Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_mushroom_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pineapple-patch-stamp-0",
    "name": "Pineapple Patch Stamp",
    "englishName": "Pineapple Patch Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pineapple_patch_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pumpkin-patch-stamp-0",
    "name": "Pumpkin Patch Stamp",
    "englishName": "Pumpkin Patch Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pumpkin_patch_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "strawberry-field-stamp-0",
    "name": "Strawberry Field Stamp",
    "englishName": "Strawberry Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_strawberry_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "stump-field-stamp-0",
    "name": "Stump Field Stamp",
    "englishName": "Stump Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_stump_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "sunflower-field-stamp-0",
    "name": "Sunflower Field Stamp",
    "englishName": "Sunflower Field Stamp",
    "category": "Марки",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_sunflower_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "rose-field-stamp-0",
    "name": "Rose Field Stamp",
    "englishName": "Rose Field Stamp",
    "category": "Марки",
    "value": 1.12,
    "valueLow": 1.0,
    "valueHigh": 1.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      1.12,
      1.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_rose_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "spider-field-stamp-0",
    "name": "Spider Field Stamp",
    "englishName": "Spider Field Stamp",
    "category": "Марки",
    "value": 1.12,
    "valueLow": 1.0,
    "valueHigh": 1.25,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      1.12,
      1.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_spider_field_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pepper-patch-stamp-0",
    "name": "Pepper Patch Stamp",
    "englishName": "Pepper Patch Stamp",
    "category": "Марки",
    "value": 4.75,
    "valueLow": 4.5,
    "valueHigh": 5.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      4.75,
      4.75
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pepper_patch_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pine-tree-forest-stamp-0",
    "name": "Pine Tree Forest Stamp",
    "englishName": "Pine Tree Forest Stamp",
    "category": "Марки",
    "value": 4.75,
    "valueLow": 4.5,
    "valueHigh": 5.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      4.75,
      4.75
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pine_tree_forest_stamp.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "bbm-from-below-0",
    "name": "BBM From Below (BBM)",
    "englishName": "BBM From Below",
    "category": "Стикеры Пчелождества",
    "value": 29.0,
    "valueLow": 26.5,
    "valueHigh": 31.5,
    "demand": "Хайп",
    "stability": "Растет",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells instantly or near instantly at full value or above. Индикаторы: Sells instantly, people overpay for it, multiple buyers at once.",
    "historicalPrices": [
      29.0,
      29.0
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_bbm_from_below.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "flying-bee-bear-0",
    "name": "Flying Bee Bear",
    "englishName": "Flying Bee Bear",
    "category": "Стикеры Пчелождества",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_flying_bee_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "blue-beesmas-light-0",
    "name": "Blue Beesmas Light",
    "englishName": "Blue Beesmas Light",
    "category": "Стикеры Пчелождества",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_blue_beesmas_light.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "critter-in-a-stocking-0",
    "name": "Critter In A Stocking",
    "englishName": "Critter In A Stocking",
    "category": "Стикеры Пчелождества",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_critter_in_a_stocking.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "green-beesmas-light-0",
    "name": "Green Beesmas Light",
    "englishName": "Green Beesmas Light",
    "category": "Стикеры Пчелождества",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_green_beesmas_light.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "red-beesmas-light-0",
    "name": "Red Beesmas Light",
    "englishName": "Red Beesmas Light",
    "category": "Стикеры Пчелождества",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_red_beesmas_light.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "yellow-beesmas-light-0",
    "name": "Yellow Beesmas Light",
    "englishName": "Yellow Beesmas Light",
    "category": "Стикеры Пчелождества",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_yellow_beesmas_light.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "festive-pufferfish-0",
    "name": "Festive Pufferfish",
    "englishName": "Festive Pufferfish",
    "category": "Стикеры Пчелождества",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_festive_pufferfish.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "festive-pea-0",
    "name": "Festive Pea",
    "englishName": "Festive Pea",
    "category": "Стикеры Пчелождества",
    "value": 0.42,
    "valueLow": 0.33,
    "valueHigh": 0.5,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.42,
      0.42
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_festive_pea.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "flying-festive-bee-0",
    "name": "Flying Festive Bee",
    "englishName": "Flying Festive Bee",
    "category": "Стикеры Пчелождества",
    "value": 1.25,
    "valueLow": 1.0,
    "valueHigh": 1.5,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      1.25,
      1.25
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_flying_festive_bee.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "party-robo-bear-0",
    "name": "Party Robo Bear",
    "englishName": "Party Robo Bear",
    "category": "Стикеры Пчелождества",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_party_robo_bear.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "alert-icon-0",
    "name": "Alert Icon",
    "englishName": "Alert Icon",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_alert_icon.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "atom-symbol-0",
    "name": "Atom Symbol",
    "englishName": "Atom Symbol",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_atom_symbol.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "blue-square-0",
    "name": "Blue Square",
    "englishName": "Blue Square",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_blue_square.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "built-ship-0",
    "name": "Built Ship",
    "englishName": "Built Ship",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_built_ship.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "classic-killroy-0",
    "name": "Classic Killroy",
    "englishName": "Classic Killroy",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_classic_killroy.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "colorful-buttons-0",
    "name": "Colorful Buttons",
    "englishName": "Colorful Buttons",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_colorful_buttons.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cop-and-robber-0",
    "name": "Cop And Robber",
    "englishName": "Cop And Robber",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_cop_and_robber.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "desperate-booth-0",
    "name": "Desperate Booth",
    "englishName": "Desperate Booth",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_desperate_booth.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "evil-pig-0",
    "name": "Evil Pig",
    "englishName": "Evil Pig",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_evil_pig.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "giraffe-0",
    "name": "Giraffe",
    "englishName": "Giraffe",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_giraffe.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "green-check-mark-0",
    "name": "Green Check Mark",
    "englishName": "Green Check Mark",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_green_check_mark.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "green-plus-sign-0",
    "name": "Green Plus Sign",
    "englishName": "Green Plus Sign",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_green_plus_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "green-sell-0",
    "name": "Green Sell",
    "englishName": "Green Sell",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_green_sell.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "grey-shape-companion-0",
    "name": "Grey Shape Companion",
    "englishName": "Grey Shape Companion",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_grey_shape_companion.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "interrobang-block-0",
    "name": "Interrobang Block",
    "englishName": "Interrobang Block",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_interrobang_block.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "killroy-with-hair-0",
    "name": "Killroy With Hair",
    "englishName": "Killroy With Hair",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_killroy_with_hair.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "launching-rocket-0",
    "name": "Launching Rocket",
    "englishName": "Launching Rocket",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_launching_rocket.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "orphan-dog-0",
    "name": "Orphan Dog",
    "englishName": "Orphan Dog",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_orphan_dog.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pizza-delivery-man-0",
    "name": "Pizza Delivery Man",
    "englishName": "Pizza Delivery Man",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pizza_delivery_man.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pyramid-0",
    "name": "Pyramid",
    "englishName": "Pyramid",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pyramid.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "red-x-0",
    "name": "Red X",
    "englishName": "Red X",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_red_x.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "rhubarb-0",
    "name": "Rhubarb",
    "englishName": "Rhubarb",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_rhubarb.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "rubber-duck-0",
    "name": "Rubber Duck",
    "englishName": "Rubber Duck",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_rubber_duck.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "simple-cloud-0",
    "name": "Simple Cloud",
    "englishName": "Simple Cloud",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_simple_cloud.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "simple-skyscraper-0",
    "name": "Simple Skyscraper",
    "englishName": "Simple Skyscraper",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_simple_skyscraper.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "simple-sun-0",
    "name": "Simple Sun",
    "englishName": "Simple Sun",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_simple_sun.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "sprout-0",
    "name": "Sprout",
    "englishName": "Sprout",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_sprout.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "tough-potato-0",
    "name": "Tough Potato",
    "englishName": "Tough Potato",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_tough_potato.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "traffic-light-0",
    "name": "Traffic Light",
    "englishName": "Traffic Light",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_traffic_light.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "yellow-hi-0",
    "name": "Yellow Hi",
    "englishName": "Yellow Hi",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_yellow_hi.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "yellow-umbrella-0",
    "name": "Yellow Umbrella",
    "englishName": "Yellow Umbrella",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_yellow_umbrella.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "yellow-walking-wiggly-person-0",
    "name": "Yellow Walking Wiggly Person",
    "englishName": "Yellow Walking Wiggly Person",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_yellow_walking_wiggly_person.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "young-elf-0",
    "name": "Young Elf",
    "englishName": "Young Elf",
    "category": "Разное",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_young_elf.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "waving-townsperson-0",
    "name": "Waving Townsperson",
    "englishName": "Waving Townsperson",
    "category": "Разное",
    "value": 0.03,
    "valueLow": 0.0,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.03,
      0.03
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_waving_townsperson.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "barcode-0",
    "name": "Barcode",
    "englishName": "Barcode",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_barcode.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "baseball-swing-0",
    "name": "Baseball Swing",
    "englishName": "Baseball Swing",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_baseball_swing.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "doodle-s-0",
    "name": "Doodle S",
    "englishName": "Doodle S",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_doodle_s.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "eighth-note-0",
    "name": "Eighth Note",
    "englishName": "Eighth Note",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_eighth_note.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "fork-and-knife-0",
    "name": "Fork And Knife",
    "englishName": "Fork And Knife",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_fork_and_knife.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "green-circle-0",
    "name": "Green Circle",
    "englishName": "Green Circle",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_green_circle.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "grey-diamond-logo-0",
    "name": "Grey Diamond Logo",
    "englishName": "Grey Diamond Logo",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_grey_diamond_logo.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pale-heart-0",
    "name": "Pale Heart",
    "englishName": "Pale Heart",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pale_heart.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "peace-sign-hand-0",
    "name": "Peace Sign Hand",
    "englishName": "Peace Sign Hand",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_peace_sign_hand.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pink-chair-0",
    "name": "Pink Chair",
    "englishName": "Pink Chair",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pink_chair.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pink-cupcake-0",
    "name": "Pink Cupcake",
    "englishName": "Pink Cupcake",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_pink_cupcake.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "red-palm-hand-0",
    "name": "Red Palm Hand",
    "englishName": "Red Palm Hand",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_red_palm_hand.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "silly-tongue-0",
    "name": "Silly Tongue",
    "englishName": "Silly Tongue",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_silly_tongue.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "simple-mountain-0",
    "name": "Simple Mountain",
    "englishName": "Simple Mountain",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_simple_mountain.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "small-flame-0",
    "name": "Small Flame",
    "englishName": "Small Flame",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_small_flame.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "theatrical-intruder-0",
    "name": "Theatrical Intruder",
    "englishName": "Theatrical Intruder",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_theatrical_intruder.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "thumbs-up-hand-0",
    "name": "Thumbs Up Hand",
    "englishName": "Thumbs Up Hand",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_thumbs_up_hand.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "triple-exclamation-0",
    "name": "Triple Exclamation",
    "englishName": "Triple Exclamation",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_triple_exclamation.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "white-flag-0",
    "name": "White Flag",
    "englishName": "White Flag",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_white_flag.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "window-0",
    "name": "Window",
    "englishName": "Window",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_window.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "yellow-coffee-mug-0",
    "name": "Yellow Coffee Mug",
    "englishName": "Yellow Coffee Mug",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_yellow_coffee_mug.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "yellow-right-arrow-0",
    "name": "Yellow Right Arrow",
    "englishName": "Yellow Right Arrow",
    "category": "Разное",
    "value": 0.04,
    "valueLow": 0.025,
    "valueHigh": 0.05,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.04,
      0.04
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_yellow_right_arrow.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "afk-0",
    "name": "AFK",
    "englishName": "AFK",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_afk.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "grey-raining-cloud-0",
    "name": "Grey Raining Cloud",
    "englishName": "Grey Raining Cloud",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_grey_raining_cloud.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "lightning-0",
    "name": "Lightning",
    "englishName": "Lightning",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_lightning.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "red-wailing-cry-0",
    "name": "Red Wailing Cry",
    "englishName": "Red Wailing Cry",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_red_wailing_cry.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "saturn-0",
    "name": "Saturn",
    "englishName": "Saturn",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_saturn.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "shrugging-heart-0",
    "name": "Shrugging Heart",
    "englishName": "Shrugging Heart",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_shrugging_heart.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "standing-beekeeper-0",
    "name": "Standing Beekeeper",
    "englishName": "Standing Beekeeper",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_standing_beekeeper.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "tiny-house-0",
    "name": "Tiny House",
    "englishName": "Tiny House",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_tiny_house.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "waxing-crescent-moon-0",
    "name": "Waxing Crescent Moon",
    "englishName": "Waxing Crescent Moon",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_waxing_crescent_moon.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "wishbone-0",
    "name": "Wishbone",
    "englishName": "Wishbone",
    "category": "Разное",
    "value": 0.08,
    "valueLow": 0.05,
    "valueHigh": 0.1,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Разное.",
    "historicalPrices": [
      0.08,
      0.08
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_wishbone.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "tnt-0",
    "name": "TNT",
    "englishName": "TNT",
    "category": "Разное",
    "value": 0.1,
    "valueLow": 0.05,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.1,
      0.1
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_tnt.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "small-shield-0",
    "name": "Small Shield",
    "englishName": "Small Shield",
    "category": "Разное",
    "value": 0.12,
    "valueLow": 0.1,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.12,
      0.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_small_shield.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "yellow-left-arrow-0",
    "name": "Yellow Left Arrow",
    "englishName": "Yellow Left Arrow",
    "category": "Разное",
    "value": 0.12,
    "valueLow": 0.1,
    "valueHigh": 0.15,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.12,
      0.12
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_yellow_left_arrow.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "shining-halo-0",
    "name": "Shining Halo",
    "englishName": "Shining Halo",
    "category": "Разное",
    "value": 0.17,
    "valueLow": 0.15,
    "valueHigh": 0.2,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.17,
      0.17
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_shining_halo.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cyan-star-0",
    "name": "Cyan Star",
    "englishName": "Cyan Star",
    "category": "Разное",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_cyan_star.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "palm-tree-0",
    "name": "Palm Tree",
    "englishName": "Palm Tree",
    "category": "Разное",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_palm_tree.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "prehistoric-boar-0",
    "name": "Prehistoric Boar",
    "englishName": "Prehistoric Boar",
    "category": "Разное",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_prehistoric_boar.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "prehistoric-hand-0",
    "name": "Prehistoric Hand",
    "englishName": "Prehistoric Hand",
    "category": "Разное",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is effectively unsellable at its listed value. Индикаторы: No one wants it, only moves with massive underpays, basically dead in the market.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_prehistoric_hand.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "shining-star-0",
    "name": "Shining Star",
    "englishName": "Shining Star",
    "category": "Разное",
    "value": 0.23,
    "valueLow": 0.2,
    "valueHigh": 0.25,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.23,
      0.23
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_shining_star.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cool-backpack-0",
    "name": "Cool Backpack",
    "englishName": "Cool Backpack",
    "category": "Разное",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_cool_backpack.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "hourglass-0",
    "name": "Hourglass",
    "englishName": "Hourglass",
    "category": "Разное",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_hourglass.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "taunting-doodle-person-0",
    "name": "Taunting Doodle Person",
    "englishName": "Taunting Doodle Person",
    "category": "Разное",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_taunting_doodle_person.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "yellow-sticky-hand-0",
    "name": "Yellow Sticky Hand",
    "englishName": "Yellow Sticky Hand",
    "category": "Разное",
    "value": 0.29,
    "valueLow": 0.25,
    "valueHigh": 0.33,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.29,
      0.29
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_yellow_sticky_hand.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "black-diamond-0",
    "name": "Black Diamond",
    "englishName": "Black Diamond",
    "category": "Разное",
    "value": 0.42,
    "valueLow": 0.33,
    "valueHigh": 0.5,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.42,
      0.42
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_black_diamond.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "black-star-0",
    "name": "Black Star",
    "englishName": "Black Star",
    "category": "Разное",
    "value": 0.36,
    "valueLow": 0.33,
    "valueHigh": 0.4,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.36,
      0.36
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_black_star.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "glowing-smile-0",
    "name": "Glowing Smile",
    "englishName": "Glowing Smile",
    "category": "Разное",
    "value": 0.42,
    "valueLow": 0.33,
    "valueHigh": 0.5,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.42,
      0.42
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_glowing_smile.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "jack-0-lantern-0",
    "name": "Jack-0-Lantern",
    "englishName": "Jack-0-Lantern",
    "category": "Разное",
    "value": 0.42,
    "valueLow": 0.33,
    "valueHigh": 0.5,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is slow to sell and often receives lowballs. Индикаторы: Slow to sell, mostly lowballs, few real buyers.",
    "historicalPrices": [
      0.42,
      0.42
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_Jack_0_Lantern.png",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "robot-head-0",
    "name": "Robot Head",
    "englishName": "Robot Head",
    "category": "Разное",
    "value": 0.42,
    "valueLow": 0.33,
    "valueHigh": 0.5,
    "demand": "Низкий",
    "stability": "Падает",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item is unwanted by most players and only sells to niche collectors. Индикаторы: Almost no buyers, only niche players want it, often traded below value.",
    "historicalPrices": [
      0.42,
      0.42
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_robot_head.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "dark-flame-0",
    "name": "Dark Flame",
    "englishName": "Dark Flame",
    "category": "Разное",
    "value": 0.75,
    "valueLow": 0.5,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      0.75,
      0.75
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_dark_flame.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "tornado-0",
    "name": "Tornado",
    "englishName": "Tornado",
    "category": "Разное",
    "value": 0.88,
    "valueLow": 0.75,
    "valueHigh": 1.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      0.88,
      0.88
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_tornado.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "eviction-0",
    "name": "Eviction",
    "englishName": "Eviction",
    "category": "Разное",
    "value": 1.25,
    "valueLow": 1.0,
    "valueHigh": 1.5,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      1.25,
      1.25
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_eviction.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "auryn-0",
    "name": "Auryn",
    "englishName": "Auryn",
    "category": "Разное",
    "value": 1.5,
    "valueLow": 1.0,
    "valueHigh": 2.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Item sells, but not quickly, and value acceptance varies. Индикаторы: Sells, but not quickly, mix of fair offers and lowballs, needs some patience.",
    "historicalPrices": [
      1.5,
      1.5
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_auryn.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "wall-crack-0",
    "name": "Wall Crack",
    "englishName": "Wall Crack",
    "category": "Разное",
    "value": 4.5,
    "valueLow": 4.0,
    "valueHigh": 5.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      4.5,
      4.5
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_wall_crack.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cyan-hilted-sword-0",
    "name": "Cyan Hilted Sword",
    "englishName": "Cyan Hilted Sword",
    "category": "Разное",
    "value": 10.5,
    "valueLow": 10.0,
    "valueHigh": 11.0,
    "demand": "Высокий",
    "stability": "Растет",
    "rarity": "Редкий",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "borderColor": "border-blue-500/30 group-hover:border-blue-500/60",
    "badgeColor": "bg-blue-500/10 text-blue-400 border-blue-500/25",
    "textColor": "text-blue-400",
    "description": "Item usually sells at or near its listed value without struggle. Индикаторы: Sells fast, gets fair offers, lowballs are rare.",
    "historicalPrices": [
      10.5,
      10.5
    ],
    "image": "https://bssmvalues.com/images/Hivesticker_cyan_hilted_sword.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "aquarius-star-sign-0",
    "name": "Aquarius Star Sign (Aquarius)",
    "englishName": "Aquarius Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/aquarius_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "aries-star-sign-0",
    "name": "Aries Star Sign (Aries)",
    "englishName": "Aries Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/aries_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "cancer-star-sign-0",
    "name": "Cancer Star Sign (Cancer)",
    "englishName": "Cancer Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/cancer_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "capricorn-star-sign-0",
    "name": "Capricorn Star Sign (Capricorn)",
    "englishName": "Capricorn Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/capricorn_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "gemini-star-sign-0",
    "name": "Gemini Star Sign (Gemini)",
    "englishName": "Gemini Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/gemini_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "leo-star-sign-0",
    "name": "Leo Star Sign (Leo)",
    "englishName": "Leo Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/leo_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "libra-star-sign-0",
    "name": "Libra Star Sign (Libra)",
    "englishName": "Libra Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/libra_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "pisces-star-sign-0",
    "name": "Pisces Star Sign (Pisces)",
    "englishName": "Pisces Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/pisces_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "sagittarius-star-sign-0",
    "name": "Sagittarius Star Sign (Sagittarius)",
    "englishName": "Sagittarius Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/sagittarius_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "scorpio-star-sign-0",
    "name": "Scorpio Star Sign (Scorpio)",
    "englishName": "Scorpio Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/scorpio_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "taurus-star-sign-0",
    "name": "Taurus Star Sign (Taurus)",
    "englishName": "Taurus Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/taurus_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "virgo-star-sign-0",
    "name": "Virgo Star Sign (Virgo)",
    "englishName": "Virgo Star Sign",
    "category": "Звездные знаки",
    "value": 1.0,
    "valueLow": 1.0,
    "valueHigh": 1.0,
    "demand": "Средний",
    "stability": "Стабильно",
    "rarity": "Обычный",
    "glowColor": "rgba(16, 185, 129, 0.2)",
    "borderColor": "border-emerald-500/20 group-hover:border-emerald-500/50",
    "badgeColor": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "textColor": "text-emerald-400",
    "description": "Стикер из категории Звездные знаки.",
    "historicalPrices": [
      1.0,
      1.0
    ],
    "image": "https://bssmvalues.com/images/virgo_star_sign.webp",
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ]
  },
  {
    "id": "beequip-autumn-sunhat",
    "name": "Осенняя панама",
    "englishName": "Autumn Sunhat",
    "category": "Биквипы",
    "value": 202.5,
    "valueLow": 0.0,
    "valueHigh": 405.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      202.5,
      202.5
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Autumn_Sunhat.png",
    "beequipData": [
      {
        "groupName": "White Field Capacity (Full Waxed)",
        "rolls": [
          {
            "rollName": "10 Wfc",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          },
          {
            "rollName": "11 Wfc",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Низкий"
          },
          {
            "rollName": "12 Wfc",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Средний"
          },
          {
            "rollName": "13 Wfc",
            "valueLow": 18.0,
            "valueHigh": 20.0,
            "value": 19.0,
            "demand": "Высокий"
          },
          {
            "rollName": "14 Wfc",
            "valueLow": 150.0,
            "valueHigh": 150.0,
            "value": 150.0,
            "demand": "Высокий"
          },
          {
            "rollName": "15 Wfc",
            "valueLow": 405.0,
            "valueHigh": 405.0,
            "value": 405.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "White Field Capacity (Unwaxed)",
        "rolls": [
          {
            "rollName": "10 Wfc 3★ Pot",
            "valueLow": 3.0,
            "valueHigh": 3.5,
            "value": 3.25,
            "demand": "Средний"
          },
          {
            "rollName": "10 Wfc 4★ Pot",
            "valueLow": 8.0,
            "valueHigh": 9.0,
            "value": 8.5,
            "demand": "Средний"
          },
          {
            "rollName": "10 Wfc 5★ Pot",
            "valueLow": 36.0,
            "valueHigh": 40.0,
            "value": 38.0,
            "demand": "Высокий"
          },
          {
            "rollName": "8 Wfc 3★ Pot",
            "valueLow": 0.05,
            "valueHigh": 0.1,
            "value": 0.08,
            "demand": "Низкий"
          },
          {
            "rollName": "8 Wfc 4★ Pot",
            "valueLow": 0.2,
            "valueHigh": 0.25,
            "value": 0.23,
            "demand": "Низкий"
          },
          {
            "rollName": "8 Wfc 5★ Pot",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "9 Wfc 3★ Pot",
            "valueLow": 0.2,
            "valueHigh": 0.25,
            "value": 0.23,
            "demand": "Низкий"
          },
          {
            "rollName": "9 Wfc 4★ Pot",
            "valueLow": 2.25,
            "valueHigh": 3.0,
            "value": 2.62,
            "demand": "Средний"
          },
          {
            "rollName": "9 Wfc 5★ Pot",
            "valueLow": 8.0,
            "valueHigh": 9.0,
            "value": 8.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "White Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "White Pollen",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-bandage",
    "name": "Пластырь",
    "englishName": "Bandage",
    "category": "Биквипы",
    "value": 5.03,
    "valueLow": 0.05,
    "valueHigh": 10.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      5.03,
      5.03
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Bandage.png",
    "beequipData": [
      {
        "groupName": "Bee Attack (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1.01x Bee Attack",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 1.01x Bee Attack + 1 Attack (Full Waxed)",
            "valueLow": 8.0,
            "valueHigh": 10.0,
            "value": 9.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 0.05,
            "valueHigh": 0.1,
            "value": 0.08,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-bang-snap",
    "name": "Хлопушка",
    "englishName": "Bang Snap",
    "category": "Биквипы",
    "value": 15.07,
    "valueLow": 0.15,
    "valueHigh": 30.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      15.07,
      15.07
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Bang_Snap.png",
    "beequipData": [
      {
        "groupName": "Blue Bomb + Blue Bomb+ (Full Waxed)",
        "rolls": [
          {
            "rollName": "Blue Bomb + {+Ability from wax} Blue Bomb+",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Buzz Bomb + Blue Bomb+ (Full Waxed)",
        "rolls": [
          {
            "rollName": "Buzz Bomb + {+Ability from wax} Blue Bomb+",
            "valueLow": 4.0,
            "valueHigh": 6.0,
            "value": 5.0,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Buzz Bomb + Buzz Bomb+ (Full Waxed)",
        "rolls": [
          {
            "rollName": "Buzz Bomb + {+Ability from wax} Buzz Bomb+",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "≤5★ Pot",
            "valueLow": 0.15,
            "valueHigh": 0.2,
            "value": 0.17,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Red Bomb + Red Bomb+ (Full Waxed)",
        "rolls": [
          {
            "rollName": "Standard",
            "valueLow": 30.0,
            "valueHigh": 30.0,
            "value": 30.0,
            "demand": "Средний"
          },
          {
            "rollName": "Red Bomb + {+Ability from wax} Red Bomb+",
            "valueLow": 30.0,
            "valueHigh": 30.0,
            "value": 30.0,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-bead-lizard",
    "name": "Ящерица из бисера",
    "englishName": "Bead Lizard",
    "category": "Биквипы",
    "value": 800.0,
    "valueLow": 0.0,
    "valueHigh": 1600.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      800.0,
      800.0
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Bead_Lizard.png",
    "beequipData": [
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "3★ Pot",
            "valueLow": 1.33,
            "valueHigh": 1.5,
            "value": 1.42,
            "demand": "Средний"
          },
          {
            "rollName": "4★ Pot",
            "valueLow": 3.0,
            "valueHigh": 3.5,
            "value": 3.25,
            "demand": "Высокий"
          },
          {
            "rollName": "≤2★ Pot",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Token Link (Full Waxed)",
        "rolls": [
          {
            "rollName": "Token Link",
            "valueLow": 4.0,
            "valueHigh": 6.0,
            "value": 5.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Token Link + Gathering Bubble Chance (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Token Link + 15 Gbc",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + 16 Gbc",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + 17 Gbc",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + 18 Gbc",
            "valueLow": 13.0,
            "valueHigh": 15.0,
            "value": 14.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + 19 Gbc",
            "valueLow": 25.0,
            "valueHigh": 28.0,
            "value": 26.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + ≤ 14 Gbc",
            "valueLow": 4.0,
            "valueHigh": 6.0,
            "value": 5.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Token Link + {HB} Bee Ability Pollen + Gathering Bubble Chance (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bap + 15 Gbc",
            "valueLow": 49.0,
            "valueHigh": 50.0,
            "value": 49.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bap + 16 Gbc",
            "valueLow": 51.0,
            "valueHigh": 52.0,
            "value": 51.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bap + 17 Gbc",
            "valueLow": 53.0,
            "valueHigh": 54.0,
            "value": 53.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bap + 18 Gbc",
            "valueLow": 55.0,
            "valueHigh": 56.0,
            "value": 55.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bap + ≤ 14 Gbc",
            "valueLow": 44.0,
            "valueHigh": 48.0,
            "value": 46.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bap",
            "valueLow": 405.0,
            "valueHigh": 405.0,
            "value": 405.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Token Link + {HB} Bee Ability Pollen + {HB} Bubble Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bap + {HB} 1 Bp",
            "valueLow": 80.0,
            "valueHigh": 80.0,
            "value": 80.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bap + {HB} 2 Bp",
            "valueLow": 300.0,
            "valueHigh": 300.0,
            "value": 300.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bap + {HB} 1 Bp",
            "valueLow": 700.0,
            "valueHigh": 700.0,
            "value": 700.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bap + {HB} 2 Bp",
            "valueLow": 1600.0,
            "valueHigh": 1600.0,
            "value": 1600.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Token Link + {HB} Bee Ability Pollen + {HB} Flame Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bap + {HB} 1 Fp",
            "valueLow": 45.0,
            "valueHigh": 45.0,
            "value": 45.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bap + {HB} 2 Fp",
            "valueLow": 80.0,
            "valueHigh": 80.0,
            "value": 80.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Fp",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bap + {HB} 1 Fp",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bap + {HB} 2 Fp",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Fp",
            "valueLow": 14.0,
            "valueHigh": 16.0,
            "value": 15.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 3 Fp",
            "valueLow": 30.0,
            "valueHigh": 35.0,
            "value": 32.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Token Link + {HB} Bubble Pollen + Gathering Bubble Chance (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bp + 15 Gbc",
            "valueLow": 11.0,
            "valueHigh": 12.0,
            "value": 11.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bp + 16 Gbc",
            "valueLow": 13.0,
            "valueHigh": 14.0,
            "value": 13.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bp + 17 Gbc",
            "valueLow": 15.0,
            "valueHigh": 16.0,
            "value": 15.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bp + 18 Gbc",
            "valueLow": 18.0,
            "valueHigh": 20.0,
            "value": 19.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Bp + ≤ 14 Gbc",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bp + 15 Gbc",
            "valueLow": 44.0,
            "valueHigh": 45.0,
            "value": 44.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bp + 16 Gbc",
            "valueLow": 46.0,
            "valueHigh": 47.0,
            "value": 46.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bp + 17 Gbc",
            "valueLow": 48.0,
            "valueHigh": 49.0,
            "value": 48.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bp + 18 Gbc",
            "valueLow": 50.0,
            "valueHigh": 52.0,
            "value": 51.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Bp + ≤ 14 Gbc",
            "valueLow": 42.0,
            "valueHigh": 43.0,
            "value": 42.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 3 Bp + ≤ 15 Gbc",
            "valueLow": 115.0,
            "valueHigh": 115.0,
            "value": 115.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "{HB} Bee Ability Pollen NO Token Link (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 2 Bee Ability Pollen",
            "valueLow": 35.0,
            "valueHigh": 35.0,
            "value": 35.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 3 Bee Ability Pollen",
            "valueLow": 110.0,
            "valueHigh": 110.0,
            "value": 110.0,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-beesmas-top",
    "name": "Новогодний волчок",
    "englishName": "Beesmas Top",
    "category": "Биквипы",
    "value": 122.58,
    "valueLow": 0.15,
    "valueHigh": 245.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      122.58,
      122.58
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Beesmas_Top.png",
    "beequipData": [
      {
        "groupName": "Critical Power (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 6 Critical Power",
            "valueLow": 0.25,
            "valueHigh": 0.33,
            "value": 0.29,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 7 Critical Power",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 8 Critical Power",
            "valueLow": 24.0,
            "valueHigh": 28.0,
            "value": 26.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 9 Critical Power",
            "valueLow": 245.0,
            "valueHigh": 245.0,
            "value": 245.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 0.15,
            "valueHigh": 0.2,
            "value": 0.17,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-beesmas-tree-hat",
    "name": "Шапка в виде ёлки",
    "englishName": "Beesmas Tree Hat",
    "category": "Биквипы",
    "value": 32.5,
    "valueLow": 0.0,
    "valueHigh": 65.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      32.5,
      32.5
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Beesmas_Tree_Hat.png",
    "beequipData": [
      {
        "groupName": "Convert Rate At Hive (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 4.5-5 Crah",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 5.1-5.5 Crah",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 5.6-6 Crah",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 6.1-6.5 Crah",
            "valueLow": 2.0,
            "valueHigh": 3.5,
            "value": 2.75,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 6.6-6.9 Crah",
            "valueLow": 4.0,
            "valueHigh": 5.5,
            "value": 4.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7 Crah",
            "valueLow": 7.5,
            "valueHigh": 9.0,
            "value": 8.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.1 Crah",
            "valueLow": 25.0,
            "valueHigh": 27.0,
            "value": 26.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.2 Crah",
            "valueLow": 28.0,
            "valueHigh": 30.0,
            "value": 29.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.3 Crah",
            "valueLow": 31.0,
            "valueHigh": 33.0,
            "value": 32.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.4 Crah",
            "valueLow": 35.0,
            "valueHigh": 38.0,
            "value": 36.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.5 Crah",
            "valueLow": 40.0,
            "valueHigh": 43.0,
            "value": 41.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.6 Crah",
            "valueLow": 45.0,
            "valueHigh": 48.0,
            "value": 46.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7.7 Crah",
            "valueLow": 50.0,
            "valueHigh": 53.0,
            "value": 51.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 7.8 Crah",
            "valueLow": 54.0,
            "valueHigh": 57.0,
            "value": 55.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 7.9 Crah",
            "valueLow": 60.0,
            "valueHigh": 60.0,
            "value": 60.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} ≥ 8 Crah",
            "valueLow": 65.0,
            "valueHigh": 65.0,
            "value": 65.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "Note: Base Convert Amount of 19-20% Multiplies the Value by 1.5-2x",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4-4.4 Crah 4★ Pot",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4-4.4 Crah 5★ Pot (Unwaxed)",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4.5-4.9 Crah 4★ Pot (Unwaxed)",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4.5-4.9 Crah 5★ Pot (Unwaxed)",
            "valueLow": 3.0,
            "valueHigh": 5.0,
            "value": 4.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 Crah 4★ Pot (Unwaxed)",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 Crah 5★ Pot (Unwaxed)",
            "valueLow": 6.0,
            "valueHigh": 8.0,
            "value": 7.0,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-beret",
    "name": "Берет",
    "englishName": "Beret",
    "category": "Биквипы",
    "value": 202.62,
    "valueLow": 0.25,
    "valueHigh": 405.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      202.62,
      202.62
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Beret.png",
    "beequipData": [
      {
        "groupName": "Blue Boost (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Blue Boost",
            "valueLow": 11.0,
            "valueHigh": 13.0,
            "value": 12.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Blue Field Capacity (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bfc",
            "valueLow": 0.33,
            "valueHigh": 0.5,
            "value": 0.42,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 2 Bfc",
            "valueLow": 2.5,
            "valueHigh": 3.0,
            "value": 2.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 Bfc",
            "valueLow": 18.0,
            "valueHigh": 20.0,
            "value": 19.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 Bfc",
            "valueLow": 75.0,
            "valueHigh": 80.0,
            "value": 77.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 5 Bfc",
            "valueLow": 405.0,
            "valueHigh": 405.0,
            "value": 405.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Blue Field Capacity + Capacity (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bfc + {HB} 1 Cap",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 1 Bfc + {HB} 2 Cap",
            "valueLow": 10.0,
            "valueHigh": 11.0,
            "value": 10.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 1 Bfc + {HB} 3 Cap",
            "valueLow": 27.0,
            "valueHigh": 30.0,
            "value": 28.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 2 Bfc + {HB} 1 Cap",
            "valueLow": 12.0,
            "valueHigh": 14.0,
            "value": 13.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 2 Bfc + {HB} 2 Cap",
            "valueLow": 44.0,
            "valueHigh": 48.0,
            "value": 46.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 2 Bfc + {HB} 3 Cap",
            "valueLow": 175.0,
            "valueHigh": 175.0,
            "value": 175.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 Bfc + {HB} 1 Cap",
            "valueLow": 60.0,
            "valueHigh": 65.0,
            "value": 62.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 Bfc + {HB} 2 Cap",
            "valueLow": 250.0,
            "valueHigh": 250.0,
            "value": 250.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Capacity (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Cap",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 2 Cap",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 3 Cap",
            "valueLow": 13.0,
            "valueHigh": 15.0,
            "value": 14.0,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Средний"
          },
          {
            "rollName": "≤4★ Pot",
            "valueLow": 0.25,
            "valueHigh": 0.33,
            "value": 0.29,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-bottle-cap",
    "name": "Крышка от бутылки",
    "englishName": "Bottle Cap",
    "category": "Биквипы",
    "value": 1.52,
    "valueLow": 0.05,
    "valueHigh": 3.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      1.52,
      1.52
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Bottle_Cap.png",
    "beequipData": [
      {
        "groupName": "Buzz Bomb (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Buzz Bomb",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 0.05,
            "valueHigh": 0.1,
            "value": 0.08,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-bubble-light",
    "name": "Пузырьковый фонарик",
    "englishName": "Bubble Light",
    "category": "Биквипы",
    "value": 82.58,
    "valueLow": 0.15,
    "valueHigh": 165.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      82.58,
      82.58
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Bubble_Light.png",
    "beequipData": [
      {
        "groupName": "Bee Movespeed (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bee Movespeed",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 2 Bee Movespeed",
            "valueLow": 165.0,
            "valueHigh": 165.0,
            "value": 165.0,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "≤5★ Pot",
            "valueLow": 0.15,
            "valueHigh": 0.2,
            "value": 0.17,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-camo-bandana",
    "name": "Камуфляжная бандана",
    "englishName": "Camo Bandana",
    "category": "Биквипы",
    "value": 10.03,
    "valueLow": 0.05,
    "valueHigh": 20.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      10.03,
      10.03
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Camo_Bandana.png",
    "beequipData": [
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 0.15,
            "valueHigh": 0.2,
            "value": 0.17,
            "demand": "Низкий"
          },
          {
            "rollName": "≤4★ Pot",
            "valueLow": 0.05,
            "valueHigh": 0.1,
            "value": 0.08,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Super Crit Power (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Scp",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 2 Scp",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 3 Scp",
            "valueLow": 20.0,
            "valueHigh": 20.0,
            "value": 20.0,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-camphor-lip-balm",
    "name": "Камфорный бальзам",
    "englishName": "Camphor Lip Balm",
    "category": "Биквипы",
    "value": 1500.05,
    "valueLow": 0.1,
    "valueHigh": 3000.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      1500.05,
      1500.05
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Camphor_Lip_Balm.png",
    "beequipData": [
      {
        "groupName": "Bubble Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 15 Bp",
            "valueLow": 0.1,
            "valueHigh": 0.25,
            "value": 0.17,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 16 Bp",
            "valueLow": 0.5,
            "valueHigh": 1.5,
            "value": 1.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 17 Bp",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 18 Bp",
            "valueLow": 8.0,
            "valueHigh": 9.0,
            "value": 8.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 19 Bp",
            "valueLow": 18.0,
            "valueHigh": 22.0,
            "value": 20.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 20 Bp",
            "valueLow": 45.0,
            "valueHigh": 45.0,
            "value": 45.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Bubble Pollen + Gold Bubble Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 14 Bp + 3 Gbp",
            "valueLow": 11.0,
            "valueHigh": 12.0,
            "value": 11.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 14 Bp + 4 Gbp",
            "valueLow": 20.0,
            "valueHigh": 22.0,
            "value": 21.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 14 Bp + 5 Gbp",
            "valueLow": 42.0,
            "valueHigh": 45.0,
            "value": 43.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 14 Bp + 6 Gbp",
            "valueLow": 90.0,
            "valueHigh": 95.0,
            "value": 92.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 15 Bp + 2 Gbp",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 15 Bp + 3 Gbp",
            "valueLow": 17.0,
            "valueHigh": 19.0,
            "value": 18.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 15 Bp + 4 Gbp",
            "valueLow": 37.0,
            "valueHigh": 40.0,
            "value": 38.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 15 Bp + 5 Gbp",
            "valueLow": 82.0,
            "valueHigh": 86.0,
            "value": 84.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 15 Bp + 6 Gbp",
            "valueLow": 175.0,
            "valueHigh": 185.0,
            "value": 180.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 16 Bp + 2 Gbp",
            "valueLow": 14.0,
            "valueHigh": 15.0,
            "value": 14.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 16 Bp + 3 Gbp",
            "valueLow": 30.0,
            "valueHigh": 32.0,
            "value": 31.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 16 Bp + 4 Gbp",
            "valueLow": 68.0,
            "valueHigh": 72.0,
            "value": 70.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 16 Bp + 5 Gbp",
            "valueLow": 150.0,
            "valueHigh": 160.0,
            "value": 155.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 16 Bp + 6 Gbp",
            "valueLow": 300.0,
            "valueHigh": 310.0,
            "value": 305.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 17 Bp + 2 Gbp",
            "valueLow": 28.0,
            "valueHigh": 30.0,
            "value": 29.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 17 Bp + 3 Gbp",
            "valueLow": 60.0,
            "valueHigh": 65.0,
            "value": 62.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 17 Bp + 4 Gbp",
            "valueLow": 135.0,
            "valueHigh": 140.0,
            "value": 137.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 17 Bp + 5 Gbp",
            "valueLow": 280.0,
            "valueHigh": 290.0,
            "value": 285.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 17 Bp + 6 Gbp",
            "valueLow": 550.0,
            "valueHigh": 550.0,
            "value": 550.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 18 Bp + 2 Gbp",
            "valueLow": 46.0,
            "valueHigh": 50.0,
            "value": 48.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 18 Bp + 3 Gbp",
            "valueLow": 120.0,
            "valueHigh": 130.0,
            "value": 125.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 18 Bp + 4 Gbp",
            "valueLow": 250.0,
            "valueHigh": 260.0,
            "value": 255.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 18 Bp + 5 Gbp",
            "valueLow": 500.0,
            "valueHigh": 525.0,
            "value": 512.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 18 Bp + 6 Gbp",
            "valueLow": 1000.0,
            "valueHigh": 1000.0,
            "value": 1000.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 19 Bp + 2 Gbp",
            "valueLow": 40.0,
            "valueHigh": 44.0,
            "value": 42.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 19 Bp + 3 Gbp",
            "valueLow": 220.0,
            "valueHigh": 235.0,
            "value": 227.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 19 Bp + 4 Gbp",
            "valueLow": 465.0,
            "valueHigh": 480.0,
            "value": 472.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 19 Bp + 5 Gbp",
            "valueLow": 925.0,
            "valueHigh": 950.0,
            "value": 937.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 19 Bp + 6 Gbp",
            "valueLow": 1800.0,
            "valueHigh": 1800.0,
            "value": 1800.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} ≤ 14 Bp + 2 Gbp",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Pepper Patch Pollen + {HB} Honey From Instant Conversion (Full Waxed)",
        "rolls": [
          {
            "rollName": "Standard",
            "valueLow": 34.0,
            "valueHigh": 36.0,
            "value": 35.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1.04 Pepper Patch Pollen + {HB} Honey From Instant Conversion",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 1.05 Pepper Patch Pollen + {HB} Honey From Instant Conversion",
            "valueLow": 2.0,
            "valueHigh": 4.0,
            "value": 3.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 1.06 Pepper Patch Pollen + {HB} Honey From Instant Conversion",
            "valueLow": 27.0,
            "valueHigh": 28.0,
            "value": 27.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1.07 Pepper Patch Pollen + {HB} Honey From Instant Conversion",
            "valueLow": 420.0,
            "valueHigh": 440.0,
            "value": 430.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1.08 Pepper Patch Pollen + {HB} Honey From Instant Conversion",
            "valueLow": 3000.0,
            "valueHigh": 3000.0,
            "value": 3000.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Pepper Patch Pollen / Bubble Pollen (Unwaxed)",
        "rolls": [
          {
            "rollName": "{HB} 1.05 Ppp 4★ Pot",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 1.05 Ppp 5★ Pot",
            "valueLow": 20.0,
            "valueHigh": 22.0,
            "value": 21.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1.05 Ppp ≤3★ Pot",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 14 Bubble Pollen 4★ Pot",
            "valueLow": 2.5,
            "valueHigh": 4.0,
            "value": 3.25,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 14 Bubble Pollen 5★ Pot",
            "valueLow": 8.0,
            "valueHigh": 9.0,
            "value": 8.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 14 Bubble Pollen ≤3★ Pot",
            "valueLow": 1.25,
            "valueHigh": 1.5,
            "value": 1.38,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 15 Bubble Pollen 4★ Pot",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 15 Bubble Pollen 5★ Pot",
            "valueLow": 22.0,
            "valueHigh": 24.0,
            "value": 23.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 15 Bubble Pollen ≤3★ Pot",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} ≤ 13 Bubble Pollen 4★ Pot",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 13 Bubble Pollen 5★ Pot",
            "valueLow": 2.5,
            "valueHigh": 3.0,
            "value": 2.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 13 Bubble Pollen ≤3★ Pot",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "{HB} Pepper Patch Pollen",
        "rolls": [
          {
            "rollName": "{HB} 1.06 Pepper Patch Pollen",
            "valueLow": 2.0,
            "valueHigh": 4.0,
            "value": 3.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 1.07 Pepper Patch Pollen",
            "valueLow": 33.0,
            "valueHigh": 36.0,
            "value": 34.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1.08 Pepper Patch Pollen",
            "valueLow": 525.0,
            "valueHigh": 550.0,
            "value": 537.5,
            "demand": "Хайп"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-candy-ring",
    "name": "Конфетное кольцо",
    "englishName": "Candy Ring",
    "category": "Биквипы",
    "value": 750.12,
    "valueLow": 0.25,
    "valueHigh": 1500.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      750.12,
      750.12
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Candy_Ring.png",
    "beequipData": [
      {
        "groupName": "Honey At Hive (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 10 HaH",
            "valueLow": 115.0,
            "valueHigh": 125.0,
            "value": 120.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 11 HaH",
            "valueLow": 320.0,
            "valueHigh": 335.0,
            "value": 327.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 12 HaH",
            "valueLow": 600.0,
            "valueHigh": 600.0,
            "value": 600.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 13 HaH",
            "valueLow": 1500.0,
            "valueHigh": 1500.0,
            "value": 1500.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 5 HaH",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 6 HaH",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7 HaH",
            "valueLow": 9.0,
            "valueHigh": 11.0,
            "value": 10.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 8 HaH",
            "valueLow": 18.0,
            "valueHigh": 20.0,
            "value": 19.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 HaH",
            "valueLow": 32.0,
            "valueHigh": 36.0,
            "value": 34.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Honey At Hive (Unwaxed)",
        "rolls": [
          {
            "rollName": "{HB} 4 HaH 4★ Pot",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 HaH 5★ Pot",
            "valueLow": 15.0,
            "valueHigh": 16.0,
            "value": 15.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 HaH ≤3★ Pot",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 HaH 4★ Pot",
            "valueLow": 16.0,
            "valueHigh": 18.0,
            "value": 17.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 5 HaH 5★ Pot",
            "valueLow": 30.0,
            "valueHigh": 32.0,
            "value": 31.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 5 HaH ≤3★ Pot",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 3 HaH 4★ Pot",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} ≤ 3 HaH 5★ Pot",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Honey From Token + Honey Per Goo (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} x1.01 Hft + {HB} 1 Hpg",
            "valueLow": 145.0,
            "valueHigh": 150.0,
            "value": 147.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} x1.01 Hft + {HB} 2 Hpg",
            "valueLow": 200.0,
            "valueHigh": 210.0,
            "value": 205.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} x1.01 Hft + {HB} 3 Hpg",
            "valueLow": 1215.0,
            "valueHigh": 1215.0,
            "value": 1215.0,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Honey Per Goo (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 3 Hpg",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 Hpg",
            "valueLow": 18.0,
            "valueHigh": 20.0,
            "value": 19.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 5 Hpg",
            "valueLow": 120.0,
            "valueHigh": 120.0,
            "value": 120.0,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-charm-bracelet",
    "name": "Браслет с шармами",
    "englishName": "Charm Bracelet",
    "category": "Биквипы",
    "value": 140.38,
    "valueLow": 0.75,
    "valueHigh": 280.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      140.38,
      140.38
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Charm_Bracelet.png",
    "beequipData": [
      {
        "groupName": "Melody + Ability Rate (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Melody + 3 Ar",
            "valueLow": 125.0,
            "valueHigh": 130.0,
            "value": 127.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Melody + 4 Ar",
            "valueLow": 135.0,
            "valueHigh": 140.0,
            "value": 137.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Melody + 5 Ar",
            "valueLow": 145.0,
            "valueHigh": 150.0,
            "value": 147.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Melody + 6 Ar",
            "valueLow": 190.0,
            "valueHigh": 190.0,
            "value": 190.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Melody + Ability Rate + Honey At Hive (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Melody + {HB} HaH + 5 Ar",
            "valueLow": 190.0,
            "valueHigh": 195.0,
            "value": 192.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Melody + {HB} HaH + 6 Ar",
            "valueLow": 230.0,
            "valueHigh": 230.0,
            "value": 230.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Melody + {HB} HaH + ≤ 4 Ar",
            "valueLow": 170.0,
            "valueHigh": 175.0,
            "value": 172.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Melody + Ability Rate + Honey At Hive + Convert Rate At Hive (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Melody + {HB} HaH + {HB} Crah + 5 Ar",
            "valueLow": 240.0,
            "valueHigh": 245.0,
            "value": 242.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Melody + {HB} HaH + {HB} Crah + 6 Ar",
            "valueLow": 280.0,
            "valueHigh": 280.0,
            "value": 280.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Melody + {HB} HaH + {HB} Crah ≤ + 4 Ar",
            "valueLow": 220.0,
            "valueHigh": 225.0,
            "value": 222.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Melody + Ability Rate + Honey From Tokens (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Melody + Hft + 5 Ar",
            "valueLow": 205.0,
            "valueHigh": 210.0,
            "value": 207.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Melody + Hft + 6 Ar",
            "valueLow": 240.0,
            "valueHigh": 240.0,
            "value": 240.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Melody + Hft + ≤ 4 Ar",
            "valueLow": 190.0,
            "valueHigh": 195.0,
            "value": 192.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "3★ Pot",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Высокий"
          },
          {
            "rollName": "4★ Pot",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Хайп"
          },
          {
            "rollName": "≤2★ Pot",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-demon-talisman",
    "name": "Талисман демона",
    "englishName": "Demon Talisman",
    "category": "Биквипы",
    "value": 163.75,
    "valueLow": 0.0,
    "valueHigh": 327.5,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      163.75,
      163.75
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/demon_talisman_1782076177517_45407b06.webp",
    "beequipData": [
      {
        "groupName": "Inferno (Full Waxed)",
        "rolls": [
          {
            "rollName": "Inferno",
            "valueLow": 327.5,
            "valueHigh": 327.5,
            "value": 327.5,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "Standard",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          },
          {
            "rollName": "3★ Pot",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Низкий"
          },
          {
            "rollName": "4★ Pot",
            "valueLow": 1.25,
            "valueHigh": 1.5,
            "value": 1.38,
            "demand": "Низкий"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 2.0,
            "valueHigh": 2.5,
            "value": 2.25,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-electric-candle",
    "name": "Электрическая свеча",
    "englishName": "Electric Candle",
    "category": "Биквипы",
    "value": 0.0,
    "valueLow": 0.0,
    "valueHigh": 0.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      0.0,
      0.0
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Electric_Candle.png",
    "beequipData": [
      {
        "groupName": "Base (Full Waxed)",
        "rolls": [
          {
            "rollName": "Base",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "≤5★ Pot",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-elf-cap",
    "name": "Колпак эльфа",
    "englishName": "Elf Cap",
    "category": "Биквипы",
    "value": 300.12,
    "valueLow": 0.25,
    "valueHigh": 600.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      300.12,
      300.12
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Elf_Cap.png",
    "beequipData": [
      {
        "groupName": "Honey At Hive (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 2 HaH",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 3 HaH",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 HaH",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 HaH",
            "valueLow": 25.0,
            "valueHigh": 28.0,
            "value": 26.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 6 HaH",
            "valueLow": 100.0,
            "valueHigh": 105.0,
            "value": 102.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 7 HaH",
            "valueLow": 275.0,
            "valueHigh": 275.0,
            "value": 275.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 8 HaH",
            "valueLow": 600.0,
            "valueHigh": 600.0,
            "value": 600.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 0.25,
            "valueHigh": 0.33,
            "value": 0.29,
            "demand": "Средний"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Высокий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-festive-wreath",
    "name": "Праздничный венок",
    "englishName": "Festive Wreath",
    "category": "Биквипы",
    "value": 110.0,
    "valueLow": 0.0,
    "valueHigh": 220.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      110.0,
      110.0
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Festive_Wreath.png",
    "beequipData": [
      {
        "groupName": "Honey At Hive (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 HaH",
            "valueLow": 10.0,
            "valueHigh": 12.0,
            "value": 11.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 2 HaH",
            "valueLow": 50.0,
            "valueHigh": 55.0,
            "value": 52.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 HaH",
            "valueLow": 210.0,
            "valueHigh": 220.0,
            "value": 215.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 HaH",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 5 HaH",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 6 HaH",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Mark Duration (Full Waxed)",
        "rolls": [
          {
            "rollName": "10 Md",
            "valueLow": 13.0,
            "valueHigh": 14.0,
            "value": 13.5,
            "demand": "Высокий"
          },
          {
            "rollName": "7 Md",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Высокий"
          },
          {
            "rollName": "8 Md",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Высокий"
          },
          {
            "rollName": "9 Md",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Высокий"
          },
          {
            "rollName": "≤6 Md",
            "valueLow": 2.0,
            "valueHigh": 4.0,
            "value": 3.0,
            "demand": "Высокий"
          },
          {
            "rollName": "≥11 Md",
            "valueLow": 17.0,
            "valueHigh": 18.0,
            "value": 17.5,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Mark Duration (Unwaxed)",
        "rolls": [
          {
            "rollName": "7 Md 4★ Pot",
            "valueLow": 3.0,
            "valueHigh": 3.5,
            "value": 3.25,
            "demand": "Средний"
          },
          {
            "rollName": "7 Md 5★ Pot",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Средний"
          },
          {
            "rollName": "7 Md ≤3★ Pot",
            "valueLow": 2.0,
            "valueHigh": 2.5,
            "value": 2.25,
            "demand": "Средний"
          },
          {
            "rollName": "8 Md 4★ Pot",
            "valueLow": 4.0,
            "valueHigh": 4.5,
            "value": 4.25,
            "demand": "Средний"
          },
          {
            "rollName": "8 Md 5★ Pot",
            "valueLow": 6.0,
            "valueHigh": 6.5,
            "value": 6.25,
            "demand": "Средний"
          },
          {
            "rollName": "8 Md ≤3★ Pot",
            "valueLow": 2.5,
            "valueHigh": 3.0,
            "value": 2.75,
            "demand": "Средний"
          },
          {
            "rollName": "≤6 Md 4★ Pot",
            "valueLow": 2.0,
            "valueHigh": 2.5,
            "value": 2.25,
            "demand": "Средний"
          },
          {
            "rollName": "≤6 Md 5★ Pot",
            "valueLow": 3.5,
            "valueHigh": 4.0,
            "value": 3.75,
            "demand": "Средний"
          },
          {
            "rollName": "≤6 Md ≤3★ Pot",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Mark Duration + Ability Rate (Full Waxed)",
        "rolls": [
          {
            "rollName": "10 Md + Ar",
            "valueLow": 24.0,
            "valueHigh": 26.0,
            "value": 25.0,
            "demand": "Хайп"
          },
          {
            "rollName": "7 Md + Ar",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Высокий"
          },
          {
            "rollName": "8 Md + Ar",
            "valueLow": 12.0,
            "valueHigh": 13.0,
            "value": 12.5,
            "demand": "Высокий"
          },
          {
            "rollName": "9 Md + Ar",
            "valueLow": 16.0,
            "valueHigh": 17.0,
            "value": 16.5,
            "demand": "Высокий"
          },
          {
            "rollName": "≤6 Md + Ar",
            "valueLow": 4.0,
            "valueHigh": 6.0,
            "value": 5.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Mark Duration + Ability Rate (Unwaxed)",
        "rolls": [
          {
            "rollName": "6 Md + Ar 4★ Pot",
            "valueLow": 4.0,
            "valueHigh": 4.5,
            "value": 4.25,
            "demand": "Средний"
          },
          {
            "rollName": "6 Md + Ar 5★ Pot",
            "valueLow": 6.0,
            "valueHigh": 7.0,
            "value": 6.5,
            "demand": "Средний"
          },
          {
            "rollName": "7 Md + Ar 4★ Pot",
            "valueLow": 6.0,
            "valueHigh": 7.0,
            "value": 6.5,
            "demand": "Средний"
          },
          {
            "rollName": "7 Md + Ar 5★ Pot",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Высокий"
          },
          {
            "rollName": "8 Md + Ar 4★ Pot",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Высокий"
          },
          {
            "rollName": "8 Md + Ar 5★ Pot",
            "valueLow": 12.0,
            "valueHigh": 13.0,
            "value": 12.5,
            "demand": "Высокий"
          },
          {
            "rollName": "≤5 Md + Ar 4★ Pot",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Средний"
          },
          {
            "rollName": "≤5 Md + Ar 5★ Pot",
            "valueLow": 4.0,
            "valueHigh": 4.5,
            "value": 4.25,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Ticket Chance (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Ticket Chance",
            "valueLow": 10.0,
            "valueHigh": 11.0,
            "value": 10.5,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-icicles",
    "name": "Сосульки",
    "englishName": "Icicles",
    "category": "Биквипы",
    "value": 202.53,
    "valueLow": 0.05,
    "valueHigh": 405.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      202.53,
      202.53
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Icicles.png",
    "beequipData": [
      {
        "groupName": "Blue Bomb Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 6 Blue Bomb Pollen",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 7 Blue Bomb Pollen",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} ≥ 7.5 Blue Bomb Pollen",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Monster Respawn Time (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Monster Respawn Time",
            "valueLow": 1.0,
            "valueHigh": 3.0,
            "value": 2.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 2 Monster Respawn Time",
            "valueLow": 30.0,
            "valueHigh": 30.0,
            "value": 30.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 Monster Respawn Time",
            "valueLow": 405.0,
            "valueHigh": 405.0,
            "value": 405.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 0.15,
            "valueHigh": 0.2,
            "value": 0.17,
            "demand": "Низкий"
          },
          {
            "rollName": "≤4★ Pot",
            "valueLow": 0.05,
            "valueHigh": 0.1,
            "value": 0.08,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-kazoo",
    "name": "Казу",
    "englishName": "Kazoo",
    "category": "Биквипы",
    "value": 1000.25,
    "valueLow": 0.5,
    "valueHigh": 2000.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      1000.25,
      1000.25
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Kazoo.png",
    "beequipData": [
      {
        "groupName": "Base Critical Power (Unwaxed)",
        "rolls": [
          {
            "rollName": "{HB} 2 Ctp 4★ Pot",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 2 Ctp 5★ Pot",
            "valueLow": 10.0,
            "valueHigh": 13.0,
            "value": 11.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 3 Ctp 4★ Pot",
            "valueLow": 8.0,
            "valueHigh": 10.0,
            "value": 9.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 3 Ctp 5★ Pot",
            "valueLow": 15.0,
            "valueHigh": 18.0,
            "value": 16.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 4 Ctp 4★ Pot",
            "valueLow": 22.0,
            "valueHigh": 25.0,
            "value": 23.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 4 Ctp 5★ Pot",
            "valueLow": 30.0,
            "valueHigh": 35.0,
            "value": 32.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 5 Ctp 4★ Pot",
            "valueLow": 40.0,
            "valueHigh": 45.0,
            "value": 42.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 5 Ctp 5★ Pot",
            "valueLow": 60.0,
            "valueHigh": 60.0,
            "value": 60.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Critical Power (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 3 Ctp",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 Ctp",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 5 Ctp",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 Ctp",
            "valueLow": 30.0,
            "valueHigh": 33.0,
            "value": 31.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 Ctp",
            "valueLow": 80.0,
            "valueHigh": 80.0,
            "value": 80.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "No base HB (Unwaxed)",
        "rolls": [
          {
            "rollName": "No base Ctp 4★ Pot",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Высокий"
          },
          {
            "rollName": "No base Ctp 5★ Pot",
            "valueLow": 6.0,
            "valueHigh": 8.0,
            "value": 7.0,
            "demand": "Хайп"
          },
          {
            "rollName": "No base Ctp ≤3★ Pot",
            "valueLow": 0.5,
            "valueHigh": 1.5,
            "value": 1.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Super Crit Power (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Scp",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 2 Scp",
            "valueLow": 45.0,
            "valueHigh": 50.0,
            "value": 47.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Scp",
            "valueLow": 200.0,
            "valueHigh": 200.0,
            "value": 200.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Super Crit Power + Critical Power (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Scp + {HB} 1 Ctp",
            "valueLow": 30.0,
            "valueHigh": 35.0,
            "value": 32.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Scp + {HB} 2 Ctp",
            "valueLow": 50.0,
            "valueHigh": 55.0,
            "value": 52.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Scp + {HB} 3 Ctp",
            "valueLow": 70.0,
            "valueHigh": 75.0,
            "value": 72.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scp + {HB} 4 Ctp",
            "valueLow": 105.0,
            "valueHigh": 115.0,
            "value": 110.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scp + {HB} 5 Ctp",
            "valueLow": 185.0,
            "valueHigh": 185.0,
            "value": 185.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 2 Scp + {HB} 1 Ctp",
            "valueLow": 80.0,
            "valueHigh": 90.0,
            "value": 85.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 2 Scp + {HB} 2 Ctp",
            "valueLow": 155.0,
            "valueHigh": 160.0,
            "value": 157.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 2 Scp + {HB} 3 Ctp",
            "valueLow": 275.0,
            "valueHigh": 275.0,
            "value": 275.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 2 Scp + {HB} 4 Ctp",
            "valueLow": 450.0,
            "valueHigh": 450.0,
            "value": 450.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 2 Scp + {HB} 5 Ctp",
            "valueLow": 800.0,
            "valueHigh": 800.0,
            "value": 800.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Scp + {HB} 1 Ctp",
            "valueLow": 300.0,
            "valueHigh": 300.0,
            "value": 300.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Scp + {HB} 2 Ctp",
            "valueLow": 500.0,
            "valueHigh": 500.0,
            "value": 500.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Scp + {HB} 3 Ctp",
            "valueLow": 900.0,
            "valueHigh": 900.0,
            "value": 900.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Scp + {HB} 4 Ctp",
            "valueLow": 1400.0,
            "valueHigh": 1400.0,
            "value": 1400.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Scp + {HB} 5 Ctp",
            "valueLow": 2000.0,
            "valueHigh": 2000.0,
            "value": 2000.0,
            "demand": "Хайп"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-lei",
    "name": "Гавайские бусы (Лей)",
    "englishName": "Lei",
    "category": "Биквипы",
    "value": 7.12,
    "valueLow": 0.25,
    "valueHigh": 14.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      7.12,
      7.12
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Lei.png",
    "beequipData": [
      {
        "groupName": "Blue Boost (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Blue boost",
            "valueLow": 12.0,
            "valueHigh": 14.0,
            "value": 13.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Red Boost (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Red boost",
            "valueLow": 11.0,
            "valueHigh": 13.0,
            "value": 12.0,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-lump-of-coal",
    "name": "Уголёк",
    "englishName": "Lump of Coal",
    "category": "Биквипы",
    "value": 1.75,
    "valueLow": 0.5,
    "valueHigh": 3.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      1.75,
      1.75
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Lump_of_Coal.png",
    "beequipData": [
      {
        "groupName": "Base Stats (Full Waxed)",
        "rolls": [
          {
            "rollName": "3 BBP + 3 BP + Pollen",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Низкий"
          },
          {
            "rollName": "≤4★ Pot",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-paper-angel",
    "name": "Бумажный ангел",
    "englishName": "Paper Angel",
    "category": "Биквипы",
    "value": 607.5,
    "valueLow": 0.0,
    "valueHigh": 1215.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      607.5,
      607.5
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Paper_Angel.png",
    "beequipData": [
      {
        "groupName": "Ability Token Lifespan (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 2 Atl",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 Atl",
            "valueLow": 18.0,
            "valueHigh": 20.0,
            "value": 19.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Bee Ability Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bap",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 2 Bap",
            "valueLow": 50.0,
            "valueHigh": 55.0,
            "value": 52.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Bap",
            "valueLow": 380.0,
            "valueHigh": 400.0,
            "value": 390.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Bee Ability Pollen + Ability Token Lifespan (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bap + 1 Atl",
            "valueLow": 7.0,
            "valueHigh": 9.0,
            "value": 8.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Bap + 2 Atl",
            "valueLow": 18.0,
            "valueHigh": 21.0,
            "value": 19.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Bap + 3 Atl",
            "valueLow": 55.0,
            "valueHigh": 60.0,
            "value": 57.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 2 Bap + 1 Atl",
            "valueLow": 85.0,
            "valueHigh": 90.0,
            "value": 87.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 2 Bap + 2 Atl",
            "valueLow": 200.0,
            "valueHigh": 225.0,
            "value": 212.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 2 Bap + 3 Atl",
            "valueLow": 750.0,
            "valueHigh": 750.0,
            "value": 750.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Bap + 1 Atl",
            "valueLow": 700.0,
            "valueHigh": 750.0,
            "value": 725.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Bap + 2 Atl",
            "valueLow": 1215.0,
            "valueHigh": 1215.0,
            "value": 1215.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Bap + 3 Atl",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 2.5,
            "valueHigh": 3.0,
            "value": 2.75,
            "demand": "Хайп"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 6.0,
            "valueHigh": 6.5,
            "value": 6.25,
            "demand": "Хайп"
          },
          {
            "rollName": "≤3★ Pot",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Высокий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-paperclip",
    "name": "Скрепка",
    "englishName": "Paperclip",
    "category": "Биквипы",
    "value": 500.0,
    "valueLow": 0.0,
    "valueHigh": 1000.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      500.0,
      500.0
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Paperclip.png",
    "beequipData": [
      {
        "groupName": "Ability Token Lifespan (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 3 Atl",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 Atl",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 5 Atl",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 6 Atl",
            "valueLow": 15.0,
            "valueHigh": 20.0,
            "value": 17.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7 Atl",
            "valueLow": 65.0,
            "valueHigh": 65.0,
            "value": 65.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Bee Ability Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bap",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 2 Bap",
            "valueLow": 10.0,
            "valueHigh": 12.0,
            "value": 11.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 3 Bap",
            "valueLow": 180.0,
            "valueHigh": 180.0,
            "value": 180.0,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 0.2,
            "valueHigh": 0.25,
            "value": 0.23,
            "demand": "Средний"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 0.33,
            "valueHigh": 0.5,
            "value": 0.42,
            "demand": "Высокий"
          },
          {
            "rollName": "≤3★ Pot",
            "valueLow": 0.1,
            "valueHigh": 0.15,
            "value": 0.12,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Token Link (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Token Link",
            "valueLow": 16.0,
            "valueHigh": 19.0,
            "value": 17.5,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Token Link + Ability Token Lifespan (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Atl",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Atl",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 3 Atl",
            "valueLow": 22.0,
            "valueHigh": 25.0,
            "value": 23.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 4 Atl",
            "valueLow": 75.0,
            "valueHigh": 80.0,
            "value": 77.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 5 Atl",
            "valueLow": 200.0,
            "valueHigh": 200.0,
            "value": 200.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Token Link + Bee Ability Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Atl + {HB} 1 Bap",
            "valueLow": 110.0,
            "valueHigh": 115.0,
            "value": 112.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Atl + {HB} 2 Bap",
            "valueLow": 800.0,
            "valueHigh": 800.0,
            "value": 800.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 1 Atl + {HB} 3 Bap",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Atl + {HB} 1 Bap (Full Waxed)",
            "valueLow": 130.0,
            "valueHigh": 135.0,
            "value": 132.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 2 Atl + {HB} 2 Bap",
            "valueLow": 900.0,
            "valueHigh": 900.0,
            "value": 900.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 3 Atl + {HB} 1 Bap (Full Waxed)",
            "valueLow": 155.0,
            "valueHigh": 165.0,
            "value": 160.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 3 Atl + {HB} 2 Bap",
            "valueLow": 1000.0,
            "valueHigh": 1000.0,
            "value": 1000.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Token Link + {HB} 4 Atl + {HB} 1 Bap",
            "valueLow": 400.0,
            "valueHigh": 400.0,
            "value": 400.0,
            "demand": "Хайп"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-peppermint-antennas",
    "name": "Мятные антенны",
    "englishName": "Peppermint Antennas",
    "category": "Биквипы",
    "value": 607.6,
    "valueLow": 0.2,
    "valueHigh": 1215.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      607.6,
      607.6
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Peppermint_Antennas.png",
    "beequipData": [
      {
        "groupName": "Ability Rate (Full Waxed)",
        "rolls": [
          {
            "rollName": "3 Ar",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Низкий"
          },
          {
            "rollName": "4 Ar",
            "valueLow": 17.0,
            "valueHigh": 20.0,
            "value": 18.5,
            "demand": "Высокий"
          },
          {
            "rollName": "5 Ar",
            "valueLow": 245.0,
            "valueHigh": 245.0,
            "value": 245.0,
            "demand": "Высокий"
          },
          {
            "rollName": "6 Ar",
            "valueLow": 810.0,
            "valueHigh": 810.0,
            "value": 810.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 0.2,
            "valueHigh": 0.25,
            "value": 0.23,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "{HB} Bee Ability Rate (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bar",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "{HB} Bee Ability Rate + Ability Rate (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bar + 1 Ar",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 1 Bar + 2 Ar",
            "valueLow": 10.0,
            "valueHigh": 12.0,
            "value": 11.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 1 Bar + 3 Ar",
            "valueLow": 100.0,
            "valueHigh": 100.0,
            "value": 100.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Bar + 4 Ar",
            "valueLow": 650.0,
            "valueHigh": 810.0,
            "value": 730.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Bar + 5 Ar",
            "valueLow": 1215.0,
            "valueHigh": 1215.0,
            "value": 1215.0,
            "demand": "Хайп"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-pinecone",
    "name": "Шишка",
    "englishName": "Pinecone",
    "category": "Биквипы",
    "value": 412.5,
    "valueLow": 0.0,
    "valueHigh": 825.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      412.5,
      412.5
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Pinecone.png",
    "beequipData": [
      {
        "groupName": "Pinetree Capacity + Pinetree Pollen (Unwaxed)",
        "rolls": [
          {
            "rollName": "13 Ptc + 10 Pp 4★ Pot",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Средний"
          },
          {
            "rollName": "13 Ptc + 10 Pp 5★ Pot",
            "valueLow": 2.75,
            "valueHigh": 3.25,
            "value": 3.0,
            "demand": "Высокий"
          },
          {
            "rollName": "14 Ptc + 10 Pp 4★ Pot",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Высокий"
          },
          {
            "rollName": "14 Ptc + 10 Pp 5★ Pot",
            "valueLow": 25.0,
            "valueHigh": 30.0,
            "value": 27.5,
            "demand": "Средний"
          },
          {
            "rollName": "14 Ptc + 10 Pp ≤3★ Pot",
            "valueLow": 3.0,
            "valueHigh": 5.0,
            "value": 4.0,
            "demand": "Средний"
          },
          {
            "rollName": "14 Ptc + ≤ 9 Pp 4★ Pot",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Низкий"
          },
          {
            "rollName": "14 Ptc + ≤ 9 Pp 5★ Pot",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Средний"
          },
          {
            "rollName": "14 Ptc + ≤ 9 Ptp ≤3★ Pot",
            "valueLow": 1.5,
            "valueHigh": 2.5,
            "value": 2.0,
            "demand": "Низкий"
          },
          {
            "rollName": "15 Ptc + 10 Pp 4★ Pot",
            "valueLow": 12.0,
            "valueHigh": 15.0,
            "value": 13.5,
            "demand": "Высокий"
          },
          {
            "rollName": "15 Ptc + 10 Pp 5★ Pot",
            "valueLow": 55.0,
            "valueHigh": 60.0,
            "value": 57.5,
            "demand": "Хайп"
          },
          {
            "rollName": "15 Ptc + 10 Pp ≤3★ Pot",
            "valueLow": 7.0,
            "valueHigh": 10.0,
            "value": 8.5,
            "demand": "Средний"
          },
          {
            "rollName": "15 Ptc + 9 Pp 4★ Pot",
            "valueLow": 7.0,
            "valueHigh": 9.0,
            "value": 8.0,
            "demand": "Низкий"
          },
          {
            "rollName": "15 Ptc + ≤ 9 Pp 5★ Pot",
            "valueLow": 30.0,
            "valueHigh": 35.0,
            "value": 32.5,
            "demand": "Высокий"
          },
          {
            "rollName": "15 Ptc + ≤ 9 Ptp ≤3★ Pot",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Низкий"
          },
          {
            "rollName": "≤13 Ptc + ≤9 Pp 4★ Pot",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Средний"
          },
          {
            "rollName": "≤13 Ptc + ≤9 Pp 5★ Pot",
            "valueLow": 2.75,
            "valueHigh": 3.25,
            "value": 3.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Pinetree Capacity + Pinetree Pollen + Ability Rate (Unwaxed)",
        "rolls": [
          {
            "rollName": "13 Ptc + 10 Pp + 1 Ar 4★ Pot",
            "valueLow": 1.0,
            "valueHigh": 1.25,
            "value": 1.12,
            "demand": "Высокий"
          },
          {
            "rollName": "13 Ptc + 10 Pp + 1 Ar 5★ Pot",
            "valueLow": 2.75,
            "valueHigh": 3.25,
            "value": 3.0,
            "demand": "Высокий"
          },
          {
            "rollName": "13 Ptc + ≤ 9 Pp + 1 Ar 4★ Pot",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Высокий"
          },
          {
            "rollName": "13 Ptc + ≤ 9 Pp + 1 Ar 5★ Pot",
            "valueLow": 2.75,
            "valueHigh": 3.25,
            "value": 3.0,
            "demand": "Высокий"
          },
          {
            "rollName": "14 Ptc + 10 Pp + 1 Ar 3★ Pot",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Средний"
          },
          {
            "rollName": "14 Ptc + 10 Pp + 1 Ar 4★ Pot",
            "valueLow": 25.0,
            "valueHigh": 30.0,
            "value": 27.5,
            "demand": "Средний"
          },
          {
            "rollName": "14 Ptc + 10 Pp + 1 Ar 5★ Pot",
            "valueLow": 50.0,
            "valueHigh": 55.0,
            "value": 52.5,
            "demand": "Хайп"
          },
          {
            "rollName": "14 Ptc + ≤ 9 Pp + 1 Ar 3★ Pot",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Средний"
          },
          {
            "rollName": "14 Ptc + ≤ 9 Pp + 1 Ar 4★ Pot (Unwaxed)",
            "valueLow": 8.0,
            "valueHigh": 10.0,
            "value": 9.0,
            "demand": "Низкий"
          },
          {
            "rollName": "14 Ptc + ≤ 9 Pp + 1 Ar 5★ Pot (Unwaxed)",
            "valueLow": 22.0,
            "valueHigh": 27.0,
            "value": 24.5,
            "demand": "Средний"
          },
          {
            "rollName": "15 Ptc + 10 Pp + 1 Ar 3★ Pot",
            "valueLow": 10.0,
            "valueHigh": 14.0,
            "value": 12.0,
            "demand": "Средний"
          },
          {
            "rollName": "15 Ptc + 10 Pp + 1 Ar 4★ Pot",
            "valueLow": 40.0,
            "valueHigh": 50.0,
            "value": 45.0,
            "demand": "Высокий"
          },
          {
            "rollName": "15 Ptc + 10 Pp + 1 Ar 5★ Pot",
            "valueLow": 100.0,
            "valueHigh": 105.0,
            "value": 102.5,
            "demand": "Хайп"
          },
          {
            "rollName": "15 Ptc + ≤ 9 Pp + 1 Ar 3★ Pot (Unwaxed)",
            "valueLow": 6.0,
            "valueHigh": 8.0,
            "value": 7.0,
            "demand": "Средний"
          },
          {
            "rollName": "15 Ptc + ≤ 9 Pp + 1 Ar 4★ Pot (Unwaxed)",
            "valueLow": 30.0,
            "valueHigh": 35.0,
            "value": 32.5,
            "demand": "Высокий"
          },
          {
            "rollName": "15 Ptc + ≤ 9 Pp + 1 Ar 5★ Pot",
            "valueLow": 60.0,
            "valueHigh": 70.0,
            "value": 65.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Pinetree Pollen + Pinetree Capacity (Full Waxed)",
        "rolls": [
          {
            "rollName": "+1% Ability Rate adds 10-15% Extra Value to the Current Pinecone Stats",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 14 Ptc",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 15 Ptc",
            "valueLow": 5.5,
            "valueHigh": 6.5,
            "value": 6.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 16 Ptc",
            "valueLow": 11.0,
            "valueHigh": 12.0,
            "value": 11.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 17 Ptc",
            "valueLow": 34.0,
            "valueHigh": 36.0,
            "value": 35.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 18 Ptc",
            "valueLow": 80.0,
            "valueHigh": 84.0,
            "value": 82.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 19 Ptc",
            "valueLow": 190.0,
            "valueHigh": 205.0,
            "value": 197.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 20 Ptc",
            "valueLow": 700.0,
            "valueHigh": 700.0,
            "value": 700.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 14 Ptc",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 15 Ptc",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 16 Ptc",
            "valueLow": 13.0,
            "valueHigh": 15.0,
            "value": 14.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 17 Ptc",
            "valueLow": 43.0,
            "valueHigh": 45.0,
            "value": 44.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 18 Ptc",
            "valueLow": 100.0,
            "valueHigh": 110.0,
            "value": 105.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 19 Ptc",
            "valueLow": 240.0,
            "valueHigh": 240.0,
            "value": 240.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 20 Ptc",
            "valueLow": 825.0,
            "valueHigh": 825.0,
            "value": 825.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 14 Ptc",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 15 Ptc",
            "valueLow": 4.0,
            "valueHigh": 4.5,
            "value": 4.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 16 Ptc",
            "valueLow": 10.0,
            "valueHigh": 10.5,
            "value": 10.25,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 17 Ptc",
            "valueLow": 28.0,
            "valueHigh": 30.0,
            "value": 29.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 18 Ptc",
            "valueLow": 66.0,
            "valueHigh": 68.0,
            "value": 67.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 19 Ptc",
            "valueLow": 145.0,
            "valueHigh": 155.0,
            "value": 150.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 20 Ptc",
            "valueLow": 550.0,
            "valueHigh": 550.0,
            "value": 550.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 14 Ptc",
            "valueLow": 1.0,
            "valueHigh": 1.25,
            "value": 1.12,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 15 Ptc",
            "valueLow": 3.0,
            "valueHigh": 3.5,
            "value": 3.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 16 Ptc",
            "valueLow": 9.5,
            "valueHigh": 10.0,
            "value": 9.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 17 Ptc",
            "valueLow": 24.0,
            "valueHigh": 26.0,
            "value": 25.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 18 Ptc",
            "valueLow": 56.0,
            "valueHigh": 58.0,
            "value": 57.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 19 Ptc",
            "valueLow": 115.0,
            "valueHigh": 125.0,
            "value": 120.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 20 Ptc",
            "valueLow": 425.0,
            "valueHigh": 425.0,
            "value": 425.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Pinetree Pollen + Pinetree Capacity + 1 Ability Rate (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 10 Ptp + {HB} 14 Ptc + 1 Ar",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 15 Ptc + 1 Ar",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 16 Ptc + 1 Ar",
            "valueLow": 12.0,
            "valueHigh": 14.0,
            "value": 13.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 17 Ptc + 1 Ar",
            "valueLow": 40.0,
            "valueHigh": 42.0,
            "value": 41.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 18 Ptc + 1 Ar",
            "valueLow": 95.0,
            "valueHigh": 100.0,
            "value": 97.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 19 Ptc + 1 Ar",
            "valueLow": 270.0,
            "valueHigh": 290.0,
            "value": 280.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 20 Ptc + 1 Ar",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 14 Ptc + 1 Ar",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 15 Ptc + 1 Ar",
            "valueLow": 11.0,
            "valueHigh": 12.0,
            "value": 11.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 16 Ptc + 1 Ar",
            "valueLow": 16.0,
            "valueHigh": 18.0,
            "value": 17.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 17 Ptc + 1 Ar",
            "valueLow": 53.0,
            "valueHigh": 57.0,
            "value": 55.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 18 Ptc + 1 Ar",
            "valueLow": 130.0,
            "valueHigh": 140.0,
            "value": 135.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 19 Ptc + 1 Ar",
            "valueLow": 360.0,
            "valueHigh": 380.0,
            "value": 370.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 20 Ptc + 1 Ar",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 14 Ptc + 1 Ar",
            "valueLow": 1.25,
            "valueHigh": 1.5,
            "value": 1.38,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 15 Ptc + 1 Ar",
            "valueLow": 4.5,
            "valueHigh": 5.0,
            "value": 4.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 16 Ptc + 1 Ar",
            "valueLow": 11.0,
            "valueHigh": 11.5,
            "value": 11.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 17 Ptc + 1 Ar",
            "valueLow": 31.0,
            "valueHigh": 33.0,
            "value": 32.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 18 Ptc + 1 Ar",
            "valueLow": 74.0,
            "valueHigh": 77.0,
            "value": 75.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 19 Ptc + 1 Ar",
            "valueLow": 180.0,
            "valueHigh": 195.0,
            "value": 187.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 20 Ptc + 1 Ar",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 14 Ptc + 1 Ar",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 15 Ptc + 1 Ar",
            "valueLow": 3.5,
            "valueHigh": 4.0,
            "value": 3.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 16 Ptc + 1 Ar",
            "valueLow": 10.0,
            "valueHigh": 10.5,
            "value": 10.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 17 Ptc + 1 Ar",
            "valueLow": 25.0,
            "valueHigh": 28.0,
            "value": 26.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 18 Ptc + 1 Ar",
            "valueLow": 60.0,
            "valueHigh": 62.0,
            "value": 61.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 19 Ptc + 1 Ar",
            "valueLow": 140.0,
            "valueHigh": 155.0,
            "value": 147.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 20 Ptc + 1 Ar",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Pinetree Pollen + Pinetree Capacity + 2 Ability Rate (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 10 Ptp + {HB} 14 Ptc + 2 Ar",
            "valueLow": 3.0,
            "valueHigh": 3.5,
            "value": 3.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 15 Ptc + 2 Ar",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 16 Ptc + 2 Ar",
            "valueLow": 15.0,
            "valueHigh": 17.0,
            "value": 16.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 17 Ptc + 2 Ar",
            "valueLow": 49.0,
            "valueHigh": 53.0,
            "value": 51.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 18 Ptc + 2 Ar",
            "valueLow": 125.0,
            "valueHigh": 135.0,
            "value": 130.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 Ptp + {HB} 19 Ptc + 2 Ar",
            "valueLow": 350.0,
            "valueHigh": 370.0,
            "value": 360.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 14 Ptc + 2 Ar",
            "valueLow": 5.5,
            "valueHigh": 6.0,
            "value": 5.75,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 15 Ptc + 2 Ar",
            "valueLow": 15.0,
            "valueHigh": 17.0,
            "value": 16.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 16 Ptc + 2 Ar",
            "valueLow": 21.0,
            "valueHigh": 23.0,
            "value": 22.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 17 Ptc + 2 Ar",
            "valueLow": 71.0,
            "valueHigh": 75.0,
            "value": 73.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 18 Ptc + 2 Ar",
            "valueLow": 185.0,
            "valueHigh": 195.0,
            "value": 190.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 11 Ptp + {HB} 19 Ptc + 2 Ar",
            "valueLow": 550.0,
            "valueHigh": 580.0,
            "value": 565.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 14 Ptc + 2 Ar",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 15 Ptc + 2 Ar",
            "valueLow": 5.5,
            "valueHigh": 6.0,
            "value": 5.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 16 Ptc + 2 Ar",
            "valueLow": 12.0,
            "valueHigh": 14.0,
            "value": 13.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 17 Ptc + 2 Ar",
            "valueLow": 37.0,
            "valueHigh": 40.0,
            "value": 38.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 18 Ptc + 2 Ar",
            "valueLow": 93.0,
            "valueHigh": 97.0,
            "value": 95.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 9 Ptp + {HB} 19 Ptc + 2 Ar",
            "valueLow": 245.0,
            "valueHigh": 260.0,
            "value": 252.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 14 Ptc + 2 Ar",
            "valueLow": 1.33,
            "valueHigh": 1.5,
            "value": 1.42,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 15 Ptc + 2 Ar",
            "valueLow": 4.0,
            "valueHigh": 4.5,
            "value": 4.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 16 Ptc + 2 Ar",
            "valueLow": 11.0,
            "valueHigh": 12.0,
            "value": 11.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 17 Ptc + 2 Ar",
            "valueLow": 29.0,
            "valueHigh": 32.0,
            "value": 30.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 18 Ptc + 2 Ar",
            "valueLow": 72.0,
            "valueHigh": 76.0,
            "value": 74.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} ≤ 8 Ptp + {HB} 19 Ptc + 2 Ar",
            "valueLow": 180.0,
            "valueHigh": 195.0,
            "value": 187.5,
            "demand": "Хайп"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-pink-eraser",
    "name": "Розовая стёрка",
    "englishName": "Pink Eraser",
    "category": "Биквипы",
    "value": 0.01,
    "valueLow": 0.0,
    "valueHigh": 0.025,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      0.01,
      0.01
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Pink_Eraser.png",
    "beequipData": [
      {
        "groupName": "Honey From Instant Conversion (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} Honey From Instant Conversion",
            "valueLow": 0.0,
            "valueHigh": 0.0,
            "value": 0.0,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "≤5★ Pot",
            "valueLow": 0.0,
            "valueHigh": 0.025,
            "value": 0.01,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-pink-shades",
    "name": "Розовые очки",
    "englishName": "Pink Shades",
    "category": "Биквипы",
    "value": 3502.0,
    "valueLow": 4.0,
    "valueHigh": 7000.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      3502.0,
      3502.0
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Pink_Shades.png",
    "beequipData": [
      {
        "groupName": "Focus + Super Crit Chance (Full Waxed)",
        "rolls": [
          {
            "rollName": "Focus",
            "valueLow": 4.0,
            "valueHigh": 4.5,
            "value": 4.25,
            "demand": "Средний"
          },
          {
            "rollName": "Focus + {HB} 1 Scc",
            "valueLow": 13.0,
            "valueHigh": 14.0,
            "value": 13.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Scc",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 18.0,
            "valueHigh": 19.0,
            "value": 18.5,
            "demand": "Хайп"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 40.0,
            "valueHigh": 42.0,
            "value": 41.0,
            "demand": "Хайп"
          },
          {
            "rollName": "≤3★ Pot",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Super Crit-Power (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 10 Scp",
            "valueLow": 120.0,
            "valueHigh": 125.0,
            "value": 122.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 11 Scp",
            "valueLow": 190.0,
            "valueHigh": 200.0,
            "value": 195.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 12 Scp",
            "valueLow": 310.0,
            "valueHigh": 325.0,
            "value": 317.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 13 Scp",
            "valueLow": 430.0,
            "valueHigh": 440.0,
            "value": 435.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 14 Scp",
            "valueLow": 625.0,
            "valueHigh": 650.0,
            "value": 637.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 15 Scp",
            "valueLow": 975.0,
            "valueHigh": 975.0,
            "value": 975.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 5 Scp",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 Scp",
            "valueLow": 13.0,
            "valueHigh": 14.0,
            "value": 13.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7 Scp",
            "valueLow": 24.0,
            "valueHigh": 26.0,
            "value": 25.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 8 Scp",
            "valueLow": 42.0,
            "valueHigh": 45.0,
            "value": 43.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Scp",
            "valueLow": 69.0,
            "valueHigh": 72.0,
            "value": 70.5,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Super Crit-Power + Focus (Full Waxed)",
        "rolls": [
          {
            "rollName": "Focus + {HB} 10 Scp",
            "valueLow": 130.0,
            "valueHigh": 135.0,
            "value": 132.5,
            "demand": "Высокий"
          },
          {
            "rollName": "Focus + {HB} 11 Scp",
            "valueLow": 200.0,
            "valueHigh": 210.0,
            "value": 205.0,
            "demand": "Высокий"
          },
          {
            "rollName": "Focus + {HB} 12 Scp",
            "valueLow": 335.0,
            "valueHigh": 350.0,
            "value": 342.5,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 13 Scp",
            "valueLow": 450.0,
            "valueHigh": 460.0,
            "value": 455.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 14 Scp",
            "valueLow": 650.0,
            "valueHigh": 675.0,
            "value": 662.5,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 15 Scp",
            "valueLow": 1050.0,
            "valueHigh": 1050.0,
            "value": 1050.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 5 Scp",
            "valueLow": 6.0,
            "valueHigh": 7.0,
            "value": 6.5,
            "demand": "Средний"
          },
          {
            "rollName": "Focus + {HB} 6 Scp",
            "valueLow": 14.0,
            "valueHigh": 15.0,
            "value": 14.5,
            "demand": "Средний"
          },
          {
            "rollName": "Focus + {HB} 7 Scp",
            "valueLow": 25.0,
            "valueHigh": 27.0,
            "value": 26.0,
            "demand": "Средний"
          },
          {
            "rollName": "Focus + {HB} 8 Scp",
            "valueLow": 46.0,
            "valueHigh": 49.0,
            "value": 47.5,
            "demand": "Высокий"
          },
          {
            "rollName": "Focus + {HB} 9 Scp",
            "valueLow": 74.0,
            "valueHigh": 78.0,
            "value": 76.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Super Crit-Power + Super Crit Chance (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Scc + {HB} 10 Scp",
            "valueLow": 1400.0,
            "valueHigh": 1400.0,
            "value": 1400.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 11 Scp",
            "valueLow": 1900.0,
            "valueHigh": 1900.0,
            "value": 1900.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 12 Scp",
            "valueLow": 2400.0,
            "valueHigh": 2400.0,
            "value": 2400.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 13 Scp",
            "valueLow": 3000.0,
            "valueHigh": 3000.0,
            "value": 3000.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 14 Scp",
            "valueLow": 4600.0,
            "valueHigh": 4600.0,
            "value": 4600.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 15 Scp",
            "valueLow": 6500.0,
            "valueHigh": 6500.0,
            "value": 6500.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 2 Scp",
            "valueLow": 42.0,
            "valueHigh": 44.0,
            "value": 43.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 3 Scp",
            "valueLow": 88.0,
            "valueHigh": 93.0,
            "value": 90.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 4 Scp",
            "valueLow": 125.0,
            "valueHigh": 130.0,
            "value": 127.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 5 Scp",
            "valueLow": 215.0,
            "valueHigh": 225.0,
            "value": 220.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 6 Scp",
            "valueLow": 385.0,
            "valueHigh": 395.0,
            "value": 390.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 7 Scp",
            "valueLow": 550.0,
            "valueHigh": 550.0,
            "value": 550.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 8 Scp",
            "valueLow": 750.0,
            "valueHigh": 750.0,
            "value": 750.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Scc + {HB} 9 Scp",
            "valueLow": 1050.0,
            "valueHigh": 1050.0,
            "value": 1050.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Super Crit-Power + Super Crit Chance + Focus (Full Waxed)",
        "rolls": [
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 10 Scp",
            "valueLow": 1500.0,
            "valueHigh": 1500.0,
            "value": 1500.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 11 Scp",
            "valueLow": 2000.0,
            "valueHigh": 2000.0,
            "value": 2000.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 12 Scp",
            "valueLow": 2500.0,
            "valueHigh": 2500.0,
            "value": 2500.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 13 Scp",
            "valueLow": 3250.0,
            "valueHigh": 3250.0,
            "value": 3250.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 14 Scp",
            "valueLow": 5000.0,
            "valueHigh": 5000.0,
            "value": 5000.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 15 Scp",
            "valueLow": 7000.0,
            "valueHigh": 7000.0,
            "value": 7000.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 2 Scp",
            "valueLow": 48.0,
            "valueHigh": 50.0,
            "value": 49.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 3 Scp",
            "valueLow": 95.0,
            "valueHigh": 100.0,
            "value": 97.5,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 4 Scp",
            "valueLow": 140.0,
            "valueHigh": 150.0,
            "value": 145.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 5 Scp",
            "valueLow": 240.0,
            "valueHigh": 255.0,
            "value": 247.5,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 6 Scp",
            "valueLow": 415.0,
            "valueHigh": 425.0,
            "value": 420.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 7 Scp",
            "valueLow": 600.0,
            "valueHigh": 600.0,
            "value": 600.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 8 Scp",
            "valueLow": 800.0,
            "valueHigh": 800.0,
            "value": 800.0,
            "demand": "Хайп"
          },
          {
            "rollName": "Focus + {HB} 1 Scc + {HB} 9 Scp",
            "valueLow": 1100.0,
            "valueHigh": 1100.0,
            "value": 1100.0,
            "demand": "Хайп"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-poinsettia",
    "name": "Пуансеттия",
    "englishName": "Poinsettia",
    "category": "Биквипы",
    "value": 730.25,
    "valueLow": 0.5,
    "valueHigh": 1460.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      730.25,
      730.25
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Poinsettia.png",
    "beequipData": [
      {
        "groupName": "Bee Gather Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 10 Bgp",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 11 Bgp",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 12 Bgp",
            "valueLow": 8.0,
            "valueHigh": 9.0,
            "value": 8.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 13 Bgp",
            "valueLow": 12.0,
            "valueHigh": 14.0,
            "value": 13.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 14 Bgp",
            "valueLow": 17.0,
            "valueHigh": 19.0,
            "value": 18.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 15 Bgp",
            "valueLow": 25.0,
            "valueHigh": 25.0,
            "value": 25.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 6 Bgp",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 7 Bgp",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 8 Bgp",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 9 Bgp",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 3.0,
            "valueHigh": 3.5,
            "value": 3.25,
            "demand": "Средний"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Высокий"
          },
          {
            "rollName": "≤3★ Pot",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Red Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 10 Rp",
            "valueLow": 64.0,
            "valueHigh": 68.0,
            "value": 66.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 11 Rp",
            "valueLow": 85.0,
            "valueHigh": 90.0,
            "value": 87.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 12 Rp",
            "valueLow": 120.0,
            "valueHigh": 125.0,
            "value": 122.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 13 Rp",
            "valueLow": 160.0,
            "valueHigh": 170.0,
            "value": 165.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 14 Rp",
            "valueLow": 245.0,
            "valueHigh": 255.0,
            "value": 250.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 15 Rp",
            "valueLow": 405.0,
            "valueHigh": 405.0,
            "value": 405.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 16 Rp",
            "valueLow": 650.0,
            "valueHigh": 650.0,
            "value": 650.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 17 Rp",
            "valueLow": 975.0,
            "valueHigh": 975.0,
            "value": 975.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 18 Rp",
            "valueLow": 1460.0,
            "valueHigh": 1460.0,
            "value": 1460.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 4 Rp",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 5 Rp",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 Rp",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7 Rp",
            "valueLow": 11.0,
            "valueHigh": 12.0,
            "value": 11.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 Rp",
            "valueLow": 22.0,
            "valueHigh": 24.0,
            "value": 23.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Rp",
            "valueLow": 44.0,
            "valueHigh": 47.0,
            "value": 45.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Red Pollen + Bee Gather Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 10 RP + {HB} 1 BGP",
            "valueLow": 65.0,
            "valueHigh": 68.0,
            "value": 66.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 RP + {HB} 10 BGP",
            "valueLow": 135.0,
            "valueHigh": 140.0,
            "value": 137.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 RP + {HB} 2 BGP",
            "valueLow": 67.0,
            "valueHigh": 69.0,
            "value": 68.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 RP + {HB} 3 BGP",
            "valueLow": 68.0,
            "valueHigh": 70.0,
            "value": 69.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 RP + {HB} 4 BGP",
            "valueLow": 73.0,
            "valueHigh": 76.0,
            "value": 74.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 RP + {HB} 5 BGP",
            "valueLow": 75.0,
            "valueHigh": 80.0,
            "value": 77.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 RP + {HB} 6 BGP",
            "valueLow": 85.0,
            "valueHigh": 90.0,
            "value": 87.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 10 RP + {HB} 7 BGP",
            "valueLow": 95.0,
            "valueHigh": 100.0,
            "value": 97.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 RP + {HB} 8 BGP",
            "valueLow": 110.0,
            "valueHigh": 115.0,
            "value": 112.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 10 RP + {HB} 9 BGP",
            "valueLow": 120.0,
            "valueHigh": 125.0,
            "value": 122.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 1 BGP",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 10 BGP",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 2 BGP",
            "valueLow": 1.5,
            "valueHigh": 1.75,
            "value": 1.62,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 3 BGP",
            "valueLow": 1.75,
            "valueHigh": 2.0,
            "value": 1.88,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 4 BGP",
            "valueLow": 2.0,
            "valueHigh": 2.25,
            "value": 2.12,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 5 BGP",
            "valueLow": 2.0,
            "valueHigh": 2.5,
            "value": 2.25,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 6 BGP",
            "valueLow": 2.25,
            "valueHigh": 2.5,
            "value": 2.38,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 7 BGP",
            "valueLow": 2.5,
            "valueHigh": 3.0,
            "value": 2.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 8 BGP",
            "valueLow": 3.0,
            "valueHigh": 3.5,
            "value": 3.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 RP + {HB} 9 BGP",
            "valueLow": 3.5,
            "valueHigh": 4.0,
            "value": 3.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 1 BGP",
            "valueLow": 2.75,
            "valueHigh": 3.0,
            "value": 2.88,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 10 BGP",
            "valueLow": 7.5,
            "valueHigh": 8.0,
            "value": 7.75,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 2 BGP",
            "valueLow": 3.0,
            "valueHigh": 3.5,
            "value": 3.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 3 BGP",
            "valueLow": 3.5,
            "valueHigh": 4.0,
            "value": 3.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 4 BGP",
            "valueLow": 4.0,
            "valueHigh": 4.25,
            "value": 4.12,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 5 BGP",
            "valueLow": 4.0,
            "valueHigh": 4.5,
            "value": 4.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 6 BGP",
            "valueLow": 4.5,
            "valueHigh": 5.0,
            "value": 4.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 7 BGP",
            "valueLow": 5.0,
            "valueHigh": 5.5,
            "value": 5.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 8 BGP",
            "valueLow": 6.0,
            "valueHigh": 6.5,
            "value": 6.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 RP + {HB} 9 BGP",
            "valueLow": 6.0,
            "valueHigh": 7.0,
            "value": 6.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 1 BGP",
            "valueLow": 6.0,
            "valueHigh": 6.5,
            "value": 6.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 10 BGP",
            "valueLow": 12.0,
            "valueHigh": 13.0,
            "value": 12.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 2 BGP",
            "valueLow": 6.5,
            "valueHigh": 6.75,
            "value": 6.62,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 3 BGP",
            "valueLow": 6.5,
            "valueHigh": 7.0,
            "value": 6.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 4 BGP",
            "valueLow": 6.75,
            "valueHigh": 7.0,
            "value": 6.88,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 5 BGP",
            "valueLow": 7.0,
            "valueHigh": 7.5,
            "value": 7.25,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 6 BGP",
            "valueLow": 7.5,
            "valueHigh": 8.0,
            "value": 7.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 7 BGP",
            "valueLow": 8.5,
            "valueHigh": 9.0,
            "value": 8.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 8 BGP",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 RP + {HB} 9 BGP",
            "valueLow": 11.0,
            "valueHigh": 12.0,
            "value": 11.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 1 BGP",
            "valueLow": 11.5,
            "valueHigh": 12.5,
            "value": 12.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 10 BGP",
            "valueLow": 24.0,
            "valueHigh": 26.0,
            "value": 25.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 2 BGP",
            "valueLow": 12.0,
            "valueHigh": 13.0,
            "value": 12.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 3 BGP",
            "valueLow": 12.5,
            "valueHigh": 13.5,
            "value": 13.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 4 BGP",
            "valueLow": 13.0,
            "valueHigh": 14.0,
            "value": 13.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 5 BGP",
            "valueLow": 14.0,
            "valueHigh": 15.0,
            "value": 14.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 6 BGP",
            "valueLow": 15.0,
            "valueHigh": 16.0,
            "value": 15.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 7 BGP",
            "valueLow": 16.0,
            "valueHigh": 18.0,
            "value": 17.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 8 BGP",
            "valueLow": 18.0,
            "valueHigh": 20.0,
            "value": 19.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 RP + {HB} 9 BGP",
            "valueLow": 21.0,
            "valueHigh": 23.0,
            "value": 22.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 1 BGP",
            "valueLow": 22.0,
            "valueHigh": 23.0,
            "value": 22.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 10 BGP",
            "valueLow": 45.0,
            "valueHigh": 50.0,
            "value": 47.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 2 BGP",
            "valueLow": 23.0,
            "valueHigh": 24.0,
            "value": 23.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 3 BGP",
            "valueLow": 24.0,
            "valueHigh": 25.0,
            "value": 24.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 4 BGP",
            "valueLow": 26.0,
            "valueHigh": 28.0,
            "value": 27.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 5 BGP",
            "valueLow": 27.0,
            "valueHigh": 29.0,
            "value": 28.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 6 BGP",
            "valueLow": 29.0,
            "valueHigh": 32.0,
            "value": 30.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 7 BGP",
            "valueLow": 32.0,
            "valueHigh": 34.0,
            "value": 33.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 8 BGP",
            "valueLow": 35.0,
            "valueHigh": 38.0,
            "value": 36.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 8 RP + {HB} 9 BGP",
            "valueLow": 40.0,
            "valueHigh": 43.0,
            "value": 41.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 1 BGP",
            "valueLow": 44.0,
            "valueHigh": 47.0,
            "value": 45.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 10 BGP",
            "valueLow": 93.0,
            "valueHigh": 95.0,
            "value": 94.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 2 BGP",
            "valueLow": 45.0,
            "valueHigh": 48.0,
            "value": 46.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 3 BGP",
            "valueLow": 47.0,
            "valueHigh": 50.0,
            "value": 48.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 4 BGP",
            "valueLow": 51.0,
            "valueHigh": 53.0,
            "value": 52.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 5 BGP",
            "valueLow": 55.0,
            "valueHigh": 57.0,
            "value": 56.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 6 BGP",
            "valueLow": 60.0,
            "valueHigh": 65.0,
            "value": 62.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 7 BGP",
            "valueLow": 65.0,
            "valueHigh": 70.0,
            "value": 67.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 8 BGP",
            "valueLow": 75.0,
            "valueHigh": 80.0,
            "value": 77.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 9 RP + {HB} 9 BGP",
            "valueLow": 85.0,
            "valueHigh": 90.0,
            "value": 87.5,
            "demand": "Хайп"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-reindeer-antlers",
    "name": "Оленьи рога",
    "englishName": "Reindeer Antlers",
    "category": "Биквипы",
    "value": 1135.5,
    "valueLow": 1.0,
    "valueHigh": 2270.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      1135.5,
      1135.5
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Reindeer_Antlers.png",
    "beequipData": [
      {
        "groupName": "Baby Love (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Baby Love",
            "valueLow": 2270.0,
            "valueHigh": 2270.0,
            "value": 2270.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Bond From Treats (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bond from Treats",
            "valueLow": 240.0,
            "valueHigh": 260.0,
            "value": 250.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Capacity (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Cap",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 2 Cap",
            "valueLow": 9.0,
            "valueHigh": 10.0,
            "value": 9.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Cap",
            "valueLow": 20.0,
            "valueHigh": 22.0,
            "value": 21.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 4 Cap",
            "valueLow": 48.0,
            "valueHigh": 52.0,
            "value": 50.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 5 Cap",
            "valueLow": 95.0,
            "valueHigh": 100.0,
            "value": 97.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 6 Cap",
            "valueLow": 240.0,
            "valueHigh": 250.0,
            "value": 245.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 Cap",
            "valueLow": 540.0,
            "valueHigh": 560.0,
            "value": 550.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 Cap",
            "valueLow": 1600.0,
            "valueHigh": 1600.0,
            "value": 1600.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "No HB (Full Waxed)",
        "rolls": [
          {
            "rollName": "No {HB}",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 6.0,
            "valueHigh": 7.0,
            "value": 6.5,
            "demand": "Хайп"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 14.0,
            "valueHigh": 16.0,
            "value": 15.0,
            "demand": "Хайп"
          },
          {
            "rollName": "≤3★ Pot",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Высокий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-rose-headband",
    "name": "Ободок с розами",
    "englishName": "Rose Headband",
    "category": "Биквипы",
    "value": 112.55,
    "valueLow": 0.1,
    "valueHigh": 225.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      112.55,
      112.55
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Rose_Headband.png",
    "beequipData": [
      {
        "groupName": "Bee Attack (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 2 Bee Attack",
            "valueLow": 11.0,
            "valueHigh": 13.0,
            "value": 12.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 Bee Attack",
            "valueLow": 23.0,
            "valueHigh": 26.0,
            "value": 24.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Convert Amount (Full Waxed)",
        "rolls": [
          {
            "rollName": "60-64 Convert Amount",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          },
          {
            "rollName": "65-68 Convert Amount",
            "valueLow": 4.0,
            "valueHigh": 8.0,
            "value": 6.0,
            "demand": "Низкий"
          },
          {
            "rollName": "69-70 Convert Amount",
            "valueLow": 16.0,
            "valueHigh": 18.0,
            "value": 17.0,
            "demand": "Низкий"
          },
          {
            "rollName": "71 Convert Amount",
            "valueLow": 22.0,
            "valueHigh": 26.0,
            "value": 24.0,
            "demand": "Низкий"
          },
          {
            "rollName": "72 Convert Amount",
            "valueLow": 30.0,
            "valueHigh": 34.0,
            "value": 32.0,
            "demand": "Средний"
          },
          {
            "rollName": "73 Convert Amount",
            "valueLow": 49.0,
            "valueHigh": 54.0,
            "value": 51.5,
            "demand": "Средний"
          },
          {
            "rollName": "74 Convert Amount",
            "valueLow": 60.0,
            "valueHigh": 65.0,
            "value": 62.5,
            "demand": "Средний"
          },
          {
            "rollName": "75 Convert Amount",
            "valueLow": 80.0,
            "valueHigh": 85.0,
            "value": 82.5,
            "demand": "Средний"
          },
          {
            "rollName": "76 Convert Amount",
            "valueLow": 105.0,
            "valueHigh": 112.0,
            "value": 108.5,
            "demand": "Средний"
          },
          {
            "rollName": "77 Convert Amount",
            "valueLow": 130.0,
            "valueHigh": 140.0,
            "value": 135.0,
            "demand": "Средний"
          },
          {
            "rollName": "78 Convert Amount",
            "valueLow": 155.0,
            "valueHigh": 165.0,
            "value": 160.0,
            "demand": "Высокий"
          },
          {
            "rollName": "79 Convert Amount",
            "valueLow": 180.0,
            "valueHigh": 190.0,
            "value": 185.0,
            "demand": "Высокий"
          },
          {
            "rollName": "80 Convert Amount",
            "valueLow": 225.0,
            "valueHigh": 225.0,
            "value": 225.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "3★ Pot",
            "valueLow": 0.15,
            "valueHigh": 0.2,
            "value": 0.17,
            "demand": "Низкий"
          },
          {
            "rollName": "4★ Pot",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Низкий"
          },
          {
            "rollName": "≤2★ Pot",
            "valueLow": 0.1,
            "valueHigh": 0.15,
            "value": 0.12,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-single-mitten",
    "name": "Одинокая варежка",
    "englishName": "Single Mitten",
    "category": "Биквипы",
    "value": 45.02,
    "valueLow": 0.05,
    "valueHigh": 90.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      45.02,
      45.02
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Single_Mitten.png",
    "beequipData": [
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 0.15,
            "valueHigh": 0.2,
            "value": 0.17,
            "demand": "Низкий"
          },
          {
            "rollName": "≤4★ Pot",
            "valueLow": 0.05,
            "valueHigh": 0.1,
            "value": 0.08,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Red Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 4 Rp",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 5 Rp",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 6 Rp",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7 Rp",
            "valueLow": 15.0,
            "valueHigh": 18.0,
            "value": 16.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 Rp",
            "valueLow": 40.0,
            "valueHigh": 40.0,
            "value": 40.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 9 Rp",
            "valueLow": 90.0,
            "valueHigh": 90.0,
            "value": 90.0,
            "demand": "Хайп"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-smiley-sticker",
    "name": "Смайлик",
    "englishName": "Smiley Sticker",
    "category": "Биквипы",
    "value": 607.66,
    "valueLow": 0.33,
    "valueHigh": 1215.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      607.66,
      607.66
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Smiley_Sticker.png",
    "beequipData": [
      {
        "groupName": "Blue Bomb (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Blue Bomb",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Honey Mark + Mark Duration (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Honey Mark + 10 Md",
            "valueLow": 150.0,
            "valueHigh": 154.0,
            "value": 152.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + 11 Md",
            "valueLow": 155.0,
            "valueHigh": 159.0,
            "value": 157.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + 12 Md",
            "valueLow": 160.0,
            "valueHigh": 164.0,
            "value": 162.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + 13 Md",
            "valueLow": 165.0,
            "valueHigh": 175.0,
            "value": 170.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + 14 Md",
            "valueLow": 200.0,
            "valueHigh": 200.0,
            "value": 200.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + 7 Md",
            "valueLow": 135.0,
            "valueHigh": 139.0,
            "value": 137.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + 8 Md",
            "valueLow": 140.0,
            "valueHigh": 144.0,
            "value": 142.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + 9 Md",
            "valueLow": 145.0,
            "valueHigh": 149.0,
            "value": 147.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + {HB} 1 Md + 10 Md",
            "valueLow": 340.0,
            "valueHigh": 350.0,
            "value": 345.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + {HB} 1 Md + 11 Md (Full Waxed)",
            "valueLow": 365.0,
            "valueHigh": 375.0,
            "value": 370.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + {HB} 1 Md + 12 Md",
            "valueLow": 390.0,
            "valueHigh": 400.0,
            "value": 395.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + {HB} 1 Md + 8 Md",
            "valueLow": 312.0,
            "valueHigh": 320.0,
            "value": 316.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + {HB} 1 Md + 9 Md",
            "valueLow": 325.0,
            "valueHigh": 334.0,
            "value": 329.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + {HB} 1 Md + ≤ 7 Md",
            "valueLow": 298.0,
            "valueHigh": 305.0,
            "value": 301.5,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + {HB} 2 Mark Duration",
            "valueLow": 1215.0,
            "valueHigh": 1215.0,
            "value": 1215.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + ≤ 6 Md",
            "valueLow": 130.0,
            "valueHigh": 130.0,
            "value": 130.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Honey Mark + ≥ 15 Md",
            "valueLow": 225.0,
            "valueHigh": 225.0,
            "value": 225.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "No Honeymark {HB} Mark Duration (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Md",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 2 Md",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 1.0,
            "valueHigh": 1.25,
            "value": 1.12,
            "demand": "Высокий"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 1.75,
            "valueHigh": 2.0,
            "value": 1.88,
            "demand": "Хайп"
          },
          {
            "rollName": "≤3★ Pot",
            "valueLow": 0.33,
            "valueHigh": 0.75,
            "value": 0.54,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-snow-globe",
    "name": "Снежный шар",
    "englishName": "Snow Globe",
    "category": "Биквипы",
    "value": 0.38,
    "valueLow": 0.25,
    "valueHigh": 0.5,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      0.38,
      0.38
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Snow_Globe.png",
    "beequipData": [
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot",
            "valueLow": 0.33,
            "valueHigh": 0.5,
            "value": 0.42,
            "demand": "Низкий"
          },
          {
            "rollName": "≤4★ Pot",
            "valueLow": 0.25,
            "valueHigh": 0.33,
            "value": 0.29,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-snow-tiara",
    "name": "Снежная тиара",
    "englishName": "Snow Tiara",
    "category": "Биквипы",
    "value": 325.25,
    "valueLow": 0.5,
    "valueHigh": 650.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      325.25,
      325.25
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Snow_Tiara.png",
    "beequipData": [
      {
        "groupName": "Blue Field Capacity (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 5.6-5.9 Bfc",
            "valueLow": 22.0,
            "valueHigh": 32.0,
            "value": 27.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 6 Bfc",
            "valueLow": 40.0,
            "valueHigh": 45.0,
            "value": 42.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 6.1 Bfc",
            "valueLow": 60.0,
            "valueHigh": 65.0,
            "value": 62.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 6.2 Bfc",
            "valueLow": 80.0,
            "valueHigh": 85.0,
            "value": 82.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 6.3 Bfc",
            "valueLow": 100.0,
            "valueHigh": 105.0,
            "value": 102.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 6.4 Bfc",
            "valueLow": 120.0,
            "valueHigh": 125.0,
            "value": 122.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 6.5 Bfc",
            "valueLow": 160.0,
            "valueHigh": 165.0,
            "value": 162.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 6.6 Bfc",
            "valueLow": 195.0,
            "valueHigh": 200.0,
            "value": 197.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 6.7 Bfc",
            "valueLow": 235.0,
            "valueHigh": 240.0,
            "value": 237.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 6.8 Bfc",
            "valueLow": 275.0,
            "valueHigh": 280.0,
            "value": 277.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 6.9 Bfc",
            "valueLow": 315.0,
            "valueHigh": 320.0,
            "value": 317.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 Bfc",
            "valueLow": 365.0,
            "valueHigh": 370.0,
            "value": 367.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7.1 Bfc",
            "valueLow": 415.0,
            "valueHigh": 425.0,
            "value": 420.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.2 Bfc",
            "valueLow": 465.0,
            "valueHigh": 475.0,
            "value": 470.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.3 Bfc",
            "valueLow": 515.0,
            "valueHigh": 525.0,
            "value": 520.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.4 Bfc",
            "valueLow": 555.0,
            "valueHigh": 570.0,
            "value": 562.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 7.5 Bfc",
            "valueLow": 650.0,
            "valueHigh": 650.0,
            "value": 650.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Blue Field Capacity (Unwaxed)",
        "rolls": [
          {
            "rollName": "{HB} 4 Bfc 4★ Pot",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 Bfc 5★ Pot",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4.1-4.4 Bfc 4★ Pot",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4.1-4.4 Bfc 5★ Pot",
            "valueLow": 4.0,
            "valueHigh": 6.0,
            "value": 5.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4.5-4.6 Bfc 4★ Pot",
            "valueLow": 6.0,
            "valueHigh": 8.0,
            "value": 7.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4.5-4.6 Bfc 5★ Pot",
            "valueLow": 8.0,
            "valueHigh": 10.0,
            "value": 9.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4.7-4.8 Bfc 4★ Pot",
            "valueLow": 10.0,
            "valueHigh": 12.0,
            "value": 11.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4.7-4.8 Bfc 5★ Pot",
            "valueLow": 12.0,
            "valueHigh": 18.0,
            "value": 15.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 4.9 Bfc 4★ Pot",
            "valueLow": 17.0,
            "valueHigh": 18.0,
            "value": 17.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 4.9 Bfc 5★ Pot",
            "valueLow": 26.0,
            "valueHigh": 28.0,
            "value": 27.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 5 Bfc 4★ Pot",
            "valueLow": 15.0,
            "valueHigh": 17.0,
            "value": 16.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 5 Bfc 5★ Pot",
            "valueLow": 55.0,
            "valueHigh": 58.0,
            "value": 56.5,
            "demand": "Хайп"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-sweatband",
    "name": "Повязка от пота",
    "englishName": "Sweatband",
    "category": "Биквипы",
    "value": 500.07,
    "valueLow": 0.15,
    "valueHigh": 1000.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      500.07,
      500.07
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Sweatband.png",
    "beequipData": [
      {
        "groupName": "Red Gather Amount (Full Waxed)",
        "rolls": [
          {
            "rollName": "23 Red Gather Amount",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "24 Red Gather Amount",
            "valueLow": 1.0,
            "valueHigh": 2.0,
            "value": 1.5,
            "demand": "Средний"
          },
          {
            "rollName": "25 Red Gather Amount",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Средний"
          },
          {
            "rollName": "26 Red Gather Amount",
            "valueLow": 13.0,
            "valueHigh": 14.0,
            "value": 13.5,
            "demand": "Средний"
          },
          {
            "rollName": "27 Red Gather Amount",
            "valueLow": 31.0,
            "valueHigh": 33.0,
            "value": 32.0,
            "demand": "Высокий"
          },
          {
            "rollName": "28 Red Gather Amount",
            "valueLow": 70.0,
            "valueHigh": 75.0,
            "value": 72.5,
            "demand": "Высокий"
          },
          {
            "rollName": "29 Red Gather Amount",
            "valueLow": 175.0,
            "valueHigh": 175.0,
            "value": 175.0,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Red Gather Amount (Unwaxed)",
        "rolls": [
          {
            "rollName": "19 Red Gather Amount + {HB} 1 Red Pollen 4★ Pot",
            "valueLow": 1.0,
            "valueHigh": 1.5,
            "value": 1.25,
            "demand": "Средний"
          },
          {
            "rollName": "19 Red Gather Amount + {HB} 1 Red Pollen 5★ Pot",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "19 Red Gather Amount 5★ Pot",
            "valueLow": 0.33,
            "valueHigh": 0.5,
            "value": 0.42,
            "demand": "Низкий"
          },
          {
            "rollName": "19 Red Gather Amount ≤ 4★ Pot",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "20 Red Gather Amount + {HB} 1 Red Pollen 4★ Pot",
            "valueLow": 20.0,
            "valueHigh": 25.0,
            "value": 22.5,
            "demand": "Хайп"
          },
          {
            "rollName": "20 Red Gather Amount + {HB} 1 Red Pollen 5★ Pot",
            "valueLow": 27.0,
            "valueHigh": 32.0,
            "value": 29.5,
            "demand": "Хайп"
          },
          {
            "rollName": "20 Red Gather Amount 5★ Pot",
            "valueLow": 1.5,
            "valueHigh": 1.75,
            "value": 1.62,
            "demand": "Средний"
          },
          {
            "rollName": "20 Red Gather Amount ≤ 4★ Pot",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Red Gather Amount + Red Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "23 Red Gather Amount + {HB} 1 Red Pollen",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Средний"
          },
          {
            "rollName": "24 Red Gather Amount + {HB} 1 Red Pollen",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Средний"
          },
          {
            "rollName": "25 Red Gather Amount + {HB} 1 Red Pollen",
            "valueLow": 20.0,
            "valueHigh": 22.0,
            "value": 21.0,
            "demand": "Высокий"
          },
          {
            "rollName": "26 Red Gather Amount + {HB} 1 Red Pollen",
            "valueLow": 40.0,
            "valueHigh": 44.0,
            "value": 42.0,
            "demand": "Высокий"
          },
          {
            "rollName": "27 Red Gather Amount + {HB} 1 Red Pollen",
            "valueLow": 120.0,
            "valueHigh": 130.0,
            "value": 125.0,
            "demand": "Хайп"
          },
          {
            "rollName": "28 Red Gather Amount + {HB} 1 Red Pollen",
            "valueLow": 275.0,
            "valueHigh": 275.0,
            "value": 275.0,
            "demand": "Хайп"
          },
          {
            "rollName": "29 Red Gather Amount + {HB} 1 Red Pollen",
            "valueLow": 500.0,
            "valueHigh": 500.0,
            "value": 500.0,
            "demand": "Хайп"
          },
          {
            "rollName": "30 Red Gather Amount + {HB} 1 Red Pollen",
            "valueLow": 1000.0,
            "valueHigh": 1000.0,
            "value": 1000.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "White Gather Amount (Full Waxed)",
        "rolls": [
          {
            "rollName": "24 White Gather Amount",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          },
          {
            "rollName": "25 White Gather Amount",
            "valueLow": 1.75,
            "valueHigh": 2.25,
            "value": 2.0,
            "demand": "Низкий"
          },
          {
            "rollName": "26 White Gather Amount",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Низкий"
          },
          {
            "rollName": "27 White Gather Amount",
            "valueLow": 9.0,
            "valueHigh": 11.0,
            "value": 10.0,
            "demand": "Средний"
          },
          {
            "rollName": "28 White Gather Amount",
            "valueLow": 22.0,
            "valueHigh": 25.0,
            "value": 23.5,
            "demand": "Средний"
          },
          {
            "rollName": "29 White Gather Amount",
            "valueLow": 46.0,
            "valueHigh": 52.0,
            "value": 49.0,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "White Gather Amount (Unwaxed)",
        "rolls": [
          {
            "rollName": "19 White Gather Amount 5★ Pot",
            "valueLow": 0.2,
            "valueHigh": 0.25,
            "value": 0.23,
            "demand": "Низкий"
          },
          {
            "rollName": "19 White Gather Amount ≤ 4★ Pot",
            "valueLow": 0.15,
            "valueHigh": 0.2,
            "value": 0.17,
            "demand": "Низкий"
          },
          {
            "rollName": "20 White Gather Amount 5★ Pot",
            "valueLow": 0.33,
            "valueHigh": 0.5,
            "value": 0.42,
            "demand": "Средний"
          },
          {
            "rollName": "20 White Gather Amount ≤ 4★ Pot",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "White Gather Amount + White Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "23 White Gather Amount + {HB} 1 White Pollen",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          },
          {
            "rollName": "24 White Gather Amount + {HB} 1 White Pollen",
            "valueLow": 2.0,
            "valueHigh": 2.5,
            "value": 2.25,
            "demand": "Низкий"
          },
          {
            "rollName": "25 White Gather Amount + {HB} 1 White Pollen",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Низкий"
          },
          {
            "rollName": "26 White Gather Amount + {HB} 1 White Pollen",
            "valueLow": 10.0,
            "valueHigh": 12.0,
            "value": 11.0,
            "demand": "Средний"
          },
          {
            "rollName": "27 White Gather Amount + {HB} 1 White Pollen",
            "valueLow": 24.0,
            "valueHigh": 28.0,
            "value": 26.0,
            "demand": "Средний"
          },
          {
            "rollName": "28 White Gather Amount + {HB} 1 White Pollen",
            "valueLow": 52.0,
            "valueHigh": 58.0,
            "value": 55.0,
            "demand": "Средний"
          },
          {
            "rollName": "29 White Gather Amount + {HB} 1 White Pollen",
            "valueLow": 120.0,
            "valueHigh": 130.0,
            "value": 125.0,
            "demand": "Высокий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-thimble",
    "name": "Напёрсток",
    "englishName": "Thimble",
    "category": "Биквипы",
    "value": 10.0,
    "valueLow": 0.0,
    "valueHigh": 20.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      10.0,
      10.0
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Thimble.png",
    "beequipData": [
      {
        "groupName": "Convert rate (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1.01x Convert Rate",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 1.01x Convert Rate + 2% Convert Rate",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 1.01x Convert Rate + 3% Convert Rate",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 1.01x Convert Rate + 4% Convert Rate",
            "valueLow": 10.0,
            "valueHigh": 11.0,
            "value": 10.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 1.01x Convert Rate + 5% Convert Rate",
            "valueLow": 17.0,
            "valueHigh": 20.0,
            "value": 18.5,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 1.01x Convert Rate + ≥ 6% Convert Rate",
            "valueLow": 20.0,
            "valueHigh": 20.0,
            "value": 20.0,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 5 Convert Rate",
            "valueLow": 0.25,
            "valueHigh": 0.33,
            "value": 0.29,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} ≥ 6 Convert Rate",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "5★ Pot (Unwaxed)",
            "valueLow": 0.0,
            "valueHigh": 0.05,
            "value": 0.03,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-thumbtack",
    "name": "Кнопка",
    "englishName": "Thumbtack",
    "category": "Биквипы",
    "value": 212.62,
    "valueLow": 0.25,
    "valueHigh": 425.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      212.62,
      212.62
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Thumbtack.png",
    "beequipData": [
      {
        "groupName": "Base Red Bee Attack (Unwaxed)",
        "rolls": [
          {
            "rollName": "{HB} 2 Red Bee Attack 4★ Pot",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 2 Red Bee Attack 5★ Pot",
            "valueLow": 1.0,
            "valueHigh": 1.25,
            "value": 1.12,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 3 Red Bee Attack 4★ Pot",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 Red Bee Attack 5★ Pot",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Red Bee Attack (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 2 Red Bee Attack",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 3 Red Bee Attack",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 Red Bee Attack",
            "valueLow": 23.0,
            "valueHigh": 25.0,
            "value": 24.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 5 Red Bee Attack",
            "valueLow": 425.0,
            "valueHigh": 425.0,
            "value": 425.0,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Red Bee Attack + Bee Attack (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Red Bee Attack + {HB} 1 Bee Attack",
            "valueLow": 0.33,
            "valueHigh": 0.5,
            "value": 0.42,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 2 Red Bee Attack + {HB} 1 Bee Attack",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 Red Bee Attack + {HB} 1 Bee Attack",
            "valueLow": 19.0,
            "valueHigh": 22.0,
            "value": 20.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 Red Bee Attack + {HB} 1 Bee Attack",
            "valueLow": 380.0,
            "valueHigh": 380.0,
            "value": 380.0,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-toy-drum",
    "name": "Игрушечный барабан",
    "englishName": "Toy Drum",
    "category": "Биквипы",
    "value": 1329.0,
    "valueLow": 3.0,
    "valueHigh": 2655.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      1329.0,
      1329.0
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Toy_Drum.png",
    "beequipData": [
      {
        "groupName": "Bee Ability Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bap",
            "valueLow": 3.5,
            "valueHigh": 4.0,
            "value": 3.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 2 Bap",
            "valueLow": 10.0,
            "valueHigh": 11.0,
            "value": 10.5,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 3 Bap",
            "valueLow": 22.0,
            "valueHigh": 25.0,
            "value": 23.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 4 Bap",
            "valueLow": 56.0,
            "valueHigh": 60.0,
            "value": 58.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 5 Bap",
            "valueLow": 195.0,
            "valueHigh": 205.0,
            "value": 200.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 6 Bap",
            "valueLow": 405.0,
            "valueHigh": 405.0,
            "value": 405.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 7 Bap",
            "valueLow": 1215.0,
            "valueHigh": 1215.0,
            "value": 1215.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 8 Bap",
            "valueLow": 2655.0,
            "valueHigh": 2655.0,
            "value": 2655.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 10.0,
            "valueHigh": 12.0,
            "value": 11.0,
            "demand": "Высокий"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 30.0,
            "valueHigh": 33.0,
            "value": 31.5,
            "demand": "Хайп"
          },
          {
            "rollName": "≤3★ Pot",
            "valueLow": 3.0,
            "valueHigh": 4.0,
            "value": 3.5,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-toy-horn",
    "name": "Игрушечный рожок",
    "englishName": "Toy Horn",
    "category": "Биквипы",
    "value": 810.12,
    "valueLow": 0.25,
    "valueHigh": 1620.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      810.12,
      810.12
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Toy_Horn.png",
    "beequipData": [
      {
        "groupName": "Bee Ability Pollen (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bap",
            "valueLow": 2.5,
            "valueHigh": 3.0,
            "value": 2.75,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 2 Bap",
            "valueLow": 36.0,
            "valueHigh": 40.0,
            "value": 38.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 3 Bap",
            "valueLow": 310.0,
            "valueHigh": 320.0,
            "value": 315.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 4 Bap",
            "valueLow": 1620.0,
            "valueHigh": 1620.0,
            "value": 1620.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Convert rate (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 2 Convert rate",
            "valueLow": 0.25,
            "valueHigh": 0.5,
            "value": 0.38,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 3 Convert rate",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Низкий"
          },
          {
            "rollName": "{HB} 4 Convert rate",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 2.0,
            "valueHigh": 2.5,
            "value": 2.25,
            "demand": "Средний"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 4.0,
            "valueHigh": 5.0,
            "value": 4.5,
            "demand": "Высокий"
          },
          {
            "rollName": "≤3★ Pot",
            "valueLow": 0.5,
            "valueHigh": 0.75,
            "value": 0.62,
            "demand": "Средний"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-warm-scarf",
    "name": "Тёплый шарф",
    "englishName": "Warm Scarf",
    "category": "Биквипы",
    "value": 0.51,
    "valueLow": 0.025,
    "valueHigh": 1.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      0.51,
      0.51
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Warm_Scarf.png",
    "beequipData": [
      {
        "groupName": "Capacity (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Capacity",
            "valueLow": 0.75,
            "valueHigh": 1.0,
            "value": 0.88,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "≤5★ Pot",
            "valueLow": 0.025,
            "valueHigh": 0.05,
            "value": 0.04,
            "demand": "Низкий"
          }
        ]
      }
    ]
  },
  {
    "id": "beequip-whistle",
    "name": "Свисток",
    "englishName": "Whistle",
    "category": "Биквипы",
    "value": 3000.25,
    "valueLow": 0.5,
    "valueHigh": 6000.0,
    "demand": "Низкий",
    "stability": "Стабильно",
    "description": "Экипировка для пчелы. Нажмите для подробного просмотра всех роллов и их стоимости.",
    "historicalPrices": [
      3000.25,
      3000.25
    ],
    "historicalDates": [
      "2026-06-20",
      "2026-06-27"
    ],
    "image": "https://bssmvalues.com/images/Whistle.png",
    "beequipData": [
      {
        "groupName": "Bee Movespeed + Super Crit Power (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bms + {HB} 1 Scp",
            "valueLow": 7.0,
            "valueHigh": 8.0,
            "value": 7.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 1 Bms + {HB} 2 Scp",
            "valueLow": 18.0,
            "valueHigh": 20.0,
            "value": 19.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 1 Bms + {HB} 3 Scp",
            "valueLow": 56.0,
            "valueHigh": 62.0,
            "value": 59.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Bms + {HB} 4 Scp",
            "valueLow": 150.0,
            "valueHigh": 160.0,
            "value": 155.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Bms + {HB} 5 Scp",
            "valueLow": 290.0,
            "valueHigh": 305.0,
            "value": 297.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Bms + {HB} 6 Scp",
            "valueLow": 1100.0,
            "valueHigh": 1100.0,
            "value": 1100.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 1 Bms + {HB} 7 Scp",
            "valueLow": 2250.0,
            "valueHigh": 2250.0,
            "value": 2250.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 1 Bms + {HB} 8 Scp",
            "valueLow": 3750.0,
            "valueHigh": 3750.0,
            "value": 3750.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Melody (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Melody",
            "valueLow": 170.0,
            "valueHigh": 175.0,
            "value": 172.5,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Melody + Bee Movespeed (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Melody + {HB} 1 Bee Movespeed",
            "valueLow": 447.5,
            "valueHigh": 447.5,
            "value": 447.5,
            "demand": "Высокий"
          }
        ]
      },
      {
        "groupName": "Melody + Super Crit Power (Full Waxed)",
        "rolls": [
          {
            "rollName": "{+Ability from wax} Melody + {HB} 1 Scp",
            "valueLow": 275.0,
            "valueHigh": 285.0,
            "value": 280.0,
            "demand": "Средний"
          },
          {
            "rollName": "{+Ability from wax} Melody + {HB} 2 Scp",
            "valueLow": 540.0,
            "valueHigh": 560.0,
            "value": 550.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Melody + {HB} 3 Scp",
            "valueLow": 1100.0,
            "valueHigh": 1100.0,
            "value": 1100.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{+Ability from wax} Melody + {HB} 4 Scp",
            "valueLow": 2700.0,
            "valueHigh": 2700.0,
            "value": 2700.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Melody + {HB} 5 Scp",
            "valueLow": 4200.0,
            "valueHigh": 4200.0,
            "value": 4200.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{+Ability from wax} Melody + {HB} 6 Scp",
            "valueLow": 6000.0,
            "valueHigh": 6000.0,
            "value": 6000.0,
            "demand": "Хайп"
          }
        ]
      },
      {
        "groupName": "Movespeed (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 1 Bee Movespeed",
            "valueLow": 2.0,
            "valueHigh": 3.0,
            "value": 2.5,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 1 Player movespeed + {HB} 1 Bee Movespeed",
            "valueLow": 11.0,
            "valueHigh": 13.0,
            "value": 12.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 1.01x Player Movespeed",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Низкий"
          }
        ]
      },
      {
        "groupName": "Potential (Unwaxed)",
        "rolls": [
          {
            "rollName": "4★ Pot",
            "valueLow": 2.5,
            "valueHigh": 3.0,
            "value": 2.75,
            "demand": "Высокий"
          },
          {
            "rollName": "5★ Pot",
            "valueLow": 5.0,
            "valueHigh": 6.0,
            "value": 5.5,
            "demand": "Высокий"
          },
          {
            "rollName": "≤3★ Pot",
            "valueLow": 0.5,
            "valueHigh": 1.0,
            "value": 0.75,
            "demand": "Средний"
          }
        ]
      },
      {
        "groupName": "Super Crit Power (Full Waxed)",
        "rolls": [
          {
            "rollName": "{HB} 10 Scp",
            "valueLow": 2835.0,
            "valueHigh": 2835.0,
            "value": 2835.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 2 Scp",
            "valueLow": 1.5,
            "valueHigh": 2.0,
            "value": 1.75,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 3 Scp",
            "valueLow": 11.0,
            "valueHigh": 13.0,
            "value": 12.0,
            "demand": "Средний"
          },
          {
            "rollName": "{HB} 4 Scp",
            "valueLow": 32.0,
            "valueHigh": 37.0,
            "value": 34.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 5 Scp",
            "valueLow": 64.0,
            "valueHigh": 70.0,
            "value": 67.0,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 6 Scp",
            "valueLow": 165.0,
            "valueHigh": 170.0,
            "value": 167.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 7 Scp",
            "valueLow": 325.0,
            "valueHigh": 340.0,
            "value": 332.5,
            "demand": "Высокий"
          },
          {
            "rollName": "{HB} 8 Scp",
            "valueLow": 650.0,
            "valueHigh": 650.0,
            "value": 650.0,
            "demand": "Хайп"
          },
          {
            "rollName": "{HB} 9 Scp",
            "valueLow": 1460.0,
            "valueHigh": 1460.0,
            "value": 1460.0,
            "demand": "Хайп"
          }
        ]
      }
    ]
  }
];;;;;;

export const bssItemsData: BSSItem[] = rawBssItemsData.map(item => {
  const isSign = item.category === "Звездные знаки";
  const value = isSign ? 1.0 : item.value;
  const valueLow = isSign ? 1.0 : item.valueLow;
  const valueHigh = isSign ? 1.0 : item.valueHigh;
  const historicalPrices = isSign ? item.historicalPrices.map(() => 1.0) : item.historicalPrices;
  const category = item.category === "Скины на куба" ? "Скины на каба" : item.category;

  let rarity: BSSItem['rarity'] = "Обычный";
  let glowColor = "rgba(16, 185, 129, 0.2)"; // Green
  let borderColor = "border-emerald-500/20 group-hover:border-emerald-500/50";
  let badgeColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/25";
  let textColor = "text-emerald-400";

  if (value >= 20.0) {
    rarity = "Мифический";
    glowColor = "rgba(244, 63, 94, 0.25)"; // Rose
    borderColor = "border-rose-500/30 group-hover:border-rose-500/60";
    badgeColor = "bg-rose-500/10 text-rose-400 border-rose-500/25";
    textColor = "text-rose-400";
  } else if (value >= 5.0) {
    rarity = "Легендарный";
    glowColor = "rgba(245, 158, 11, 0.25)"; // Amber
    borderColor = "border-amber-500/30 group-hover:border-amber-500/60";
    badgeColor = "bg-amber-500/10 text-amber-400 border-amber-500/25";
    textColor = "text-amber-400";
  } else if (value >= 1.0) {
    rarity = "Эпический";
    glowColor = "rgba(168, 85, 247, 0.25)"; // Purple
    borderColor = "border-purple-500/30 group-hover:border-purple-500/60";
    badgeColor = "bg-purple-500/10 text-purple-400 border-purple-500/25";
    textColor = "text-purple-400";
  } else if (value >= 0.2) {
    rarity = "Редкий";
    glowColor = "rgba(59, 130, 246, 0.25)"; // Blue
    borderColor = "border-blue-500/30 group-hover:border-blue-500/60";
    badgeColor = "bg-blue-500/10 text-blue-400 border-blue-500/25";
    textColor = "text-blue-400";
  }

  return {
    ...item,
    category,
    value,
    valueLow,
    valueHigh,
    historicalPrices,
    rarity,
    glowColor,
    borderColor,
    badgeColor,
    textColor
  };
});
