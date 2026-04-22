## 1.Architecture design
```mermaid
graph TD
  A["User Browser"] --> B["React Frontend Application"]
  B --> C["Client-side Router"]
  B --> D["Static Assets (Images)"]

  subgraph "Frontend Layer"
    B
    C
  end

  subgraph "Asset Layer"
    D
  end
```

## 2.Technology Description
- Frontend: React@18 + react-router-dom + tailwindcss@3 + vite
- Backend: None

## 3.Route definitions
| Route | Purpose |
|-------|---------|
| / | Página inicial com menu fixo, carrossel no topo e rodapé com atalhos |
| /secao/:slug | Página individual de cada item do menu (conteúdo da seção), com o mesmo menu fixo e rodapé |
