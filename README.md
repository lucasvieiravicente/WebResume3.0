# WebResume Angular 3.0

Currículo online de Lucas Vieira Vicente, recriado com Angular moderno e um layout dark inspirado em portfólios profissionais.

## Stack

- Angular 21 LTS (standalone components)
- SCSS com design system próprio
- APIs existentes de Knowledge e Email

## Desenvolvimento

```bash
npm install
npm start
```

Acesse `http://localhost:4200/`.

## Build

```bash
npm run build
```

## Deploy (GitHub Pages)

O código fica no repo `WebResume3.0`. O workflow publica o site em:

`https://lucasvieiravicente.github.io/`

(destino: repositório `lucasvieiravicente/lucasvieiravicente.github.io`)

> A URL `/WebResume3.0/` e a URL raiz (`github.io/`) são coisas diferentes.
> Só o repo `*.github.io` controla a raiz.

### Configuração (uma vez)

1. Crie um PAT com write no repo `lucasvieiravicente.github.io` (classic: escopo `repo`).
2. No repo `WebResume3.0`: **Settings → Secrets and variables → Actions** → secret `GH_PAGES_TOKEN`.
3. No repo `lucasvieiravicente.github.io`: **Settings → Pages** → Source **Deploy from a branch** → `main` / `(root)`.

### Uso

- Push na `main` do `WebResume3.0` dispara o deploy.
- Ou **Actions → Deploy GitHub Pages → Run workflow**.

```bash
npm run build:pages
```
