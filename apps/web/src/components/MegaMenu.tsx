import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { cn } from '@altiq/ui';
import { MEGA_MENU, RESOURCE_ITEMS, RESOURCES_INSPIRE, SOLUTION_CATEGORIES, findMenuPage } from '@/data/megaMenu';

type MegaMenuProps = {
  variant: 'overlay' | 'solid';
};

type ActiveMenu = 'produtos' | 'solucoes' | 'recursos' | null;

function chipClassName(active = false) {
  return cn(
    'inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold transition-colors',
    active ? 'border-white/15 bg-white/10 text-white' : 'border-white/10 bg-white/5 text-white/70 hover:text-white',
  );
}

function SolutionsPanel({ onMouseLeave }: { onMouseLeave: () => void }) {
  const [active, setActive] = useState(SOLUTION_CATEGORIES[0]?.slug ?? 'servicos-criativos');
  const category = useMemo(
    () => SOLUTION_CATEGORIES.find((c) => c.slug === active) ?? SOLUTION_CATEGORIES[0],
    [active],
  );

  if (!category) return null;

  return (
    <div
      className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/95 shadow-2xl shadow-black/50"
      onMouseLeave={onMouseLeave}
    >
      <div className="grid gap-10 px-8 py-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Soluções para</p>
          <ul className="mt-5 grid gap-3">
            {SOLUTION_CATEGORIES.map((c) => (
              <li key={c.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(c.slug)}
                  onFocus={() => setActive(c.slug)}
                  className={cn(
                    'w-full text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                    c.slug === category.slug ? 'text-white' : 'text-white/65 hover:text-white',
                  )}
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Explorar</p>
          <Link
            to={`/solucoes/${category.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {category.title}
            <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">{category.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {category.chips.map((chip) => (
              <span key={chip} className={chipClassName()}>
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img
              src={category.imageUrl}
              alt=""
              className="h-[240px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel({ onMouseLeave }: { onMouseLeave: () => void }) {
  return (
    <div
      className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/95 shadow-2xl shadow-black/50"
      onMouseLeave={onMouseLeave}
    >
      <div className="grid gap-10 px-8 py-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Base de conhecimento</p>
          <div className="mt-6 grid gap-7 md:grid-cols-2">
            {RESOURCE_ITEMS.map((item) => (
              <Link
                key={item.slug}
                to={`/recursos/${item.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/65">{item.description}</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 group-hover:text-white">
                  Abrir
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Inspire-se</p>
          <Link
            to={RESOURCES_INSPIRE.to}
            className="mt-6 block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <div className="relative aspect-[16/9]">
              <img
                src={RESOURCES_INSPIRE.mediaUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />
            </div>
            <div className="px-6 py-5">
              <p className="text-sm font-semibold text-white">{RESOURCES_INSPIRE.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/65">{RESOURCES_INSPIRE.description}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function useOutsidePointerDown(ref: React.RefObject<HTMLElement>, onOutside: () => void) {
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) onOutside();
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [onOutside, ref]);
}

function MenuColumn({ title, slugs }: { title: string; slugs: readonly string[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
        {title}
      </p>
      <ul className="mt-4 grid gap-3">
        {slugs.map((slug) => {
          const page = findMenuPage(slug);
          if (!page) return null;
          return (
            <li key={slug}>
              <Link
                to={`/secao/${page.slug}`}
                className="block text-sm font-semibold text-white/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {page.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Card({ slug }: { slug: string }) {
  const page = findMenuPage(slug);
  if (!page) return null;
  return (
    <Link
      to={`/secao/${page.slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <p className="text-sm font-semibold text-white">{page.title}</p>
      <p className="mt-2 text-xs leading-relaxed text-white/65">{page.description}</p>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 group-hover:text-white">
        Abrir
      </p>
    </Link>
  );
}

export function MegaMenu({ variant }: MegaMenuProps) {
  const location = useLocation();
  const [active, setActive] = useState<ActiveMenu>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const close = () => setActive(null);

  useEffect(() => {
    close();
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useOutsidePointerDown(rootRef, close);

  const triggerBase = useMemo(
    () =>
      cn(
        'inline-flex items-center gap-2 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors',
        variant === 'overlay' ? 'text-white/85 hover:text-white' : 'text-black/65 hover:text-black',
      ),
    [variant],
  );

  const panelId = active ? `mega-${active}` : undefined;

  return (
    <div ref={rootRef} className="relative">
      <div className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
        <button
          type="button"
          className={triggerBase}
          aria-haspopup="dialog"
          aria-expanded={active === 'produtos'}
          aria-controls={panelId}
          onMouseEnter={() => setActive('produtos')}
          onFocus={() => setActive('produtos')}
          onClick={() => setActive((s) => (s === 'produtos' ? null : 'produtos'))}
        >
          Produtos
          <span className={cn('transition-transform', active === 'produtos' ? 'rotate-180' : '')}>▾</span>
        </button>

        <button
          type="button"
          className={triggerBase}
          aria-haspopup="dialog"
          aria-expanded={active === 'solucoes'}
          aria-controls={panelId}
          onMouseEnter={() => setActive('solucoes')}
          onFocus={() => setActive('solucoes')}
          onClick={() => setActive((s) => (s === 'solucoes' ? null : 'solucoes'))}
        >
          Soluções
          <span className={cn('transition-transform', active === 'solucoes' ? 'rotate-180' : '')}>▾</span>
        </button>

        <button
          type="button"
          className={triggerBase}
          aria-haspopup="dialog"
          aria-expanded={active === 'recursos'}
          aria-controls={panelId}
          onMouseEnter={() => setActive('recursos')}
          onFocus={() => setActive('recursos')}
          onClick={() => setActive((s) => (s === 'recursos' ? null : 'recursos'))}
        >
          Recursos
          <span className={cn('transition-transform', active === 'recursos' ? 'rotate-180' : '')}>▾</span>
        </button>

        <Link
          to="/conecte-se"
          className={cn(
            'py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors',
            variant === 'overlay' ? 'text-white/85 hover:text-white' : 'text-black/65 hover:text-black',
          )}
        >
          Conecte-se
        </Link>

        <div className="hidden items-center gap-2 lg:flex" aria-label="Redes sociais">
          {[
            { label: 'Instagram', Icon: Instagram, href: '#' },
            { label: 'YouTube', Icon: Youtube, href: '#' },
            { label: 'LinkedIn', Icon: Linkedin, href: '#' },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border transition-colors',
                variant === 'overlay'
                  ? 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  : 'border-black/10 bg-black/2 text-black/65 hover:bg-black/5 hover:text-black',
              )}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <Link
          to="/comecar"
          className={cn(
            'inline-flex h-10 items-center justify-center rounded-xl px-5 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors',
            variant === 'overlay'
              ? 'bg-white text-black hover:bg-white/90'
              : 'bg-black text-white hover:bg-black/85',
          )}
        >
          Comece agora
        </Link>
      </div>

      {active && (
        <div id={panelId} role="dialog" aria-label="Menu" className="hidden md:block">
          <div className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed left-0 right-0 top-16 z-50 px-6" onMouseLeave={close}>
            {active === 'produtos' && (
              <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/95 shadow-2xl shadow-black/50">
                <div className="grid gap-10 px-8 py-8 lg:grid-cols-12">
                  <div className="grid gap-10 lg:col-span-9 lg:grid-cols-4">
                    <MenuColumn title={MEGA_MENU.site.title} slugs={MEGA_MENU.site.slugs} />
                    <MenuColumn title={MEGA_MENU.comercio.title} slugs={MEGA_MENU.comercio.slugs} />
                    <MenuColumn title={MEGA_MENU.marketing.title} slugs={MEGA_MENU.marketing.slugs} />
                    <MenuColumn title={MEGA_MENU.business.title} slugs={MEGA_MENU.business.slugs} />
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      {MEGA_MENU.cards.growthTitle}
                    </p>
                    <div className="mt-4 grid gap-3">
                      {MEGA_MENU.cards.growthSlugs.map((s) => (
                        <Card key={s} slug={s} />
                      ))}
                    </div>

                    <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      {MEGA_MENU.cards.proTitle}
                    </p>
                    <div className="mt-4 grid gap-3">
                      {MEGA_MENU.cards.proSlugs.map((s) => (
                        <Card key={s} slug={s} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {active === 'solucoes' && <SolutionsPanel onMouseLeave={close} />}
            {active === 'recursos' && <ResourcesPanel onMouseLeave={close} />}
          </div>
        </div>
      )}
    </div>
  );
}
