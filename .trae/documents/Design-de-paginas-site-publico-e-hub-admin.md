# Design de Páginas — Site Público + Hub Admin (Desktop-first)

## Global Styles (tokens)
- Grid: container 1200px, gutters 24px, 12 col (desktop); tablet 8 col; mobile 4 col.
- Tipografia: base 16px; H1 40/48, H2 28/36, H3 20/28; line-height confortável.
- Cores: bg neutro (white/gray-50), texto gray-900, bordas gray-200; accent via tema do tenant (primary/secondary).
- Componentes: botões (solid/outline/ghost), estados hover/focus visíveis (focus-ring 2px), links sublinhados em hover.
- A11y: contraste AA mínimo; navegação por teclado; skip-link no topo; prefers-reduced-motion respeitado.
- Motion (Framer): transições curtas (120–180ms) e discretas; evitar layout shift.

---

## 1) Site Público — Home do Tenant
**Layout**: seções empilhadas (stack), com CSS Grid para áreas de conteúdo; imagens responsivas.

**Meta**
- title: "{Tenant} — Página inicial"
- description: texto configurável do tenant
- OG: og:title, og:description, og:image (logo/hero)

**Estrutura**
1. Topbar
   - Logo do tenant (link “/”), navegação primária (itens configuráveis), CTA principal.
   - Em telas menores: menu colapsável (sheet) com foco preso e aria.
2. Hero
   - Título forte + subtítulo + CTA; opcional imagem/ilustração.
   - Garantir LCP otimizado (imagem hero com dimensões explícitas).
3. Seções configuráveis
   - Blocos: texto, lista de benefícios, grid de cards, FAQ.
   - Cada bloco com heading correto (H2/H3) e landmarks.
4. Footer
   - Links institucionais; contato; políticas; social.

**Interações/estados**
- Hover/focus consistentes; links com estados visíveis.
- Carregamento: skeleton leve para conteúdo dinâmico; evitar spinners grandes.

---

## 2) Site Público — Página de Conteúdo (/p/:slug)
**Layout**: coluna central (máx 760px) + opcional aside (desktop) para âncoras.

**Meta**
- title/description/canonical do conteúdo
- OG por página; opcional JSON-LD quando o tipo exigir

**Estrutura**
1. Header reutilizado (mesmo da Home)
2. Conteúdo
   - H1 (título), metadata opcional (ex.: última atualização), corpo com componentes seguros.
   - Componentes permitidos: rich-text, imagem, callout, acordeão, tabela simples.
3. Navegação contextual
   - “Voltar”/breadcrumbs opcionais (sem poluir a UI).
4. Footer reutilizado

**A11y/SEO**
- Hierarquia de headings consistente; imagens com alt; links descritivos.
- 404 sem índice (noindex) quando slug não existir.

---

## 3) Hub Admin — Login (/admin/login)
**Layout**: centered card (max-w ~420px), fundo neutro.

**Meta**
- title: "Entrar — Hub Admin"
- robots: noindex

**Componentes**
- Card com: email, senha, botão “Entrar”, mensagem de erro inline.
- Link secundário: “Sair”/“Trocar conta” (quando sessão inválida) conforme necessário.

**A11y**
- Labels visíveis; aria-describedby para erros; foco no primeiro campo.

---

## 4) Hub Admin — Seleção de Tenant (/admin/tenants)
**Layout**: dashboard simples com lista em cards/tabela; busca no topo.

**Meta**
- title: "Selecionar tenant — Hub Admin"; robots: noindex

**Estrutura**
1. Topbar admin
   - Identidade do hub, usuário logado, menu (Sair).
2. Lista de tenants
   - Card por tenant: nome, status, botão “Acessar”.
   - Estado vazio com instrução (“Peça acesso ao admin da plataforma”).

---

## 5) Hub Admin — Dashboard do Tenant (Branding + Páginas + Membros)
**Layout**: sidebar esquerda (nav) + main à direita; main usa cards e tabelas.

**Meta**
- title: "{Tenant} — Admin"; robots: noindex

**Sidebar (nav)**
- Itens: Visão geral, Branding, Páginas, Membros.
- Indicar tenant atual; ação “Trocar tenant”.

**Main (por seção)**
- Visão geral: cards de status (páginas publicadas/rascunhos) e atalhos.
- Branding: formulário (nome, cores, logo upload) + preview em painel.
- Páginas: tabela (slug, status, atualizado), ações (Editar, Publicar); editor em tela dedicada/modal (conforme implementação).
- Membros: tabela (email, role), ações (Convidar, Remover, Alterar papel).

**Estados e performance**
- Listas com paginação/virtualização quando necessário; loading por seção.
- Confirmações para publicar/remover; toasts discretos.
