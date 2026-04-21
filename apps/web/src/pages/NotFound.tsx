import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Página não encontrada</h1>
      <p className="mt-3 text-sm text-black/70">
        Se você chegou aqui por um link, me avise que eu corrijo. Enquanto isso, volte para a página inicial.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}

