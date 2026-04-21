import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-tight">Piola Builder</div>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-black/70">
              Funil de aquisição + autoridade local + automação. Um sistema único para transformar tráfego em agenda cheia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-xs">
            <div>
              <div className="font-semibold uppercase tracking-[0.16em] text-black/60">Legal</div>
              <div className="mt-3 flex flex-col gap-2">
                <Link className="text-black/70 hover:text-black" to="/politica">
                  Política de privacidade
                </Link>
                <Link className="text-black/70 hover:text-black" to="/termos">
                  Termos de uso
                </Link>
              </div>
            </div>
            <div>
              <div className="font-semibold uppercase tracking-[0.16em] text-black/60">Contato</div>
              <div className="mt-3 flex flex-col gap-2">
                <a className="text-black/70 hover:text-black" href="mailto:contato@piolabuilder.com">
                  contato@piolabuilder.com
                </a>
                <a className="text-black/70 hover:text-black" href="#lead">
                  Solicitar diagnóstico
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-[11px] text-black/80">© {new Date().getFullYear()} Piola Builder. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

