/**
 * Resolutions Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/resolutions.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type PaymentPlan = components["schemas"]["PaymentPlan"];
export type PaymentPlanProposal = components["schemas"]["PaymentPlanProposal"];
export type ResolutionAction = components["schemas"]["ResolutionAction"];
export type ResolutionActionCreate = components["schemas"]["ResolutionActionCreate"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type ExecuteResolutionRequestInput = NonNullable<operations["executeResolution"]["requestBody"]>["content"]["application/json"];
export type ProposePaymentPlanRequestInput = NonNullable<operations["proposePaymentPlan"]["requestBody"]>["content"]["application/json"];



// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ExecuteResolutionResponse = operations["executeResolution"]["responses"]["201"]["content"]["application/json"];
export type ProposePaymentPlanResponse = operations["proposePaymentPlan"]["responses"]["201"]["content"]["application/json"];


