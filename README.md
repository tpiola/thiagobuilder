# Piola Builder — Monorepo

Monorepo white-label com foco em **conversão**, **SEO** e **WCAG AA**, composto por:

- `apps/web`: site público (landing + páginas institucionais)
- `apps/admin`: hub admin (gestão básica e validação de leads)
- `apps/docs`: Storybook (design system)
- `packages/ui`: componentes de UI reutilizáveis
- `packages/utils`: utilitários (A/B, validação, helpers)
- `packages/types`: tipos compartilhados
- `packages/config`: presets e configurações compartilhadas

## Requisitos

- Node `>= 20`
- `pnpm`

## Instalação

```bash
pnpm install
```

## Desenvolvimento

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Testes

```bash
pnpm test
pnpm e2e
pnpm a11y
```

## Variáveis de ambiente (produção)

### Web (leads)

- `LEAD_WEBHOOK_URL`: URL do webhook da automação (Make/Zapier/CRM)
- `LEAD_WEBHOOK_SECRET` (opcional): segredo para assinar a requisição

Observação: a API de leads é um endpoint server-side (Vercel Function). Não exponha segredos no frontend.

### Desenvolvimento local

- Em modo `DEV`, o formulário salva os envios em `localStorage` (`piola:dev-leads`) para você validar a jornada sem backend.

## Deploy

Este repositório está pronto para deploy no Vercel.

- `apps/web` como projeto “Web”
- `apps/admin` como projeto “Admin”

Cada app pode ser conectado separadamente no Vercel, apontando o Root Directory para `apps/web` ou `apps/admin`.
