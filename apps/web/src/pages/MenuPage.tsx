import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { applySeo } from '@/lib/seo';
import { findMenuPage } from '@/data/megaMenu';

export default function MenuPage() {
  const { slug } = useParams();
  const page = findMenuPage(slug);

  useEffect(() => {
    if (!page) return;
    applySeo({
      title: `${page.title} — ALTIQ`,
      description: page.description,
      canonicalPath: window.location.pathname,
    });
  }, [page]);

  if (!page) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight">Página não encontrada</h1>
        <p className="mt-3 text-sm text-black/65">Volte para navegar pelo catálogo e recursos.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/templates"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-black/85"
          >
            Ver templates
          </Link>
          <Link
            to="/builder"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 px-5 text-sm font-semibold text-black/80 transition-colors hover:bg-black/5"
          >
            Abrir builder
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
            {page.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{page.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/65">{page.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={page.ctaTo}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85"
            >
              {page.ctaLabel}
            </Link>
            <Link
              to="/templates"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-black/15 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-black/80 transition-colors hover:bg-black/5"
            >
              Explorar templates
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 rounded-3xl border border-black/10 bg-white p-6 md:p-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Visão geral</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Uma página individual para esta seção</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/65">
                Esta rota é independente e aparece tanto no menu superior quanto no rodapé. O topo da Home fica com carrossel; aqui você tem leitura focada.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-black/10">
                <img
                  src={
                    'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20editorial%20website%20section%20page%2C%20clean%20typography%2C%20grid%20layout%2C%20high%20end%20web%20design%2C%20subtle%20texture%2C%20soft%20shadow%2C%20realistic%20ui%20mockup&image_size=landscape_16_9'
                  }
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {page.highlights.map((h) => (
            <div key={h} className="rounded-2xl border border-black/10 bg-[#fafafa] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Destaque</p>
              <p className="mt-3 text-sm font-semibold text-black">{h}</p>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                Estrutura com design consistente, semântica e performance para manter o padrão premium.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
