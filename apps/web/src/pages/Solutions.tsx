import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { applySeo } from '@/lib/seo';
import { SOLUTION_CATEGORIES } from '@/data/megaMenu';

export default function Solutions() {
  const { slug } = useParams();
  const defaultSlug = SOLUTION_CATEGORIES[0]?.slug ?? 'servicos-criativos';
  const [active, setActive] = useState(slug ?? defaultSlug);

  useEffect(() => {
    if (!slug) {
      setActive(defaultSlug);
      return;
    }
    setActive(slug);
  }, [defaultSlug, slug]);

  const category = useMemo(
    () => SOLUTION_CATEGORIES.find((c) => c.slug === active) ?? SOLUTION_CATEGORIES[0],
    [active],
  );

  useEffect(() => {
    if (!category) return;
    applySeo({
      title: `${category.title} — Soluções ALTIQ`,
      description: category.description,
      canonicalPath: slug ? `/solucoes/${category.slug}` : '/solucoes',
      ogImage: category.imageUrl,
    });
  }, [category, slug]);

  if (!category) return null;

  return (
    <main className="bg-[#090D12] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Soluções</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{category.title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">{category.description}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-black/70 p-8 shadow-2xl shadow-black/40 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Soluções para</p>
            <ul className="mt-5 grid gap-3">
              {SOLUTION_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/solucoes/${c.slug}`}
                    onMouseEnter={() => setActive(c.slug)}
                    onClick={() => setActive(c.slug)}
                    className={
                      c.slug === category.slug
                        ? 'text-sm font-semibold text-white'
                        : 'text-sm font-semibold text-white/65 hover:text-white'
                    }
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Explorar</p>
            <h2 className="mt-5 text-lg font-semibold">{category.title} →</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">{category.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/75"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={category.imageUrl} alt="" className="h-[280px] w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
