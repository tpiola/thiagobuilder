import { Link } from 'react-router-dom';
import { MEGA_MENU, findMenuPage } from '@/data/megaMenu';

const YEAR = new Date().getFullYear();

function FooterSectionLinks({ slugs }: { slugs: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-3">
      {slugs.map((slug) => {
        const page = findMenuPage(slug);
        if (!page) return null;
        return (
          <li key={slug}>
            <Link className="text-black/65 transition-colors hover:text-black" to={`/secao/${page.slug}`}>
              {page.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-black text-white shrink-0">
                <span className="text-sm font-black">P</span>
              </div>
              <div className="text-sm font-semibold tracking-tight">ALTIQ</div>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-black/60">
              Funil de aquisição + autoridade local + automação. Um sistema único para transformar tráfego em agenda cheia.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid gap-8 text-xs md:col-span-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold uppercase tracking-[0.16em] text-black/60">Site</p>
              <FooterSectionLinks slugs={MEGA_MENU.site.slugs} />
            </div>

            <div>
              <p className="font-semibold uppercase tracking-[0.16em] text-black/60">Comércio</p>
              <FooterSectionLinks slugs={MEGA_MENU.comercio.slugs} />
            </div>

            <div>
              <p className="font-semibold uppercase tracking-[0.16em] text-black/60">Marketing</p>
              <FooterSectionLinks slugs={MEGA_MENU.marketing.slugs} />
            </div>

            <div>
              <p className="font-semibold uppercase tracking-[0.16em] text-black/60">Negócio</p>
              <FooterSectionLinks slugs={MEGA_MENU.business.slugs} />

              <p className="mt-8 font-semibold uppercase tracking-[0.16em] text-black/60">Mais</p>
              <nav className="mt-4 flex flex-col gap-3" aria-label="Links do site">
                <Link className="text-black/65 transition-colors hover:text-black" to="/solucoes">
                  Soluções
                </Link>
                <Link className="text-black/65 transition-colors hover:text-black" to="/recursos">
                  Recursos
                </Link>
                <Link className="text-black/65 transition-colors hover:text-black" to="/templates">
                  Templates
                </Link>
                <Link className="text-black/65 transition-colors hover:text-black" to="/contato">
                  Contato
                </Link>
                <Link className="text-black/65 transition-colors hover:text-black" to="/politica">
                  Política
                </Link>
                <Link className="text-black/65 transition-colors hover:text-black" to="/termos">
                  Termos
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/8 pt-8 text-[11px] text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {YEAR} ALTIQ. Todos os direitos reservados.</span>
          <span>Feito com IA e automação para negócios que crescem.</span>
        </div>
      </div>
    </footer>
  );
}
