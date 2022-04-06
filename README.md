# Nuxt 3 store auto import

This package auto imports your modules from `store` directory. Works well with [pinia](https://pinia.vuejs.org/ssr/nuxt.html).

## Setup

1. Add `nuxt3-store-autoimport` dependency to your project

```bash
npm i -D nuxt3-store-autoimport
```

2. Add `nuxt3-store-autoimport` to the `buildModules` section of `nuxt.config.ts`

```js
buildModules: [
  'nuxt3-store-autoimport'
],
```
