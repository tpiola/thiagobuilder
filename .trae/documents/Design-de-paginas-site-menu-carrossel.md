# Design de Páginas — Site com menu fixo, carrossel e rodapé

## Diretrizes globais (desktop-first)

### Layout (sistema e responsividade)
- Base: Flexbox + CSS Grid (híbrido).
- Container: largura máxima (ex.: 1200–1280px) com margens automáticas; padding lateral responsivo.
- Breakpoints sugeridos: 1280/1024/768/480.
- Regra importante: aplicar `padding-top` no conteúdo principal equivalente à altura do menu fixo, evitando sobreposição.

### Meta information (padrão)
- Title: “[Nome do site] — [Nome da página]”.
- Description: resumo curto do conteúdo da seção.
- Open Graph: `og:title`, `og:description`, `og:type=website`, `og:image` (primeira imagem do carrossel ou imagem padrão).

### Estilos globais (tokens)
- Cores: fundo neutro (branco/cinza claro), texto quase-preto, cor de destaque (brand) para links e estados ativos.
- Tipografia: escala simples (ex.: 32/24/18/16/14), line-height confortável (1.4–1.6).
- Links: sublinhado no hover e foco visível.
- Botões (se existirem): altura mínima 40–44px (mobile), estados hover/active/disabled.
- Espaçamento: usar increments consistentes (8/12/16/24/32).

---

## Página 1 — Página Inicial (/)

### Estrutura da página
1. **Header fixo (topo)**
2. **Carrossel de imagens (logo abaixo do header)**
3. **Conteúdo principal (abaixo do carrossel)**
4. **Rodapé com atalhos**

### Seções & componentes

#### 1) Header fixo
- Posição: `position: sticky` ou `fixed` no topo; z-index acima do carrossel.
- Conteúdo:
  - Logo/identidade (à esquerda).
  - Itens do menu (à direita) com estado “ativo” para a página atual.
- Responsivo:
  - Desktop: itens visíveis em linha.
  - Mobile: colapsar em botão (menu) que abre lista vertical (drawer ou dropdown) com áreas de toque amplas.

#### 2) Carrossel no topo
- Dimensão: largura total; altura com proporção (ex.: 16:9 no desktop e 4:3/1:1 no mobile), evitando “pulos” de layout.
- Controles:
  - Setas (desktop) e swipe (mobile).
  - Indicadores (dots) para posição do slide.
- Acessibilidade:
  - Botões com rótulos (aria-label) e foco por teclado.

#### 3) Conteúdo principal
- Objetivo: introduzir o site e reforçar os acessos às seções.
- Componentes mínimos:
  - Bloco de texto/heading.
  - Lista/grid de links para as páginas do menu (pode ser cards simples).
- Responsivo:
  - Grid 3–4 colunas (desktop), 2 colunas (tablet), 1 coluna (mobile).

#### 4) Rodapé com atalhos
- Conteúdo:
  - Conjunto de links/atalhos para as mesmas páginas do menu.
- Layout:
  - Desktop: colunas (grid).
  - Mobile: lista empilhada com espaçamento e separadores sutis.

---

## Página 2 — Página de Seção (/secao/:slug)

### Page structure
1. **Header fixo (reutilizado)**
2. **Cabeçalho da seção (título)**
3. **Conteúdo da seção**
4. **Rodapé com atalhos (reutilizado)**

### Seções & componentes

#### 1) Header fixo
- Idêntico ao da Página Inicial, preservando consistência.

#### 2) Cabeçalho da seção
- Exibir título da seção (derivado do item do menu).
- Breadcrumbs: opcional (não necessário) — manter simples.

#### 3) Conteúdo da seção
- Área principal com tipografia para leitura (largura de texto confortável).
- Suportar conteúdos longos com rolagem e espaçamento consistente.

#### 4) Rodapé com atalhos
- Idêntico ao da Página Inicial, reforçando navegação cruzada.

---

## Estados e interações (comuns)
- Menu ativo: item correspondente destacado.
- Hover/focus: destaque claro em links e botões.
- Mobile: alvo de toque mínimo 44px; evitar elementos muito próximos.
- Performance: imagens do carrossel com `loading` apropriado e tamanhos otimizados (ex.: `srcset`).
