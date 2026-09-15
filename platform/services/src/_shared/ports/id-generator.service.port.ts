/**
 * IdGeneratorService Port — Klarwatt domain prefixes.
 */

import type { DomainCode } from '@klarwatt/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  ctcId(): string;
  cnsId(): string;
  cstId(): string;
  vulId(): string;
  resId(): string;
  advId(): string;
  cmpId(): string;
  cohId(): string;
  cplId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
