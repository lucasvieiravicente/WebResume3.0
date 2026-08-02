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

## Deploy (GitHub Pages — user site)

O build é publicado no repositório [`lucasvieiravicente.github.io`](https://github.com/lucasvieiravicente/lucasvieiravicente.github.io) (site de usuário).

**URL:** `https://lucasvieiravicente.github.io/`

### Configuração (uma vez)

O `GITHUB_TOKEN` padrão **não** consegue fazer push em outro repositório. Por isso o workflow usa o secret `PAGES_DEPLOY_TOKEN`.

1. Crie um token em https://github.com/settings/tokens
   - **Classic:** marque o scope `repo`
   - **Fine-grained:** Resource owner = você; Repository access = só `lucasvieiravicente.github.io`; Permissions → Repository → Contents = **Read and write**
2. Em https://github.com/lucasvieiravicente/WebResume3.0/settings/secrets/actions
3. **New repository secret**
   - Name: `PAGES_DEPLOY_TOKEN` (exatamente este nome)
   - Secret: cole o token
4. No repo `lucasvieiravicente.github.io` → **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **`master`** / folder: **`/ (root)`**
5. Rode de novo: **Actions → Deploy GitHub Pages → Run workflow**
6. (Opcional) Em `WebResume3.0` → **Settings → Pages**, desative Pages se ainda estiver ativo em `/docs`

### Como atualiza

- Push na `main` → Action faz build e publica em `lucasvieiravicente.github.io`
- Ou **Actions → Deploy GitHub Pages → Run workflow**

Manual (sem Action):

```bash
npm run build:pages
cp docs/index.html docs/404.html
# copie o conteúdo de docs/ para o repo lucasvieiravicente.github.io e faça push
```
