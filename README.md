# Kanao — Estúdio de Design de Interiores

Site institucional bilingue (PT/EN) do estúdio **Kanao**, desenvolvido com **TanStack Start (React 19 + Vite)** e **Tailwind CSS v4**.

## Estrutura

- `src/routes/` — páginas do site (file-based routing)
  - `index.tsx` — Início
  - `projetos.index.tsx` — Portfólio
  - `projetos.$slug.tsx` — Página de cada projeto
  - `estudio.tsx` — Sobre
  - `contacto.tsx` — Contacto
- `src/components/` — `SiteHeader`, `SiteFooter`
- `src/content/site.ts` — **todo o conteúdo editável do site**
- `src/lib/lang.tsx` — alternador de idioma PT/EN
- `src/assets/` — pointers `.json` para as imagens (alojadas no CDN da Lovable)

## Como editar conteúdo

Abra `src/content/site.ts`. Cada bloco está comentado:

- **brand** — nome, email, telefone, morada, Instagram
- **nav** — etiquetas do menu (PT/EN)
- **home** — título e textos da página inicial
- **phases** — as 4 fases do processo (escuta, conceito, 3D, obra)
- **about** — texto da página Sobre
- **contact** — texto da página Contacto
- **projects** — lista de projetos

### Editar um texto

Todos os textos têm versão `pt` e `en`:

```ts
title: { pt: "Casa da Tapada", en: "Casa da Tapada" }
```

Basta alterar a string desejada.

### Adicionar um projeto

1. Coloque as fotos numa pasta (ex.: `casa-xyz/`).
2. Para cada foto, crie um pointer no CDN:
   ```bash
   lovable-assets create --file casa-xyz/foto-01.jpg \
     > src/assets/casa-xyz-01.json
   ```
   (em ambiente Lovable; fora dali, sirva as fotos a partir de `/public/`).
3. No topo de `src/content/site.ts` adicione o import:
   ```ts
   import casa01 from "../assets/casa-xyz-01.json";
   ```
4. Adicione um novo objeto ao array `projects`:
   ```ts
   {
     slug: "casa-xyz",
     title: { pt: "Casa XYZ", en: "XYZ House" },
     location: { pt: "Lisboa", en: "Lisbon" },
     year: "2024",
     category: { pt: "Residencial", en: "Residential" },
     description: { pt: "...", en: "..." },
     images: [casa01.url, /* ... */],
   }
   ```

A primeira imagem é usada como capa.

### Remover um projeto

Apague o objeto correspondente do array `projects`.

## Desenvolvimento local

Requer **Node 20+** ou **Bun**.

```bash
bun install        # ou: npm install
bun run dev        # arranca em http://localhost:8080
bun run build      # build de produção
```

## Deploy

O projeto está preparado para correr em **Cloudflare Workers / edge**.
Pode também ser publicado diretamente na Lovable (botão *Publish*).

## Stack

- TanStack Start v1 (React 19, SSR)
- Vite 7
- Tailwind CSS v4
- shadcn/ui (componentes prontos em `src/components/ui/`)
- Tipografia: Cormorant Garamond (display) + Inter (texto)

---

© Kanao
