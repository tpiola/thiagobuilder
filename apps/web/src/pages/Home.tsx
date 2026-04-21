import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LeadForm } from '@/components/LeadForm';
import { applySeo } from '@/lib/seo';

const STEPS = [
  { t: '1 — Oferta clara', d: 'Mensagem direta, sem ruído, que chega antes da concorrência.' },
  { t: '2 — Prova social', d: 'Evidência rápida que reduz o medo e acelera a decisão.' },
  { t: '3 — Ação imediata', d: 'Formulário curto e follow-up automático no mesmo minuto.' },
] as const;

const METRICS = [
  { k: '+31%', v: 'aumento médio em conversões em páginas locais' },
  { k: '−28%', v: 'redução no abandono no primeiro contato' },
  { k: '<3 min', v: 'tempo para o lead receber a primeira resposta' },
] as const;

const TESTIMONIALS = [
  {
    quote: 'Em 3 semanas a agenda encheu de verdade. Nunca imaginei que era tão simples quanto ter o sistema certo.',
    author: 'Mariana T.',
    role: 'Clínica Estética · Curitiba',
  },
  {
    quote: 'O formulário chegou antes do WhatsApp e o lead já estava nutrido quando eu liguei. Fechei na primeira ligação.',
    author: 'Ricardo A.',
    role: 'Consultório Odontológico · Londrina',
  },
  {
    quote: 'Antes eu perdia lead por demora. Agora o sistema trabalha enquanto estou atendendo.',
    author: 'Fernanda C.',
    role: 'Personal Trainer · São Paulo',
  },
] as const;

function MapSection() {
  const address = 'Rua Exemplo, 123 - Centro';
  const city = 'Curitiba - PR';
  const query = encodeURIComponent(`${address}, ${city}`);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const iframeSrc = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section id="mapa" aria-labelledby="mapa-heading" className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">Localização</p>
          <h2 id="mapa-heading" className="mt-3 text-2xl font-semibold tracking-tight">
            Abra no GPS e venha nos visitar
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/65">
            Conhecer o espaço antes de decidir aumenta a confiança e reduz o atrito na jornada de compra.
          </p>
          <div className="mt-7">
            <a
              className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir endereço no Google Maps"
            >
              Abrir no Google Maps
            </a>
          </div>
          <p className="mt-5 text-xs text-black/60">
            {address} — {city}
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-black/10">
          <iframe
            title="Localização no Google Maps"
            src={iframeSrc}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    applySeo({
      title: 'Piola Builder — IA e Automação para Negócios Locais',
      description:
        'Sistema de aquisição e automação para negócios locais: mais leads qualificados, mais agenda cheia, menos desperdício.',
      canonicalPath: '/',
    });
  }, []);

  return (
    <main>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-white"
      >
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-12 md:items-center md:py-28">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex rounded-full border border-black/12 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/60"
            >
              Crescimento previsível para negócios locais
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.07 }}
              className="mt-6 text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl"
            >
              Mais leads qualificados,{' '}
              <br className="hidden md:block" />
              mais agenda cheia —{' '}
              <br className="hidden md:block" />
              com IA e automação.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-black/65"
            >
              Você ganha uma jornada de compra enxuta: proposta clara, prova social,
              fricção mínima e captura de lead conectada ao seu fluxo de nutrição.
            </motion.p>

            {/* Method steps */}
            <motion.div
              id="como-funciona"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.21 }}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
              aria-label="Como funciona"
            >
              {STEPS.map((step) => (
                <div
                  key={step.t}
                  className="rounded-2xl border border-black/10 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/55">
                    {step.t}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">{step.d}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-5" id="lead">
            <LeadForm source="hero" />
          </div>
        </div>

        {/* Decorative gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,0,0,0.05),transparent_55%),radial-gradient(ellipse_at_80%_0%,rgba(0,0,0,0.04),transparent_50%)]"
        />
      </section>

      {/* Social proof — numbers */}
      <section
        id="prova"
        aria-labelledby="prova-heading"
        className="border-t border-black/10 bg-[#fafafa]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
            Resultados
          </p>
          <h2
            id="prova-heading"
            className="mt-3 text-2xl font-semibold tracking-tight"
          >
            Números que tiram o risco da decisão
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/65">
            A conversão sobe quando o cérebro entende rapidamente: isso funciona para pessoas como eu.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {METRICS.map((m) => (
              <div
                key={m.k}
                className="rounded-2xl border border-black/10 bg-white p-7"
              >
                <p className="text-3xl font-semibold tracking-tight">{m.k}</p>
                <p className="mt-2 text-sm leading-relaxed text-black/65">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="depoimentos-heading"
        className="border-t border-black/10 bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
            Depoimentos
          </p>
          <h2
            id="depoimentos-heading"
            className="mt-3 text-2xl font-semibold tracking-tight"
          >
            Quem já transformou o negócio
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                className="rounded-2xl border border-black/10 bg-[#fafafa] p-7"
              >
                <blockquote className="text-sm leading-relaxed text-black/75">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-black/8 pt-4">
                  <p className="text-xs font-semibold text-black">{t.author}</p>
                  <p className="mt-0.5 text-[11px] text-black/60">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-black/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Próximo passo
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Pronto para encher a agenda?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Receba em 2 minutos um diagnóstico com 3 alavancas de crescimento para o seu negócio local.
          </p>
          <div className="mt-8">
            <a
              href="#lead"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Quero meu diagnóstico gratuito
            </a>
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}
