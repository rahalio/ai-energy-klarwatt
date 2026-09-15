/**
 * Consent Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/consent.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ConsentRecord = components["schemas"]["ConsentRecord"];
export type ConsentRecordCreate = components["schemas"]["ConsentRecordCreate"];
export type DataPurpose = components["schemas"]["DataPurpose"];
export type Purpose = operations["listDataPurposes"]["responses"]["200"]["content"]["application/json"]["data"];
export type Record = operations["listConsentRecords"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CaptureConsentRequestInput = NonNullable<operations["captureConsent"]["requestBody"]>["content"]["application/json"];
export type WithdrawConsentRequestInput = NonNullable<operations["withdrawConsent"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListConsentRecordsParams = NonNullable<operations["listConsentRecords"]["parameters"]["query"]>;
export type WithdrawConsentParams = operations["withdrawConsent"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListDataPurposesResponse = operations["listDataPurposes"]["responses"]["200"]["content"]["application/json"];
export type ListConsentRecordsResponse = operations["listConsentRecords"]["responses"]["200"]["content"]["application/json"];
export type CaptureConsentResponse = operations["captureConsent"]["responses"]["201"]["content"]["application/json"];
export type WithdrawConsentResponse = operations["withdrawConsent"]["responses"]["200"]["content"]["application/json"];


