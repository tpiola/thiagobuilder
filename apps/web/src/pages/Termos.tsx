import { useEffect } from 'react';
import { applySeo } from '@/lib/seo';

export default function Termos() {
  useEffect(() => {
    applySeo({
      title: 'Termos de Uso — Piola Builder',
      description: 'Condições de uso do site e do hub.',
      canonicalPath: '/termos',
    });
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Termos de Uso</h1>
      <p className="mt-4 text-sm leading-relaxed text-black/70">
        Conteúdo em versão inicial. Antes de produção, ajustar cláusulas comerciais, limitações e políticas de suporte.
      </p>
    </main>
  );
}

