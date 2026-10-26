# Here Open - main website (`@hereopen/web`)

Editable Next.js/React marketing website for Here Open, addressing **banks and fintechs** together, plus merchants and customers. Plain JavaScript/JSX and CSS. Built with Next.js 16.3.5 and React 19.3.0, exported as static HTML.

This package is the main website in the `here-open` monorepo. The API, admin and mobile apps live alongside it in `apps/`.

## Quick start (from the repository root)

```sh
npm install
npm run dev:web
```

Open http://127.0.0.1:3000. To build and serve the exported site:

```sh
npm run build:web
npm run start --workspace=apps/web
```

`npm run start --workspace=apps/web` serves the generated `apps/web/out/` folder at http://127.0.0.1:3000 (set `PORT` to change it). Do not double-click `out/index.html`.

### From this folder

```sh
npm run dev      # development preview on port 3000
npm run build    # static export to out/
npm start        # serve the last build
```

On Windows you can also double-click `Open-HereOpen.cmd` and keep its window open.

Node.js 22 or newer is required.

## Editing

| File | Purpose |
| --- | --- |
| `content/site.js` | Challenges, 17 benefits, workflow, 9 FAQs and contact details |
| `app/page.jsx` | Section order, navigation, theme, partnership and contact form |
| `app/layout.jsx` | Metadata and stylesheet imports |
| `components/OriginalHero.jsx` | Shared bank/fintech opening |
| `components/PartnerGraphics.jsx` | Device artwork, hero illustration and relationship graphics |
| `components/OurSolution.jsx` | Six readable feature cards |
| `components/MerchantValueImage.jsx` | Smart device relationship overview |
| `components/HowItWorks.jsx` | Interactive phone demo |
| `components/Vision.jsx` | Vision and retained audience context |
| `components/SiteEffects.jsx`, `app/site-effects.css` | Active navigation, reading progress, section entrances |
| `components/VisualEffects.jsx` | Once-per-visit viewport effects and the image dialog |
| `app/brand.css` | Green/navy palette, blue logo, fonts and header |
| `app/comparisons.css` | Simultaneous challenge and benefits views |
| `app/partners.css` | Responsive graphics and compact layout refinements |
| `app/solution-how.css`, `app/vision.css` | Phone demo and vision styling |
| `app/ecosystem.css` | Circular partner/merchant/customer overview |
| `app/product-motion.css` | Product stage, signals, light sweep and tap feedback |
| `app/interactive-depth.css` | Device rings, pointer lighting and showroom styles |
| `app/privacy/page.jsx`, `app/terms/page.jsx`, `app/security/page.jsx` | Local legal and security pages |
| `components/LegalPage.jsx`, `app/legal.css` | Shared shell for the legal pages |
| `app/robots.js`, `app/sitemap.js` | Search-engine routes for https://www.hereopen.me |
| `public/assets/hereopen-logo.svg` | Shared blue logo |
| `public/fonts/` | Local Inter and Space Grotesk files |
| `out/` | Generated production files; rebuild instead of editing |

Read `DESIGNER-HANDOFF.md` for layout and content requirements and `ASSET-SOURCES.md` for artwork provenance.

## Content and behaviour notes

- The brand tagline is **Connection. Protection.**
- Bank-specific CASA benefits stay clearly labelled. Credit copy distinguishes banks from fintech distribution partners.
- The contact form's **Submit** opens an email draft addressed to contact@hereopen.me. It does not send automatically or store leads. Connect a production form endpoint separately if required.
- Legal pages are served locally at `/privacy`, `/terms` and `/security`. The website's canonical domain is `https://www.hereopen.me`; `robots.txt` and `sitemap.xml` are generated at build time.
- The phone controls are a labelled demonstration. The device screen is an illustration, not a working payment code.
- Decorative motion is finite and respects `prefers-reduced-motion`. No animation package, external font or tracking service is used.

## Deployment

The site is configured with `output: 'export'` in `next.config.mjs`. Deploy the contents of `out/` at the domain root. Because it is a fully static export there are no server routes in this app; backend endpoints belong in `apps/api`.

Preserve the site's existing legal routes and integrations. Compare against any newer production-only changes before deploying.

## History

This site was previously maintained as a standalone `hereopen-website` package and was moved into `apps/web` to become the monorepo's main web project. It was last updated on 17-18 October 2026 to address both banks and fintechs.
