/**
 * Integration event type definition (handwritten companion to generated registry).
 */

export interface IntegrationEventTypeDefinition {
  type: string;
  domain: string;
  aggregateType?: string;
  description?: string;
  defaultDeliveryMode?: 'sync' | 'async';
  payloadSchemaName?: string;
}
