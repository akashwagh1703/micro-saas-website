# WhatsFlow marketing website

React + Vite + Tailwind v4 static site for [WhatsFlow](https://micro-saas-portal.onrender.com).

## Local dev

```bash
npm ci
cp .env.example .env   # edit contact + portal URL
npm run dev            # http://localhost:5174
```

## Deploy on Render (Static Site)

**Important:** use **Static Site**, not Web Service.

| Setting | Value |
|---------|--------|
| **Root directory** | *(repo root — this folder)* |
| **Build command** | `npm ci && npm run build` |
| **Publish directory** | `dist` |
| **Node version** | `22.12.0` (required — Vite 8 needs Node ≥ 20.19) |

Or connect the repo and use the included [`render.yaml`](./render.yaml) Blueprint.

### Environment variables (build time)

Set these in Render → Environment (same names as `.env.example`):

- `VITE_PORTAL_URL` — portal login/register links
- `VITE_CONTACT_EMAIL`, `VITE_CONTACT_PHONE`, `VITE_WHATSAPP_NUMBER`
- Optional: `VITE_SOCIAL_*`

### SPA routing

`render.yaml` includes a rewrite so `/pricing`, `/features`, etc. work on refresh.  
If you configure manually, add a rewrite: `/*` → `/index.html`.

## Common deploy failures

| Error | Fix |
|-------|-----|
| `Vite requires Node.js version ^20.19.0 \|\| >=22.12.0` | Set **Node 22.12** (or 20.19+) in Render |
| `Missing script: "start"` | You created a **Web Service** — switch to **Static Site** |
| Build OK but 404 on `/pricing` | Add SPA rewrite rule (see `render.yaml`) |
| Blank page / wrong assets | Set `VITE_BASE_PATH=/` |
