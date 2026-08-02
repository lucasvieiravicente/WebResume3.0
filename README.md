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

## Deploy (GitHub Pages — método docs)

Publicação pela pasta `docs` no próprio `WebResume3.0` (sem PAT / outro repo).

**URL:** `https://lucasvieiravicente.github.io/WebResume3.0/`

### Configuração (uma vez)

1. No repo `WebResume3.0` → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **`main`** / folder: **`/docs`**

### Como atualiza

- Push na `main` (fora de `docs/`) → Action gera `docs` e faz commit
- Ou **Actions → Deploy GitHub Pages → Run workflow**

Manual:

```bash
npm run build:pages
cp docs/index.html docs/404.html   # no Windows: copy docs\index.html docs\404.html
git add docs
git commit -m "chore: update GitHub Pages docs"
git push
```
