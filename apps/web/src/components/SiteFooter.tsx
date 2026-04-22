import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { ABOUT_ITEMS, INSIGHT_CATEGORIES, PLATFORM_ITEMS, SERVICE_ITEMS, SOLUTION_ITEMS, WORK_CASES } from '@/data/siteStructure';
import { MapEmbed } from '@/components/MapEmbed';
import { trackEvent } from '@/lib/analytics';

const YEAR = new Date().getFullYear();

const SOCIALS = [
  { label: 'Instagram', Icon: Instagram, env: 'VITE_SOCIAL_INSTAGRAM' },
  { label: 'YouTube', Icon: Youtube, env: 'VITE_SOCIAL_YOUTUBE' },
  { label: 'LinkedIn', Icon: Linkedin, env: 'VITE_SOCIAL_LINKEDIN' },
  { label: 'Facebook', Icon: Facebook, env: 'VITE_SOCIAL_FACEBOOK' },
  { label: 'X', Icon: Twitter, env: 'VITE_SOCIAL_X' },
] as const;

function getSocialHref(key: (typeof SOCIALS)[number]['env']): string | undefined {
  switch (key) {
    case 'VITE_SOCIAL_INSTAGRAM':
      return import.meta.env.VITE_SOCIAL_INSTAGRAM;
    case 'VITE_SOCIAL_YOUTUBE':
      return import.meta.env.VITE_SOCIAL_YOUTUBE;
    case 'VITE_SOCIAL_LINKEDIN':
      return import.meta.env.VITE_SOCIAL_LINKEDIN;
    case 'VITE_SOCIAL_FACEBOOK':
      return import.meta.env.VITE_SOCIAL_FACEBOOK;
    case 'VITE_SOCIAL_X':
      return import.meta.env.VITE_SOCIAL_X;
  }
}

export function SiteFooter() {
  return (
    <footer className="bg-[#090D12] text-white">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                <span className="text-[11px] font-black tracking-[0.22em]">A</span>
              </div>
              <div>
                <div className="text-[13px] font-semibold tracking-[0.22em]">{BRAND.name}</div>
                <div className="text-xs text-white/55">Arquitetura • Hub • Automação</div>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-white/60">
              Uma plataforma para estruturar presença, captação e operação digital com execução premium.
            </p>
          </div>

          <div className="grid gap-10 text-xs sm:grid-cols-2 lg:col-span-9 lg:grid-cols-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Plataforma</p>
              <ul className="mt-5 grid gap-3">
                {PLATFORM_ITEMS.map((i) => (
                  <li key={i.slug}>
                    <Link className="text-white/65 transition-colors hover:text-white" to={`/platform/${i.slug}`}>
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Serviços</p>
              <ul className="mt-5 grid gap-3">
                {SERVICE_ITEMS.map((i) => (
                  <li key={i.slug}>
                    <Link className="text-white/65 transition-colors hover:text-white" to={`/services/${i.slug}`}>
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Soluções</p>
              <ul className="mt-5 grid gap-3">
                {SOLUTION_ITEMS.map((i) => (
                  <li key={i.slug}>
                    <Link className="text-white/65 transition-colors hover:text-white" to={`/solucoes/${i.slug}`}>
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Insights</p>
              <ul className="mt-5 grid gap-3">
                {INSIGHT_CATEGORIES.map((i) => (
                  <li key={i.slug}>
                    <Link className="text-white/65 transition-colors hover:text-white" to={`/insights/${i.slug}`}>
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Empresa</p>
              <ul className="mt-5 grid gap-3">
                <li>
                  <Link className="text-white/65 transition-colors hover:text-white" to="/about">
                    Sobre
                  </Link>
                </li>
                {ABOUT_ITEMS.map((i) => (
                  <li key={i.slug}>
                    <Link className="text-white/65 transition-colors hover:text-white" to={`/about/${i.slug}`}>
                      {i.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link className="text-white/65 transition-colors hover:text-white" to="/work">
                    Cases
                  </Link>
                </li>
                {WORK_CASES.map((i) => (
                  <li key={i.slug}>
                    <Link className="text-white/65 transition-colors hover:text-white" to={`/work/${i.slug}`}>
                      {i.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link className="text-white/65 transition-colors hover:text-white" to="/contato">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Conecte-se</p>
              </div>
              <ul className="mt-5 grid gap-3">
                <li>
                  <Link className="text-white/65 transition-colors hover:text-white" to="/conecte-se">
                    Acessar
                  </Link>
                </li>
                <li>
                  <Link className="text-white/65 transition-colors hover:text-white" to="/comecar">
                    Comece agora
                  </Link>
                </li>
                <li>
                  <Link className="text-white/65 transition-colors hover:text-white" to="/contato">
                    Contato
                  </Link>
                </li>
              </ul>

              <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Seguir</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {SOCIALS.map(({ env, label, Icon }) => {
                  const href = getSocialHref(env);
                  if (!href) return null;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                      onClick={() => trackEvent('social_click', { network: label, location: 'footer' })}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>

              <div className="mt-10">
                <MapEmbed />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
              <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">
                Português
              </button>
              <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">
                R$ BRL
              </button>
            </div>

            <nav aria-label="Rodapé" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/60">
              <Link className="hover:text-white" to="/termos">
                Termos
              </Link>
              <Link className="hover:text-white" to="/politica">
                Privacidade
              </Link>
              <Link className="hover:text-white" to="/secao/preferencias-de-cookies">
                Preferências de cookies
              </Link>
              <Link className="hover:text-white" to="/secao/medidas-de-seguranca">
                Medidas de segurança
              </Link>
              <Link className="hover:text-white" to="/secao/mapa-do-site">
                Mapa do site
              </Link>
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-2 text-[11px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <span>© {YEAR} {BRAND.name}. Todos os direitos reservados.</span>
            <span className="text-white/45">{BRAND.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
