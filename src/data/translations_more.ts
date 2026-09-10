import { Language } from '../types';

export const ADDITIONAL_TRANSLATIONS: Record<'uk' | 'ro' | 'sr', Record<string, any>> = {
  uk: {
    nav: {
      brand: 'TRIPORA ALANYA',
      home: 'Головна',
      tours: 'Екскурсії',
      partyBoat: 'Party Boat',
      privateTours: 'Приватні яхти',
      shopping: 'Шопінг',
      airportTransfer: 'VIP Трансфер',
      aboutUs: 'Про нас',
      reviews: 'Відгуки',
      faq: 'Часті запитання',
      contact: 'Контакти',
      bookNow: 'ЗАБРОНЮВАТИ',
      whatsapp: 'WHATSAPP',
      freeShoppingTour: 'Безкоштовний тур на шопінг',
      jewelry: 'Ювелірний центр',
      butik: 'Бутік шкіри та хутра',
      tattoo: 'Тату салон'
    },
    hero: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Більше вражень. Відкрийте для себе Аланію.',
      description: 'Найкращі екскурсії, захопливі морські подорожі та незабутні враження в Аланії та Анталії. Просте бронювання без передоплати, професійний сервіс та офіційний трансфер від вашого готелю.',
      bookTour: 'ЗАБРОНЮВАТИ ТУР',
      exploreTours: 'ПЕРЕГЛЯНУТИ ЕКСКУРСІЇ',
      trustLine: 'Просте бронювання • Оплата в день туру • Безкоштовний трансфер',
      bookOnWhatsapp: 'БРОНЮВАТИ ЧЕРЕЗ WHATSAPP',
      transferBadge: 'БЕЗКОШТОВНИЙ ТРАНСФЕР З ГОТЕЛЮ'
    },
    trustBar: {
      easyBooking: 'Просте бронювання',
      easyBookingSub: 'Онлайн або через WhatsApp',
      professionalService: 'Професійний сервіс',
      professionalServiceSub: 'Ліцензовані гіди та водії',
      localExperts: 'Місцеві експерти',
      localExpertsSub: 'Глибоке знання Аланії та регіону',
      whatsappSupport: 'Підтримка у WhatsApp',
      whatsappSupportSub: 'Швидка особиста відповідь 24/7'
    },
    marketplace: {
      badge: 'ТОП ЕКСКУРСІЇ ТА ВРАЖЕННЯ',
      title: 'Наші екскурсії в Аланії',
      subtitle: 'Ретельно підібрані тури: морські прогулянки, гірські сафарі на джипах, рафтинг, каньйони та історичні пам\'ятки Аланії за найкращими цінами.',
      filterAll: 'Всі',
      filterBoat: 'Морські прогулянки',
      filterAdventure: 'Пригоди',
      filterNature: 'Природа',
      filterCulture: 'Культура',
      filterDayTrips: 'Одноденні поїздки',
      filterPrivate: 'Приватні',
      filterFamily: 'Сімейні',
      filterLuxury: 'VIP / Люкс',
      sortRecommended: 'Рекомендовані',
      sortPriceAsc: 'Ціна: від низької',
      sortPriceDesc: 'Ціна: від високої',
      sortDuration: 'Тривалість',
      perPerson: 'з особи',
      perYacht: 'за яхту',
      from: 'Від',
      viewDetails: 'Детальніше',
      bookNow: 'Забронювати',
      whatsapp: 'WhatsApp',
      noToursFound: 'Екскурсій у цій категорії не знайдено.'
    },
    privateYachtSection: {
      badge: 'ЕКСКЛЮЗИВНИЙ ВІДПОЧИНОК',
      title: 'Оренда приватної VIP яхти в Аланії',
      subtitle: 'Насолоджуйтеся узбережжям Середземного моря у повній приватності. Ідеально підходить для пар, сімей, святкувань днів народження та компаній до 12 осіб.',
      price: '€700',
      priceUnit: 'за яхту',
      capacity: 'До 12 гостей',
      features: [
        'Особистий капітан та привітний екіпаж',
        'Купання у чистих бірюзових бухтах',
        'Маршрут повз фортецю Аланії, Червону вежу та печери',
        'Смачний свіжий обід або вечеря на заході сонця',
        'Зручний час відправлення (ранковий або вечірній)',
        'Музична система, шезлонги та спорядження для снорклінгу'
      ],
      ctaBook: 'ЗАМОВИТИ ПРИВАТНУ ЯХТУ',
      ctaWhatsapp: 'ЗАПИТАТИ У WHATSAPP'
    },
    partyBoatSection: {
      badge: 'ПОПУЛЯРНИЙ ТУР • ВСЕ ВКЛЮЧЕНО',
      title: 'Піратська вечірка на кораблі Baba 07 в Аланії',
      subtitle: 'Вирушайте у незабутній круїз вздовж узбережжя Аланії на легендарному піратському кораблі Baba 07 всього за 22€! Червона вежа, морські печери, купання у відкритому морі, запальна пінна вечірка на верхній палубі та смачний обід шведський стіл.',
      price: '22€',
      priceUnit: 'з особи',
      badgeDuration: '6 Годин • Щодня',
      features: [
        'Легендарний піратський корабель Baba 07 та DJ',
        'Круїз навколо фортеці Аланії та печер піратів',
        'Запальна пінна дискотека на верхній палубі',
        'Купання у чистих бірюзових бухтах',
        'Смачний обід шведський стіл та безалкогольні напої',
        'Безкоштовний трансфер з готелю та назад'
      ],
      hospitality: 'Обід (курка на грилі, паста, свіжі салати) та прохолодні напої включені протягом усього круїзу.',
      transferNote: 'Безкоштовний трансфер з усіх готелів Аланії, Махмутлара, Конакли, Авсаллара та Окурджалара.',
      ctaBook: 'ЗАБРОНЮВАТИ ТУР (22€)',
      ctaDetails: 'ДЕТАЛІ ЕКСКУРСІЇ',
      ctaWhatsapp: 'ЗАПИТАТИ У WHATSAPP'
    },
    transferSection: {
      badge: 'VIP ТРАНСФЕР З АЕРОПОРТУ',
      highlightBadge: 'ГАЗІПАША €50 • АНТАЛІЯ €80 • ФІКСОВАНА ЦІНА',
      title: 'VIP Трансфер з аеропортів Газіпаша та Анталія',
      subtitle: 'Комфортабельний індивідуальний трансфер на приватному Mercedes-Benz Vito між аеропортами Газіпаша (GZP - €50) або Анталія (AYT - €80) та вашим готелем в Аланії.',
      freeTitle: 'Газіпаша €50 • Анталія €80',
      freeSubtitle: 'Гарантовані фіксовані тарифи / Приватний Mercedes Vito',
      features: [
        'Трансфер з аеропорту Газіпаша (GZP): фіксована ціна €50',
        'Трансфер з аеропорту Анталія (AYT): фіксована ціна €80',
        'Без прихованих платежів та доплат за багаж',
        'Комфортабельний мінівен Mercedes-Benz Vito з кондиціонером',
        'Пряма доставка від дверей аеропорту до дверей вашого готелю',
        'Відстеження рейсу онлайн та безкоштовне очікування при затримці',
        'Зустріч з іменною табличкою на виході з терміналу',
        'Швидке підтвердження через WhatsApp'
      ],
      formTitle: 'Замовити VIP Трансфер',
      formSubtitle: 'Вкажіть деталі рейсу та готелю для миттєвого бронювання.',
      nameLabel: 'Ваше ім\'я та прізвище',
      hotelLabel: 'Назва готелю в Аланії',
      pickupLabel: 'Місце відправлення',
      dropoffLabel: 'Місце призначення',
      dateLabel: 'Дата трансферу',
      timeLabel: 'Час прибуття / виїзду',
      passengersLabel: 'Кількість пасажирів',
      flightLabel: 'Номер рейсу',
      phoneLabel: 'Номер WhatsApp',
      specialRequestsLabel: 'Особливі побажання / дитяче крісло',
      submitBtn: 'ЗАМОВИТИ ТРАНСФЕР ЧЕРЕЗ WHATSAPP',
      notice: 'Газіпаша €50 • Анталія €80 за автомобіль (до 8 пасажирів). Координація через WhatsApp (+905051422116).'
    },
    shoppingSection: {
      badge: 'ШОПІНГ ТА СТИЛЬ',
      title: 'Безкоштовний VIP шопінг-тур в Аланії',
      subtitle: 'Ми надаємо безкоштовний індивідуальний трансфер з вашого готелю та назад до найкращих сертифікованих ювелірних центрів, бутиків шкіри/хутра та тату-салонів.',
      exploreService: 'Детальніше',
      whatsappService: 'Замовити трансфер',
      viewAllShopping: 'Всі напрямки шопінгу'
    },
    whyChooseUs: {
      badge: 'ПЕРЕВАГИ TRIPORA',
      title: 'Чому мандрівники обирають нас?',
      subtitle: 'Ми поєднуємо європейський рівень гостинності з багаторічним досвідом в Аланії.',
      items: [
        {
          title: 'Професійний сервіс',
          desc: 'Надійні гіди та безпечні автобуси, щоб ваш відпочинок був бездоганним.'
        },
        {
          title: 'Безпечне бронювання',
          desc: 'Оплата в день екскурсії безпосередньо гіду. Жодних передоплат онлайн.'
        },
        {
          title: 'Найкращі враження',
          desc: 'Перевірені маршрути та найцікавіші локації Середземномор\'я.'
        },
        {
          title: 'Місцеві знавці',
          desc: 'Показуємо справжню Туреччину без зайвих комерційних зупинок.'
        },
        {
          title: 'Підтримка 24/7 у WhatsApp',
          desc: 'Швидка допомога та відповіді на всі запитання рідною мовою.'
        }
      ]
    },
    discoverAlanya: {
      badge: 'ВИЗНАЧНІ МІСЦЯ АЛАНІЇ',
      title: 'Відкрийте для себе Аланію',
      subtitle: 'Від величного середньовічного замку до бірюзових пляжів та гірських каньйонів.',
      castleTitle: 'Фортеця Аланії та Червона вежа',
      castleDesc: 'Фортеця XIII століття на скелястому півострові з панорамою 360° на море та узбережжя.',
      cleopatraTitle: 'Пляж Клеопатри',
      cleopatraDesc: 'Легендарний пляж із золотим піском та кришталево чистою морською водою.',
      cavesTitle: 'Печери Дамлаташ та піратські гроти',
      cavesDesc: 'Цілюще повітря печери Дамлаташ і дивовижні морські гроти піратів уздовж скель.',
      mountainsTitle: ' гори Тавр та річка Дім-Чай',
      mountainsDesc: 'Прохолода гірських річок, мальовничі каньйони та захоплюючі маршрути сафарі.',
      cta: 'ДИВИТИСЯ ВСІ ТУРИ'
    },
    reviews: {
      badge: 'ВІДГУКИ ГОСТЕЙ',
      title: 'Що кажуть наші мандрівники',
      subtitle: 'Сотні задоволених туристів з усього світу, які довірили свій відпочинок Tripora Alanya.',
      trustedWorldwide: 'НАМ ДОВІРЯЮТЬ ГОСТІ З УСЬОГО СВІТУ',
      countries: ['Україна', 'Польща', 'Німеччина', 'Румунія', 'Сербія', 'Велика Британія', 'Нідерланди']
    },
    gallery: {
      badge: 'МОМЕНТИ В АЛАНІЇ',
      title: 'Фотогалерея пригод',
      subtitle: 'Яскраві кадри морських круїзів, гірських доріг, рафтингу та затишних куточків Аланії.',
      filterAll: 'Всі',
      filterSea: 'Море та яхти',
      filterAdventure: 'Пригоди',
      filterLandmarks: 'Пам\'ятки',
      filterShopping: 'Шопінг та стиль'
    },
    faq: {
      badge: 'ВІДПОВІДІ НА ЗАПИТАННЯ',
      title: 'Часті запитання',
      subtitle: 'Все, що потрібно знати про трансфери з готелю, оплату, бронювання та страхування.',
      haveMoreQuestions: 'Маєте інше запитання?',
      askOnWhatsapp: 'Напишіть нам у WhatsApp'
    },
    reservation: {
      pageTitle: 'РЕЗЕРВАЦІЯ ТУРУ',
      pageSubtitle: 'Швидка форма бронювання екскурсій в Аланії без передплати з підтвердженням у WhatsApp.',
      guestInfoHeader: 'Інформація про гостя',
      firstName: 'Ім\'я',
      lastName: 'Прізвище',
      roomNumber: 'Номер кімнати',
      roomNumberPlaceholder: 'напр. 304 (або повідомите після заселення)',
      phoneNumber: 'Номер телефону / WhatsApp',
      phoneNumberPlaceholder: '+380 XX XXX XX XX',
      email: 'Електронна пошта',
      emailPlaceholder: 'vash.email@gmail.com',
      bookingInfoHeader: 'Деталі туру',
      selectTour: 'Оберіть тур / послугу',
      tourDate: 'Дата проведення туру',
      adults: 'Кількість дорослих',
      children: 'Діти (4-11 років)',
      hotelName: 'Назва вашого готелю в Аланії',
      hotelNamePlaceholder: 'напр. Delphin Deluxe, Long Beach, Saphir...',
      pickupLocation: 'Місце посадки',
      pickupLocationPlaceholder: 'Охоронний пункт / шлагбаум готелю',
      specialRequests: 'Особливі побажання',
      specialRequestsPlaceholder: 'Вегетаріанське харчування, дитяче крісло тощо',
      confirmBtn: 'ПІДТВЕРДИТИ БРОНЮВАННЯ ЧЕРЕЗ WHATSAPP',
      disclaimer: 'Оплата на місці! Жодних передоплат онлайн. Натискання кнопки відкриє повідомлення у WhatsApp для швидкого зв\'язку з Tripora Alanya.',
      successTitle: 'Майже готово!',
      successSub: 'Ваш запит сформовано і надіслано до системи. Також відкрито WhatsApp для миттєвого зв\'язку.',
      successNote: 'Будь ласка, надішліть згенероване повідомлення у WhatsApp. Копія ваучера направлена на ilyaskaradas07@hotmail.com та вашу пошту.',
      openWhatsappAgain: 'ВІДКРИТИ WHATSAPP ЗНОВУ',
      backToHome: 'На головну',
      makeAnother: 'Забронювати ще один тур'
    },
    contact: {
      badge: 'ЗВ\'ЯЗОК З НАМИ',
      title: 'Контакти Tripora Alanya',
      subtitle: 'Ми завжди на зв\'язку для організації індивідуальних екскурсій, трансферів та відпочинку.',
      company: 'TRIPORA ALANYA',
      location: 'Аланія, Анталія, Туреччина',
      whatsapp: '+90 505 142 21 16',
      email: 'ilyaskaradas07@hotmail.com',
      btnWhatsapp: 'НАПИСАТИ У WHATSAPP',
      btnBookTour: 'ОБРАТИ ЕКСКУРСІЮ',
      btnEmail: 'НАДІСЛАТИ EMAIL',
      quickNote: 'Найшвидша відповідь у WhatsApp. Пишіть нам у будь-який час!'
    },
    footer: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Більше вражень. Відкрийте для себе Аланію.',
      about: 'Провідне екскурсійне агентство в Аланії, Туреччина. Організація безпечних, якісних та незабутніх турів для гостей з усього світу.',
      navTitle: 'Навігація',
      shoppingTitle: 'Шопінг та послуги',
      contactTitle: 'Контакти',
      languagesTitle: 'Мови',
      legalTitle: 'Інформація',
      privacyPolicy: 'Політика конфіденційності',
      termsConditions: 'Правила та умови',
      cancellationPolicy: 'Умови скасування',
      cookiePolicy: 'Політика використання cookie',
      copyright: '© 2026 Tripora Alanya. Всі права захищені.',
      disclaimer: 'Всі бронювання координуються через офіційний WhatsApp (+905051422116) з ручним підтвердженням.'
    },
    aiChatbot: {
      title: 'Помічник Tripora',
      subtitle: 'Експерт з Аланії • Онлайн',
      welcome: 'Привіт! 👋 Я ваш гід Tripora. Допомогти підібрати ідеальну екскурсію чи дізнатися час виїзду з готелю?',
      placeholder: 'Запитайте про екскурсії, ціни, трансфер...',
      send: 'Надіслати',
      quickChips: [
        'Популярні тури',
        'Тури для сім\'ї з дітьми',
        'Морська прогулянка',
        'VIP трансфер'
      ]
    },
    tourDetail: {
      perPerson: 'з особи',
      perYacht: 'за яхту',
      bookTour: 'ЗАБРОНЮВАТИ ТУР',
      whatsappInquire: 'ЗАПИТАТИ У WHATSAPP',
      overview: 'Огляд',
      highlights: 'Головне в турі',
      included: 'Включено у вартість',
      excluded: 'Не включено',
      itinerary: 'Програма туру',
      pickup: 'Трансфер з готелю',
      whatToBring: 'Що взяти з собою'
    }
  },

  ro: {
    nav: {
      brand: 'TRIPORA ALANYA',
      home: 'Acasă',
      tours: 'Excursii',
      partyBoat: 'Barcă Petrecere',
      privateTours: 'Iaht Privat',
      shopping: 'Cumpărături',
      airportTransfer: 'Transfer VIP',
      aboutUs: 'Despre Noi',
      reviews: 'Recenzii',
      faq: 'Întrebări Frecvente',
      contact: 'Contact',
      bookNow: 'REZERVĂ ACUM',
      whatsapp: 'WHATSAPP',
      freeShoppingTour: 'Tur Gratuit de Cumpărături',
      jewelry: 'Bijuterii & Aur',
      butik: 'Haine de Piele & Blănuri',
      tattoo: 'Salon Tatuaje'
    },
    hero: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Trăiește Mai Mult. Descoperă Alanya.',
      description: 'Cele mai bune excursii, aventuri marine și amintiri de neuitat în Alanya și Antalya. Rezervare rapidă fără avans, servicii de top și transfer inclus de la hotel.',
      bookTour: 'REZERVĂ EXCURSIA',
      exploreTours: 'VEZI TOATE EXCURSIILE',
      trustLine: 'Rezervare Ușoară • Plată în Ziua Turului • Transfer Gratuit',
      bookOnWhatsapp: 'REZERVĂ PE WHATSAPP',
      transferBadge: 'TRANSFER GRATUIT DUS-ÎNTORS DE LA HOTEL'
    },
    trustBar: {
      easyBooking: 'Rezervare Simplă',
      easyBookingSub: 'Online sau direct pe WhatsApp',
      professionalService: 'Servicii Profesionale',
      professionalServiceSub: 'Ghid și șoferi autorizați',
      localExperts: 'Experți Locali',
      localExpertsSub: 'Cunoaștere detaliată a regiunii Alanya',
      whatsappSupport: 'Asistență WhatsApp',
      whatsappSupportSub: 'Răspuns rapid și personalizat 24/7'
    },
    marketplace: {
      badge: 'EXPERIENȚE SELECTATE',
      title: 'Excursii și Aventuri în Alanya',
      subtitle: 'Croaziere cu vaporul, safari cu jeep-ul în munți, rafting spectaculos și situri istorice renumite la cele mai bune tarife.',
      filterAll: 'Toate',
      filterBoat: 'Plimbări cu Barca',
      filterAdventure: 'Aventură',
      filterNature: 'Natură',
      filterCulture: 'Cultură',
      filterDayTrips: 'Excursii de o Zi',
      filterPrivate: 'Private',
      filterFamily: 'Familie',
      filterLuxury: 'VIP / Lux',
      sortRecommended: 'Recomandate',
      sortPriceAsc: 'Preț: Mic la Mare',
      sortPriceDesc: 'Preț: Mare la Mic',
      sortDuration: 'Durată',
      perPerson: 'de persoană',
      perYacht: 'per iaht',
      from: 'De la',
      viewDetails: 'Vezi Detalii',
      bookNow: 'Rezervă Acum',
      whatsapp: 'WhatsApp',
      noToursFound: 'Nu au fost găsite excursii în această categorie.'
    },
    privateYachtSection: {
      badge: 'EXPERIENȚĂ EXCLUSIVĂ DE LUX',
      title: 'Închiriere Iaht Privat în Alanya',
      subtitle: 'Bucură-te de coasta Mediteranei în intimitate totală la bordul propriului iaht privat. Ideal pentru cupluri, familii sau grupuri de până la 12 persoane.',
      price: '€700',
      priceUnit: 'per iaht',
      capacity: 'Până la 12 oaspeți',
      features: [
        'Căpitan VIP și echipaj dedicat la dispoziția dumneavoastră',
        'Opriri pentru înot în golfuri turcoaz retrase',
        'Traseu panoramic pe lângă Castelul Alanya și Peșterile Marine',
        'Prânz gourmet proaspăt sau cină la apus inclusă',
        'Ore flexibile de plecare (dimineața sau la apus)',
        'Sistem audio modern, șezlonguri și echipament de snorkeling'
      ],
      ctaBook: 'REZERVĂ IAHT PRIVAT',
      ctaWhatsapp: 'SOLICITĂ PE WHATSAPP'
    },
    partyBoatSection: {
      badge: 'CEL MAI POPULAR TUR • TOTUL INCLUS',
      title: 'Tur cu Barca de Petrecere Pirat Baba 07 în Alanya',
      subtitle: 'Porniți într-o croazieră legendară pe coasta Mediteranei cu nava pirat Baba 07 pentru doar 22€! Turnul Roșu, peșterile marine, opriri de înot în ape turcoaz, petrecere cu spumă pe puntea superioară și un delicios prânz bufet inclus.',
      price: '22€',
      priceUnit: 'de persoană',
      badgeDuration: '6 Ore • Zilnic',
      features: [
        'Legendara navă de pirați Baba 07 și muzică cu DJ',
        'Croazieră în jurul Castelului Alanya și al peșterilor',
        'Petrecere spectaculoasă cu spumă pe puntea superioară',
        'Opriri pentru înot în golfuri cu ape de cristal',
        'Prânz delicios tip bufet suedez și băuturi răcoritoare',
        'Transfer gratuit dus-întors de la hotel'
      ],
      hospitality: 'Prânz tip bufet (pui la grătar, paste, salate proaspete) și băuturi răcoritoare incluse pe toată durata croazierei.',
      transferNote: 'Preluare gratuită de la toate hotelurile din Alanya, Mahmutlar, Konakli, Avsallar și împrejurimi.',
      ctaBook: 'REZERVĂ TURUL (22€)',
      ctaDetails: 'VEZI DETALII TUR',
      ctaWhatsapp: 'SOLICITĂ PE WHATSAPP'
    },
    transferSection: {
      badge: 'TRANSFER VIP AEROPORT',
      highlightBadge: 'GAZİPAŞA €50 • ANTALYA €80 • PREȚURI FIXE',
      title: 'Transfer Privat VIP Aeroport — Gazipaşa & Antalya',
      subtitle: 'Transfer confortabil și punctual cu Mercedes-Benz Vito privat între Aeroportul Gazipaşa (GZP - €50) sau Antalya (AYT - €80) și hotelul tău din Alanya.',
      freeTitle: 'Gazipaşa €50 • Antalya €80',
      freeSubtitle: 'Tarif Fix Garantat / Mercedes Vito Privat',
      features: [
        'Transfer Aeroport Gazipaşa (GZP): preț fix €50',
        'Transfer Aeroport Antalya (AYT): preț fix €80',
        'Tarife fixe fără taxe ascunse sau taxe de bagaje',
        'Microbuz Mercedes-Benz Vito modern cu aer condiționat',
        'Preluare și lăsare direct la ușa hotelului din Alanya',
        'Monitorizare zbor în timp real și așteptare gratuită în caz de întârziere',
        'Întâmpinare cu pancartă personalizată la sosiri',
        'Confirmare rapidă prin WhatsApp'
      ],
      formTitle: 'Rezervă Transfer VIP Aeroport',
      formSubtitle: 'Completează detaliile zborului pentru confirmare imediată.',
      nameLabel: 'Nume și Prenume',
      hotelLabel: 'Numele Hotelului din Alanya',
      pickupLabel: 'Locație Preluare',
      dropoffLabel: 'Destinație',
      dateLabel: 'Data Transferului',
      timeLabel: 'Ora Zborului / Preluării',
      passengersLabel: 'Număr Pasageri',
      flightLabel: 'Număr Zbor',
      phoneLabel: 'Număr WhatsApp',
      specialRequestsLabel: 'Cerințe speciale / scaun copil',
      submitBtn: 'REZERVĂ TRANSFER PE WHATSAPP',
      notice: 'Gazipaşa €50 • Antalya €80 per vehicul (până la 8 pasageri). Coordonat prin WhatsApp (+905051422116).'
    },
    shoppingSection: {
      badge: 'STIL DE VIAȚĂ & CUMPĂRĂTURI',
      title: 'Tur Gratuit de Cumpărături în Alanya',
      subtitle: 'Asigurăm transfer privat gratuit dus-întors de la hotelul tău la cele mai renumite centre de bijuterii, articole din piele și studiouri de tatuaje din Alanya.',
      exploreService: 'Vezi Detalii',
      whatsappService: 'Solicită Transfer Gratuit',
      viewAllShopping: 'Toate Serviciile de Shopping'
    },
    whyChooseUs: {
      badge: 'AVANTAJELE TRIPORA',
      title: 'De Ce Să Călătorești Cu Tripora?',
      subtitle: 'Oferim servicii turistice de înaltă calitate cu prețuri corecte și transparență totală.',
      items: [
        {
          title: 'Servicii Profesionale',
          desc: 'Ghidaj excelent și transport sigur pentru o vacanță lipsită de griji.'
        },
        {
          title: 'Rezervare Fără Avans',
          desc: 'Plătești direct ghidului în ziua excursiei, în numerar sau cu cardul.'
        },
        {
          title: 'Cele Mai Bune Trasee',
          desc: 'Itinerarii verificate și experiențe autentice în întreaga regiune.'
        },
        {
          title: 'Ghidaj și Expertiză Locală',
          desc: 'Descoperă secretele Alanyei alături de o echipă experimentată.'
        },
        {
          title: 'Suport WhatsApp Non-Stop',
          desc: 'Suntem mereu disponibili pentru asistență și recomandări rapide.'
        }
      ]
    },
    discoverAlanya: {
      badge: 'ATRACȚII PRINCIPALE',
      title: 'Descoperă Alanya',
      subtitle: 'De la castele medievale și plaje de vis la cascade și trasee montane spectaculoase.',
      castleTitle: 'Castelul Alanya și Turnul Roșu',
      castleDesc: 'Fortăreață din secolul al XIII-lea cu vederi panoramice uluitoare asupra Mării Mediterane.',
      cleopatraTitle: 'Plaja Cleopatra',
      cleopatraDesc: 'Faimoasă pentru nisipul său fin și apele cristaline în care s-a scăldat însăși regina Egiptului.',
      cavesTitle: 'Peștera Damlataș și Grotele Marine',
      cavesDesc: 'Peșteri cu aer terapeutic și grote misterioase accesibile în timpul croazierelor cu vaporul.',
      mountainsTitle: 'Munții Taurus și Râul Dim',
      mountainsDesc: 'Oaze de răcoare, restaurante pe apă și aventuri pline de adrenalină pe trasee off-road.',
      cta: 'EXPLOREAZĂ EXCURSIILE'
    },
    reviews: {
      badge: 'PĂRERILE OASPEȚILOR',
      title: 'Ce Spun Călătorii Noștri',
      subtitle: 'Mii de oaspeți mulțumiți din România și din întreaga lume care au ales Tripora Alanya.',
      trustedWorldwide: 'APRECIAT DE TURIȘTI DIN TOATĂ LUMEA',
      countries: ['România', 'Polonia', 'Germania', 'Ucraina', 'Serbia', 'Marea Britanie', 'Moldova']
    },
    gallery: {
      badge: 'MOMENTE ÎN ALANYA',
      title: 'Galerie Foto',
      subtitle: 'Instantanee superbe de pe mare, din munți și din locurile emblematice ale Rivierei Turcești.',
      filterAll: 'Toate',
      filterSea: 'Mare & Iahturi',
      filterAdventure: 'Aventură',
      filterLandmarks: 'Atracții',
      filterShopping: 'Shopping'
    },
    faq: {
      badge: 'TOT CE TREBUIE SĂ ȘTII',
      title: 'Întrebări Frecvente',
      subtitle: 'Răspunsuri clare despre preluarea de la hotel, plată, rezervări și politici de anulare.',
      haveMoreQuestions: 'Ai o altă întrebare?',
      askOnWhatsapp: 'Scrie-ne pe WhatsApp'
    },
    reservation: {
      pageTitle: 'REZERVARE EXCURSIE',
      pageSubtitle: 'Formular rapid de rezervare fără avans, confirmat prin WhatsApp și email.',
      guestInfoHeader: 'Informații Oaspete',
      firstName: 'Nume',
      lastName: 'Prenume',
      roomNumber: 'Număr Cameră',
      roomNumberPlaceholder: 'ex. 304 (sau transmiteți la check-in)',
      phoneNumber: 'Număr WhatsApp / Telefon',
      phoneNumberPlaceholder: '+40 7XX XXX XXX',
      email: 'Adresă Email',
      emailPlaceholder: 'numele.tau@gmail.com',
      bookingInfoHeader: 'Detalii Rezervare',
      selectTour: 'Selectează Excursia / Serviciul',
      tourDate: 'Data Excursiei',
      adults: 'Număr Adulți',
      children: 'Copii (4-11 ani)',
      hotelName: 'Numele Hotelului din Alanya',
      hotelNamePlaceholder: 'ex. Delphin Deluxe, Long Beach, Saphir...',
      pickupLocation: 'Punct de Preluare',
      pickupLocationPlaceholder: 'Bariera / Poarta principală de securitate',
      specialRequests: 'Mențiuni / Cerințe Speciale',
      specialRequestsPlaceholder: 'Meniu vegetarian, scaun de copil etc.',
      confirmBtn: 'TRIMITE REZERVAREA PE WHATSAPP',
      disclaimer: 'Plata se face în ziua turului direct la ghid. Nu este necesar card online. Veți fi redirecționat către WhatsApp pentru confirmare.',
      successTitle: 'Rezervare Pregătită!',
      successSub: 'Detaliile au fost salvate cu succes. WhatsApp a fost deschis pentru confirmarea finală.',
      successNote: 'Te rugăm să trimiți mesajul pe WhatsApp. Copia voucherului a fost trimisă la ilyaskaradas07@hotmail.com și pe adresa ta de email.',
      openWhatsappAgain: 'DESCHIDE WHATSAPP DIN NOU',
      backToHome: 'Înapoi la Pagina Principală',
      makeAnother: 'Fă o Altă Rezervare'
    },
    contact: {
      badge: 'CONTACT',
      title: 'Contactează Tripora Alanya',
      subtitle: 'Suntem aici pentru a-ți oferi sfaturi, recomandări și suport rapid pentru vacanța ta.',
      company: 'TRIPORA ALANYA',
      location: 'Alanya, Antalya, Turcia',
      whatsapp: '+90 505 142 21 16',
      email: 'ilyaskaradas07@hotmail.com',
      btnWhatsapp: 'CONTACT PE WHATSAPP',
      btnBookTour: 'REZERVARE EXCURSIE',
      btnEmail: 'TRIMITE EMAIL',
      quickNote: 'Răspunsuri prompte pe WhatsApp în orice moment!'
    },
    footer: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Trăiește Mai Mult. Descoperă Alanya.',
      about: 'Agenție locală de top pentru excursii și transferuri în Alanya și Antalya, Turcia. Oferim experiențe sigure, premium și memorabile.',
      navTitle: 'Navigare',
      shoppingTitle: 'Shopping & Servicii',
      contactTitle: 'Contact',
      languagesTitle: 'Limbi Disponibile',
      legalTitle: 'Informații Legale',
      privacyPolicy: 'Politica de Confidențialitate',
      termsConditions: 'Termeni și Condiții',
      cancellationPolicy: 'Politica de Anulare',
      cookiePolicy: 'Politica Cookie',
      copyright: '© 2026 Tripora Alanya. Toate drepturile rezervate.',
      disclaimer: 'Toate rezervările sunt coordonate direct prin WhatsApp (+905051422116) cu confirmare manuală.'
    },
    aiChatbot: {
      title: 'Asistentul Tripora',
      subtitle: 'Expert Alanya • Online',
      welcome: 'Bună! 👋 Sunt asistentul tău virtual Tripora. Cu ce excursie sau transfer te pot ajuta astăzi?',
      placeholder: 'Întreabă despre tururi, bărci, ore de preluare...',
      send: 'Trimite',
      quickChips: [
        'Excursii Populare',
        'Tururi de Familie',
        'Croazieră cu Vaporul',
        'Transfer Aeroport'
      ]
    },
    tourDetail: {
      perPerson: 'de persoană',
      perYacht: 'per iaht',
      bookTour: 'REZERVĂ ACUM',
      whatsappInquire: 'SOLICITĂ PE WHATSAPP',
      overview: 'Prezentare generală',
      highlights: 'Puncte Forte',
      included: 'Inclus în Preț',
      excluded: 'Nu este Inclus',
      itinerary: 'Programul Excursiei',
      pickup: 'Transfer de la Hotel',
      whatToBring: 'Ce să Aduceți'
    }
  },

  sr: {
    nav: {
      brand: 'TRIPORA ALANYA',
      home: 'Početna',
      tours: 'Izleti',
      partyBoat: 'Party Brod',
      privateTours: 'Privatna Jahta',
      shopping: 'Kupovina',
      airportTransfer: 'VIP Transfer',
      aboutUs: 'O Nama',
      reviews: 'Utisci',
      faq: 'Česta Pitanja',
      contact: 'Kontakt',
      bookNow: 'REZERVIŠI',
      whatsapp: 'WHATSAPP',
      freeShoppingTour: 'Besplatna Šoping Tura',
      jewelry: 'Zlatara i Nakit',
      butik: 'Koža i Krzno Butik',
      tattoo: 'Tattoo Studio'
    },
    hero: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Doživite Više. Otkrijte Alanju.',
      description: 'Najbolji izleti, uzbudljive morske avanture i nezaboravna iskustva u Alanji i Antaliji. Jednostavna rezervacija bez avansa, vrhunska usluga i besplatan transfer iz vašeg hotela.',
      bookTour: 'REZERVIŠITE IZLET',
      exploreTours: 'POGLEDAJTE IZLETE',
      trustLine: 'Laka Rezervacija • Plaćanje na Dan Izleta • Besplatan Transfer',
      bookOnWhatsapp: 'REZERVIŠITE PREKO WHATSAPP-A',
      transferBadge: 'BESPLATAN POVRATNI TRANSFER IZ HOTELA'
    },
    trustBar: {
      easyBooking: 'Laka Rezervacija',
      easyBookingSub: 'Online ili direktno preko WhatsApp-a',
      professionalService: 'Profesionalna Usluga',
      professionalServiceSub: 'Licencirani lokalni vodiči i vozači',
      localExperts: 'Lokalni Stručnjaci',
      localExpertsSub: 'Odlično poznavanje Alanije i regije',
      whatsappSupport: 'WhatsApp Podrška',
      whatsappSupportSub: 'Brza i direktna komunikacija 24/7'
    },
    marketplace: {
      badge: 'ODABRANI DOŽIVLJAJI',
      title: 'Naši Izleti u Alanji',
      subtitle: 'Pažljivo organizovani izleti: krstarenja brodom, džip safari kroz planine, rafting kanjonom i istorijske znamenitosti po najboljim cenama.',
      filterAll: 'Sve',
      filterBoat: 'Krstarenja',
      filterAdventure: 'Avantura',
      filterNature: 'Priroda',
      filterCulture: 'Kultura',
      filterDayTrips: 'Jednodnevni Izleti',
      filterPrivate: 'Privatno',
      filterFamily: 'Porodično',
      filterLuxury: 'VIP / Luksuz',
      sortRecommended: 'Preporučeno',
      sortPriceAsc: 'Cena: Od najniže',
      sortPriceDesc: 'Cena: Od najviše',
      sortDuration: 'Trajanje',
      perPerson: 'po osobi',
      perYacht: 'po jahti',
      from: 'Od',
      viewDetails: 'Detaljnije',
      bookNow: 'Rezerviši',
      whatsapp: 'WhatsApp',
      noToursFound: 'Nema izleta u ovoj kategoriji.'
    },
    privateYachtSection: {
      badge: 'EKSKLUZIVNI LUKSUZ',
      title: 'Iznajmljivanje Privatne Jahte u Alanji',
      subtitle: 'Uživajte u obali Sredozemnog mora u potpunoj privatnosti na sopstvenoj jahti. Savršeno za parove, porodice, proslave rođendana i grupe do 12 osoba.',
      price: '€700',
      priceUnit: 'po jahti',
      capacity: 'Do 12 gostiju',
      features: [
        'Iskusan VIP kapetan i posvećena posada',
        'Kupanje u skrivenim tirkiznim uvalama',
        'Plovidba pored tvrđave Alanja, Crvene kule i pećina',
        'Svež gurmanski ručak ili večera uz zalazak sunca',
        'Fleksibilno vreme polaska (jutarnji ili zalazak sunca)',
        'Savremeno ozvučenje, ležaljke i oprema za ronjenje'
      ],
      ctaBook: 'REZERVIŠITE PRIVATNU JAHTU',
      ctaWhatsapp: 'PITAJTE NA WHATSAPP-U'
    },
    partyBoatSection: {
      badge: 'NAJPOPULARNIJI IZLET • SVE UKLJUČENO',
      title: 'Žurka na Piratskom Brodu Baba 07 u Alanji',
      subtitle: 'Isplovite na legendarnom piratskom brodu Baba 07 duž prelepe obale Alanje za samo 22€! Crvena kula, morske pećine, kupanje u tirkiznom moru, luda pena žurka na gornjoj palubi i bogat švedski sto za ručak.',
      price: '22€',
      priceUnit: 'po osobi',
      badgeDuration: '6 Sati • Svakodnevno',
      features: [
        'Legendarni piratski brod Baba 07 i muzika uživo sa DJ-em',
        'Panoramsko krstarenje oko tvrđave Alanja i pećina',
        'Luda pena žurka i animacije na gornjoj palubi',
        'Više pauza za plivanje u kristalno čistim uvalama',
        'Ukusni ručak na bazi švedskog stola i osvežavajuća pića',
        'Besplatan transfer od i do vašeg hotela'
      ],
      hospitality: 'Ručak (piletina na roštilju, testenine, salate) i bezalkoholna pića uključeni tokom cele plovidbe.',
      transferNote: 'Besplatan prevoz iz svih hotela u Alanji, Mahmutlaru, Konakliju, Avsalaru i Okurdžalaru.',
      ctaBook: 'REZERVIŠITE IZLET (22€)',
      ctaDetails: 'POGLEDAJTE DETALJE',
      ctaWhatsapp: 'PITAJTE NA WHATSAPP-U'
    },
    transferSection: {
      badge: 'VIP AERODROMSKI TRANSFER',
      highlightBadge: 'GAZIPAŠA €50 • ANTALIJA €80 • FIKSNE CENE',
      title: 'VIP Aerodromski Transfer — Gazipaša & Antalija',
      subtitle: 'Udoban i tačan privatni transfer u modernom Mercedes-Benz Vito vozilu između aerodroma Gazipaša (GZP - €50) ili Antalija (AYT - €80) i vašeg hotela u Alanji.',
      freeTitle: 'Gazipaša €50 • Antalija €80',
      freeSubtitle: 'Garantovana fiksna cena / Privatni Mercedes Vito',
      features: [
        'Transfer aerodrom Gazipaša (GZP): fiksna cena €50',
        'Transfer aerodrom Antalija (AYT): fiksna cena €80',
        'Bez skrivenih troškova i doplata za prtljag',
        'Klimatizovan luksuzni Mercedes-Benz Vito kombi',
        'Direktan prevoz od vrata aerodroma do vrata vašeg hotela',
        'Praćenje leta i besplatno čekanje u slučaju kašnjenja',
        'Doček sa vašim imenom na izlazu sa terminala',
        'Brza potvrda preko WhatsApp-a'
      ],
      formTitle: 'Rezervišite VIP Transfer',
      formSubtitle: 'Unesite podatke o letu i hotelu za brzu potvrdu.',
      nameLabel: 'Ime i Prezime',
      hotelLabel: 'Naziv Hotela u Alanji',
      pickupLabel: 'Mesto Polaska',
      dropoffLabel: 'Odredište',
      dateLabel: 'Datum Transfera',
      timeLabel: 'Vreme Leta / Polaska',
      passengersLabel: 'Broj Putnika',
      flightLabel: 'Broj Leta',
      phoneLabel: 'WhatsApp Broj Telefona',
      specialRequestsLabel: 'Posebni zahtevi / dečije sedište',
      submitBtn: 'REZERVIŠITE TRANSFER NA WHATSAPP-U',
      notice: 'Gazipaša €50 • Antalija €80 po vozilu (do 8 putnika). Dogovor direktno preko WhatsApp-a (+905051422116).'
    },
    shoppingSection: {
      badge: 'ŽIVOTNI STIL I ŠOPING',
      title: 'Besplatan VIP Šoping Izlet u Alanji',
      subtitle: 'Obezbeđujemo besplatan privatni prevoz od vašeg hotela do vrhunskih centara nakita, butika kože i krzna, kao i tattoo studija u Alanji.',
      exploreService: 'Pogledajte Detalje',
      whatsappService: 'Zatražite Besplatan Prevoz',
      viewAllShopping: 'Sve Šoping Usluge'
    },
    whyChooseUs: {
      badge: 'PREDNOSTI TRIPORA',
      title: 'Zašto Putovati Sa Nama?',
      subtitle: 'Kombinujemo vrhunske standarde gostoprimstva sa višegodišnjim iskustvom u Alanji.',
      items: [
        {
          title: 'Profesionalna Usluga',
          desc: 'Pouzdan prevoz i iskusni vodiči za vaš savršen i bezbrižan odmor.'
        },
        {
          title: 'Bez Plaćanja Unapred',
          desc: 'Plaćate na dan izleta direktno vodiču u gotovini ili karticom.'
        },
        {
          title: 'Najbolje Rute',
          desc: 'Proverene destinacije i nezaboravna iskustva širom regije.'
        },
        {
          title: 'Lokalni Vodiči',
          desc: 'Upoznajte pravu Tursku bez nepotrebnih trgovačkih zadržavanja.'
        },
        {
          title: 'Podrška 24/7 na WhatsApp-u',
          desc: 'Uvek smo tu za brze odgovore i pomoć tokom vašeg boravka.'
        }
      ]
    },
    discoverAlanya: {
      badge: 'ZNAMEINITOSTI ALANIJE',
      title: 'Otkrijte Alanju',
      subtitle: 'Od srednjovekovne tvrđave i tirkiznih plaža do planinskih reka i kanjona.',
      castleTitle: 'Tvrđava Alanja i Crvena Kula',
      castleDesc: 'Tvrđava iz 13. veka na stenovitom poluostrvu sa nezaboravnim pogledom od 360° na more.',
      cleopatraTitle: 'Plaža Kleopatra',
      cleopatraDesc: 'Čuvena peščana plaža sa kristalno čistim morem gde se kupala egipatska kraljica.',
      cavesTitle: 'Pećina Damlataš i Morske Pećine',
      cavesDesc: 'Lekovit vazduh u pećini Damlataš i uzbudljive piratske pećine duž obale.',
      mountainsTitle: 'Planina Taurus i Reka Dim Čaj',
      mountainsDesc: 'Prijatno osveženje pored reke, rafting kroz kanjon i uzbudljivi safari putevi.',
      cta: 'POGLEDAJTE SVE IZLETE'
    },
    reviews: {
      badge: 'UTISCI NAŠIH GOSTIJU',
      title: 'Šta Kažu Naši Putnici',
      subtitle: 'Hiljade zadovoljnih gostiju iz Srbije i celog sveta koji su nam poverili svoj odmor u Alanji.',
      trustedWorldwide: 'POVERENJE PUTNIKA IZ CELE EVROPE',
      countries: ['Srbija', 'Poljska', 'Nemačka', 'Ukrajina', 'Rumunija', 'Velika Britanija', 'Bosna i Hercegovina']
    },
    gallery: {
      badge: 'TRENUCI U ALANJI',
      title: 'Foto Galerija',
      subtitle: 'Predivni trenuci sa morskih krstarenja, planinskih staza i istorijskih mesta Alanije.',
      filterAll: 'Sve',
      filterSea: 'More & Jahte',
      filterAdventure: 'Avantura',
      filterLandmarks: 'Znamenitosti',
      filterShopping: 'Šoping'
    },
    faq: {
      badge: 'SVE INFORMACIJE',
      title: 'Česta Pitanja',
      subtitle: 'Jasni odgovori o polascima iz hotela, plaćanju, rezervacijama i osiguranju.',
      haveMoreQuestions: 'Imate dodatno pitanje?',
      askOnWhatsapp: 'Pišite nam na WhatsApp'
    },
    reservation: {
      pageTitle: 'REZERVACIJA IZLETA',
      pageSubtitle: 'Brza forma za rezervaciju bez plaćanja unapred, sa potvrdom preko WhatsApp-a.',
      guestInfoHeader: 'Podaci o Gostu',
      firstName: 'Ime',
      lastName: 'Prezime',
      roomNumber: 'Broj Sobe',
      roomNumberPlaceholder: 'npr. 304 (ili javite nakon prijave)',
      phoneNumber: 'Broj Telefona / WhatsApp',
      phoneNumberPlaceholder: '+381 6X XXX XXX',
      email: 'Email Adresa',
      emailPlaceholder: 'vas.email@gmail.com',
      bookingInfoHeader: 'Detalji Izleta',
      selectTour: 'Izaberite Izlet / Uslugu',
      tourDate: 'Datum Izleta',
      adults: 'Broj Odraslih',
      children: 'Deca (4-11 god.)',
      hotelName: 'Naziv Hotela u Alanji',
      hotelNamePlaceholder: 'npr. Delphin Deluxe, Long Beach, Saphir...',
      pickupLocation: 'Mesto Polaska',
      pickupLocationPlaceholder: 'Glavna rampa / kućica obezbeđenja hotela',
      specialRequests: 'Posebne Želje / Napomene',
      specialRequestsPlaceholder: 'Vegetarijanska hrana, dečije sedište itd.',
      confirmBtn: 'POTVRDITE REZERVACIJU NA WHATSAPP-U',
      disclaimer: 'Plaćanje je na dan izleta direktno vodiču. Nema unosa kartica na sajtu. Klikom na dugme otvara se WhatsApp poruka.',
      successTitle: 'Rezervacija je spremna!',
      successSub: 'Vaš zahtev je uspešno zabeležen. WhatsApp je otvoren za završnu potvrdu.',
      successNote: 'Molimo pošaljite poruku na WhatsApp. Potvrda je poslata na ilyaskaradas07@hotmail.com i vaš email.',
      openWhatsappAgain: 'PONOVO OTVORI WHATSAPP',
      backToHome: 'Nazad na Početnu',
      makeAnother: 'Rezervišite Još Jedan Izlet'
    },
    contact: {
      badge: 'KONTAKT',
      title: 'Kontaktirajte Tripora Alanya',
      subtitle: 'Tu smo za sva vaša pitanja, organizaciju privatnih tura i savete za odmor.',
      company: 'TRIPORA ALANYA',
      location: 'Alanja, Antalija, Turska',
      whatsapp: '+90 505 142 21 16',
      email: 'ilyaskaradas07@hotmail.com',
      btnWhatsapp: 'PIŠITE NA WHATSAPP',
      btnBookTour: 'REZERVIŠITE IZLET',
      btnEmail: 'POŠALJITE EMAIL',
      quickNote: 'Najbrži odgovor je preko WhatsApp-a. Pišite nam u bilo koje doba!'
    },
    footer: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Doživite Više. Otkrijte Alanju.',
      about: 'Vodeća turistička agencija za izlete i transfere u Alanji, Turska. Sigurna, kvalitetna i nezaboravna putovanja za goste iz celog sveta.',
      navTitle: 'Navigacija',
      shoppingTitle: 'Šoping & Usluge',
      contactTitle: 'Kontakt',
      languagesTitle: 'Jezici',
      legalTitle: 'Informacije',
      privacyPolicy: 'Politika Privatnosti',
      termsConditions: 'Uslovi Korišćenja',
      cancellationPolicy: 'Uslovi Otkazivanja',
      cookiePolicy: 'Politika Kolačića',
      copyright: '© 2026 Tripora Alanya. Sva prava zadržana.',
      disclaimer: 'Sve rezervacije se koordinišu preko zvaničnog WhatsApp-a (+905051422116) uz ličnu potvrdu.'
    },
    aiChatbot: {
      title: 'Tripora Pomoćnik',
      subtitle: 'Alanja Ekspert • Online',
      welcome: 'Zdravo! 👋 Ja sam vaš Tripora asistent. Kako vam mogu pomoći oko izleta ili transfera u Alanji?',
      placeholder: 'Pitajte o izletima, cenama, transferima...',
      send: 'Pošalji',
      quickChips: [
        'Najpopularniji Izleti',
        'Porodični Izleti',
        'Krstarenje Brodom',
        'VIP Transfer'
      ]
    },
    tourDetail: {
      perPerson: 'po osobi',
      perYacht: 'po jahti',
      bookTour: 'REZERVIŠITE IZLET',
      whatsappInquire: 'PITAJTE NA WHATSAPP-U',
      overview: 'Pregled',
      highlights: 'Izdvajamo',
      included: 'Uključeno u Cenu',
      excluded: 'Nije Uključeno',
      itinerary: 'Program Izleta',
      pickup: 'Transfer iz Hotela',
      whatToBring: 'Šta Poneti'
    }
  }
};
