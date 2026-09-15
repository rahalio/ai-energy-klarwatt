# Klarwatt OpenAPI

Domain contracts under `src/`. One YAML (+ schemas) per domain. Shared envelopes in `src/common/`.

| Domain | File |
|--------|------|
| identity | `identity.yaml` |
| contacts | `contacts.yaml` |
| consumption | `consumption.yaml` |
| consent | `consent.yaml` |
| vulnerability | `vulnerability.yaml` |
| resolutions | `resolutions.yaml` |
| advice | `advice.yaml` |
| complaints | `complaints.yaml` |
| cohorts | `cohorts.yaml` |
| compliance | `compliance.yaml` |

```bash
pnpm lint:domains
pnpm bundle:domains
```

After YAML edits: regenerate **core only**, handwrite lower layers (see `ddd-codegen` skill).
