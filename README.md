# Kanao — Estúdio de Design de Interiores

Site institucional bilingue (PT/EN) desenvolvido com TanStack Start, React, Vite e Tailwind CSS.

## Estrutura de conteúdo

- `src/content/site.ts` — API pública de compatibilidade (barrel exports)
- `src/content/types.ts` — tipos partilhados
- `src/content/global.ts` — marca, navegação, páginas e textos globais
- `src/content/projects.ts` — projetos e galerias
- `public/images/` — imagens reais servidas por URLs estáveis `/images/...`

## Desenvolvimento

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Imagens

Organize cada galeria numa pasta própria em `public/images/<projeto>/` e referencie-a em `src/content/projects.ts` com caminhos absolutos, por exemplo `/images/projeto/foto.jpg`.

## Deploy

A configuração do TanStack Start usa o preset Nitro `vercel`. Configure as variáveis de ambiente do Resend e Analytics no projeto da Vercel.
