# Kanao — Site (TanStack Start + Vite)

## Requisitos
- Node.js 20+ (https://nodejs.org)
- Bun (recomendado — https://bun.sh) **ou** npm/pnpm

## Instalar dependências
No terminal, dentro da pasta do projeto:

```bash
bun install
# ou
npm install
```

## Correr em desenvolvimento
```bash
bun run dev
# ou
npm run dev
```
Abrir http://localhost:8080

## Build de produção
```bash
bun run build
bun run start
```

## Variáveis de ambiente
Criar ficheiro `.env` na raiz (para o formulário de contacto via Resend):
```
RESEND_API_KEY_OWN=xxxxxxxxxxxxxxxx
```

## Estrutura útil
- `src/content/site.ts` — textos, morada, projetos
- `src/routes/` — páginas (index, estudio, contacto, projetos)
- `src/components/` — Header, Footer, UI
- `src/styles.css` — design system (cores, fontes)

## VS Code — extensões recomendadas
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
