/**
 * Consumption Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/consumption.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ConsumptionExplanation = components["schemas"]["ConsumptionExplanation"];
export type DataDefectReport = components["schemas"]["DataDefectReport"];
export type DataDefectReportCreate = components["schemas"]["DataDefectReportCreate"];
export type EstimatedReadCorrection = components["schemas"]["EstimatedReadCorrection"];
export type ExplanationDriver = components["schemas"]["ExplanationDriver"];
export type ConsumptionExplanationRequest = components["schemas"]["ConsumptionExplanationRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type ExplainConsumptionChangeRequestInput = NonNullable<operations["explainConsumptionChange"]["requestBody"]>["content"]["application/json"];
export type RaiseDataDefectReportRequestInput = NonNullable<operations["raiseDataDefectReport"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListEstimatedReadCorrectionsParams = NonNullable<operations["listEstimatedReadCorrections"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ExplainConsumptionChangeResponse = operations["explainConsumptionChange"]["responses"]["200"]["content"]["application/json"];
export type ListEstimatedReadCorrectionsResponse = operations["listEstimatedReadCorrections"]["responses"]["200"]["content"]["application/json"];
export type RaiseDataDefectReportResponse = operations["raiseDataDefectReport"]["responses"]["201"]["content"]["application/json"];


