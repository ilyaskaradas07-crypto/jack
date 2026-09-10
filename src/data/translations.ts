import { Language } from '../types';
import { ADDITIONAL_TRANSLATIONS } from './translations_more';

export const TRANSLATIONS: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      brand: 'TRIPORA ALANYA',
      home: 'Home',
      tours: 'Tours',
      partyBoat: 'Party Boat',
      privateTours: 'Private Tours',
      shopping: 'Shopping',
      airportTransfer: 'Airport Transfer',
      aboutUs: 'About Us',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
      bookNow: 'BOOK NOW',
      whatsapp: 'WHATSAPP',
      freeShoppingTour: 'Free Shopping Tour',
      jewelry: 'Jewelry / Kuyumcu',
      butik: 'Butik',
      tattoo: 'Tattoo Art'
    },
    hero: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Experience More. Discover Alanya.',
      description: 'Discover the best tours, excursions and unforgettable experiences in Alanya and Antalya. Easy booking, professional service and unforgettable memories.',
      bookTour: 'BOOK YOUR TOUR',
      exploreTours: 'EXPLORE TOURS',
      trustLine: 'Easy Booking • Professional Service • Local Experts',
      bookOnWhatsapp: 'BOOK ON WHATSAPP',
      transferBadge: 'FREE ARRIVAL & RETURN TRANSFER'
    },
    trustBar: {
      easyBooking: 'Easy Booking',
      easyBookingSub: 'Book online or via WhatsApp',
      professionalService: 'Professional Service',
      professionalServiceSub: 'Certified local guides & drivers',
      localExperts: 'Local Experts',
      localExpertsSub: 'Deep knowledge of Alanya & Antalya',
      whatsappSupport: 'WhatsApp Support',
      whatsappSupportSub: 'Fast personal communication'
    },
    marketplace: {
      badge: 'Curated Experiences',
      title: 'Explore Our Experiences',
      subtitle: 'Hand-picked excursions, thrilling sea adventures, mountain safaris and historical wonders around Alanya and Antalya.',
      filterAll: 'All',
      filterBoat: 'Boat Tours',
      filterAdventure: 'Adventure',
      filterNature: 'Nature',
      filterCulture: 'Culture',
      filterDayTrips: 'Day Trips',
      filterPrivate: 'Private',
      filterFamily: 'Family',
      filterLuxury: 'Luxury',
      sortRecommended: 'Recommended',
      sortPriceAsc: 'Price: Low to High',
      sortPriceDesc: 'Price: High to Low',
      sortDuration: 'Duration',
      perPerson: 'per person',
      perYacht: 'per yacht',
      from: 'From',
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      whatsapp: 'WhatsApp',
      noToursFound: 'No tours found in this category.'
    },
    privateYachtSection: {
      badge: 'EXCLUSIVE LUXURY EXPERIENCE',
      title: 'Private Yacht Charter in Alanya',
      subtitle: 'Enjoy Alanya\'s Mediterranean coastline in complete privacy with your own private yacht. Perfect for couples, families, celebrations and groups looking for an exclusive luxury experience.',
      price: '€700',
      priceUnit: 'per yacht',
      capacity: 'Up to 12 Guests',
      features: [
        'Dedicated VIP Captain & Service Crew',
        'Secluded Swimming Stops in Turquoise Bays',
        'Cruise around Alanya Castle & Historic Caves',
        'Fresh Gourmet Lunch or Sunset Dinner Included',
        'Flexible Departure Hours (Morning or Sunset)',
        'Modern Sound System & Snorkel Equipment'
      ],
      ctaBook: 'BOOK PRIVATE YACHT',
      ctaWhatsapp: 'INQUIRE ON WHATSAPP'
    },
    partyBoatSection: {
      badge: 'MOST POPULAR BOAT TOUR • ALL-INCLUSIVE',
      title: 'Alanya Party Boat Tour (Baba 07)',
      subtitle: 'Set sail along Alanya’s turquoise coastline aboard the legendary Baba 07 pirate ship! Cruise past the historic Red Tower, Alanya Castle and pirate caves, swim in crystalline bays, enjoy a wild upper-deck foam party with DJ music, and savor an open-buffet lunch on board.',
      price: '€22',
      priceUnit: 'per person',
      badgeDuration: '6 Hours • Daily Departure',
      features: [
        'Legendary Baba 07 Pirate Ship & Live DJ Music',
        'Cruise around Alanya Castle, Red Tower & Sea Caves',
        'Wild Upper-Deck Foam Party & Fun Animations',
        'Multiple Swimming Stops in Crystal Turquoise Bays',
        'Delicious Open-Buffet BBQ Lunch on Board',
        'Free Roundtrip Hotel Pickup & Drop-Off Included'
      ],
      hospitality: 'Open-buffet lunch (grilled chicken, pasta, seasonal salads) and soft drinks included on board throughout the day.',
      transferNote: 'Free roundtrip transfer from all Alanya, Mahmutlar, Oba, Konakli, Avsallar & Okurcalar hotels.',
      ctaBook: 'BOOK PARTY BOAT (22€)',
      ctaDetails: 'VIEW TOUR DETAILS',
      ctaWhatsapp: 'INQUIRE ON WHATSAPP'
    },
    transferSection: {
      badge: 'VIP AIRPORT TRANSFER',
      highlightBadge: 'GAZİPAŞA €50 • ANTALYA €80 • FIXED RATES',
      title: 'VIP Airport Transfer — Gazipaşa, Antalya & Alanya',
      subtitle: 'Enjoy a punctual and comfortable private VIP transfer between Gazipaşa Airport (GZP - €50) or Antalya Airport (AYT - €80) and your hotel in Alanya. Premium air-conditioned Mercedes Vito with guaranteed fixed prices.',
      freeTitle: 'Gazipaşa €50 • Antalya €80',
      freeSubtitle: 'Fixed Guaranteed Rates / Private Mercedes Vito',
      features: [
        'Gazipaşa Airport (GZP) Transfer: €50 fixed price',
        'Antalya Airport (AYT) Transfer: €80 fixed price',
        'Guaranteed fixed rates — no hidden fees or extra baggage charges',
        'Private modern Mercedes-Benz Vito VIP air-conditioned van',
        'Direct hotel door-to-door drop-off in Alanya & surrounding resorts',
        'Live flight monitoring & free waiting time for delayed flights',
        'Personal meet & greet with your name board at arrival gate',
        'Easy WhatsApp booking with instant confirmation'
      ],
      formTitle: 'Book VIP Airport Transfer',
      formSubtitle: 'Select your airport route and enter your details below for instant WhatsApp booking.',
      nameLabel: 'Your Full Name',
      hotelLabel: 'Hotel Name in Alanya',
      pickupLabel: 'Pickup Location',
      dropoffLabel: 'Drop-off Location',
      dateLabel: 'Transfer Date',
      timeLabel: 'Flight / Pickup Time',
      passengersLabel: 'Passengers Count',
      flightLabel: 'Flight Number',
      phoneLabel: 'WhatsApp Phone Number',
      specialRequestsLabel: 'Special Requests / Child seat / Luggage details',
      submitBtn: 'BOOK VIP TRANSFER VIA WHATSAPP',
      notice: 'Gazipaşa €50 • Antalya €80 fixed rate per vehicle (up to 8 passengers). Coordinated directly via WhatsApp (+905051422116).'
    },
    shoppingSection: {
      badge: 'LOCAL EXPERIENCE & LIFESTYLE',
      title: 'Shopping & Creative Experiences in Alanya',
      subtitle: 'Discover more than tours. Explore shopping, fashion, jewelry and creative experiences in Alanya with complimentary private hotel transfers.',
      exploreService: 'Explore Details',
      whatsappService: 'WhatsApp Inquiry',
      viewAllShopping: 'View All Shopping Experiences'
    },
    whyChooseUs: {
      badge: 'THE TRIPORA DIFFERENCE',
      title: 'Why Travel With Tripora?',
      subtitle: 'We combine international hospitality standards with deep regional expertise to deliver the finest experiences in southern Turkey.',
      items: [
        {
          title: 'Professional Service',
          desc: 'Reliable local experts dedicated to making your experience unforgettable from start to finish.'
        },
        {
          title: 'Easy Booking',
          desc: 'Book your experience quickly online or directly through WhatsApp with transparent communication.'
        },
        {
          title: 'Best Experiences',
          desc: 'Carefully selected tours, verified routes and quality activities around Alanya and Antalya.'
        },
        {
          title: 'Local Experts',
          desc: 'Discover Turkey with people who know the destination, hidden bays, culture and traditions.'
        },
        {
          title: 'WhatsApp Support',
          desc: 'Reach our team directly through WhatsApp for fast, friendly and convenient assistance anytime.'
        }
      ]
    },
    discoverAlanya: {
      badge: 'DESTINATION HIGHLIGHTS',
      title: 'Discover Alanya',
      subtitle: 'From ancient castles and turquoise waters to thrilling adventures and unforgettable day trips, Alanya has something for every traveler.',
      castleTitle: 'Alanya Castle & Red Tower',
      castleDesc: 'Perched high above the Mediterranean on a rocky peninsula, the 13th-century Seljuk fortress offers unmatched 360° panoramas of the sea and coastline.',
      cleopatraTitle: 'Cleopatra Beach',
      cleopatraDesc: 'Legendary golden sand beach renowned for its crystal clear water where Queen Cleopatra of Egypt is said to have bathed.',
      cavesTitle: 'Damlatas & Pirate Caves',
      cavesDesc: 'Marvelous stalactite caves with therapeutic air and coastal pirate caves accessible during our famous boat cruises.',
      mountainsTitle: 'Taurus Mountains & Rivers',
      mountainsDesc: 'Majestic mountain scenery providing cool mountain breezes, rafting canyons and off-road safari trails.',
      cta: 'EXPLORE ALANYA TOURS'
    },
    reviews: {
      badge: 'GUEST EXPERIENCES',
      title: 'What Our Guests Say',
      subtitle: 'Trusted by travelers from around the world who experienced the best of Alanya with Tripora.',
      trustedWorldwide: 'TRUSTED BY TRAVELERS FROM AROUND THE WORLD',
      countries: ['UK', 'Germany', 'Netherlands', 'Poland', 'Sweden', 'Denmark', 'France', 'Belgium', 'Czech Republic']
    },
    gallery: {
      badge: 'MOMENTS IN ALANYA',
      title: 'Visual Journey',
      subtitle: 'Captivating glimpses of sea voyages, mountain trails, historical wonders and vibrant experiences in Alanya.',
      filterAll: 'All',
      filterSea: 'Sea & Yacht',
      filterAdventure: 'Adventure',
      filterLandmarks: 'Landmarks',
      filterShopping: 'Shopping & Style'
    },
    faq: {
      badge: 'EVERYTHING YOU NEED TO KNOW',
      title: 'Frequently Asked Questions',
      subtitle: 'Clear, direct answers about booking, pickups, airport transfers, shopping and customer care.',
      haveMoreQuestions: 'Have a specific question not listed here?',
      askOnWhatsapp: 'Chat With Us on WhatsApp'
    },
    reservation: {
      pageTitle: 'RESERVATION',
      pageSubtitle: 'Book your tour or experience in Alanya with Tripora. Quick, straightforward and confirmed via WhatsApp.',
      guestInfoHeader: 'Guest Information',
      firstName: 'First Name',
      lastName: 'Last Name',
      roomNumber: 'Room Number',
      roomNumberPlaceholder: 'e.g. 304 (or write: Will provide upon check-in)',
      phoneNumber: 'Phone / WhatsApp Number',
      phoneNumberPlaceholder: '+44 7123 456789',
      email: 'Email (Optional)',
      emailPlaceholder: 'your.name@example.com',
      bookingInfoHeader: 'Booking Information',
      selectTour: 'Select Tour / Experience',
      tourDate: 'Date of Tour',
      adults: 'Number of Adults',
      children: 'Number of Children',
      hotelName: 'Hotel Name in Alanya Region',
      hotelNamePlaceholder: 'e.g. Sunprime C-Lounge, Grand Kaptan, etc.',
      pickupLocation: 'Pickup Location',
      pickupLocationPlaceholder: 'e.g. Hotel Main Reception or Security Gate',
      specialRequests: 'Special Requests / Questions',
      specialRequestsPlaceholder: 'Vegetarian meal, child seat, birthday surprise, etc.',
      confirmBtn: 'CONFIRM BOOKING VIA WHATSAPP',
      disclaimer: 'No payment is taken online. Clicking the button opens WhatsApp with your pre-filled details to send directly to Tripora Alanya (+905051422116) for personal confirmation.',
      successTitle: 'Almost there!',
      successSub: 'Your reservation details are ready. WhatsApp has been opened so you can send your booking request directly to Tripora Alanya.',
      successNote: 'Please send the message in WhatsApp to complete your booking request. Our team will contact you to confirm the details.',
      openWhatsappAgain: 'OPEN WHATSAPP AGAIN',
      backToHome: 'Back to Homepage',
      makeAnother: 'Make Another Booking'
    },
    contact: {
      badge: 'GET IN TOUCH',
      title: 'Contact Tripora Alanya',
      subtitle: 'We are here to assist with recommendations, private yacht bookings, custom itineraries, VIP airport transfers (€80), and free shopping tours.',
      company: 'TRIPORA ALANYA',
      location: 'Alanya, Antalya, Turkey',
      whatsapp: '+90 505 142 21 16',
      email: 'ilyaskaradas07@hotmail.com',
      btnWhatsapp: 'WHATSAPP US',
      btnBookTour: 'BOOK A TOUR',
      btnEmail: 'EMAIL US',
      quickNote: 'Fastest responses via WhatsApp. Feel free to message us in English, German, Russian, or Turkish.'
    },
    footer: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Experience More. Discover Alanya.',
      about: 'A premier travel and excursion company based in Alanya, Antalya, Turkey. Dedicated to creating high-end, reliable and memorable holiday adventures for international guests.',
      navTitle: 'Navigation',
      shoppingTitle: 'Shopping & Services',
      contactTitle: 'Contact Us',
      languagesTitle: 'Languages',
      legalTitle: 'Legal & Policies',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      cancellationPolicy: 'Cancellation Policy',
      cookiePolicy: 'Cookie Policy',
      copyright: '© 2026 Tripora Alanya. All rights reserved.',
      disclaimer: 'All reservations are coordinated directly through our official WhatsApp (+905051422116) with manual confirmation by Tripora Alanya.'
    },
    aiChatbot: {
      title: 'Tripora Travel Assistant',
      subtitle: 'Alanya Expert • Online',
      welcome: 'Hi! 👋 I\'m Tripora\'s Travel Assistant. Looking for the perfect experience in Alanya? Tell me what you enjoy and I\'ll help you find the right tour.',
      placeholder: 'Ask about tours, boat trips, free transfers...',
      send: 'Send',
      quickChips: [
        'Find a Tour',
        'Best Tours for Families',
        'Adventure Tours',
        'Boat Tours',
        'Private Yacht',
        'Airport Transfer',
        'Free Shopping Tour',
        'Jewelry',
        'Butik',
        'Tattoo',
        'Book on WhatsApp'
      ],
      whatsappPrompt: 'Continue on WhatsApp to confirm your booking with Tripora Alanya.',
      whatsappBtn: 'CHAT ON WHATSAPP'
    },
    mobileBar: {
      bookNow: 'BOOK NOW',
      whatsapp: 'WHATSAPP'
    }
  },
  tr: {
    nav: {
      brand: 'TRIPORA ALANYA',
      home: 'Ana Sayfa',
      tours: 'Turlar',
      partyBoat: 'Parti Teknesi',
      privateTours: 'Özel Turlar',
      shopping: 'Alışveriş',
      airportTransfer: 'Havalimanı Transferi',
      aboutUs: 'Hakkımızda',
      reviews: 'Yorumlar',
      faq: 'SSS',
      contact: 'İletişim',
      bookNow: 'REZERVASYON YAP',
      whatsapp: 'WHATSAPP',
      freeShoppingTour: 'Ücretsiz Alışveriş Turu',
      jewelry: 'Mücevher / Kuyumcu',
      butik: 'Butik',
      tattoo: 'Dövme / Tattoo'
    },
    hero: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Daha Fazlasını Yaşa. Alanya\'yı Keşfet.',
      description: 'Alanya ve Antalya\'daki en iyi turları, gezileri ve unutulmaz deneyimleri keşfedin. Kolay rezervasyon, profesyonel hizmet ve unutulmaz anılar.',
      bookTour: 'TURUNU AYIRT',
      exploreTours: 'TURLARI KEŞFET',
      trustLine: 'Kolay Rezervasyon • Profesyonel Hizmet • Yerel Uzmanlar',
      bookOnWhatsapp: 'WHATSAPP\'TAN AYIRT',
      transferBadge: 'ÜCRETSİZ GELİŞ VE DÖNÜŞ TRANSFERİ'
    },
    trustBar: {
      easyBooking: 'Kolay Rezervasyon',
      easyBookingSub: 'Online veya doğrudan WhatsApp ile',
      professionalService: 'Profesyonel Hizmet',
      professionalServiceSub: 'Sertifikalı yerel rehberler ve kaptanlar',
      localExperts: 'Yerel Uzmanlar',
      localExpertsSub: 'Alanya & Antalya bölgesine tam hakimiyet',
      whatsappSupport: 'WhatsApp Desteği',
      whatsappSupportSub: 'Hızlı ve birebir kişisel iletişim'
    },
    marketplace: {
      badge: 'Seçkin Deneyimler',
      title: 'Deneyimlerimizi Keşfedin',
      subtitle: 'Alanya ve Antalya çevresinde özenle seçilmiş günübirlik turlar, deniz maceraları, dağ safarileri ve tarihi keşifler.',
      filterAll: 'Tümü',
      filterBoat: 'Tekne Turları',
      filterAdventure: 'Macera',
      filterNature: 'Doğa',
      filterCulture: 'Kültür',
      filterDayTrips: 'Günübirlik Geziler',
      filterPrivate: 'Özel Turlar',
      filterFamily: 'Aile Dostu',
      filterLuxury: 'Lüks',
      sortRecommended: 'Önerilen',
      sortPriceAsc: 'Fiyat: Düşükten Yükseğe',
      sortPriceDesc: 'Fiyat: Yüksekten Düşüğe',
      sortDuration: 'Süre',
      perPerson: 'kişi başı',
      perYacht: 'yat başı',
      from: 'Başlangıç',
      viewDetails: 'Detayları Gör',
      bookNow: 'Ayırt',
      whatsapp: 'WhatsApp',
      noToursFound: 'Bu kategoride tur bulunamadı.'
    },
    privateYachtSection: {
      badge: 'AYRICALIKLI LÜKS DENEYİM',
      title: 'Alanya Özel Yat Kiralama',
      subtitle: 'Alanya\'nın Akdeniz kıyılarını tamamen size özel lüks bir yatla keşfedin. Çiftler, aileler, özel kutlamalar ve ayrıcalıklı bir lüks deneyim arayan gruplar için mükemmel bir tercih.',
      price: '€700',
      priceUnit: 'yat başı',
      capacity: '12 Kişiye Kadar',
      features: [
        'Size Özel VIP Kaptan ve Servis Personeli',
        'Turkuaz Koylarda Baş Başa Yüzme Molaları',
        'Tarihi Alanya Kalesi ve Mağaralar Çevresinde Seyir',
        'Taze Hazırlanan Gurme Öğle veya Akşam Yemeği Dahil',
        'Esnek Hareket Saatleri (Sabah veya Gün Batımı)',
        'Modern Müzik Sistemi ve Şnorkel Ekipmanları'
      ],
      ctaBook: 'ÖZEL YATI AYIRT',
      ctaWhatsapp: 'WHATSAPP\'TAN BİLGİ AL'
    },
    partyBoatSection: {
      badge: 'EN POPÜLER TEKNE TURU • HER ŞEY DAHİL',
      title: 'Alanya Korsan Parti Tekne Turu (Baba 07)',
      subtitle: 'Efsanevi Baba 07 korsan gemisiyle Alanya kıyılarında unutulmaz bir gün! Tarihi Kızıl Kule ve Alanya Kalesi manzarası, Korsanlar, Aşıklar ve Fosforlu Mağaralar, turkuaz koylarda yüzme molaları, üst güvertede çılgın köpük partisi ve leziz açık büfe öğle yemeği.',
      price: '22€',
      priceUnit: 'kişi başı',
      badgeDuration: '6 Saat • Her Gün',
      features: [
        'Efsanevi Baba 07 Korsan Gemisi & Canlı DJ Performansı',
        'Alanya Kalesi, Kızıl Kule ve Tarihi Mağaralar Turu',
        'Üst Güvertede Çılgın Köpük Partisi ve Animasyonlar',
        'Berrak Turkuaz Koylarda ve Açık Denizde Yüzme Molaları',
        'Taze Hazırlanmış Açık Büfe Öğle Yemeği & Meşrubatlar',
        'Tüm Alanya Otellerinden Ücretsiz Gidiş-Dönüş Transfer'
      ],
      hospitality: 'Izgara tavuk, makarna ve taze salatalardan oluşan açık büfe öğle yemeği ve gün boyu meşrubatlar fiyata dahildir.',
      transferNote: 'Alanya, Mahmutlar, Oba, Konaklı, Avsallar ve Okurcalar otellerinden kapıdan kapıya ücretsiz transfer.',
      ctaBook: 'PARTİ TEKNESİ AYIRT (22€)',
      ctaDetails: 'TUR DETAYLARINI GÖR',
      ctaWhatsapp: 'WHATSAPP\'TAN BİLGİ AL'
    },
    transferSection: {
      badge: 'VIP HAVALİMANI TRANSFERİ',
      highlightBadge: 'GAZİPAŞA 50€ • ANTALYA 80€ • SABİT FİYAT',
      title: 'VIP Havalimanı Transferi — Gazipaşa & Antalya & Alanya',
      subtitle: 'Gazipaşa Havalimanı (GZP - 50€) veya Antalya Havalimanı (AYT - 80€) ile Alanya\'daki oteliniz arasında konforlu, dakik ve güvenilir VIP transfer. Sabit fiyat garantisi ve lüks klimalı Mercedes Vito ile kapıdan kapıya hizmet.',
      freeTitle: 'Gazipaşa 50€ • Antalya 80€',
      freeSubtitle: 'Sabit Fiyat Garantisi / Özel Mercedes Vito',
      features: [
        'Gazipaşa Havalimanı (GZP) Transferi: 50€ sabit fiyat',
        'Antalya Havalimanı (AYT) Transferi: 80€ sabit fiyat',
        'Sürpriz masraf yok — otopark ve rötar beklemesi dahil',
        'Kişiye özel lüks Mercedes-Benz Vito klimalı geniş VIP araç (8 kişiye kadar)',
        'Alanya otelinize doğrudan kapıdan kapıya VIP transfer',
        'Canlı uçuş takip sistemi ve rötarlarda ücretsiz bekleme',
        'Terminal çıkışında isimli tabela ile kişisel karşılama',
        'WhatsApp üzerinden anında hızlı rezervasyon teyidi'
      ],
      formTitle: 'VIP Havalimanı Transferi Ayırt',
      formSubtitle: 'Havalimanı güzergahınızı seçin ve bilgilerinizi girin, WhatsApp üzerinden anında onaylayalım.',
      nameLabel: 'Adınız Soyadınız',
      hotelLabel: 'Alanya\'daki Otelinizin Adı',
      pickupLabel: 'Alınış Noktası',
      dropoffLabel: 'Bırakılış Noktası',
      dateLabel: 'Transfer Tarihi',
      timeLabel: 'Uçuş / Alınış Saati',
      passengersLabel: 'Yolcu Sayısı',
      flightLabel: 'Uçuş Numarası',
      phoneLabel: 'WhatsApp Telefon Numarası',
      specialRequestsLabel: 'Özel İstekler / Çocuk Koltuğu / Bagaj Bilgisi',
      submitBtn: 'VIP TRANSFERİ AYIRT — WHATSAPP',
      notice: 'Gazipaşa 50€ • Antalya 80€ araç başı sabit fiyat (8 kişiye kadar). WhatsApp üzerinden anında teyit (+905051422116).'
    },
    shoppingSection: {
      badge: 'YEREL DENEYİM & YAŞAM',
      title: 'Alanya\'da Alışveriş ve Yaratıcı Deneyimler',
      subtitle: 'Turlardan fazlasını keşfedin. Otelinizden ücretsiz transfer imkanıyla Alanya\'da alışveriş, moda, mücevher ve yaratıcı stüdyoları keşfedin.',
      exploreService: 'Detayları İncele',
      whatsappService: 'WhatsApp Bilgi',
      viewAllShopping: 'Tüm Alışveriş Deneyimlerini Gör'
    },
    whyChooseUs: {
      badge: 'TRIPORA FARKI',
      title: 'Neden Tripora ile Seyahat Etmelisiniz?',
      subtitle: 'Uluslararası turizm standartlarını güçlü yerel tecrübemizle birleştirerek güney Türkiye\'nin en kaliteli hizmetini sunuyoruz.',
      items: [
        {
          title: 'Profesyonel Hizmet',
          desc: 'Deneyiminizi baştan sona unutulmaz kılmaya adanmış güvenilir yerel uzmanlar.'
        },
        {
          title: 'Kolay Rezervasyon',
          desc: 'Online olarak veya şeffaf WhatsApp iletişimiyle deneyiminizi saniyeler içinde ayırtın.'
        },
        {
          title: 'En İyi Deneyimler',
          desc: 'Alanya ve Antalya çevresinde özenle seçilmiş, test edilmiş ve memnuniyet garantili turlar.'
        },
        {
          title: 'Yerel Uzmanlar',
          desc: 'Bölgeyi, gizli koyları, kültürü ve gelenekleri en iyi bilen yerel rehberlerle keşfedin.'
        },
        {
          title: 'WhatsApp Desteği',
          desc: 'Hızlı, samimi ve dilediğiniz her an doğrudan WhatsApp üzerinden ekibimize ulaşın.'
        }
      ]
    },
    discoverAlanya: {
      badge: 'BÖLGE GÜZELLİKLERİ',
      title: 'Alanya\'yı Keşfedin',
      subtitle: 'Tarihi kalelerden turkuaz sulara, heyecan dolu maceralardan unutulmaz günübirlik gezilere kadar Alanya\'da herkes için bir şey var.',
      castleTitle: 'Alanya Kalesi ve Kızıl Kule',
      castleDesc: 'Akdeniz\'e uzanan kayalık yarımadada yükselen 13. yüzyıl Selçuklu kalesi, 360 derece eşsiz deniz ve kıyı manzarası sunar.',
      cleopatraTitle: 'Kleopatra Plajı',
      cleopatraDesc: 'Mısır Kraliçesi Kleopatra\'nın yüzdüğü rivayet edilen, altın kumları ve berrak deniziyle ünlü dünya çapında plaj.',
      cavesTitle: 'Damlataş ve Korsanlar Mağarası',
      cavesDesc: 'Şifalı havasıyla bilinen sarkıt mağarası ve tekne turlarımızda denizden keşfedilen tarihi korsan mağaraları.',
      mountainsTitle: 'Toros Dağları ve Nehirler',
      mountainsDesc: 'Serin dağ esintisi, rafting kanyonları ve arazi safari rotaları sunan görkemli dağ zinciri.',
      cta: 'ALANYA TURLARINI GÖR'
    },
    reviews: {
      badge: 'MİSAFİR YORUMLARI',
      title: 'Misafirlerimiz Ne Diyor?',
      subtitle: 'Alanya\'nın en güzel anlarını Tripora ile yaşayan dünyanın dört bir yanından gezginler.',
      trustedWorldwide: 'DÜNYANIN DÖRT BİR YANINDAN GEZGİNLERİN GÜVENİYLE',
      countries: ['İngiltere', 'Almanya', 'Hollanda', 'Polonya', 'İsveç', 'Danimarka', 'Fransa', 'Belçika', 'Çekya']
    },
    gallery: {
      badge: 'ALANYA\'DAN KARELER',
      title: 'Görsel Yolculuk',
      subtitle: 'Alanya\'daki deniz yolculuklarından, dağ patikalarından, tarihi zenginliklerden ve keyifli anlardan canlı kesitler.',
      filterAll: 'Tümü',
      filterSea: 'Deniz & Yat',
      filterAdventure: 'Macera',
      filterLandmarks: 'Tarihi Yerler',
      filterShopping: 'Alışveriş & Stil'
    },
    faq: {
      badge: 'MERAK EDİLENLER',
      title: 'Sıkça Sorulan Sorular',
      subtitle: 'Rezervasyon, otelden alış, ücretsiz transferler ve alışveriş hakkında net ve şeffaf yanıtlar.',
      haveMoreQuestions: 'Burada yer almayan bir sorunuz mu var?',
      askOnWhatsapp: 'WhatsApp\'tan Bize Danışın'
    },
    reservation: {
      pageTitle: 'REZERVASYON',
      pageSubtitle: 'Alanya\'daki tur ve deneyiminizi Tripora ile kolayca ayırtın. Hızlı, şeffaf ve WhatsApp üzerinden onaylı.',
      guestInfoHeader: 'Misafir Bilgileri',
      firstName: 'Adınız',
      lastName: 'Soyadınız',
      roomNumber: 'Oda Numarası',
      roomNumberPlaceholder: 'Örn: 304 (veya: Girişte iletilecek)',
      phoneNumber: 'Telefon / WhatsApp Numarası',
      phoneNumberPlaceholder: '+90 5XX XXX XX XX',
      email: 'E-posta (İsteğe bağlı)',
      emailPlaceholder: 'ornek@eposta.com',
      bookingInfoHeader: 'Rezervasyon Detayları',
      selectTour: 'Tur / Deneyim Seçiniz',
      tourDate: 'Tur Tarihi',
      adults: 'Yetişkin Sayısı',
      children: 'Çocuk Sayısı',
      hotelName: 'Otelinizin Adı (Alanya Bölgesi)',
      hotelNamePlaceholder: 'Örn: Sunprime C-Lounge, Grand Kaptan vb.',
      pickupLocation: 'Alınış Noktası',
      pickupLocationPlaceholder: 'Örn: Otel Ana Girişi veya Güvenlik Kapısı',
      specialRequests: 'Özel İstekler / Notlar',
      specialRequestsPlaceholder: 'Vejetaryen yemek, çocuk koltuğu, doğum günü sürprizi vb.',
      confirmBtn: 'REZERVASYONU WHATSAPP\'TAN ONAYLA',
      disclaimer: 'Sitede online ödeme alınmaz. Butona tıkladığınızda doldurduğunuz bilgilerle WhatsApp açılır ve Tripora Alanya (+905051422116) hattına doğrudan gönderilir.',
      successTitle: 'Neredeyse tamam!',
      successSub: 'Rezervasyon detaylarınız hazırlandı. Talebinizi doğrudan Tripora Alanya\'ya iletmeniz için WhatsApp açıldı.',
      successNote: 'Lütfen rezervasyon talebinizi tamamlamak için WhatsApp\'taki hazır mesajı gönderin. Ekibimiz detayları teyit etmek için sizinle iletişime geçecektir.',
      openWhatsappAgain: 'WHATSAPP\'I TEKRAR AÇ',
      backToHome: 'Ana Sayfaya Dön',
      makeAnother: 'Başka Bir Tur Ayırt'
    },
    contact: {
      badge: 'BİZE ULAŞIN',
      title: 'Tripora Alanya İletişim',
      subtitle: 'Tur önerileri, özel yat kiralama, kişisel gezi rotaları ve ücretsiz havalimanı transferi için her zaman buradayız.',
      company: 'TRIPORA ALANYA',
      location: 'Alanya, Antalya, Türkiye',
      whatsapp: '+90 505 142 21 16',
      email: 'ilyaskaradas07@hotmail.com',
      btnWhatsapp: 'WHATSAPP\'TAN YAZIN',
      btnBookTour: 'TUR AYIRTIN',
      btnEmail: 'E-POSTA GÖNDERİN',
      quickNote: 'En hızlı geri dönüş WhatsApp üzerinden sağlanır. Türkçe, İngilizce, Almanca veya Rusça yazabilirsiniz.'
    },
    footer: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Daha Fazlasını Yaşa. Alanya\'yı Keşfet.',
      about: 'Alanya, Antalya merkezli profesyonel seyahat ve turizm şirketi. Misafirlerimize güvenilir, üst düzey ve unutulmaz tatil anıları sunmaya odaklıyız.',
      navTitle: 'Menü',
      shoppingTitle: 'Alışveriş & Hizmetler',
      contactTitle: 'İletişim',
      languagesTitle: 'Diller',
      legalTitle: 'Yasal Bilgiler',
      privacyPolicy: 'Gizlilik Politikası',
      termsConditions: 'Kullanım Koşulları',
      cancellationPolicy: 'İptal ve Değişiklik',
      cookiePolicy: 'Çerez Politikası',
      copyright: '© 2026 Tripora Alanya. Tüm hakları saklıdır.',
      disclaimer: 'Tüm rezervasyonlar resmi WhatsApp numaramız (+905051422116) üzerinden Tripora Alanya ekibi tarafından manuel onaylanır.'
    },
    aiChatbot: {
      title: 'Tripora Seyahat Asistanı',
      subtitle: 'Alanya Uzmanı • Çevrimiçi',
      welcome: 'Merhaba! 👋 Ben Tripora\'nın Seyahat Asistanıyım. Alanya\'da unutulmaz bir deneyim mi arıyorsunuz? Nelerden hoşlandığınızı söyleyin, size en uygun turu bulayım.',
      placeholder: 'Turlar, tekne gezileri, ücretsiz transfer sor...',
      send: 'Gönder',
      quickChips: [
        'Tur Bul',
        'Aileler İçin En İyi Turlar',
        'Macera Turları',
        'Tekne Turları',
        'Özel Yat',
        'Havalimanı Transferi',
        'Ücretsiz Alışveriş Turu',
        'Mücevher',
        'Butik',
        'Tattoo',
        'WhatsApp\'tan Ayırt'
      ],
      whatsappPrompt: 'Rezervasyonunuzu Tripora Alanya ile kesinleştirmek için WhatsApp üzerinden devam edin.',
      whatsappBtn: 'WHATSAPP\'TA SOHBET ET'
    },
    mobileBar: {
      bookNow: 'REZERVASYON YAP',
      whatsapp: 'WHATSAPP'
    }
  },
  ru: {
    nav: {
      brand: 'TRIPORA ALANYA',
      home: 'Главная',
      tours: 'Экскурсии',
      partyBoat: 'Вечеринка на яхте',
      privateTours: 'Индивидуальные туры',
      shopping: 'Шопинг',
      airportTransfer: 'Трансфер из аэропорта',
      aboutUs: 'О нас',
      reviews: 'Отзывы',
      faq: 'Частые вопросы',
      contact: 'Контакты',
      bookNow: 'ЗАБРОНИРОВАТЬ',
      whatsapp: 'WHATSAPP',
      freeShoppingTour: 'Бесплатный шопинг-тур',
      jewelry: 'Ювелирный дом / Kuyumcu',
      butik: 'Бутик моды',
      tattoo: 'Тату-студия'
    },
    hero: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Experience More. Discover Alanya.',
      description: 'Откройте для себя лучшие экскурсии и незабываемые впечатления в Аланье и Анталье. Простое бронирование, профессиональный сервис и яркие воспоминания.',
      bookTour: 'ЗАБРОНИРОВАТЬ ЭКСКУРСИЮ',
      exploreTours: 'ВСЕ ЭКСКУРСИИ',
      trustLine: 'Простое бронирование • Профессиональный сервис • Местные эксперты',
      bookOnWhatsapp: 'БРОНЬ ЧЕРЕЗ WHATSAPP',
      transferBadge: 'БЕСПЛАТНЫЙ ТРАНСФЕР ПРИЛЕТ + ВЫЛЕТ'
    },
    trustBar: {
      easyBooking: 'Простое бронирование',
      easyBookingSub: 'Быстро на сайте или через WhatsApp',
      professionalService: 'Профессиональный сервис',
      professionalServiceSub: 'Опытные гиды и капитаны',
      localExperts: 'Местные эксперты',
      localExpertsSub: 'Знаем всё об Аланье и Анталье',
      whatsappSupport: 'Поддержка в WhatsApp',
      whatsappSupportSub: 'Быстрая персональная связь'
    },
    marketplace: {
      badge: 'Лучшие программы',
      title: 'Исследуйте наши экскурсии',
      subtitle: 'Морские прогулки, внедорожные сафари в горах, рафтинг, Каппадокия, Памуккале и эксклюзивные яхты в Аланье.',
      filterAll: 'Все',
      filterBoat: 'Морские',
      filterAdventure: 'Экстрим',
      filterNature: 'Природа',
      filterCulture: 'Культура',
      filterDayTrips: 'Дальние поездки',
      filterPrivate: 'Индивидуальные',
      filterFamily: 'Для семей',
      filterLuxury: 'Премиум',
      sortRecommended: 'Рекомендуемые',
      sortPriceAsc: 'Цена: по возрастанию',
      sortPriceDesc: 'Цена: по убыванию',
      sortDuration: 'Длительность',
      perPerson: 'за человека',
      perYacht: 'за всю яхту',
      from: 'От',
      viewDetails: 'Подробнее',
      bookNow: 'Заказать',
      whatsapp: 'WhatsApp',
      noToursFound: 'Экскурсий в этой категории не найдено.'
    },
    privateYachtSection: {
      badge: 'ЭКСКЛЮЗИВНЫЙ VIP ОТДЫХ',
      title: 'Аренда частной яхты в Аланье',
      subtitle: 'Насладитесь Средиземным морем в атмосфере уединения и роскоши на борту персональной яхты. Идеально для романтических свиданий, семейных праздников и элитного отдыха.',
      price: '€700',
      priceUnit: 'за всю яхту',
      capacity: 'До 12 человек',
      features: [
        'Личный VIP-капитан и обслуживающий экипаж',
        'Купание в уединенных бирюзовых бухтах без посторонних',
        'Круиз вокруг замка Аланьи, Красной башни и гротов',
        'Свежий обед или романтический ужин на закате включен',
        'Гибкое время выхода в море (утро или закат)',
        'Музыкальная система и маски для снорклинга'
      ],
      ctaBook: 'ЗАКАЗАТЬ ЯХТУ',
      ctaWhatsapp: 'УЗНАТЬ В WHATSAPP'
    },
    partyBoatSection: {
      badge: 'САМЫЙ ПОПУЛЯРНЫЙ ТУР • ВСЁ ВКЛЮЧЕНО',
      title: 'Пиратская вечеринка на корабле Baba 07 в Аланье',
      subtitle: 'Отправьтесь в незабываемый круиз вдоль побережья Аланьи на легендарном пиратском корабле Baba 07! Красная башня, пещеры пиратов, купание в открытом море, зажигательная пенная дискотека на верхней палубе и вкусный обед "шведский стол".',
      price: '22€',
      priceUnit: 'за человека',
      badgeDuration: '6 Часов • Ежедневно',
      features: [
        'Легендарный пиратский корабль Baba 07 и DJ',
        'Круиз вокруг крепости Аланьи и знаменитых пещер',
        'Зажигательная пенная вечеринка и анимация',
        'Купание в открытом море и бирюзовых бухтах',
        'Вкусный обед шведский стол и напитки на борту',
        'Бесплатный трансфер из отеля и обратно'
      ],
      hospitality: 'Обед (курица на гриле, паста, свежие салаты) и безалкогольные напитки включены на протяжении всей прогулки.',
      transferNote: 'Бесплатный трансфер из всех отелей Аланьи, Махмутлара, Конаклы, Авсаллара и Окурджалара.',
      ctaBook: 'ЗАБРОНИРОВАТЬ (22€)',
      ctaDetails: 'ПОДРОБНЕЕ О ТУРЕ',
      ctaWhatsapp: 'УЗНАТЬ В WHATSAPP'
    },
    transferSection: {
      badge: 'VIP ТРАНСФЕР ИЗ АЭРОПОРТА',
      highlightBadge: 'ГАЗИПАША 50€ • АНТАЛЬЯ 80€ • ФИКСИРОВАННАЯ ЦЕНА',
      title: 'VIP Трансфер из аэропорта — Газипаша, Анталья и Аланья',
      subtitle: 'Комфортный, пунктуальный и надежный трансфер между аэропортом Газипаша (GZP - 50€) или Анталья (AYT - 80€) и вашим отелем в Аланье. Просторный минивэн Mercedes Vito по фиксированной цене.',
      freeTitle: 'Газипаша 50€ • Анталья 80€',
      freeSubtitle: 'Фиксированная цена / VIP минивэн Mercedes Vito',
      features: [
        'Трансфер из аэропорта Газипаша (GZP): 50€ фиксированная цена',
        'Трансфер из аэропорта Анталья (AYT): 80€ фиксированная цена',
        'Без скрытых доплат — ожидание и багаж включены',
        'Индивидуальный просторный Mercedes-Benz Vito с кондиционером',
        'Прямая доставка до дверей вашего отеля в регионе Аланья',
        'Отслеживание рейса и бесплатное ожидание при задержке',
        'Встреча с табличкой с вашим именем на выходе из терминала',
        'Быстрое бронирование в WhatsApp с моментальным подтверждением'
      ],
      formTitle: 'Заказать VIP трансфер',
      formSubtitle: 'Выберите маршрут и заполните данные для бронирования в WhatsApp Tripora Alanya.',
      nameLabel: 'Ваше Имя и Фамилия',
      hotelLabel: 'Название отеля в регионе Аланья',
      pickupLabel: 'Место посадки',
      dropoffLabel: 'Место высадки',
      dateLabel: 'Дата трансфера',
      timeLabel: 'Время прилета / выезда',
      passengersLabel: 'Количество пассажиров',
      flightLabel: 'Номер рейса',
      phoneLabel: 'Номер телефона WhatsApp',
      specialRequestsLabel: 'Особые пожелания / Детские кресла / Багаж',
      submitBtn: 'ЗАКАЗАТЬ VIP ТРАНСФЕР В WHATSAPP',
      notice: 'Газипаша 50€ • Анталья 80€ за автомобиль (до 8 пассажиров). Подтверждение в WhatsApp (+905051422116).'
    },
    shoppingSection: {
      badge: 'ШОПИНГ И СТИЛЬ',
      title: 'Шопинг и авторские услуги в Аланье',
      subtitle: 'Не только экскурсии! Откройте для себя шопинг в лучших моллах, ювелирное искусство, модные бутики и тату-салоны с бесплатным трансфером от отеля.',
      exploreService: 'Узнать больше',
      whatsappService: 'WhatsApp запрос',
      viewAllShopping: 'Все направления шопинга'
    },
    whyChooseUs: {
      badge: 'ПРЕИМУЩЕСТВА TRIPORA',
      title: 'Почему выбирают Tripora Alanya?',
      subtitle: 'Европейские стандарты сервиса, кристальная прозрачность и забота о каждом госте.',
      items: [
        {
          title: 'Профессиональный сервис',
          desc: 'Опытная местная команда, готовая сделать ваш отпуск ярким и беззаботным.'
        },
        {
          title: 'Простое бронирование',
          desc: 'Бронируйте онлайн или мгновенно в WhatsApp без предоплаты.'
        },
        {
          title: 'Проверенные программы',
          desc: 'Тщательно отобранные маршруты, безопасный транспорт и опытные гиды.'
        },
        {
          title: 'Местные эксперты',
          desc: 'Знаем тайные живописные уголки побережья и гор, о которых не пишут в путеводителях.'
        },
        {
          title: 'Поддержка в WhatsApp',
          desc: 'Прямой контакт с менеджером 7 дней в неделю на русском языке.'
        }
      ]
    },
    discoverAlanya: {
      badge: 'ДОСТОПРИМЕЧАТЕЛЬНОСТИ',
      title: 'Откройте для себя Аланью',
      subtitle: 'Древние крепости, лазурное море, пляж Клеопатры и живописные Таврские горы ждут вас.',
      castleTitle: 'Крепость Аланьи и Красная башня',
      castleDesc: 'Сельджукская цитадель XIII века на высокой скале с панорамой 360° на бескрайнее Средиземное море.',
      cleopatraTitle: 'Пляж Клеопатры',
      cleopatraDesc: 'Знаменитый пляж с золотым песком и кристальной водой, где купалась египетская царица.',
      cavesTitle: 'Пещера Дамлаташ и гроты',
      cavesDesc: 'Целебная сталактитовая пещера и загадочные пиратские гроты, доступные с борта яхты.',
      mountainsTitle: 'Горы Тавра и горные реки',
      mountainsDesc: 'Величественные горы с каньонами для рафтинга и сафари на джипах и квадроциклах.',
      cta: 'ПОСМОТРЕТЬ ТУРЫ ПО АЛАНЬЕ'
    },
    reviews: {
      badge: 'ОТЗЫВЫ ГОСТЕЙ',
      title: 'Что говорят наши гости',
      subtitle: 'Нам доверяют туристы из Великобритании, Германии, Нидерландов, Польши и других стран.',
      trustedWorldwide: 'ДОВЕРИЕ ПУТЕШЕСТВЕННИКОВ СО ВСЕГО МИРА',
      countries: ['Великобритания', 'Германия', 'Нидерланды', 'Польша', 'Швеция', 'Дания', 'Франция', 'Бельгия', 'Чехия']
    },
    gallery: {
      badge: 'ГАЛЕРЕЯ',
      title: 'Фотографии наших туров',
      subtitle: 'Яркие моменты морских прогулок, горных приключений и панорамных пейзажей.',
      filterAll: 'Все',
      filterSea: 'Море и яхты',
      filterAdventure: 'Экстрим',
      filterLandmarks: 'Достопримечательности',
      filterShopping: 'Шопинг и стиль'
    },
    faq: {
      badge: 'ОТВЕТЫ НА ВОПРОСЫ',
      title: 'Часто задаваемые вопросы',
      subtitle: 'Все подробности о бронировании, трансферах, оплате и экскурсиях.',
      haveMoreQuestions: 'Остались вопросы?',
      askOnWhatsapp: 'Напишите нам в WhatsApp'
    },
    reservation: {
      pageTitle: 'БРОНИРОВАНИЕ',
      pageSubtitle: 'Забронируйте экскурсию в Аланье без предоплаты. Быстро, надежно и с подтверждением через WhatsApp.',
      guestInfoHeader: 'Информация о госте',
      firstName: 'Имя',
      lastName: 'Фамилия',
      roomNumber: 'Номер комнаты',
      roomNumberPlaceholder: 'например: 304 (или: сообщу при заселении)',
      phoneNumber: 'Телефон / WhatsApp',
      phoneNumberPlaceholder: '+7 900 123-45-67',
      email: 'Email (необязательно)',
      emailPlaceholder: 'name@mail.com',
      bookingInfoHeader: 'Детали бронирования',
      selectTour: 'Выберите экскурсию',
      tourDate: 'Желаемая дата',
      adults: 'Количество взрослых',
      children: 'Количество детей',
      hotelName: 'Название отеля в регионе Аланья',
      hotelNamePlaceholder: 'например: Sunprime C-Lounge, Grand Kaptan...',
      pickupLocation: 'Место встречи',
      pickupLocationPlaceholder: 'например: Главный ресепшен или шлагбаум',
      specialRequests: 'Пожелания к поездке',
      specialRequestsPlaceholder: 'Детское кресло, день рождения, вегетарианский обед...',
      confirmBtn: 'ПОДТВЕРДИТЬ БРОНИРОВАНИЕ В WHATSAPP',
      disclaimer: 'Оплата на сайте не производится. При нажатии кнопки сформируется готовое сообщение в WhatsApp компании Tripora Alanya (+905051422116) для ручного подтверждения.',
      successTitle: 'Почти готово!',
      successSub: 'Детали вашей брони готовы. Открыт WhatsApp, чтобы вы могли отправить запрос напрямую в Tripora Alanya.',
      successNote: 'Пожалуйста, отправьте сообщение в WhatsApp для завершения заявки. Наш менеджер свяжется с вами для подтверждения деталей.',
      openWhatsappAgain: 'ОТКРЫТЬ WHATSAPP СНОВА',
      backToHome: 'На главную страницу',
      makeAnother: 'Забронировать еще тур'
    },
    contact: {
      badge: 'СВЯЖИТЕСЬ С НАМИ',
      title: 'Контакты Tripora Alanya',
      subtitle: 'Мы всегда на связи для консультаций, индивидуальных туров, аренды яхт и бесплатного трансфера.',
      company: 'TRIPORA ALANYA',
      location: 'Аланья, Анталья, Турция',
      whatsapp: '+90 505 142 21 16',
      email: 'ilyaskaradas07@hotmail.com',
      btnWhatsapp: 'НАПИСАТЬ В WHATSAPP',
      btnBookTour: 'ЗАКАЗАТЬ ЭКСКУРСИЮ',
      btnEmail: 'НАПИСАТЬ НА EMAIL',
      quickNote: 'Быстрее всего мы отвечаем в WhatsApp. Пишите на русском, английском, немецком или турецком.'
    },
    footer: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Experience More. Discover Alanya.',
      about: 'Профессиональная туристическая компания в Аланье (Анталья, Турция). Организуем высококлассные экскурсии, морские круизы и трансферы для гостей со всего мира.',
      navTitle: 'Навигация',
      shoppingTitle: 'Шопинг и услуги',
      contactTitle: 'Контакты',
      languagesTitle: 'Языки',
      legalTitle: 'Правовая информация',
      privacyPolicy: 'Политика конфиденциальности',
      termsConditions: 'Условия обслуживания',
      cancellationPolicy: 'Условия отмены',
      cookiePolicy: 'Политика файлов cookie',
      copyright: '© 2026 Tripora Alanya. Все права защищены.',
      disclaimer: 'Все бронирования согласовываются через официальный WhatsApp (+905051422116) с ручным подтверждением менеджером.'
    },
    aiChatbot: {
      title: 'Ассистент Tripora',
      subtitle: 'Эксперт по Аланье • В сети',
      welcome: 'Здравствуйте! 👋 Я туристический помощник Tripora Alanya. Ищете идеальную экскурсию в Аланье? Расскажите о ваших пожеланиях!',
      placeholder: 'Спросите о турах, яхтах, бесплатном трансфере...',
      send: 'Отправить',
      quickChips: [
        'Подобрать тур',
        'Туры для всей семьи',
        'Экстрим и сафари',
        'Морские прогулки',
        'Аренда яхты',
        'Трансфер из аэропорта',
        'Бесплатный шопинг-тур',
        'Ювелирный салон',
        'Бутик одежды',
        'Тату-салон',
        'Бронь в WhatsApp'
      ],
      whatsappPrompt: 'Перейдите в WhatsApp, чтобы подтвердить бронирование с менеджером Tripora Alanya.',
      whatsappBtn: 'НАПИСАТЬ В WHATSAPP'
    },
    mobileBar: {
      bookNow: 'ЗАБРОНИРОВАТЬ',
      whatsapp: 'WHATSAPP'
    }
  },
  de: {
    nav: {
      brand: 'TRIPORA ALANYA',
      home: 'Startseite',
      tours: 'Ausflüge',
      partyBoat: 'Partyschiff',
      privateTours: 'Private Touren',
      shopping: 'Shopping',
      airportTransfer: 'Flughafentransfer',
      aboutUs: 'Über uns',
      reviews: 'Bewertungen',
      faq: 'FAQ',
      contact: 'Kontakt',
      bookNow: 'JETZT BUCHEN',
      whatsapp: 'WHATSAPP',
      freeShoppingTour: 'Kostenlose Shoppingtour',
      jewelry: 'Juwelier & Gold',
      butik: 'Boutique & Mode',
      tattoo: 'Tattoo-Studio'
    },
    hero: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Experience More. Discover Alanya.',
      description: 'Entdecken Sie die besten Touren, Ausflüge und unvergesslichen Erlebnisse in Alanya und Antalya. Einfache Buchung, professioneller Service und bleibende Erinnerungen.',
      bookTour: 'TOUR BUCHEN',
      exploreTours: 'TOUREN ENTDECKEN',
      trustLine: 'Einfache Buchung • Professioneller Service • Lokale Experten',
      bookOnWhatsapp: 'AUF WHATSAPP BUCHEN',
      transferBadge: 'KOSTENLOSER ANKUNFTS- & RÜCKTRANSFER'
    },
    trustBar: {
      easyBooking: 'Einfache Buchung',
      easyBookingSub: 'Bequem online oder direkt via WhatsApp',
      professionalService: 'Professioneller Service',
      professionalServiceSub: 'Erfahrene lokale Reiseleiter & Chauffeure',
      localExperts: 'Lokale Experten',
      localExpertsSub: 'Beste Kenntnisse über Alanya & Antalya',
      whatsappSupport: 'WhatsApp-Support',
      whatsappSupportSub: 'Schnelle und persönliche Beratung'
    },
    marketplace: {
      badge: 'Ausgewählte Erlebnisse',
      title: 'Entdecken Sie unsere Touren',
      subtitle: 'Handverlesene Ausflüge, Mittelmeer-Bootstouren, Gebirgssafaris und Kulturreisen in Alanya und Umgebung.',
      filterAll: 'Alle',
      filterBoat: 'Bootstouren',
      filterAdventure: 'Abenteuer',
      filterNature: 'Natur',
      filterCulture: 'Kultur',
      filterDayTrips: 'Tagesausflüge',
      filterPrivate: 'Privat',
      filterFamily: 'Familienfreundlich',
      filterLuxury: 'Luxus',
      sortRecommended: 'Empfohlen',
      sortPriceAsc: 'Preis: aufsteigend',
      sortPriceDesc: 'Preis: absteigend',
      sortDuration: 'Dauer',
      perPerson: 'pro Person',
      perYacht: 'pro Yacht',
      from: 'Ab',
      viewDetails: 'Details ansehen',
      bookNow: 'Buchen',
      whatsapp: 'WhatsApp',
      noToursFound: 'Keine Ausflüge in dieser Kategorie gefunden.'
    },
    privateYachtSection: {
      badge: 'EXKLUSIVES LUXUSERLEBNIS',
      title: 'Private Luxusyacht in Alanya',
      subtitle: 'Erleben Sie Alanyas Mittelmeerküste in absoluter Privatsphäre auf Ihrer eigenen Yacht. Perfekt für Paare, Familien, Feiern und alle, die ein exklusives Luxuserlebnis suchen.',
      price: '€700',
      priceUnit: 'pro Yacht',
      capacity: 'Bis zu 12 Personen',
      features: [
        'Eigener VIP-Kapitän und aufmerksames Bordpersonal',
        'Private Badestopps in einsamen türkisfarbenen Buchten',
        'Panoramakreuzfahrt um die Burg von Alanya & historische Höhlen',
        'Frisch zubereitetes Gourmet-Mittagessen oder Sunset-Dinner',
        'Flexible Abfahrtszeiten (Vormittags oder bei Sonnenuntergang)',
        'Modernes Soundsystem & Schnorchelausrüstung an Bord'
      ],
      ctaBook: 'YACHT JETZT BUCHEN',
      ctaWhatsapp: 'AUF WHATSAPP ANFRAGEN'
    },
    partyBoatSection: {
      badge: 'BELIEBTESTE BOOTSTOUR • ALLES INKLUSIVE',
      title: 'Alanya Party-Piratenschiff Tour (Baba 07)',
      subtitle: 'Erleben Sie für nur 22€ die legendäre Baba 07 Piratenschiff-Tour entlang der Küste von Alanya. Roter Turm, Piraten- & Liebeshöhlen, Badestopps im türkisblauen Meer, die berühmte Schaumparty an Deck und ein leckeres Mittagsbuffet.',
      price: '22€',
      priceUnit: 'pro Person',
      badgeDuration: '6 Stunden • Täglich',
      features: [
        'Legendäres Piratenschiff Baba 07 mit DJ-Musik',
        'Panoramatour um die Burg von Alanya & Höhlen',
        'Riesige Schaumparty & Unterhaltung auf dem Oberdeck',
        'Mehrere Badestopps in kristallklaren Buchten',
        'Köstliches Mittagsbuffet & alkoholfreie Getränke inklusive',
        'Kostenloser Hin- und Rücktransfer ab Hotel'
      ],
      hospitality: 'Mittagsbuffet (gegrilltes Hähnchen, Pasta, frische Salate) und Erfrischungsgetränke an Bord inklusive.',
      transferNote: 'Kostenloser Abholservice von allen Hotels in Alanya, Mahmutlar, Konakli, Avsallar und Okurcalar.',
      ctaBook: 'JETZT BUCHEN (22€)',
      ctaDetails: 'TOUR-DETAILS ANSEHEN',
      ctaWhatsapp: 'AUF WHATSAPP ANFRAGEN'
    },
    transferSection: {
      badge: 'VIP FLUGHAFENTRANSFER',
      highlightBadge: 'GAZİPAŞA 50€ • ANTALYA 80€ • FESTPREISE',
      title: 'VIP Flughafentransfer — Gazipaşa, Antalya & Alanya',
      subtitle: 'Komfortabler, pünktlicher und zuverlässiger VIP-Privattransfer zwischen dem Flughafen Gazipaşa (GZP - 50€) oder Antalya (AYT - 80€) und Ihrem Hotel in Alanya. Geräumiger Mercedes Vito zum garantierten Festpreis.',
      freeTitle: 'Gazipaşa 50€ • Antalya 80€',
      freeSubtitle: 'Garantierter Festpreis / Privater Mercedes Vito',
      features: [
        'Flughafen Gazipaşa (GZP) Transfer: 50€ Festpreis',
        'Flughafen Antalya (AYT) Transfer: 80€ Festpreis',
        'Garantierte Festpreise — keine versteckten Kosten oder Gepäckaufschläge',
        'Moderner, voll klimatisierter Mercedes-Benz Vito VIP-Van (bis zu 8 Personen)',
        'Direkte Tür-zu-Tür-Beförderung zu Ihrem Hotel in Alanya',
        'Live-Flugüberwachung und kostenloses Warten bei Flugverspätung',
        'Persönlicher Empfang mit Namensschild am Ausgang',
        'Bequeme WhatsApp-Buchung mit sofortiger Bestätigung'
      ],
      formTitle: 'VIP Flughafentransfer buchen',
      formSubtitle: 'Wählen Sie Ihre Flugstrecke und geben Sie Ihre Daten ein für eine sofortige WhatsApp-Bestätigung.',
      nameLabel: 'Ihr vollständiger Name',
      hotelLabel: 'Hotelname in der Region Alanya',
      pickupLabel: 'Abholort',
      dropoffLabel: 'Zielort',
      dateLabel: 'Transferdatum',
      timeLabel: 'Flug- oder Abholzeit',
      passengersLabel: 'Anzahl Personen',
      flightLabel: 'Flugnummer',
      phoneLabel: 'WhatsApp-Telefonnummer',
      specialRequestsLabel: 'Besondere Wünsche / Gepäckangaben',
      submitBtn: 'VIP-TRANSFER BUCHEN VIA WHATSAPP',
      notice: 'Gazipaşa 50€ • Antalya 80€ Festpreis pro Fahrzeug (bis 8 Personen). Direkte Abstimmung via WhatsApp (+905051422116).'
    },
    shoppingSection: {
      badge: 'SHOPPING & LIFESTYLE',
      title: 'Shopping & Besondere Erlebnisse in Alanya',
      subtitle: 'Mehr als nur Ausflüge! Entdecken Sie erstklassige Shoppingzentren, Schmuckkunst, Boutiquen und Tattoostudios mit kostenlosem Hotelshuttle.',
      exploreService: 'Details ansehen',
      whatsappService: 'WhatsApp Anfrage',
      viewAllShopping: 'Alle Shopping-Erlebnisse'
    },
    whyChooseUs: {
      badge: 'DER TRIPORA VORTEIL',
      title: 'Warum mit Tripora reisen?',
      subtitle: 'Wir verbinden internationale Qualitätsstandards mit tief verwurzeltem regionalem Wissen für Ihren perfekten Urlaub.',
      items: [
        {
          title: 'Professioneller Service',
          desc: 'Zuverlässige Experten vor Ort, die dafür sorgen, dass Ihr Urlaub unvergesslich wird.'
        },
        {
          title: 'Einfache Buchung',
          desc: 'Buchen Sie schnell online oder unkompliziert per WhatsApp ohne Kreditkartenzwang.'
        },
        {
          title: 'Beste Erlebnisse',
          desc: 'Sorgfältig ausgewählte und qualitätsgeprüfte Aktivitäten in Alanya und Antalya.'
        },
        {
          title: 'Lokale Experten',
          desc: 'Entdecken Sie die Türkei mit Menschen, die geheime Buchten, Kultur und Kultur kennen.'
        },
        {
          title: 'WhatsApp-Support',
          desc: 'Erreichen Sie unser deutschsprachiges Team jederzeit direkt und unkompliziert per WhatsApp.'
        }
      ]
    },
    discoverAlanya: {
      badge: 'REGIONALES HIGHLIGHT',
      title: 'Entdecken Sie Alanya',
      subtitle: 'Von antiken Festungen und türkisfarbenem Meer bis hin zu adrenalingeladenen Safaris und Tagesausflügen.',
      castleTitle: 'Burg von Alanya & Roter Turm',
      castleDesc: 'Die spektakuläre Festung aus dem 13. Jahrhundert thront auf einer Landzunge und bietet 360°-Panoramablicke über das Meer.',
      cleopatraTitle: 'Kleopatra-Strand',
      cleopatraDesc: 'Berühmter feinsandiger Strand mit kristallklarem Wasser, an dem der Legende nach Königin Kleopatra badete.',
      cavesTitle: 'Damlatas & Piratenhöhlen',
      cavesDesc: 'Tropfsteinhöhle mit heilsamem Mikroklima sowie Meereshöhlen, die Sie bei unseren Bootstouren erkunden.',
      mountainsTitle: 'Taurusgebirge & Gebirgsflüsse',
      mountainsDesc: 'Mächtige Berge mit kühler Brise, Wildwasserschluchten und unberührten Offroad-Strecken.',
      cta: 'ALANYA AUSFLÜGE ENTDECKEN'
    },
    reviews: {
      badge: 'GÄSTEBEWERTUNGEN',
      title: 'Das sagen unsere Gäste',
      subtitle: 'Reisende aus ganz Europa vertrauen auf Tripora Alanya.',
      trustedWorldwide: 'GESCHÄTZT VON REISENDEN AUS ALLER WELT',
      countries: ['Großbritannien', 'Deutschland', 'Niederlande', 'Polen', 'Schweden', 'Dänemark', 'Frankreich', 'Belgien', 'Tschechien']
    },
    gallery: {
      badge: 'EINDRÜCKE',
      title: 'Fotogalerie',
      subtitle: 'Faszinierende Einblicke in unsere Bootstouren, Landschaften und Urlaubserlebnisse.',
      filterAll: 'Alle',
      filterSea: 'Meer & Yacht',
      filterAdventure: 'Abenteuer',
      filterLandmarks: 'Sehenswürdigkeiten',
      filterShopping: 'Shopping & Mode'
    },
    faq: {
      badge: 'WISSENSWERTES',
      title: 'Häufig gestellte Fragen',
      subtitle: 'Klare und direkte Antworten zu Buchungen, Hotelabholungen, Transfers und Richtlinien.',
      haveMoreQuestions: 'Haben Sie eine weitere Frage?',
      askOnWhatsapp: 'Schreiben Sie uns auf WhatsApp'
    },
    reservation: {
      pageTitle: 'RESERVIERUNG',
      pageSubtitle: 'Buchen Sie Ihren Ausflug in Alanya mit Tripora. Einfach, transparent und per WhatsApp bestätigt.',
      guestInfoHeader: 'Gästeinformationen',
      firstName: 'Vorname',
      lastName: 'Nachname',
      roomNumber: 'Zimmernummer',
      roomNumberPlaceholder: 'z.B. 304 (oder: wird beim Check-in nachgereicht)',
      phoneNumber: 'Telefon / WhatsApp-Nummer',
      phoneNumberPlaceholder: '+49 170 1234567',
      email: 'E-Mail (optional)',
      emailPlaceholder: 'name@beispiel.de',
      bookingInfoHeader: 'Buchungsdetails',
      selectTour: 'Ausflug / Erlebnis wählen',
      tourDate: 'Datum des Ausflugs',
      adults: 'Anzahl Erwachsene',
      children: 'Anzahl Kinder',
      hotelName: 'Hotelname in Alanya / Region',
      hotelNamePlaceholder: 'z.B. Sunprime C-Lounge, Grand Kaptan etc.',
      pickupLocation: 'Abholort',
      pickupLocationPlaceholder: 'z.B. Hotelrezeption oder Schranke',
      specialRequests: 'Besondere Wünsche / Anmerkungen',
      specialRequestsPlaceholder: 'Vegetarisches Essen, Kindersitz, Geburtstag etc.',
      confirmBtn: 'BUCHUNG PER WHATSAPP BESTÄTIGEN',
      disclaimer: 'Keine Online-Zahlung erforderlich. Beim Klick öffnet sich WhatsApp mit Ihren vorbereiteten Daten zur direkten Abstimmung mit Tripora Alanya (+905051422116).',
      successTitle: 'Fast geschafft!',
      successSub: 'Ihre Buchungsdetails sind bereit. WhatsApp wurde geöffnet, damit Sie Ihre Anfrage direkt an Tripora Alanya senden können.',
      successNote: 'Bitte senden Sie die vorbereitete Nachricht in WhatsApp ab. Unser Team wird sich umgehend mit Ihnen in Verbindung setzen, um die Details zu bestätigen.',
      openWhatsappAgain: 'WHATSAPP ERNEUT ÖFFNEN',
      backToHome: 'Zurück zur Startseite',
      makeAnother: 'Weiteren Ausflug buchen'
    },
    contact: {
      badge: 'KONTAKT',
      title: 'Kontakt zu Tripora Alanya',
      subtitle: 'Wir beraten Sie gerne zu Touren, privaten Yachten und kostenlosen Flughafentransfers.',
      company: 'TRIPORA ALANYA',
      location: 'Alanya, Antalya, Türkei',
      whatsapp: '+90 505 142 21 16',
      email: 'ilyaskaradas07@hotmail.com',
      btnWhatsapp: 'WHATSAPP SENDEN',
      btnBookTour: 'TOUR BUCHEN',
      btnEmail: 'E-MAIL SENDEN',
      quickNote: 'Schnellste Rückmeldung via WhatsApp auf Deutsch, Englisch, Russisch oder Türkisch.'
    },
    footer: {
      brand: 'TRIPORA ALANYA',
      tagline: 'Experience More. Discover Alanya.',
      about: 'Führendes Reise- und Ausflugsunternehmen mit Sitz in Alanya, Türkei. Spezialisiert auf erstklassige Touren, private Yachten und kostenlose Transfers.',
      navTitle: 'Navigation',
      shoppingTitle: 'Shopping & Services',
      contactTitle: 'Kontakt',
      languagesTitle: 'Sprachen',
      legalTitle: 'Rechtliches',
      privacyPolicy: 'Datenschutzrichtlinie',
      termsConditions: 'AGB',
      cancellationPolicy: 'Stornierungsbedingungen',
      cookiePolicy: 'Cookie-Richtlinie',
      copyright: '© 2026 Tripora Alanya. Alle Rechte vorbehalten.',
      disclaimer: 'Alle Reservierungen werden direkt über WhatsApp (+905051422116) von Tripora Alanya manuell bestätigt.'
    },
    aiChatbot: {
      title: 'Tripora Reiseassistent',
      subtitle: 'Alanya-Experte • Online',
      welcome: 'Hallo! 👋 Ich bin der Reiseassistent von Tripora. Suchen Sie nach dem perfekten Ausflug in Alanya? Verraten Sie mir, was Ihnen gefällt!',
      placeholder: 'Fragen Sie nach Touren, Yachten, kostenlosem Transfer...',
      send: 'Senden',
      quickChips: [
        'Tour finden',
        'Beste Familientouren',
        'Abenteuer & Safari',
        'Bootstouren',
        'Private Luxusyacht',
        'Flughafentransfer',
        'Kostenlose Shoppingtour',
        'Juwelier',
        'Boutique',
        'Tattoo',
        'Auf WhatsApp buchen'
      ],
      whatsappPrompt: 'Setzen Sie das Gespräch auf WhatsApp fort, um Ihre Buchung bei Tripora Alanya zu bestätigen.',
      whatsappBtn: 'AUF WHATSAPP CHATTEN'
    },
    mobileBar: {
      bookNow: 'JETZT BUCHEN',
      whatsapp: 'WHATSAPP'
    }
  },
  pl: {
    "nav": {
      "brand": "TRIPORA ALANYA",
      "home": "Strona główna",
      "tours": "Wycieczki",
      "partyBoat": "Statek imprezowy",
      "privateTours": "Wycieczki prywatne",
      "shopping": "Zakupy",
      "airportTransfer": "Transfer lotniskowy",
      "aboutUs": "O nas",
      "reviews": "Opinie",
      "faq": "FAQ",
      "contact": "Kontakt",
      "bookNow": "ZAREZERWUJ",
      "whatsapp": "WHATSAPP",
      "freeShoppingTour": "Bezpłatny wyjazd na zakupy",
      "jewelry": "Biżuteria / Jubiler",
      "butik": "Butik i moda",
      "tattoo": "Studio tatuażu"
    },
    "hero": {
      "brand": "TRIPORA ALANYA",
      "tagline": "Więcej wrażeń. Odkryj Alanyę.",
      "description": "Odkryj najlepsze wycieczki, rejsy i niezapomniane atrakcje w Alanyi i Antalyi. Łatwa rezerwacja, profesjonalna obsługa i wspaniałe wspomnienia.",
      "bookTour": "ZAREZERWUJ WYCIECZKĘ",
      "exploreTours": "ODKRYJ WYCIECZKI",
      "trustLine": "Łatwa rezerwacja • Profesjonalna obsługa • Lokalni eksperci",
      "bookOnWhatsapp": "REZERWUJ PRZEZ WHATSAPP",
      "transferBadge": "BEZPŁATNY TRANSFER PRZYLOT I POWRÓT"
    },
    "trustBar": {
      "easyBooking": "Łatwa rezerwacja",
      "easyBookingSub": "Rezerwuj online lub przez WhatsApp",
      "professionalService": "Profesjonalna obsługa",
      "professionalServiceSub": "Certyfikowani przewodnicy i kierowcy",
      "localExperts": "Lokalni eksperci",
      "localExpertsSub": "Doskonała znajomość Alanyi i Antalyi",
      "whatsappSupport": "Wsparcie WhatsApp",
      "whatsappSupportSub": "Szybki i bezpośredni kontakt"
    },
    "marketplace": {
      "badge": "Wyselekcjonowane atrakcje",
      "title": "Odkryj nasze wycieczki",
      "subtitle": "Starannie dobrane wycieczki, ekscytujące przygody na morzu, górskie safari i historyczne skarby Alanyi oraz Antalyi.",
      "filterAll": "Wszystkie",
      "filterBoat": "Rejsy statkiem",
      "filterAdventure": "Przygoda",
      "filterNature": "Natura",
      "filterCulture": "Kultura",
      "filterDayTrips": "Wycieczki 1-dniowe",
      "filterPrivate": "Prywatne",
      "filterFamily": "Dla rodzin",
      "filterLuxury": "Luksusowe",
      "sortRecommended": "Polecane",
      "sortPriceAsc": "Cena: od najniższej",
      "sortPriceDesc": "Cena: od najwyższej",
      "sortDuration": "Czas trwania",
      "perPerson": "za osobę",
      "perYacht": "za jacht",
      "from": "Od",
      "viewDetails": "Szczegóły",
      "bookNow": "Zarezerwuj",
      "whatsapp": "WhatsApp",
      "noToursFound": "Brak wycieczek w tej kategorii."
    },
    "privateYachtSection": {
      "badge": "EKSKLUZYWNE WRAŻENIA VIP",
      "title": "Prywatny rejs jachtem w Alanyi",
      "subtitle": "Ciesz się urokliwym wybrzeżem Alanyi w pełnej prywatności na własnym luksusowym jachcie. Idealny dla par, rodzin, uroczystości i grup szukających wyjątkowego relaksu.",
      "price": "€700",
      "priceUnit": "za jacht",
      "capacity": "Do 12 gości",
      "features": [
        "Dedykowany kapitan VIP i obsługa pokładowa",
        "Kąpiele w ustronnych turkusowych zatokach",
        "Rejs wokół zamku w Alanyi i jaskiń pirackich",
        "Świeży obiad gourmet lub kolacja o zachodzie słońca w cenie",
        "Elastyczne godziny wypłynięcia (rano lub o zachodzie słońca)",
        "Nowoczesny system audio i sprzęt do snorkelingu"
      ],
      "ctaBook": "REZERWUJ PRYWATNY JACHT",
      "ctaWhatsapp": "ZAPYTAJ PRZEZ WHATSAPP"
    },
    "partyBoatSection": {
      "badge": "NAJPOPULARNIEJSZY REJS • ALL-INCLUSIVE",
      "title": "Imprezowy Rejs Statkiem Pirackim Baba 07 w Alanyi",
      "subtitle": "Dołącz do legendarnego rejsu pirackiego statkiem Baba 07 wzdłuż wybrzeża Alanyi za jedyne 22€. Zobacz Czerwoną Wieżę, zamek i jaskinie morskie, kąp się w lazurowej wodzie i baw się podczas wielkiej imprezy w pianie z pysznym obiadem w cenie.",
      "price": "22€",
      "priceUnit": "za osobę",
      "badgeDuration": "6 Godzin • Codziennie",
      "features": [
        "Legendarny statek piracki Baba 07 i muzyka DJ-a",
        "Rejs widokowy wokół zamku Alanya i jaskiń",
        "Wielka impreza w pianie na górnym pokładzie",
        "Kąpiele w krystalicznie czystych turkusowych zatokach",
        "Pyszny obiad w formie bufetu i napoje bezalkoholowe",
        "Darmowy transfer z i do hotelu w cenie"
      ],
      "hospitality": "Obiad w formie bufetu (grillowany kurczak, makarony, sałatki) oraz napoje bezalkoholowe w cenie.",
      "transferNote": "Darmowy odbiór ze wszystkich hoteli w Alanyi, Mahmutlar, Konakli, Avsallar i okolicach.",
      "ctaBook": "ZAREZERWUJ REJS (22€)",
      "ctaDetails": "SZCZEGÓŁY WYCIECZKI",
      "ctaWhatsapp": "ZAPYTAJ NA WHATSAPP"
    },
    "transferSection": {
      "badge": "TRANSFER LOTNISKOWY VIP",
      "highlightBadge": "GAZİPAŞA €50 • ANTALYA €80 • STAŁE CENY",
      "title": "Transfer lotniskowy VIP — Gazipaşa, Antalya i Alanya",
      "subtitle": "Ciesz się punktualnym, komfortowym i bezpiecznym prywatnym transferem VIP między lotniskiem Gazipaşa (GZP - €50) lub Antalya (AYT - €80) a Twoim hotelem w Alanyi. Luksusowy Mercedes-Benz Vito.",
      "freeTitle": "Gazipaşa €50 • Antalya €80",
      "freeSubtitle": "Gwarantowane stałe ceny / Prywatny Mercedes Vito",
      "features": [
        "Transfer z lotniska Gazipaşa (GZP): €50 stała cena",
        "Transfer z lotniska Antalya (AYT): €80 stała cena",
        "Gwarantowana stała cena bez ukrytych opłat za bagaż czy opóźnienia",
        "Prywatny van Mercedes-Benz Vito VIP wyłącznie dla Twojej grupy (do 8 osób)",
        "Bezpośredni transfer od drzwi do drzwi hotelu w Alanyi",
        "Śledzenie lotów w czasie rzeczywistym i bezpłatne oczekiwanie",
        "Powitanie kierowcy z imienną tabliczką w hali przylotów",
        "Dostępny 24/7 dla wszystkich hoteli w Alanyi i okolicach"
      ],
      "formTitle": "Zarezerwuj transfer VIP",
      "formSubtitle": "Wybierz trasę i wypełnij poniższe dane, aby potwierdzić transfer przez WhatsApp.",
      "nameLabel": "Imię i nazwisko",
      "hotelLabel": "Hotel lub adres docelowy w Alanyi",
      "pickupLabel": "Miejsce odbioru",
      "dropoffLabel": "Miejsce docelowe",
      "dateLabel": "Data transferu",
      "timeLabel": "Godzina przylotu / odbioru",
      "passengersLabel": "Liczba pasażerów",
      "flightLabel": "Numer lotu (np. TK1234, opcjonalnie)",
      "phoneLabel": "Numer telefonu (WhatsApp)",
      "specialRequestsLabel": "Uwagi / fotelik dziecięcy / duży bagaż",
      "submitBtn": "ZAREZERWUJ TRANSFER PRZEZ WHATSAPP",
      "notice": "Gazipaşa €50 • Antalya €80 za pojazd (do 8 osób). Kierowca czeka z tabliczką imienną (+905051422116)."
    },
    "shoppingSection": {
      "badge": "LOKALNE DOŚWIADCZENIA I STYL ŻYCIA",
      "title": "Zakupy i usługi w Alanyi",
      "subtitle": "Odkryj więcej niż wycieczki. Skorzystaj z renomowanych salonów jubilerskich, butików z odzieżą i studia tatuażu z bezpłatnym prywatnym transferem z hotelu.",
      "exploreService": "Zobacz szczegóły",
      "whatsappService": "Zarezerwuj przez WhatsApp",
      "viewAllShopping": "Zobacz wszystkie usługi zakupowe"
    },
    "whyChooseUs": {
      "badge": "DLACZEGO TRIPORA?",
      "title": "Dlaczego warto wybrać Tripora?",
      "subtitle": "Łączymy najwyższe międzynarodowe standardy gościnności z lokalną wiedzą, oferując najlepsze doświadczenia w Turcji.",
      "items": [
        {
          "title": "Profesjonalna obsługa",
          "desc": "Certyfikowani wielojęzyczni przewodnicy, profesjonalni kierowcy i nowoczesne pojazdy."
        },
        {
          "title": "Przejrzyste ceny",
          "desc": "Uczciwe ceny w euro bez ukrytych dopłat. Najwyższa jakość w najlepszej cenie w regionie."
        },
        {
          "title": "Odbiór z hotelu",
          "desc": "Wygodny transfer w obie strony ze wszystkich hoteli w Alanyi i okolicach w cenie każdej wycieczki."
        },
        {
          "title": "Szybkie wsparcie WhatsApp",
          "desc": "Błyskawiczne potwierdzenie rezerwacji, elastyczność i bezpośredni kontakt w Twoim języku."
        }
      ]
    },
    "discoverAlanya": {
      "badge": "ATRAKCJE REGIONU",
      "title": "Odkryj Alanyę",
      "subtitle": "Od zabytkowych twierdz i turkusowego morza po emocjonujące górskie szlaki — Alanya zachwyca każdego odwiedzającego.",
      "castleTitle": "Zamek w Alanyi i Czerwona Wieża",
      "castleDesc": "Średniowieczna twierdza wznosząca się wysoko nad Morzem Śródziemnym z zapierającą dech w piersiach panoramą całego wybrzeża.",
      "cleopatraTitle": "Plaża Kleopatry",
      "cleopatraDesc": "Słynna złocista plaża o krystalicznie czystej wodzie, idealna do pływania i podziwiania zachodów słońca.",
      "cavesTitle": "Jaskinia Damlataş i Jaskinia Dim",
      "cavesDesc": "Niezwykłe jaskinie krasowe ze stalaktytami i leczniczym mikroklimatem, znane od wieków.",
      "mountainsTitle": "Góry Taurus i Rzeka Dimçay",
      "mountainsDesc": "Majestatyczne szczyty górskie, orzeźwiające platformy piknikowe nad rzeką i kaniony idealne na wyprawy jeepami.",
      "cta": "ODKRYJ WYCIECZKI PO ALANYI"
    },
    "reviews": {
      "badge": "OPINIE NASZYCH GOŚCI",
      "title": "Co mówią nasi goście",
      "subtitle": "Zaufali nam podróżnicy z całego świata, przeżywając z Tripora niezapomniane chwile w Alanyi.",
      "trustedWorldwide": "ZAUFALI NAM PODRÓŻNICY Z CAŁEGO ŚWIATA",
      "countries": [
        "Wielka Brytania",
        "Niemcy",
        "Holandia",
        "Polska",
        "Skandynawia",
        "Kazachstan"
      ]
    },
    "gallery": {
      "badge": "GALERIA WRAŻEŃ",
      "title": "Podróż w kadrach",
      "subtitle": "Niezwykłe chwile z rejsów morskich, górskich szlaków, zabytków i ekscytujących wycieczek w Alanyi.",
      "filterAll": "Wszystkie",
      "filterSea": "Morze i Jachty",
      "filterAdventure": "Przygoda",
      "filterLandmarks": "Zabytki",
      "filterShopping": "Zakupy i Styl życia"
    },
    "faq": {
      "badge": "WSZYSTKO CO WARTO WIEDZIEĆ",
      "title": "Najczęściej zadawane pytania",
      "subtitle": "Praktyczne i konkretne odpowiedzi na temat rezerwacji, odbiorów z hoteli, transferów i płatności.",
      "haveMoreQuestions": "Masz pytanie, którego tu nie ma?",
      "askOnWhatsapp": "Napisz do nas na WhatsApp"
    },
    "reservation": {
      "pageTitle": "REZERWACJA",
      "pageSubtitle": "Zarezerwuj wycieczkę lub usługę w Alanyi z Tripora. Szybko, bezproblemowo i z potwierdzeniem na WhatsApp.",
      "guestInfoHeader": "Dane gościa",
      "firstName": "Imię",
      "lastName": "Nazwisko",
      "roomNumber": "Numer pokoju",
      "roomNumberPlaceholder": "np. 304 (jeśli znasz)",
      "phoneNumber": "Numer telefonu (WhatsApp)",
      "phoneNumberPlaceholder": "+48 500 000 000",
      "email": "Adres e-mail",
      "emailPlaceholder": "twoj.email@example.com",
      "bookingInfoHeader": "Szczegóły wycieczki",
      "selectTour": "Wybierz wycieczkę",
      "tourDate": "Data wycieczki",
      "adults": "Liczba dorosłych",
      "children": "Dzieci (4-11 lat)",
      "hotelName": "Nazwa hotelu / Apartament",
      "hotelNamePlaceholder": "np. Grand Okan Hotel Alanya",
      "pickupLocation": "Miejsce odbioru",
      "pickupLocationPlaceholder": "Główne wejście do hotelu / recepcja",
      "specialRequests": "Uwagi i prośby",
      "specialRequestsPlaceholder": "Dodatkowe życzenia, diety, pytania...",
      "confirmBtn": "POTWIERDŹ PRZEZ WHATSAPP",
      "disclaimer": "Brak przedpłaty online. Płatność odbywa się w dniu wycieczki u przewodnika lub kierowcy (gotówka EUR / USD / TRY lub karta).",
      "successTitle": "Wniosek rezerwacyjny został przygotowany!",
      "successSub": "Otwieramy WhatsApp, aby bezpośrednio potwierdzić szczegóły z naszym zespołem.",
      "successNote": "Jeśli WhatsApp nie otworzył się automatycznie, kliknij poniższy przycisk:",
      "openWhatsappAgain": "Otwórz WhatsApp ponownie",
      "backToHome": "Wróć do strony głównej",
      "makeAnother": "Zrób kolejną rezerwację"
    },
    "contact": {
      "badge": "BĄDŹMY W KONTAKCIE",
      "title": "Kontakt z Tripora Alanya",
      "subtitle": "Służymy pomocą w doborze wycieczek, rezerwacji jachtów, transferów VIP (€80) oraz bezpłatnych wyjazdów na zakupy.",
      "company": "TRIPORA ALANYA",
      "location": "Alanya, Antalya, Turcja",
      "whatsapp": "+90 505 142 21 16",
      "email": "ilyaskaradas07@hotmail.com",
      "btnWhatsapp": "NAPISZ NA WHATSAPP",
      "btnBookTour": "ZAREZERWUJ WYCIECZKĘ",
      "btnEmail": "WYŚLIJ E-MAIL",
      "quickNote": "Odpowiadamy w kilka minut na WhatsApp każdego dnia w godzinach 08:00 – 22:00."
    },
    "footer": {
      "brand": "TRIPORA ALANYA",
      "tagline": "Więcej wrażeń. Odkryj Alanyę.",
      "about": "Renomowana agencja turystyczna z Alanyi w Turcji. Tworzymy najwyższej klasy, bezpieczne i niezapomniane wakacyjne wspomnienia dla gości z całego świata.",
      "navTitle": "Nawigacja",
      "shoppingTitle": "Zakupy i styl życia",
      "contactTitle": "Kontakt",
      "languagesTitle": "Języki",
      "legalTitle": "Informacje prawne",
      "privacyPolicy": "Polityka prywatności",
      "termsConditions": "Regulamin usług",
      "cancellationPolicy": "Zasady anulacji",
      "cookiePolicy": "Polityka cookies",
      "copyright": "Wszelkie prawa zastrzeżone.",
      "disclaimer": "Wszystkie wycieczki i usługi są ubezpieczone i licencjonowane przez Ministerstwo Kultury i Turystyki Republiki Turcji (TÜRSAB)."
    },
    "aiChatbot": {
      "title": "Asystent Podróży Tripora",
      "subtitle": "Ekspert ds. Alanyi • Online",
      "welcome": "Cześć! 👋 Jestem asystentem podróży Tripora. Szukasz idealnej wycieczki w Alanyi? Napisz mi, co lubisz, a pomogę Ci wybrać najlepszą opcję.",
      "placeholder": "Zapytaj o wycieczki, rejsy, transfery lub ceny...",
      "send": "Wyślij",
      "quickChips": [
        "Najlepsze dla rodzin",
        "Rejs statkiem Alanya",
        "Prywatny jacht VIP",
        "Ceny wycieczek",
        "Transfer z lotniska €80"
      ],
      "whatsappPrompt": "Chcesz porozmawiać bezpośrednio z naszym konsultantem?",
      "whatsappBtn": "Napisz na WhatsApp"
    },
    "mobileBar": {
      "bookNow": "REZERWUJ",
      "whatsapp": "WHATSAPP"
    }
  },
  uk: ADDITIONAL_TRANSLATIONS.uk,
  ro: ADDITIONAL_TRANSLATIONS.ro,
  sr: ADDITIONAL_TRANSLATIONS.sr
};

TRANSLATIONS.pl.tourDetail = {
  perPerson: 'za osobę',
  perYacht: 'za jacht',
  bookTour: 'ZAREZERWUJ TĘ WYCIECZKĘ',
  whatsappInquire: 'ZAPYTAJ NA WHATSAPP',
  overview: 'Opis wycieczki',
  highlights: 'Najważniejsze punkty',
  included: 'W cenie wycieczki',
  excluded: 'Cena nie obejmuje',
  itinerary: 'Plan wycieczki',
  pickup: 'Odbiór i powrót do hotelu',
  whatToBring: 'Ważne informacje i co zabrać'
};


// Aliases and tour detail translations for robustness
TRANSLATIONS.en.tourDetail = {
  perPerson: 'per person',
  perYacht: 'private yacht',
  bookTour: 'BOOK THIS TOUR',
  whatsappInquire: 'INQUIRE ON WHATSAPP',
  overview: 'Tour Overview',
  highlights: 'Highlights',
  included: 'What is Included',
  excluded: 'What is Excluded',
  itinerary: 'Tour Itinerary',
  pickup: 'Hotel Pickup & Transfer',
  whatToBring: 'Important Information & What to Bring'
};

TRANSLATIONS.tr.tourDetail = {
  perPerson: 'kişi başı',
  perYacht: 'özel yat',
  bookTour: 'HEMEN REZERVASYON YAP',
  whatsappInquire: 'WHATSAPP\'TAN BİLGİ AL',
  overview: 'Tur Özeti',
  highlights: 'Öne Çıkanlar',
  included: 'Fiyata Dahil Olanlar',
  excluded: 'Dahil Olmayanlar',
  itinerary: 'Tur Programı',
  pickup: 'Otelden Alış & Bırakılış',
  whatToBring: 'Önemli Bilgiler & Yanınıza Almanız Gerekenler'
};

TRANSLATIONS.ru.tourDetail = {
  perPerson: 'за человека',
  perYacht: 'за яхту',
  bookTour: 'ЗАБРОНИРОВАТЬ ТУР',
  whatsappInquire: 'СПРОСИТЬ В WHATSAPP',
  overview: 'Обзор тура',
  highlights: 'Главные моменты',
  included: 'Включено в стоимость',
  excluded: 'Не включено',
  itinerary: 'Программа экскурсии',
  pickup: 'Трансфер из отеля',
  whatToBring: 'Важная информация и что взять с собой'
};

TRANSLATIONS.de.tourDetail = {
  perPerson: 'pro Person',
  perYacht: 'pro Yacht',
  bookTour: 'JETZT BUCHEN',
  whatsappInquire: 'AUF WHATSAPP ANFRAGEN',
  overview: 'Überblick',
  highlights: 'Highlights',
  included: 'Inklusive',
  excluded: 'Nicht Inklusive',
  itinerary: 'Ablauf',
  pickup: 'Hotelabholung & Transfer',
  whatToBring: 'Wichtige Hinweise & Was Sie mitbringen sollten'
};

// Ensure consistent section aliases across all languages
const ALL_LANGUAGES: Language[] = ['en', 'tr', 'ru', 'de', 'pl', 'uk', 'ro', 'sr'];
for (const lang of ALL_LANGUAGES) {
  const item = TRANSLATIONS[lang];
  if (item) {
    if (!item.reviewsSection && item.reviews) item.reviewsSection = item.reviews;
    if (!item.faqSection && item.faq) item.faqSection = item.faq;
    if (!item.contactSection && item.contact) item.contactSection = item.contact;
    if (!item.reviews && item.reviewsSection) item.reviews = item.reviewsSection;
    if (!item.faq && item.faqSection) item.faq = item.faqSection;
    if (!item.contact && item.contactSection) item.contact = item.contactSection;
  }
}

