import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LeadForm } from '@/components/LeadForm';
import { applySeo } from '@/lib/seo';

function MapSection() {
  const address = 'Rua Exemplo, 123 - Centro';
  const city = 'Curitiba - PR';
  const query = encodeURIComponent(`${address}, ${city}`);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const iframeSrc = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section id="mapa" className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Ver no mapa e ir com GPS</h2>
          <p className="mt-3 text-sm leading-relaxed text-black/70">
            Clique para abrir rota no Google Maps. Isso aumenta confiança e reduz atrito na decisão.
          </p>
          <div className="mt-6">
            <a
              className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:bg-black/90"
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="mt-5 text-xs text-black/60">
            Endereço: {address} — {city}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-black/10">
          <iframe
            title="Google Maps"
            src={iframeSrc}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    applySeo({
      title: 'Piola Builder — IA para Negócios Locais',
      description: 'Sistema de aquisição e automação para negócios locais: mais leads, mais agenda, menos desperdício.',
      canonicalPath: '/',
    });
  }, []);

  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/70"
            >
              Crescimento previsível para negócios locais
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Mais leads qualificados,\nmais agenda cheia —\ncom IA e automação.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-black/70"
            >
              Você ganha uma jornada de compra enxuta: proposta clara, prova social, fricção mínima e captura de lead conectada ao seu fluxo de nutrição.
            </motion.p>

            <div id="como-funciona" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { t: '1) Oferta', d: 'Mensagem simples e direta, sem ruído.' },
                { t: '2) Prova', d: 'Evidência rápida para reduzir medo.' },
                { t: '3) Ação', d: 'Formulário curto e follow-up imediato.' },
              ].map((i) => (
                <div key={i.t} className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">{i.t}</div>
                  <div className="mt-2 text-sm text-black/70">{i.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5" id="lead">
            <LeadForm source="hero" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.06),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.05),transparent_45%)]" />
      </section>

      <section id="prova" className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Prova social que tira o “risco” da decisão</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/70">
            A conversão sobe quando o cérebro entende rapidamente: “isso funciona para pessoas como eu”.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { k: '+31%', v: 'mais conversões em páginas locais' },
              { k: '-28%', v: 'menos abandono no primeiro contato' },
              { k: '<3min', v: 'tempo para o lead receber resposta' },
            ].map((m) => (
              <div key={m.k} className="rounded-3xl border border-black/10 bg-white p-6">
                <div className="text-3xl font-semibold tracking-tight">{m.k}</div>
                <div className="mt-2 text-sm text-black/70">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}
