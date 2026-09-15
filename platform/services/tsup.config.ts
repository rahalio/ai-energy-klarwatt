import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/**/index.ts', 'src/**/usecases/index.ts'],
  format: ['esm'],
  dts: false,
  outDir: 'dist',
  tsconfig: './tsconfig.json',
  external: [
    '@klarwatt/core',
    'fastify',
    'jsonwebtoken',
    /.*\/api-server\/.*/,
    /.*\/adapters\/.*/,
  ],
});
