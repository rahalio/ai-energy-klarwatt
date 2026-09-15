/**
 * Compliance Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/compliance.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AutomationRelease = components["schemas"]["AutomationRelease"];
export type AutomationReleaseCreate = components["schemas"]["AutomationReleaseCreate"];
export type EscalationEvent = components["schemas"]["EscalationEvent"];
export type EvidencePack = components["schemas"]["EvidencePack"];
export type UnbundlingCheck = components["schemas"]["UnbundlingCheck"];
export type Release = operations["listAutomationReleases"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type ApproveAutomationReleaseRequestInput = NonNullable<operations["approveAutomationRelease"]["requestBody"]>["content"]["application/json"];
export type GenerateEvidencePackRequestInput = NonNullable<operations["generateEvidencePack"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListUnbundlingChecksParams = NonNullable<operations["listUnbundlingChecks"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListUnbundlingChecksResponse = operations["listUnbundlingChecks"]["responses"]["200"]["content"]["application/json"];
export type ListAutomationReleasesResponse = operations["listAutomationReleases"]["responses"]["200"]["content"]["application/json"];
export type ApproveAutomationReleaseResponse = operations["approveAutomationRelease"]["responses"]["201"]["content"]["application/json"];
export type GenerateEvidencePackResponse = operations["generateEvidencePack"]["responses"]["201"]["content"]["application/json"];


