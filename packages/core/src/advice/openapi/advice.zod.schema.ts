import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

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
const MeteringGranularity = z.enum([
  'monthly_total',
  'daily',
  'hourly',
  'half_hourly',
]);
const AdviceRecommendation = z
  .object({
    id: z.string(),
    accountId: z.string(),
    recommendation: z.enum([
      'shift_usage_to_cheaper_band',
      'reduce_standby_load',
      'heating_schedule_change',
      'tariff_switch_eligible',
      'insulation_or_retrofit_referral',
      'smart_thermostat_referral',
    ]),
    estimatedAnnualSaving: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
    confidence: z.number(),
    granularityUsed: z
      .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
      .optional(),
    policyReference: z.string().optional(),
    financialConsequence: z.boolean().optional(),
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
const AdviceRecommendationListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              accountId: z.string(),
              recommendation: z.enum([
                'shift_usage_to_cheaper_band',
                'reduce_standby_load',
                'heating_schedule_change',
                'tariff_switch_eligible',
                'insulation_or_retrofit_referral',
                'smart_thermostat_referral',
              ]),
              estimatedAnnualSaving: z
                .object({ amount: z.number(), currency: z.string() })
                .passthrough()
                .optional(),
              confidence: z.number(),
              granularityUsed: z
                .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
                .optional(),
              policyReference: z.string().optional(),
              financialConsequence: z.boolean().optional(),
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

export const schemas: any = {
  Problem,
  Money,
  MeteringGranularity,
  AdviceRecommendation,
  ResponseMeta,
  AdviceRecommendationListResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/advice/recommendations',
    alias: 'listAdviceRecommendations',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string(),
      },
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
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  accountId: z.string(),
                  recommendation: z.enum([
                    'shift_usage_to_cheaper_band',
                    'reduce_standby_load',
                    'heating_schedule_change',
                    'tariff_switch_eligible',
                    'insulation_or_retrofit_referral',
                    'smart_thermostat_referral',
                  ]),
                  estimatedAnnualSaving: z
                    .object({ amount: z.number(), currency: z.string() })
                    .passthrough()
                    .optional(),
                  confidence: z.number(),
                  granularityUsed: z
                    .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
                    .optional(),
                  policyReference: z.string().optional(),
                  financialConsequence: z.boolean().optional(),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
