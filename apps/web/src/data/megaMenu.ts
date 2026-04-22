export type MenuPageCategory = 'SITE' | 'COMÉRCIO' | 'MARKETING' | 'FERRAMENTAS DE NEGÓCIO' | 'PARA EMPRESAS EM EXPANSÃO' | 'PARA FREELANCERS E AGÊNCIAS';

export type MenuPage = {
  slug: string;
  title: string;
  category: MenuPageCategory;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaTo: string;
};

export const MENU_PAGES: MenuPage[] = [
  {
    slug: 'sites-da-web',
    title: 'Sites da Web',
    category: 'SITE',
    description: 'Estrutura editorial premium com carregamento rápido, SEO limpo e páginas focadas em conversão.',
    highlights: ['Arquitetura de páginas', 'Tipografia e hierarquia', 'SEO técnico e performance'],
    ctaLabel: 'Ver templates',
    ctaTo: '/templates',
  },
  {
    slug: 'modelos-de-sites',
    title: 'Modelos de sites',
    category: 'SITE',
    description: 'Templates por nicho com estética premium e componentes reusáveis, prontos para sua oferta.',
    highlights: ['Catálogo por nicho', 'Seções essenciais', 'Galeria e prova social'],
    ctaLabel: 'Abrir catálogo',
    ctaTo: '/templates',
  },
  {
    slug: 'construtor-de-sites-com-ia',
    title: 'Construtor de Sites com IA',
    category: 'SITE',
    description: 'Um fluxo guiado para gerar estrutura, copy base e proposta, mantendo design consistente.',
    highlights: ['Checklist de páginas', 'Copy base por nicho', 'Entrega incremental'],
    ctaLabel: 'Abrir Template Builder',
    ctaTo: '/builder',
  },
  {
    slug: 'inteligencia-de-design',
    title: 'Inteligência de design',
    category: 'SITE',
    description: 'Sistema visual consistente: spacing, tipografia, cores e micro-interações com acabamento editorial.',
    highlights: ['Tokens e consistência', 'A11y e legibilidade', 'Motion sutil (sem exagero)'],
    ctaLabel: 'Começar agora',
    ctaTo: '/templates',
  },
  {
    slug: 'portfolios',
    title: 'Portfólios',
    category: 'SITE',
    description: 'Galerias com ritmo editorial para mostrar seu trabalho sem ruído e com alta qualidade visual.',
    highlights: ['Grid responsivo', 'Hero com vídeo', 'Detalhes de caso'],
    ctaLabel: 'Ver um template',
    ctaTo: '/templates/estetica-lux',
  },
  {
    slug: 'blogs',
    title: 'Blogs',
    category: 'SITE',
    description: 'Camada editorial para autoridade e SEO, com leitura confortável e navegação clara.',
    highlights: ['Estrutura de tópicos', 'Performance e indexação', 'Padrões de conteúdo'],
    ctaLabel: 'Explorar recursos',
    ctaTo: '/recursos',
  },
  {
    slug: 'analises',
    title: 'Análises',
    category: 'SITE',
    description: 'Eventos e métricas do funil: do clique no preço até o lead convertido e o follow-up.',
    highlights: ['Eventos do funil', 'UTM e origem', 'Decisões rápidas'],
    ctaLabel: 'Montar hub',
    ctaTo: '/builder',
  },
  {
    slug: 'todas-as-funcionalidades',
    title: 'Ver todas as funcionalidades',
    category: 'SITE',
    description: 'Mapa geral do sistema: templates, hub, captura, preço com gating, webhook e automações.',
    highlights: ['Templates', 'Hub (módulos)', 'Lead + webhook'],
    ctaLabel: 'Ir para o catálogo',
    ctaTo: '/templates',
  },

  {
    slug: 'comercio-eletronico',
    title: 'Comércio eletrônico',
    category: 'COMÉRCIO',
    description: 'Estrutura para vender com clareza: oferta, checkout e follow-up, com medição do funil.',
    highlights: ['Oferta e páginas', 'Checkout e pagamento', 'Automação pós-compra'],
    ctaLabel: 'Ver preço (gating)',
    ctaTo: '/templates/odontologia-pro?intent=price',
  },
  {
    slug: 'modelos-de-comercio-eletronico',
    title: 'Modelos de comércio eletrônico',
    category: 'COMÉRCIO',
    description: 'Layouts prontos para catálogo, produto e prova social, com estética premium.',
    highlights: ['Página de produto', 'Coleções', 'Prova social'],
    ctaLabel: 'Abrir catálogo',
    ctaTo: '/templates',
  },
  {
    slug: 'lojas-online',
    title: 'Lojas online',
    category: 'COMÉRCIO',
    description: 'Loja enxuta para converter com menos cliques, mantendo velocidade e design editorial.',
    highlights: ['Navegação clara', 'Carrinho simples', 'Métricas por etapa'],
    ctaLabel: 'Começar',
    ctaTo: '/builder',
  },
  {
    slug: 'servicos',
    title: 'Serviços',
    category: 'COMÉRCIO',
    description: 'Página de serviço com narrativa e CTA consistente: diagnóstico, proposta e follow-up.',
    highlights: ['Oferta e objeções', 'Prova e autoridade', 'CTA de alta conversão'],
    ctaLabel: 'Ver templates',
    ctaTo: '/templates',
  },
  {
    slug: 'faturamento',
    title: 'Faturamento',
    category: 'COMÉRCIO',
    description: 'Estrutura para reduzir fricção: status, cobrança e recuperação de oportunidades.',
    highlights: ['Links de pagamento', 'Status e tracking', 'Recuperação'],
    ctaLabel: 'Montar proposta',
    ctaTo: '/builder',
  },
  {
    slug: 'agendamento',
    title: 'Agendamento',
    category: 'COMÉRCIO',
    description: 'Agenda que reduz no-show com confirmação, lembretes e rotas claras no funil.',
    highlights: ['Slots e regras', 'Lembretes', 'Integração com follow-up'],
    ctaLabel: 'Ver módulos',
    ctaTo: '/builder',
  },
  {
    slug: 'conteudo-e-assinaturas',
    title: 'Conteúdo e Assinaturas',
    category: 'COMÉRCIO',
    description: 'Camada de recorrência com área de membros e acesso controlado por perfil.',
    highlights: ['Acesso por plano', 'Entrega premium', 'Retenção'],
    ctaLabel: 'Montar hub',
    ctaTo: '/builder',
  },
  {
    slug: 'doacoes',
    title: 'Doações',
    category: 'COMÉRCIO',
    description: 'Página de doação com confiança, clareza e acompanhamento do impacto.',
    highlights: ['Confiança e prova', 'Processo simples', 'Mensuração'],
    ctaLabel: 'Ver templates',
    ctaTo: '/templates',
  },
  {
    slug: 'solucoes-financeiras',
    title: 'Soluções Financeiras',
    category: 'COMÉRCIO',
    description: 'Fluxos de pagamento e conciliação com clareza operacional e visão de métricas.',
    highlights: ['Pagamentos', 'Conciliar e medir', 'Crescer com previsibilidade'],
    ctaLabel: 'Abrir builder',
    ctaTo: '/builder',
  },

  {
    slug: 'ferramentas-de-marketing',
    title: 'Ferramentas de marketing',
    category: 'MARKETING',
    description: 'Automação de aquisição: eventos, segmentação e campanhas orientadas a resultado.',
    highlights: ['Campanhas', 'Segmentação', 'Tracking'],
    ctaLabel: 'Ver preço (gating)',
    ctaTo: '/templates/personal-prime?intent=price',
  },
  {
    slug: 'campanhas-de-email',
    title: 'Campanhas de e-mail',
    category: 'MARKETING',
    description: 'Sequências para nutrir, reativar e converter com copy limpa e timing certo.',
    highlights: ['Sequências', 'Segmentos', 'Métricas'],
    ctaLabel: 'Montar fluxo',
    ctaTo: '/builder',
  },
  {
    slug: 'ferramentas-de-seo',
    title: 'Ferramentas de SEO',
    category: 'MARKETING',
    description: 'SEO técnico + estrutura editorial para ranquear com consistência e velocidade.',
    highlights: ['Schema e indexação', 'Core Web Vitals', 'Arquitetura de páginas'],
    ctaLabel: 'Ver templates',
    ctaTo: '/templates',
  },
  {
    slug: 'ferramentas-gratuitas',
    title: 'Ferramentas gratuitas',
    category: 'MARKETING',
    description: 'Recursos para acelerar a decisão: checklists, modelos e páginas enxutas.',
    highlights: ['Checklists', 'Modelos', 'Padrões de copy'],
    ctaLabel: 'Abrir catálogo',
    ctaTo: '/templates',
  },

  {
    slug: 'busca-de-dominio',
    title: 'Busca de domínio',
    category: 'FERRAMENTAS DE NEGÓCIO',
    description: 'Escolha um domínio memorável para reforçar marca e facilitar aquisição orgânica.',
    highlights: ['Nome e clareza', 'Consistência', 'Facilidade de lembrar'],
    ctaLabel: 'Falar com a ALTIQ',
    ctaTo: '/contato',
  },
  {
    slug: 'transferencia-de-dominio',
    title: 'Transferência de domínio',
    category: 'FERRAMENTAS DE NEGÓCIO',
    description: 'Organize ativos digitais e centralize o controle para ganhar velocidade operacional.',
    highlights: ['Governança', 'Organização', 'Velocidade'],
    ctaLabel: 'Ver funcionalidades',
    ctaTo: '/secao/todas-as-funcionalidades',
  },
  {
    slug: 'email-comercial',
    title: 'E-mail comercial',
    category: 'FERRAMENTAS DE NEGÓCIO',
    description: 'Comunique com confiança: identidade de marca e entregabilidade.',
    highlights: ['Marca', 'Entregabilidade', 'Processos'],
    ctaLabel: 'Montar proposta',
    ctaTo: '/builder',
  },

  {
    slug: 'altiq-premium',
    title: 'ALTIQ Premium',
    category: 'PARA EMPRESAS EM EXPANSÃO',
    description: 'Recursos avançados, escopo maior e suporte prioritário para operação em crescimento.',
    highlights: ['Execução avançada', 'Módulos completos', 'Prioridade'],
    ctaLabel: 'Solicitar proposta',
    ctaTo: '/#lead',
  },
  {
    slug: 'altiq-para-profissionais',
    title: 'ALTIQ para profissionais',
    category: 'PARA FREELANCERS E AGÊNCIAS',
    description: 'Entrega premium com operação simples: forte para profissionais e fácil para clientes.',
    highlights: ['Modelo de entrega', 'Padronização', 'Escalabilidade'],
    ctaLabel: 'Abrir builder',
    ctaTo: '/builder',
  },
  {
    slug: 'circulo',
    title: 'Círculo',
    category: 'PARA FREELANCERS E AGÊNCIAS',
    description: 'Parceria e padrões para acelerar entrega, qualidade e previsibilidade.',
    highlights: ['Padrões', 'Velocidade', 'Qualidade'],
    ctaLabel: 'Falar com a ALTIQ',
    ctaTo: '/contato',
  },
] as const;

export function findMenuPage(slug: string | undefined): MenuPage | null {
  if (!slug) return null;
  const page = MENU_PAGES.find((p) => p.slug === slug);
  return page ?? null;
}

export const MEGA_MENU = {
  site: {
    title: 'SITE',
    slugs: [
      'sites-da-web',
      'modelos-de-sites',
      'construtor-de-sites-com-ia',
      'inteligencia-de-design',
      'portfolios',
      'blogs',
      'analises',
      'todas-as-funcionalidades',
    ],
  },
  comercio: {
    title: 'COMÉRCIO',
    slugs: [
      'comercio-eletronico',
      'modelos-de-comercio-eletronico',
      'lojas-online',
      'servicos',
      'faturamento',
      'agendamento',
      'conteudo-e-assinaturas',
      'doacoes',
      'solucoes-financeiras',
    ],
  },
  marketing: {
    title: 'MARKETING',
    slugs: [
      'ferramentas-de-marketing',
      'campanhas-de-email',
      'ferramentas-de-seo',
      'ferramentas-gratuitas',
    ],
  },
  business: {
    title: 'FERRAMENTAS DE NEGÓCIO',
    slugs: ['busca-de-dominio', 'transferencia-de-dominio', 'email-comercial'],
  },
  cards: {
    growthTitle: 'PARA EMPRESAS EM EXPANSÃO',
    growthSlugs: ['altiq-premium'],
    proTitle: 'PARA FREELANCERS E AGÊNCIAS',
    proSlugs: ['altiq-para-profissionais', 'circulo'],
  },
} as const;

export type SolutionCategory = {
  slug: string;
  label: string;
  title: string;
  description: string;
  chips: string[];
  imageUrl: string;
};

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    slug: 'servicos-criativos',
    label: 'Serviços Criativos',
    title: 'Serviços Criativos',
    description:
      'Transforme projetos pessoais em projetos remunerados. Estruture oferta, portfólio, captação e follow-up com clareza e velocidade.',
    chips: ['Fotógrafos', 'Designers de Interiores', 'Designers gráficos', 'Arquitetos', 'Artistas', 'Moda e Vestuário'],
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=1400&fit=crop',
  },
  {
    slug: 'servicos-profissionais',
    label: 'Serviços profissionais',
    title: 'Serviços profissionais',
    description:
      'Página de serviço com narrativa e prova, proposta clara e CTA com captura inteligente. Feito para vender com autoridade sem ruído.',
    chips: ['Advocacia', 'Consultorias', 'Clínicas', 'Contabilidade', 'B2B', 'Especialistas'],
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&h=1400&fit=crop',
  },
  {
    slug: 'educacao-e-treinamento',
    label: 'Educação e Treinamento',
    title: 'Educação e Treinamento',
    description:
      'Do conteúdo ao produto: páginas de curso, calendário, área de membros e automações de onboarding para ativar e reter.',
    chips: ['Cursos', 'Mentorias', 'Escolas', 'Programas', 'Comunidades', 'Certificações'],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=1400&fit=crop',
  },
  {
    slug: 'beleza',
    label: 'Beleza',
    title: 'Beleza',
    description:
      'Agendamento, prova e estética. Um sistema que reduz no-show e transforma intenção em reserva com comunicação rápida.',
    chips: ['Salões', 'Estética', 'Barbearias', 'Clínicas', 'Spa', 'Terapias'],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=1400&fit=crop',
  },
  {
    slug: 'esportes-e-fitness',
    label: 'Esportes e Fitness',
    title: 'Esportes e Fitness',
    description:
      'Oferta clara, rotina e recorrência. Landing + conteúdo + acompanhamento para converter e manter retenção.',
    chips: ['Personal', 'Academias', 'Estúdios', 'Pilates', 'Corrida', 'Nutrição'],
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=1400&fit=crop',
  },
  {
    slug: 'saude-e-bem-estar',
    label: 'Saúde e bem-estar',
    title: 'Saúde e bem-estar',
    description:
      'Confiança e clareza. Páginas com linguagem precisa, fricção mínima e captura que respeita o contexto.',
    chips: ['Odonto', 'Fisio', 'Psicologia', 'Medicina', 'Nutrição', 'Clínicas'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=1400&fit=crop',
  },
  {
    slug: 'servicos-domiciliares',
    label: 'Serviços Domiciliares',
    title: 'Serviços Domiciliares',
    description:
      'Captação com prova e velocidade. Páginas enxutas com CTA direto e automações para resposta imediata.',
    chips: ['Reformas', 'Assistência', 'Limpeza', 'Instalações', 'Manutenção', 'Serviços'],
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=1400&fit=crop',
  },
  {
    slug: 'eventos-e-experiencias',
    label: 'Eventos e experiências',
    title: 'Eventos e experiências',
    description:
      'Do anúncio à confirmação. Estruture páginas de evento, captura, pagamento e follow-up sem dispersão.',
    chips: ['Workshops', 'Retreats', 'Shows', 'Cerimônias', 'Ingressos', 'Experiências'],
    imageUrl: 'https://images.unsplash.com/photo-1515165562835-c3b8b5b7f5df?w=1200&h=1400&fit=crop',
  },
  {
    slug: 'organizacoes',
    label: 'Organizações beneficentes e sem fins lucrativos',
    title: 'Organizações',
    description:
      'Doação com confiança: narrativa, transparência e funil simples. Medição e automações para recorrência.',
    chips: ['ONGs', 'Institutos', 'Projetos', 'Campanhas', 'Doações', 'Impacto'],
    imageUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&h=1400&fit=crop',
  },
  {
    slug: 'pessoal',
    label: 'Pessoal',
    title: 'Pessoal',
    description:
      'Uma presença simples, precisa e bonita. Portfólio, bio e contato com acabamento premium.',
    chips: ['Bio sites', 'Portfólio', 'Links', 'One-page', 'Autoridade', 'Contato'],
    imageUrl: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?w=1200&h=1400&fit=crop',
  },
];

export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
};

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    slug: 'central-de-ajuda',
    title: 'Central de Ajuda',
    description: 'Guias e vídeos detalhados sobre a plataforma, templates e como começar a usar.',
  },
  {
    slug: 'blog',
    title: 'Blog',
    description: 'Histórias e soluções para o empreendedor moderno: estrutura, oferta e execução.',
  },
  {
    slug: 'forum',
    title: 'Fórum',
    description: 'Uma comunidade para discutir boas práticas, padrões e evolução dos hubs.',
  },
  {
    slug: 'contrate-um-especialista',
    title: 'Contrate um especialista',
    description: 'Conectamos você ao especialista certo para elevar design, copy e conversão.',
  },
  {
    slug: 'webinarios',
    title: 'Webinários',
    description: 'Sessões online onde você aprende o básico e aprimora com exemplos reais.',
  },
];

export const RESOURCES_INSPIRE = {
  title: 'Feito com ALTIQ',
  description: 'Uma coleção de templates e hubs inspiradores criados para operações reais.',
  mediaUrl: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?w=1200&h=800&fit=crop',
  to: '/templates',
} as const;

