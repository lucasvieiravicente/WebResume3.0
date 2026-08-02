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

O workflow em `.github/workflows/deploy-github-pages.yml` faz build e publica **neste mesmo repositório** (`WebResume3.0`):

`https://lucasvieiravicente.github.io/WebResume3.0/`

### Configuração (uma vez)

1. No repo `WebResume3.0`: **Settings → Pages**
2. Em **Build and deployment → Source**, selecione **GitHub Actions** (não “Deploy from a branch”)
3. Não é necessário PAT / secret extra — usa o `GITHUB_TOKEN`

### Uso

- Push na `main` dispara o deploy automaticamente.
- Ou rode manualmente em **Actions → Deploy GitHub Pages → Run workflow**.

Build local equivalente:

```bash
npm run build:pages
```
