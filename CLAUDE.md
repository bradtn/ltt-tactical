@AGENTS.md

## Critical: Next.js Dev Server Config for Tailscale Access

When accessing the dev server remotely via Tailscale IP, you MUST add `allowedDevOrigins` to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['100.99.29.70'], // Your Tailscale IP
};
```

Without this, client-side JavaScript (useEffect, useState, framer-motion, etc.) will NOT work properly when accessing from the Tailscale IP. The page will render server-side but client hydration/interactivity will fail silently.

Symptoms of missing this config:
- Animations don't run
- useState doesn't update
- useEffect doesn't fire
- Client components show initial/SSR state only
