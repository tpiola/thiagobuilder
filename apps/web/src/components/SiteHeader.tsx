import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from '@altiq/ui';
import { Menu, X } from 'lucide-react';
import { MegaMenu } from '@/components/MegaMenu';

export function SiteHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  const headerClassName = cn('fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md');

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 text-black">
        <Link
          to="/"
          className={cn(
            'flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'focus-visible:ring-black focus-visible:ring-offset-white',
          )}
          aria-label="Ir para a home"
        >
          <div
            className={cn(
              'grid h-9 w-9 place-items-center rounded-lg border text-xs font-semibold tracking-[0.22em]',
              'border-black/15 text-black',
            )}
          >
            A
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold tracking-[0.22em]">ALTIQ</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/55">
              Operações digitais com IA
            </div>
          </div>
        </Link>

        <MegaMenu variant="solid" />

        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors md:hidden',
            'text-black/70 hover:bg-black/5 focus-visible:ring-black focus-visible:ring-offset-white',
          )}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-5" aria-label="Navegação mobile">
            <div className="grid gap-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn('text-sm font-semibold', isActive ? 'text-black' : 'text-black/70 hover:text-black')
                }
              >
                Início
              </NavLink>
              <NavLink
                to="/solucoes"
                className={({ isActive }) =>
                  cn('text-sm font-semibold', isActive ? 'text-black' : 'text-black/70 hover:text-black')
                }
              >
                Soluções
              </NavLink>
              <NavLink
                to="/recursos"
                className={({ isActive }) =>
                  cn('text-sm font-semibold', isActive ? 'text-black' : 'text-black/70 hover:text-black')
                }
              >
                Recursos
              </NavLink>
              <NavLink
                to="/templates"
                className={({ isActive }) =>
                  cn('text-sm font-semibold', isActive ? 'text-black' : 'text-black/70 hover:text-black')
                }
              >
                Templates
              </NavLink>
              <NavLink
                to="/builder"
                className={({ isActive }) =>
                  cn('text-sm font-semibold', isActive ? 'text-black' : 'text-black/70 hover:text-black')
                }
              >
                Template Builder
              </NavLink>
              <NavLink
                to="/conecte-se"
                className={({ isActive }) =>
                  cn('text-sm font-semibold', isActive ? 'text-black' : 'text-black/70 hover:text-black')
                }
              >
                Conecte-se
              </NavLink>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  cn('text-sm font-semibold', isActive ? 'text-black' : 'text-black/70 hover:text-black')
                }
              >
                Contato
              </NavLink>
              <NavLink
                to="/politica"
                className={({ isActive }) =>
                  cn('text-sm font-semibold', isActive ? 'text-black' : 'text-black/70 hover:text-black')
                }
              >
                Política
              </NavLink>
              <NavLink
                to="/termos"
                className={({ isActive }) =>
                  cn('text-sm font-semibold', isActive ? 'text-black' : 'text-black/70 hover:text-black')
                }
              >
                Termos
              </NavLink>
              <NavLink
                to="/comecar"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-black px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85"
              >
                Comece agora
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
