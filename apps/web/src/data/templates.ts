export type TemplateDefinition = {
  slug: string;
  name: string;
  niche: string;
  tagline: string;
  coverImageUrl: string;
  galleryImageUrls: string[];
  basePriceCents: number;
  includedModuleIds: string[];
};

export const TEMPLATES: TemplateDefinition[] = [
  {
    slug: 'estetica-lux',
    name: 'Estética Lux',
    niche: 'Clínica de estética',
    tagline: 'Editorial minimal com conversão em 2 cliques.',
    coverImageUrl: '/hero-slide-1.svg',
    galleryImageUrls: [
      '/hero-slide-2.svg',
      '/hero-slide-3.svg',
      '/hero-slide-1.svg',
    ],
    basePriceCents: 490000,
    includedModuleIds: ['crm-inbox', 'analytics'],
  },
  {
    slug: 'odontologia-pro',
    name: 'Odonto Pro',
    niche: 'Clínica odontológica',
    tagline: 'Prova social, confiança e agenda cheia.',
    coverImageUrl: '/hero-slide-2.svg',
    galleryImageUrls: [
      '/hero-slide-1.svg',
      '/hero-slide-3.svg',
      '/hero-slide-2.svg',
    ],
    basePriceCents: 490000,
    includedModuleIds: ['crm-inbox', 'seo'],
  },
  {
    slug: 'personal-prime',
    name: 'Personal Prime',
    niche: 'Personal trainer',
    tagline: 'Oferta clara + follow-up automático.',
    coverImageUrl: '/hero-slide-3.svg',
    galleryImageUrls: [
      '/hero-slide-1.svg',
      '/hero-slide-2.svg',
      '/hero-slide-3.svg',
    ],
    basePriceCents: 390000,
    includedModuleIds: ['analytics'],
  },
] as const;

export function findTemplate(slug: string | undefined): TemplateDefinition | null {
  if (!slug) return null;
  const t = TEMPLATES.find((x) => x.slug === slug);
  return t ?? null;
}
