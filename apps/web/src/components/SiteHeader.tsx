import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from '@altiq/ui';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/contato', label: 'Contato' },
  ] as const;

export function SiteHeader() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
        setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const overlay = location.pathname === '/' && !scrolled;

  const headerClassName = cn(
        'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors',
        overlay
          ? 'border-white/10 bg-black/40 text-white'
          : 'border-white/10 bg-black/80 text-white',
      );

  return (
        <header className={headerClassName}>
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                  {/* Logo */}
                        <Link
                                    to="/"
                                    className={cn(
                                                  'flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                                                  'focus-visible:ring-white focus-visible:ring-offset-black',
                                                )}
                                    aria-label="Ir para a home"
                                  >
                                  <div
                                                className={cn(
                                                                'grid h-9 w-9 place-items-center rounded-lg border text-xs font-semibold tracking-[0.22em]',
                                                                'border-white/15 text-white',
                                                              )}
                                              >
                                              A
                                  </div>div>
                                  <div className="leading-tight">
                                              <div className="text-[13px] font-semibold tracking-[0.22em]">ALTIQ</div>div>
                                              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                                                            Operacoes digitais com IA
                                              </div>div>
                                  </div>div>
                        </Link>Link>
                
                  {/* Nav desktop */}
                        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegacao principal">
                          {NAV_LINKS.map((link) => (
                      <NavLink
                                      key={link.to}
                                      to={link.to}
                                      end={link.to === '/'}
                                      className={({ isActive }) =>
                                                        cn(
                                                                            'py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors',
                                                                            isActive ? 'text-white' : 'text-white/70 hover:text-white',
                                                                          )
                                      }
                                    >
                        {link.label}
                      </NavLink>NavLink>
                    ))}
                                  <Link
                                                to="/contato"
                                                className="inline-flex h-10 items-center justify-center rounded-xl bg-white px-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                              >
                                              Comecar agora
                                  </Link>Link>
                        </nav>nav>
                
                  {/* Menu mobile toggle */}
                        <button
                                    type="button"
                                    className={cn(
                                                  'inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors md:hidden',
                                                  'text-white/85 hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-black',
                                                )}
                                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                                    aria-expanded={menuOpen}
                                    onClick={() => setMenuOpen((o) => !o)}
                                  >
                          {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>button>
                </div>div>
        
          {/* Menu mobile */}
          {menuOpen && (
                  <div className="border-t border-white/10 bg-black/90 md:hidden">
                            <nav className="mx-auto max-w-6xl px-6 py-5" aria-label="Navegacao mobile">
                                        <div className="grid gap-5">
                                          {NAV_LINKS.map((link) => (
                                    <NavLink
                                                        key={link.to}
                                                        to={link.to}
                                                        end={link.to === '/'}
                                                        className={({ isActive }) =>
                                                                              cn(
                                                                                                      'text-sm font-semibold',
                                                                                                      isActive ? 'text-white' : 'text-white/70 hover:text-white',
                                                                                                    )
                                                        }
                                                      >
                                      {link.label}
                                    </NavLink>NavLink>
                                  ))}
                                                      <Link
                                                                        to="/contato"
                                                                        className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/90"
                                                                      >
                                                                      Comecar agora
                                                      </Link>Link>
                                        </div>div>
                            </nav>nav>
                  </div>div>
              )}
        </header>header>
      );
}</div>
