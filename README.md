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

O workflow em `.github/workflows/deploy-github-pages.yml` faz build e publica em:

`https://lucasvieiravicente.github.io/`

(repositório de destino: `lucasvieiravicente/lucasvieiravicente.github.io`)

### Configuração (uma vez)

1. Crie um Personal Access Token (classic) com escopo `repo`, ou fine-grained com write no repo `lucasvieiravicente.github.io`.
2. No repo `WebResume3.0`, vá em **Settings → Secrets and variables → Actions**.
3. Crie o secret `GH_PAGES_TOKEN` com o token.
4. Confirme que o repo `lucasvieiravicente.github.io` existe e o Pages está em **Deploy from a branch → `main` / `(root)`**.

### Uso

- Push na `main` dispara o deploy automaticamente.
- Ou rode manualmente em **Actions → Deploy GitHub Pages → Run workflow**.

Build local equivalente:

```bash
npm run build:pages
```
