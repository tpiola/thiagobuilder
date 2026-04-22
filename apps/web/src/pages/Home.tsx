import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applySeo } from '@/lib/seo';
import { HeroCarousel } from '@/components/HeroCarousel';
import { TemplateCard } from '@/components/TemplateCard';
import { TEMPLATES } from '@/data/templates';
import { LeadForm } from '@/components/LeadForm';

const STEPS = [
  {
    t: '1 — Template por nicho',
    d: 'Escolha um layout editorial premium com estrutura de conversão pronta.',
  },
  {
    t: '2 — Módulos do hub',
    d: 'Adicione agendamento, automações, SEO e analytics conforme o escopo.',
  },
  {
    t: '3 — Preço com lead',
    d: 'Ao ver preço, você captura o lead e dispara as automações via webhook.',
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
      <HeroCarousel
        slides={[
          {
            src: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=top%20navigation%20bar%20ui%2C%20minimal%20website%20header%2C%20high%20contrast%2C%20editorial%2C%20clean%20layout%2C%20cinematic%20lighting%2C%2035mm%2C%20soft%20film%20grain%2C%20realistic%20ui%20mockup&image_size=landscape_16_9',
            alt: 'Menu superior fixo',
          },
          {
            src: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=website%20hero%20carousel%20banner%2C%20premium%20editorial%20layout%2C%20dark%20background%2C%20subtle%20gradient%2C%20clean%20typography%2C%20high%20end%20web%20design%2C%2035mm%2C%20soft%20grain&image_size=landscape_16_9',
            alt: 'Carrossel no topo',
          },
          {
            src: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=responsive%20website%20layout%20on%20mobile%20tablet%20desktop%2C%20navigation%20and%20footer%20links%2C%20premium%20editorial%20design%2C%20clean%20grid%2C%20soft%20shadows%2C%20realistic%20device%20mockup&image_size=landscape_16_9',
            alt: 'Responsivo em mobile, tablet e desktop',
          },
        ]}
      />

      <section className="border-t border-black/10 bg-white" aria-labelledby="hero-actions">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Atalhos</p>
              <h2 id="hero-actions" className="mt-2 text-xl font-semibold tracking-tight">
                Navegue por páginas individuais (rotas próprias)
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/65">
                A Home agora abre com carrossel. O menu fixo e o rodapé levam para as seções.
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
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white" aria-labelledby="templates-home">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                Templates
              </p>
              <h2 id="templates-home" className="mt-2 text-2xl font-semibold tracking-tight">
                Escolha um template e direcione o clique de preço para lead
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/65">
                Catálogo com visual editorial premium. O botão de preço abre a página do template com captura e webhook.
              </p>
            </div>
            <Link
              to="/templates"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Ver catálogo
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEMPLATES.slice(0, 3).map((t) => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="border-t border-black/10 bg-[#fafafa]" aria-label="Como funciona">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
            Método
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Rápido, mensurável, escalável</h2>
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
              Quer acelerar com a ALTIQ?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black/65">
              Se você prefere que a gente faça a arquitetura, entrega e automações, envie seus dados. O retorno vem com proposta e próximos passos.
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
