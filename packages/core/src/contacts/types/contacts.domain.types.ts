/**
 * Contacts Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/contacts.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AccountContext = components["schemas"]["AccountContext"];
export type ContactSession = components["schemas"]["ContactSession"];
export type ContactSessionCreate = components["schemas"]["ContactSessionCreate"];
export type EscalationEvent = components["schemas"]["EscalationEvent"];
export type Intent = components["schemas"]["Intent"];
export type Contact = operations["listContactSessions"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type OpenContactSessionRequestInput = NonNullable<operations["openContactSession"]["requestBody"]>["content"]["application/json"];
export type ClassifyContactIntentRequestInput = NonNullable<operations["classifyContactIntent"]["requestBody"]>["content"]["application/json"];
export type EscalateToAdvisorRequestInput = NonNullable<operations["escalateToAdvisor"]["requestBody"]>["content"]["application/json"];
export type RecordAdvisorCorrectionRequestInput = NonNullable<operations["recordAdvisorCorrection"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListContactSessionsParams = NonNullable<operations["listContactSessions"]["parameters"]["query"]>;
export type GetContactSessionParams = operations["getContactSession"]["parameters"]["path"];
export type ClassifyContactIntentParams = operations["classifyContactIntent"]["parameters"]["path"];
export type EscalateToAdvisorParams = operations["escalateToAdvisor"]["parameters"]["path"];
export type RecordAdvisorCorrectionParams = operations["recordAdvisorCorrection"]["parameters"]["path"];
export type GetAccountContextParams = NonNullable<operations["getAccountContext"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type OpenContactSessionResponse = operations["openContactSession"]["responses"]["201"]["content"]["application/json"];
export type ListContactSessionsResponse = operations["listContactSessions"]["responses"]["200"]["content"]["application/json"];
export type GetContactSessionResponse = operations["getContactSession"]["responses"]["200"]["content"]["application/json"];
export type ClassifyContactIntentResponse = operations["classifyContactIntent"]["responses"]["200"]["content"]["application/json"];
export type EscalateToAdvisorResponse = operations["escalateToAdvisor"]["responses"]["200"]["content"]["application/json"];
export type RecordAdvisorCorrectionResponse = operations["recordAdvisorCorrection"]["responses"]["200"]["content"]["application/json"];
export type GetAccountContextResponse = operations["getAccountContext"]["responses"]["200"]["content"]["application/json"];


