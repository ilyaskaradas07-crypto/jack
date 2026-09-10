import { ReservationFormData, AirportTransferFormData, TourReservationFormData } from '../types';

export const BUSINESS_WHATSAPP_NUMBER = '905051422116';
export const BUSINESS_EMAIL = 'ilyaskaradas07@hotmail.com';
export const BUSINESS_NAME = 'TRIPORA ALANYA';
export const BUSINESS_LOCATION = 'Alanya, Antalya, Turkey';

/**
 * Creates a clean WhatsApp wa.me link with encoded text
 */
export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Generates the official reservation message for WhatsApp from the professional reservation bot/modal
 */
export function generateTourReservationWhatsAppMessage(
  data: TourReservationFormData
): string {
  const lines = [
    '🌴 *TRIPORA ALANYA — REZERVASYON TALEBİ*',
    '',
    `🏷️ *Tur:* ${data.tourName}`,
    `📅 *Tarih:* ${data.tourDate}`,
    `🏨 *Otel:* ${data.hotelName}${data.region ? ` (${data.region})` : ''}`,
    data.roomNumber ? `🔑 *Oda No:* ${data.roomNumber}` : '',
    data.pickupTime ? `🚌 *Tahmini Alınış Saati:* ${data.pickupTime}` : '',
    data.sessionTime ? `⏰ *Seans:* ${data.sessionTime}` : '',
    '',
    '👥 *Katılımcı Sayısı:*',
    `   • Yetişkin: ${data.adults}`,
    data.children ? `   • Çocuk (4-11 yaş): ${data.children}` : '',
    data.infants ? `   • Bebek (0-3 yaş): ${data.infants}` : '',
    '',
    data.totalPrice !== undefined ? `💶 *Toplam Ücret:* €${data.totalPrice} (Ödeme: Tur günü rehbere nakit / kart)` : '',
    '',
    '👤 *Misafir Bilgileri:*',
    `   • İsim: ${data.fullName}`,
    `   • Telefon: ${data.phone}`,
    data.email ? `   • E-posta: ${data.email}` : '',
    data.specialRequests ? `📝 *Özel İstekler:* ${data.specialRequests}` : '',
    '',
    '⚠️ *Otel Güvenlik Notu:* Servis araçları otel içine giremediğinden, alınış saatinde otel güvenlik kulübesi/bariyeri dışında hazır bulunulacaktır.',
    '',
    'Lütfen rezervasyonumu teyit ediniz. Teşekkürler!'
  ].filter(line => line !== '');

  return lines.join('\n');
}

/**
 * Generates the official reservation message for WhatsApp
 */
export function generateReservationWhatsAppMessage(
  data: ReservationFormData,
  tourTitle: string
): string {
  const lines = [
    'Hello Tripora Alanya,',
    '',
    'I would like to make a reservation.',
    '',
    `Name: ${data.firstName} ${data.lastName}`,
    `Room Number: ${data.roomNumber || 'Not provided yet'}`,
    `Phone: ${data.phone}`,
    `Tour: ${tourTitle}`,
    `Date: ${data.date}`,
    `Adults: ${data.adults}`,
    `Children: ${data.children || 0}`,
    `Hotel: ${data.hotelName}`,
    `Pickup Location: ${data.pickupLocation || data.hotelName}`,
    `Special Requests: ${data.specialRequests || 'None'}`,
    '',
    'Thank you.'
  ];
  return lines.join('\n');
}

/**
 * Generates the official airport transfer message for WhatsApp
 */
export function generateAirportTransferWhatsAppMessage(
  data: AirportTransferFormData
): string {
  const isGazipasa =
    (data.airport && data.airport.toLowerCase().includes('gazipaşa')) ||
    (data.pickupLocation && data.pickupLocation.toLowerCase().includes('gazipaşa')) ||
    (data.dropoffLocation && data.dropoffLocation.toLowerCase().includes('gazipaşa')) ||
    (data.price && data.price.includes('50'));

  const airportName = data.airport || (isGazipasa ? 'Gazipaşa Airport (GZP)' : 'Antalya Airport (AYT)');
  const price = data.price || (isGazipasa ? '€50' : '€80');

  const lines = [
    'Hello Tripora Alanya,',
    '',
    `I would like to book the VIP Airport Transfer (${airportName} - ${price} fixed rate).`,
    '',
    `Name: ${data.name}`,
    `Airport Route: ${airportName} (${price} Fixed Rate)`,
    `Hotel: ${data.hotelName}`,
    `Pickup Location: ${data.pickupLocation}`,
    `Drop-off Location: ${data.dropoffLocation}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    `Passengers: ${data.passengers}`,
    `Flight Number: ${data.flightNumber || 'To be shared'}`,
    `WhatsApp: ${data.phone}`,
    `Special Requests: ${data.specialRequests || 'None'}`,
    '',
    'Thank you.'
  ];
  return lines.join('\n');
}

/**
 * Generates direct inquiry WhatsApp link for a tour
 */
export function generateTourInquiryLink(
  tourTitle: string,
  date?: string,
  peopleCount?: number
): string {
  let message: string;
  if (date && peopleCount) {
    message = `Hello Tripora Alanya, I would like to book ${tourTitle} for ${date} for ${peopleCount} people.`;
  } else {
    message = `Hello Tripora Alanya, I am interested in ${tourTitle}. Please send me more information and booking options.`;
  }
  return createWhatsAppLink(message);
}

/**
 * Generates shopping service inquiry link
 */
export function generateShoppingInquiryLink(serviceName: string): string {
  const message = `Hello Tripora Alanya, I am interested in your ${serviceName} service in Alanya. Please send me more details and arrangements.`;
  return createWhatsAppLink(message);
}
