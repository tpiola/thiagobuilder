# Changelog

## 2026-04-21

- Criado monorepo com `apps/web`, `apps/admin`, `apps/docs` e `packages/*`.
- Adicionada landing focada em conversão com formulário de leads e Google Maps.
- Criada API server-side de captura de leads (`/api/lead`) via webhook.
- Adicionados testes unitários (Vitest) e e2e/a11y (Playwright + axe).
- Configurada governança com Turbo, CI (GitHub Actions) e Dependabot.

## 2026-04-22

- Padronizada a validação de leads com contrato compartilhado (`source`/`variant` sem fallback silencioso).
- Implementados menu superior fixo responsivo, carrossel no topo e páginas individuais por item.
- Audit fix: canonicalização, OG/Twitter dinâmicos, `robots.txt` e `sitemap.xml`.
- Adicionada marcação Schema.org (Organization/WebSite) e `og-image.svg` versionado.
- Melhorada a qualidade: checagem de links internos via Playwright e correções de lint/a11y.
- Atualizado CI para executar Playwright e2e além de check/lint/test/build.
- Expandida a arquitetura do site: `/platform`, `/services`, `/work`, `/about`, `/insights` e subpáginas.
- Adicionada camada de tracking (GTM/GA4/GSC via env) e chat demonstrativo (`/api/chat`).
