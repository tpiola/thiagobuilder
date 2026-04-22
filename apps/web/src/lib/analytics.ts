type TrackParams = Record<string, string | number | boolean | undefined>;

function ensureScript(src: string, id: string) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const s = document.createElement('script');
  s.id = id;
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function ensureMeta(name: string, content: string) {
  if (typeof document === 'undefined') return;
  if (!content) return;
  const existing = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (existing) {
    existing.content = content;
    return;
  }
  const m = document.createElement('meta');
  m.name = name;
  m.content = content;
  document.head.appendChild(m);
}

export function initTracking() {
  const gtmId = import.meta.env.VITE_GTM_ID as string | undefined;
  const ga4Id = import.meta.env.VITE_GA4_ID as string | undefined;
  const gsc = import.meta.env.VITE_GSC_VERIFICATION as string | undefined;

  if (gtmId) {
    ensureScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`, 'gtm');
  }

  if (ga4Id) {
    ensureScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`, 'ga4');
    if (typeof window !== 'undefined') {
      window.gtag = window.gtag ?? (() => undefined);
      window.gtag('js', new Date());
      window.gtag('config', ga4Id, { send_page_view: false });
    }
  }

  if (gsc) ensureMeta('google-site-verification', gsc);
}

export function trackPageView(path: string) {
  const ga4Id = import.meta.env.VITE_GA4_ID as string | undefined;
  if (!ga4Id) return;
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', { page_path: path });
}

export function trackEvent(name: string, params?: TrackParams) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params ?? {});
}
