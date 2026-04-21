export type LeadSource = 'hero' | 'sticky' | 'exit' | 'footer';

export type AbVariant = 'A' | 'B';

export type LeadPayload = {
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  city?: string;
  source: LeadSource;
  variant: AbVariant;
  consent: boolean;
  utm?: Record<string, string | undefined>;
};

