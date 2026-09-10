import { Language } from '../types';

export interface AlanyaRegion {
  id: string;
  name: Record<string, string>;
  distanceFromCenterKm: number;
  keywords: string[];
}

export const ALANYA_REGIONS: AlanyaRegion[] = [
  {
    id: 'okurcalar',
    name: {
      tr: 'Okurcalar',
      en: 'Okurcalar',
      ru: 'Окурджалар (Okurcalar)',
      de: 'Okurcalar',
      pl: 'Okurcalar',
      uk: 'Окурджалар (Okurcalar)',
      ro: 'Okurcalar',
      sr: 'Okurdžalar (Okurcalar)'
    },
    distanceFromCenterKm: 32,
    keywords: ['okurcalar', 'delphin', 'granada luxury okurcalar', 'botanik platinum', 'kirman leodikya', 'mukarnas', 'justiniano', 'concordia', 'raymar', 'litore']
  },
  {
    id: 'avsallar',
    name: {
      tr: 'İncekum & Avsallar',
      en: 'Incekum & Avsallar',
      ru: 'Инджекум и Авсаллар (Incekum & Avsallar)',
      de: 'Incekum & Avsallar',
      pl: 'Incekum & Avsallar',
      uk: 'Інджекум та Авсаллар (Incekum & Avsallar)',
      ro: 'Incekum & Avsallar',
      sr: 'Indžekum & Avsalar (Incekum & Avsallar)'
    },
    distanceFromCenterKm: 24,
    keywords: ['avsallar', 'incekum', 'rubi platinum', 'wome', 'pegasos', 'aska just in beach', 'alaiye', 'annabella', 'sirius deluxe', 'numa bay', 'my home resort']
  },
  {
    id: 'turkler',
    name: {
      tr: 'Türkler & Payallar',
      en: 'Turkler & Payallar',
      ru: 'Тюрклер и Паяллар (Turkler & Payallar)',
      de: 'Türkler & Payallar',
      pl: 'Türkler & Payallar',
      uk: 'Тюрклер та Паяллар (Turkler & Payallar)',
      ro: 'Turkler & Payallar',
      sr: 'Turkler & Pajalar (Turkler & Payallar)'
    },
    distanceFromCenterKm: 16,
    keywords: ['turkler', 'türkler', 'payallar', 'long beach', 'haydarpasha', 'haydarpasa', 'eftalia ocean', 'eftalia splash', 'eftalia marin', 'eftalia village', 'white city', 'alan xafira', 'senza the inn']
  },
  {
    id: 'konakli',
    name: {
      tr: 'Konaklı',
      en: 'Konakli',
      ru: 'Конаклы (Konakli)',
      de: 'Konakli',
      pl: 'Konakli',
      uk: 'Конакли (Konakli)',
      ro: 'Konakli',
      sr: 'Konakli'
    },
    distanceFromCenterKm: 12,
    keywords: ['konakli', 'konaklı', 'saphir hotel', 'quattro beach', 'noxin', 'noxinn', 'club turtas', 'doganay', 'caretta', 'castival', 'insula', 'batihan', 'mirador']
  },
  {
    id: 'kleopatra',
    name: {
      tr: 'Kleopatra & Alanya Merkez',
      en: 'Cleopatra Beach & City Center',
      ru: 'Клеопатра и Центр Аланьи (Center & Cleopatra)',
      de: 'Kleopatra & Alanya Zentrum',
      pl: 'Kleopatra i Centrum Alanyi',
      uk: 'Пляж Клеопатра та Центр Аланії',
      ro: 'Plaja Cleopatra & Centru Alanya',
      sr: 'Kleopatra Plaža & Centar Alanje'
    },
    distanceFromCenterKm: 0,
    keywords: ['kleopatra', 'cleopatra', 'merkez', 'center', 'damlatas', 'damlataş', 'atlas', 'xperia', 'kahya', 'grand okan', 'cooks club', 'riviera', 'blue star', 'tac premier', 'ramira']
  },
  {
    id: 'oba',
    name: {
      tr: 'Oba & Tosmur',
      en: 'Oba & Tosmur',
      ru: 'Оба и Тосмур (Oba & Tosmur)',
      de: 'Oba & Tosmur',
      pl: 'Oba & Tosmur',
      uk: 'Оба та Тосмур (Oba & Tosmur)',
      ro: 'Oba & Tosmur',
      sr: 'Oba & Tosmur'
    },
    distanceFromCenterKm: 5,
    keywords: ['oba', 'tosmur', 'sunprime c-lounge', 'c lounge', 'grand kaptan', 'diamond hill', 'green garden', 'panorama', 'oba time', 'asia beach', 'kaila beach']
  },
  {
    id: 'mahmutlar',
    name: {
      tr: 'Kestel & Mahmutlar',
      en: 'Kestel & Mahmutlar',
      ru: 'Кестель и Махмутлар (Kestel & Mahmutlar)',
      de: 'Kestel & Mahmutlar',
      pl: 'Kestel & Mahmutlar',
      uk: 'Кестель та Махмутлар (Kestel & Mahmutlar)',
      ro: 'Kestel & Mahmutlar',
      sr: 'Kestel & Mahmutlar'
    },
    distanceFromCenterKm: 12,
    keywords: ['mahmutlar', 'kestel', 'sunstar', 'galaxy beach', 'armas prestige', 'first class', 'bone club svs', 'doris aytur', 'green peace', 'sunset']
  },
  {
    id: 'kargicak',
    name: {
      tr: 'Kargıcak & Demirtaş',
      en: 'Kargicak & Demirtas',
      ru: 'Каргыджак и Демирташ (Kargicak & Demirtas)',
      de: 'Kargicak & Demirtas',
      pl: 'Kargicak & Demirtas',
      uk: 'Каргиджак та Демірташ (Kargicak & Demirtas)',
      ro: 'Kargicak & Demirtas',
      sr: 'Kargidžak & Demirtaš (Kargicak & Demirtas)'
    },
    distanceFromCenterKm: 18,
    keywords: ['kargicak', 'kargıcak', 'demirtas', 'demirtaş', 'utopia world', 'lumos', 'club titan', 'dinler', 'goldcity', 'gold city']
  }
];

export interface HotelPreset {
  name: string;
  regionId: string;
  stars?: number;
}

export const POPULAR_ALANYA_HOTELS: HotelPreset[] = [
  // Okurcalar
  { name: 'Delphin Deluxe Resort', regionId: 'okurcalar', stars: 5 },
  { name: 'Granada Luxury Okurcalar', regionId: 'okurcalar', stars: 5 },
  { name: 'Botanik Platinum', regionId: 'okurcalar', stars: 5 },
  { name: 'Botanik Hotel & Resort', regionId: 'okurcalar', stars: 5 },
  { name: 'Kirman Leodikya Resort', regionId: 'okurcalar', stars: 5 },
  { name: 'Kirman Arycanda Deluxe', regionId: 'okurcalar', stars: 5 },
  { name: 'Mukarnas Spa Resort', regionId: 'okurcalar', stars: 5 },
  { name: 'Justiniano Club Alanya', regionId: 'okurcalar', stars: 4 },
  { name: 'Concordia Celes Hotel', regionId: 'okurcalar', stars: 5 },
  { name: 'Raymar Hotels Alanya', regionId: 'okurcalar', stars: 5 },
  { name: 'Litore Resort Hotel & Spa', regionId: 'okurcalar', stars: 5 },

  // Avsallar / Incekum
  { name: 'Rubi Platinum Spa Resort', regionId: 'avsallar', stars: 5 },
  { name: 'Wome Deluxe Hotel', regionId: 'avsallar', stars: 5 },
  { name: 'Pegasos Royal Hotel', regionId: 'avsallar', stars: 5 },
  { name: 'Pegasos Resort', regionId: 'avsallar', stars: 5 },
  { name: 'Aska Just In Beach', regionId: 'avsallar', stars: 5 },
  { name: 'Alaiye Resort & Spa Hotel', regionId: 'avsallar', stars: 5 },
  { name: 'Annabella Diamond Hotel & Spa', regionId: 'avsallar', stars: 5 },
  { name: 'Sirius Deluxe Hotel', regionId: 'avsallar', stars: 5 },
  { name: 'Numa Bay Exclusive Hotel', regionId: 'avsallar', stars: 5 },
  { name: 'My Home Resort Hotel', regionId: 'avsallar', stars: 4 },

  // Turkler / Payallar
  { name: 'Long Beach Resort & Spa Deluxe', regionId: 'turkler', stars: 5 },
  { name: 'Haydarpasha Palace', regionId: 'turkler', stars: 5 },
  { name: 'Eftalia Ocean Hotel', regionId: 'turkler', stars: 5 },
  { name: 'Eftalia Splash Resort', regionId: 'turkler', stars: 5 },
  { name: 'Eftalia Marin Hotel', regionId: 'turkler', stars: 5 },
  { name: 'Eftalia Village', regionId: 'turkler', stars: 4 },
  { name: 'White City Resort Hotel', regionId: 'turkler', stars: 5 },
  { name: 'Alan Xafira Deluxe Resort', regionId: 'turkler', stars: 5 },
  { name: 'Senza The Inn Resort & Spa', regionId: 'turkler', stars: 5 },

  // Konakli
  { name: 'Saphir Hotel & Villas', regionId: 'konakli', stars: 5 },
  { name: 'Saphir Resort & Spa', regionId: 'konakli', stars: 5 },
  { name: 'Quattro Beach Spa & Resort', regionId: 'konakli', stars: 5 },
  { name: 'NoxInn Deluxe Hotel', regionId: 'konakli', stars: 5 },
  { name: 'Beach Club Doganay', regionId: 'konakli', stars: 5 },
  { name: 'Club Turtas Beach Hotel', regionId: 'konakli', stars: 4 },
  { name: 'Club Castival Konakli', regionId: 'konakli', stars: 5 },
  { name: 'Caretta Beach Hotel', regionId: 'konakli', stars: 4 },
  { name: 'Insula Resort & Spa', regionId: 'konakli', stars: 5 },
  { name: 'Mirador Resort & Spa', regionId: 'konakli', stars: 4 },

  // Kleopatra & Alanya Merkez
  { name: 'Kleopatra Atlas Hotel (Adults Only)', regionId: 'kleopatra', stars: 4 },
  { name: 'Xperia Saray Beach Hotel', regionId: 'kleopatra', stars: 4 },
  { name: 'Xperia Grand Bali Hotel', regionId: 'kleopatra', stars: 4 },
  { name: 'Kahya Hotel Alanya', regionId: 'kleopatra', stars: 4 },
  { name: 'Grand Okan Hotel', regionId: 'kleopatra', stars: 4 },
  { name: "Cook's Club Alanya", regionId: 'kleopatra', stars: 4 },
  { name: 'Riviera Hotel & Spa', regionId: 'kleopatra', stars: 4 },
  { name: 'Blue Star Hotel', regionId: 'kleopatra', stars: 4 },
  { name: 'Tac Premier Hotel & Spa', regionId: 'kleopatra', stars: 4 },
  { name: 'Ramira Joy Hotel', regionId: 'kleopatra', stars: 4 },
  { name: 'Alanya Sunprime Dogan', regionId: 'kleopatra', stars: 4 },

  // Oba & Tosmur
  { name: 'Sunprime C-Lounge Hotel (Adults Only)', regionId: 'oba', stars: 5 },
  { name: 'Grand Kaptan Hotel', regionId: 'oba', stars: 5 },
  { name: 'Diamond Hill Resort Hotel', regionId: 'oba', stars: 5 },
  { name: 'Green Garden Resort & Spa', regionId: 'oba', stars: 5 },
  { name: 'Panorama Hotel Alanya', regionId: 'oba', stars: 4 },
  { name: 'Oba Time Hotel', regionId: 'oba', stars: 4 },
  { name: 'Asia Beach Resort & Spa', regionId: 'oba', stars: 5 },
  { name: 'Kaila Beach Hotel', regionId: 'oba', stars: 5 },

  // Kestel & Mahmutlar
  { name: 'Sunstar Resort Hotel', regionId: 'mahmutlar', stars: 5 },
  { name: 'Galaxy Beach Hotel', regionId: 'mahmutlar', stars: 4 },
  { name: 'Armas Prestige Hotel', regionId: 'mahmutlar', stars: 5 },
  { name: 'First Class Hotel', regionId: 'mahmutlar', stars: 5 },
  { name: 'Bone Club SVS', regionId: 'mahmutlar', stars: 4 },
  { name: 'Doris Aytur Hotel', regionId: 'mahmutlar', stars: 3 },
  { name: 'Green Peace Hotel', regionId: 'mahmutlar', stars: 3 },

  // Kargicak & Demirtas
  { name: 'Utopia World Hotel', regionId: 'kargicak', stars: 5 },
  { name: 'Lumos Deluxe Resort Hotel & Spa', regionId: 'kargicak', stars: 5 },
  { name: 'Goldcity Hotel & Complex', regionId: 'kargicak', stars: 5 },
  { name: 'Club Hotel Titan', regionId: 'kargicak', stars: 4 },
  { name: 'Dinler Hotel Alanya', regionId: 'kargicak', stars: 5 }
];

export interface TourPickupSchedule {
  tourId: string;
  defaultSession?: string;
  sessions?: string[];
  schedules: Record<string, Record<string, string>>; // session -> regionId -> "08:15 - 08:35"
  returnWindow?: Record<string, string>; // session -> "16:30 - 17:00"
}

/**
 * Authentic pickup times by tour and region extracted from real Alanya tour operator timetables
 */
export const TOUR_PICKUP_SCHEDULES: Record<string, TourPickupSchedule> = {
  // 1. Alanya Boat Tour
  'alanya-boat-tour': {
    tourId: 'alanya-boat-tour',
    defaultSession: 'morning',
    sessions: ['morning', 'sunset'],
    schedules: {
      morning: {
        okurcalar: '08:00 - 08:20',
        avsallar: '08:20 - 08:40',
        turkler: '08:40 - 09:00',
        konakli: '09:00 - 09:20',
        kleopatra: '09:30 - 09:50',
        oba: '09:00 - 09:20',
        mahmutlar: '08:45 - 09:05',
        kargicak: '08:30 - 08:50'
      },
      sunset: {
        okurcalar: '16:00 - 16:20',
        avsallar: '16:20 - 16:40',
        turkler: '16:40 - 16:55',
        konakli: '17:00 - 17:15',
        kleopatra: '17:25 - 17:45',
        oba: '17:00 - 17:20',
        mahmutlar: '16:30 - 16:50',
        kargicak: '16:15 - 16:35'
      }
    },
    returnWindow: {
      morning: '15:30 - 16:15',
      sunset: '21:00 - 21:45'
    }
  },

  // 2. Rafting (€32)
  'rafting': {
    tourId: 'rafting',
    defaultSession: 'morning',
    schedules: {
      morning: {
        kargicak: '07:25 - 07:35',
        mahmutlar: '07:30 - 07:50',
        oba: '07:50 - 08:10',
        kleopatra: '08:15 - 08:35',
        konakli: '08:45 - 09:00',
        turkler: '09:00 - 09:15',
        avsallar: '09:15 - 09:30',
        okurcalar: '09:30 - 09:45'
      }
    },
    returnWindow: {
      morning: '18:00 - 19:15'
    }
  },

  // 3. Tazi Canyon & Rafting
  'tazi-canyon-rafting': {
    tourId: 'tazi-canyon-rafting',
    defaultSession: 'morning',
    schedules: {
      morning: {
        kargicak: '07:15 - 07:30',
        mahmutlar: '07:30 - 07:45',
        oba: '07:45 - 08:05',
        kleopatra: '08:10 - 08:30',
        konakli: '08:40 - 08:55',
        turkler: '08:55 - 09:10',
        avsallar: '09:10 - 09:25',
        okurcalar: '09:25 - 09:40'
      }
    },
    returnWindow: {
      morning: '18:30 - 19:30'
    }
  },

  // 4. Quad & Buggy Safari & Rafting Combo
  'quad-buggy-safari-rafting': {
    tourId: 'quad-buggy-safari-rafting',
    defaultSession: 'morning',
    schedules: {
      morning: {
        kargicak: '07:15 - 07:30',
        mahmutlar: '07:30 - 07:45',
        oba: '07:45 - 08:05',
        kleopatra: '08:10 - 08:30',
        konakli: '08:40 - 08:55',
        turkler: '08:55 - 09:10',
        avsallar: '09:10 - 09:25',
        okurcalar: '09:25 - 09:40'
      }
    },
    returnWindow: {
      morning: '19:00 - 19:45'
    }
  },

  // 5. Alanya City Tour (€40 - Cable Car & Castle & Dim River)
  'alanya-city-tour': {
    tourId: 'alanya-city-tour',
    defaultSession: 'morning',
    sessions: ['morning', 'sunset'],
    schedules: {
      morning: {
        okurcalar: '08:15 - 08:35',
        avsallar: '08:35 - 08:50',
        turkler: '08:50 - 09:05',
        konakli: '09:05 - 09:20',
        kleopatra: '09:25 - 09:45',
        oba: '09:00 - 09:20',
        mahmutlar: '08:40 - 09:00',
        kargicak: '08:25 - 08:45'
      },
      sunset: {
        okurcalar: '16:00 - 16:20',
        avsallar: '16:20 - 16:35',
        turkler: '16:35 - 16:50',
        konakli: '16:50 - 17:05',
        kleopatra: '17:15 - 17:35',
        oba: '16:55 - 17:15',
        mahmutlar: '16:30 - 16:50',
        kargicak: '16:15 - 16:35'
      }
    },
    returnWindow: {
      morning: '14:30 - 15:00',
      sunset: '21:30 - 22:00'
    }
  },

  // 6. Quad Safari
  'quad-safari': {
    tourId: 'quad-safari',
    defaultSession: 'morning',
    sessions: ['morning', 'afternoon', 'sunset'],
    schedules: {
      morning: {
        okurcalar: '08:15 - 08:35',
        avsallar: '08:30 - 08:45',
        turkler: '08:45 - 09:00',
        konakli: '09:00 - 09:15',
        kleopatra: '09:20 - 09:40',
        oba: '09:00 - 09:20',
        mahmutlar: '08:40 - 09:00',
        kargicak: '08:25 - 08:45'
      },
      afternoon: {
        okurcalar: '13:00 - 13:20',
        avsallar: '13:20 - 13:35',
        turkler: '13:35 - 13:50',
        konakli: '13:50 - 14:05',
        kleopatra: '14:15 - 14:35',
        oba: '14:00 - 14:20',
        mahmutlar: '13:40 - 14:00',
        kargicak: '13:25 - 13:45'
      },
      sunset: {
        okurcalar: '15:30 - 15:50',
        avsallar: '15:50 - 16:05',
        turkler: '16:05 - 16:20',
        konakli: '16:20 - 16:35',
        kleopatra: '16:45 - 17:05',
        oba: '16:30 - 16:50',
        mahmutlar: '16:10 - 16:30',
        kargicak: '15:55 - 16:15'
      }
    },
    returnWindow: {
      morning: '13:00 - 13:30',
      afternoon: '17:30 - 18:00',
      sunset: '20:15 - 20:45'
    }
  },

  // 7. Buggy Safari
  'buggy-safari': {
    tourId: 'buggy-safari',
    defaultSession: 'morning',
    sessions: ['morning', 'afternoon', 'sunset'],
    schedules: {
      morning: {
        okurcalar: '08:15 - 08:35',
        avsallar: '08:30 - 08:45',
        turkler: '08:45 - 09:00',
        konakli: '09:00 - 09:15',
        kleopatra: '09:20 - 09:40',
        oba: '09:00 - 09:20',
        mahmutlar: '08:40 - 09:00',
        kargicak: '08:25 - 08:45'
      },
      afternoon: {
        okurcalar: '13:00 - 13:20',
        avsallar: '13:20 - 13:35',
        turkler: '13:35 - 13:50',
        konakli: '13:50 - 14:05',
        kleopatra: '14:15 - 14:35',
        oba: '14:00 - 14:20',
        mahmutlar: '13:40 - 14:00',
        kargicak: '13:25 - 13:45'
      },
      sunset: {
        okurcalar: '15:30 - 15:50',
        avsallar: '15:50 - 16:05',
        turkler: '16:05 - 16:20',
        konakli: '16:20 - 16:35',
        kleopatra: '16:45 - 17:05',
        oba: '16:30 - 16:50',
        mahmutlar: '16:10 - 16:30',
        kargicak: '15:55 - 16:15'
      }
    }
  },

  // 8. Pamukkale & Salda Lake (Early morning)
  'pamukkale': {
    tourId: 'pamukkale',
    defaultSession: 'morning',
    schedules: {
      morning: {
        kargicak: '02:45 - 03:00',
        mahmutlar: '03:00 - 03:20',
        oba: '03:20 - 03:40',
        kleopatra: '03:40 - 04:00',
        konakli: '04:00 - 04:15',
        turkler: '04:15 - 04:30',
        avsallar: '04:30 - 04:45',
        okurcalar: '04:45 - 05:00'
      }
    },
    returnWindow: {
      morning: '20:30 - 21:30'
    }
  },

  // 9. Cappadocia 2 Days
  'cappadocia-tour': {
    tourId: 'cappadocia-tour',
    defaultSession: 'morning',
    schedules: {
      morning: {
        okurcalar: '02:45 - 03:05',
        avsallar: '03:05 - 03:20',
        turkler: '03:20 - 03:35',
        konakli: '03:35 - 03:50',
        kleopatra: '03:50 - 04:10',
        oba: '04:10 - 04:25',
        mahmutlar: '04:25 - 04:45',
        kargicak: '04:45 - 05:00'
      }
    },
    returnWindow: {
      morning: 'Next Day 20:00 - 21:00'
    }
  },

  // 10. Green Canyon Boat & Safari
  'green-canyon': {
    tourId: 'green-canyon',
    defaultSession: 'morning',
    schedules: {
      morning: {
        kargicak: '07:45 - 08:00',
        mahmutlar: '08:00 - 08:20',
        oba: '08:20 - 08:40',
        kleopatra: '08:40 - 09:00',
        konakli: '09:00 - 09:15',
        turkler: '09:15 - 09:30',
        avsallar: '09:30 - 09:45',
        okurcalar: '09:45 - 10:00'
      }
    },
    returnWindow: {
      morning: '17:00 - 17:45'
    }
  },

  // 11. Diving
  'diving': {
    tourId: 'diving',
    defaultSession: 'morning',
    schedules: {
      morning: {
        okurcalar: '08:15 - 08:30',
        avsallar: '08:30 - 08:45',
        turkler: '08:45 - 09:00',
        konakli: '09:00 - 09:15',
        kleopatra: '09:20 - 09:40',
        oba: '09:00 - 09:20',
        mahmutlar: '08:45 - 09:00',
        kargicak: '08:30 - 08:45'
      }
    },
    returnWindow: {
      morning: '16:00 - 16:30'
    }
  },

  // 12. Paragliding (Hourly slots)
  'paragliding': {
    tourId: 'paragliding',
    defaultSession: '11:00',
    sessions: ['09:00', '11:00', '13:00', '15:00', '17:00'],
    schedules: {
      '09:00': {
        okurcalar: '08:00 - 08:15',
        avsallar: '08:15 - 08:25',
        turkler: '08:25 - 08:35',
        konakli: '08:35 - 08:45',
        kleopatra: '08:45 - 09:00',
        oba: '08:35 - 08:45',
        mahmutlar: '08:20 - 08:35',
        kargicak: '08:10 - 08:25'
      },
      '11:00': {
        okurcalar: '10:00 - 10:15',
        avsallar: '10:15 - 10:25',
        turkler: '10:25 - 10:35',
        konakli: '10:35 - 10:45',
        kleopatra: '10:45 - 11:00',
        oba: '10:35 - 10:45',
        mahmutlar: '10:20 - 10:35',
        kargicak: '10:10 - 10:25'
      },
      '13:00': {
        okurcalar: '12:00 - 12:15',
        avsallar: '12:15 - 12:25',
        turkler: '12:25 - 12:35',
        konakli: '12:35 - 12:45',
        kleopatra: '12:45 - 13:00',
        oba: '12:35 - 12:45',
        mahmutlar: '12:20 - 12:35',
        kargicak: '12:10 - 12:25'
      },
      '15:00': {
        okurcalar: '14:00 - 14:15',
        avsallar: '14:15 - 14:25',
        turkler: '14:25 - 14:35',
        konakli: '14:35 - 14:45',
        kleopatra: '14:45 - 15:00',
        oba: '14:35 - 14:45',
        mahmutlar: '14:20 - 14:35',
        kargicak: '14:10 - 14:25'
      },
      '17:00': {
        okurcalar: '16:00 - 16:15',
        avsallar: '16:15 - 16:25',
        turkler: '16:25 - 16:35',
        konakli: '16:35 - 16:45',
        kleopatra: '16:45 - 17:00',
        oba: '16:35 - 16:45',
        mahmutlar: '16:20 - 16:35',
        kargicak: '16:10 - 16:25'
      }
    }
  },

  // 13. Turkish Hamam & Spa
  'turkish-hamam-spa': {
    tourId: 'turkish-hamam-spa',
    defaultSession: '10:00',
    sessions: ['09:00', '10:00', '11:00', '13:00', '14:00', '16:00', '18:00'],
    schedules: {
      '10:00': {
        okurcalar: '09:15 - 09:30',
        avsallar: '09:25 - 09:35',
        turkler: '09:30 - 09:40',
        konakli: '09:35 - 09:45',
        kleopatra: '09:40 - 09:55',
        oba: '09:35 - 09:45',
        mahmutlar: '09:25 - 09:35',
        kargicak: '09:15 - 09:25'
      }
    }
  },

  // 14. The Land of Legends Night Show
  'the-land-of-legends-night-show': {
    tourId: 'the-land-of-legends-night-show',
    defaultSession: 'evening',
    schedules: {
      evening: {
        kargicak: '16:00 - 16:15',
        mahmutlar: '16:15 - 16:30',
        oba: '16:30 - 16:45',
        kleopatra: '16:45 - 17:05',
        konakli: '17:05 - 17:20',
        turkler: '17:20 - 17:35',
        avsallar: '17:35 - 17:50',
        okurcalar: '17:50 - 18:05'
      }
    },
    returnWindow: {
      evening: '00:30 - 01:30'
    }
  },

  // 15. Antalya City Tour
  'antalya-city-tour': {
    tourId: 'antalya-city-tour',
    defaultSession: 'morning',
    schedules: {
      morning: {
        kargicak: '07:30 - 07:45',
        mahmutlar: '07:45 - 08:00',
        oba: '08:00 - 08:20',
        kleopatra: '08:20 - 08:40',
        konakli: '08:45 - 09:00',
        turkler: '09:00 - 09:15',
        avsallar: '09:15 - 09:30',
        okurcalar: '09:30 - 09:45'
      }
    },
    returnWindow: {
      morning: '18:00 - 18:45'
    }
  },

  // 16. Dolphin Show
  'dolphin-show': {
    tourId: 'dolphin-show',
    defaultSession: 'morning',
    schedules: {
      morning: {
        okurcalar: '08:30 - 08:45',
        avsallar: '08:45 - 09:00',
        turkler: '09:00 - 09:15',
        konakli: '09:15 - 09:30',
        kleopatra: '09:30 - 09:45',
        oba: '09:15 - 09:30',
        mahmutlar: '09:00 - 09:15',
        kargicak: '08:45 - 09:00'
      }
    }
  },

  // 17. Snorkel Tour
  'snorkel-tour': {
    tourId: 'snorkel-tour',
    defaultSession: 'morning',
    schedules: {
      morning: {
        okurcalar: '08:15 - 08:30',
        avsallar: '08:30 - 08:45',
        turkler: '08:45 - 09:00',
        konakli: '09:00 - 09:15',
        kleopatra: '09:30 - 09:45',
        oba: '09:00 - 09:15',
        mahmutlar: '08:45 - 09:00',
        kargicak: '08:30 - 08:45'
      }
    }
  },

  // 18. Private Yacht
  'private-yacht': {
    tourId: 'private-yacht',
    defaultSession: 'morning',
    sessions: ['morning', 'sunset'],
    schedules: {
      morning: {
        okurcalar: '08:45 - 09:05',
        avsallar: '09:00 - 09:20',
        turkler: '09:10 - 09:25',
        konakli: '09:20 - 09:35',
        kleopatra: '09:35 - 09:50',
        oba: '09:20 - 09:35',
        mahmutlar: '09:05 - 09:20',
        kargicak: '08:50 - 09:10'
      },
      sunset: {
        okurcalar: '15:15 - 15:35',
        avsallar: '15:30 - 15:45',
        turkler: '15:40 - 15:55',
        konakli: '15:50 - 16:05',
        kleopatra: '16:10 - 16:25',
        oba: '15:55 - 16:10',
        mahmutlar: '15:40 - 15:55',
        kargicak: '15:25 - 15:40'
      }
    }
  },

  // Free Shopping Tour
  'free-shopping-tour': {
    tourId: 'free-shopping-tour',
    defaultSession: 'flexible',
    schedules: {
      flexible: {
        okurcalar: '10:00 - 19:00 (İsteğe göre 30 dk içinde)',
        avsallar: '10:00 - 19:00 (İsteğe göre 30 dk içinde)',
        turkler: '10:00 - 19:00 (İsteğe göre 30 dk içinde)',
        konakli: '10:00 - 19:00 (İsteğe göre 30 dk içinde)',
        kleopatra: '10:00 - 19:00 (İsteğe göre 20 dk içinde)',
        oba: '10:00 - 19:00 (İsteğe göre 20 dk içinde)',
        mahmutlar: '10:00 - 19:00 (İsteğe göre 25 dk içinde)',
        kargicak: '10:00 - 19:00 (İsteğe göre 30 dk içinde)'
      }
    }
  }
};

/**
 * Automatically detects the Alanya region from a typed hotel name or search string
 */
export function detectRegionFromHotel(input: string): AlanyaRegion {
  if (!input || !input.trim()) {
    return ALANYA_REGIONS[4]; // Default to Cleopatra & Center
  }

  const clean = input.toLowerCase().trim();

  // 1. Direct match in popular hotels
  const matchedHotel = POPULAR_ALANYA_HOTELS.find(h => 
    clean.includes(h.name.toLowerCase()) || h.name.toLowerCase().includes(clean)
  );
  if (matchedHotel) {
    const reg = ALANYA_REGIONS.find(r => r.id === matchedHotel.regionId);
    if (reg) return reg;
  }

  // 2. Keyword match in regions
  for (const region of ALANYA_REGIONS) {
    for (const kw of region.keywords) {
      if (clean.includes(kw)) {
        return region;
      }
    }
  }

  // Fallback: Cleopatra & Center
  return ALANYA_REGIONS[4];
}

export interface PickupCalculationResult {
  pickupTime: string;
  region: AlanyaRegion;
  returnWindow?: string;
  isGuaranteed: boolean;
  securityNotice: Record<string, string>;
}

/**
 * Calculates the exact pickup time for a given tour, hotel/region, and optional session
 */
export function getTourPickupTime(
  tourId: string,
  hotelOrRegion: string,
  session?: string
): PickupCalculationResult {
  const region = detectRegionFromHotel(hotelOrRegion);
  const scheduleData = TOUR_PICKUP_SCHEDULES[tourId] || TOUR_PICKUP_SCHEDULES['alanya-boat-tour'];

  const activeSession = session || scheduleData.defaultSession || 'morning';
  const sessionSchedule = scheduleData.schedules[activeSession] || scheduleData.schedules[Object.keys(scheduleData.schedules)[0]];

  const pickupTime = sessionSchedule ? sessionSchedule[region.id] || '08:30 - 09:00' : '08:30 - 09:00';
  const returnWindow = scheduleData.returnWindow ? scheduleData.returnWindow[activeSession] : undefined;

  return {
    pickupTime,
    region,
    returnWindow,
    isGuaranteed: true,
    securityNotice: {
      tr: '⚠️ Önemli Kural: Otel yönetmelikleri gereğince tur servis araçları otel içine giremez. Lütfen belirtilen saatte otel güvenlik kapısının / bariyerinin dışında hazır olunuz.',
      en: '⚠️ Important Rule: Tour transfer buses are not permitted inside hotel grounds. Please be waiting outside the main hotel security gate/barrier at your pickup time.',
      ru: '⚠️ Важное правило: Туристический транспорт не заезжает на территорию отеля. Пожалуйста, ожидайте снаружи перед будкой охраны/шлагбаумом отеля.',
      de: '⚠️ Wichtige Regel: Transferbusse dürfen nicht aufs Hotelgelände fahren. Bitte warten Sie pünktlich draußen an der Sicherheitsschranke des Hotels.',
      pl: '⚠️ Ważna zasada: Autobusy wycieczkowe nie wjeżdżają na teren hotelu. Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.',
      uk: '⚠️ Важливе правило: Згідно з правилами готелів, екскурсійні автобуси не заїжджають на територію. Будь ласка, очікуйте біля головного шлагбаума / поста охорони готелю.',
      ro: '⚠️ Regulă importantă: Din motive de securitate hotelieră, autocarele de transfer nu intră în curtea interioară a hotelului. Vă rugăm să așteptați la bariera principală de securitate a hotelului.',
      sr: '⚠️ Važno pravilo: Iz bezbednosnih razloga, turistički autobusi ne ulaze u krug hotela. Molimo sačekajte kod glavne rampe / kućice obezbeđenja hotela.'
    }
  };
}
