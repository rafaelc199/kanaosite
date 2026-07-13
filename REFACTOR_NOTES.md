# Refactor notes

## Completed

- Removed Lovable-specific Vite configuration, error reporting, metadata and asset pointers.
- Replaced JSON asset references with real image files and stable `/images/...` paths.
- Split `src/content/site.ts` into `global.ts`, `projects.ts` and `types.ts`, retaining `site.ts` as a compatibility barrel.
- Removed unused shadcn/UI scaffold, hooks, helpers and npm dependencies.
- Configured TanStack Start + Nitro for Vercel.
- Preserved the Resend contact server function and environment-variable contract.
- Regenerated `package-lock.json`.
- Added the complete São Paio Apartments gallery supplied by the project owner.
- Organized all image sets into project-specific folders under `public/images/`.

## Image structure

- `public/images/casa-vg/`
- `public/images/casa-sn/`
- `public/images/casa-tp/`
- `public/images/foz-apartments/`
- `public/images/sao-paio-apartments/`
- `public/images/fonte/` — retained unlisted source set
- `public/images/salao/` — retained unlisted source set

## Validation

Final validation completed:

- `npm ci`: passed.
- `npm run typecheck`: passed.
- `npm run lint`: passed with zero errors and zero warnings.
- `npm run build`: passed with the Vercel preset.
- All 45 gallery image references resolve to files under `public/`.

The repository contains no Lovable JSON asset pointers or `__l5e/assets-v1` references.
