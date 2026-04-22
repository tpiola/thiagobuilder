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
    coverImageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=2000&h=1125&fit=crop',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1600&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1600&h=1200&fit=crop',
    ],
    basePriceCents: 490000,
    includedModuleIds: ['crm-inbox', 'analytics'],
  },
  {
    slug: 'odontologia-pro',
    name: 'Odonto Pro',
    niche: 'Clínica odontológica',
    tagline: 'Prova social, confiança e agenda cheia.',
    coverImageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=2000&h=1125&fit=crop',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=1200&fit=crop',
    ],
    basePriceCents: 490000,
    includedModuleIds: ['crm-inbox', 'seo'],
  },
  {
    slug: 'personal-prime',
    name: 'Personal Prime',
    niche: 'Personal trainer',
    tagline: 'Oferta clara + follow-up automático.',
    coverImageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=2000&h=1125&fit=crop',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=1600&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=1200&fit=crop',
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
