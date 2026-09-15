import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,
  outDir: 'dist',
  tsconfig: './tsconfig.json',
  external: [
    '@klarwatt/core',
    '@klarwatt/services',
    '@klarwatt/adapters',
    '@aws-sdk/client-dynamodb',
    '@aws-sdk/lib-dynamodb',
    '@aws-sdk/credential-providers',
    '@aws-sdk/types',
    'fastify',
    '@fastify/cors',
    '@fastify/helmet',
    '@fastify/jwt',
    'jsonwebtoken',
    'zod',
    '@zodios/core',
    'dotenv',
  ],
});
