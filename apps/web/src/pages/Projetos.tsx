import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applySeo } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { LeadForm } from '@/components/LeadForm';

type Project = {
    slug: string;
    niche: string;
    title: string;
    tagline: string;
    imageUrl: string;
    status: 'disponivel' | 'em-breve';
    tags: string[];
};

const PROJECTS: Project[] = [
  {
        slug: 'estetica-premium',
        niche: 'Clinica de Estetica',
        title: 'Estetica Premium',
        tagline: 'Hub editorial com agendamento, prova social e automacao de leads.',
        imageUrl:
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&h=800&q=75',
        status: 'em-breve',
        tags: ['Landing Page', 'SEO', 'Automacao'],
  },
  {
        slug: 'odontologia-pro',
        niche: 'Clinica Odontologica',
        title: 'Odonto Pro',
        tagline: 'Presenca digital de alto padrao com captura de pacientes e follow-up automatico.',
        imageUrl:
                'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&h=800&q=75',
        status: 'em-breve',
        tags: ['Hub Digital', 'CRM', 'Funil'],
  },
  {
        slug: 'personal-trainer',
        niche: 'Personal Trainer',
        title: 'Personal Prime',
        tagline: 'Oferta clara, depoimentos e fluxo de vendas para profissionais fitness.',
        imageUrl:
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&h=800&q=75',
        status: 'em-breve',
        tags: ['Vendas', 'Conversao', 'Automacao'],
  },
  {
        slug: 'advocacia-digital',
        niche: 'Escritorio de Advocacia',
        title: 'Advocacia Digital',
        tagline: 'Autoridade, captacao de clientes e sistema de atendimento para advogados.',
        imageUrl:
                'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&h=800&q=75',
        status: 'em-breve',
        tags: ['Autoridade', 'SEO Local', 'Leads'],
  },
  {
        slug: 'arquitetura-interiores',
        niche: 'Arquitetura & Interiores',
        title: 'Studio Arc',
        tagline: 'Portfolio editorial com briefing online e captacao de projetos de alto valor.',
        imageUrl:
                'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=800&q=75',
        status: 'em-breve',
        tags: ['Portfolio', 'Premium', 'Briefing Online'],
  },
  {
        slug: 'consultoria-empresarial',
        niche: 'Consultoria Empresarial',
        title: 'Consult Pro',
        tagline: 'Hub de autoridade com diagnostico online, proposta automatica e funil B2B.',
        imageUrl:
                'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=800&q=75',
        status: 'em-breve',
        tags: ['B2B', 'Funil', 'Proposta Automatica'],
  },
  ];

export default function Projetos() {
    useEffect(() => {
          applySeo({
                  title: 'Projetos — ALTIQ',
                  description:
                            'Hubs digitais por nicho com execucao premium. Cada projeto entrega estrutura, automacao e conversao.',
                  canonicalPath: '/projetos',
    });
    }, []);

  return (
        <main className="bg-white">
          {/* Hero */}
              <section className="border-b border-black/10 bg-[#090D12]">
                      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                                <Reveal>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                                                          Projetos
                                            </p>p>
                                </Reveal>Reveal>
                                <Reveal delay={0.06}>
                                            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                                                          Hubs digitais prontos para o seu nicho.
                                            </h1>h1>
                                </Reveal>Reveal>
                                <Reveal delay={0.12}>
                                            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70">
                                                          Cada projeto e um sistema completo: landing page editorial, automacao de leads,
                                                          SEO base e eventos do funil. Desenvolvido para converter desde o primeiro acesso.
                                            </p>p>
                                </Reveal>Reveal>
                                <Reveal delay={0.18}>
                                            <div className="mt-8 flex flex-wrap gap-3">
                                              {['Clinicas', 'Profissionais Liberais', 'Consultorias', 'Servicos Premium'].map(
                          (tag) => (
                                              <span
                                                                    key={tag}
                                                                    className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70"
                                                                  >
                                                {tag}
                                              </span>span>
                                            ),
                        )}
                                            </div>div>
                                </Reveal>Reveal>
                      </div>div>
              </section>section>
        
          {/* Grid de projetos */}
              <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
                      <Reveal className="mb-8 flex items-end justify-between">
                                <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                                                          Catalogo
                                            </p>p>
                                            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                                              {PROJECTS.length} projetos disponibilizados em breve
                                            </h2>h2>
                                </div>div>
                      </Reveal>Reveal>
              
                      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {PROJECTS.map((project, i) => (
                      <Reveal key={project.slug} delay={0.04 * i}>
                                    <article className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md">
                                      {/* Imagem */}
                                                    <div className="relative h-52 overflow-hidden bg-black/5">
                                                                      <img
                                                                                            src={project.imageUrl}
                                                                                            alt={project.title}
                                                                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                                            loading="lazy"
                                                                                            decoding="async"
                                                                                          />
                                                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                                      {/* Badge de nicho */}
                                                                      <div className="absolute left-4 top-4">
                                                                                          <span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                                                                                            {project.niche}
                                                                                            </span>span>
                                                                      </div>div>
                                                      {/* Badge de status */}
                                                                      <div className="absolute right-4 top-4">
                                                                                          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black">
                                                                                                                Em breve
                                                                                            </span>span>
                                                                      </div>div>
                                                    </div>div>
                                    
                                      {/* Conteudo */}
                                                    <div className="p-6">
                                                                      <h3 className="text-base font-semibold tracking-tight text-black">
                                                                        {project.title}
                                                                      </h3>h3>
                                                                      <p className="mt-2 text-sm leading-relaxed text-black/65">{project.tagline}</p>p>
                                                    
                                                      {/* Tags */}
                                                                      <div className="mt-4 flex flex-wrap gap-2">
                                                                        {project.tags.map((tag) => (
                                              <span
                                                                        key={tag}
                                                                        className="inline-flex items-center rounded-lg border border-black/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/55"
                                                                      >
                                                {tag}
                                              </span>span>
                                            ))}
                                                                      </div>div>
                                                    
                                                      {/* CTA */}
                                                                      <div className="mt-5">
                                                                                          <Link
                                                                                                                  to="/contato"
                                                                                                                  className="inline-flex h-10 items-center justify-center rounded-xl bg-black px-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                                                                                                >
                                                                                                                Solicitar proposta
                                                                                            </Link>Link>
                                                                      </div>div>
                                                    </div>div>
                                    </article>article>
                      </Reveal>Reveal>
                    ))}
                      </div>div>
              </section>section>
        
          {/* Secao de aviso - em construcao */}
              <section className="border-t border-black/10 bg-[#fafafa]">
                      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
                                <Reveal className="mx-auto max-w-3xl text-center">
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/55">
                                                          Plataforma
                                            </p>p>
                                            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                                                          Produtos sendo finalizados.
                                            </h2>h2>
                                            <p className="mt-4 text-sm leading-relaxed text-black/65">
                                                          Cada hub esta sendo construido com padroes editoriais premium, SEO tecnico,
                                                          automacoes com n8n e rastreamento do funil. Enquanto isso, voce ja pode solicitar
                                                          uma proposta personalizada para o seu nicho.
                                            </p>p>
                                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                                          <Link
                                                                            to="/contato"
                                                                            className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                                                          >
                                                                          Falar com a ALTIQ
                                                          </Link>Link>
                                                          <Link
                                                                            to="/"
                                                                            className="inline-flex h-12 items-center justify-center rounded-xl border border-black/15 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-black/70 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                                                          >
                                                                          Voltar ao inicio
                                                          </Link>Link>
                                            </div>div>
                                </Reveal>Reveal>
                      </div>div>
              </section>section>
        
          {/* Lead form */}
              <section id="lead" className="border-t border-black/10 bg-white">
                      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-12 md:items-start md:py-16">
                                <div className="md:col-span-6">
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                                                          Diagnostico
                                            </p>p>
                                            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                                                          Quer um projeto para o seu nicho?
                                            </h2>h2>
                                            <p className="mt-4 text-sm leading-relaxed text-black/65">
                                                          Informe seu segmento e receba uma proposta com escopo, estrutura e investimento
                                                          alinhados ao seu mercado.
                                            </p>p>
                                </div>div>
                                <div className="md:col-span-6">
                                            <LeadForm
                                                            source="projetos"
                                                            title="Solicitar proposta para o meu nicho"
                                                            description="Voce recebe a proposta personalizada com escopo e proximo passo."
                                                            ctaLabel="Quero minha proposta"
                                                            context={{ intent: 'projetos' }}
                                                          />
                                </div>div>
                      </div>div>
              </section>section>
        </main>main>
      );
}</main>
