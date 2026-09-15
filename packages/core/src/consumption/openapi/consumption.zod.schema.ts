import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const explainConsumptionChange_Body = z
  .object({
    accountId: z.string(),
    meterPointId: z.string(),
    subjectPeriod: z.string(),
    comparisonPeriod: z.string(),
    requestedGranularity: z
      .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
      .optional(),
    purposeId: z.string().optional(),
  })
  .passthrough();
const raiseDataDefectReport_Body = z
  .object({
    meterPointId: z.string(),
    sessionId: z.string().optional(),
    defectType: z.enum([
      'missing_interval_data',
      'implausible_read',
      'persistent_estimation',
      'register_mismatch',
      'tariff_mapping_error',
      'settlement_discrepancy',
    ]),
    description: z.string(),
  })
  .passthrough();
const MeteringGranularity = z.enum([
  'monthly_total',
  'daily',
  'hourly',
  'half_hourly',
]);
const ConsumptionExplanationRequest = z
  .object({
    accountId: z.string(),
    meterPointId: z.string(),
    subjectPeriod: z.string(),
    comparisonPeriod: z.string(),
    requestedGranularity: z
      .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
      .optional(),
    purposeId: z.string().optional(),
  })
  .passthrough();
const Money = z
  .object({ amount: z.number(), currency: z.string() })
  .passthrough();
const ExplanationDriver = z
  .object({
    driver: z.enum([
      'weather_and_degree_days',
      'consumption_change',
      'tariff_price_change',
      'network_charge_change',
      'standing_charge',
      'estimated_read_correction',
      'billing_period_length',
      'tax_or_levy_change',
    ]),
    contributionAmount: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough(),
    contributionPercent: z.number().optional(),
    plainLanguage: z.string().optional(),
    evidenceReference: z.string().optional(),
  })
  .passthrough();
const ConsumptionExplanation = z
  .object({
    accountId: z.string(),
    meterPointId: z.string().optional(),
    subjectPeriod: z.string(),
    comparisonPeriod: z.string().optional(),
    totalChange: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough(),
    drivers: z.array(
      z
        .object({
          driver: z.enum([
            'weather_and_degree_days',
            'consumption_change',
            'tariff_price_change',
            'network_charge_change',
            'standing_charge',
            'estimated_read_correction',
            'billing_period_length',
            'tax_or_levy_change',
          ]),
          contributionAmount: z
            .object({ amount: z.number(), currency: z.string() })
            .passthrough(),
          contributionPercent: z.number().optional(),
          plainLanguage: z.string().optional(),
          evidenceReference: z.string().optional(),
        })
        .passthrough()
    ),
    granularityUsed: z
      .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
      .optional(),
    estimatedReadDisclosed: z.boolean().optional(),
    unexplainedResidualPercent: z.number().optional(),
    confidence: z.number().optional(),
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
const ConsumptionExplanationResponse = z
  .object({
    data: z
      .object({
        accountId: z.string(),
        meterPointId: z.string().optional(),
        subjectPeriod: z.string(),
        comparisonPeriod: z.string().optional(),
        totalChange: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough(),
        drivers: z.array(
          z
            .object({
              driver: z.enum([
                'weather_and_degree_days',
                'consumption_change',
                'tariff_price_change',
                'network_charge_change',
                'standing_charge',
                'estimated_read_correction',
                'billing_period_length',
                'tax_or_levy_change',
              ]),
              contributionAmount: z
                .object({ amount: z.number(), currency: z.string() })
                .passthrough(),
              contributionPercent: z.number().optional(),
              plainLanguage: z.string().optional(),
              evidenceReference: z.string().optional(),
            })
            .passthrough()
        ),
        granularityUsed: z
          .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
          .optional(),
        estimatedReadDisclosed: z.boolean().optional(),
        unexplainedResidualPercent: z.number().optional(),
        confidence: z.number().optional(),
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
const EstimatedReadCorrection = z
  .object({
    id: z.string(),
    meterPointId: z.string(),
    estimatedValueKwh: z.number().optional(),
    actualValueKwh: z.number().optional(),
    billingPeriodsAffected: z.array(z.string()).optional(),
    monetaryAdjustment: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
    correctedAt: z.string().datetime({ offset: true }),
    disclosedToCustomer: z.boolean().optional(),
  })
  .passthrough();
const EstimatedReadCorrectionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              meterPointId: z.string(),
              estimatedValueKwh: z.number().optional(),
              actualValueKwh: z.number().optional(),
              billingPeriodsAffected: z.array(z.string()).optional(),
              monetaryAdjustment: z
                .object({ amount: z.number(), currency: z.string() })
                .passthrough()
                .optional(),
              correctedAt: z.string().datetime({ offset: true }),
              disclosedToCustomer: z.boolean().optional(),
            })
            .passthrough()
        ),
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
const DataDefectReportCreate = z
  .object({
    meterPointId: z.string(),
    sessionId: z.string().optional(),
    defectType: z.enum([
      'missing_interval_data',
      'implausible_read',
      'persistent_estimation',
      'register_mismatch',
      'tariff_mapping_error',
      'settlement_discrepancy',
    ]),
    description: z.string(),
  })
  .passthrough();
const DataDefectReport = z
  .object({
    id: z.string(),
    meterPointId: z.string(),
    sessionId: z.string().optional(),
    defectType: z.string(),
    status: z.enum(['raised', 'accepted', 'fixed', 'rejected']),
    description: z.string().optional(),
    raisedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const DataDefectReportResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        meterPointId: z.string(),
        sessionId: z.string().optional(),
        defectType: z.string(),
        status: z.enum(['raised', 'accepted', 'fixed', 'rejected']),
        description: z.string().optional(),
        raisedAt: z.string().datetime({ offset: true }).optional(),
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
  explainConsumptionChange_Body,
  raiseDataDefectReport_Body,
  MeteringGranularity,
  ConsumptionExplanationRequest,
  Money,
  ExplanationDriver,
  ConsumptionExplanation,
  ResponseMeta,
  ConsumptionExplanationResponse,
  Problem,
  EstimatedReadCorrection,
  EstimatedReadCorrectionListResponse,
  DataDefectReportCreate,
  DataDefectReport,
  DataDefectReportResponse,
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/v1/consumption/data-defects',
    alias: 'raiseDataDefectReport',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: raiseDataDefectReport_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            meterPointId: z.string(),
            sessionId: z.string().optional(),
            defectType: z.string(),
            status: z.enum(['raised', 'accepted', 'fixed', 'rejected']),
            description: z.string().optional(),
            raisedAt: z.string().datetime({ offset: true }).optional(),
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
        status: 401,
        description: `Missing or invalid API key`,
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
    method: 'get',
    path: '/v1/consumption/estimated-read-corrections',
    alias: 'listEstimatedReadCorrections',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'meterPointId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  meterPointId: z.string(),
                  estimatedValueKwh: z.number().optional(),
                  actualValueKwh: z.number().optional(),
                  billingPeriodsAffected: z.array(z.string()).optional(),
                  monetaryAdjustment: z
                    .object({ amount: z.number(), currency: z.string() })
                    .passthrough()
                    .optional(),
                  correctedAt: z.string().datetime({ offset: true }),
                  disclosedToCustomer: z.boolean().optional(),
                })
                .passthrough()
            ),
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
        status: 401,
        description: `Missing or invalid API key`,
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
    path: '/v1/consumption/explanations',
    alias: 'explainConsumptionChange',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: explainConsumptionChange_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            accountId: z.string(),
            meterPointId: z.string().optional(),
            subjectPeriod: z.string(),
            comparisonPeriod: z.string().optional(),
            totalChange: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough(),
            drivers: z.array(
              z
                .object({
                  driver: z.enum([
                    'weather_and_degree_days',
                    'consumption_change',
                    'tariff_price_change',
                    'network_charge_change',
                    'standing_charge',
                    'estimated_read_correction',
                    'billing_period_length',
                    'tax_or_levy_change',
                  ]),
                  contributionAmount: z
                    .object({ amount: z.number(), currency: z.string() })
                    .passthrough(),
                  contributionPercent: z.number().optional(),
                  plainLanguage: z.string().optional(),
                  evidenceReference: z.string().optional(),
                })
                .passthrough()
            ),
            granularityUsed: z
              .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
              .optional(),
            estimatedReadDisclosed: z.boolean().optional(),
            unexplainedResidualPercent: z.number().optional(),
            confidence: z.number().optional(),
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
        description: `Requested granularity exceeds the purpose ceiling without consent`,
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
