import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const PHONE_E164 = '5516992333344';

function buildUrl() {
  const base = `https://wa.me/${PHONE_E164}`;
  const text = encodeURIComponent('Olá! Quero entender qual template e pacote se encaixam no meu negócio.');
  return `${base}?text=${text}`;
}

export function WhatsAppFab() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 220);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <a
      href={buildUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => {
        const gtag = (window as any).gtag;
        if (typeof gtag === 'function') {
          gtag('event', 'whatsapp_click', { location: 'fab' });
        }
      }}
      className={
        'fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black text-white shadow-2xl shadow-black/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-black/85'
      }
      style={{
        opacity: ready ? 1 : 0,
        transform: ready ? undefined : 'translateY(10px)',
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        transitionDuration: '320ms',
      }}
    >
      <MessageCircle size={18} />
    </a>
  );
}

