# Wedding Invitation Template

Standalone Next.js App Router landing page for a wedding invitation. The invitation is served at `/` from JSON config in `lib/invitation/configs/wedding.json`.

## Environment

Copy `.env.example` to `.env.local` and set variables there.

| Variable                   | Purpose                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL of the API (browser must reach it; include scheme, no trailing slash).      |
| `NEXT_PUBLIC_SITE_URL`     | Public site origin for Open Graph URLs (e.g. `https://events.example.com`).          |

## Run locally

From this directory:

```bash
yarn install
cp .env.example .env.local
# edit .env.local
yarn dev
```

Open `/` on the dev server URL printed by Next.js.

## Docker

```bash
cp .env.example .env
# edit .env — set NEXT_PUBLIC_API_BASE_URL and NEXT_PUBLIC_SITE_URL
docker compose up --build -d
```

Open `http://localhost:3000` (or the host port from `PORT` in `.env`).

Rebuild after config or env changes:

```bash
docker compose up --build -d
```

## RSVP

The RSVP form posts to `POST /api/guests` on the API configured by `NEXT_PUBLIC_API_BASE_URL`.

Payload fields: `fullName`, `type` (`WEDDING_TEMPLATE`), `status`, and optional `partnerFullName`.

## Customizing content

Edit `lib/invitation/configs/wedding.json` for event copy, dates, venue, and dress code. Hero images and OG previews are resolved in `lib/invitation/assets.ts` and `lib/invitation/build-metadata.ts`.
