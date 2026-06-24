# Simran Agarwal — Portfolio

“The Journey of a Designer” — a cinematic, Japanese-inspired portfolio for a Senior UX Designer.

## Pages
- **`Simran Agarwal - Portfolio.dc.html`** — the main site (hero, Who I Am, What I Create, How I Think, Contact).
- **`POT.dc.html`** — enterprise SaaS case study (Purchase Optimization Tool).
- **`Karna.dc.html`** — KINDA SHOPEE mobile commerce case study.
- **`Resume.dc.html`** — printable résumé (Save as PDF).
- **`index.html`** — entry point; redirects to the main portfolio.

## Run it
It's plain static HTML — no build step.

- **Locally:** serve the folder with any static server, e.g.
  ```bash
  python3 -m http.server
  ```
  then open `http://localhost:8000/`.
- **GitHub Pages:** push this folder to a repo, enable Pages (Settings → Pages → deploy from branch), and `index.html` will load the portfolio.

> Open via a server rather than double-clicking the files, so the shared `support.js` and cross-page links resolve correctly.

## Assets
`assets/` holds the hero figure, the KINDA SHOPEE screens, and the résumé PDF. `support.js` is the shared runtime and must sit beside the HTML files.
