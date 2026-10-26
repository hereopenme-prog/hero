# HERE OPEN

Here Open is a partner-branded smart merchant device and platform connecting banks and fintechs with merchants and customers through live shop status, communication and supported safety alerts.

## Main project: the website

The primary project in this repository is the marketing website in [`apps/web`](./apps/web/README.md).

```sh
npm install
npm run dev:web
```

Open http://127.0.0.1:3000.

Build and preview the static site:

```sh
npm run build:web
npm run start:web
```

The site is a Next.js 16 / React 19 static export (`apps/web/out/`) using JavaScript/JSX and plain CSS. It targets banks and fintechs, merchants and customers. See:

- [`apps/web/README.md`](./apps/web/README.md) - run, edit and deploy the website
- [`apps/web/DESIGNER-HANDOFF.md`](./apps/web/DESIGNER-HANDOFF.md) - layout and content requirements
- [`apps/web/ASSET-SOURCES.md`](./apps/web/ASSET-SOURCES.md) - artwork and font provenance

## Repository layout

| Path | Purpose |
| --- | --- |
| `apps/web` | **Main website** (Next.js 16, React 19, static export) |
| `apps/api` | Express API server |
| `apps/admin` | Admin dashboard (Next.js 14) |
| `apps/mobile` | Expo/React Native mobile app |
| `packages/*` | Shared auth, config, database, IoT, notifications, types and UI packages |

## Other workspace commands

```sh
npm run dev:api       # API server
npm run dev:admin     # admin dashboard on port 3002
npm run dev           # everything at once
npm run build:api
npm run build:admin
npm run db:generate   # Prisma helpers, see packages/database
```

Copy `.env.example` to `.env` and fill in the backend values before starting the API, admin or database tooling. The website itself needs no environment variables.

Node.js 22 or newer is required for the main website.
