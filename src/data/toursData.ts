import { Tour, ShoppingService } from '../types';

export const TOURS_DATA: Tour[] = [
  {
    "id": "turkish-hamam-spa",
    "slug": "turkish-hamam-spa",
    "category": "Culture",
    "isFeatured": true,
    "price": 20,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 295,
    "image": "/assets/images/turkish-hamam.jpg",
    "imageAlt": {
      "en": "Authentic traditional Turkish bath Hamam and spa in Alanya with heated marble stone",
      "tr": "Alanya otantik geleneksel Türk hamamı ve spa ısıtmalı göbek taşı",
      "ru": "Традиционный турецкий хамам и спа в Аланье с подогреваемым мраморным камнем",
      "de": "Traditionelles türkisches Hamam und Spa in Alanya mit beheiztem Marmorstein",
      "pl": "Tradycyjna łaźnia turecka Hamam i spa w Alanyi z podgrzewanym kamieniem marmurowym"
    },
    "gallery": [
      "/assets/images/turkish-hamam.jpg",
      "/assets/images/hamam-foam-massage.jpg"
    ],
    "title": {
      "en": "Traditional Turkish Bath (Hamam)",
      "tr": "Geleneksel Türk Hamamı & Spa",
      "ru": "Традиционный турецкий хамам и спа",
      "de": "Traditionelles türkisches Hamam & Spa",
      "pl": "Tradycyjny Hamam turecki & Spa"
    },
    "duration": {
      "en": "2.5 - 3 Hours",
      "tr": "2.5 - 3 Saat",
      "ru": "2.5 - 3 Часа",
      "de": "2.5 - 3 Stunden",
      "pl": "2.5 - 3 godziny"
    },
    "description": {
      "tr": "Sadece 20€ karşılığında geleneksel Türk Hamamı ile tatilinizin ilk günlerinde bedeninizi ve ruhunuzu tazeleyin. Sıcak göbek taşında gevşeyin, geleneksel kese ile cildinizi ölü derilerden arındırın ve bol köpük masajı ile yorgunluğunuzu atın. Güneşlenmeden önce yapılan kese uygulaması kalıcı ve pürüzsüz bir bronzluk sağlar. Sauna, buhar odası, kese, köpük masajı, 20 dk yağ masajı ve otelden ücretsiz transfer dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Refresh your mind and body at the start of your holiday with an authentic Turkish Bath (Hamam) experience in Alanya for just €20. Relax on the heated central marble stone (Göbek Taşı), exfoliate with a traditional peeling scrub (Kese), and indulge in a luxurious foam massage followed by an aromatherapeutic oil massage. Doing a scrub before sunbathing ensures a smoother, longer-lasting tan. Complete package includes sauna, steam room, peeling, foam massage, relaxing oil massage, and roundtrip hotel transfers. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Освежите тело и душу в традиционном турецком хамаме в Аланье всего за 20€. Расслабьтесь на теплом мраморе, пройдите пилинг рукавицей кесе, пенный массаж и расслабляющий массаж с маслами. Пилинг перед загаром обеспечивает ровный и стойкий загар. Включены сауна, парная, пилинг, массажи и трансфер из отеля. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erfrischen Sie Körper und Geist mit einem authentischen türkischen Hamam in Alanya für nur 20€. Entspannen Sie auf dem warmen Marmorstein, genießen Sie ein Kese-Peeling, Schaummassage und eine wohltuende Ölmassage. Optimal vor dem ersten Sonnenbad für eine langanhaltende Bräune. Inklusive Sauna, Dampfbad und Transfer. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Zregeneruj ciało w tradycyjnej łaźni tureckiej (Hamam) w Alanyi za jedyne 20€. Relaks na ciepłym marmurze, peeling rękawicą Kese, masaż w chmurze piany oraz masaż relaksacyjny olejkami. Przygotowuje skórę na idealną opaleniznę. W pakiecie sauna, łaźnia parowa, masaże i darmowy transfer. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Authentic Ottoman Turkish Bath atmosphere",
        "Heated central marble stone (Göbek Taşı) relaxation",
        "Sauna & eucalyptus steam room session",
        "Traditional exfoliating Kese peeling scrub",
        "Cloud-like fragrant soap foam massage",
        "20-minute relaxing aromatherapy oil massage",
        "Prepares your skin for a perfect, long-lasting tan",
        "Free roundtrip hotel pickup & return transfer"
      ],
      "tr": [
        "Otantik Osmanlı Türk Hamamı atmosferi",
        "Sıcak göbek taşında gevşeme ve terleme",
        "Sauna ve buhar odası seansı",
        "Geleneksel ipek kese ile ölü deri temizliği",
        "Bulut gibi köpük banyosu ve köpük masajı",
        "20 dakikalık dinlendirici aromaterapi yağ masajı",
        "Cildi pürüzsüzleştirerek kalıcı bronzluk sağlar",
        "Otelden ücretsiz gidiş-dönüş transfer"
      ],
      "ru": [
        "Атмосфера османского хамама",
        "Релаксация на теплом камне гебек-таши",
        "Сауна и эвкалиптовая паровая комната",
        "Традиционный пилинг рукавицей кесе",
        "Пышный пенный массаж",
        "20-минутный расслабляющий массаж с аромамаслами",
        "Идеальная подготовка кожи к ровному загару",
        "Бесплатный трансфер от и до отеля"
      ],
      "de": [
        "Authentisches osmanisches Hamam-Erlebnis",
        "Entspannung auf dem warmen Marmorstein",
        "Sauna- und Eukalyptus-Dampfbadbesuch",
        "Traditionelles Peeling mit dem Kese-Handschuh",
        "Herrlich duftende Seifenschaummassage",
        "20-minütige entspannende Aroma-Ölmassage",
        "Optimale Vorbereitung auf eine gleichmäßige Bräune",
        "Kostenloser Hin- und Rücktransfer ab Hotel"
      ],
      "pl": [
        "Autentyczny klimat łaźni osmańskiej",
        "Relaks na rozgrzanym marmurze Göbek Taşı",
        "Sesja w saunie i łaźni parowej",
        "Tradycyjny peeling rękawicą Kese",
        "Masaż w gęstej, pachnącej pianie mydlanej",
        "20-minutowy relaksujący masaż olejkami aromatycznymi",
        "Idealne przygotowanie skóry na głęboką opaleniznę",
        "Bezpłatny transfer w obie strony z hotelu"
      ]
    },
    "included": {
      "en": [
        "Roundtrip hotel pickup & drop-off",
        "Sauna and steam room access",
        "Traditional Kese body peeling",
        "Luxurious soap foam massage",
        "Relaxing full-body oil massage (20 min)",
        "Face clay mask treatment",
        "Complimentary Turkish tea / apple tea",
        "Towels, slippers, and pestemal wrap"
      ],
      "tr": [
        "Otelden gidiş-dönüş transfer",
        "Sauna ve buhar odası kullanımı",
        "Geleneksel kese peeling uygulaması",
        "Rahatlatıcı köpük masajı",
        "Tüm vücut dinlendirici yağ masajı (20 dk)",
        "Yüz kil maskesi uygulaması",
        "Geleneksel Türk çayı / elma çayı ikramı",
        "Peştamal, havlu ve terlik temini"
      ],
      "ru": [
        "Трансфер из отеля и обратно",
        "Посещение сауны и паровой",
        "Традиционный пилинг кесе",
        "Пенный массаж",
        "Масляный массаж (20 мин)",
        "Глиняная маска для лица",
        "Традиционный чай",
        "Полотенца, тапочки и пештемаль"
      ],
      "de": [
        "Kostenloser Hoteltransfer hin und zurück",
        "Nutzung von Sauna und Dampfbad",
        "Traditionelles Kese-Körperpeeling",
        "Wohltuende Seifenschaummassage",
        "Entspannende Ganzkörper-Ölmassage (20 Min.)",
        "Pflegende Tonerde-Gesichtsmaske",
        "Türkischer Tee / Apfeltee zur Erfrischung",
        "Handtücher, Hausschuhe und Pestemal"
      ],
      "pl": [
        "Transfer z i do hotelu",
        "Dostęp do sauny i łaźni parowej",
        "Tradycyjny peeling ciała Kese",
        "Masaż pianą mydlaną",
        "Masaż relaksacyjny olejkami (20 min)",
        "Maseczka glinkowa na twarz",
        "Poczęstunek turecką herbatą jabłkową",
        "Ręczniki, klapki i tradycyjny ręcznik pesztemal"
      ]
    },
    "notIncluded": {
      "en": [
        "Optional extended massages (medical, Thai, hot stone)",
        "Personal expenses and cold bar drinks"
      ],
      "tr": [
        "Ekstra medikal / özel masajlar (isteğe bağlı)",
        "Kişisel harcamalar ve özel soğuk içecekler"
      ],
      "ru": [
        "Дополнительные специальные массажи (по желанию)",
        "Личные расходы и напитки из бара"
      ],
      "de": [
        "Zusätzliche Spezialmassagen (optional)",
        "Persönliche Ausgaben und Bargetränke"
      ],
      "pl": [
        "Dodatkowe masaże specjalistyczne (opcjonalnie)",
        "Wydatki osobiste i napoje z baru"
      ]
    },
    "pickupInfo": {
      "tr": "Her gün sabah, öğlen ve akşam saatlerinde esnek seans seçenekleriyle tüm Alanya, Mahmutlar, Oba, Konaklı, Avsallar ve Okurcalar otellerinden ücretsiz transfer. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Available every day with flexible pickup hours (morning, afternoon, or evening) from all Alanya, Mahmutlar, Oba, Konakli, Avsallar, and Okurcalar hotels. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Ежедневно в удобное время (утром, днем или вечером) из всех отелей Аланьи, Махмутлара, Оба, Конаклы, Авсаллара и Окурджалара. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich mit flexiblen Abholzeiten (morgens, mittags oder abends) von allen Hotels in Alanya, Mahmutlar, Oba, Konakli, Avsallar und Okurcalar. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie z elastycznymi godzinami odbioru (rano, po południu lub wieczorem) ze wszystkich hoteli w Alanyi i okolicznych miejscowościach. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Yanınızda mayo veya bikini getirmeniz yeterlidir.",
        "Peştamal, havlu ve terlik hamamda temin edilir.",
        "Güneşte yanmadan önce, tatilinizin 1. veya 2. gününde yapılması şiddetle tavsiye edilir."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring your swimwear/bikini.",
        "Pestemal, towel, and slippers are provided at the hammam.",
        "Highly recommended during the 1st or 2nd day of your vacation before getting sunburned."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите с собой купальник или плавки.",
        "Полотенца, тапочки и пештемаль предоставляются на месте.",
        "Рекомендуется посещать в первые 1-2 дня отдыха до активного загара."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Bitte Badekleidung mitbringen.",
        "Pestemal, Handtücher und Badeschuhe werden vor Ort gestellt.",
        "Besonders empfehlenswert am 1. oder 2. Urlaubstag vor dem ersten Sonnenbad."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Zabierz ze sobą strój kąpielowy.",
        "Ręczniki, pesztemal i klapki są zapewnione w łaźni.",
        "Gorąco polecamy wizytę w 1. lub 2. dniu pobytu przed intensywnym opalaniem."
      ]
    },
    "participantsCount": 4120
  },
  {
    "id": "alanya-boat-tour",
    "slug": "alanya-boat-tour",
    "category": "Boat Tours",
    "price": 20,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 318,
    "image": "/assets/images/boat-tour.jpg",
    "imageAlt": {
      "en": "Alanya party boat tour Baba 07 cruising along Mediterranean coastline",
      "tr": "Alanya Baba 07 korsan parti tekne turu ve köpük partisi Akdeniz",
      "ru": "Пиратский корабль Baba 07 в Аланье и пенная вечеринка",
      "de": "Alanya Party-Piratenschiff Baba 07 und Schaumparty",
      "pl": "Błękitny rejs imprezowy statkiem pirackim Baba 07 w Alanyi"
    },
    "gallery": [
      "/assets/images/boat-tour.jpg",
      "/assets/images/party-alanya-rejs.jpeg",
      "/assets/images/baba-boat-tour.jpeg",
      "/assets/images/blekitny-rejs34.jpg",
      "/assets/images/baba-boat-a.jpeg"
    ],
    "title": {
      "en": "Alanya Party Boat Tour",
      "tr": "Alanya Korsan Parti Tekne Turu (Baba 07)",
      "ru": "Пиратская вечеринка на яхте в Аланье",
      "de": "Alanya Party-Piratenschiff Tour",
      "pl": "Imprezowy rejs statkiem pirackim Alanya"
    },
    "duration": {
      "en": "6 Hours",
      "tr": "6 Saat",
      "ru": "6 Часов",
      "de": "6 Stunden",
      "pl": "6 godzin"
    },
    "description": {
      "tr": "Sadece 20€ karşılığında efsanevi Baba 07 korsan gemisiyle Alanya kıyılarında unutulmaz bir gün geçirin. Tarihi Kızıl Kule, Alanya Kalesi, Korsanlar, Aşıklar ve Fosforlu Mağaraları ziyaret edin. Berrak turkuaz koylarda yüzme molaları, açık büfe öğle yemeği ve üst güvertede çılgın köpük partisi dahil. Otelden ücretsiz transfer. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Join the legendary Baba 07 pirate boat tour along the scenic Alanya coastline for just €20. Sail past the historic Red Tower, Alanya Castle, Pirate Cave, Lovers Cave, and Phosphoric Cave. Enjoy swimming stops in crystal turquoise waters, lively music, our famous deck foam party, and an open-buffet lunch on board. Free hotel pickup and drop-off included. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Присоединяйтесь к легендарной пиратской вечеринке на корабле Baba 07 вдоль побережья Аланьи всего за 20€. Проплывите мимо Красной башни, пещер пиратов и влюбленных, насладитесь купанием в открытом море, обедом 'шведский стол' и зажигательной пенной дискотекой на борту. Трансфер из отеля включен. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erleben Sie für nur 20€ die legendäre Baba 07 Piratenschiff-Tour entlang der Küste von Alanya. Entdecken Sie den Roten Turm, Piraten- und Liebeshöhlen, genießen Sie Badestopps im türkisblauen Meer, ein leckeres Mittagsbuffet und die berühmte Schaumparty an Deck. Kostenloser Hoteltransfer inklusive. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Dołącz do legendarnego rejsu pirackiego statkiem Baba 07 wzdłuż wybrzeża Alanyi za jedyne 20€. Zobacz Czerwoną Wieżę, zamek i jaskinie morskie, kąp się w lazurowej wodzie i baw się podczas wielkiej imprezy w pianie z obiadem w cenie. Darmowy transfer z hotelu. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Legendary Baba 07 pirate ship atmosphere",
        "Panoramic views of Alanya Castle and Red Tower",
        "Visits to Pirate, Lovers, and Phosphorus caves",
        "Multiple swimming breaks in turquoise waters",
        "Giant upper-deck foam party with DJ music",
        "Delicious open-buffet lunch served on board",
        "Free hotel pickup and return transfer"
      ],
      "tr": [
        "Efsanevi Baba 07 korsan gemisi atmosferi",
        "Alanya Kalesi ve Kızıl Kule panoramik manzarası",
        "Korsanlar, Aşıklar ve Fosforlu mağara durakları",
        "Turkuaz koylarda yüzme molaları",
        "Üst güvertede dev köpük partisi ve müzik",
        "Açık büfe lezzetli öğle yemeği",
        "Otelden ücretsiz gidiş-dönüş transfer"
      ],
      "ru": [
        "Атмосфера пиратского корабля Baba 07",
        "Виды на крепость Аланьи и Красную башню",
        "Остановки у пиратских пещер и купание в море",
        "Пенная вечеринка с зажигательной музыкой",
        "Обед 'шведский стол' на борту",
        "Бесплатный трансфер из отеля"
      ],
      "de": [
        "Atmosphäre auf dem Piratenschiff Baba 07",
        "Blick auf Burg von Alanya und Roten Turm",
        "Besuch der berühmten Meereshöhlen",
        "Badestopps im türkisblauen Wasser",
        "Große Schaumparty auf dem Oberdeck",
        "Mittagsbuffet an Bord inklusive",
        "Kostenloser Hoteltransfer hin und zurück"
      ],
      "pl": [
        "Klimat prawdziwego statku pirackiego Baba 07",
        "Widoki na zamek i Czerwoną Wieżę w Alanyi",
        "Zwiedzanie jaskiń morskich i kąpiele w morzu",
        "Szalone piana party z muzyką na pokładzie",
        "Smaczny obiad w formie bufetu",
        "Darmowy odbiór i dowóz do hotelu"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup and drop-off",
        "6-hour boat cruise",
        "Open buffet lunch (grilled chicken, pasta, salads)",
        "Foam party & music entertainment",
        "Swimming stops with life jackets"
      ],
      "tr": [
        "Otelden gidiş-dönüş transfer",
        "6 saatlik tekne turu",
        "Açık büfe öğle yemeği (tavuk, makarna, salatalar)",
        "Köpük partisi ve müzik eğlencesi",
        "Yüzme molaları ve can yelekleri"
      ],
      "ru": [
        "Трансфер из отеля и обратно",
        "6-часовой круиз",
        "Обед 'шведский стол'",
        "Пенная вечеринка",
        "Остановки для купания"
      ],
      "de": [
        "Hotelabholung und Rückfahrt",
        "6-stündige Schifffahrt",
        "Mittagsbuffet",
        "Schaumparty und Unterhaltung",
        "Badestopps"
      ],
      "pl": [
        "Transfer z/do hotelu",
        "6-godzinny rejs statkiem",
        "Obiad w formie bufetu",
        "Piana party na pokładzie",
        "Kąpiele w morzu"
      ]
    },
    "notIncluded": {
      "en": [
        "Alcoholic and imported beverages",
        "Personal expenses & professional photos"
      ],
      "tr": [
        "Alkollü ve ithal içecekler",
        "Kişisel harcamalar ve profesyonel fotoğraflar"
      ],
      "ru": [
        "Алкогольные напитки",
        "Личные расходы и фото"
      ],
      "de": [
        "Alkoholische Getränke",
        "Persönliche Ausgaben"
      ],
      "pl": [
        "Napoje alkoholowe",
        "Wydatki osobiste"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden her gün 08:45 - 09:30 arası alış, 16:00 dönüş. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Daily pickup at ~08:45 - 09:30 from all Alanya hotels, returning ~16:00. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Ежедневный выезд 08:45 - 09:30 из отелей Аланьи, возвращение в 16:00. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich ca. 08:45 - 09:30 Uhr ab allen Hotels in Alanya, Rückkehr ca. 16:00 Uhr. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie zbiórka ok. 08:45 - 09:30 z hoteli w Alanyi, powrót ok. 16:00. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Mayo, havlu, güneş gözlüğü ve güneş kremi getirin.",
        "Tüm yaş grupları ve aileler için uygundur."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring swimwear, towel, sunglasses, and sunscreen.",
        "Suitable for all ages and families."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите купальник, полотенце и крем от солнца.",
        "Подходит для всей семьи."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Badesachen, Handtuch und Sonnencreme mitbringen.",
        "Für jedes Alter geeignet."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Zabierz strój kąpielowy, ręcznik i krem z filtrem.",
        "Wycieczka dla każdego wieku."
      ]
    },
    "participantsCount": 5420
  },
  {
    "id": "quad-safari",
    "slug": "quad-safari",
    "category": "Adventure",
    "price": 27,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.8,
    "reviewsCount": 245,
    "image": "/assets/images/quad-safari.jpg",
    "imageAlt": {
      "en": "Quad safari adventure riders on off-road Taurus Mountain trails near Alanya",
      "tr": "Alanya Toros Dağları patikalarında ATV safari macerası",
      "ru": "Квадро-сафари на трассах в Таврских горах возле Аланьи",
      "de": "Quad-Safari Abenteuer auf Offroad-Trails im Taurusgebirge bei Alanya",
      "pl": "Ekscytujące safari quadami po górskich bezdrożach Alanyi"
    },
    "gallery": [
      "/assets/images/quad-safari.jpg",
      "/assets/images/quad-safari-convoy.jpg",
      "/assets/images/quad-safari-water.jpg",
      "/assets/images/quad-safari-main.jpg"
    ],
    "title": {
      "en": "Quad Safari",
      "tr": "Alanya Quad (ATV) Safari",
      "ru": "Квадро-сафари в Аланье",
      "de": "Quad-Safari Alanya",
      "pl": "Safari na quadach (ATV)"
    },
    "duration": {
      "en": "3 Hours",
      "tr": "3 Saat",
      "ru": "3 Часа",
      "de": "3 Stunden",
      "pl": "3 godziny"
    },
    "description": {
      "tr": "27€ fiyatla Toros Dağları eteklerinde çam ormanları, tozlu yollar ve su geçişlerinde adrenalin dolu ATV safari macerası. Ehliyet gerekmez; kask ve rehber eşliğinde güvenli sürüş. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Experience high-adrenaline off-road quad biking through dusty trails, pine forests, and mountain streams in the Taurus Mountains for €27. No driving license required; full safety equipment and training provided. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Зарядитесь адреналином в захватывающем туре на квадроциклах по горным тропам, сосновым лесам и ручьям Таврских гор всего за 27€. Водительские права не требуются. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erleben Sie für 27€ eine actiongeladene Quad-Fahrt über staubige Pfade, durch Kiefernwälder und Flussläufe im Taurusgebirge. Kein Führerschein erforderlich. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Wybierz się na pełną emocji przejażdżkę quadami po bezdrożach, leśnych ścieżkach i rzekach Gór Taurus za 27€. Prawo jazdy nie jest wymagane. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Thrilling off-road trails in Taurus Mountains",
        "Pine forests, river crossings, and muddy tracks",
        "No prior driving license required",
        "Full safety gear and test drive included",
        "Roundtrip hotel transfer included"
      ],
      "tr": [
        "Toros Dağları'nda off-road parkurlar",
        "Orman, çamur ve nehir geçişleri",
        "Sürücü belgesi gerekmez",
        "Kask ve güvenlik ekipmanı dahil",
        "Otelden gidiş-dönüş transfer dahil"
      ],
      "ru": [
        "Трассы по бездорожью в горах Тавра",
        "Грязевые участки и водные преграды",
        "Права не требуются",
        "Шлем и экипировка включены",
        "Трансфер из отеля включен"
      ],
      "de": [
        "Offroad-Strecken im Taurusgebirge",
        "Waldwege und Wasserpassagen",
        "Kein Führerschein nötig",
        "Helme und Sicherheitseinweisung",
        "Inklusive Hoteltransfer"
      ],
      "pl": [
        "Górskie trasy off-road w Górach Taurus",
        "Błotne ścieżki i przejazdy przez rzekę",
        "Bez prawa jazdy",
        "Kaski i instruktaż w cenie",
        "Darmowy transport z hotelu"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup & return",
        "Quad bike & fuel",
        "Helmet & protective gear",
        "Professional guide & instruction"
      ],
      "tr": [
        "Otel transferi",
        "ATV ve yakıt",
        "Kask ve koruyucu ekipman",
        "Profesyonel rehber ve eğitim"
      ],
      "ru": [
        "Трансфер из отеля",
        "Квадроцикл и топливо",
        "Шлем и снаряжение",
        "Инструктор"
      ],
      "de": [
        "Hoteltransfer",
        "Quad & Benzin",
        "Helm und Ausrüstung",
        "Guide und Einweisung"
      ],
      "pl": [
        "Transfer z/do hotelu",
        "Quad i paliwo",
        "Kask i sprzęt",
        "Przewodnik i szkolenie"
      ]
    },
    "notIncluded": {
      "en": [
        "Bandana & goggles (available on site)",
        "Drinks & photo/video service"
      ],
      "tr": [
        "Bandana ve gözlük (isteğe bağlı)",
        "İçecekler ve fotoğraf servisi"
      ],
      "ru": [
        "Бандана и очки",
        "Напитки и фото"
      ],
      "de": [
        "Bandana und Brille",
        "Getränke und Fotos"
      ],
      "pl": [
        "Bandana i okulary",
        "Napoje i zdjęcia"
      ]
    },
    "pickupInfo": {
      "tr": "Her gün sabah ve öğleden sonra seansları ile tüm Alanya otellerinden transfer. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Morning and afternoon sessions available daily from all Alanya hotels. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Утренние и дневные заезды каждый день из всех отелей. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich vormittags und nachmittags ab allen Hotels. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie rano i po południu ze wszystkich hoteli. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Kirlenmesinde sakınca olmayan kıyafetler giyin.",
        "16 yaş ve üzeri tek sürebilir, 16 yaş altı arkada yolcu olabilir."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Wear clothes you do not mind getting dusty and dirty.",
        "Minimum driving age is 16; children under 16 ride as passengers."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Одевайте одежду, которую не жалко испачкать.",
        "За руль допускаются лица от 16 лет."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Kleidung tragen, die schmutzig werden darf.",
        "Fahreralter ab 16 Jahren."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Załóż wygodne ubrania odporne na kurz i błoto.",
        "Prowadzenie od 16 lat, młodsze dzieci jako pasażer."
      ]
    },
    "participantsCount": 3840
  },
  {
    "id": "snorkel-tour",
    "slug": "snorkel-tour",
    "category": "Boat Tours",
    "price": 30,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 168,
    "image": "/assets/images/snorkel-tour.jpg",
    "imageAlt": {
      "en": "Snorkel tour in crystal turquoise waters near Alanya sea caves and colorful fish",
      "tr": "Alanya deniz mağaralarında turkuaz sularda şnorkelle yüzme turu",
      "ru": "Снорклинг в бирюзовых водах возле морских пещер Аланьи",
      "de": "Schnorcheltour im kristallklaren Wasser vor den Meereshöhlen von Alanya",
      "pl": "Snurkowanie w krystalicznie czystej wodzie przy jaskiniach Alanyi"
    },
    "gallery": [
      "/assets/images/snorkel-tour.jpg",
      "/assets/images/diving-turtle.jpg",
      "/assets/images/diving-reef.jpg"
    ],
    "title": {
      "en": "Snorkel Tour",
      "tr": "Alanya Şnorkel & Mağaralar Turu",
      "ru": "Снорклинг тур в Аланье",
      "de": "Schnorcheltour Alanya",
      "pl": "Wycieczka ze snurkowaniem Alanya"
    },
    "duration": {
      "en": "4 Hours",
      "tr": "4 Saat",
      "ru": "4 Часа",
      "de": "4 Stunden",
      "pl": "4 godziny"
    },
    "description": {
      "tr": "30€ karşılığında Alanya Kalesi altındaki deniz mağaralarını ve rengarenk sualtı yaşamını keşfedin. Maske, şnorkel, palet ekipmanları ve profesyonel rehberlik dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Discover the vibrant underwater world and sea caves of Alanya for €30. Snorkel along Cleopatra Beach, the castle cliffs, and pristine marine reserves with masks, snorkels, fins, and professional guidance included. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Откройте для себя подводный мир и морские пещеры Аланьи за 30€. Маски, трубки, ласты и инструктаж включены в стоимость. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erkunden Sie für 30€ die Unterwasserwelt und Meereshöhlen von Alanya. Schnorchelausrüstung und Guide inklusive. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Odkryj podwodny świat i jaskinie morskie Alanyi za 30€. Maska, rurka, płetwy i opieka instruktora w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Snorkeling at Cleopatra Beach & Castle caves",
        "High clarity turquoise Mediterranean waters",
        "See sea turtles (Caretta Caretta) and colorful fish",
        "Quality masks, snorkels, and fins provided",
        "Hotel pickup & drop-off included"
      ],
      "tr": [
        "Kleopatra Plajı ve Kale mağaralarında şnorkel",
        "Berrak turkuaz Akdeniz suları",
        "Deniz kaplumbağaları (Caretta) ve balıklar",
        "Kaliteli maske, şnorkel ve palet temini",
        "Otelden transfer dahil"
      ],
      "ru": [
        "Снорклинг у пещер и пляжа Клеопатры",
        "Кристальная видимость в море",
        "Морские черепахи и разноцветные рыбки",
        "Полное снаряжение включено",
        "Трансфер из отеля"
      ],
      "de": [
        "Schnorcheln an Höhlen & Kleopatra-Strand",
        "Glasklares Mittelmeer",
        "Möglichkeit Meeresschildkröten zu sehen",
        "Komplette Ausrüstung inklusive",
        "Inklusive Hoteltransfer"
      ],
      "pl": [
        "Snurkowanie przy jaskiniach zamkowych",
        "Krystaliczna przejrzystość wody",
        "Szansa na spotkanie żółwi Caretta",
        "Wypożyczenie sprzętu w cenie",
        "Darmowy transport z hotelu"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup and return",
        "Boat cruise to prime snorkel spots",
        "Masks, snorkels, and fins",
        "Professional snorkeling guide",
        "Bottled water & fresh fruit"
      ],
      "tr": [
        "Otelden gidiş-dönüş transfer",
        "En iyi şnorkel noktalarına tekne turu",
        "Maske, şnorkel ve paletler",
        "Profesyonel şnorkel rehberi",
        "Su ve taze meyve ikramı"
      ],
      "ru": [
        "Трансфер из отеля",
        "Прогулка на катере к лучшим рифам",
        "Маски, трубки, ласты",
        "Гид-инструктор",
        "Вода и фрукты"
      ],
      "de": [
        "Hoteltransfer",
        "Bootstour zu den besten Schnorchelspots",
        "Schnorchelausrüstung",
        "Professioneller Guide",
        "Wasser & Obst"
      ],
      "pl": [
        "Transfer z/do hotelu",
        "Rejs do najlepszych zatok",
        "Sprzęt do snurkowania",
        "Opieka przewodnika",
        "Woda i owoce"
      ]
    },
    "notIncluded": {
      "en": [
        "Underwater photography & video (optional)",
        "Extra beverages"
      ],
      "tr": [
        "Sualtı fotoğraf & video çekimi",
        "Ekstra içecekler"
      ],
      "ru": [
        "Подводная фотосъемка",
        "Дополнительные напитки"
      ],
      "de": [
        "Unterwasserfotos",
        "Zusätzliche Getränke"
      ],
      "pl": [
        "Zdjęcia podwodne",
        "Dodatkowe napoje"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden her gün sabah 09:00 civarı hareket. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Morning departures daily from all Alanya hotels at ~09:00. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Ежедневно утром около 09:00 из всех отелей Аланьи. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich morgens ca. 09:00 Uhr ab Hotel. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie rano ok. 09:00 z hoteli w Alanyi. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Mayo, havlu ve güneş kremi getirin.",
        "Yüzme bilmeyenler için can yeleği mevcuttur."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring swimwear, towel, and sun protection.",
        "Non-swimmers can wear buoyancy vests provided on board."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите купальник, полотенце и крем от солнца.",
        "Есть спасательные жилеты."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Badesachen und Handtuch mitbringen.",
        "Schwimmwesten an Bord vorhanden."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Zabierz strój kąpielowy i ręcznik.",
        "Dostępne kamizelki asekuracyjne."
      ]
    },
    "participantsCount": 1950
  },
  {
    "id": "pamukkale-tour",
    "slug": "pamukkale",
    "category": "Day Trips",
    "price": 75,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 310,
    "image": "/assets/images/pamukkale.jpg",
    "imageAlt": {
      "en": "Thermal calcium white travertines of Pamukkale with ancient Hierapolis in Turkey",
      "tr": "Pamukkale beyaz travertenleri ve Hierapolis antik kenti Alanya çıkışlı tur",
      "ru": "Белоснежные термальные травертины Памуккале и античный Иераполис",
      "de": "Weiße Kalksinterterrassen von Pamukkale und antikes Hierapolis",
      "pl": "Białe wapienne tarasy Pamukkale i starożytne miasto Hierapolis"
    },
    "gallery": [
      "/assets/images/pamukkale.jpg",
      "/assets/images/pamukkale-travertines-white.jpg",
      "/assets/images/hierapolis-roman-theater.jpg",
      "/assets/images/pamukkale-travertines-hero.jpg"
    ],
    "title": {
      "en": "Pamukkale Tour",
      "tr": "Pamukkale & Hierapolis Turu",
      "ru": "Экскурсия в Памуккале",
      "de": "Pamukkale & Hierapolis Tour",
      "pl": "Wycieczka do Pamukkale"
    },
    "duration": {
      "en": "Full Day (16 Hours)",
      "tr": "Tam Gün (16 Saat)",
      "ru": "Весь день (16 Часов)",
      "de": "Ganztägig (16 Stunden)",
      "pl": "Cały dzień (16 godzin)"
    },
    "description": {
      "tr": "75€ karşılığında UNESCO Dünya Mirası Pamukkale beyaz travertenlerini ve antik Hierapolis kentini keşfedin. Ilık termal sularda yalınayak yürüyün, antik tiyatroyu gezin ve efsanevi Kleopatra Havuzu'nda yüzün. Klimalı otobüs, profesyonel rehber ve yemekler dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Journey to the UNESCO World Heritage Cotton Castle of Pamukkale and ancient Hierapolis for €75. Walk barefoot across the warm thermal white calcium terraces, explore the ancient Roman Theater, and swim in Cleopatra's Antique Pool. Includes comfortable air-conditioned bus transfer, licensed guide, and meals. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Посетите всемирно известный 'Хлопковый замок' Памуккале и античный город Иераполис всего за 75€. Прогуляйтесь босиком по белым термальным бассейнам и искупайтесь в бассейне Клеопатры. Трансфер на комфортабельном автобусе, гид и питание включены. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Fahrt zum UNESCO-Weltkulturerbe Pamukkale und antiken Hierapolis für 75€. Spazieren Sie barfuß über die weißen Kalkterrassen und schwimmen Sie im Kleopatra-Thermalbad. Inklusive klimatisiertem Reisebus, Reiseleiter und Mahlzeiten. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Odwiedź Bawełniany Zamek Pamukkale wpisany na listę UNESCO oraz antyczne Hierapolis za 75€. Spaceruj po ciepłych wapiennych tarasach i kąp się w basenie Kleopatry. Przejazd klimatyzowanym autokarem, licencjonowany przewodnik i posiłki w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Walk on famous white thermal calcium terraces",
        "Explore ancient Hierapolis and Roman Theater",
        "Optional swim in Cleopatra Thermal Pool",
        "Expert licensed historical tour guide",
        "Roundtrip comfortable transfer and buffet meals"
      ],
      "tr": [
        "Beyaz traverten teraslarında yalınayak yürüyüş",
        "Hierapolis antik kenti ve dev Roma Tiyatrosu",
        "Kleopatra Antik Termal Havuzu",
        "Profesyonel kokartlı rehberlik",
        "Konforlu otobüs transferi ve açık büfe yemekler"
      ],
      "ru": [
        "Белоснежные травертины с термальной водой",
        "Античный Иераполис и римский театр",
        "Античный бассейн Клеопатры",
        "Лицензированный гид-историк",
        "Комфортабельный автобус и обед"
      ],
      "de": [
        "Barfuß über die weißen Sinterterrassen laufen",
        "Antikes Hierapolis und großes Theater",
        "Schwimmen im Kleopatra-Thermalpool",
        "Lizenzierter deutschsprachiger Reiseleiter",
        "Klimatisierter Reisebus und Mahlzeiten"
      ],
      "pl": [
        "Spacer po białych tarasach wapiennych",
        "Starożytne Hierapolis i teatr rzymski",
        "Kąpiel w Basenie Kleopatry",
        "Polskojęzyczny przewodnik",
        "Klimatyzowany autokar i posiłki"
      ]
    },
    "included": {
      "en": [
        "Roundtrip hotel transfers in modern A/C bus",
        "Pamukkale & Hierapolis entrance fees",
        "Professional licensed guide",
        "Breakfast and buffet lunch"
      ],
      "tr": [
        "Modern klimalı araçlarla gidiş-dönüş transfer",
        "Pamukkale ve Hierapolis ören yeri giriş biletleri",
        "Profesyonel lisanslı rehber",
        "Kahvaltı ve açık büfe öğle yemeği"
      ],
      "ru": [
        "Трансфер туда и обратно на автобусе с кондиционером",
        "Входные билеты в Памуккале и Иераполис",
        "Услуги профессионального гида",
        "Завтрак и обед 'шведский стол'"
      ],
      "de": [
        "Hin- und Rücktransfer im modernen klimatisierten Reisebus",
        "Eintrittsgelder Pamukkale & Hierapolis",
        "Lizenzierter Reiseleiter",
        "Frühstück und Mittagsbuffet"
      ],
      "pl": [
        "Transport nowoczesnym autokarem z klimatyzacją",
        "Bilety wstępu do Pamukkale i Hierapolis",
        "Licencjonowany przewodnik",
        "Śniadanie i obiad"
      ]
    },
    "notIncluded": {
      "en": [
        "Cleopatra Antique Pool swimming ticket (optional)",
        "Personal drinks & dinner"
      ],
      "tr": [
        "Kleopatra Havuzu yüzme bileti (isteğe bağlı)",
        "İçecekler ve akşam yemeği"
      ],
      "ru": [
        "Вход в бассейн Клеопатры (по желанию)",
        "Напитки и ужин"
      ],
      "de": [
        "Eintritt Kleopatra-Thermalpool (optional)",
        "Getränke und Abendessen"
      ],
      "pl": [
        "Bilet do basenu Kleopatry (dla chętnych)",
        "Napoje i kolacja"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden sabah 03:00 - 03:45 arası alış, 20:00 dönüş. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Early morning pickup ~03:00 - 03:45 from all Alanya hotels, returning ~20:00. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Ранний выезд в 03:00 - 03:45 из отелей, возвращение около 20:00. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Frühe Abholung ca. 03:00 - 03:45 Uhr ab Hotel, Rückkehr ca. 20:00 Uhr. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Wczesny wyjazd ok. 03:00 - 03:45, powrót ok. 20:00. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Rahat yürüyüş ayakkabısı, mayo, havlu ve kimlik getirin.",
        "Bir gece önceden otelinizden kahvaltı paketi talep edin."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring comfortable walking shoes, swimwear, towel, and passport/ID.",
        "Request a breakfast box from your hotel reception the night before."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите удобную обувь, купальник, полотенце и паспорт.",
        "Закажите ланч-бокс с завтраком в отеле накануне."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Bequeme Schuhe, Badesachen, Handtuch und Ausweis mitbringen.",
        "Frühstückspaket am Vorabend im Hotel bestellen."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Zabierz wygodne buty, strój kąpielowy, ręcznik i dokument tożsamości.",
        "Zamów lunchbox śniadaniowy w hotelu dzień wcześniej."
      ]
    },
    "participantsCount": 2180
  },
  {
    "id": "green-canyon-manavgat",
    "slug": "green-canyon",
    "category": "Nature",
    "price": 45,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 276,
    "image": "/assets/images/green-canyon.jpg",
    "imageAlt": {
      "en": "Boat cruising the emerald waters of Green Canyon with Taurus mountains",
      "tr": "Toros Dağları eteğinde Yeşil Kanyon zümrüt sularında tekne turu",
      "ru": "Прогулка на катере по изумрудным водам Зеленого каньона в Манавгате",
      "de": "Bootsfahrt auf den smaragdgrünen Gewässern des Green Canyon",
      "pl": "Rejs statkiem po szmaragdowych wodach Zielonego Kanionu w Turcji"
    },
    "gallery": [
      "/assets/images/green-canyon.jpg",
      "/assets/images/green-canyon-lake.jpg",
      "/assets/images/green-canyon-boat.jpg"
    ],
    "title": {
      "en": "Green Canyon Boat Tour",
      "tr": "Green Canyon (Yeşil Kanyon) Tekne Turu",
      "ru": "Зеленый каньон (Green Canyon)",
      "de": "Green Canyon Bootstour",
      "pl": "Zielony Kanion (Green Canyon) rejs"
    },
    "duration": {
      "en": "8 Hours",
      "tr": "8 Saat",
      "ru": "8 Часов",
      "de": "8 Stunden",
      "pl": "8 godzin"
    },
    "description": {
      "tr": "45€ fiyatla Oymapınar Barajı'nın zümrüt yeşili sularında huzurlu bir tekne turu. Sarp kanyon kayalıkları, tertemiz dağ havası, yüzme molaları ve göl kenarında leziz bir öğle yemeği dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Glide across the emerald green lake reservoir of Oymapınar Dam in the Taurus Mountains for €45. Enjoy breathtaking scenery of towering cliffs, pure mountain air, swimming breaks in refreshing waters, and a lakeside lunch. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Спокойный круиз по изумрудному водохранилищу Оймапынар среди скал Таврских гор за 45€. Включает плавание в чистейшей воде, обед в ресторане у озера и трансфер. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Bootsfahrt auf dem smaragdgrünen Oymapinar-Stausee im Taurusgebirge für 45€. Herrliche Naturkulisse, Badestopps, Mittagessen am Seeufer und Hoteltransfer. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Relaksujący rejs statkiem po szmaragdowym jeziorze Oymapınar wśród Gór Taurus za 45€. Kąpiele w orzeźwiającej wodzie, obiad nad brzegiem jeziora i transport. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Peaceful cruise on emerald green lake",
        "Towering sheer limestone canyon walls",
        "Swimming breaks in clean mountain water",
        "Delicious lakeside restaurant lunch",
        "Comfortable roundtrip transfers included"
      ],
      "tr": [
        "Zümrüt yeşili gölde huzurlu tekne turu",
        "Görkemli kanyon kayalıkları ve doğa",
        "Serinletici dağ suyunda yüzme molaları",
        "Göl kenarı restoranda lezzetli öğle yemeği",
        "Klimalı konforlu transfer dahil"
      ],
      "ru": [
        "Круиз по изумрудно-зеленому озеру",
        "Величественные скалы каньона",
        "Купание в чистой горной воде",
        "Обед в ресторане с видом на озеро",
        "Трансфер из отеля включен"
      ],
      "de": [
        "Ruhige Bootsfahrt auf dem smaragdgrünen See",
        "Faszinierende Kalksteinfelsen",
        "Schwimmen im erfrischenden Wasser",
        "Mittagessen im Seerestaurant",
        "Inklusive Hoteltransfer"
      ],
      "pl": [
        "Spokojny rejs po szmaragdowym jeziorze",
        "Wysokie wapienne klify kanionu",
        "Kąpiele w czystej górskiej wodzie",
        "Pyszny obiad w restauracji nad jeziorem",
        "Wygodny transfer z i do hotelu"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup and return",
        "Boat cruise in Green Canyon",
        "Lakeside lunch",
        "Soft drinks on board",
        "Insurance"
      ],
      "tr": [
        "Otel transferi",
        "Kanyon tekne turu",
        "Öğle yemeği",
        "Teknede alkolsüz içecekler",
        "Sigorta"
      ],
      "ru": [
        "Трансфер из отеля",
        "Прогулка на корабле",
        "Обед у озера",
        "Безалкогольные напитки",
        "Страховка"
      ],
      "de": [
        "Hoteltransfer",
        "Bootsfahrt im Canyon",
        "Mittagessen am See",
        "Alkoholfreie Getränke",
        "Versicherung"
      ],
      "pl": [
        "Transfer z hotelu",
        "Rejs statkiem po kanionie",
        "Obiad nad jeziorem",
        "Napoje bezalkoholowe",
        "Ubezpieczenie"
      ]
    },
    "notIncluded": {
      "en": [
        "Alcoholic drinks",
        "Personal photos and souvenirs"
      ],
      "tr": [
        "Alkollü içecekler",
        "Fotoğraf ve hatıralık eşyalar"
      ],
      "ru": [
        "Алкогольные напитки",
        "Фотографии"
      ],
      "de": [
        "Alkoholische Getränke",
        "Fotos"
      ],
      "pl": [
        "Napoje alkoholowe",
        "Pamiątki i zdjęcia"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden her gün 08:30 civarı hareket. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Departures every day at ~08:30 from all Alanya hotels. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Выезд каждый день в 08:30 из всех отелей. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich ca. 08:30 Uhr ab allen Hotels. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie ok. 08:30 z hoteli w Alanyi. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Mayo, havlu ve fotoğraf makinesi getirin.",
        "Aileler ve çocuklar için son derece uygundur."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring swimwear, towel, and camera.",
        "Family and child-friendly tour."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите купальник, полотенце и камеру.",
        "Отлично подходит для семей с детьми."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Badesachen, Handtuch und Kamera einpacken.",
        "Sehr gut für Familien mit Kindern geeignet."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Zabierz strój kąpielowy, ręcznik i aparat.",
        "Idealna propozycja dla rodzin z dziećmi."
      ]
    },
    "participantsCount": 2750
  },
  {
    "id": "rafting",
    "slug": "rafting",
    "category": "Adventure",
    "price": 32,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 352,
    "image": "/assets/images/rafting.jpg",
    "imageAlt": {
      "en": "Whitewater rafting team paddling through Koprulu Canyon rapids",
      "tr": "Köprülü Kanyon kanyonunda dalgalarla mücadele eden rafting takımı",
      "ru": "Команда рафтинга преодолевает пороги в каньоне Кепрюлю",
      "de": "Wildwasser-Rafting im Koprulu-Canyon Nationalpark",
      "pl": "Spływ pontonowy rafting w Kanionie Köprülü w Turcji"
    },
    "gallery": [
      "/assets/images/rafting.jpg",
      "/assets/images/rafting-rapids.jpg",
      "/assets/images/rafting-main.jpg"
    ],
    "title": {
      "en": "Köprülü Canyon Rafting Tour",
      "tr": "Alanya Köprülü Kanyon Rafting Turu (32€)",
      "ru": "Рафтинг в каньоне Кепрюлю (32€)",
      "de": "Köprülü Canyon Rafting-Tour (32€)",
      "pl": "Rafting w Kanionie Köprülü (32€)"
    },
    "duration": {
      "en": "8 Hours",
      "tr": "8 Saat",
      "ru": "8 Часов",
      "de": "8 Stunden",
      "pl": "8 godzin"
    },
    "description": {
      "tr": "32€ fiyatla Köprülü Kanyon Milli Parkı'nda 14 kilometrelik parkurda heyecan dolu rafting macerası. Sertifikalı nehir rehberleri, kask, can yeleği ve nehir kenarında öğle yemeği dahil. Başlangıç seviyesi ve aileler için güvenlidir. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Paddle through 14 kilometers of exciting Class II-III rapids along the turquoise Köprüçay River in Köprülü Canyon National Park for €32. Safe for beginners and families, equipped with certified river guides, helmets, life vests, and a riverside lunch. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Сплав на рафтах по 14-километровому маршруту по бирюзовой реке Кёпрючай за 32€. Подходит для новичков и семей с детьми. Включает снаряжение, инструкторов и обед. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "14 Kilometer Wildwasser-Rafting auf dem Köprüçay im Koprulu-Canyon-Nationalpark für 32€. Vollständige Ausrüstung, professionelle Guides und Mittagessen am Flussufer inklusive. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Ekscytujący 14-kilometrowy spływ pontonowy rwącą rzeką w Kanionie Köprülü za 32€. Bezpieczny dla początkujących i rodzin. Kompletny sprzęt, opieka instruktorów i obiad w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "14 km scenic river route in National Park",
        "Exciting Class II-III rapids and splash battles",
        "Ancient Roman stone bridge views",
        "Certified river captains in every boat",
        "Riverside barbecue lunch included"
      ],
      "tr": [
        "Milli parkta 14 km nehir parkuru",
        "Heyecanlı dalgalar ve su savaşları",
        "Tarihi Roma köprüsü manzarası",
        "Her botta sertifikalı rehber kaptan",
        "Nehir kenarında ızgara öğle yemeği"
      ],
      "ru": [
        "14 км маршрута в национальном парке",
        "Живописные пороги и водные битвы",
        "Вид на древний римский мост",
        "Опытный капитан в каждой лодке",
        "Обед на берегу реки"
      ],
      "de": [
        "14 km Strecke im Nationalpark",
        "Spannende Stromschnellen",
        "Blick auf die antike Römerbrücke",
        "Zertifizierter Guide pro Boot",
        "Mittagessen am Flussufer"
      ],
      "pl": [
        "14 km trasy w Parku Narodowym",
        "Bystrza rzeczne i bitwy wodne",
        "Widok na zabytkowy most rzymski",
        "Certyfikowany instruktor w każdym pontonie",
        "Obiad na brzegu rzeki"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup and return transfer",
        "14 km rafting descent",
        "Helmets, paddles, and life vests",
        "Certified guide in every raft",
        "Riverside lunch"
      ],
      "tr": [
        "Otel transferi",
        "14 km rafting parkuru",
        "Kask, kürek ve can yeleği",
        "Her botta profesyonel rehber",
        "Nehir kenarında öğle yemeği"
      ],
      "ru": [
        "Трансфер из отеля",
        "Сплав 14 км",
        "Шлемы, весла и спасательные жилеты",
        "Инструктор",
        "Обед"
      ],
      "de": [
        "Hoteltransfer",
        "14 km Rafting-Tour",
        "Schwimmweste, Helm und Paddel",
        "Rafting-Guide",
        "Mittagessen"
      ],
      "pl": [
        "Transfer z hotelu",
        "14 km spływu",
        "Kask, wiosło i kamizelka",
        "Instruktor w pontonie",
        "Obiad"
      ]
    },
    "notIncluded": {
      "en": [
        "Neoprene wetsuit and river shoes (available for rent)",
        "Drinks & photo/video service"
      ],
      "tr": [
        "Neopren elbise ve nehir ayakkabısı (isteğe bağlı kiralık)",
        "İçecekler ve video/fotoğraf"
      ],
      "ru": [
        "Гидрокостюм и спецобувь (аренда)",
        "Напитки и фото/видео"
      ],
      "de": [
        "Neoprenanzug und Wasserschuhe (optional)",
        "Getränke und Fotos"
      ],
      "pl": [
        "Pianka i buty do wody (opcja wypożyczenia)",
        "Napoje i zdjęcia"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden her gün 08:15 - 08:45 arası hareket. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Departures daily from all Alanya hotels at ~08:15 - 08:45. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Выезд каждый день в 08:15 - 08:45. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich ca. 08:15 - 08:45 Uhr ab Hotel. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie ok. 08:15 - 08:45 z hoteli. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Mayo ve ayağınızdan çıkmayacak ayakkabı giyin (parmak arası terlik önerilmez).",
        "5 yaş ve üzeri için uygundur."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Wear swimwear and water shoes with strap (no flip-flops).",
        "Suitable for ages 5 and up."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Наденьте купальник и сандалии с фиксацией пятки.",
        "Для детей от 5 лет."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Badekleidung und feste Wasserschuhe tragen.",
        "Ab 5 Jahren geeignet."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Załóż strój kąpielowy i stabilne sandały lub buty do wody.",
        "Dla dzieci od 5. roku życia."
      ]
    },
    "participantsCount": 4680
  },
  {
    "id": "dolphin-show",
    "slug": "dolphin-show",
    "category": "Family",
    "price": 35,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 185,
    "image": "/assets/images/dolphin-show.jpg",
    "imageAlt": {
      "en": "Alanya dolphin show with dolphins and fur seals performing acrobatic jumps",
      "tr": "Alanya Sealanya yunus ve fok balıkları akrobasi gösterisi",
      "ru": "Шоу дельфинов и морских котиков в дельфинарии Аланьи",
      "de": "Alanya Delphinshow mit akrobatischen Sprüngen von Delphinen und Seelöwen",
      "pl": "Niezwykły pokaz delfinów i fok w delfinarium w Alanyi"
    },
    "gallery": [
      "/assets/images/dolphin-show.jpg"
    ],
    "title": {
      "en": "Dolphin Show",
      "tr": "Alanya Yunus Gösterisi (Dolphin Show)",
      "ru": "Шоу дельфинов в Аланье",
      "de": "Alanya Delphinshow",
      "pl": "Pokaz delfinów w Alanyi"
    },
    "duration": {
      "en": "3.5 Hours",
      "tr": "3.5 Saat",
      "ru": "3.5 Часа",
      "de": "3.5 Stunden",
      "pl": "3.5 godziny"
    },
    "description": {
      "tr": "35€ karşılığında Alanya Sealanya Dolphinpark'ta sevimli yunuslar ve fok balıklarının muhteşem akrobasi gösterisini izleyin. Yüksek sıçramalar, çember oyunları ve su danslarıyla çocuklu ailelerin en sevdiği eğlenceli tur. Otelden gidiş-dönüş transfer dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Witness an enchanting world-class Dolphin and Sea Lion show at Alanya's premier dolphinarium for €35. Marvel at high jumps, synchronized flips, hoop play, and painting performances by highly intelligent marine mammals. An absolute favorite for families with children, including roundtrip hotel transport. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Посетите феерическое шоу дельфинов и морских котиков в дельфинарии Аланьи всего за 35€. Невероятные трюки, прыжки через кольца и танцы в воде. Идеальный семейный отдых с включенным трансфером из отеля. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erleben Sie eine faszinierende Delphin- und Seelöwen-Show in Alanya für 35€. Beeindruckende Akrobatik, Sprünge und Kunststücke von intelligenten Meeressäugern. Ein Highlight für die ganze Familie inklusive Hoteltransfer. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Zobacz spektakularny pokaz delfinów i lwów morskich w Alanyi za 35€. Niezwykłe akrobacje, skoki przez obręcze i zabawy w wodzie. Wspaniała atrakcja dla całej rodziny z transferem w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Spectacular synchronized jumps by playful dolphins",
        "Charming performance by sea lions and seals",
        "Fun interactive games with the audience",
        "Comfortable seated open-air arena",
        "Convenient hotel pickup and drop-off"
      ],
      "tr": [
        "Yunusların nefes kesen senkronize atlayışları",
        "Sevimli deniz aslanları ve fok şovu",
        "Seyircilerle eğlenceli interaktif gösteriler",
        "Konforlu oturma alanına sahip açık hava arenası",
        "Otelden gidiş-dönüş transfer dahil"
      ],
      "ru": [
        "Синхронные прыжки и трюки дельфинов",
        "Выступление забавных морских котиков",
        "Интерактивные номера со зрителями",
        "Удобная крытая трибуна",
        "Трансфер из отеля и обратно"
      ],
      "de": [
        "Synchron-Sprünge verspielter Delphine",
        "Lustige Show der Seelöwen",
        "Interaktive Spiele mit den Zuschauern",
        "Schattige Sitzplätze in der Arena",
        "Kostenloser Hoteltransfer"
      ],
      "pl": [
        "Synchronizowane skoki i sztuczki delfinów",
        "Wesołe występy fok i lwów morskich",
        "Interaktywne zabawy z publicznością",
        "Zadaszone trybuny dla widzów",
        "Wygodny transfer z i do hotelu"
      ]
    },
    "included": {
      "en": [
        "Roundtrip hotel pickup & return transfer",
        "Dolphin & Sea Lion show entry ticket",
        "Full seating access in the amphitheater"
      ],
      "tr": [
        "Otelden gidiş-dönüş transfer",
        "Yunus ve Deniz Aslanı gösteri giriş bileti",
        "Arenada oturma yeri"
      ],
      "ru": [
        "Трансфер из отеля и обратно",
        "Входной билет на шоу",
        "Места на трибунах"
      ],
      "de": [
        "Hin- und Rücktransfer ab Hotel",
        "Eintrittskarte zur Delphinshow",
        "Sitzplatz in der Arena"
      ],
      "pl": [
        "Transfer w obie strony z hotelu",
        "Bilet wstępu na pokaz delfinów",
        "Miejsca siedzące na trybunie"
      ]
    },
    "notIncluded": {
      "en": [
        "Optional swimming with dolphins session",
        "Personal photos with dolphins & snacks"
      ],
      "tr": [
        "Yunuslarla yüzme seansı (isteğe bağlı ekstra)",
        "Yunuslarla hatıra fotoğrafı ve atıştırmalıklar"
      ],
      "ru": [
        "Плавание с дельфинами (по желанию)",
        "Фото с дельфинами и напитки"
      ],
      "de": [
        "Schwimmen mit Delphinen (optional)",
        "Fotos mit Delphinen und Snacks"
      ],
      "pl": [
        "Pływanie z delfinami (dla chętnych)",
        "Pamiątkowe zdjęcia i przekąski"
      ]
    },
    "pickupInfo": {
      "tr": "Her gün sabah ve öğleden sonra seansları ile tüm Alanya otellerinden transfer. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Morning and afternoon show departures available daily from all Alanya hotels. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Выезды на утреннее и дневное шоу каждый день. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich vormittags und nachmittags ab allen Hotels. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie rano i po południu ze wszystkich hoteli. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Fotoğraf makinesi ve şapka getirin.",
        "Gösteri süresi yaklaşık 50-60 dakika, toplam tur süresi 3.5 saattir."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring a camera and sun hat.",
        "Show is approximately 50-60 minutes in length, total trip ~3.5 hours."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите фотоаппарат и головной убор.",
        "Длительность самого шоу около 1 часа."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Kamera und Kopfbedeckung mitbringen.",
        "Die Show dauert ca. 50-60 Minuten."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Zabierz aparat i nakrycie głowy.",
        "Pokaz trwa ok. 50-60 minut."
      ]
    },
    "participantsCount": 2240
  },
  {
    "id": "tazi-canyon-rafting",
    "slug": "tazi-canyon-rafting",
    "category": "Adventure",
    "price": 45,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 264,
    "image": "/assets/images/tazi-canyon-rafting.jpg",
    "imageAlt": {
      "en": "Tazi Canyon Eagle Canyon panoramic sheer cliffs and whitewater river rafting combo",
      "tr": "Tazı Kanyonu dev uçurum manzarası ve Köprülü Kanyon rafting kombo turu",
      "ru": "Каньон Тазы (Ущелье орлов) и рафтинг в каньоне Кепрюлю",
      "de": "Tazi Canyon (Adlerschlucht) Aussichtspunkt und Wildwasser-Rafting Kombi",
      "pl": "Kanion Tazi (Dolina Orłów) i spływ pontonowy rafting pakiet w Turcji"
    },
    "gallery": [
      "/assets/images/tazi-canyon-rafting.jpg",
      "/assets/images/rafting.jpg",
      "/assets/images/rafting-rapids.jpg"
    ],
    "title": {
      "en": "Tazı Canyon & Rafting",
      "tr": "Tazı Kanyonu & Rafting Kombo Turu",
      "ru": "Каньон Тазы и Рафтинг (Комбо)",
      "de": "Tazi Canyon & Rafting Kombi",
      "pl": "Kanion Tazi i Rafting (Pakiet)"
    },
    "duration": {
      "en": "9 Hours",
      "tr": "9 Saat",
      "ru": "9 Часов",
      "de": "9 Stunden",
      "pl": "9 godzin"
    },
    "description": {
      "tr": "45€ fiyatla Türkiye'nin en ünlü manzara noktası Tazı Kanyonu ile adrenalin dolu raftingi birleştirin. 400 metre derinliğindeki uçurum kenarında kartpostallık fotoğraflar çekilin ve Köprüçay nehrinde 14 km rafting yapın. Öğle yemeği ve transfer dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Combine Turkey's most viral scenic viewpoint with heart-pumping whitewater rafting for €45. Stand on the towering 400-meter edge of Tazı Canyon (Eagle's Canyon) for world-famous panoramic photos, followed by a 14-km rafting descent down the rapids of Köprüçay with lunch included. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Объедините самый популярный инстаграмный вид Турции и рафтинг за 45€. Сделайте потрясающие кадры на краю 400-метрового каньона Тазы (Ущелье орлов) и испытайте восторг от 14 км рафтинга по горной реке. Обед и трансфер включены. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Verbinden Sie den spektakulärsten Aussichtspunkt der Türkei mit Wildwasser-Rafting für 45€. Genießen Sie den atemberaubenden Blick über die 400 Meter tiefe Tazi-Schlucht (Adlerschlucht) und erleben Sie 14 km Rafting inklusive Mittagessen. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Połącz najbardziej spektakularny punkt widokowy w Turcji ze spływem raftingowym za 45€. Zrób zachwycające zdjęcia nad 400-metrową przepaścią Kanionu Tazi i popłyń na 14-kilometrową trasę raftingową z obiadem w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "400-meter vertical limestone cliff view at Tazı Canyon",
        "World-famous photo opportunity on scenic rock ledge",
        "14 km exhilarating whitewater rafting adventure",
        "Open-top cabrio safari drive up to the viewpoint",
        "Delicious riverside barbecue lunch included",
        "Hotel pickup & return in air-conditioned bus"
      ],
      "tr": [
        "Tazı Kanyonu'nda 400 metrelik dev uçurum manzarası",
        "Kayalık terasta dünyaca ünlü fotoğraf noktası",
        "14 kilometrelik heyecan verici rafting parkuru",
        "Üstü açık safari araçlarıyla kanyon zirvesine çıkış",
        "Nehir kıyısında lezzetli ızgara öğle yemeği",
        "Klimalı araçlarla otelden transfer"
      ],
      "ru": [
        "Вид с 400-метрового обрыва в каньоне Тазы",
        "Знаменитая фотолокация на краю скалы",
        "14 км рафтинга по горной реке",
        "Подъем на видовую точку на джипах/кабрио",
        "Вкусный обед на берегу реки",
        "Трансфер из отеля на комфортном автобусе"
      ],
      "de": [
        "Blick über 400 m tiefe Felswände im Tazi Canyon",
        "Weltbekannter Fotospot auf dem Felsvorsprung",
        "14 km adrenalingeladenes Wildwasser-Rafting",
        "Fahrt im offenen Safari-Bus zum Aussichtspunkt",
        "Leckeres Grill-Mittagessen am Fluss",
        "Bequemer Hoteltransfer hin und zurück"
      ],
      "pl": [
        "Widok z 400-metrowego klifu w Kanionie Tazi",
        "Słynny punkt fotograficzny nad przepaścią",
        "14 km ekscytującego spływu pontonowego",
        "Wjazd na punkt widokowy pojazdami safari",
        "Pyszny obiad z grilla nad rzeką",
        "Darmowy transport z i do hotelu"
      ]
    },
    "included": {
      "en": [
        "Roundtrip hotel transfers",
        "Guided visit to Tazı Canyon viewpoint",
        "14 km rafting tour with all gear (helmet, life vest, paddle)",
        "Riverside barbecue lunch",
        "Insurance"
      ],
      "tr": [
        "Otelden gidiş-dönüş transfer",
        "Tazı Kanyonu seyir terası gezisi",
        "14 km rafting turu ve tüm ekipmanlar",
        "Nehir kenarı ızgara öğle yemeği",
        "Sigorta"
      ],
      "ru": [
        "Трансфер из отеля и обратно",
        "Поездка в каньон Тазы",
        "Рафтинг 14 км и полное снаряжение",
        "Обед на реке",
        "Страховка"
      ],
      "de": [
        "Hoteltransfers hin und zurück",
        "Ausflug zum Tazi-Canyon Aussichtspunkt",
        "14 km Rafting mit Ausrüstung",
        "Mittagessen am Flussufer",
        "Versicherung"
      ],
      "pl": [
        "Transfer z i do hotelu",
        "Wizyta na punkcie widokowym Kanionu Tazi",
        "14 km raftingu ze sprzętem",
        "Obiad nad rzeką",
        "Ubezpieczenie"
      ]
    },
    "notIncluded": {
      "en": [
        "Drinks at lunch",
        "Neoprene wetsuits and river boots",
        "Photo & video package"
      ],
      "tr": [
        "Yemekte içecekler",
        "Neopren elbise ve su ayakkabısı",
        "Fotoğraf ve video çekimi"
      ],
      "ru": [
        "Напитки",
        "Аренда спецобуви и гидрокостюма",
        "Фото и видео"
      ],
      "de": [
        "Getränke",
        "Neoprenanzüge und Wasserschuhe",
        "Foto- und Videoservice"
      ],
      "pl": [
        "Napoje do obiadu",
        "Pianki i buty do wody",
        "Pamiątkowe zdjęcia i filmy"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden her gün 08:00 - 08:30 arası hareket, 17:30 dönüş. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Departures daily from all Alanya hotels at ~08:00 - 08:30, returning ~17:30. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Ежедневный выезд в 08:00 - 08:30, возвращение около 17:30. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich ca. 08:00 - 08:30 Uhr ab Hotel, Rückkehr ca. 17:30 Uhr. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie zbiórka ok. 08:00 - 08:30, powrót ok. 17:30. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Yürüyüş için spor ayakkabı, mayo, havlu ve güneş kremi getirin.",
        "Yeni başlayanlar ve aileler için uygundur."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring comfortable sneakers for walking, swimwear, and sunscreen.",
        "Suitable for beginners and families."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите удобные кроссовки, купальник и полотенце.",
        "Подходит для начинающих."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Feste Schuhe, Badesachen und Handtuch mitbringen.",
        "Für Einsteiger und Familien geeignet."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Zabierz wygodne buty sportowe, strój kąpielowy i ręcznik.",
        "Odpowiednie dla początkujących i rodzin."
      ]
    },
    "participantsCount": 2980
  },
  {
    "id": "quad-buggy-safari-rafting",
    "slug": "quad-buggy-safari-rafting",
    "category": "Adventure",
    "price": 40,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 215,
    "image": "/assets/images/quad-buggy-rafting.jpg",
    "imageAlt": {
      "en": "Action packed quad and buggy safari and whitewater rafting combo in Antalya",
      "tr": "ATV ve buggy safari ile nehir raftingi aksiyon dolu kombo tur",
      "ru": "Комбинированный тур: квадроциклы / багги сафари и рафтинг в каньоне",
      "de": "Action-Kombi Quad / Buggy Safari und Wildwasser-Rafting in Antalya",
      "pl": "Ekstremalny pakiet combo: safari na quadach lub buggy oraz rafting"
    },
    "gallery": [
      "/assets/images/quad-buggy-rafting.jpg",
      "/assets/images/quad-safari-convoy.jpg",
      "/assets/images/buggy-action.jpg",
      "/assets/images/rafting-rapids.jpg"
    ],
    "title": {
      "en": "Quad / Buggy Safari & Rafting",
      "tr": "ATV / Buggy Safari & Rafting Kombo",
      "ru": "Квадро / Багги сафари и Рафтинг",
      "de": "Quad / Buggy Safari & Rafting",
      "pl": "Quad / Buggy Safari i Rafting"
    },
    "duration": {
      "en": "8.5 Hours",
      "tr": "8.5 Saat",
      "ru": "8.5 Часов",
      "de": "8.5 Stunden",
      "pl": "8.5 godziny"
    },
    "description": {
      "tr": "40€ fiyatla iki büyük macerayı bir arada yaşayın: Toros eteklerinde tozlu ve çamurlu yollarda ATV veya Buggy safari sürüşü ve ardından Köprüçay'da 14 km rafting. Öğle yemeği ve otel transferi dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Double the thrills for just €40: experience a high-speed off-road Quad or Buggy safari through dirt tracks and pine woods, followed by an exhilarating 14-km whitewater rafting descent down the rapids of Köprüçay with lunch included. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Двойная доза адреналина всего за 40€: захватывающее сафари на квадроциклах или багги по бездорожью и 14 км рафтинга по горной реке с порогами. Обед и трансфер включены. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Doppelte Action für nur 40€: Offroad-Quad- oder Buggy-Safari durch Wald und Schlamm, kombiniert mit 14 km Wildwasser-Rafting auf dem Köprüçay. Mittagessen und Hoteltransfer inklusive. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Podwójna dawka emocji za jedyne 40€: dynamiczne safari na quadach lub buggy po leśnych bezdrożach oraz 14 km spływu pontonowego rwącą rzeką Köprüçay. Obiad i transport w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Choice of Quad bike (ATV) or Buggy buggy vehicle",
        "Action-packed off-road circuit through dust and water",
        "14 km whitewater river rafting through the canyon",
        "No prior driving license needed for Quad/Buggy",
        "Delicious riverside barbecue lunch included"
      ],
      "tr": [
        "ATV (Quad) veya Buggy araç seçeneği",
        "Toz, çamur ve sudan geçen off-road sürüş parkuru",
        "Kanyon içerisinde 14 kilometrelik rafting macerası",
        "Ehliyet gerekmez, rehberler eşliğinde sürüş",
        "Nehir kenarında açık büfe lezzetli öğle yemeği"
      ],
      "ru": [
        "Выбор между квадроциклом и багги",
        "Экстремальная трасса с грязью и водой",
        "14 км рафтинга по каньону",
        "Права не требуются",
        "Сытный обед на берегу реки"
      ],
      "de": [
        "Wahlweise Quad (ATV) oder Buggy",
        "Actionreiche Offroad-Strecke mit Wasserdurchfahrten",
        "14 km Wildwasser-Rafting im Canyon",
        "Kein Führerschein nötig",
        "Mittagessen am Flussufer inklusive"
      ],
      "pl": [
        "Wybór pomiędzy quadem a buggy",
        "Trasa off-road z kurzem i przejazdami przez wodę",
        "14 km spływu pontonowego w kanionie",
        "Prawo jazdy nie jest wymagane",
        "Pyszny obiad z grilla nad rzeką"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup and return transfer",
        "Quad or Buggy rental and fuel",
        "14 km rafting tour with all gear",
        "Helmets and safety briefing",
        "Riverside barbecue lunch"
      ],
      "tr": [
        "Otelden gidiş-dönüş transfer",
        "ATV veya Buggy araç kiralama ve yakıt",
        "Tüm ekipmanlarıyla 14 km rafting turu",
        "Kasklar ve güvenlik eğitimi",
        "Nehir kenarında ızgara öğle yemeği"
      ],
      "ru": [
        "Трансфер из отеля",
        "Аренда квадроцикла/багги и топливо",
        "Рафтинг 14 км со снаряжением",
        "Шлемы и инструктаж",
        "Обед у реки"
      ],
      "de": [
        "Hoteltransfer",
        "Quad/Buggy-Miete und Benzin",
        "14 km Rafting mit Ausrüstung",
        "Helme und Einweisung",
        "Mittagessen am Fluss"
      ],
      "pl": [
        "Transfer z/do hotelu",
        "Pojazd quad lub buggy i paliwo",
        "14 km raftingu ze sprzętem",
        "Kaski i szkolenie",
        "Obiad nad rzeką"
      ]
    },
    "notIncluded": {
      "en": [
        "Dust bandana and goggles",
        "Drinks at lunch",
        "Action photos & videos"
      ],
      "tr": [
        "Bandana ve koruyucu gözlük",
        "Yemekte içecekler",
        "Aksiyon fotoğrafları ve video"
      ],
      "ru": [
        "Бандана и очки от пыли",
        "Напитки",
        "Фото и видео"
      ],
      "de": [
        "Bandana und Schutzbrille",
        "Getränke",
        "Foto- und Videoservice"
      ],
      "pl": [
        "Bandana i okulary chroniące przed kurzem",
        "Napoje do obiadu",
        "Zdjęcia i nagrania wideo"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden her gün 08:15 - 08:45 arası hareket, 17:00 dönüş. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Departures daily from all Alanya hotels at ~08:15 - 08:45, return ~17:00. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Выезд каждый день в 08:15 - 08:45, возвращение в 17:00. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich ca. 08:15 - 08:45 Uhr ab Hotel, Rückkehr ca. 17:00 Uhr. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie ok. 08:15 - 08:45, powrót ok. 17:00. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Islanıp kirlenmesinde sakınca olmayan kıyafetler, mayo ve havlu getirin.",
        "Sürücüler 16 yaşından büyük olmalıdır."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring clothes that can get wet and muddy, plus swimwear and towel.",
        "Drivers must be 16+; children ride safely as passengers."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите сменную одежду, купальник и полотенце.",
        "Водитель от 16 лет, дети едут пассажирами."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Kleidung mitbringen, die schmutzig werden darf, sowie Badesachen.",
        "Fahrer ab 16 Jahren."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Załóż ubranie, które może się zabrudzić, weź strój kąpielowy i ręcznik.",
        "Kierowca od 16 lat."
      ]
    },
    "participantsCount": 2460
  },
  {
    "id": "land-of-legends-night-show",
    "slug": "the-land-of-legends-night-show",
    "category": "Culture",
    "price": 23,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.8,
    "reviewsCount": 289,
    "image": "/assets/images/land-of-legends-night-hero.jpg",
    "imageAlt": {
      "en": "Magical fairy tale castle and canal boat parade at Land of Legends Night Show in Belek",
      "tr": "The Land of Legends gece şovu ışıklı masal şatosu ve kanal gösterisi Belek",
      "ru": "Вечернее шоу в The Land of Legends: сказочный замок и парад лодок",
      "de": "Märchenhaftes Schloss und Bootsparade bei der Land of Legends Nachtshow",
      "pl": "Nocne show w The Land of Legends: oświetlony zamek i parada gondoli"
    },
    "gallery": [
      "/assets/images/land-of-legends-night-hero.jpg",
      "/assets/images/land-of-legends.jpg",
      "/assets/images/land-of-legends-canal.jpg",
      "/assets/images/land-of-legends-show.jpg"
    ],
    "title": {
      "en": "The Land of Legends Night Show",
      "tr": "The Land of Legends Gece Şovu",
      "ru": "Вечернее шоу The Land of Legends",
      "de": "The Land of Legends Nachtshow",
      "pl": "Nocne show The Land of Legends"
    },
    "duration": {
      "en": "6 Hours",
      "tr": "6 Saat",
      "ru": "6 Часов",
      "de": "6 Stunden",
      "pl": "6 godzin"
    },
    "description": {
      "tr": "Sadece 23€ karşılığında Türkiye'nin Disneyland'ı olarak bilinen The Land of Legends'ın büyüleyici gece atmosferini yaşayın. Masal şatosu ışık şovu, gondol ve tekne geçit töreni, müzikli su fıskiyeleri ve lüks alışveriş caddesi keyfi. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Experience the magic of Turkey's Disneyland at night for just €23. Witness the spectacular musical canal boat parade, dazzling illuminated fairy tale castle, laser & water fountain light choreography, and enjoy world-class shopping along the glamorous luxury avenue. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Погрузитесь в сказочную атмосферу турецкого Диснейленда ночью всего за 23€. Вас ждут световое шоу замка, парад музыкальных лодок на канале, танцующие фонтаны и шопинг на роскошной авеню брендов. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erleben Sie das türkische Disneyland bei Nacht für nur 23€. Spektakuläre Bootsparade, das beleuchtete Märchenschloss, faszinierende Lasershow und Tanzbrunnen sowie Shopping auf der Luxus-Shoppingmeile. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Przenieś się do baśniowego tureckiego Disneylandu nocą za jedyne 23€. Zobacz paradę muzycznych łodzi na kanale, pokaz świateł na zamku, tańczące fontanny i zrób zakupy w alei luksusowych marek. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Famous musical boat parade on the royal canal",
        "Illuminated fairy tale castle laser & light show",
        "Dancing musical water fountains spectacle",
        "Free time for world-class tax-free shopping",
        "Costumed fairy tale characters and live dancers",
        "Roundtrip comfortable evening transfer"
      ],
      "tr": [
        "Kanalda müzikli büyüleyici tekne geçit töreni",
        "Masal şatosu ışık ve lazer gösterisi",
        "Müzikle senkronize dans eden su fıskiyeleri",
        "Lüks caddede dünyaca ünlü markalarla alışveriş",
        "Kostümlü masal karakterleri ve canlı dansçılar",
        "Otelden klimalı akşam transferi"
      ],
      "ru": [
        "Парад лодок с артистами на канале",
        "Лазерное шоу на фоне сказочного замка",
        "Поющие и танцующие фонтаны",
        "Свободное время для шопинга брендов",
        "Костюмированные персонажи и шоу",
        "Вечерний трансфер из отеля и обратно"
      ],
      "de": [
        "Musikalische Bootsparade auf dem Kanal",
        "Licht- und Lasershow am Märchenschloss",
        "Tanzende Wasserfontänen",
        "Freizeit für Shopping bekannter Marken",
        "Kostümierte Tänzer und Künstler",
        "Bequemer Abendtransfer ab Hotel"
      ],
      "pl": [
        "Parada muzycznych łodzi na kanale",
        "Spektakl laserowy i iluminacja zamku",
        "Tańczące fontanny w rytm muzyki",
        "Czas wolny na zakupy w luksusowej alei",
        "Postacie z bajek i tancerze na żywo",
        "Wieczorny transport autokarem"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup and return transfer",
        "Free admission to Land of Legends Shopping Avenue and Night Show",
        "Guidance service"
      ],
      "tr": [
        "Otelden gidiş-dönüş transfer",
        "Alışveriş caddesi ve gece şovu alanına ücretsiz giriş",
        "Rehberlik hizmeti"
      ],
      "ru": [
        "Трансфер из отеля и обратно",
        "Бесплатный вход на авеню и шоу",
        "Сопровождение"
      ],
      "de": [
        "Hoteltransfer hin und zurück",
        "Freier Eintritt zur Shopping Avenue und Nachtshow",
        "Reiseleitung"
      ],
      "pl": [
        "Transfer z i do hotelu",
        "Wstęp na aleję handlową i wieczorne show",
        "Opieka pilota"
      ]
    },
    "notIncluded": {
      "en": [
        "Theme park daytime rides access",
        "Food and beverages",
        "Personal shopping"
      ],
      "tr": [
        "Gündüz tema park lunapark oyuncakları",
        "Yiyecek ve içecekler",
        "Kişisel alışverişler"
      ],
      "ru": [
        "Дневные аттракционы аквапарка",
        "Еда и напитки",
        "Покупки"
      ],
      "de": [
        "Tages-Themenpark Attraktionen",
        "Essen und Getränke",
        "Einkäufe"
      ],
      "pl": [
        "Bilet wstępu na dzienne atrakcje lunaparku",
        "Posiłki i napoje",
        "Własne zakupy"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden 16:30 - 17:30 arası akşam alışı, gece 00:00 civarı dönüş. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Evening pickup ~16:30 - 17:30 from all Alanya hotels, returning around midnight. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Вечерний выезд в 16:30 - 17:30, возвращение около полуночи. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Abendabholung ca. 16:30 - 17:30 Uhr ab Hotel, Rückkehr gegen Mitternacht. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Zbiórka wieczorem ok. 16:30 - 17:30, powrót ok. północy. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Akşam esintisi için yanınıza hafif bir hırka alabilirsiniz.",
        "Harika fotoğraf ve video kareleri yakalayabilirsiniz."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring a light jacket or cardigan for evening breeze.",
        "Cameras are welcome; fantastic photo opportunities."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите легкую кофту на вечер.",
        "Отличное место для фото и видео."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Eine leichte Jacke für den Abend mitnehmen.",
        "Ideal für tolle Urlaubsfotos."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Warto wziąć lekką bluzę na wieczór.",
        "Niezliczone okazje do pięknych zdjęć."
      ]
    },
    "participantsCount": 3150
  },
  {
    "id": "buggy-safari",
    "slug": "buggy-safari",
    "category": "Adventure",
    "price": 35,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.8,
    "reviewsCount": 198,
    "image": "/assets/images/buggy-safari.jpg",
    "imageAlt": {
      "en": "Classic open-top vintage safari vehicles and buggies driving through Taurus Mountains Alanya",
      "tr": "Alanya Toros Dağları'nda üstü açık klasik model safari araçları ve buggy heyecanı",
      "ru": "Открытые классические ретро-джипы и сафари-багги в горах Тавр в Аланье",
      "de": "Offene klassische Retro-Safarifahrzeuge und Buggys im Taurusgebirge Alanya",
      "pl": "Klasyczne pojazdy safari z otwartym dachem i buggy w Górach Taurus w Alanyi"
    },
    "gallery": [
      "/assets/images/buggy-safari.jpg",
      "/assets/images/vintage-safari-buggy.jpg",
      "/assets/images/quad-buggy-rafting.jpg"
    ],
    "title": {
      "en": "Buggy & Open-Top Safari",
      "tr": "Alanya Buggy & Safari (Üstü Açık Klasik Araçlar)",
      "ru": "Багги и открытое ретро-сафари",
      "de": "Buggy & Open-Top Klassik-Safari",
      "pl": "Buggy i Klasyczne Safari z Otwartym Dachem"
    },
    "duration": {
      "en": "3 Hours",
      "tr": "3 Saat",
      "ru": "3 Часа",
      "de": "3 Stunden",
      "pl": "3 godziny"
    },
    "description": {
      "tr": "35€ karşılığında Toros Dağları'nda üstü açık klasik model safari araçları ve güçlü buggy'ler ile heyecan dolu bir macera! Açık tavanlı otantik safari araçlarıyla dağ esintisini hissedin, çamur, nehir geçişleri ve tozlu dağ patikalarında unutulmaz anlar yaşayın. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Conquer the rugged Taurus Mountains in vintage open-top safari vehicles and high-powered buggies for €35! Feel the exhilarating mountain breeze in classic open-air off-road vehicles as you traverse pine forests, splash through rivers, and navigate scenic dusty trails. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Покорите склоны гор Тавр на классических открытых автомобилях для сафари и мощных багги за 35€! Почувствуйте свежий горный бриз в ретро-внедорожниках с открытым верхом, преодолевая броды, сосновые леса и живописные грунтовые дороги. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erobern Sie für 35€ das Taurusgebirge in klassischen offenen Safarifahrzeugen und wendigen Buggys! Genießen Sie den frischen Fahrtwind in offenen Offroad-Fahrzeugen bei Flussüberquerungen und Staubpisten. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Zdobądź szlaki Gór Taurus w klasycznych pojazdach safari z otwartym dachem i zwrotnych buggy za 35€! Poczuj powiew górskiego wiatru w odkrytych autach terenowych pokonując leśne ścieżki i brody rzeczne. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Vintage open-top safari vehicles with unobstructed panoramic views",
        "Exciting mountain trails, water crossings, and pine forests",
        "Open-air roll-cage construction for ultimate safari atmosphere",
        "Easy & fun driving experience guided by safari experts",
        "Hotel pickup & drop-off included"
      ],
      "tr": [
        "Üstü açık klasik model safari araçları ile 360 derece manzara",
        "Heyecan verici su geçişleri, çamur havuzları ve çam ormanları",
        "Roll-cage korumalı açık tavan ile otantik safari atmosferi",
        "Uzman safari rehberleri eşliğinde güvenli ve eğlenceli sürüş",
        "Otelden gidiş-dönüş transfer dahil"
      ],
      "ru": [
        "Классические открытые сафари-автомобили с панорамным обзором",
        "Захватывающие переправы через реку и сосновые леса",
        "Открытый каркас безопасности для максимального погружения",
        "Безопасный маршрут с опытными инструкторами",
        "Трансфер из отеля и обратно включен"
      ],
      "de": [
        "Offene Retro-Safarifahrzeuge mit Rundumblick",
        "Spannende Wasserpassagen und schattige Bergwälder",
        "Offene Überrollkäfig-Bauweise für echtes Safari-Feeling",
        "Begleitung durch erfahrene Safari-Guides",
        "Inklusive Hoteltransfer"
      ],
      "pl": [
        "Klasyczne pojazdy safari z otwartym dachem i pełną panoramą",
        "Emocjonujące przeprawy przez rzeki i górskie lasy",
        "Konstrukcja z klatką bezpieczeństwa i otwartym dachem",
        "Bezpieczna trasa z profesjonalnymi przewodnikami",
        "Wygodny transfer z i do hotelu"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup and return",
        "Buggy vehicle and fuel",
        "Helmets and safety briefing",
        "Instructor guide"
      ],
      "tr": [
        "Otel transferi",
        "Buggy araç ve yakıt",
        "Kask ve güvenlik eğitimi",
        "Rehber ve eğitmen"
      ],
      "ru": [
        "Трансфер из отеля",
        "Багги и топливо",
        "Шлем и инструктаж",
        "Гид-инструктор"
      ],
      "de": [
        "Hoteltransfer",
        "Buggy und Treibstoff",
        "Helme und Einweisung",
        "Guide"
      ],
      "pl": [
        "Transfer z/do hotelu",
        "Pojazd buggy i paliwo",
        "Kask i szkolenie",
        "Instruktor"
      ]
    },
    "notIncluded": {
      "en": [
        "Bandana and protective glasses",
        "Drinks and photo/video sales"
      ],
      "tr": [
        "Bandana ve gözlük",
        "İçecekler ve fotoğraf/video"
      ],
      "ru": [
        "Бандана и очки",
        "Напитки и фото/видео"
      ],
      "de": [
        "Bandana und Schutzbrille",
        "Getränke und Fotos"
      ],
      "pl": [
        "Bandana i okulary ochronne",
        "Napoje i zdjęcia"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden her gün sabah ve öğleden sonra seansları. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Morning and afternoon departures daily from all Alanya hotels. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Ежедневно утром и днем из всех отелей. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich vormittags und nachmittags ab allen Hotels. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie rano i po południu z hoteli. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Kirlenmesinde sakınca olmayan giysiler giyin.",
        "Sürücüler 16 yaşından büyük olmalıdır."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Wear clothes you do not mind getting dusty and wet.",
        "Minimum driver age 16; passengers can be younger."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Одевайте одежду для бездорожья.",
        "Водитель от 16 лет."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Schmutzunempfindliche Kleidung tragen.",
        "Fahrer ab 16 Jahren."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Załóż ubranie, które można zabrudzić.",
        "Kierowca od 16 lat."
      ]
    },
    "participantsCount": 2310
  },
  {
    "id": "private-yacht",
    "slug": "private-yacht",
    "category": "Luxury",
    "price": 700,
    "pricePerPerson": false,
    "currency": "€",
    "rating": 5,
    "reviewsCount": 88,
    "image": "/assets/images/private-yacht.jpg",
    "imageAlt": {
      "en": "VIP private luxury motor yacht charter cruising Alanya turquoise coastline",
      "tr": "Alanya VIP özel lüks kiralık yat turu Akdeniz koyları",
      "ru": "Аренда приватной VIP яхты в Аланье для индивидуального круиза",
      "de": "VIP private Luxusyacht mieten in Alanya für exklusive Bootstouren",
      "pl": "Wynajem prywatnego luksusowego jachtu VIP w Alanyi"
    },
    "gallery": [
      "/assets/images/private-yacht.jpg",
      "/assets/images/yacht-vip-luxury.jpg",
      "/assets/images/yacht-lounge-deck.jpg"
    ],
    "title": {
      "en": "VIP Private Luxury Yacht Tour",
      "tr": "VIP Özel Lüks Yat Turu",
      "ru": "VIP Аренда частной яхты",
      "de": "VIP Private Luxusyacht Tour",
      "pl": "Prywatny luksusowy jacht VIP"
    },
    "duration": {
      "en": "4 - 5 Hours",
      "tr": "4 - 5 Saat",
      "ru": "4 - 5 Часов",
      "de": "4 - 5 Stunden",
      "pl": "4 - 5 godzin"
    },
    "description": {
      "tr": "700€ toplam fiyatla aileniz veya arkadaş grubunuz için tamamen size özel lüks motor yat kiralayın (12 kişiye kadar). Alanya Kalesi, Kleopatra Plajı ve sessiz koylarda özel yüzme molaları. Özel kaptan, gemici, taze balık veya ızgara etli gurme yemek, alkolsüz içecekler ve VIP transfer dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Charter an exclusive luxury motor yacht exclusively for you, your family, or friends for €700 total (up to 12 guests). Sail along Alanya's Cleopatra Beach, ancient castle cliffs, and quiet caves. Includes private captain and crew, gourmet freshly cooked lunch/dinner (fresh sea bream, grilled meats, salads), soft drinks, and private VIP transfers. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Эксклюзивная аренда роскошной моторной яхты для вашей семьи или компании до 12 человек за 700€ за всю яхту. Личный капитан, плавание в уединенных бухтах, свежеприготовленный обед с рыбой/мясом, напитки и VIP трансфер. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Mieten Sie eine private Luxus-Motoryacht ganz für sich, Ihre Familie oder Freunde für 700€ pauschal (bis zu 12 Personen). Kapitän, Crew, Gourmet-Essen, Getränke und VIP-Transfer inklusive. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Wynajmij luksusowy jacht motorowy na wyłączność dla siebie, rodziny lub znajomych za 700€ (do 12 osób). Prywatny kapitan, rejs po ustronnych zatokach, wykwintny obiad ze świeżą rybą i transfer VIP. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "100% private yacht exclusively for your party (up to 12 people)",
        "Customizable cruising itinerary and swimming stops",
        "Gourmet meal prepared fresh on board (Fish/Meat/Pasta)",
        "Bluetooth sound system, sun loungers, and snorkel gear",
        "Private roundtrip VIP hotel transfer included"
      ],
      "tr": [
        "Yat tamamen size ve sevdiklerinize aittir (12 kişiye kadar)",
        "Kişiselleştirilebilir seyir rotası ve yüzme molaları",
        "Teknede taze pişirilen gurme yemek (Balık/Et seçenekli)",
        "Bluetooth müzik sistemi, güneşlenme minderleri ve şnorkel",
        "Özel VIP araçla otelden gidiş-dönüş transfer dahil"
      ],
      "ru": [
        "Яхта полностью в вашем распоряжении (до 12 гостей)",
        "Индивидуальный маршрут и остановки для плавания",
        "Свежеприготовленный обед от шеф-повара",
        "Bluetooth аудиосистема, шезлонги и снаряжение",
        "Индивидуальный VIP трансфер"
      ],
      "de": [
        "100% private Yacht für bis zu 12 Personen",
        "Individuelle Route und Badestopps",
        "Frisch zubereitetes Gourmet-Essen an Bord",
        "Bluetooth-Soundsystem, Sonnenliegen, Schnorchel",
        "Privater VIP-Transfer inklusive"
      ],
      "pl": [
        "Cały jacht na wyłączność (do 12 osób)",
        "Dowolna trasa i postoje na kąpiele",
        "Wyśmienity obiad przygotowany na pokładzie",
        "Nagłośnienie Bluetooth, leżaki i maski do nurkowania",
        "Prywatny transfer VIP z hotelu"
      ]
    },
    "included": {
      "en": [
        "Private luxury yacht charter (4-5 hrs)",
        "Professional captain and crew",
        "Gourmet meal (Fresh Sea Bream/Chicken, Pasta, Salads, Fruit)",
        "Unlimited soft drinks (Cola, Fanta, Sprite, Water, Tea, Coffee)",
        "Fuel and port taxes",
        "Private VIP transfer"
      ],
      "tr": [
        "Özel lüks yat kiralama (4-5 saat)",
        "Profesyonel kaptan ve personel",
        "Gurme yemek (Taze Çipura/Tavuk, Makarna, Salata, Meyve)",
        "Sınırsız meşrubat ve sıcak içecekler",
        "Yakıt ve liman vergileri",
        "Özel VIP transfer"
      ],
      "ru": [
        "Аренда частной яхты (4-5 часов)",
        "Капитан и команда",
        "Обед из свежей рыбы/курицы, гарниры, фрукты",
        "Безалкогольные напитки без ограничений",
        "Топливо и портовые сборы",
        "VIP трансфер"
      ],
      "de": [
        "Private Yachtcharter (4-5 Stunden)",
        "Kapitän und Besatzung",
        "Gourmet-Menü (Fisch/Fleisch, Pasta, Salate, Obst)",
        "Unbegrenzt alkoholfreie Getränke",
        "Treibstoff",
        "VIP-Transfer"
      ],
      "pl": [
        "Czarter prywatnego jachtu (4-5 godz.)",
        "Kapitan i załoga",
        "Obiad ze świeżą rybą lub kurczakiem",
        "Nielimitowane napoje bezalkoholowe",
        "Paliwo i opłaty",
        "Transfer VIP"
      ]
    },
    "notIncluded": {
      "en": [
        "Alcoholic drinks (you may bring your own on board free of charge)"
      ],
      "tr": [
        "Alkollü içecekler (kendi içeceğinizi ücretsiz yanınızda getirebilirsiniz)"
      ],
      "ru": [
        "Алкоголь (можно принести с собой бесплатно)"
      ],
      "de": [
        "Alkoholische Getränke (können gerne selbst mitgebracht werden)"
      ],
      "pl": [
        "Alkohol (można wnieść własny bez opłat korkowych)"
      ]
    },
    "pickupInfo": {
      "tr": "Esnek hareket saatleri: Sabah seansı (09:30 - 14:00) veya Günbatımı seansı (15:30 - 20:00). (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Flexible departure times: Morning (09:30 - 14:00) or Sunset (15:30 - 20:00) from all Alanya hotels. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Утренний тур (09:30 - 14:00) или тур на закате (15:30 - 20:00). (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Flexible Zeiten: Vormittags (09:30 - 14:00) oder Sonnenuntergang (15:30 - 20:00). (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Elastyczne godziny: rejs poranny (09:30 - 14:00) lub rejs o zachodzie słońca (15:30 - 20:00). (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Fiyat 700€ tüm yat için geçerlidir (12 kişiye kadar). Doğum günü, evlilik teklifi ve özel kutlamalar için idealdir."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Price is €700 for the entire boat (up to 12 guests). Perfect for birthdays, anniversaries, and special occasions."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Цена 700€ за всю яхту до 12 человек. Идеально для праздников и романтических свиданий."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Preis gilt für die gesamte Yacht für bis zu 12 Personen. Perfekt für Geburtstage und Jubiläen."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Cena 700€ dotyczy całego jachtu (do 12 osób). Idealne na urodziny, rocznice i oświadczyny."
      ]
    },
    "participantsCount": 640
  },
  {
    "id": "diving-experience",
    "slug": "diving",
    "category": "Adventure",
    "price": 40,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.8,
    "reviewsCount": 178,
    "image": "/assets/images/diving-experience.jpg",
    "imageAlt": {
      "en": "Scuba diving in Alanya Mediterranean clear waters with sea turtle and reefs",
      "tr": "Alanya tüplü dalış turu Akdeniz mercan resifleri ve deniz kaplumbağası",
      "ru": "Дайвинг в Аланье: погружение с аквалангом и морские черепахи",
      "de": "Tauchen in Alanya im Mittelmeer mit Schildkröten und Riffen",
      "pl": "Nurkowanie z akwalungiem Scuba Diving w Alanyi w Turcji"
    },
    "gallery": [
      "/assets/images/diving-experience.jpg",
      "/assets/images/diving-turtle.jpg",
      "/assets/images/diving-reef.jpg",
      "/assets/images/diving-main.jpg"
    ],
    "title": {
      "en": "Alanya Scuba Diving",
      "tr": "Alanya Dalış Turu (Scuba Diving)",
      "ru": "Дайвинг в Аланье (Scuba Diving)",
      "de": "Alanya Tauchen (Scuba Diving)",
      "pl": "Nurkowanie w Alanyi (Scuba Diving)"
    },
    "duration": {
      "en": "6 Hours",
      "tr": "6 Saat",
      "ru": "6 Часов",
      "de": "6 Stunden",
      "pl": "6 godzin"
    },
    "description": {
      "tr": "40€ fiyatla Akdeniz'in berrak sularında 2 ayrı tüplü dalış deneyimi. Deneyimsiz yeni başlayanlar ve sertifikalı dalgıçlar için uygundur. PADI/CMAS sertifikalı eğitmenler eşliğinde resifler, deniz mağaraları ve deniz kaplumbağalarıyla tanışın. Tüm ekipmanlar, öğle yemeği ve transfer dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Dive into the warm, clear waters of the Mediterranean with 2 guided scuba dives for €40. Suitable for both beginners (no experience needed) and certified divers. Explore underwater caves, colorful reefs, and encounter sea turtles with certified PADI/CMAS instructors. Includes all diving gear, boat cruise, lunch, and hotel transfers. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Погрузитесь в прозрачные воды Средиземного моря с двумя погружениями с аквалангом за 40€. Подходит для новичков (опыт не нужен) и сертифицированных дайверов. Опытные инструкторы PADI/CMAS, снаряжение, обед на корабле и трансфер. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Zwei geführte Tauchgänge im glasklaren Mittelmeer für 40€. Für Anfänger ohne Vorkenntnisse sowie zertifizierte Taucher geeignet. Entdecken Sie Riffe und Höhlen mit PADI-Tauchlehrern. Inklusive Ausrüstung, Mittagessen und Hoteltransfer. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Dwa zejścia pod wodę z akwalungiem pod okiem instruktorów za 40€. Odpowiednie dla osób bez żadnego doświadczenia oraz certyfikowanych nurków. Podwodne rafy, jaskinie i żółwie morskie. Sprzęt, rejs statkiem, obiad i transport w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "2 separate guided dives at premier Alanya dive sites",
        "1-on-1 instructor guidance for beginners",
        "Encounter sea turtles (Caretta Caretta) and reef fish",
        "Full certified scuba equipment provided",
        "Lunch served on the dive boat",
        "Roundtrip hotel transfers included"
      ],
      "tr": [
        "Alanya'nın en iyi noktalarında 2 ayrı rehberli dalış",
        "Yeni başlayanlar için birebir eğitmen eşliği",
        "Deniz kaplumbağaları (Caretta) ve renkli sualtı canlıları",
        "Eksiksiz profesyonel dalış ekipmanları",
        "Dalış teknesinde lezzetli öğle yemeği",
        "Otelden gidiş-dönüş transfer dahil"
      ],
      "ru": [
        "2 отдельных погружения с инструктором",
        "Индивидуальное сопровождение для новичков",
        "Морские черепахи и стайки рыб",
        "Полный комплект снаряжения",
        "Обед на борту катера",
        "Трансфер из отеля включен"
      ],
      "de": [
        "2 geführte Tauchgänge an Top-Tauchplätzen",
        "1:1 Betreuung für Tauchanfänger",
        "Schildkröten und bunte Fischschwärme",
        "Komplette Tauchausrüstung",
        "Mittagessen auf dem Tauchboot",
        "Inklusive Hoteltransfer"
      ],
      "pl": [
        "2 osobne nurkowania z instruktorem",
        "Opieka 1 na 1 dla osób początkujących",
        "Spotkania z żółwiami morskimi i ławicami ryb",
        "Kompletny profesjonalny sprzęt nurkowy",
        "Obiad na pokładzie statku",
        "Darmowy transport z i do hotelu"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup and return transfer",
        "Boat cruise to diving sites",
        "2 guided scuba dives",
        "Full scuba gear (wetsuit, tank, BCD, regulator, fins, mask)",
        "Lunch on board",
        "Insurance"
      ],
      "tr": [
        "Otel transferi",
        "Dalış noktalarına tekne gezisi",
        "2 ayrı tüplü dalış seansı",
        "Tüm profesyonel dalış ekipmanları",
        "Teknede öğle yemeği",
        "Dalış sigortası"
      ],
      "ru": [
        "Трансфер из отеля",
        "Прогулка на дайв-боте",
        "2 погружения с аквалангом",
        "Полный комплект снаряжения",
        "Обед на корабле",
        "Страховка"
      ],
      "de": [
        "Hoteltransfer",
        "Bootsfahrt zu den Tauchplätzen",
        "2 Tauchgänge",
        "Komplette Tauchausrüstung",
        "Mittagessen an Bord",
        "Versicherung"
      ],
      "pl": [
        "Transfer z/do hotelu",
        "Rejs statkiem nurkowym",
        "2 zejścia pod wodę",
        "Pełny sprzęt do nurkowania",
        "Obiad na statku",
        "Ubezpieczenie"
      ]
    },
    "notIncluded": {
      "en": [
        "Drinks on board",
        "Underwater photos & video package (optional)"
      ],
      "tr": [
        "Teknede içecekler",
        "Sualtı fotoğraf ve video çekimi (isteğe bağlı)"
      ],
      "ru": [
        "Напитки",
        "Подводные фото и видео"
      ],
      "de": [
        "Getränke an Bord",
        "Unterwasser-Fotoservice"
      ],
      "pl": [
        "Napoje",
        "Zdjęcia i nagrania podwodne"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden her gün 08:30 - 09:00 arası alış, 16:00 dönüş. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Departures daily from all Alanya hotels at ~08:30 - 09:00, return ~16:00. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Выезд каждый день в 08:30 - 09:00, возвращение около 16:00. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich ca. 08:30 - 09:00 Uhr ab Hotel, Rückkehr ca. 16:00 Uhr. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie ok. 08:30 - 09:00, powrót ok. 16:00. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Mayo, havlu ve güneş kremi getirin.",
        "Dalış yapmayan misafirler tekneye güneşlenmek ve yüzmek için katılabilir."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring swimwear, towel, and sunscreen.",
        "Non-diving companions can join as boat guests for swimming and sunbathing."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Возьмите купальник и полотенце.",
        "Гости без погружений могут поехать просто позагорать и поплавать."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Badesachen und Handtuch mitbringen.",
        "Nicht-Taucher können als Begleitperson zum Schnorcheln und Sonnen mitfahren."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Zabierz strój kąpielowy i ręcznik.",
        "Osoby nienurkujące mogą popłynąć jako osoby towarzyszące."
      ]
    },
    "participantsCount": 1890
  },
  {
    "id": "alanya-paragliding",
    "slug": "paragliding",
    "category": "Adventure",
    "price": 65,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 5,
    "reviewsCount": 340,
    "image": "/assets/images/alanya-paragliding.jpg",
    "imageAlt": {
      "en": "Tandem paragliding flight over Alanya castle landing on Cleopatra Beach",
      "tr": "Alanya Kleopatra Plajı üzerinde tandem yamaç paraşütü uçuşu",
      "ru": "Тандемный параглайдинг над Аланьей и приземление на пляж Клеопатры",
      "de": "Tandem-Paragliding über Alanya mit Landung am Kleopatra-Strand",
      "pl": "Lot paralotnią w tandemie nad Alanyą z lądowaniem na plaży Kleopatry"
    },
    "gallery": [
      "/assets/images/alanya-paragliding.jpg",
      "/assets/images/paragliding-sky.jpg",
      "/assets/images/paragliding-beach.jpg"
    ],
    "title": {
      "en": "Tandem Paragliding",
      "tr": "Alanya Yamaç Paraşütü (Paragliding)",
      "ru": "Параглайдинг в Аланье",
      "de": "Tandem-Paragliding Alanya",
      "pl": "Lot paralotnią (Paragliding) w Alanyi"
    },
    "duration": {
      "en": "2 Hours (20 min flight)",
      "tr": "2 Saat (20 dk uçuş)",
      "ru": "2 Часа (20 мин полет)",
      "de": "2 Stunden (20 Min. Flug)",
      "pl": "2 godziny (20 min lotu)"
    },
    "description": {
      "tr": "65€ fiyatla Toros Dağları'nın 800 metrelik zirvesinden dünyaca ünlü Kleopatra Plajı'nın altın kumlarına kuşlar gibi süzülün. Binlerce uçuş deneyimine sahip lisanslı profesyonel pilotlar eşliğinde tandem uçuş. Otel transferi ve güvenlik ekipmanları dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Soar like a bird from an 800-meter peak in the Taurus Mountains down to the golden sands of world-famous Cleopatra Beach for €65. Fly in tandem with a professional, licensed pilot with thousands of flights of experience. Includes hotel transfers and top-tier safety equipment. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Парите как птица с высоты 800 метров в горах Тавра и плавно приземлитесь на знаменитый пляж Клеопатры за 65€. Полет в тандеме с опытным сертифицированным пилотом. Трансфер из отеля и страховка включены. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Gleiten Sie für 65€ wie ein Vogel von einem 800 Meter hohen Berg über das Meer hinunter zum berühmten Kleopatra-Strand. Tandemflug mit erfahrenem, lizenziertem Piloten inklusive Hoteltransfer. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Wzbij się w powietrze z wysokości 800 metrów i wyląduj na złocistym piasku plaży Kleopatry za 65€. Lot w tandemie z licencjonowanym instruktorem z tysiącami wylatanych godzin. Transfer z hotelu w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Takeoff from 800m high mountain viewpoint",
        "Spectacular bird's-eye view of Alanya Castle and peninsula",
        "Smooth gentle landing directly on Cleopatra Beach",
        "Licensed professional tandem pilots with extensive experience",
        "Roundtrip hotel pickup & return included"
      ],
      "tr": [
        "800 metre rakımlı zirveden heyecan verici kalkış",
        "Alanya Kalesi ve yarımadasının muhteşem kuşbakışı manzarası",
        "Kleopatra Plajı'nın kumsalına yumuşak iniş",
        "Binlerce uçuş tecrübesine sahip THK lisanslı pilotlar",
        "Otelden gidiş-dönüş transfer dahil"
      ],
      "ru": [
        "Взлет с высоты 800 метров над уровнем моря",
        "Завораживающий вид на полуостров и крепость Аланьи",
        "Мягкая посадка прямо на песок пляжа Клеопатры",
        "Лицензированные опытные пилоты-инструкторы",
        "Трансфер из отеля и обратно"
      ],
      "de": [
        "Start auf 800 Metern Höhe im Taurusgebirge",
        "Spektakuläre Aussicht auf Burg und Kleopatra-Bucht",
        "Sanfte Landung direkt am Sandstrand von Kleopatra",
        "Lizenzierte Berufspiloten mit langjähriger Erfahrung",
        "Kostenloser Hoteltransfer inklusive"
      ],
      "pl": [
        "Start ze szczytu o wysokości 800 m n.p.m.",
        "Widok z lotu ptaka na zamek i półwysep w Alanyi",
        "Miękkie lądowanie na piasku plaży Kleopatry",
        "Licencjonowani piloci z ogromnym doświadczeniem",
        "Darmowy transport z i do hotelu"
      ]
    },
    "included": {
      "en": [
        "Hotel pickup and return transfer",
        "Jeep ride to mountain launch point",
        "20-25 minute tandem paragliding flight",
        "All flight gear and helmet",
        "Professional pilot fee & insurance"
      ],
      "tr": [
        "Otelden gidiş-dönüş transfer",
        "Zirveye transfer",
        "20-25 dakikalık tandem uçuş",
        "Tüm uçuş ekipmanları ve kask",
        "Lisanslı pilot ücreti ve sigorta"
      ],
      "ru": [
        "Трансфер из отеля и обратно",
        "Подъем на джипе на стартовую площадку",
        "Полет 20-25 минут в тандеме",
        "Шлем и экипировка",
        "Страховка"
      ],
      "de": [
        "Hoteltransfer",
        "Auffahrt zum Startplatz",
        "20-25 Minuten Tandemflug",
        "Ausrüstung und Helm",
        "Pilot und Versicherung"
      ],
      "pl": [
        "Transfer z/do hotelu",
        "Wjazd na miejsce startu",
        "20-25 minut lotu w tandemie",
        "Kask i sprzęt",
        "Ubezpieczenie i pilot"
      ]
    },
    "notIncluded": {
      "en": [
        "GoPro 4K action photos & videos (available from pilot after landing)"
      ],
      "tr": [
        "GoPro aksiyon kamera fotoğraf ve video çekimleri (uçuş sonrası isteğe bağlı)"
      ],
      "ru": [
        "Фото и видео на камеру GoPro (по желанию)"
      ],
      "de": [
        "GoPro-Fotos und 4K-Videos (optional beim Piloten)"
      ],
      "pl": [
        "Pamiątkowe zdjęcia i film 4K z kamery GoPro"
      ]
    },
    "pickupInfo": {
      "tr": "Hava koşullarına bağlı olarak her gün 08:30 - 17:00 arası 2 saatte bir seanslar. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Flights operate every 2 hours daily between 08:30 and 17:00 depending on wind conditions. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Полеты каждые 2 часа с 08:30 до 17:00 при благоприятной погоде. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Flüge täglich alle 2 Stunden zwischen 08:30 und 17:00 Uhr je nach Wind. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Loty odbywają się co 2 godziny w godz. 08:30 - 17:00 w zależności od pogody. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Spor ayakkabı giyin (terlik ile uçulamaz).",
        "Kilo sınırı: 25 kg ile 110 kg arası. Önceden hiçbir deneyim gerekmez."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Wear comfortable athletic sneakers (no flip-flops).",
        "Passenger weight limit: 25 kg to 110 kg. No prior experience required."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Наденьте кроссовки (шлепанцы запрещены).",
        "Вес пассажира: от 25 до 110 кг."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Feste Sportschuhe tragen (keine Sandalen/Flip-Flops).",
        "Gewichtsbeschränkung: 25 kg bis 110 kg."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Załóż stabilne obuwie sportowe (adidasy).",
        "Limit wagowy pasażera: od 25 do 110 kg. Bez wcześniejszego doświadczenia."
      ]
    },
    "participantsCount": 3260
  },
  {
    "id": "alanya-city-tour",
    "slug": "alanya-city-tour",
    "category": "Culture",
    "price": 40,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 412,
    "participantsCount": 3820,
    "image": "/assets/images/alanya-city-tour.jpg",
    "imageAlt": {
      "en": "Alanya city panoramic tour with medieval castle, Damlatas cave and cable car",
      "tr": "Alanya tarihi kale, Damlataş mağarası, Kleopatra plajı ve teleferik şehir turu",
      "ru": "Обзорная экскурсия по Аланье: крепость, пещера Дамлаташ и канатная дорога",
      "de": "Alanya Stadtrundfahrt mit Burg, Damlatas-Höhle und Seilbahn",
      "pl": "Wycieczka objazdowa po Alanyi: zamek, jaskinia Damlataş i kolejka linowa"
    },
    "gallery": [
      "/assets/images/alanya-city-tour.jpg",
      "/assets/images/alanya-castle-view.jpg",
      "/assets/images/damlatas-cave-view.jpg",
      "/assets/images/alanya.jpg"
    ],
    "title": {
      "en": "Alanya City Tour & Cable Car",
      "tr": "Alanya Şehir Turu (Alanya City Tour)",
      "ru": "Обзорная экскурсия по Аланье (Alanya City Tour)",
      "de": "Alanya Stadtrundfahrt & Seilbahn (City Tour)",
      "pl": "Alanya City Tour z kolejką linową"
    },
    "duration": {
      "en": "4-5 Hours",
      "tr": "4-5 Saat",
      "ru": "4-5 Часов",
      "de": "4-5 Stunden",
      "pl": "4-5 godzin"
    },
    "description": {
      "en": "Experience the finest landmarks of Alanya for €40: explore the iconic 13th-century Alanya Castle with sweeping panoramic views over the bay, visit the therapeutic stalactites inside Damlataş Cave, stroll along Cleopatra Beach, ride the scenic panoramic cable car (Teleferik), and take photos from the 'I LOVE ALANYA' terrace overlooking the entire Mediterranean coast. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "tr": "40€ fiyatla Alanya'nın tüm simgelerini tek turda keşfedin: Tarihi 13. yüzyıl Selçuklu Alanya Kalesi'nden panoramik Akdeniz manzarası, şifalı sarkıtlarıyla ünlü Damlataş Mağarası, altın kumlu Kleopatra Plajı, teleferik heyecanı ve şehri tepeden gören 'I LOVE ALANYA' seyir terası. Profesyonel rehber ve gidiş-dönüş otel transferi dahildir. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "ru": "Познакомьтесь с визитными карточками Аланьи всего за 40€: поднимитесь к средневековой крепости Аланьи с панорамным видом на море, посетите целебную сталактитовую пещеру Дамлаташ, отдохните на легендарном пляже Клеопатры, прокатитесь на панорамной канатной дороге и сделайте фото на смотровой площадке 'I LOVE ALANYA'. Включен трансфер и гид. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erleben Sie die Höhepunkte von Alanya für 40€: Genießen Sie den Panoramablick von der historischen Burg Alanya, besichtigen Sie die Heilstalaktiten der Damlatas-Höhle, entspannen Sie am Kleopatra-Strand und fahren Sie mit der Seilbahn (Teleferik) zur Aussichtsterrasse 'I LOVE ALANYA'. Inklusive Guide und Hoteltransfer. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Poznaj największe skarby Alanyi za 40€: zobacz zamek w Alanyi z panoramą całego wybrzeża, leczniczą Jaskinię Damlataş ze stalaktytami, słynną Plażę Kleopatry, wjedź kolejką linową (Teleferik) oraz zrób pamiątkowe zdjęcia z tarasu widokowego 'I LOVE ALANYA'. Przewodnik i transfer w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "13th-century Alanya Castle with panoramic fortress walls",
        "Damlataş Cave with stalactites and microclimate healing air",
        "Cleopatra Beach golden sands & turquoise water stop",
        "Breathtaking views from 'I LOVE ALANYA' scenic terrace",
        "Open-top cabrio or modern air-conditioned vehicle tour",
        "Hotel pickup and drop-off included"
      ],
      "tr": [
        "13. yüzyıl Selçuklu Alanya Kalesi ve sur manzaraları",
        "Astıma iyi gelen şifalı Damlataş Mağarası ziyareti",
        "Dünyaca ünlü Kleopatra Plajı fotoğraf molası",
        "'I LOVE ALANYA' panoramik seyir terası",
        "Üstü açık cabrio safari veya klimalı lüks araç konforu",
        "Otelden gidiş-dönüş transfer ve rehberlik dahil"
      ],
      "ru": [
        "Крепость Аланьи XIII века и панорамный вид на залив",
        "Целебная сталактитовая пещера Дамлаташ",
        "Остановка на знаменитом пляже Клеопатры",
        "Панорамная терраса с надписью 'I LOVE ALANYA'",
        "Поездка на открытых кабрио-сафари или комфортном автобусе",
        "Трансфер из отеля и услуги гида включены"
      ],
      "de": [
        "Historische Festung Alanya aus dem 13. Jahrhundert",
        "Besuch der heilsamen Tropfsteinhöhle Damlatas",
        "Fotostopp am weltberühmten Kleopatra-Strand",
        "Aussichtsplattform mit Schriftzug 'I LOVE ALANYA'",
        "Fahrt im offenen Cabrio-Bus oder klimatisierten Minibus",
        "Inklusive Hoteltransfer hin und zurück"
      ],
      "pl": [
        "XIII-wieczny Zamek w Alanyi i mury obronne",
        "Jaskinia Damlataş o mikroklimacie łagodzącym astmę",
        "Czas wolny przy słynnej Plaży Kleopatry",
        "Taras widokowy z napisem 'I LOVE ALANYA'",
        "Przejazd panoramicznym busem cabrio lub klimatyzowanym vanem",
        "Wygodny transfer z i do hotelu"
      ]
    },
    "included": {
      "en": [
        "Roundtrip hotel pickup and drop-off",
        "Professional licensed tour guide",
        "Alanya Castle and viewpoint panorama stops",
        "Cleopatra Beach visit",
        "Full passenger insurance"
      ],
      "tr": [
        "Otelden gidiş-dönüş transfer",
        "Profesyonel lisanslı rehber",
        "Alanya Kalesi ve panoramik seyir terası molaları",
        "Kleopatra Plajı ziyareti",
        "Tam kapsamlı yolcu sigortası"
      ],
      "ru": [
        "Трансфер из отеля и обратно",
        "Профессиональный лицензированный гид",
        "Остановки у крепости Аланьи и на смотровых площадках",
        "Посещение пляжа Клеопатры",
        "Полная страховка пассажиров"
      ],
      "de": [
        "Hoteltransfer hin und zurück",
        "Professioneller lizenzierter Reiseleiter",
        "Fotostopps an der Burg Alanya und Aussichtsterrasse",
        "Besuch des Kleopatra-Strandes",
        "Umfassende Versicherung"
      ],
      "pl": [
        "Transfer z i do hotelu",
        "Licencjonowany przewodnik",
        "Punkty widokowe i zamek w Alanyi",
        "Wizyta przy Plaży Kleopatry",
        "Ubezpieczenie"
      ]
    },
    "notIncluded": {
      "en": [
        "Cable car (Teleferik) ticket & Damlataş cave entry (optional)",
        "Personal expenses and drinks"
      ],
      "tr": [
        "Teleferik bileti ve Damlataş Mağarası giriş ücreti (isteğe bağlı)",
        "Kişisel harcamalar ve içecekler"
      ],
      "ru": [
        "Билет на канатную дорогу и вход в пещеру Дамлаташ (по желанию)",
        "Личные расходы и напитки"
      ],
      "de": [
        "Seilbahnticket & Eintritt in die Damlatas-Höhle (optional)",
        "Persönliche Ausgaben und Getränke"
      ],
      "pl": [
        "Bilet na kolejkę linową i wejście do jaskini Damlataş (opcjonalnie)",
        "Wydatki osobiste i napoje"
      ]
    },
    "pickupInfo": {
      "en": "Daily pickups at ~09:00 or ~16:30 (sunset tour) from all Alanya hotels. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "tr": "Tüm Alanya otellerinden her gün 09:00 veya 16:30 (gün batımı turu) alış. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "ru": "Ежедневный выезд в 09:00 или 16:30 (на закат) из отелей Аланьи. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich ca. 09:00 oder 16:30 Uhr (Sonnenuntergangstour) ab allen Hotels in Alanya. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codzienne wyjazdy ok. 09:00 lub 16:30 (na zachód słońca) ze wszystkich hoteli w Alanyi. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Comfortable shoes, sunglasses, and camera recommended.",
        "Appropriate for all ages and families with children.",
        "Afternoon tour includes breathtaking Mediterranean sunset views."
      ],
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Rahat yürüyüş ayakkabısı, güneş gözlüğü ve fotoğraf makinesi önerilir.",
        "Her yaş grubu ve çocuklu aileler için uygundur.",
        "Öğleden sonraki tur muhteşem Akdeniz gün batımı manzarası sunar."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Рекомендуется удобная обувь, солнцезащитные очки и фотоаппарат.",
        "Подходит для всех возрастов и семей с детьми.",
        "Вечерний тур включает великолепный закат над морем."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Bequeme Wanderschuhe, Sonnenbrille und Kamera empfohlen.",
        "Für jedes Alter und Familien mit Kindern bestens geeignet.",
        "Die Nachmittagstour bietet einen fantastischen Blick auf den Sonnenuntergang."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Zalecane wygodne obuwie, okulary przeciwsłoneczne i aparat fotograficzny.",
        "Idealna dla osób w każdym wieku i rodzin z dziećmi.",
        "Popołudniowy wyjazd gwarantuje niezapomniany zachód słońca nad morzem."
      ]
    }
  },
  {
    "id": "antalya-city-tour",
    "slug": "antalya-city-tour",
    "category": "Culture",
    "price": 60,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 255,
    "image": "/assets/images/antalya-aquarium.jpg",
    "imageAlt": {
      "en": "Antalya giant tunnel aquarium and old town city tour in Mediterranean Turkey",
      "tr": "Antalya dev tünel akvaryum ve tarihi Kaleiçi şehir turu",
      "ru": "Анталья: гигантский туннельный аквариум и старый город Калеичи",
      "de": "Antalya Riesen-Tunnel-Aquarium und Altstadt Kaleici Stadtrundfahrt",
      "pl": "Antalya: gigantyczne akwarium tunelowe i zabytkowa starówka Kaleiçi"
    },
    "gallery": [
      "/assets/images/antalya-aquarium.jpg",
      "/assets/images/antalya-city-tour.jpg",
      "/assets/images/duden-waterfall-sea.jpg",
      "/assets/images/antalya-kaleici-street.jpg"
    ],
    "title": {
      "en": "Antalya City & Tunnel Aquarium",
      "tr": "Antalya Şehir Turu & Dev Tünel Akvaryum",
      "ru": "Анталья: город и тоннельный аквариум",
      "de": "Antalya Stadtrundfahrt & Riesen-Aquarium",
      "pl": "Antalya: miasto i oceanarium tunelowe"
    },
    "duration": {
      "en": "8.5 Hours",
      "tr": "8.5 Saat",
      "ru": "8.5 Часов",
      "de": "8.5 Stunden",
      "pl": "8.5 godziny"
    },
    "description": {
      "tr": "60€ karşılığında Antalya'nın tüm güzelliklerini tek bir günde yaşayın. 131 metre uzunluğuyla dünyanın en uzun tünel akvaryumunda köpekbalıkları ve vatozları yakından izleyin, 40 metreden Akdeniz'e dökülen görkemli Aşağı Düden Şelalesi'ni görün ve tarihi Kaleiçi, Hadrian Kapısı ile yat limanını gezin. Akvaryum giriş bileti, otobüs transferi ve öğle yemeği dahil. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Experience the best of Antalya in one day for €60. Walk through the world's longest tunnel aquarium (131 meters long) with thousands of sharks and rays, admire the spectacular Lower Düden Waterfall cascading 40 meters straight into the Mediterranean, and enjoy guided free time exploring historic Kaleiçi old town, Hadrian's Gate, and the Ottoman harbor. Includes full aquarium entry ticket, transport, and lunch. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Лучшее в Анталье за один день за 60€. Пройдитесь по самому длинному в мире туннельному аквариуму (131 м) с акулами и скатами, полюбуйтесь водопадом Дюден, низвергающимся в открытое море, и погуляйте по исторической улочкам Калеичи и воротам Адриана. Входной билет в аквариум, обед и трансфер включены. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erleben Sie die Höhepunkte von Antalya für 60€. Durchqueren Sie das mit 131 Metern längste Tunnel-Aquarium der Welt, bestaunen Sie den tosenden Duden-Wasserfall über den Klippen ins Meer und entdecken Sie die historische Altstadt Kaleici und das Hadrianstor. Eintritt ins Aquarium, Mittagessen und Transfer inklusive. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Poznaj najpiękniejsze atrakcje Antalyi w jeden dzień za 60€. Przejdź najdłuższym tunelem akwarystycznym na świecie (131 metrów) podziwiając rekiny i płaszczki, zobacz Wodospad Düden spadający ze skał prosto do morza oraz zwiedzaj urokliwą starówkę Kaleiçi i Bramę Hadriana. Bilet do akwarium, obiad i transport w cenie. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "Walk through the world's longest tunnel aquarium (131 meters)",
        "Witness Lower Düden Waterfall falling directly into the sea",
        "Explore historic Kaleiçi old town and Hadrian's Gate",
        "Discover ancient Ottoman harbor and scenic viewpoints",
        "Delicious restaurant lunch included",
        "Comfortable roundtrip transfer in modern A/C bus"
      ],
      "tr": [
        "Dünyanın en uzun tünel akvaryumunda yürüyüş (131 metre)",
        "Aşağı Düden Şelalesi'nin denize döküldüğü büyüleyici manzara",
        "Tarihi Kaleiçi sokakları, saat kulesi ve Hadrian Kapısı",
        "Tarihi yat limanı ve seyir terasları",
        "Restoranda lezzetli öğle yemeği",
        "Modern klimalı araçlarla konforlu transfer"
      ],
      "ru": [
        "Самый длинный в мире туннельный аквариум (131 м)",
        "Водопад Нижний Дюден, спадающий в море со скал",
        "Атмосферный старый город Калеичи и Ворота Адриана",
        "Древняя гавань и смотровые площадки",
        "Вкусный обед в ресторане",
        "Трансфер на комфортабельном автобусе"
      ],
      "de": [
        "Das längste Tunnelaquarium der Welt (131 Meter)",
        "Duden-Wasserfall stürzt ins Meer",
        "Historische Altstadt Kaleici und Hadrianstor",
        "Alter römisch-osmanischer Hafen",
        "Mittagessen im Restaurant inklusive",
        "Klimatisierter Reisebus ab Hotel"
      ],
      "pl": [
        "Najdłuższy tunel akwarystyczny na świecie (131 metrów)",
        "Wodospad Düden spadający z klifu do morza",
        "Zabytkowa starówka Kaleiçi i Brama Hadriana",
        "Historyczny port jachtowy",
        "Smaczny obiad w restauracji",
        "Komfortowy autokar z klimatyzacją"
      ]
    },
    "included": {
      "en": [
        "Roundtrip hotel transfers in A/C bus",
        "Antalya Tunnel Aquarium entry ticket",
        "Visit to Lower Düden Waterfall",
        "Guided walk and free time in Kaleiçi Old Town",
        "Restaurant lunch",
        "Professional tour guide"
      ],
      "tr": [
        "Klimalı otobüsle otelden gidiş-dönüş transfer",
        "Antalya Tünel Akvaryum giriş bileti",
        "Aşağı Düden Şelalesi ziyareti",
        "Kaleiçi rehberli gezisi ve serbest zaman",
        "Restoranda öğle yemeği",
        "Profesyonel rehberlik hizmeti"
      ],
      "ru": [
        "Трансфер из отеля на автобусе с кондиционером",
        "Входной билет в тоннельный аквариум Антальи",
        "Посещение водопада Нижний Дюден",
        "Экскурсия и свободное время в Калеичи",
        "Обед в ресторане",
        "Лицензированный гид"
      ],
      "de": [
        "Hoteltransfer im klimatisierten Reisebus",
        "Eintrittskarte für das Tunnel-Aquarium",
        "Besuch des Duden-Wasserfalls",
        "Führung und Freizeit in der Altstadt Kaleici",
        "Mittagessen im Restaurant",
        "Lizenzierter Reiseleiter"
      ],
      "pl": [
        "Transfer z i do hotelu autokarem",
        "Bilet wstępu do oceanarium tunelowego",
        "Wizyta przy Wodospadzie Düden",
        "Zwiedzanie starówki Kaleiçi z czasem wolnym",
        "Obiad w restauracji",
        "Licencjonowany przewodnik"
      ]
    },
    "notIncluded": {
      "en": [
        "Drinks at lunch",
        "Wax Museum or Snow World in aquarium (optional)",
        "Cable car ride (optional)"
      ],
      "tr": [
        "Öğle yemeğinde içecekler",
        "Akvaryum içindeki Kar Dünyası / Balmumu Müzesi (isteğe bağlı)",
        "Teleferik (isteğe bağlı)"
      ],
      "ru": [
        "Напитки во время обеда",
        "Музей восковых фигур или снежная комната (по желанию)",
        "Канатная дорога (по желанию)"
      ],
      "de": [
        "Getränke beim Mittagessen",
        "Wachsmuseum oder Schneewelt im Aquarium (optional)",
        "Seilbahnfahrt (optional)"
      ],
      "pl": [
        "Napoje do obiadu",
        "Świat śniegu lub muzeum figur woskowych (opcjonalnie)",
        "Kolejka linowa (dla chętnych)"
      ]
    },
    "pickupInfo": {
      "tr": "Tüm Alanya otellerinden her gün sabah 08:30 civarı hareket, 17:30 dönüş. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Departures daily from all Alanya hotels at ~08:30, returning around 17:30. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Выезд ежедневно около 08:30, возвращение около 17:30. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Täglich ca. 08:30 Uhr ab Hotel, Rückkehr ca. 17:30 Uhr. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Codziennie wyjazd ok. 08:30 z hoteli w Alanyi, powrót ok. 17:30. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Rahat yürüyüş ayakkabısı ve fotoğraf makinesi getirin.",
        "Her mevsim için uygun, tüm aile ve çocuklar için keyifli bir turdur."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Bring comfortable walking shoes, camera, and cash/card for souvenirs.",
        "Great all-weather tour suitable for all ages and families."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Наденьте удобную обувь для ходьбы.",
        "Прекрасно подходит для семейного отдыха."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Bequeme Schuhe und Kamera mitbringen.",
        "Ideal für jedes Wetter und für die ganze Familie."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Załóż wygodne buty do chodzenia i weź aparat.",
        "Świetna wycieczka na każdą pogodę dla całych rodzin."
      ]
    },
    "participantsCount": 2540
  },
  {
    "id": "cappadocia-tour",
    "slug": "cappadocia-tour",
    "category": "Day Trips",
    "price": 120,
    "pricePerPerson": true,
    "currency": "€",
    "rating": 4.9,
    "reviewsCount": 487,
    "image": "/assets/images/cappadocia.jpg",
    "imageAlt": {
      "en": "Cappadocia hot air balloons floating at sunrise over fairy chimneys and valleys",
      "tr": "Kapadokya peri bacaları ve gün doğumunda gökyüzünü kaplayan sıcak hava balonları",
      "ru": "Воздушные шары на рассвете над сказочными долинами Каппадокии",
      "de": "Heißluftballons zum Sonnenaufgang über den Feenkaminen in Kappadokien",
      "pl": "Kolorowe balony o wschodzie słońca nad dolinami Kapadocji"
    },
    "gallery": [
      "/assets/images/cappadocia.jpg",
      "/assets/images/cappadocia-tour.jpg",
      "/assets/images/cappadocia-balloons-sunrise.jpg",
      "/assets/images/cappadocia-fairy-valley.jpg"
    ],
    "title": {
      "en": "Cappadocia 2-Day Tour",
      "tr": "Kapadokya Turu (2 Gün)",
      "ru": "Каппадокия (2 Дня)",
      "de": "Kappadokien 2-Tage Tour",
      "pl": "Kapadocja (2 Dni)"
    },
    "duration": {
      "en": "2 Days / 1 Night",
      "tr": "2 Gün / 1 Gece",
      "ru": "2 Дня / 1 Ночь",
      "de": "2 Tage / 1 Nacht",
      "pl": "2 Dni / 1 Noc"
    },
    "description": {
      "tr": "Alanya çıkışlı 2 gün 1 gece büyüleyici Kapadokya masalına 120€ karşılığında katılın! UNESCO Dünya Mirası Göreme, peri bacaları, Paşabağ Rahipler Vadisi, Devrent Hayal Vadisi, gizemli yeraltı şehri ve Uçhisar Kalesi'ni keşfedin. Klimalı lüks otobüslerle ulaşım, 1 gece otel konaklaması, akşam yemeği ve sabah kahvaltıları, profesyonel lisanslı rehberlik fiyata dahildir. Gün doğumunda yüzlerce sıcak hava balonunun gökyüzüne yükseldiği eşsiz manzarayı seyredin veya isteğe bağlı balon uçuşuna katılın. (Önemli Transfer Bilgisi: Otel güvenlik kuralları gereği transfer araçları otel içine girememektedir; lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.)",
      "en": "Embark on an unforgettable 2-day / 1-night journey to magical Cappadocia from Alanya for €120. Explore UNESCO World Heritage Göreme, surreal fairy chimneys, Paşabağ Monk Valley, Devrent Imagination Valley, ancient multi-level underground cities, and Uçhisar rock fortress. Includes comfortable air-conditioned coach travel, 1 night hotel accommodation, dinners and breakfasts, and a professional licensed guide. Witness the breathtaking spectacle of hundreds of hot air balloons taking flight at sunrise. (Important Transfer Notice: Hotel security regulations prevent transfer vehicles from entering inside hotel premises; please wait outside the main hotel security gate/booth at pickup time.)",
      "ru": "Отправляйтесь в сказочное 2-дневное путешествие в Каппадокию из Аланьи за 120€. В программе: музей Гёреме, Долина монахов (Пашабаг), Долина воображения (Деврент), таинственный подземный город и панорама крепости Учхисар. В стоимость включены комфортабельный трансфер, проживание в отеле (1 ночь), завтраки и ужины, а также лицензированный гид. На рассвете вас ждет зрелище сотен воздушных шаров. (Важная информация по трансферу: По правилам безопасности отелей туристический транспорт ожидает снаружи; пожалуйста, ожидайте трансфер перед шлагбаумом/будкой охраны отеля.)",
      "de": "Erleben Sie ein unvergessliches 2-Tage / 1-Nacht Abenteuer im märchenhaften Kappadokien ab Alanya für 120€. Entdecken Sie das UNESCO-Welterbe Göreme, bizarre Feenkamine, das Tal der Mönche (Pasabag), das Devrent-Tal, eine historische unterirdische Stadt und die Felsenburg Uchisar. Inklusive Busanreise, 1 Übernachtung im Hotel, Halbpension (Frühstück & Abendessen) und lizenzierter Reiseleitung. (Wichtiger Transferhinweis: Da Transferfahrzeuge das Hotelgelände aus Sicherheitsgründen nicht befahren dürfen, warten Sie bitte pünktlich außerhalb des Hotels am Sicherheitstor/an der Schranke.)",
      "pl": "Wyrusz w niesamowitą 2-dniową podróż do bajkowej Kapadocji z Alanyi za 120€. Zwiedzaj wpisane na listę UNESCO Göreme, Dolinę Mnichów Pasabag, Dolinę Wyobraźni Devrent, podziemne miasto oraz twierdzę Uchisar. W cenie: przejazd klimatyzowanym autokarem, 1 nocleg w hotelu, śniadania i obiadokolacje oraz opieka licencjonowanego przewodnika. (Ważna informacja o transferze: Ze względów bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu; prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "highlights": {
      "en": [
        "2 Days / 1 Night guided exploration of magical Cappadocia",
        "Göreme valley and iconic fairy chimneys formations",
        "Paşabağ (Monks Valley) and Devrent (Imagination Valley)",
        "Ancient multi-level underground city exploration",
        "Magical sunrise hot air balloon flight spectacle",
        "1 night hotel accommodation with dinner & breakfast",
        "Professional licensed historian guide and luxury coach"
      ],
      "tr": [
        "2 gün 1 gece rehberli masalsı Kapadokya keşfi",
        "Göreme vadisi ve ikonik peri bacaları",
        "Paşabağ Rahipler Vadisi ve Devrent Hayal Vadisi",
        "Tarihi çok katlı yeraltı şehri ziyareti",
        "Gün doğumunda yüzlerce sıcak hava balonunun büyüleyici şovu",
        "1 gece otel konaklaması, akşam yemeği ve açık büfe kahvaltı dahil",
        "Klimalı lüks otobüs ve profesyonel kokartlı rehber"
      ],
      "ru": [
        "2 дня и 1 ночь в сказочной Каппадокии",
        "Долина Гёреме и знаменитые каменные грибы \"Перибаджалары\"",
        "Долины Пашабаг и Деврент с причудливыми фигурами",
        "Экскурсия в древний подземный город",
        "Панорама сотен воздушных шаров на рассвете",
        "Проживание в отеле, ужин и завтрак включены",
        "Комфортабельный автобус и профессиональный гид"
      ],
      "de": [
        "2 Tage / 1 Nacht Entdeckungstour durch Kappadokien",
        "Göreme-Tal und weltberühmte Feenkamine",
        "Mönchtal Pasabag und Devrent-Tal der Phantasie",
        "Besichtigung einer antiken unterirdischen Stadt",
        "Spektakulärer Heißluftballon-Aufstieg zum Sonnenaufgang",
        "1 Hotelübernachtung mit Halbpension inklusive",
        "Klimatisierter Reisebus und lizenzierter Guide"
      ],
      "pl": [
        "2 dni / 1 noc odkrywania baśniowej Kapadocji",
        "Dolina Göreme i słynne formacje skalne Feenkamine",
        "Dolina Mnichów (Pasabag) i Dolina Wyobraźni (Devrent)",
        "Zwiedzanie wielopoziomowego podziemnego miasta",
        "Magiczny spektakl startu balonów o wschodzie słońca",
        "1 nocleg w hotelu z kolacją i śniadaniem w cenie",
        "Klimatyzowany autokar i licencjonowany przewodnik"
      ]
    },
    "included": {
      "en": [
        "Roundtrip transfers from/to all Alanya hotels in air-conditioned coach",
        "1 night hotel accommodation in Cappadocia",
        "1x Buffet breakfast and 1x Buffet dinner at hotel",
        "Professional licensed tour guide throughout the trip",
        "Visits to valleys, fairy chimneys, and underground city"
      ],
      "tr": [
        "Tüm Alanya otellerinden klimalı otobüsle gidiş-dönüş transfer",
        "Kapadokya'da 1 gece otel konaklaması",
        "Otelde 1 açık büfe akşam yemeği ve 1 açık büfe kahvaltı",
        "Tur boyunca profesyonel kokartlı rehberlik hizmeti",
        "Vadiler, peri bacaları ve yeraltı şehri gezileri"
      ],
      "ru": [
        "Трансфер из/в отель в Аланье на комфортном автобусе",
        "1 ночь проживания в отеле в Каппадокии",
        "1 завтрак и 1 ужин в отеле (\"шведский стол\") ",
        "Услуги профессионального лицензированного гида",
        "Экскурсионная программа по долинам и подземному городу"
      ],
      "de": [
        "Hin- und Rücktransfer ab allen Alanya-Hotels im Reisebus",
        "1 Hotelübernachtung in Kappadokien",
        "1x Frühstücksbuffet und 1x Abendbuffet im Hotel",
        "Professionelle lizenzierte Reiseleitung",
        "Ausflüge zu Tälern, Feenkaminen und unterirdischer Stadt"
      ],
      "pl": [
        "Przejazd klimatyzowanym autokarem z/do hoteli w Alanyi",
        "1 nocleg w hotelu w Kapadocji",
        "1x śniadanie i 1x obiadokolacja w formie bufetu",
        "Opieka profesjonalnego licencjonowanego przewodnika",
        "Program zwiedzania dolin i podziemnego miasta"
      ]
    },
    "notIncluded": {
      "en": [
        "Lunches on Day 1 & Day 2",
        "All drinks during dinners and lunches",
        "Optional Hot Air Balloon flight or sunrise balloon watching tour",
        "Single room supplement (if traveling solo without sharing)",
        "Personal expenses and souvenirs"
      ],
      "tr": [
        "1. ve 2. gün öğle yemekleri",
        "Yemeklerde alınan tüm içecekler",
        "İsteğe bağlı Sıcak Hava Balon Uçuşu veya Balon Seyir Turu",
        "Tek kişi konaklama farkı (single oda tercihi durumunda)",
        "Kişisel harcamalar ve hediyelik eşyalar"
      ],
      "ru": [
        "Обеды в 1-й и 2-й день",
        "Напитки во время приемов пищи",
        "Полет на воздушном шаре или панорамная экскурсия на шары (по желанию)",
        "Доплата за одноместное размещение",
        "Личные расходы"
      ],
      "de": [
        "Mittagessen an Tag 1 und Tag 2",
        "Getränke zu den Mahlzeiten",
        "Optionale Heißluftballonfahrt oder Ballon-Aussichtstour",
        "Einzelzimmerzuschlag (bei Alleinreisenden)",
        "Persönliche Ausgaben"
      ],
      "pl": [
        "Obiady w 1. i 2. dniu wycieczki",
        "Napoje do posiłków",
        "Opcjonalny lot balonem lub panorama balonów o wschodzie słońca",
        "Dopłata do pokoju 1-osobowego (dla osób podróżujących solo)",
        "Wydatki osobiste"
      ]
    },
    "pickupInfo": {
      "tr": "1. Gün sabah 03:00 - 03:45 arası tüm Alanya otellerinden hareket. 2. Gün akşam yaklaşık 20:00 - 21:00 dönüş. (Lütfen transfer saatinde otel güvenlik kulübesinin/bariyerinin dışında bekleyiniz.)",
      "en": "Day 1 departure around 03:00 - 03:45 AM from all Alanya hotels. Day 2 return around 20:00 - 21:00 PM. (Please wait outside the main hotel security gate for your transfer vehicle.)",
      "ru": "Выезд в 1-й день около 03:00 - 03:45 из всех отелей Аланьи. Возвращение во 2-й день около 20:00 - 21:00. (Пожалуйста, ожидайте трансфер снаружи у шлагбаума/будки охраны отеля.)",
      "de": "Abfahrt Tag 1 ca. 03:00 - 03:45 Uhr ab allen Hotels in Alanya. Rückkehr Tag 2 ca. 20:00 - 21:00 Uhr. (Bitte warten Sie für die Abholung draußen an der Hotel-Sicherheitsschranke.)",
      "pl": "Wyjazd w 1. dniu ok. 03:00 - 03:45 ze wszystkich hoteli w Alanyi. Powrót w 2. dniu ok. 20:00 - 21:00. (Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.)"
    },
    "importantInfo": {
      "tr": [
        "Otel güvenlik kuralı: Otel güvenliğinin dışında beklenmesi gerekmektedir (tur araçları otel içine giremez).",
        "Otel kaydı için pasaport veya kimlik kartı gereklidir.",
        "Rahat yürüyüş ayakkabısı, sabah serinliği için hırka/ceket, güneş gözlüğü ve fotoğraf makinesi getirin.",
        "Sıcak hava balon uçuşları hava koşullarına bağlı olup Sivil Havacılık Genel Müdürlüğü onayına tabidir."
      ],
      "en": [
        "Hotel transfer rule: Please wait outside the main hotel security gate (transfer vehicles cannot enter inside).",
        "Passport or ID card required for hotel registration.",
        "Bring comfortable walking shoes, a warm jacket (mornings can be cool), sunglasses, and camera.",
        "Hot air balloon flights are weather dependent and operate strictly under civil aviation authority clearance."
      ],
      "ru": [
        "Правило отеля: Ожидайте трансфер снаружи перед шлагбаумом/будкой охраны (въезд запрещен).",
        "Обязательно возьмите паспорт для заселения в отель.",
        "Удобная обувь для ходьбы, теплая кофта на утро, солнцезащитные очки и фотоаппарат.",
        "Полеты на воздушных шарах зависят от погоды и разрешения гражданской авиации."
      ],
      "de": [
        "Sicherheitsregel: Bitte warten Sie draußen an der Hotel-Sicherheitsschranke (keine Einfahrt aufs Hotelgelände).",
        "Reisepass oder Personalausweis für das Hotel erforderlich.",
        "Bequeme Wanderschuhe, warme Jacke für die kühlen Morgenstunden und Kamera mitbringen.",
        "Ballonfahrten sind wetterabhängig und unterliegen der Genehmigung der Luftfahrtbehörde."
      ],
      "pl": [
        "Zasada transferu: Czekaj na kierowcę na zewnątrz przed szlabanem/bramą ochrony hotelu.",
        "Wymagany paszport lub dowód osobisty do zameldowania w hotelu.",
        "Zabierz wygodne buty, cieplejszą kurtkę na chłodny poranek i aparat.",
        "Loty balonem zależą od warunków atmosferycznych i zgody urzędu lotnictwa."
      ]
    },
    "participantsCount": 1720
  }
];

export const SHOPPING_SERVICES: Record<string, ShoppingService> = {
  "free-shopping-tour": {
    "id": "free-shopping-tour",
    "slug": "free-shopping-tour",
    "title": {
      "en": "VIP Alanya City Shopping Tour",
      "tr": "Ücretsiz VIP Alanya Alışveriş Turu",
      "ru": "Бесплатный VIP шопинг-тур по Аланье",
      "de": "Kostenlose VIP Shopping-Tour Alanya",
      "pl": "Darmowa wycieczka na zakupy VIP Alanya"
    },
    "subtitle": {
      "en": "Free private VIP transfer to Alanya premier outlets and bazaars",
      "tr": "Alanya'nın en iyi mağazalarına ücretsiz özel VIP transfer",
      "ru": "Бесплатный индивидуальный трансфер в лучшие магазины Аланьи",
      "de": "Kostenloser privater Transfer zu den besten Geschäften",
      "pl": "Bezpłatny prywatny transfer do najlepszych centrów handlowych"
    },
    "badge": {
      "en": "100% FREE VIP TRANSFER",
      "tr": "%100 ÜCRETSİZ TRANSFER",
      "ru": "100% БЕСПЛАТНЫЙ ТРАНСФЕР",
      "de": "100% KOSTENLOSER TRANSFER",
      "pl": "100% DARMOWY TRANSFER"
    },
    "isFree": true,
    "priceLabel": {
      "en": "Free Transfer",
      "tr": "Ücretsiz Transfer",
      "ru": "Бесплатный трансфер",
      "de": "Kostenloser Transfer",
      "pl": "Darmowy transfer"
    },
    "description": {
      "en": "Enjoy comfortable, air-conditioned roundtrip VIP transport from your hotel to Alanya's top-rated leather centers, Turkish delight factories, gold bazaars, and textile outlets with no purchase obligation.",
      "tr": "Otelinizden Alanya'nın en seçkin deri merkezlerine, lokum ve baharat fabrikalarına, altın çarşılarına hiçbir satın alma zorunluluğu olmadan klimalı özel VIP araçla ücretsiz gidiş-dönüş transfer keyfi.",
      "ru": "Комфортабельный трансфер из вашего отеля в лучшие магазины кожи, меха, сладостей, золота и текстиля без обязательств совершать покупки.",
      "de": "Bequemer Hoteltransfer im klimatisierten VIP-Fahrzeug zu den besten Leder-, Schmuck- und Textilzentren ohne Kaufzwang.",
      "pl": "Wygodny bezpłatny transfer z hotelu do najlepszych centrów skórzanych, jubilerskich i słodyczy bez obowiązku zakupu."
    },
    "features": {
      "en": [
        "Free private hotel pickup and return anytime",
        "No purchase obligation — browse at your own pace",
        "Air-conditioned VIP vehicle with personal driver",
        "Direct access to licensed tax-free outlets"
      ],
      "tr": [
        "Dilediğiniz saatte ücretsiz otelden gidiş-dönüş transfer",
        "Satın alma zorunluluğu yoktur, dilediğiniz gibi gezin",
        "Klimalı özel VIP araç ve şoför hizmeti",
        "Lisanslı vergisiz (tax-free) seçkin mağazalar"
      ],
      "ru": [
        "Бесплатный трансфер от и до отеля в удобное время",
        "Без обязательств покупки — свободный выбор",
        "Комфортный автомобиль с кондиционером",
        "Лицензированные центры с Tax-Free"
      ],
      "de": [
        "Kostenlose Abholung und Rückfahrt ab Hotel",
        "Kein Kaufzwang — entspanntes Stöbern",
        "Klimatisierter VIP-Wagen mit Chauffeur",
        "Zertifizierte Geschäfte mit Tax-Free"
      ],
      "pl": [
        "Bezpłatny odbiór i powrót do hotelu o dowolnej porze",
        "Brak obowiązku zakupu — pełna swoboda",
        "Klimatyzowany samochód VIP z kierowcą",
        "Certyfikowane sklepy z możliwością Tax-Free"
      ]
    },
    "image": "/assets/images/shopping-tour.jpg",
    "ctaText": {
      "en": "Book Free Shopping Transfer",
      "tr": "Ücretsiz Alışveriş Transferi Çağır",
      "ru": "Заказать бесплатный трансфер",
      "de": "Kostenlosen Transfer buchen",
      "pl": "Zamów darmowy transfer"
    },
    "whatsappText": {
      "en": "Hello! I would like to book a free VIP shopping transfer.",
      "tr": "Merhaba! Ücretsiz VIP alışveriş transferi talep ediyorum.",
      "ru": "Здравствуйте! Хочу заказать бесплатный трансфер на шопинг.",
      "de": "Hallo! Ich möchte einen kostenlosen Shopping-Transfer buchen.",
      "pl": "Dzień dobry! Chciałbym zamówić darmowy transfer na zakupy."
    }
  },
  "jewelry": {
    "id": "jewelry",
    "slug": "jewelry",
    "title": {
      "en": "Fine Gold & Diamond Jewelry Centers",
      "tr": "Pırlanta & Altın Mücevher Merkezleri",
      "ru": "Ювелирные центры золота и бриллиантов",
      "de": "Gold- & Diamantschmuck Zentren",
      "pl": "Centra biżuterii ze złota i diamentów"
    },
    "subtitle": {
      "en": "Certified international craftsmanship, custom designs, and tax-free pricing",
      "tr": "Sertifikalı uluslararası işçilik, özel tasarım ve vergisiz avantajlar",
      "ru": "Сертифицированные изделия, индивидуальный дизайн и Tax-Free",
      "de": "Zertifizierte Juweliere, individuelle Anfertigungen und Tax-Free",
      "pl": "Certyfikowane wyroby, indywidualne projekty i ceny Tax-Free"
    },
    "badge": {
      "en": "VIP JEWELRY EXPERIENCE",
      "tr": "VIP MÜCEVHER DENEYİMİ",
      "ru": "VIP ЮВЕЛИРНЫЙ ШОПИНГ",
      "de": "VIP SCHMUCK ERLEBNIS",
      "pl": "VIP BIŻUTERIA"
    },
    "isFree": true,
    "priceLabel": {
      "en": "Free VIP Transfer",
      "tr": "Ücretsiz VIP Transfer",
      "ru": "Бесплатный трансфер",
      "de": "Kostenloser Transfer",
      "pl": "Darmowy transfer"
    },
    "description": {
      "en": "Visit Alanya's world-renowned jewelry mega-stores. Admire breathtaking collections of 14K and 18K gold, GIA/HRD-certified diamonds, precious gemstones, and custom bespoke master craftsmanship.",
      "tr": "Alanya'nın dünyaca ünlü mücevher merkezlerini ziyaret edin. 14 ve 18 ayar altın koleksiyonları, uluslararası sertifikalı pırlantalar ve usta tasarımcıların özel modelleri.",
      "ru": "Посетите крупнейшие ювелирные центры Аланьи. Коллекции золота 585 и 750 пробы, бриллианты с сертификатами GIA и HRD, индивидуальные заказы.",
      "de": "Entdecken Sie Alanyas renommierte Juweliere. Exklusive Kollektionen aus 14K und 18K Gold, zertifizierte Diamanten und Maßanfertigungen.",
      "pl": "Odwiedź renomowane salony jubilerskie w Alanyi. Kolekcje złota próby 585 i 750, certyfikowane diamenty GIA i autorskie projekty."
    },
    "features": {
      "en": [
        "Free private VIP hotel transfer",
        "Official international gemological certificates",
        "Custom bespoke design and resizing services",
        "Tax-free shopping assistance for tourists"
      ],
      "tr": [
        "Ücretsiz özel VIP otel transferi",
        "Uluslararası resmi mücevher ve pırlanta sertifikaları",
        "Özel ölçü uyarlama ve kişiye özel tasarım",
        "Turistler için Tax-Free vergi iade desteği"
      ],
      "ru": [
        "Бесплатный индивидуальный VIP трансфер",
        "Международные сертификаты подлинности",
        "Подгонка размера и индивидуальный дизайн",
        "Оформление возврата налога Tax-Free"
      ],
      "de": [
        "Kostenloser VIP-Hoteltransfer",
        "Internationale Echtheitszertifikate",
        "Größenanpassung und Sonderanfertigungen",
        "Tax-Free Rückerstattung"
      ],
      "pl": [
        "Darmowy transfer VIP z hotelu",
        "Międzynarodowe certyfikaty autentyczności",
        "Dopasowanie rozmiaru i projekty na zamówienie",
        "Obsługa zwrotu podatku Tax-Free"
      ]
    },
    "image": "/assets/images/jewelry.jpg",
    "ctaText": {
      "en": "Book Jewelry VIP Transfer",
      "tr": "Mücevher Transferi Çağır",
      "ru": "Заказать трансфер в ювелирный центр",
      "de": "Schmuck-Transfer anfragen",
      "pl": "Zamów transfer do salonu"
    },
    "whatsappText": {
      "en": "Hello! I am interested in visiting a certified jewelry center with free VIP transfer.",
      "tr": "Merhaba! Ücretsiz VIP transfer ile sertifikalı mücevher merkezini ziyaret etmek istiyorum.",
      "ru": "Здравствуйте! Интересует посещение ювелирного центра с бесплатным трансфером.",
      "de": "Hallo! Ich interessiere mich für einen Besuch im Schmuckzentrum mit VIP-Transfer.",
      "pl": "Dzień dobry! Chciałbym odwiedzić centrum jubilerskie z darmowym transferem VIP."
    }
  },
  "butik": {
    "id": "butik",
    "slug": "butik",
    "title": {
      "en": "Luxury Leather & Fur Boutiques",
      "tr": "Lüks Deri & Kürk Butikleri",
      "ru": "Бутики кожи и меха класса люкс",
      "de": "Luxus Leder- & Pelz-Boutiquen",
      "pl": "Luksusowe butiki skórzane i futrzarskie"
    },
    "subtitle": {
      "en": "Handmade lambskin jackets, shearling coats, and stylish designer accessories",
      "tr": "El yapımı kuzu derisi ceketler, kabanlar ve şık tasarım çantalar",
      "ru": "Куртки из нежнейшей кожи ягненка, дубленки и стильные аксессуары",
      "de": "Handgefertigte Lammlederjacken, Mäntel und Designer-Accessoires",
      "pl": "Ręcznie szyte kurtki z miękkiej skóry jagnięcej, kożuchy i akcesoria"
    },
    "badge": {
      "en": "PREMIUM LEATHER FASHION",
      "tr": "PREMİUM DERİ MODASI",
      "ru": "ПРЕМИАЛЬНАЯ КОЖА",
      "de": "PREMIUM LEDERMODE",
      "pl": "MODA SKÓRZANA"
    },
    "isFree": true,
    "priceLabel": {
      "en": "Free VIP Transfer",
      "tr": "Ücretsiz VIP Transfer",
      "ru": "Бесплатный трансфер",
      "de": "Kostenloser Transfer",
      "pl": "Darmowy transfer"
    },
    "description": {
      "en": "Explore Turkey's legendary leather craft at elite showrooms. Discover exquisite lightweight lambskin jackets, reversible shearling coats, designer handbags, and tailored leather apparel at manufacturer prices.",
      "tr": "Türkiye'nin dünyaca ünlü deri işçiliğini seçkin showroomlarda keşfedin. Hafif kuzu derisi ceketler, çift taraflı montlar, özel tasarım çantalar ve üretici fiyat avantajı.",
      "ru": "Легендарное турецкое качество кожи в премиальных шоурумах. Легкие кожаные куртки, дубленки, сумки и обувь по ценам фабрики.",
      "de": "Erleben Sie türkische Lederhandwerkskunst in erstklassigen Showrooms. Weiche Lederjacken, Lammfellmäntel und Taschen zu Herstellerpreisen.",
      "pl": "Poznaj słynne tureckie wyroby skórzane w eleganckich salonach. Kurtki z miękkiej skóry, kożuchy i torebki w cenach producenckich."
    },
    "features": {
      "en": [
        "Free door-to-door VIP hotel transfer",
        "100% genuine premium lambskin and leather",
        "Complimentary in-house tailoring and customization",
        "Export worldwide shipping available"
      ],
      "tr": [
        "Kapıdan kapıya ücretsiz VIP otel transferi",
        "%100 hakiki kuzu derisi ve kaliteli malzeme",
        "Ücretsiz terzi ve kişiye özel uyarlama",
        "Dünya geneline adrese teslim kargo imkanı"
      ],
      "ru": [
        "Бесплатный трансфер от двери отеля",
        "100% натуральная кожа и качественный пошив",
        "Бесплатная подгонка по фигуре в ателье",
        "Возможность доставки покупок на дом"
      ],
      "de": [
        "Kostenloser Tür-zu-Tür VIP-Transfer",
        "100% echtes Premium-Leder",
        "Kostenlose Anpassung durch hauseigene Schneider",
        "Weltweiter Versand möglich"
      ],
      "pl": [
        "Darmowy transfer VIP od drzwi hotelu",
        "100% naturalna skóra jagnięca najwyższej jakości",
        "Bezpłatne dopasowanie krawieckie na miejscu",
        "Możliwość wysyłki zakupów do Polski"
      ]
    },
    "image": "/assets/images/butik-leather-apparel.jpg",
    "ctaText": {
      "en": "Book Leather Boutique Transfer",
      "tr": "Deri Butiği Transferi Çağır",
      "ru": "Заказать трансфер в магазин кожи",
      "de": "Leder-Boutique Transfer anfragen",
      "pl": "Zamów transfer do salonu skór"
    },
    "whatsappText": {
      "en": "Hello! I would like to visit the luxury leather showroom with complimentary VIP transfer.",
      "tr": "Merhaba! Ücretsiz VIP transfer ile deri showroomunu ziyaret etmek istiyorum.",
      "ru": "Здравствуйте! Хочу посетить бутик кожи с бесплатным трансфером.",
      "de": "Hallo! Ich möchte die Lederboutique mit kostenlosem VIP-Transfer besuchen.",
      "pl": "Dzień dobry! Chciałbym odwiedzić butik skórzany z darmowym transferem VIP."
    }
  },
  "tattoo": {
    "id": "tattoo",
    "slug": "tattoo",
    "title": {
      "en": "Professional Art & Tattoo Studios",
      "tr": "Profesyonel Dövme & Sanat Stüdyoları",
      "ru": "Профессиональные тату-студии",
      "de": "Professionelle Tattoo- & Kunststudios",
      "pl": "Profesjonalne studia tatuażu i sztuki"
    },
    "subtitle": {
      "en": "Award-winning artists, 100% sterile European hygienic standards, custom artwork",
      "tr": "Ödüllü sanatçılar, %100 steril Avrupa hijyen standartları, özel tasarımlar",
      "ru": "Опытные мастера, стерильность по европейским стандартам, авторские эскизы",
      "de": "Erfahrene Tattoo-Künstler, europäische Hygienestandards, individuelle Entwürfe",
      "pl": "Nagradzani artyści, europejskie standardy higieny, autorskie projekty"
    },
    "badge": {
      "en": "LICENSED ART STUDIO",
      "tr": "LİSANSLI SANAT STÜDYOSU",
      "ru": "ЛИЦЕНЗИРОВАННАЯ СТУДИЯ",
      "de": "LIZENZIERTES STUDIO",
      "pl": "LICENCJONOWANE STUDIO"
    },
    "isFree": true,
    "priceLabel": {
      "en": "Free Consultation Transfer",
      "tr": "Ücretsiz Danışma Transferi",
      "ru": "Бесплатный трансфер на консультацию",
      "de": "Kostenloser Transfer zur Beratung",
      "pl": "Darmowy transfer na konsultację"
    },
    "description": {
      "en": "Turn your Alanya holiday memory into a masterpiece. Connect with certified tattoo artists specializing in realism, fine-line, watercolor, and cover-ups under hospital-grade sterile conditions with single-use equipment.",
      "tr": "Alanya tatil anınızı kalıcı bir sanat eserine dönüştürün. Realizm, fine-line, suluboya ve cover-up alanlarında uzman, tek kullanımlık steril ekipman kullanan lisanslı dövme sanatçıları.",
      "ru": "Превратите воспоминания об отдыхе в шедевр. Опытные мастера реализма, графики, акварели и перекрытий в условиях абсолютной стерильности.",
      "de": "Verwandeln Sie Ihre Urlaubserinnerung in ein Kunstwerk. Professionelle Tätowierer für Realismus, Fine-Line und Cover-Ups unter strengsten Hygieneauflagen.",
      "pl": "Zabierz wyjątkową pamiątkę z wakacji. Certyfikowani artyści tatuażu specjalizujący się w realizmie, fine-line i cover-upach przy zachowaniu sterylnych standardów."
    },
    "features": {
      "en": [
        "Free hotel transfer for consultation and design",
        "Hospital-grade sterilization and single-use needles",
        "Custom original sketches and cover-up specialists",
        "EU certified vegan inks"
      ],
      "tr": [
        "Tasarım ve danışma için ücretsiz otel transferi",
        "Hastane standardında sterilizasyon ve tek kullanımlık iğneler",
        "Kişiye özel orijinal çizimler ve cover-up uzmanlığı",
        "AB sertifikalı kaliteli vegan mürekkepler"
      ],
      "ru": [
        "Бесплатный трансфер на консультацию из отеля",
        "Стерилизация медицинского уровня и одноразовые расходники",
        "Индивидуальная разработка эскизов",
        "Качественные сертифицированные пигменты"
      ],
      "de": [
        "Kostenloser Transfer zur Beratung ab Hotel",
        "Medizinische Sterilität und Einweg-Nadeln",
        "Individuelle Entwürfe und Cover-Up Spezialisten",
        "Zertifizierte Qualitäts-Farben"
      ],
      "pl": [
        "Darmowy transfer z hotelu na bezpłatną konsultację",
        "Medyczne standardy sterylizacji i jednorazowy sprzęt",
        "Indywidualne projekty i poprawki starych tatuaży",
        "Certyfikowane europejskie tusze najwyższej jakości"
      ]
    },
    "image": "/assets/images/tattoo.jpg",
    "ctaText": {
      "en": "Book Studio Consultation Transfer",
      "tr": "Stüdyo Transferi Çağır",
      "ru": "Заказать трансфер в студию",
      "de": "Tattoo-Studio Transfer anfragen",
      "pl": "Zamów transfer do studia"
    },
    "whatsappText": {
      "en": "Hello! I would like to consult with a tattoo artist and get a free studio transfer.",
      "tr": "Merhaba! Dövme tasarımı için stüdyoya ücretsiz transfer talep ediyorum.",
      "ru": "Здравствуйте! Хочу проконсультироваться с мастером тату и заказать трансфер.",
      "de": "Hallo! Ich möchte ein Tattoo-Studio für eine Beratung mit Transfer besuchen.",
      "pl": "Dzień dobry! Chciałbym skonsultować wzór tatuażu i skorzystać z darmowego transferu."
    }
  }
};
