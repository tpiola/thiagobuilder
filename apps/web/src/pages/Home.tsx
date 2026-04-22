import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applySeo } from '@/lib/seo';
import { HeroVideo } from '@/components/HeroVideo';
import { TemplateCard } from '@/components/TemplateCard';
import { TEMPLATES } from '@/data/templates';
import { LeadForm } from '@/components/LeadForm';
import { Reveal } from '@/components/Reveal';
import { BRAND } from '@/lib/brand';

const STEPS = [
  {
    t: '1 — Diagnose',
    d: 'Análise objetiva da operação, oferta e gargalos para definir a rota certa.',
  },
  {
    t: '2 — Architect',
    d: 'Arquitetura de páginas, navegação, copy e mensuração com padrão premium.',
  },
  {
    t: '3 — Build',
    d: 'Implementação por módulos: experiência, captura, automação e governança.',
  },
  {
    t: '4 — Activate',
    d: 'Entrada, qualificação e resposta com n8n, UTM e rastreio do funil.',
  },
  {
    t: '5 — Optimize',
    d: 'Iteração orientada a métricas: performance, conversão e qualidade do lead.',
  },
] as const;

export default function Home() {
  useEffect(() => {
    applySeo({
      title: 'ALTIQ — Arquitetura de Operações Digitais com IA',
      description:
        'Arquitetura de operações digitais com IA: hubs, sistemas e automações para lançar, captar, vender e escalar com execução premium.',
      canonicalPath: '/',
    });
  }, []);

  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden bg-[#090D12]" aria-labelledby="home-hero">
        <HeroVideo src={BRAND.heroVideoUrl} poster={BRAND.heroPosterUrl} />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 md:pb-28 md:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="mx-auto inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
                Premium AI-powered digital operations architecture platform
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 id="home-hero" className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Arquitetura digital com IA para marcas e operações que exigem alto padrão.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75">
                Construímos hubs, automações, ativos e sistemas de alta performance para transformar presença online em operação real.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/diagnostico"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Solicitar diagnóstico estratégico
                </Link>
                <Link
                  to="/templates"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Explorar a plataforma
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mx-auto mt-8 max-w-2xl text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                Estrutura, automação, autoridade e performance para operações digitais exigentes.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 text-left sm:grid-cols-4">
                {[
                  { k: 'A11y', v: 'WCAG-ready' },
                  { k: 'SEO', v: 'Indexação limpa' },
                  { k: 'Ops', v: 'n8n + Webhooks' },
                  { k: 'Métricas', v: 'Eventos do funil' },
                ].map((x) => (
                  <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">{x.k}</p>
                    <p className="mt-2 text-sm font-semibold text-white/90">{x.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white" aria-labelledby="hero-actions">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Atalhos</p>
              <h2 id="hero-actions" className="mt-2 text-xl font-semibold tracking-tight">
                Explore a plataforma por módulos e entregáveis
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/65">
                Navegue por templates, soluções e recursos. Cada página mantém linguagem formal, clareza e padrão premium.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/templates"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Ver templates
              </Link>
              <Link
                to="/builder"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-black/15 bg-white px-8 text-xs font-semibold uppercase tracking-[0.18em] text-black/80 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Abrir builder
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white" aria-labelledby="templates-home">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                Templates
              </p>
              <h2 id="templates-home" className="mt-2 text-2xl font-semibold tracking-tight">
                Templates por nicho, com estética editorial e execução previsível
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/65">
                Estrutura de páginas, SEO base e eventos do funil. Ao solicitar proposta, a captura encaminha o lead e inicia as automações.
              </p>
            </div>
            <Link
              to="/templates"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Ver catálogo
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEMPLATES.slice(0, 3).map((t) => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="border-t border-black/10 bg-[#fafafa]" aria-label="Como funciona">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
              Framework
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Diagnose → Architect → Build → Activate → Optimize</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.t} className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">{step.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead" className="border-t border-black/10 bg-white" aria-labelledby="lead-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-12 md:items-start md:py-16">
          <div className="md:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
              Diagnóstico
            </p>
            <h2 id="lead-heading" className="mt-2 text-2xl font-semibold tracking-tight">
              Quer estruturar sua operação com a ALTIQ?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black/65">
              Se você quer execução com padrão premium, envie seus dados. Você recebe proposta, próximos passos e um plano inicial orientado por métricas.
            </p>
          </div>
          <div className="md:col-span-6">
            <LeadForm
              source="hero"
              title="Receber proposta e próximos passos"
              description="Você entra no funil e recebe a proposta alinhada ao seu nicho, template e módulos."
              ctaLabel="Quero falar com a ALTIQ"
              context={{ intent: 'diagnostico' }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
