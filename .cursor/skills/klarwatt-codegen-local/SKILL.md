---
name: klarwatt-codegen-local
description: >-
  Klarwatt local codegen bootstrap: .codegen must never be committed or pushed.
  Use when cloning, bootstrapping zero-codegen, or when .codegen is missing.
---

# Klarwatt — local `.codegen` only

## Hard rule

**Never commit or push `.codegen/`.** It is excluded by `.gitignore` and must stay off GitHub.

## Bootstrap

```bash
pnpm codegen:bootstrap
# or: node scripts/bootstrap-codegen.mjs
pnpm codegen:paths
```

Optional: `CODEGEN_SCAFFOLD_ROOT=/path/to/zero-apps-codegen-scaffold`

Default scaffold path: `/Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold`

## After bootstrap

1. Set `package_scope` to `@klarwatt` in `.codegen/.zero-codegen-merged.json` and `.codegen/zero-codegen.json` if the copied scaffold still says `@ddd`.
2. Run OpenAPI lint/bundle and Mode A/B codegen per `ddd-codegen` skill.
