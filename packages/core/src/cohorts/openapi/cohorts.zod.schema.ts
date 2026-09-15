import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createPilotCohort_Body = z
  .object({
    capability: z.string(),
    releaseId: z.string().optional(),
    decisionDate: z.string(),
    comparisonGroupDefinition: z.string(),
    allocationPercent: z.number().optional(),
    includedIntents: z.array(z.string()).optional(),
  })
  .passthrough();
const decideCohortOutcome_Body = z
  .object({
    outcome: z.enum(['scale', 'stop', 'extend']),
    decidedBy: z.string(),
    rationale: z.string(),
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
const PilotCohort = z
  .object({
    id: z.string(),
    capability: z.string(),
    releaseId: z.string().optional(),
    status: z.enum(['running', 'awaiting_decision', 'scaled', 'stopped']),
    decisionDate: z.string(),
    comparisonGroupDefinition: z.string().optional(),
    allocationPercent: z.number().optional(),
    outcome: z.enum(['scale', 'stop', 'extend']).optional(),
    rationale: z.string().optional(),
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
const PilotCohortListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              capability: z.string(),
              releaseId: z.string().optional(),
              status: z.enum([
                'running',
                'awaiting_decision',
                'scaled',
                'stopped',
              ]),
              decisionDate: z.string(),
              comparisonGroupDefinition: z.string().optional(),
              allocationPercent: z.number().optional(),
              outcome: z.enum(['scale', 'stop', 'extend']).optional(),
              rationale: z.string().optional(),
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
const PilotCohortCreate = z
  .object({
    capability: z.string(),
    releaseId: z.string().optional(),
    decisionDate: z.string(),
    comparisonGroupDefinition: z.string(),
    allocationPercent: z.number().optional(),
    includedIntents: z.array(z.string()).optional(),
  })
  .passthrough();
const PilotCohortResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        capability: z.string(),
        releaseId: z.string().optional(),
        status: z.enum(['running', 'awaiting_decision', 'scaled', 'stopped']),
        decisionDate: z.string(),
        comparisonGroupDefinition: z.string().optional(),
        allocationPercent: z.number().optional(),
        outcome: z.enum(['scale', 'stop', 'extend']).optional(),
        rationale: z.string().optional(),
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
const Money = z
  .object({ amount: z.number(), currency: z.string() })
  .passthrough();
const CohortMetric = z
  .object({
    cohortId: z.string(),
    period: z.string().optional(),
    weatherAdjusted: z.boolean().optional(),
    priceChangeEventsExcluded: z.boolean().optional(),
    costPerResolvedContact: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough(),
    baselineCostPerResolvedContact: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
    containmentPercent: z.number().optional(),
    firstContactResolutionPercent: z.number(),
    complaintRatePerThousand: z.number(),
    abandonmentPercent: z.number().optional(),
    advisorCorrectionRatePercent: z.number().optional(),
    firstContactResolutionRate: z.number().gte(0).lte(1).optional(),
    complaintRate: z.number().gte(0).lte(1).optional(),
  })
  .passthrough();
const CohortMetricResponse = z
  .object({
    data: z
      .object({
        cohortId: z.string(),
        period: z.string().optional(),
        weatherAdjusted: z.boolean().optional(),
        priceChangeEventsExcluded: z.boolean().optional(),
        costPerResolvedContact: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough(),
        baselineCostPerResolvedContact: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough()
          .optional(),
        containmentPercent: z.number().optional(),
        firstContactResolutionPercent: z.number(),
        complaintRatePerThousand: z.number(),
        abandonmentPercent: z.number().optional(),
        advisorCorrectionRatePercent: z.number().optional(),
        firstContactResolutionRate: z.number().gte(0).lte(1).optional(),
        complaintRate: z.number().gte(0).lte(1).optional(),
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
  createPilotCohort_Body,
  decideCohortOutcome_Body,
  Problem,
  PilotCohort,
  ResponseMeta,
  PilotCohortListResponse,
  PilotCohortCreate,
  PilotCohortResponse,
  Money,
  CohortMetric,
  CohortMetricResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/cohorts',
    alias: 'listPilotCohorts',
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
        name: 'status',
        type: 'Query',
        schema: z
          .enum(['running', 'awaiting_decision', 'scaled', 'stopped'])
          .optional(),
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
                  capability: z.string(),
                  releaseId: z.string().optional(),
                  status: z.enum([
                    'running',
                    'awaiting_decision',
                    'scaled',
                    'stopped',
                  ]),
                  decisionDate: z.string(),
                  comparisonGroupDefinition: z.string().optional(),
                  allocationPercent: z.number().optional(),
                  outcome: z.enum(['scale', 'stop', 'extend']).optional(),
                  rationale: z.string().optional(),
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
    path: '/v1/cohorts',
    alias: 'createPilotCohort',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createPilotCohort_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            capability: z.string(),
            releaseId: z.string().optional(),
            status: z.enum([
              'running',
              'awaiting_decision',
              'scaled',
              'stopped',
            ]),
            decisionDate: z.string(),
            comparisonGroupDefinition: z.string().optional(),
            allocationPercent: z.number().optional(),
            outcome: z.enum(['scale', 'stop', 'extend']).optional(),
            rationale: z.string().optional(),
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
    path: '/v1/cohorts/:cohortId/decision',
    alias: 'decideCohortOutcome',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: decideCohortOutcome_Body,
      },
      {
        name: 'cohortId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            capability: z.string(),
            releaseId: z.string().optional(),
            status: z.enum([
              'running',
              'awaiting_decision',
              'scaled',
              'stopped',
            ]),
            decisionDate: z.string(),
            comparisonGroupDefinition: z.string().optional(),
            allocationPercent: z.number().optional(),
            outcome: z.enum(['scale', 'stop', 'extend']).optional(),
            rationale: z.string().optional(),
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
    path: '/v1/cohorts/:cohortId/metrics',
    alias: 'getCohortMetrics',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cohortId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'weatherAdjusted',
        type: 'Query',
        schema: z.boolean().optional().default(true),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            cohortId: z.string(),
            period: z.string().optional(),
            weatherAdjusted: z.boolean().optional(),
            priceChangeEventsExcluded: z.boolean().optional(),
            costPerResolvedContact: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough(),
            baselineCostPerResolvedContact: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough()
              .optional(),
            containmentPercent: z.number().optional(),
            firstContactResolutionPercent: z.number(),
            complaintRatePerThousand: z.number(),
            abandonmentPercent: z.number().optional(),
            advisorCorrectionRatePercent: z.number().optional(),
            firstContactResolutionRate: z.number().gte(0).lte(1).optional(),
            complaintRate: z.number().gte(0).lte(1).optional(),
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
