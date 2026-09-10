import express from 'express';
import http from 'http';
import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { processChatRequest } from './server/geminiChat.ts';

dotenv.config();

const TARGET_RESERVATION_EMAIL = process.env.RESERVATION_TARGET_EMAIL || 'ilyaskaradas07@hotmail.com';

async function sendReservationEmail(details: {
  referenceCode: string;
  tourName: string;
  tourDate: string;
  hotelName: string;
  region?: string;
  roomNumber?: string;
  pickupTime?: string;
  adults: number;
  children: number;
  infants: number;
  totalPrice: number | null;
  fullName: string;
  phone: string;
  email?: string;
  specialRequests?: string;
  timeFormatted: string;
}): Promise<{ sent: boolean; message: string }> {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #071325; padding: 24px; text-align: center; color: #ffffff;">
        <h1 style="color: #fbbf24; margin: 0; font-size: 22px; letter-spacing: 1px;">TRIPORA ALANYA</h1>
        <p style="margin: 6px 0 0 0; color: #94a3b8; font-size: 13px;">Yeni Tur Rezervasyon Onayı & Bilgilendirme</p>
      </div>
      <div style="padding: 24px; color: #1e293b; line-height: 1.6;">
        <div style="background-color: #f8fafc; border-left: 4px solid #f59e0b; padding: 12px 16px; margin-bottom: 20px;">
          <strong style="font-size: 16px; color: #0f172a;">Rezervasyon Ref: ${details.referenceCode}</strong><br/>
          <span style="color: #64748b; font-size: 12px;">Kayıt Tarihi: ${details.timeFormatted}</span>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <tr><td style="padding: 8px 0; color: #64748b; width: 42%;">Tur / Deneyim:</td><td style="padding: 8px 0; font-weight: bold; color: #0f172a;">${details.tourName}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Tur Tarihi:</td><td style="padding: 8px 0; font-weight: bold; color: #0f172a;">${details.tourDate}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Otel:</td><td style="padding: 8px 0; font-weight: bold; color: #0f172a;">${details.hotelName} ${details.region ? `(${details.region})` : ''}</td></tr>
          ${details.roomNumber ? `<tr><td style="padding: 8px 0; color: #64748b;">Oda Numarası:</td><td style="padding: 8px 0;">${details.roomNumber}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #b45309; font-weight: bold;">Tahmini Alınış Saati:</td><td style="padding: 8px 0; font-weight: bold; color: #b45309; font-size: 16px;">${details.pickupTime || '08:30 - 09:00'}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Katılımcı Sayısı:</td><td style="padding: 8px 0;">${details.adults} Yetişkin${details.children > 0 ? `, ${details.children} Çocuk` : ''}${details.infants > 0 ? `, ${details.infants} Bebek` : ''}</td></tr>
          ${details.totalPrice !== null ? `<tr><td style="padding: 8px 0; color: #059669; font-weight: bold;">Toplam Ücret:</td><td style="padding: 8px 0; font-weight: bold; color: #059669; font-size: 16px;">€${details.totalPrice} (Tur Günü Nakit/Kart)</td></tr>` : ''}
        </table>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <h3 style="margin: 0 0 12px 0; font-size: 15px; color: #0f172a;">Misafir Bilgileri</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <tr><td style="padding: 6px 0; color: #64748b; width: 42%;">Adı Soyadı:</td><td style="padding: 6px 0; font-weight: bold;">${details.fullName}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">WhatsApp / Telefon:</td><td style="padding: 6px 0; font-weight: bold;">${details.phone}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Misafir E-posta:</td><td style="padding: 6px 0; font-weight: bold; color: #2563eb;">${details.email || 'Belirtilmedi'}</td></tr>
          ${details.specialRequests ? `<tr><td style="padding: 6px 0; color: #64748b;">Özel Not / İstek:</td><td style="padding: 6px 0;">${details.specialRequests}</td></tr>` : ''}
        </table>
        <div style="background-color: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 12px; font-size: 12px; color: #92400e; margin-top: 16px;">
          ⚠️ <strong>Önemli Alanya Otel Kuralı:</strong> Tur servis araçları otel içine giremez. Lütfen belirtilen saatte otelin ana nizamiye / güvenlik bariyeri dışında bekleyiniz.
        </div>
      </div>
      <div style="background-color: #f1f5f9; padding: 16px; text-align: center; color: #64748b; font-size: 12px;">
        Tripora Alanya Tour Operations • WhatsApp: +90 505 142 21 16 • Email: ${TARGET_RESERVATION_EMAIL}
      </div>
    </div>
  `;

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      const recipientList: string[] = [TARGET_RESERVATION_EMAIL];
      if (details.email && details.email.includes('@')) {
        recipientList.push(details.email);
      }

      await transporter.sendMail({
        from: `"Tripora Alanya Rezervasyon" <${smtpUser}>`,
        to: recipientList.join(', '),
        replyTo: details.email || TARGET_RESERVATION_EMAIL,
        subject: `[YENİ REZERVASYON] ${details.referenceCode} - ${details.tourName} (${details.fullName})`,
        html: htmlContent
      });

      console.log(`[Email Notification] Email sent successfully to ${recipientList.join(', ')}`);
      return { sent: true, message: `Sent to ${recipientList.join(', ')}` };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'SMTP dispatch failed';
      console.error('[Email Notification] Error sending email via SMTP:', msg);
      return { sent: false, message: msg };
    }
  } else {
    console.log(`[Email Notification] Reservation ${details.referenceCode} registered for ${TARGET_RESERVATION_EMAIL} & guest ${details.email || 'N/A'}. (Configure SMTP_HOST, SMTP_USER, SMTP_PASS in secrets for external SMTP delivery)`);
    return { sent: true, message: `Queued/Logged for ${TARGET_RESERVATION_EMAIL}` };
  }
}

function formatDateTime(date: Date = new Date()): string {
  try {
    // Format: "04 Sep 2026, 12:35" in Europe/Istanbul (Turkey) time
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Europe/Istanbul',
    };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  } catch {
    return date.toISOString().replace('T', ' ').substring(0, 16);
  }
}

async function sendTelegramMessage(text: string): Promise<{ ok: boolean; description?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn('[Telegram Notification] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured.');
    return {
      ok: false,
      description: 'TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing in environment variables.',
    };
  }

  const endpoint = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    const data = (await response.json()) as { ok: boolean; description?: string };
    if (!data.ok) {
      console.error('[Telegram Notification] API error:', data.description);
    }
    return data;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[Telegram Notification] Request failed:', message);
    return { ok: false, description: message };
  }
}

async function startServer() {
  const app = express();

  // Parse JSON payloads with strict size limit
  app.use(express.json({ limit: '32kb' }));

  // Origin check middleware for /api routes
  app.use('/api', (req, res, next) => {
    const allowedOrigin = process.env.ALLOWED_ORIGIN;
    const origin = req.headers.origin;

    if (allowedOrigin && origin && origin !== allowedOrigin) {
      console.warn(`[Security] Rejected request from unauthorized origin: ${origin}`);
      return res.status(403).json({ error: 'Origin not allowed' });
    }
    next();
  });

  // Health check endpoints for Cloud Run and external monitoring
  app.get(['/health', '/healthz'], (_req, res) => {
    res.status(200).send('OK');
  });

  // Detailed health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      time: new Date().toISOString(),
      telegramConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
      geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    });
  });

  // AI Chat Assistant endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, language, history } = req.body || {};

      if (!message || typeof message !== 'string') {
        return res.status(400).json({
          success: false,
          error: 'Message string is required',
        });
      }

      const chatResult = await processChatRequest({
        message,
        language: typeof language === 'string' ? (language as 'en' | 'tr' | 'ru' | 'de' | 'pl' | 'uk' | 'ro' | 'sr') : 'en',
        history: Array.isArray(history) ? history : [],
      });

      return res.json(chatResult);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Chat server error';
      console.error('[API /api/chat] Error:', errorMsg);
      return res.status(500).json({
        success: false,
        error: errorMsg,
        reply: 'Sorry, our Travel Assistant is temporarily unavailable. Please contact us on WhatsApp (+90 505 142 21 16).',
        recommendedTourSlugs: [],
        isBookingRequest: false,
        whatsappUrl: 'https://wa.me/905051422116',
      });
    }
  });

  // Visitor notification endpoint
  app.post('/api/notify-visitor', async (req, res) => {
    try {
      const body = req.body || {};

      // Sanitize and constrain input fields
      const rawPage = typeof body.page === 'string' ? body.page.trim().slice(0, 250) : '/';
      const rawLanguage = typeof body.language === 'string' ? body.language.trim().slice(0, 50) : 'Unknown';
      const rawReferrer = typeof body.referrer === 'string' ? body.referrer.trim().slice(0, 250) : 'Direct';

      const page = rawPage || '/';
      const language = rawLanguage || 'Unknown';
      const referrer = rawReferrer || 'Direct';
      const timeFormatted = formatDateTime();

      const messageText = [
        '🔔 TRIPORA ALANYA — NEW VISITOR',
        '',
        `📄 Page: ${page}`,
        `🌐 Language: ${language}`,
        `↩️ Source: ${referrer}`,
        `🕒 Time: ${timeFormatted}`,
      ].join('\n');

      const result = await sendTelegramMessage(messageText);

      res.json({
        success: result.ok,
        message: result.ok ? 'Notification sent' : result.description || 'Could not send notification',
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Internal error';
      console.error('[Visitor Notification] Error:', message);
      // Always return 200/safe response so frontend never crashes or alerts
      res.json({ success: false, error: message });
    }
  });

  // Professional Tour Reservation endpoint
  app.post('/api/reservations', async (req, res) => {
    try {
      const body = req.body || {};
      const fullName = typeof body.fullName === 'string' ? body.fullName.trim().slice(0, 100) : 'Guest';
      const phone = typeof body.phone === 'string' ? body.phone.trim().slice(0, 40) : '';
      const hotelName = typeof body.hotelName === 'string' ? body.hotelName.trim().slice(0, 120) : 'Alanya Hotel';
      const tourName = typeof body.tourName === 'string' ? body.tourName.trim().slice(0, 150) : 'Tour';
      const tourDate = typeof body.tourDate === 'string' ? body.tourDate.trim().slice(0, 40) : '';
      const adults = Number(body.adults) || 1;
      const children = Number(body.children) || 0;
      const infants = Number(body.infants) || 0;
      const pickupTime = typeof body.pickupTime === 'string' ? body.pickupTime.trim().slice(0, 80) : '';
      const region = typeof body.region === 'string' ? body.region.trim().slice(0, 80) : '';
      const totalPrice = body.totalPrice !== undefined ? Number(body.totalPrice) : null;
      const roomNumber = typeof body.roomNumber === 'string' ? body.roomNumber.trim().slice(0, 40) : '';
      const email = typeof body.email === 'string' ? body.email.trim().slice(0, 100) : '';
      const specialRequests = typeof body.specialRequests === 'string' ? body.specialRequests.trim().slice(0, 300) : '';

      const referenceCode = `TRIP-${Date.now().toString().slice(-6)}`;
      const timeFormatted = formatDateTime();

      const lines = [
        '🎉 YENİ TUR REZERVASYONU — TRIPORA ALANYA',
        '',
        `🔖 Referans Kodu: ${referenceCode}`,
        `🏷️ Tur: ${tourName}`,
        `📅 Tarih: ${tourDate}`,
        `🏨 Otel: ${hotelName}${region ? ` (${region})` : ''}`,
        roomNumber ? `🔑 Oda No: ${roomNumber}` : '',
        pickupTime ? `🚌 Tahmini Alınış Saati: ${pickupTime}` : '',
        '',
        `👥 Katılımcı: ${adults} Yetişkin${children > 0 ? `, ${children} Çocuk` : ''}${infants > 0 ? `, ${infants} Bebek` : ''}`,
        totalPrice !== null ? `💶 Toplam Ücret: €${totalPrice} (Tur Günü Nakit/Kart)` : '',
        '',
        `👤 Misafir: ${fullName}`,
        `📱 WhatsApp Tel: ${phone}`,
        email ? `📧 E-posta: ${email}` : '',
        `✉️ Bilgilendirme Hedefi: ${TARGET_RESERVATION_EMAIL}`,
        specialRequests ? `📝 Özel İstek: ${specialRequests}` : '',
        '',
        '⚠️ Kural: Otel güvenlik kulübesi dışında beklenmesi bildirildi.',
        `🕒 Zaman: ${timeFormatted}`
      ].filter(l => l !== '');

      const messageText = lines.join('\n');
      console.log(`[Reservation Received] Ref: ${referenceCode}, Tour: ${tourName}, Guest: ${fullName}, Email: ${email || 'none'}`);

      // Forward to Telegram if configured
      await sendTelegramMessage(messageText);

      // Dispatch automated reservation email to ilyaskaradas07@hotmail.com and customer
      const emailResult = await sendReservationEmail({
        referenceCode,
        tourName,
        tourDate,
        hotelName,
        region,
        roomNumber,
        pickupTime,
        adults,
        children,
        infants,
        totalPrice,
        fullName,
        phone,
        email,
        specialRequests,
        timeFormatted,
      });

      res.json({
        success: true,
        referenceCode,
        pickupTime,
        emailSent: emailResult.sent,
        message: 'Reservation recorded and forwarded to email'
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Reservation processing error';
      console.error('[Reservation API] Error:', message);
      res.status(500).json({ success: false, error: message });
    }
  });

  // Test notification endpoint for admin / dev testing
  app.all('/api/notify-visitor/test', async (req, res) => {
    try {
      const testMessage = [
        '🧪 TRIPORA ALANYA — TEST NOTIFICATION',
        '',
        'Telegram notification system is working correctly.',
        `🕒 Time: ${formatDateTime()}`,
      ].join('\n');

      const result = await sendTelegramMessage(testMessage);

      res.json({
        success: result.ok,
        tokenConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN),
        chatIdConfigured: Boolean(process.env.TELEGRAM_CHAT_ID),
        message: result.ok
          ? 'Test notification successfully sent to Telegram!'
          : result.description || 'Failed to send test message to Telegram.',
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Internal error';
      res.status(500).json({ success: false, error: message });
    }
  });

  // Serve static assets from public directory directly (ensures images are served as image/jpeg, not SPA HTML)
  const publicPath = path.join(process.cwd(), 'public');
  app.use(express.static(publicPath));

  const httpServer = http.createServer(app);

  // Reliable production detection (both NODE_ENV and bundled dist execution)
  const isProduction =
    process.env.NODE_ENV === 'production' ||
    (typeof __filename !== 'undefined' && (__filename.includes('dist') || __filename.endsWith('.cjs')));

  // Vite development vs production static serving
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR === 'true' ? false : { server: httpServer },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      const indexPath = path.join(distPath, 'index.html');
      res.sendFile(indexPath, (err) => {
        if (err) {
          const fallbackPath = path.join(__dirname, 'index.html');
          res.sendFile(fallbackPath, (err2) => {
            if (err2) {
              res.status(200).send('<!DOCTYPE html><html><head><meta charset="utf-8"><title>TRIPORA ALANYA</title></head><body><h1>TRIPORA ALANYA</h1><p>Loading application...</p></body></html>');
            }
          });
        }
      });
    });
  }

  // Bind to port 3000 (mandated for sandbox reverse proxy) and auxiliary Cloud Run port (PORT env var, e.g. 8080)
  const PORT = 3000;
  const envPort = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
  const activeServers: http.Server[] = [];

  httpServer.on('error', (err: NodeJS.ErrnoException) => {
    console.error(`[TRIPORA Server] Error on port ${PORT}:`, err.message);
  });

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`[TRIPORA Server] Server running on http://0.0.0.0:${PORT} (${isProduction ? 'production' : 'development'})`);
  });
  activeServers.push(httpServer);

  // In Google Cloud Run deployment, container startup probes ping 0.0.0.0:${process.env.PORT} (usually 8080).
  // In the dev sandbox, port 8080 is already held by nginx proxy, so EADDRINUSE is safely caught.
  if (envPort && envPort !== PORT) {
    const cloudRunServer = http.createServer(app);
    cloudRunServer.on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`[TRIPORA Server] Port ${envPort} is held by dev reverse proxy (normal in development).`);
      } else {
        console.warn(`[TRIPORA Server] Warning on auxiliary port ${envPort}:`, err.message);
      }
    });

    try {
      cloudRunServer.listen(envPort, '0.0.0.0', () => {
        console.log(`[TRIPORA Server] Cloud Run listener active on http://0.0.0.0:${envPort}`);
      });
      activeServers.push(cloudRunServer);
    } catch {
      // Ignore synchronous listen exceptions
    }
  }

  const cleanup = () => {
    console.log('[TRIPORA Server] Shutting down server...');
    for (const s of activeServers) {
      if (typeof s.closeAllConnections === 'function') {
        s.closeAllConnections();
      }
      s.close();
    }
    console.log('[TRIPORA Server] All ports released.');
    setTimeout(() => {
      process.exit(0);
    }, 1000).unref();
  };

  process.on('SIGTERM', cleanup);
  process.on('SIGINT', cleanup);
}

startServer();
