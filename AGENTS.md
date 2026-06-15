<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# frontend-template scope

This package is a **wedding invitation landing template only** — not a CRM or admin app.

- Public page is `app/page.tsx`; shared UI lives under `app/components/invitation/`.
- Event content is JSON-driven (`lib/invitation/configs/wedding.json`); event type is `WEDDING_TEMPLATE`.
- RSVP calls `POST /api/guests` via `lib/guests-api.ts` when `NEXT_PUBLIC_API_BASE_URL` is set.
- Do not add CRM, auth, charts, Excel export, or shadcn admin UI dependencies here.
