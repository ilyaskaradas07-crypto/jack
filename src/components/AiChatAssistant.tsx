import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  MessageCircle, 
  RotateCcw, 
  Compass, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users
} from 'lucide-react';
import { Language, Tour } from '../types';
import { TOURS_DATA } from '../data/toursData';
import { createWhatsAppLink, BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
  recommendedTourSlugs?: string[];
  isBookingRequest?: boolean;
  whatsappUrl?: string;
}

interface AiChatAssistantProps {
  currentLang: Language;
  onLanguageChange?: (lang: Language) => void;
  onSelectTour?: (tour: Tour) => void;
  onBookTour?: (tour: Tour) => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const STORAGE_KEY = 'tripora_chat_messages_v1';
const CHAT_OPEN_KEY = 'tripora_chat_open_v1';

const QUICK_ACTIONS: Record<Language, Array<{ label: string; prompt: string }>> = {
  en: [
    { label: 'Turkish Bath & Spa (€20)', prompt: 'Tell me about the Turkish Bath (Hamam) in Alanya and what is included for €20.' },
    { label: 'Find a Tour', prompt: 'Help me find the best tour in Alanya.' },
    { label: 'Best for Families', prompt: 'What are the best tours for families with children?' },
    { label: 'Adventure Tours', prompt: 'I want an adventure tour. What do you recommend?' },
    { label: 'Boat Tours', prompt: 'Tell me about the boat tours in Alanya and prices.' },
    { label: 'Private Yacht', prompt: 'How much is the private yacht charter and what is included?' },
    { label: 'Airport Transfer', prompt: 'Is airport transfer free?' },
    { label: 'Shopping', prompt: 'What shopping and jewelry experiences do you offer?' },
    { label: 'All Tour Prices', prompt: 'What are the prices for all your tours?' },
    { label: 'Book on WhatsApp', prompt: 'I want to book a tour with Tripora.' },
  ],
  tr: [
    { label: 'Türk Hamamı (20€)', prompt: '20€ olan Alanya Türk Hamamı paketi ve nelerin dahil olduğu hakkında detaylı bilgi verir misin?' },
    { label: 'Tur Bul', prompt: 'Alanya\'da en uygun turu bulmama yardımcı ol.' },
    { label: 'Aileler İçin', prompt: 'Çocuklu aileler için en uygun turlar hangileri?' },
    { label: 'Macera Turları', prompt: 'Macera turlarınız neler ve fiyatları ne kadar?' },
    { label: 'Tekne Turları', prompt: 'Alanya tekne turu hakkında bilgi ve fiyat verir misin?' },
    { label: 'Özel Yat', prompt: 'Özel yat kiralama fiyatı ne kadar ve neler dahil?' },
    { label: 'Havalimanı Transferi', prompt: 'Havalimanı transferi ücretsiz mi?' },
    { label: 'Alışveriş', prompt: 'Alışveriş, kuyumcu ve butik hizmetleriniz hakkında bilgi verir misin?' },
    { label: 'Tüm Fiyatlar', prompt: 'Tüm turlarınızın güncel kişi başı fiyatları nedir?' },
    { label: 'WhatsApp ile Rezervasyon', prompt: 'Tripora ile tur rezervasyonu yapmak istiyorum.' },
  ],
  ru: [
    { label: 'Турецкий хамам (20€)', prompt: 'Расскажите о турецком хамаме в Аланье за 20€ и что входит в спа-программу.' },
    { label: 'Подобрать тур', prompt: 'Помогите выбрать лучшую экскурсию в Аланье.' },
    { label: 'Для семей с детьми', prompt: 'Какие экскурсии лучше всего подходят для семей с детьми?' },
    { label: 'Экстрим и сафари', prompt: 'Хочу активный отдых. Что вы порекомендуете?' },
    { label: 'Морские прогулки', prompt: 'Расскажите о морских прогулках на корабле и ценах.' },
    { label: 'Аренда яхты', prompt: 'Сколько стоит аренда частной яхты и что входит?' },
    { label: 'Трансфер из аэропорта', prompt: 'Трансфер из аэропорта бесплатный?' },
    { label: 'Шопинг и ювелирка', prompt: 'Расскажите про бесплатный шопинг-тур и ювелирный салон.' },
    { label: 'Цены на все туры', prompt: 'Какие цены на все ваши экскурсии?' },
    { label: 'Бронь в WhatsApp', prompt: 'Я хочу забронировать экскурсию через WhatsApp.' },
  ],
  de: [
    { label: 'Türkisches Hamam (20€)', prompt: 'Erzählen Sie mir vom traditionellen türkischen Hamam in Alanya für 20€ und was enthalten ist.' },
    { label: 'Tour finden', prompt: 'Helfen Sie mir, die beste Tour in Alanya zu finden.' },
    { label: 'Beste für Familien', prompt: 'Welche Touren eignen sich am besten für Familien mit Kindern?' },
    { label: 'Abenteuertouren', prompt: 'Ich suche Abenteuer. Was empfehlen Sie?' },
    { label: 'Bootstouren', prompt: 'Erzählen Sie mir von der Alanya Bootstour und den Preisen.' },
    { label: 'Private Motoryacht', prompt: 'Wie viel kostet die private Yachtcharter und was ist inklusive?' },
    { label: 'Flughafentransfer', prompt: 'Ist der Flughafentransfer kostenlos?' },
    { label: 'Shopping & Schmuck', prompt: 'Welche Shopping- und Juwelier-Erlebnisse bieten Sie an?' },
    { label: 'Alle Tourpreise', prompt: 'Was kosten alle Ihre Touren im Überblick?' },
    { label: 'Über WhatsApp buchen', prompt: 'Ich möchte eine Tour bei Tripora anfragen.' },
  ],
  pl: [
    { label: 'Łaźnia turecka Hamam (20€)', prompt: 'Opowiedz mi o tradycyjnej łaźni tureckiej Hamam w Alanyi za 20€ i co wchodzi w skład pakietu.' },
    { label: 'Znajdź wycieczkę', prompt: 'Pomóż mi znaleźć najlepszą wycieczkę w Alanyi.' },
    { label: 'Dla rodzin z dziećmi', prompt: 'Jakie wycieczki są najlepsze dla rodzin z dziećmi?' },
    { label: 'Wycieczki przygodowe', prompt: 'Szukam aktywnego wypoczynku i przygody. Co polecasz?' },
    { label: 'Rejsy statkiem', prompt: 'Opowiedz mi o rejsach statkiem po Alanyi i ich cenach.' },
    { label: 'Prywatny jacht', prompt: 'Ile kosztuje wynajem prywatnego jachtu i co jest w cenie?' },
    { label: 'Transfer z lotniska', prompt: 'Czy transfer z lotniska jest bezpłatny?' },
    { label: 'Zakupy i biżuteria', prompt: 'Jakie zakupy i salony jubilerskie oferujecie w Alanyi?' },
    { label: 'Ceny wszystkich wycieczek', prompt: 'Jakie są aktualne ceny wszystkich Waszych wycieczek?' },
    { label: 'Rezerwacja przez WhatsApp', prompt: 'Chcę zarezerwować wycieczkę z Tripora przez WhatsApp.' },
  ],
  uk: [
    { label: 'Турецький хамам (€20)', prompt: 'Розкажіть про турецький хамам в Аланії за 20€ та що входить у спа-програму.' },
    { label: 'Підібрати тур', prompt: 'Допоможіть мені обрати найкращу екскурсію в Аланії.' },
    { label: 'Для сімей з дітьми', prompt: 'Які екскурсії найкраще підходять для сімей з дітьми?' },
    { label: 'Екстрім та сафарі', prompt: 'Я хочу активний тур з пригодами. Що ви порекомендуєте?' },
    { label: 'Морські прогулянки', prompt: 'Розкажіть про прогулянки на кораблі в Аланії та ціни.' },
    { label: 'Оренда яхти', prompt: 'Скільки коштує оренда приватної яхти і що входить у вартість?' },
    { label: 'Трансфер з аеропорту', prompt: 'Трансфер з аеропорту безкоштовний?' },
    { label: 'Шопінг та золото', prompt: 'Які можливості шопінгу та ювелірних салонів ви пропонуєте?' },
    { label: 'Ціни на всі тури', prompt: 'Які ціни на всі ваші екскурсії?' },
    { label: 'Бронь у WhatsApp', prompt: 'Я хочу забронювати екскурсію через WhatsApp.' },
  ],
  ro: [
    { label: 'Baie Turcească Hamam (€20)', prompt: 'Povestiți-mi despre baia turcească Hamam din Alanya la 20€ și ce este inclus.' },
    { label: 'Găsește un tur', prompt: 'Ajutați-mă să găsesc cea mai bună excursie din Alanya.' },
    { label: 'Pentru familii', prompt: 'Care sunt cele mai potrivite excursii pentru familii cu copii?' },
    { label: 'Tururi de aventură', prompt: 'Doresc o excursie plină de aventură. Ce îmi recomandați?' },
    { label: 'Croaziere cu vaporul', prompt: 'Spuneți-mi despre excursiile cu barca din Alanya și prețurile acestora.' },
    { label: 'Iacht privat', prompt: 'Cât costă închirierea unui iaht privat și ce include?' },
    { label: 'Transfer aeroport', prompt: 'Transferul de la aeroport este gratuit?' },
    { label: 'Cumpărături și bijuterii', prompt: 'Ce experiențe de cumpărături și bijuterii oferiți în Alanya?' },
    { label: 'Prețuri toate tururile', prompt: 'Care sunt prețurile actuale pentru toate excursiile?' },
    { label: 'Rezervă pe WhatsApp', prompt: 'Doresc să rezerv o excursie cu Tripora pe WhatsApp.' },
  ],
  sr: [
    { label: 'Tursko Kupatilo Hamam (€20)', prompt: 'Recite mi više o turskom kupatilu (Hamam) u Alanji za 20€ i šta je uključeno.' },
    { label: 'Pronađi izlet', prompt: 'Pomozite mi da izaberem najbolji izlet u Alanji.' },
    { label: 'Za porodice sa decom', prompt: 'Koji su najbolji izleti za porodice sa decom?' },
    { label: 'Avantura i safari', prompt: 'Želim uzbudljiv safari ili avanturu. Šta preporučujete?' },
    { label: 'Krstarenje brodom', prompt: 'Recite mi više o izletima brodom u Alanji i cenama.' },
    { label: 'Privatna jahta', prompt: 'Koliko košta iznajmljivanje privatne jahte i šta je uključeno?' },
    { label: 'Transfer sa aerodroma', prompt: 'Da li je aerodromski transfer besplatan?' },
    { label: 'Šoping i nakit', prompt: 'Kakva šoping i zlatarska iskustva nudite u Alanji?' },
    { label: 'Cene svih izleta', prompt: 'Koje su cene svih vaših izleta?' },
    { label: 'Rezerviši na WhatsApp', prompt: 'Želim da rezervišem izlet sa Tripora preko WhatsApp-a.' },
  ],
};

const WELCOME_MESSAGES: Record<Language, string> = {
  en: "Hi! 👋 I'm Tripora's Travel Assistant.\n\nLooking for the perfect experience in Alanya?\n\nTell me what you enjoy and I'll help you find the right tour.",
  tr: "Merhaba! 👋 Ben Tripora Seyahat Asistanı.\n\nAlanya'da unutulmaz bir tatil deneyimi mi arıyorsunuz?\n\nNelerden hoşlandığınızı söyleyin, size en uygun turu hemen bulayım.",
  ru: "Здравствуйте! 👋 Я туристический помощник Tripora.\n\nИщете идеальный отдых и впечатления в Аланье?\n\nРасскажите, какой отдых вы предпочитаете, и я помогу подобрать лучшую экскурсию.",
  de: "Hallo! 👋 Ich bin Triporas Reiseassistent.\n\nSuchen Sie nach dem perfekten Erlebnis in Alanya?\n\nSagen Sie mir, was Ihnen gefällt, und ich helfe Ihnen, die passende Tour zu finden.",
  pl: "Cześć! 👋 Jestem asystentem podróży Tripora.\n\nSzukasz idealnej wycieczki w Alanyi?\n\nNapisz mi, co najbardziej lubisz, a natychmiast pomogę Ci wybrać najlepszą opcję.",
  uk: "Привіт! 👋 Я туристичний асистент Tripora.\n\nШукаєте незабутній відпочинок в Аланії?\n\nРозкажіть, що вам подобається, і я допоможу обрати найкращий тур.",
  ro: "Bună! 👋 Sunt Asistentul de Călătorie Tripora.\n\nCăutați experiența perfectă de vacanță în Alanya?\n\nSpuneți-mi ce vă place și vă voi ajuta să alegeți excursia potrivită.",
  sr: "Zdravo! 👋 Ja sam Tripora turistički asistent.\n\nTražite savršeno iskustvo i odmor u Alanji?\n\nRecite mi šta volite i odmah ću vam pomoći da izaberete pravi izlet.",
};

const FormattedMessageText: React.FC<{ content: string; isModel: boolean }> = ({ content, isModel }) => {
  const lines = content.split('\n');
  return (
    <div className="space-y-1 font-normal">
      {lines.map((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lIdx} className="h-1.5" />;
        }

        // Parse bold segments **text**
        const parts = line.split(/(\*\*[^*]+\*\*)/g);

        const renderedLine = parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={pIdx} className={isModel ? 'font-bold text-amber-300' : 'font-bold text-white'}>
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <React.Fragment key={pIdx}>{part}</React.Fragment>;
        });

        const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ');
        if (isBullet) {
          return (
            <div key={lIdx} className="flex items-start gap-1.5 pl-1 my-0.5">
              <span className="text-amber-400 select-none mt-0.5">•</span>
              <span className="flex-1">{renderedLine}</span>
            </div>
          );
        }

        return (
          <p key={lIdx} className="leading-relaxed">
            {renderedLine}
          </p>
        );
      })}
    </div>
  );
};

export const AiChatAssistant: React.FC<AiChatAssistantProps> = ({
  currentLang,
  onLanguageChange,
  onSelectTour,
  onBookTour,
  isOpen: controlledIsOpen,
  onOpenChange,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const setIsOpen = (open: boolean) => {
    setInternalIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [activeLang, setActiveLang] = useState<Language>(currentLang);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Listen to global open-tripora-ai custom event from any button or card
  useEffect(() => {
    const handleCustomOpen = (event: Event) => {
      const customEvent = event as CustomEvent<{ prompt?: string }>;
      setIsOpen(true);
      if (customEvent.detail?.prompt) {
        const promptText = customEvent.detail.prompt;
        setTimeout(() => {
          handleSendMessage(promptText);
        }, 150);
      }
    };
    window.addEventListener('open-tripora-ai', handleCustomOpen);
    return () => window.removeEventListener('open-tripora-ai', handleCustomOpen);
  }, [messages, activeLang]);

  // Sync external currentLang
  useEffect(() => {
    setActiveLang(currentLang);
  }, [currentLang]);

  // Load chat session from sessionStorage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      }
    } catch {
      // ignore
    }

    // Default welcome message
    const welcomeMsg: ChatMessage = {
      id: 'welcome-msg',
      role: 'model',
      content: WELCOME_MESSAGES[activeLang] || WELCOME_MESSAGES.en,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([welcomeMsg]);
  }, [activeLang]);

  // Save chat to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // ignore
      }
    }
  }, [messages]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const message = (textToSend || inputMessage).trim();
    if (!message || isLoading) return;

    setInputMessage('');

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Prepare history from PRIOR messages only (do not include current userMessage)
    const historyPayload = messages
      .filter((m) => m.id !== 'welcome-msg' && (m.role === 'user' || m.role === 'model'))
      .slice(-6)
      .map((m) => ({
        role: m.role,
        content: m.content,
      }));

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          language: activeLang,
          history: historyPayload,
        }),
      });

      const data = await response.json();

      const modelMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        content: data.reply || (activeLang === 'tr' ? "Size Alanya turlarımızda yardımcı olmaktan mutluluk duyarım!" : "I am here to help you explore Alanya!"),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendedTourSlugs: data.recommendedTourSlugs || [],
        isBookingRequest: data.isBookingRequest,
        whatsappUrl: data.whatsappUrl || createWhatsAppLink(`Hello Tripora Alanya, inquiring about: ${message}`),
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        content: activeLang === 'tr'
          ? "Alanya Tekne Turu (20 €), ATV Safari (25 €) ve Havalimanı Transferi (50 € / 80 €) hakkında bilgi almak ve rezervasyon yapmak için bize WhatsApp üzerinden de hemen ulaşabilirsiniz!"
          : activeLang === 'ru'
          ? "Для информации о турах (корабль 20 €, сафари 25 €, трансфер 50 € / 80 €) и быстрого бронирования напишите нам в WhatsApp (+90 505 142 21 16)!"
          : activeLang === 'de'
          ? "Für Informationen zu Bootstouren (20 €), Safari (25 €), Flughafentransfer (50 € / 80 €) und Buchungen erreichen Sie uns direkt auf WhatsApp (+90 505 142 21 16)!"
          : activeLang === 'pl'
          ? "W sprawie wycieczek (statek 20 €, safari 25 €, transfer 50 € / 80 €) i rezerwacji zapraszamy bezpośrednio na WhatsApp (+90 505 142 21 16)!"
          : "For instant tour information (Boat Tour €20, Safari €25, Airport Transfer €50/€80) and bookings, contact our team on WhatsApp (+90 505 142 21 16)!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        whatsappUrl: createWhatsAppLink(`Hello Tripora Alanya, I would like to inquire about: ${message}`),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleRestartChat = () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    const welcomeMsg: ChatMessage = {
      id: 'welcome-msg',
      role: 'model',
      content: WELCOME_MESSAGES[activeLang] || WELCOME_MESSAGES.en,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([welcomeMsg]);
  };

  const handleLangChange = (lang: Language) => {
    setActiveLang(lang);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  // Find tour objects matching recommended slugs
  const getToursBySlugs = (slugs: string[]): Tour[] => {
    if (!slugs || slugs.length === 0) return [];
    return slugs
      .map((slug) => TOURS_DATA.find((t) => t.slug === slug || t.id === slug))
      .filter((t): t is Tour => Boolean(t));
  };

  const quickActions = QUICK_ACTIONS[activeLang] || QUICK_ACTIONS.en;

  return (
    <>
      {/* Floating Trigger Button in Bottom-Right */}
      {!isOpen && (
        <div className="fixed bottom-22 right-5 z-40 flex items-center">
          <button
            id="tripora-ai-assistant-trigger"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#071325] via-[#0B1B33] to-[#0d2242] border border-amber-400/40 text-white shadow-2xl shadow-slate-950/60 hover:shadow-amber-500/20 hover:border-amber-400 transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Open Tripora Travel Assistant AI"
          >
            {/* Pulsing indicator aura */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
            </span>

            {/* Assistant Icon with Sparkle */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-sky-400 p-0.5 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-[#071325] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white tracking-wide">
                  Tripora AI
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                  Online
                </span>
              </div>
              <p className="text-[10px] text-slate-300 hidden sm:block font-medium">
                {activeLang === 'tr' ? 'Seyahat Asistanı' : activeLang === 'ru' ? 'Тур-ассистент' : activeLang === 'de' ? 'Reiseassistent' : activeLang === 'pl' ? 'Asystent Podróży' : 'Travel Assistant'}
              </p>
            </div>
          </button>
        </div>
      )}

      {/* Main Chat Panel */}
      {isOpen && (
        <div
          id="tripora-ai-chat-panel"
          className="fixed inset-x-2 bottom-2 top-16 sm:top-auto sm:bottom-5 sm:right-5 sm:left-auto sm:w-[410px] sm:h-[620px] z-50 flex flex-col bg-[#071325] border border-amber-400/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-950/80 overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-[#071325] via-[#0B1B33] to-[#071325] border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-sky-500 to-emerald-400 p-0.5 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#071325] flex items-center justify-center">
                    <Compass className="w-5 h-5 text-amber-400 animate-spin [animation-duration:20s]" />
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#071325]" />
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-extrabold text-white tracking-wide">
                    Tripora Travel Assistant
                  </h3>
                </div>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>AI Powered • Alanya Expert</span>
                </p>
              </div>
            </div>

            {/* Actions: Lang switch, Reset, Close */}
            <div className="flex items-center space-x-1.5">
              {/* Language Selector */}
              <div className="flex items-center bg-white/5 rounded-lg p-0.5 border border-white/10">
                {(['en', 'tr', 'ru', 'de', 'pl'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLangChange(lang)}
                    className={`px-1.5 py-0.5 text-[10px] font-bold rounded uppercase transition-colors ${
                      activeLang === lang
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title={`Switch to ${lang.toUpperCase()}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Reset chat */}
              <button
                onClick={handleRestartChat}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Restart conversation"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close chat"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm text-slate-200 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => {
              const isModel = msg.role === 'model';
              const recommendedTours = isModel && msg.recommendedTourSlugs ? getToursBySlugs(msg.recommendedTourSlugs) : [];

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isModel ? 'items-start' : 'items-end'} space-y-2`}
                >
                  <div
                    className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-md ${
                      isModel
                        ? 'bg-[#0E2038] text-slate-100 border border-white/10 rounded-tl-sm'
                        : 'bg-gradient-to-r from-sky-600 to-sky-700 text-white font-medium rounded-tr-sm'
                    }`}
                  >
                    {/* Render message text with rich formatting */}
                    <FormattedMessageText content={msg.content} isModel={isModel} />

                    <div
                      className={`text-[9px] mt-1.5 ${
                        isModel ? 'text-slate-400' : 'text-sky-200'
                      } text-right`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {/* Compact Recommended Tour Cards */}
                  {recommendedTours.length > 0 && (
                    <div className="w-full space-y-2 pt-1 pl-1">
                      <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Recommended Experiences</span>
                      </p>

                      <div className="space-y-2">
                        {recommendedTours.map((tour) => {
                          const tourTitle = tour.title[activeLang] || tour.title.en;
                          const tourDesc = tour.description[activeLang] || tour.description.en;

                          return (
                            <div
                              key={tour.id}
                              className="p-2.5 rounded-xl bg-gradient-to-r from-slate-900 via-[#0a1b30] to-slate-900 border border-amber-400/30 flex items-center gap-3 shadow-lg hover:border-amber-400 transition-colors"
                            >
                              <div className="relative shrink-0">
                                <img
                                  src={tour.image}
                                  alt={tourTitle}
                                  className="w-16 h-16 rounded-lg object-cover border border-white/10"
                                  loading="lazy"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/assets/images/alanya-boat-tour.jpg';
                                  }}
                                />
                                <div className="absolute -bottom-1 -right-1 px-1 py-0.2 rounded text-[8px] font-black bg-slate-950/95 text-emerald-300 border border-emerald-400/40 shadow">
                                  {(tour.participantsCount || (tour.reviewsCount * 9 + 400)).toLocaleString()}+
                                </div>
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-xs font-bold text-white truncate">
                                    {tourTitle}
                                  </h4>
                                  <span className="text-xs font-black text-amber-400 shrink-0 ml-1">
                                    €{tour.price}
                                    <span className="text-[9px] text-slate-300 font-normal">
                                      {tour.pricePerPerson ? '/p' : '/yacht'}
                                    </span>
                                  </span>
                                </div>

                                <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">
                                  {tourDesc}
                                </p>

                                <div className="flex items-center gap-1.5 mt-2">
                                  {onSelectTour && (
                                    <button
                                      onClick={() => onSelectTour(tour)}
                                      className="px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 text-[10px] font-bold text-white transition-colors cursor-pointer"
                                    >
                                      View Tour
                                    </button>
                                  )}

                                  {onBookTour && (
                                    <button
                                      onClick={() => onBookTour(tour)}
                                      className="px-2 py-1 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 text-[10px] font-bold transition-colors cursor-pointer"
                                    >
                                      Book Now
                                    </button>
                                  )}

                                  <a
                                    href={createWhatsAppLink(`Hello Tripora Alanya, I would like to book ${tourTitle} (€${tour.price}).`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                                  >
                                    <MessageCircle className="w-3 h-3" />
                                    <span>WhatsApp</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Booking Request Action Button */}
                  {msg.whatsappUrl && (
                    <div className="pt-1">
                      <a
                        href={msg.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>
                          {msg.isBookingRequest
                            ? 'SEND BOOKING REQUEST VIA WHATSAPP'
                            : 'OPEN IN WHATSAPP (+90 505 142 21 16)'}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}

            {/* AI Typing indicator */}
            {isLoading && (
              <div className="flex items-center space-x-2 p-3 rounded-2xl bg-[#0E2038] border border-white/10 w-24 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-3 py-2 bg-[#050e1a] border-t border-white/5 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center space-x-1.5 shrink-0">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(action.prompt)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/50 text-[11px] font-semibold text-slate-300 hover:text-amber-300 transition-all cursor-pointer shrink-0"
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* Footer Input Area */}
          <div className="p-3 bg-gradient-to-t from-[#071325] to-[#0a1a30] border-t border-white/10 shrink-0">
            <div className="relative flex items-center">
              <textarea
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  activeLang === 'tr'
                    ? 'Alanya turları veya rezervasyon hakkında sorun...'
                    : activeLang === 'ru'
                    ? 'Спросите об экскурсиях в Аланье или бронировании...'
                    : activeLang === 'de'
                    ? 'Fragen Sie nach Alanya Touren oder Buchungen...'
                    : activeLang === 'pl'
                    ? 'Zapytaj o wycieczki w Alanyi, ceny lub rezerwację...'
                    : 'Ask about Alanya tours, prices, or booking...'
                }
                rows={1}
                className="w-full pr-12 pl-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-xs sm:text-sm text-white placeholder:text-slate-400 resize-none max-h-24"
              />

              <button
                id="tripora-ai-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                className={`absolute right-2 p-2 rounded-lg transition-all cursor-pointer ${
                  inputMessage.trim() && !isLoading
                    ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md'
                    : 'bg-white/10 text-slate-500 cursor-not-allowed'
                }`}
                title="Send message"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Verified Trip Guide • Official WhatsApp</span>
              </span>
              <a
                href="https://wa.me/905051422116"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-0.5 font-bold"
              >
                <span>+90 505 142 21 16</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
