import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applySeo } from '@/lib/seo';
import { HeroVideo } from '@/components/HeroVideo';
import { LeadForm } from '@/components/LeadForm';
import { Reveal } from '@/components/Reveal';
import { BRAND } from '@/lib/brand';

const STEPS = [
  {
        t: '1 — Diagnose',
        d: 'Analise objetiva da operacao, oferta e gargalos para definir a rota certa.',
  },
  {
        t: '2 — Architect',
        d: 'Arquitetura de paginas, navegacao, copy e mensuracao com padrao premium.',
  },
  {
        t: '3 — Build',
        d: 'Implementacao por modulos: experiencia, captura, automacao e governanca.',
  },
  {
        t: '4 — Activate',
        d: 'Entrada, qualificacao e resposta com n8n, UTM e rastreio do funil.',
  },
  {
        t: '5 — Optimize',
        d: 'Iteracao orientada a metricas: performance, conversao e qualidade do lead.',
  },
  ] as const;

export default function Home() {
    useEffect(() => {
          applySeo({
                  title: 'ALTIQ — Arquitetura de Operacoes Digitais com IA',
                  description:
                            'Arquitetura de operacoes digitais com IA: hubs, sistemas e automacoes para lancar, captar, vender e escalar com execucao premium.',
                  canonicalPath: '/',
          });
    }, []);

  return (
        <main className="bg-white">
          {/* Hero */}
              <section
                        className="relative isolate overflow-hidden bg-[#090D12]"
                        aria-labelledby="home-hero"
                      >
                      <HeroVideo src={BRAND.heroVideoUrl} poster={BRAND.heroPosterUrl} />
                      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 md:pb-28 md:pt-36">
                                <div className="mx-auto max-w-4xl text-center">
                                            <Reveal>
                                                          <p className="mx-auto inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
                                                                          Plataforma de arquitetura digital com IA
                                                          </p>p>
                                            </Reveal>Reveal>
                                            <Reveal delay={0.06}>
                                                          <h1
                                                                            id="home-hero"
                                                                            className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl"
                                                                          >
                                                                          Arquitetura digital com IA para operar em{' '}
                                                                          <span className="altiq-serif">alto nivel</span>span>.
                                                          </h1>h1>
                                            </Reveal>Reveal>
                                            <Reveal delay={0.12}>
                                                          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75">
                                                                          Construimos hubs, automacoes, ativos e sistemas de alta performance para
                                                                          transformar presenca online em operacao real.
                                                          </p>p>
                                            </Reveal>Reveal>
                                            <Reveal delay={0.18}>
                                                          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                                                          <Link
                                                                                              to="/contato"
                                                                                              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                                                                            >
                                                                                            Solicitar diagnostico <span className="altiq-arrow">&#8594;</span>span>
                                                                          </Link>Link>
                                                                          <Link
                                                                                              to="/projetos"
                                                                                              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                                                                            >
                                                                                            Ver projetos <span className="altiq-arrow">&#8594;</span>span>
                                                                          </Link>Link>
                                                          </div>div>
                                            </Reveal>Reveal>
                                            <Reveal delay={0.24}>
                                                          <p className="mx-auto mt-8 max-w-2xl text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                                                                          Estrutura, automacao, autoridade e performance para operacoes digitais exigentes.
                                                          </p>p>
                                            </Reveal>Reveal>
                                            <Reveal delay={0.3}>
                                                          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 text-left sm:grid-cols-4">
                                                            {[
                        { k: 'A11y', v: 'WCAG-ready' },
                        { k: 'SEO', v: 'Indexacao limpa' },
                        { k: 'Ops', v: 'n8n + Webhooks' },
                        { k: 'Metricas', v: 'Eventos do funil' },
                                        ].map((x) => (
                                                            <div
                                                                                  key={x.k}
                                                                                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                                                                >
                                                                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                                                                                  {x.k}
                                                                                  </p>p>
                                                                                <p className="mt-2 text-sm font-semibold text-white/90">{x.v}</p>p>
                                                            </div>div>
                                                          ))}
                                                          </div>div>
                                            </Reveal>Reveal>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Atalhos rapidos */}
              <section className="border-t border-black/10 bg-white" aria-labelledby="hero-actions">
                      <div className="mx-auto max-w-6xl px-6 py-10">
                                <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                                            <div>
                                                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                                                                          Atalhos
                                                          </p>p>
                                                          <h2
                                                                            id="hero-actions"
                                                                            className="mt-2 text-xl font-semibold tracking-tight"
                                                                          >
                                                                          Explore a plataforma por modulos e entregaveis
                                                          </h2>h2>
                                                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/65">
                                                                          Navegue pelos projetos por nicho e veja como entregamos execucao com padrao
                                                                          premium.
                                                          </p>p>
                                            </div>div>
                                            <div className="flex flex-col gap-3 sm:flex-row">
                                                          <Link
                                                                            to="/projetos"
                                                                            className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                                                          >
                                                                          Ver projetos
                                                          </Link>Link>
                                                          <Link
                                                                            to="/contato"
                                                                            className="inline-flex h-12 items-center justify-center rounded-xl border border-black/15 bg-white px-8 text-xs font-semibold uppercase tracking-[0.18em] text-black/80 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                                                          >
                                                                          Falar com a ALTIQ
                                                          </Link>Link>
                                            </div>div>
                                </Reveal>Reveal>
                      </div>div>
              </section>section>
        
          {/* Como funciona */}
              <section
                        id="como-funciona"
                        className="border-t border-black/10 bg-[#fafafa]"
                        aria-label="Como funciona"
                      >
                      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
                                <Reveal>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                                                          Framework
                                            </p>p>
                                            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                                                          Diagnose &#8594; Architect &#8594; Build &#8594; Activate &#8594; Optimize
                                            </h2>h2>
                                </Reveal>Reveal>
                                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                  {STEPS.map((step) => (
                                      <div
                                                        key={step.t}
                                                        className="rounded-2xl border border-black/10 bg-white p-6"
                                                      >
                                                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                                                        {step.t}
                                                      </p>p>
                                                      <p className="mt-3 text-sm leading-relaxed text-black/65">{step.d}</p>p>
                                      </div>div>
                                    ))}
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Lead form */}
              <section
                        id="lead"
                        className="border-t border-black/10 bg-white"
                        aria-labelledby="lead-heading"
                      >
                      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-12 md:items-start md:py-16">
                                <div className="md:col-span-6">
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                                                          Diagnostico
                                            </p>p>
                                            <h2 id="lead-heading" className="mt-2 text-2xl font-semibold tracking-tight">
                                                          Quer estruturar sua operacao com a ALTIQ?
                                            </h2>h2>
                                            <p className="mt-4 text-sm leading-relaxed text-black/65">
                                                          Se voce quer execucao com padrao premium, envie seus dados. Voce recebe proposta,
                                                          proximos passos e um plano inicial orientado por metricas.
                                            </p>p>
                                </div>div>
                                <div className="md:col-span-6">
                                            <LeadForm
                                                            source="hero"
                                                            title="Receber proposta e proximos passos"
                                                            description="Voce entra no funil e recebe a proposta alinhada ao seu nicho e modulos."
                                                            ctaLabel="Quero falar com a ALTIQ"
                                                            context={{ intent: 'diagnostico' }}
                                                          />
                                </div>div>
                      </div>div>
              </section>section>
        </main>main>
      );
}</main>
