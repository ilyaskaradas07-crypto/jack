import { GoogleGenAI } from '@google/genai';
import { TRIPORA_KNOWLEDGE_BASE } from './knowledgeBase.ts';

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface ChatRequestPayload {
  message: string;
  language?: 'en' | 'tr' | 'ru' | 'de' | 'pl' | 'uk' | 'ro' | 'sr';
  history?: ChatMessage[];
}

export interface ChatResponsePayload {
  success: boolean;
  reply: string;
  recommendedTourSlugs: string[];
  isBookingRequest: boolean;
  bookingData?: {
    tour?: string;
    date?: string;
    adults?: string | number;
    children?: string | number;
    hotel?: string;
  };
  whatsappUrl: string;
  error?: string;
}

const OFFICIAL_WHATSAPP_NUMBER = '905051422116';

export function buildWhatsAppUrl(prefilledText: string): string {
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(prefilledText)}`;
}

export async function processChatRequest(payload: ChatRequestPayload): Promise<ChatResponsePayload> {
  const rawMessage = (payload.message || '').trim().slice(0, 1000);
  const targetLanguage = payload.language || 'en';
  const history = Array.isArray(payload.history) ? payload.history.slice(-10) : [];

  if (!rawMessage) {
    return {
      success: true,
      reply: targetLanguage === 'tr'
        ? 'Merhaba! Size Alanya turları ve tatil deneyimlerinde nasıl yardımcı olabilirim?'
        : targetLanguage === 'ru'
        ? 'Здравствуйте! Чем я могу помочь вам в выборе экскурсий в Аланье?'
        : targetLanguage === 'de'
        ? 'Hallo! Wie kann ich Ihnen bei der Auswahl Ihrer Alanya-Touren helfen?'
        : targetLanguage === 'pl'
        ? 'Dzień dobry! W czym mogę pomóc przy wyborze najlepszych wycieczek i atrakcji w Alanyi?'
        : targetLanguage === 'uk'
        ? 'Вітаю! Чим я можу допомогти вам у виборі найкращих турів та екскурсій в Аланії?'
        : targetLanguage === 'ro'
        ? 'Bună ziua! Cu ce vă pot ajuta în alegerea celor mai bune excursii și aventuri în Alanya?'
        : targetLanguage === 'sr'
        ? 'Dobar dan! Kako vam mogu pomoći oko izbora najboljih izleta i tura u Alanji?'
        : 'Hello! How can I help you choose the best tours and experiences in Alanya?',
      recommendedTourSlugs: [],
      isBookingRequest: false,
      whatsappUrl: buildWhatsAppUrl('Hello Tripora Alanya, I would like to inquire about tours.'),
    };
  }

  const languagePromptInstruction = `
User's interface language is set to: "${targetLanguage}" (${
    targetLanguage === 'tr' ? 'Turkish / Türkçe' :
    targetLanguage === 'ru' ? 'Russian / Русский' :
    targetLanguage === 'de' ? 'German / Deutsch' :
    targetLanguage === 'pl' ? 'Polish / Polski' :
    targetLanguage === 'uk' ? 'Ukrainian / Українська' :
    targetLanguage === 'ro' ? 'Romanian / Română' :
    targetLanguage === 'sr' ? 'Serbian / Srpski' :
    'English'
  }).
STRICT MULTILINGUAL RULE:
- If the user writes in English, reply in natural, fluent English.
- If the user writes in Turkish, reply in natural, fluent Turkish (Türkçe).
- If the user writes in Russian, reply in natural, fluent Russian (Русский).
- If the user writes in German, reply in natural, fluent German (Deutsch).
- If the user writes in Polish, reply in natural, fluent Polish (Polski).
- If the user writes in Ukrainian, reply in natural, fluent Ukrainian (Українська).
- If the user writes in Romanian, reply in natural, fluent Romanian (Română).
- If the user writes in Serbian, reply in natural, fluent Serbian (Srpski).
- If the language of their message is ambiguous (e.g. short query like "Prices" or "Transfer"), answer in their interface language ("${targetLanguage}").
`;

  const systemInstruction = `
You are "Tripora Travel Assistant", the official AI customer support and travel specialist for TRIPORA ALANYA.
Your main purpose is to help visitors choose the right tours in Alanya, answer questions accurately using the knowledge base, and guide them toward booking through WhatsApp (+90 505 142 21 16).

KNOWLEDGE BASE:
${TRIPORA_KNOWLEDGE_BASE}

${languagePromptInstruction}

STRICT BEHAVIOR RULES:
1. AIRPORT TRANSFER (VIP MERCEDES VITO):
   - Gazipaşa Airport (GZP) Transfer: €50 fixed price per vehicle (up to 8 passengers).
   - Antalya Airport (AYT) Transfer: €80 fixed price per vehicle (up to 8 passengers).
   - Private, air-conditioned Mercedes-Benz Vito van, flight monitoring, baggage assistance, direct door-to-door hotel service.
   - Coordinate and confirm instantly on WhatsApp (+90 505 142 21 16).
2. EXACT TOUR PRICES:
   - Alanya Boat Tour: €22
   - Quad Safari: €25
   - Diving: €40
   - Green Canyon: €40
   - Rafting: €30
   - Rafting 3-in-1: €38
   - Land of Legends Night Show: €23
   - Buggy Safari: €35
   - Private Yacht: €700 per yacht
   - Paragliding: €65
   - Antalya City Tour: €55
   - Alanya City Tour: €40
   - Pamukkale: €75
   - Cappadocia 2-Day: €130
   - Demre & Myra: €75
   - NEVER invent or alter any tour price!
3. SHOPPING PRICES:
   - Free Shopping Tour: €0 / FREE
   - Jewelry: PRICE ON REQUEST
   - Butik: PRICE ON REQUEST
   - Tattoo: PRICE ON REQUEST
   - NEVER invent prices for Jewelry, Butik, or Tattoo!
4. BOOKING PROCESS:
   - When a user asks to book or says "I want to book", ask for their tour choice, preferred date, adults count, children count, and hotel name.
   - Summarize with:
     BOOKING REQUEST
     Tour: [Tour Name]
     Date: [Date]
     Adults: [Count]
     Children: [Count]
     Hotel: [Hotel Name]
   - NEVER say "Your reservation is confirmed". Always state that our team on WhatsApp will confirm the schedule and details.
5. RECOMMENDED TOURS TAG:
   Whenever you recommend 1 to 3 specific tours from the catalog, add this exact tag on its own line at the end:
   [RECOMMENDED_TOURS: ["slug1", "slug2"]]
   Use only valid slugs from the catalog.
6. UNKNOWN INFO:
   If you don't have information, say:
   "I don't have that information available right now. Our Tripora team can confirm it for you on WhatsApp."
7. KEEP ANSWERS CONCISE:
   Keep paragraphs concise, natural, friendly, and easy to read on mobile devices.
`;

  try {
    const ai = getAiClient();

    // Map chat history to contents format, guaranteeing clean alternating user/model turns
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    let lastRole: 'user' | 'model' | null = null;
    for (const item of history) {
      if (item.content && (item.role === 'user' || item.role === 'model')) {
        // Enforce strictly alternating turns to avoid Gemini API consecutive-role errors
        if (item.role !== lastRole) {
          contents.push({
            role: item.role,
            parts: [{ text: item.content.slice(0, 1000) }],
          });
          lastRole = item.role;
        }
      }
    }

    // If the last turn was already 'user', remove it so the new rawMessage replaces it
    if (contents.length > 0 && contents[contents.length - 1].role === 'user') {
      contents.pop();
    }

    // Add current user prompt as the final turn
    contents.push({
      role: 'user',
      parts: [{ text: rawMessage }],
    });

    let responseText = '';
    let lastError: unknown = null;
    // gemini-flash-latest and gemini-3.1-flash-lite are fastest and actively available; gemini-3.8-flash as backup
    const candidateModels = ['gemini-flash-latest', 'gemini-3.1-flash-lite', 'gemini-3.8-flash'];

    for (const modelName of candidateModels) {
      try {
        const generatePromise = ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction: {
              parts: [{ text: systemInstruction }],
            },
            temperature: 0.4,
            maxOutputTokens: 800,
          },
        });

        // 7-second timeout race per model to prevent hangs if any model is rate-limited or in high-demand
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error(`Timeout with model ${modelName}`)), 7000)
        );

        const response = await Promise.race([generatePromise, timeoutPromise]);

        if (response && response.text) {
          responseText = response.text;
          break;
        }
      } catch (callErr: unknown) {
        lastError = callErr;
        const msg = callErr instanceof Error ? callErr.message : String(callErr);
        console.warn(`[Tripora AI Chat] Model ${modelName} call failed (${msg}), trying fallback model...`);
      }
    }

    if (!responseText && lastError) {
      throw lastError;
    }

    const rawReply = responseText;

    // Extract recommended tour slugs: [RECOMMENDED_TOURS: ["slug1", "slug2"]]
    const tagMatch = rawReply.match(/\[RECOMMENDED_TOURS:\s*(\[[^\]]*\])\]/i);
    let recommendedTourSlugs: string[] = [];
    let cleanReply = rawReply;

    if (tagMatch && tagMatch[1]) {
      try {
        const parsed = JSON.parse(tagMatch[1]);
        if (Array.isArray(parsed)) {
          recommendedTourSlugs = parsed.filter((s) => typeof s === 'string');
        }
      } catch {
        // Regex fallback
        const items = tagMatch[1].match(/["']([^"']+)["']/g);
        if (items) {
          recommendedTourSlugs = items.map((s) => s.replace(/["']/g, ''));
        }
      }
      cleanReply = cleanReply.replace(tagMatch[0], '').trim();
    }

    // Check if reply represents a booking request summary
    const isBookingRequest =
      cleanReply.includes('BOOKING REQUEST') ||
      cleanReply.includes('REZERVASYON TALEBİ') ||
      cleanReply.includes('ЗАПРОС НА БРОНИРОВАНИЕ') ||
      cleanReply.includes('BUCHUNGSANFRAGE');

    // Create dynamic prefilled WhatsApp message based on context
    const whatsappPrefill = isBookingRequest
      ? `Hello Tripora Alanya, I would like to send a booking request via the AI Assistant:\n\n${cleanReply}`
      : `Hello Tripora Alanya, I was chatting with your Travel Assistant about: ${rawMessage.slice(0, 100)}`;

    return {
      success: true,
      reply: cleanReply,
      recommendedTourSlugs,
      isBookingRequest,
      whatsappUrl: buildWhatsAppUrl(whatsappPrefill),
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error('[Tripora AI Chat] Gemini API error:', errorMsg);

    // Smart resilient local fallback matching user message to knowledge base
    const lower = rawMessage.toLowerCase();
    let fallbackReply = '';
    let fallbackSlugs: string[] = [];

    if (lower.includes('tekne') || lower.includes('boat') || lower.includes('лодка') || lower.includes('корабл') || lower.includes('schiff') || lower.includes('rejs')) {
      fallbackSlugs = ['alanya-boat-tour'];
      if (targetLanguage === 'tr') {
        fallbackReply = '⛵ **Alanya Tekne Turu**: Kişi başı **22 €** (tam gün, ~6 saat). Korsanlar, Aşıklar ve Fosforlu Mağaraları, Kleopatra Plajı açıkları ve açık büfe öğle yemeği dahildir. Ön ödeme gerekmez!';
      } else if (targetLanguage === 'ru') {
        fallbackReply = '⛵ **Морская прогулка на корабле в Аланье**: **22 €** с человека (полный день, ~6 часов). Включает пещеры (Пиратская, Влюбленных, Фосфорная), пляж Клеопатры и обед «шведский стол» на борту!';
      } else if (targetLanguage === 'de') {
        fallbackReply = '⛵ **Alanya Bootstour**: **22 €** pro Person (Ganztägig, ~6 Std.). Inklusive Piraten-, Liebes- und Phosphorhöhle, Kleopatra-Strand und Mittagsbuffet an Bord!';
      } else if (targetLanguage === 'pl') {
        fallbackReply = '⛵ **Rejs statkiem po Alanyi**: **22 €** za osobę (cały dzień, ~6 godz.). W cenie jaskinie (Piratów, Kochanków, Fosforowa), widok na Plażę Kleopatry oraz lunch w formie bufetu!';
      } else if (targetLanguage === 'uk') {
        fallbackReply = '⛵ **Піратська прогулянка на кораблі в Аланії**: **22 €** з особи (повний день, ~6 годин). Включає печери піратів, пляж Клеопатри, пінну дискотеку та обід шведський стіл!';
      } else {
        fallbackReply = '⛵ **Alanya Boat Tour**: **€22** per person (Full day, ~6 hours). Includes Pirates, Lovers, and Phosphorous Caves, Cleopatra Beach swim stops, and open buffet lunch on board!';
      }
    } else if (lower.includes('transfer') || lower.includes('havaliman') || lower.includes('airport') || lower.includes('аэропорт') || lower.includes('flughafen') || lower.includes('lotnisk')) {
      fallbackSlugs = ['gazipasa-airport-transfer', 'antalya-airport-transfer'];
      if (targetLanguage === 'tr') {
        fallbackReply = '🚐 **VIP Havalimanı Transferi (Özel Mercedes-Benz Vito)**:\n- **Gazipaşa Alanya (GZP)**: Araç başı **50 €** (8 kişiye kadar)\n- **Antalya Havalimanı (AYT)**: Araç başı **80 €** (8 kişiye kadar)\nUçuş takibi, bagaj yardımı ve kapıdan kapıya özel VIP servis dahildir!';
      } else if (targetLanguage === 'ru') {
        fallbackReply = '🚐 **VIP Трансфер из аэропорта (Mercedes-Benz Vito)**:\n- **Газипаша Аланья (GZP)**: **50 €** за автомобиль (до 8 чел.)\n- **Аэропорт Анталья (AYT)**: **80 €** за автомобиль (до 8 чел.)\nОтслеживание рейсов, помощь с багажом и доставка прямо до вашего отеля!';
      } else if (targetLanguage === 'de') {
        fallbackReply = '🚐 **VIP Flughafentransfer (Mercedes-Benz Vito)**:\n- **Gazipaşa Alanya (GZP)**: **50 €** pro Fahrzeug (bis zu 8 Pers.)\n- **Flughafen Antalya (AYT)**: **80 €** pro Fahrzeug (bis zu 8 Pers.)\nFlugüberwachung, Gepäckservice und direkter Hoteltransfer inklusive!';
      } else {
        fallbackReply = '🚐 **VIP Airport Transfer (Mercedes-Benz Vito)**:\n- **Gazipaşa Airport (GZP)**: **€50** per vehicle (up to 8 passengers)\n- **Antalya Airport (AYT)**: **€80** per vehicle (up to 8 passengers)\nIncludes flight monitoring, luggage assistance, and door-to-door hotel service!';
      }
    } else if (lower.includes('yat') || lower.includes('yacht') || lower.includes('яхт') || lower.includes('jacht')) {
      fallbackSlugs = ['private-yacht-tour'];
      if (targetLanguage === 'tr') {
        fallbackReply = '🛥️ **Özel Lüks Motor Yat Kiralama**: Yat başı **700 €** (en fazla 12 misafir). Kaptan, yakıt, barbekü öğle/akşam yemeği, meyve ikramı ve özel yüzme koyları dahildir.';
      } else {
        fallbackReply = '🛥️ **Private Luxury Motor Yacht Charter**: **€700** per yacht (up to 12 guests). Includes captain, fuel, barbecue lunch/dinner, soft drinks, and private swimming bays.';
      }
    } else if (lower.includes('quad') || lower.includes('safari') || lower.includes('atv') || lower.includes('buggy') || lower.includes('сафари')) {
      fallbackSlugs = ['quad-safari', 'buggy-safari'];
      if (targetLanguage === 'tr') {
        fallbackReply = '🏎️ **Safari Turlarımız**:\n- **Quad (ATV) Safari**: **25 €** (Toros Dağları patikaları)\n- **Buggy Safari**: **35 €**\nOtel transferi, profesyonel rehber ve ekipmanlar dahildir.';
      } else {
        fallbackReply = '🏎️ **Off-Road Safari Experiences**:\n- **Quad (ATV) Safari**: **€25** (Taurus Mountain trails)\n- **Buggy Safari**: **€35**\nIncludes hotel transfer, safety gear, and experienced guides.';
      }
    } else if (lower.includes('fiyat') || lower.includes('price') || lower.includes('цен') || lower.includes('preis') || lower.includes('cen')) {
      fallbackSlugs = ['alanya-boat-tour', 'quad-safari', 'diving-tour'];
      if (targetLanguage === 'tr') {
        fallbackReply = '💰 **TRIPORA ALANYA Popüler Tur Fiyatları (Kişi Başı)**:\n- Alanya Tekne Turu: **22 €**\n- Quad (ATV) Safari: **25 €**\n- Rafting: **30 €**\n- Buggy Safari: **35 €**\n- Dalış (Diving): **40 €**\n- Green Canyon: **40 €**\n- Yamaç Paraşütü: **65 €**\n- Havalimanı Transferi (VIP Vito): GZP **50 €** / AYT **80 €**\n- Ücretsiz Alışveriş Turu: **0 € (Ücretsiz Servis)**';
      } else {
        fallbackReply = '💰 **TRIPORA ALANYA Popular Tour Prices (Per Person)**:\n- Alanya Boat Tour: **€22**\n- Quad (ATV) Safari: **€25**\n- Rafting: **€30**\n- Buggy Safari: **€35**\n- Scuba Diving: **€40**\n- Green Canyon: **€40**\n- Paragliding: **€65**\n- VIP Airport Transfer (Vito): GZP **€50** / AYT **€80**\n- Free Shopping Experience: **€0 (Free Shuttle)**';
      }
    }

    if (!fallbackReply) {
      const fallbackReplies: Record<string, string> = {
        en: "Hello! I am Tripora's Travel Assistant. How can I help you choose the best tours and experiences in Alanya? You can ask about boat tours (€22), safari (€25), VIP airport transfer (€50/€80), or book instantly on WhatsApp (+90 505 142 21 16)!",
        tr: "Merhaba! Ben Tripora Seyahat Asistanı. Size Alanya turlarında nasıl yardımcı olabilirim? Tekne turu (22 €), ATV safari (25 €), VIP transfer (50 € / 80 €) veya dilediğiniz tur hakkında soru sorabilir, WhatsApp üzerinden (+90 505 142 21 16) hemen rezervasyon yapabilirsiniz!",
        ru: "Здравствуйте! Я туристический помощник Tripora. Чем я могу помочь вам в выборе экскурсий в Аланье? Морская прогулка (22 €), сафари на квадроциклах (25 €), VIP трансфер (50 € / 80 €) или бронирование в WhatsApp (+90 505 142 21 16)!",
        de: "Hallo! Ich bin Triporas Reiseassistent. Wie kann ich Ihnen bei Touren in Alanya helfen? Bootstour (22 €), Quad Safari (25 €), VIP Transfer (50 € / 80 €) oder sofortige Buchung über WhatsApp (+90 505 142 21 16)!",
        pl: "Dzień dobry! Jestem asystentem podróży Tripora. W czym mogę pomóc? Rejs statkiem (22 €), Quad Safari (25 €), transfer VIP (50 € / 80 €) lub rezerwacja przez WhatsApp (+90 505 142 21 16)!",
        uk: "Привіт! Я туристичний помічник Tripora. Чим я можу допомогти вам? Морська прогулянка (22 €), сафарі на квадроциклах (25 €), VIP трансфер (50 € / 80 €) або бронювання через WhatsApp (+90 505 142 21 16)!",
      };
      fallbackReply = fallbackReplies[targetLanguage] || fallbackReplies.en;
    }

    return {
      success: true,
      reply: fallbackReply,
      recommendedTourSlugs: fallbackSlugs,
      isBookingRequest: false,
      whatsappUrl: buildWhatsAppUrl(`Hello Tripora Alanya, inquiring about: ${rawMessage.slice(0, 100)}`),
      error: errorMsg,
    };
  }
}
