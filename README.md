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

O site é publicado pela pasta `docs` **neste mesmo repositório** (`WebResume3.0`):

`https://lucasvieiravicente.github.io/WebResume3.0/`

### Configuração (uma vez)

1. No repo `WebResume3.0`: **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: **`/docs`**

Não é necessário PAT nem outro repositório.

### Como atualizar

**Automático:** push na `main` dispara o Action, que gera `docs/` e faz commit.

**Manual (como no artigo DIO):**

```bash
npm run build:pages
# copia index -> 404 (opcional, o Action já faz)
copy docs\index.html docs\404.html

git add docs
git commit -m "chore: update GitHub Pages docs"
git push
```

Depois de configurar o Pages, aguarde 1–2 minutos e abra a URL acima.
