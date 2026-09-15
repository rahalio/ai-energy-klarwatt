import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const executeResolution_Body = z
  .object({
    sessionId: z.string(),
    actionType: z.enum([
      'request_meter_reread',
      'request_meter_inspection',
      'tariff_eligibility_check',
      'refer_network_fault',
      'reissue_bill',
      'update_contact_preference',
      'send_explanation_summary',
    ]),
    parameters: z.record(z.string()).optional(),
  })
  .passthrough();
const proposePaymentPlan_Body = z
  .object({
    accountId: z.string(),
    instalmentAmount: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough(),
    instalmentCount: z.number().int(),
    affordabilityPolicyRef: z.string().optional(),
    advisorReference: z.string(),
  })
  .passthrough();
const ResolutionActionCreate = z
  .object({
    sessionId: z.string(),
    actionType: z.enum([
      'request_meter_reread',
      'request_meter_inspection',
      'tariff_eligibility_check',
      'refer_network_fault',
      'reissue_bill',
      'update_contact_preference',
      'send_explanation_summary',
    ]),
    parameters: z.record(z.string()).optional(),
  })
  .passthrough();
const ResolutionAction = z
  .object({
    id: z.string(),
    sessionId: z.string(),
    actionType: z.string(),
    status: z.enum(['executed', 'queued', 'blocked_by_policy', 'failed']),
    policyReference: z.string().optional(),
    targetSystem: z
      .enum([
        'billing',
        'meter_data_management',
        'collections',
        'network_operator',
        'crm',
      ])
      .optional(),
    blockReason: z.string().optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const ResolutionActionResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        sessionId: z.string(),
        actionType: z.string(),
        status: z.enum(['executed', 'queued', 'blocked_by_policy', 'failed']),
        policyReference: z.string().optional(),
        targetSystem: z
          .enum([
            'billing',
            'meter_data_management',
            'collections',
            'network_operator',
            'crm',
          ])
          .optional(),
        blockReason: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const Money = z
  .object({ amount: z.number(), currency: z.string() })
  .passthrough();
const PaymentPlanProposal = z
  .object({
    accountId: z.string(),
    instalmentAmount: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough(),
    instalmentCount: z.number().int(),
    affordabilityPolicyRef: z.string().optional(),
    advisorReference: z.string(),
  })
  .passthrough();
const PaymentPlan = z
  .object({
    id: z.string(),
    accountId: z.string(),
    status: z.enum(['proposed', 'accepted', 'declined', 'blocked']),
    instalmentAmount: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
    instalmentCount: z.number().int().optional(),
    affordabilityPolicyRef: z.string().optional(),
    proposedByHuman: z.boolean().optional(),
  })
  .passthrough();
const PaymentPlanResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        accountId: z.string(),
        status: z.enum(['proposed', 'accepted', 'declined', 'blocked']),
        instalmentAmount: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough()
          .optional(),
        instalmentCount: z.number().int().optional(),
        affordabilityPolicyRef: z.string().optional(),
        proposedByHuman: z.boolean().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();

export const schemas: any = {
  executeResolution_Body,
  proposePaymentPlan_Body,
  ResolutionActionCreate,
  ResolutionAction,
  ResponseMeta,
  ResolutionActionResponse,
  Problem,
  Money,
  PaymentPlanProposal,
  PaymentPlan,
  PaymentPlanResponse,
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/v1/resolutions',
    alias: 'executeResolution',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: executeResolution_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            sessionId: z.string(),
            actionType: z.string(),
            status: z.enum([
              'executed',
              'queued',
              'blocked_by_policy',
              'failed',
            ]),
            policyReference: z.string().optional(),
            targetSystem: z
              .enum([
                'billing',
                'meter_data_management',
                'collections',
                'network_operator',
                'crm',
              ])
              .optional(),
            blockReason: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 403,
        description: `Resolution falls outside approved policy or a vulnerability flag is open`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/resolutions/payment-plans',
    alias: 'proposePaymentPlan',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: proposePaymentPlan_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            accountId: z.string(),
            status: z.enum(['proposed', 'accepted', 'declined', 'blocked']),
            instalmentAmount: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough()
              .optional(),
            instalmentCount: z.number().int().optional(),
            affordabilityPolicyRef: z.string().optional(),
            proposedByHuman: z.boolean().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 403,
        description: `Payment plans may not be proposed by an automated agent`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
