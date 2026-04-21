import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@piola/ui';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Método', href: '#como-funciona' },
  { label: 'Resultados', href: '#prova' },
  { label: 'Depoimentos', href: '#depoimentos-heading' },
  { label: 'Localização', href: '#mapa' },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-md">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-black text-white shrink-0">
            <span className="text-sm font-black">P</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Piola Builder</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/55">
              IA para negócios locais
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.14em] md:flex"
          aria-label="Navegação principal"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                'inline-flex items-center py-2 transition-colors hover:text-black/55',
                isActive ? 'text-black' : 'text-black/65',
              )
            }
          >
            Início
          </NavLink>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center py-2 text-black/65 transition-colors hover:text-black/55"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lead"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-black px-5 text-xs font-semibold text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Diagnóstico grátis
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-black/70 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="border-t border-black/10 bg-white px-6 pb-6 pt-4 md:hidden"
          aria-label="Navegação mobile"
        >
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn('py-1 transition-colors', isActive ? 'text-black' : 'text-black/65 hover:text-black')
              }
              onClick={() => setMenuOpen(false)}
            >
              Início
            </NavLink>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-black/65 transition-colors hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#lead"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-black text-sm font-semibold text-white transition-colors hover:bg-black/85"
              onClick={() => setMenuOpen(false)}
            >
              Diagnóstico grátis
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
