#!/usr/bin/env node
/**
 * Bootstrap local `.codegen/` from the zero-apps-codegen-scaffold.
 * `.codegen` must never be committed — see `.cursor/rules/codegen-never-commit.mdc`.
 *
 * Usage:
 *   node scripts/bootstrap-codegen.mjs
 *   CODEGEN_SCAFFOLD_ROOT=/path/to/zero-apps-codegen-scaffold node scripts/bootstrap-codegen.mjs
 */

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const defaultScaffold = path.resolve(
  repoRoot,
  '../../../zero-apps/zero-apps-codegen-scaffold'
);
const scaffoldRoot =
  process.env.CODEGEN_SCAFFOLD_ROOT ||
  (existsSync(path.join(defaultScaffold, '.codegen'))
    ? defaultScaffold
    : '/Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold');

const src = path.join(scaffoldRoot, '.codegen');
const dest = path.join(repoRoot, '.codegen');

if (!existsSync(src)) {
  console.error(`Scaffold .codegen not found at: ${src}`);
  console.error(
    'Set CODEGEN_SCAFFOLD_ROOT to the zero-apps-codegen-scaffold clone.'
  );
  process.exit(1);
}

console.log(`Copying ${src} → ${dest}`);
const rsync = spawnSync(
  'rsync',
  ['-a', '--delete', '--exclude', '__pycache__', `${src}/`, `${dest}/`],
  { stdio: 'inherit' }
);
if (rsync.status !== 0) {
  process.exit(rsync.status ?? 1);
}

// Rebrand package_scope if scaffold still ships @ddd
for (const name of ['zero-codegen.json', '.zero-codegen-merged.json']) {
  const cfgPath = path.join(dest, name);
  if (!existsSync(cfgPath)) continue;
  let text = readFileSync(cfgPath, 'utf8');
  text = text.replaceAll('@ddd/', '@klarwatt/').replaceAll('"@ddd"', '"@klarwatt"');
  text = text.replace(/"package_scope"\s*:\s*"[^"]*"/, '"package_scope": "@klarwatt"');
  text = text.replace(/"package_name"\s*:\s*"[^"]*"/, '"package_name": "@klarwatt/core"');
  writeFileSync(cfgPath, text);
}

const sync = spawnSync('node', [path.join(repoRoot, 'scripts/sync-codegen-paths.mjs')], {
  cwd: repoRoot,
  stdio: 'inherit',
});
if (sync.status !== 0) {
  process.exit(sync.status ?? 1);
}

console.log('Bootstrap complete. Remember: never commit .codegen/');
