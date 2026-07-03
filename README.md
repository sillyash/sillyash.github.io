# sillyash's blog

For random trivia, interesting hobbies, niche pieces of culture, and my projects.

Live at [sillyash.com](https://sillyash.com), hosted on GitHub Pages.

## Tools

Built with [Vue 3](https://vuejs.org/) and [Vuetify 3](https://vuetifyjs.com/), scaffolded via Vuetify's Vite template:

- [Vite](https://vitejs.dev/) — build tool / dev server
- [vue-router](https://router.vuejs.org/) with file-based routes (`unplugin-vue-router`) and layouts (`vite-plugin-vue-layouts`)
- [Pinia](https://pinia.vuejs.org/) for state
- [ESLint](https://eslint.org/) (`eslint-config-vuetify`) for linting

## Project structure

```
src/
├── components/   # AppHeader, AppFooter (auto-imported)
├── layouts/      # default.vue wraps every page with header/footer
├── pages/        # one file = one route (index, AboutMe, Projects, ContactMe)
├── plugins/      # vuetify/router/pinia setup, glossary auto-linker
├── stores/       # Pinia stores
└── styles/       # global CSS, custom-property based color/size theme
```

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview a production build locally
npm run lint      # eslint --fix
```

## CI/CD

On every push/PR to `main`, [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml) installs, lints, builds, and runs `npm audit`. On push to `main`, it also deploys the build to GitHub Pages via `actions/deploy-pages` — no manual deploy step needed.
