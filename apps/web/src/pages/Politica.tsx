import { useEffect } from 'react';
import { applySeo } from '@/lib/seo';

export default function Politica() {
  useEffect(() => {
    applySeo({
      title: 'Política de Privacidade — Piola Builder',
      description: 'Como tratamos seus dados e suas permissões de contato.',
      canonicalPath: '/politica',
    });
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Política de Privacidade</h1>
      <p className="mt-4 text-sm leading-relaxed text-black/70">
        Esta é uma versão inicial. Antes de produção, eu recomendo adequar com seu jurídico (LGPD) e mapear bases legais,
        prazos de retenção e fornecedores.
      </p>
      <section className="mt-10 space-y-4 text-sm leading-relaxed text-black/70">
        <p>
          Ao enviar seus dados nos formulários, você autoriza contato para diagnóstico e proposta. Você pode solicitar remoção a
          qualquer momento.
        </p>
        <p>
          Dados coletados: e-mail e, opcionalmente, nome/WhatsApp/cidade. Finalidade: responder seu pedido e melhorar conversão.
        </p>
      </section>
    </main>
  );
}

