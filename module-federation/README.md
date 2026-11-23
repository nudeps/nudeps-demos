# Nudeps Module Federation Demo

This demo shows that nudeps and [Module Federation](https://module-federation.io/) work together.

- `cart/vite.config.js` exposes `./CartWidget` and lists `lit` and `@nudeps-mf/ui` as `shared`.
- With `experiments.hostProvidesAllShared`, the cart build keeps these imports bare. The cart ships no copy of them.
- The import map of the shop points these imports to the copies of the shop. So the page runs one copy of each library.
- `nudeps.js` adds one import map entry, `cart/CartWidget`. Then `index.js` imports the cart like any other module.

`npm install` also builds the cart into `cart/dist/`.
