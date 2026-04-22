import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTts } from '@/hooks/useTts';

type SpeechRecognitionLike = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((e: SpeechRecognitionResultEventLike) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: unknown) => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechRecognitionResultEventLike = {
  results?: ArrayLike<ArrayLike<{ transcript?: string }>>;
};

function getRecognition(): (new () => SpeechRecognitionLike) | null {
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

function normalize(input: string) {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim();
}

export function VoiceAssistant() {
  const enabled = useMemo(() => Boolean(import.meta.env.VITE_VOICE_ENABLED), []);
  const { supported: ttsSupported, speak } = useTts();
  const navigate = useNavigate();
  const Rec = useRef<ReturnType<typeof getRecognition>>(null);
  const rec = useRef<SpeechRecognitionLike | null>(null);
  const [listening, setListening] = useState(false);
  const [last, setLast] = useState<string>('');

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === 'undefined') return;
    Rec.current = getRecognition();
  }, [enabled]);

  function handleCommand(raw: string) {
    const text = normalize(raw);
    setLast(text);

    const go = (path: string, label: string) => {
      navigate(path);
      if (ttsSupported) speak(`Abrindo ${label}.`);
    };

    if (text.includes('contato')) return go('/contato', 'contato');
    if (text.includes('home') || text.includes('inicio') || text.includes('início')) return go('/', 'início');
    if (text.includes('plataforma')) return go('/platform', 'plataforma');
    if (text.includes('servicos') || text.includes('serviços')) return go('/services', 'serviços');
    if (text.includes('solucoes') || text.includes('soluções')) return go('/solucoes', 'soluções');
    if (text.includes('cases') || text.includes('trabalhos')) return go('/work', 'cases');
    if (text.includes('sobre')) return go('/about', 'sobre');
    if (text.includes('insights')) return go('/insights', 'insights');
    if (text.includes('templates')) return go('/templates', 'templates');
    if (text.includes('builder')) return go('/builder', 'builder');

    if (text.includes('ler') || text.includes('leia') || text.includes('resumir')) {
      const h1 = document.querySelector('h1')?.textContent?.trim() ?? '';
      const p = document.querySelector('main p')?.textContent?.trim() ?? '';
      const msg = [h1, p].filter(Boolean).join('. ');
      if (ttsSupported && msg) speak(msg);
      return;
    }

    if (text.includes('rolar') || text.includes('descer')) {
      window.scrollBy({ top: 720, behavior: 'smooth' });
      return;
    }

    if (text.includes('subir')) {
      window.scrollBy({ top: -720, behavior: 'smooth' });
      return;
    }

    if (ttsSupported) speak('Comando não reconhecido. Diga: contato, plataforma, serviços, soluções ou ler página.');
  }

  function start() {
    if (!enabled) return;
    if (typeof window === 'undefined') return;
    const Ctor = Rec.current;
    if (!Ctor) return;
    const r = new Ctor();
    r.continuous = false;
    r.interimResults = false;
    r.lang = 'pt-BR';
    r.onresult = (e) => {
      const t = e?.results?.[0]?.[0]?.transcript;
      if (typeof t === 'string') handleCommand(t);
    };
    r.onerror = () => setListening(false);
    r.onend = () => setListening(false);
    rec.current = r;
    setListening(true);
    r.start();
  }

  function stop() {
    rec.current?.stop();
    setListening(false);
  }

  if (!enabled) return null;

  return (
    <div className="fixed bottom-5 left-[4.25rem] z-50">
      <button
        type="button"
        onClick={() => (listening ? stop() : start())}
        className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/20 bg-black px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-2xl shadow-black/50 transition-all hover:-translate-y-0.5 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={listening ? 'Parar comandos de voz' : 'Iniciar comandos de voz'}
      >
        {listening ? 'Ouvindo…' : 'Voz'}
      </button>
      {last ? (
        <p className="mt-2 max-w-[220px] text-[11px] font-medium text-white/70">
          {last}
        </p>
      ) : null}
    </div>
  );
}
