import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import type { LeadPayload, LeadSource } from '@piola/types';
import { assignAbVariant, getOrCreateVisitorId, isEmail, pickUtm } from '@piola/utils';
import { Button, Input } from '@piola/ui';

const Schema = z.object({
  name: z.string().trim().min(2).max(80).optional().or(z.literal('')),
  email: z.string().trim().min(3).max(160),
  phone: z.string().trim().min(8).max(40).optional().or(z.literal('')),
  company: z.string().trim().min(2).max(80).optional().or(z.literal('')),
  city: z.string().trim().min(2).max(80).optional().or(z.literal('')),
  consent: z.boolean(),
});

type FormValues = z.infer<typeof Schema>;

async function submitLead(payload: LeadPayload): Promise<{ ok: true } | { ok: false; error: string }> {
  if (import.meta.env.DEV) {
    const key = 'piola:dev-leads';
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
      typeof data === 'object' && data !== null && 'error' in data && typeof (data as { error?: unknown }).error === 'string'
        ? String((data as { error?: unknown }).error)
        : 'submit_failed';
    return { ok: false, error };
  } catch {
    return { ok: false, error: 'network_error' };
  }
}

export function LeadForm({ source }: { source: LeadSource }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const visitorId = useMemo(() => getOrCreateVisitorId(window.localStorage), []);
  const variant = useMemo(() => assignAbVariant(visitorId), [visitorId]);
  const utm = useMemo(() => pickUtm(window.location.search), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { consent: false },
    mode: 'onBlur',
  });

  return (
    <form
      className="rounded-3xl border border-black/10 bg-white p-6 shadow-lg shadow-black/5 md:p-8"
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
          company: parsed.data.company || undefined,
          city: parsed.data.city || undefined,
          consent: parsed.data.consent,
          source,
          variant,
          utm,
        };

        const r = await submitLead(payload);
        if (r.ok) {
          setStatus('sent');
          return;
        }
        setStatus('error');
        setError('Não consegui enviar agora. Tente novamente em instantes.');
      })}
      aria-describedby={error ? 'lead-error' : undefined}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Diagnóstico gratuito (2 minutos)</h2>
          <p className="mt-2 text-sm leading-relaxed text-black/70">
            Você recebe um plano de ação com 3 alavancas de conversão e um roteiro de automação para o seu negócio local.
          </p>
        </div>
        <div className="hidden rounded-2xl bg-black px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 md:block">
          Variante {variant}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-black/70" htmlFor="name">
            Nome
          </label>
          <div className="mt-2">
            <Input id="name" autoComplete="name" placeholder="Seu nome" {...register('name')} />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-black/70" htmlFor="email">
            E-mail
          </label>
          <div className="mt-2">
            <Input id="email" autoComplete="email" placeholder="voce@empresa.com" {...register('email', { required: true })} />
          </div>
          {errors.email && <div className="mt-1 text-xs text-red-700">Informe um e-mail.</div>}
        </div>
        <div>
          <label className="text-xs font-semibold text-black/70" htmlFor="phone">
            WhatsApp
          </label>
          <div className="mt-2">
            <Input id="phone" autoComplete="tel" placeholder="(DDD) 99999-9999" {...register('phone')} />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-black/70" htmlFor="city">
            Cidade
          </label>
          <div className="mt-2">
            <Input id="city" autoComplete="address-level2" placeholder="Ex.: Curitiba" {...register('city')} />
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-black/20"
          {...register('consent', { required: true })}
        />
        <label className="text-xs leading-relaxed text-black/70" htmlFor="consent">
          Eu concordo em receber contato e entendo a política de privacidade.
        </label>
      </div>
      {errors.consent && <div className="mt-1 text-xs text-red-700">Confirme o consentimento.</div>}

      {error && (
        <div id="lead-error" className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-800">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === 'sending' || status === 'sent'} className="w-full sm:w-auto">
          {status === 'sent' ? 'Enviado — confira seu e-mail' : status === 'sending' ? 'Enviando…' : 'Quero meu diagnóstico'}
        </Button>
        <div className="text-[11px] text-black/60">
          Sem spam. Você pode pedir remoção a qualquer momento.
        </div>
      </div>
    </form>
  );
}

