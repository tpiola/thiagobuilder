type LeadBody = {
  email?: unknown;
  name?: unknown;
  phone?: unknown;
  company?: unknown;
  city?: unknown;
  source?: unknown;
  variant?: unknown;
  consent?: unknown;
  utm?: unknown;
};

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  statusCode: number;
  setHeader: (name: string, value: string) => void;
  end: (body?: string) => void;
};

function json(res: ApiResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default async function handler(req: unknown, res: unknown) {
  const request = req as ApiRequest;
  const response = res as ApiResponse;

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return json(response, 405, { ok: false, error: 'method_not_allowed' });
  }

  const body: LeadBody = (request.body ?? {}) as LeadBody;
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const consent = typeof body?.consent === 'boolean' ? body.consent : false;

  if (!email || !isEmail(email)) return json(response, 400, { ok: false, error: 'invalid_email' });
  if (!consent) return json(response, 400, { ok: false, error: 'consent_required' });

  const payload = {
    email,
    name: typeof body?.name === 'string' ? body.name.trim() : undefined,
    phone: typeof body?.phone === 'string' ? body.phone.trim() : undefined,
    company: typeof body?.company === 'string' ? body.company.trim() : undefined,
    city: typeof body?.city === 'string' ? body.city.trim() : undefined,
    source: typeof body?.source === 'string' ? body.source : 'hero',
    variant: typeof body?.variant === 'string' ? body.variant : 'A',
    consent,
    utm: isObject(body?.utm) ? body.utm : undefined,
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) return json(response, 500, { ok: false, error: 'missing_webhook' });

  const secret = process.env.LEAD_WEBHOOK_SECRET;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (secret) headers['X-Althiq-Webhook-Secret'] = secret;

  const r = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!r.ok) return json(response, 502, { ok: false, error: 'webhook_failed' });
  return json(response, 200, { ok: true });
}

