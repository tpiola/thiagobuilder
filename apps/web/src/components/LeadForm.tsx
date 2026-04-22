import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import type { LeadPayload, LeadSource } from '@altiq/types';
import { assignAbVariant, getOrCreateVisitorId, isEmail, pickUtm } from '@altiq/utils';
import { Button, Input } from '@altiq/ui';

const Schema = z.object({
  name: z.string().trim().min(2).max(80).optional().or(z.literal('')),
  email: z.string().trim().min(3).max(160),
  phone: z.string().trim().min(8).max(40).optional().or(z.literal('')),
  city: z.string().trim().min(2).max(80).optional().or(z.literal('')),
  consent: z.boolean(),
});

type FormValues = z.infer<typeof Schema>;

async function submitLead(
  payload: LeadPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (import.meta.env.DEV) {
    const key = 'altiq:dev-leads';
    const raw = window.localStorage.getItem(key);
    let list: unknown[] = [];
    try {
      const parsed = raw ? (JSON.parse(raw) as unknown) : [];
      list = Array.isArray(parsed) ? parsed : [];
    } catch {
      list = [];
    }
    list.unshift({ ...payload, receivedAt: new Date().toISOString() });
    window.localStorage.setItem(key, JSON.stringify(list.slice(0, 50)));
    return { ok: true };
  }

  try {
    const r = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (r.ok) return { ok: true };
    const data: unknown = await r.json().catch(() => null);
    const error =
      typeof data === 'object' &&
      data !== null &&
      'error' in data &&
      typeof (data as { error?: unknown }).error === 'string'
        ? String((data as { error?: unknown }).error)
        : 'submit_failed';
    return { ok: false, error };
  } catch {
    return { ok: false, error: 'network_error' };
  }
}

type LeadFormProps = {
  source: LeadSource;
  title?: string;
  description?: string;
  ctaLabel?: string;
  context?: Record<string, unknown>;
  onSuccess?: () => void;
  className?: string;
};

export function LeadForm({
  source,
  title = 'Diagnóstico gratuito (2 minutos)',
  description =
    'Você recebe um plano de ação com 3 alavancas de conversão e um roteiro de automação personalizado para o seu negócio.',
  ctaLabel = 'Quero meu diagnóstico grátis',
  context,
  onSuccess,
  className,
}: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const visitorId = useMemo(() => getOrCreateVisitorId(window.localStorage), []);
  const variant = useMemo(() => assignAbVariant(visitorId), [visitorId]);
  const utm = useMemo(() => pickUtm(window.location.search), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { consent: false }, mode: 'onBlur' });

  return (
    <form
      className={
        className ??
        'rounded-2xl border border-black/10 bg-white p-6 shadow-lg shadow-black/5 md:p-8'
      }
      onSubmit={handleSubmit(async (values) => {
        setError(null);
        setStatus('sending');

        const parsed = Schema.safeParse(values);
        if (!parsed.success) {
          setStatus('error');
          setError('Confira os campos e tente novamente.');
          return;
        }
        if (!isEmail(parsed.data.email)) {
          setStatus('error');
          setError('E-mail inválido.');
          return;
        }

        const payload: LeadPayload = {
          email: parsed.data.email,
          name: parsed.data.name || undefined,
          phone: parsed.data.phone || undefined,
          city: parsed.data.city || undefined,
          consent: parsed.data.consent,
          source,
          variant,
          utm,
          context,
        };

        const r = await submitLead(payload);
        if (r.ok) {
          setStatus('sent');
          onSuccess?.();
          return;
        }
        setStatus('error');
        setError('Não consegui enviar agora. Tente novamente em instantes.');
      })}
      aria-describedby={error ? 'lead-error' : undefined}
    >
      <div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-black/65">
          {description}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-black/65" htmlFor="name">
            Nome
          </label>
          <div className="mt-2">
            <Input
              id="name"
              autoComplete="name"
              placeholder="Seu nome"
              {...register('name')}
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-black/65" htmlFor="email">
            E-mail <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <div className="mt-2">
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="voce@empresa.com"
              aria-required="true"
              {...register('email', { required: true })}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-700" role="alert">
              Informe um e-mail válido.
            </p>
          )}
        </div>

        <div>
          <label className="text-xs font-semibold text-black/65" htmlFor="phone">
            WhatsApp
          </label>
          <div className="mt-2">
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(DDD) 99999-9999"
              {...register('phone')}
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-black/65" htmlFor="city">
            Cidade
          </label>
          <div className="mt-2">
            <Input
              id="city"
              autoComplete="address-level2"
              placeholder="Ex.: Curitiba"
              {...register('city')}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-black/20 accent-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          aria-required="true"
          {...register('consent', { required: true })}
        />
        <label className="text-xs leading-relaxed text-black/65" htmlFor="consent">
          Eu concordo em receber contato sobre diagnóstico e proposta, conforme a{' '}
          <a href="/politica" className="underline hover:text-black">
            política de privacidade
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p className="mt-1 text-xs text-red-700" role="alert">
          Confirme o consentimento para continuar.
        </p>
      )}

      {error && (
        <div
          id="lead-error"
          role="alert"
          className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-800"
        >
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={status === 'sending' || status === 'sent'}
          className="w-full sm:w-auto"
        >
          {status === 'sent'
            ? '✓ Enviado — confira seu e-mail'
            : status === 'sending'
              ? 'Enviando…'
              : ctaLabel}
        </Button>
        <p className="text-[11px] text-black/60">
          Sem spam. Cancele a qualquer momento.
        </p>
      </div>
    </form>
  );
}
