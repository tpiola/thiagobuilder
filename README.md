# ALTIQ — Monorepo

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

Rodar individualmente:

- Web: `pnpm --filter web dev`
- Admin: `pnpm --filter admin dev`
- Docs (app): `pnpm --filter docs dev`
- Storybook: `pnpm --filter docs storybook`

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

## Qualidade (checklist)

- Conversão: CTAs visíveis + formulário no hero (`apps/web/src/components/LeadForm.tsx`)
- SEO base: `lang=pt-BR`, `meta description`, OG e canonical via runtime
- A11y: foco visível, labels, Axe em e2e (`apps/web/e2e/a11y.spec.ts`)
- Performance: build Vite + assets minificados; chunk splitting manual; evitar libs pesadas na home

## Branches (recomendado)

- `main`: produção
- `develop`: integração
- `feat/*`, `fix/*`: branches curtas para PR

## Variáveis de ambiente (produção)

### Web (leads)

- `LEAD_WEBHOOK_URL`: URL do webhook da automação (Make/Zapier/CRM)
- `LEAD_WEBHOOK_SECRET` (opcional): segredo para assinar a requisição

### Web (tracking e SEO local)

- `VITE_GTM_ID` (opcional): Google Tag Manager ID (ex.: `GTM-XXXXXXX`)
- `VITE_GA4_ID` (opcional): Google Analytics 4 ID (ex.: `G-XXXXXXXXXX`)
- `VITE_GSC_VERIFICATION` (opcional): Google Search Console verification token

### Web (chat)

- `VITE_CHAT_ENABLED` (opcional): habilita o widget de chat (qualquer valor truthy)
- `OPENAI_API_KEY` (server-side): usado por `apps/web/api/chat.ts`
- `OPENAI_MODEL` (opcional): modelo (default: `gpt-4o-mini`)

> Observação: a API de leads é um endpoint server-side (Vercel Function). Não exponha segredos no frontend.

### Desenvolvimento local

- Em modo `DEV`, o formulário salva os envios em `localStorage` (`altiq:dev-leads`) para você validar a jornada sem backend.

### Assets (hero)

- Para habilitar vídeo no hero, adicione `apps/web/public/hero.mp4`.

## Deploy na Vercel

Este repositório está pronto para deploy no Vercel.

- `apps/web` como projeto "Web" — Root Directory: `apps/web`
- `apps/admin` como projeto "Admin" — Root Directory: `apps/admin`

Cada app pode ser conectado separadamente no Vercel, apontando o **Root Directory** para `apps/web` ou `apps/admin`.

### Configuração de Build (apps/web)

| Campo | Valor |
|---|---|
| Framework Preset | Vite |
| Root Directory | `apps/web` |
| Build Command | `pnpm build` |
| Output Directory | `dist` |
| Install Command | `pnpm install` |

### Variáveis de ambiente na Vercel

Configure em **Settings > Environment Variables** no projeto web:

```
LEAD_WEBHOOK_URL=https://hook.make.com/...
LEAD_WEBHOOK_SECRET=seu_segredo_opcional
```

> Opcional: `apps/docs` pode ser publicado como Storybook (saída de `build-storybook`).
