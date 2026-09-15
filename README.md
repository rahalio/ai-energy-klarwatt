# Klarwatt

Front-office resolution layer for EU energy retailers. Product specs: [PRODUCT.md](./PRODUCT.md), [USER_STORIES.md](./USER_STORIES.md), [WEBAPP.md](./WEBAPP.md).

OpenAPI-first DDD monorepo based on the zero-apps codegen scaffold. Package scope: **`@klarwatt/*`**.

## Layout

```
packages/openapi-core  →  packages/core  →  platform/services  →  platform/adapters  →  platform/api-server
         ↑ OpenAPI source of truth                              ports↑        impl↑              HTTP↑
platform/webapp        → generated clients + operator console (WEBAPP.md)
```

## Quick start

```bash
pnpm install
pnpm codegen:bootstrap   # copies local-only .codegen from scaffold — never commit it
pnpm lint:openapi && pnpm bundle:openapi
pnpm codegen:paths
pnpm build
pnpm dev:api
pnpm dev:web
# Health: curl http://127.0.0.1:4000/health
# Demo key: X-API-Key: klarwatt_demo_local_dev_key
# Web: http://127.0.0.1:5173
```

### `.codegen` (local only)

`.codegen/` is **gitignored** and must never be committed or pushed. Bootstrap from the scaffold:

```bash
pnpm codegen:bootstrap
# CODEGEN_SCAFFOLD_ROOT=/path/to/zero-apps-codegen-scaffold pnpm codegen:bootstrap
```

See `.cursor/rules/codegen-never-commit.mdc` and `.cursor/skills/klarwatt-codegen-local/`.

Optional Dynamo Local:

```bash
docker compose up -d
TABLE_NAME=klarwatt-core-local AWS_ENDPOINT_URL=http://localhost:8000 node scripts/ensure-dynamo-table.mjs
```

## Codegen rules (agents)

1. **New domain** → full multi-layer generate once (Mode A).
2. **YAML edit on existing domain** → regenerate **core only**, handwrite below (Mode B).
3. Keep envelopes (`{ data, meta }`), nested DI, and identity middleware intact.

See `.cursor/skills/` and `docs/CODEGEN.md`.
