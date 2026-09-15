import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const recogniseComplaint_Body = z
  .object({
    sessionId: z.string(),
    category: z.enum([
      'billing_accuracy',
      'service_failure',
      'metering',
      'sales_conduct',
      'complaint_handling',
      'other',
    ]),
    utteranceAt: z.string().datetime({ offset: true }),
    summary: z.string().optional(),
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
const ComplaintCase = z
  .object({
    id: z.string(),
    sessionId: z.string(),
    externalCaseRef: z.string().optional(),
    status: z.enum([
      'logged',
      'under_investigation',
      'resolved',
      'referred_to_ombudsman',
      'closed',
    ]),
    category: z.string().optional(),
    raisedIn: z.enum(['automated_conversation', 'advisor_contact']),
    clockStartedAt: z.string().datetime({ offset: true }),
    regulatoryDeadline: z.string().datetime({ offset: true }).optional(),
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
const ComplaintCaseListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              sessionId: z.string(),
              externalCaseRef: z.string().optional(),
              status: z.enum([
                'logged',
                'under_investigation',
                'resolved',
                'referred_to_ombudsman',
                'closed',
              ]),
              category: z.string().optional(),
              raisedIn: z.enum(['automated_conversation', 'advisor_contact']),
              clockStartedAt: z.string().datetime({ offset: true }),
              regulatoryDeadline: z
                .string()
                .datetime({ offset: true })
                .optional(),
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
const ComplaintCaseCreate = z
  .object({
    sessionId: z.string(),
    category: z.enum([
      'billing_accuracy',
      'service_failure',
      'metering',
      'sales_conduct',
      'complaint_handling',
      'other',
    ]),
    utteranceAt: z.string().datetime({ offset: true }),
    summary: z.string().optional(),
  })
  .passthrough();
const ComplaintCaseResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        sessionId: z.string(),
        externalCaseRef: z.string().optional(),
        status: z.enum([
          'logged',
          'under_investigation',
          'resolved',
          'referred_to_ombudsman',
          'closed',
        ]),
        category: z.string().optional(),
        raisedIn: z.enum(['automated_conversation', 'advisor_contact']),
        clockStartedAt: z.string().datetime({ offset: true }),
        regulatoryDeadline: z.string().datetime({ offset: true }).optional(),
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
  recogniseComplaint_Body,
  Problem,
  ComplaintCase,
  ResponseMeta,
  ComplaintCaseListResponse,
  ComplaintCaseCreate,
  ComplaintCaseResponse,
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/v1/complaints',
    alias: 'recogniseComplaint',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: recogniseComplaint_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            sessionId: z.string(),
            externalCaseRef: z.string().optional(),
            status: z.enum([
              'logged',
              'under_investigation',
              'resolved',
              'referred_to_ombudsman',
              'closed',
            ]),
            category: z.string().optional(),
            raisedIn: z.enum(['automated_conversation', 'advisor_contact']),
            clockStartedAt: z.string().datetime({ offset: true }),
            regulatoryDeadline: z
              .string()
              .datetime({ offset: true })
              .optional(),
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
    path: '/v1/complaints',
    alias: 'listComplaints',
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
        name: 'raisedIn',
        type: 'Query',
        schema: z
          .enum(['automated_conversation', 'advisor_contact'])
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
                  sessionId: z.string(),
                  externalCaseRef: z.string().optional(),
                  status: z.enum([
                    'logged',
                    'under_investigation',
                    'resolved',
                    'referred_to_ombudsman',
                    'closed',
                  ]),
                  category: z.string().optional(),
                  raisedIn: z.enum([
                    'automated_conversation',
                    'advisor_contact',
                  ]),
                  clockStartedAt: z.string().datetime({ offset: true }),
                  regulatoryDeadline: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
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
