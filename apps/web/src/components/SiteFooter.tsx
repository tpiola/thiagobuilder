import { Link } from 'react-router-dom';

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-black text-white shrink-0">
                <span className="text-sm font-black">P</span>
              </div>
              <div className="text-sm font-semibold tracking-tight">Piola Builder</div>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-black/60">
              Funil de aquisição + autoridade local + automação. Um sistema único para transformar tráfego em agenda cheia.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 text-xs md:col-span-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.16em] text-black/50">Legal</p>
              <nav className="mt-4 flex flex-col gap-3" aria-label="Links legais">
                <Link className="text-black/65 transition-colors hover:text-black" to="/politica">
                  Política de privacidade
                </Link>
                <Link className="text-black/65 transition-colors hover:text-black" to="/termos">
                  Termos de uso
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-semibold uppercase tracking-[0.16em] text-black/50">Contato</p>
              <nav className="mt-4 flex flex-col gap-3" aria-label="Links de contato">
                <a
                  className="text-black/65 transition-colors hover:text-black"
                  href="mailto:contato@piolabuilder.com"
                >
                  contato@piolabuilder.com
                </a>
                <a
                  className="text-black/65 transition-colors hover:text-black"
                  href="#lead"
                >
                  Solicitar diagnóstico
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/8 pt-8 text-[11px] text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {YEAR} Piola Builder. Todos os direitos reservados.</span>
          <span>Feito com IA e automação para negócios que crescem.</span>
        </div>
      </div>
    </footer>
  );
}
