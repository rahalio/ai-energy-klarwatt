#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const domains = [
  'identity',
  'contacts',
  'consumption',
  'consent',
  'vulnerability',
  'resolutions',
  'advice',
  'complaints',
  'cohorts',
  'compliance',
];

mkdirSync(join(root, 'src/.bundled'), { recursive: true });

for (const domain of domains) {
  for (const [fmt, ext] of [
    ['yaml', 'openapi.yaml'],
    ['json', 'json'],
  ]) {
    const out = join(root, 'src/.bundled', `${domain}.${ext}`);
    const r = spawnSync(
      'pnpm',
      ['exec', 'redocly', 'bundle', domain, '--output', out],
      { cwd: root, stdio: 'inherit' }
    );
    if (r.status !== 0) process.exit(r.status ?? 1);
  }
}

console.log(`Bundled ${domains.length} domains`);
