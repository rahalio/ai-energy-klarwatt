/**
 * ID Generator Service Implementation — Klarwatt prefixes.
 */

import type { DomainCode } from '@klarwatt/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@klarwatt/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@klarwatt/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  ctcId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.contacts);
  }
  cnsId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.consumption);
  }
  cstId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.consent);
  }
  vulId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.vulnerability);
  }
  resId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.resolutions);
  }
  advId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.advice);
  }
  cmpId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.complaints);
  }
  cohId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.cohorts);
  }
  cplId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.compliance);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
