import { Link, NavLink } from 'react-router-dom';
import { cn } from '@piola/ui';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-black text-white">
            <span className="text-sm font-black">P</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Piola Builder</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/80">IA para negócios locais</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em] md:flex">
          <NavLink
            to="/"
            className={({ isActive }) => cn('transition-colors hover:text-black/60', isActive ? 'text-black' : 'text-black/70')}
          >
            Início
          </NavLink>
          <a className="transition-colors hover:text-black/60 text-black/70" href="#como-funciona">
            Método
          </a>
          <a className="transition-colors hover:text-black/60 text-black/70" href="#prova">
            Provas
          </a>
          <a className="transition-colors hover:text-black/60 text-black/70" href="#mapa">
            Localização
          </a>
          <a
            className="inline-flex h-10 items-center justify-center rounded-xl bg-black px-4 text-xs font-semibold text-white transition-colors hover:bg-black/90"
            href="#lead"
          >
            Diagnóstico grátis
          </a>
        </nav>
      </div>
    </header>
  );
}

