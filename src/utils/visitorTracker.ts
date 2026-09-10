/**
 * TRIPORA ALANYA - Silent Visitor Notification Tracker
 * 
 * - Runs once per browser session using sessionStorage.
 * - Tracks only non-invasive privacy-safe metrics: Page, Language, Referrer.
 * - Never collects IP, location, device fingerprint, or personal data.
 * - Fails 100% silently in case of network or configuration issues.
 * - Leaves all booking, WhatsApp, and navigation actions completely unaffected.
 */

const SESSION_STORAGE_KEY = 'tripora_session_notified_v1';

function getCleanReferrer(): string {
  try {
    const rawReferrer = document.referrer;
    if (!rawReferrer) return 'Direct';

    const currentHost = window.location.hostname;
    const refUrl = new URL(rawReferrer);

    // If same origin/host, treat as Direct
    if (refUrl.hostname === currentHost || refUrl.hostname === 'localhost') {
      return 'Direct';
    }

    // Identify common search / social referrers
    const host = refUrl.hostname.toLowerCase();
    if (host.includes('google')) return `Google (${refUrl.hostname})`;
    if (host.includes('bing')) return `Bing (${refUrl.hostname})`;
    if (host.includes('yandex')) return `Yandex (${refUrl.hostname})`;
    if (host.includes('instagram')) return `Instagram (${refUrl.hostname})`;
    if (host.includes('facebook')) return `Facebook (${refUrl.hostname})`;
    if (host.includes('tiktok')) return `TikTok (${refUrl.hostname})`;
    if (host.includes('t.me') || host.includes('telegram')) return `Telegram (${refUrl.hostname})`;
    if (host.includes('tripadvisor')) return `TripAdvisor (${refUrl.hostname})`;

    return refUrl.hostname;
  } catch {
    return 'Direct';
  }
}

export function getCurrentPageIdentifier(): string {
  try {
    const path = window.location.pathname || '/';
    const hash = window.location.hash || '';
    return hash ? `${path}${hash}` : path;
  } catch {
    return '/';
  }
}

export async function trackVisitorOnce(): Promise<void> {
  // Check if this session has already been notified
  try {
    const alreadyTracked = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (alreadyTracked === 'true') {
      return;
    }
  } catch {
    // sessionStorage might be restricted (e.g. some third-party iframes)
  }

  // Mark session immediately to prevent duplicate requests on quick re-renders
  try {
    sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
  } catch {
    // ignore
  }

  const page = getCurrentPageIdentifier();
  const language = navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
  const referrer = getCleanReferrer();

  try {
    await fetch('/api/notify-visitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page,
        language,
        referrer,
      }),
      // Keep alive allows the request to finish even if navigating
      keepalive: true,
    });
  } catch {
    // Fail 100% silently - user experience must never be interrupted
  }
}

/**
 * Admin testing utility to test Telegram notification from browser or console
 */
export async function triggerTestNotification(): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch('/api/notify-visitor/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Network failure';
    return { success: false, message };
  }
}

// Attach developer / admin helper to window object in browser
if (typeof window !== 'undefined') {
  (window as unknown as { __testTriporaNotification?: () => Promise<unknown> }).__testTriporaNotification = async () => {
    console.log('[TRIPORA] Triggering test Telegram notification...');
    const result = await triggerTestNotification();
    console.log('[TRIPORA] Test notification result:', result);
    return result;
  };
}
