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

const img = (prompt: string, size: string) =>
  `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

export const TEMPLATES: TemplateDefinition[] = [
  {
    slug: 'estetica-lux',
    name: 'Estética Lux',
    niche: 'Clínica de estética',
    tagline: 'Editorial minimal com conversão em 2 cliques.',
    coverImageUrl: img(
      'editorial premium website hero, dark green plants shelf bokeh, cinematic, shallow depth of field, soft grain, minimal typography, luxury, high-end, moody lighting',
      'landscape_16_9',
    ),
    galleryImageUrls: [
      img('luxury skincare product photography, softbox, clean background, minimal, premium editorial, 35mm, subtle grain', 'landscape_4_3'),
      img('modern clinic interior, warm light, minimal furniture, premium, cinematic, 35mm, subtle grain', 'landscape_4_3'),
      img('close-up hands holding phone with booking interface, premium, cinematic, shallow depth of field', 'landscape_4_3'),
    ],
    basePriceCents: 490000,
    includedModuleIds: ['crm-inbox', 'analytics'],
  },
  {
    slug: 'odontologia-pro',
    name: 'Odonto Pro',
    niche: 'Clínica odontológica',
    tagline: 'Prova social, confiança e agenda cheia.',
    coverImageUrl: img(
      'premium editorial dentistry clinic hero background, soft natural light, minimal composition, high-end, cinematic, shallow depth of field, subtle grain',
      'landscape_16_9',
    ),
    galleryImageUrls: [
      img('dental clinic minimal interior, premium, clean lines, cinematic light, subtle grain', 'landscape_4_3'),
      img('smiling patient portrait, premium editorial, soft light, shallow depth of field, subtle grain', 'landscape_4_3'),
      img('appointment calendar interface on laptop, premium editorial, minimal, cinematic', 'landscape_4_3'),
    ],
    basePriceCents: 490000,
    includedModuleIds: ['crm-inbox', 'seo'],
  },
  {
    slug: 'personal-prime',
    name: 'Personal Prime',
    niche: 'Personal trainer',
    tagline: 'Oferta clara + follow-up automático.',
    coverImageUrl: img(
      'premium editorial fitness hero, dark gym ambience, soft highlights, minimal typography area, cinematic, 35mm, subtle grain',
      'landscape_16_9',
    ),
    galleryImageUrls: [
      img('fitness coaching consultation, premium editorial, warm light, minimal', 'landscape_4_3'),
      img('mobile phone with workout plan interface, premium editorial, cinematic, shallow depth of field', 'landscape_4_3'),
      img('close up kettlebell and towel, premium editorial still life, subtle grain', 'landscape_4_3'),
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

