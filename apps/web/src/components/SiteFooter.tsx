import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { BRAND } from '@/lib/brand';

const YEAR = new Date().getFullYear();

const SOCIALS = [
  { label: 'Instagram', Icon: Instagram, href: '#' },
  { label: 'YouTube', Icon: Youtube, href: '#' },
  { label: 'LinkedIn', Icon: Linkedin, href: '#' },
  ] as const;

const NAV_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/contato', label: 'Contato' },
  { to: '/politica', label: 'Politica de Privacidade' },
  { to: '/termos', label: 'Termos de Uso' },
  ] as const;

export function SiteFooter() {
    return (
          <footer className="bg-[#090D12] text-white">
                <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                          {/* Sobre */}
                                  <div>
                                              <div className="flex items-center gap-3">
                                                            <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                                                                            <span className="text-[11px] font-black tracking-[0.22em]">A</span>span>
                                                            </div>div>
                                                            <div>
                                                                            <div className="text-[13px] font-semibold tracking-[0.22em]">{BRAND.name}</div>div>
                                                                            <div className="text-xs text-white/55">Arquitetura de Operacoes Digitais</div>div>
                                                            </div>div>
                                              </div>div>
                                              <p className="mt-6 max-w-xs text-xs leading-relaxed text-white/60">
                                                            Uma plataforma para estruturar presenca, captacao e operacao digital com execucao
                                                            premium e foco em conversao.
                                              </p>p>
                                    {/* Redes sociais */}
                                              <div className="mt-6 flex gap-2">
                                                {SOCIALS.map(({ href, label, Icon }) => (
                            <a
                                                key={label}
                                                href={href}
                                                aria-label={label}
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                                              >
                                              <Icon size={16} />
                            </a>a>
                          ))}
                                              </div>div>
                                  </div>div>
                        
                          {/* Navegacao */}
                                  <div>
                                              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                                                            Navegacao
                                              </p>p>
                                              <ul className="mt-5 grid gap-3">
                                                {NAV_LINKS.map((link) => (
                            <li key={link.to}>
                                              <Link
                                                                    className="text-sm text-white/65 transition-colors hover:text-white"
                                                                    to={link.to}
                                                                  >
                                                {link.label}
                                              </Link>Link>
                            </li>li>
                          ))}
                                              </ul>ul>
                                  </div>div>
                        
                          {/* Contato / CTA */}
                                  <div>
                                              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                                                            Fale conosco
                                              </p>p>
                                              <p className="mt-5 text-xs leading-relaxed text-white/60">
                                                            Pronto para estruturar sua operacao digital? Entre em contato e receba uma proposta
                                                            personalizada.
                                              </p>p>
                                              <Link
                                                              to="/contato"
                                                              className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/90"
                                                            >
                                                            Iniciar conversa
                                              </Link>Link>
                                              <p className="mt-4 text-xs text-white/45">{BRAND.email}</p>p>
                                  </div>div>
                        </div>div>
                
                  {/* Rodape */}
                        <div className="mt-14 border-t border-white/10 pt-8">
                                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                              <span className="text-[11px] text-white/55">
                                                            &copy; {YEAR} {BRAND.name}. Todos os direitos reservados.
                                              </span>span>
                                              <nav
                                                              aria-label="Rodape"
                                                              className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-white/55"
                                                            >
                                                            <Link className="hover:text-white" to="/termos">
                                                                            Termos
                                                            </Link>Link>
                                                            <Link className="hover:text-white" to="/politica">
                                                                            Privacidade
                                                            </Link>Link>
                                              </nav>nav>
                                  </div>div>
                        </div>div>
                </div>div>
          </footer>footer>
        );
}</footer>
