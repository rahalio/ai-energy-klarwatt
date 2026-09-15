import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const captureConsent_Body = z
  .object({
    accountId: z.string(),
    purposeId: z.string(),
    grantedGranularity: z.enum([
      'monthly_total',
      'daily',
      'hourly',
      'half_hourly',
    ]),
    capturedVia: z
      .enum(['voice', 'chat', 'mobile_app', 'web_form', 'email', 'sms'])
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
const MeteringGranularity = z.enum([
  'monthly_total',
  'daily',
  'hourly',
  'half_hourly',
]);
const RegulatedRole = z.enum([
  'supplier',
  'network_operator',
  'affiliated_service_provider',
]);
const DataPurpose = z
  .object({
    id: z.string(),
    name: z.string(),
    lawfulBasis: z.enum([
      'contract_performance',
      'legal_obligation',
      'legitimate_interest',
      'consent',
    ]),
    maxGranularity: z.enum(['monthly_total', 'daily', 'hourly', 'half_hourly']),
    permittedRoles: z
      .array(
        z.enum(['supplier', 'network_operator', 'affiliated_service_provider'])
      )
      .optional(),
    retentionPeriod: z.string().optional(),
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
const DataPurposeListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              name: z.string(),
              lawfulBasis: z.enum([
                'contract_performance',
                'legal_obligation',
                'legitimate_interest',
                'consent',
              ]),
              maxGranularity: z.enum([
                'monthly_total',
                'daily',
                'hourly',
                'half_hourly',
              ]),
              permittedRoles: z
                .array(
                  z.enum([
                    'supplier',
                    'network_operator',
                    'affiliated_service_provider',
                  ])
                )
                .optional(),
              retentionPeriod: z.string().optional(),
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
const Channel = z.enum([
  'voice',
  'chat',
  'mobile_app',
  'web_form',
  'email',
  'sms',
]);
const ConsentRecord = z
  .object({
    id: z.string(),
    accountId: z.string(),
    purposeId: z.string(),
    status: z.enum(['granted', 'withdrawn', 'expired']),
    grantedGranularity: z.enum([
      'monthly_total',
      'daily',
      'hourly',
      'half_hourly',
    ]),
    capturedVia: z
      .enum(['voice', 'chat', 'mobile_app', 'web_form', 'email', 'sms'])
      .optional(),
    grantedAt: z.string().datetime({ offset: true }).optional(),
    withdrawnAt: z.string().datetime({ offset: true }).optional(),
    effectiveFromNextInteraction: z.boolean().optional(),
  })
  .passthrough();
const ConsentRecordListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              accountId: z.string(),
              purposeId: z.string(),
              status: z.enum(['granted', 'withdrawn', 'expired']),
              grantedGranularity: z.enum([
                'monthly_total',
                'daily',
                'hourly',
                'half_hourly',
              ]),
              capturedVia: z
                .enum([
                  'voice',
                  'chat',
                  'mobile_app',
                  'web_form',
                  'email',
                  'sms',
                ])
                .optional(),
              grantedAt: z.string().datetime({ offset: true }).optional(),
              withdrawnAt: z.string().datetime({ offset: true }).optional(),
              effectiveFromNextInteraction: z.boolean().optional(),
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
const ConsentRecordCreate = z
  .object({
    accountId: z.string(),
    purposeId: z.string(),
    grantedGranularity: z.enum([
      'monthly_total',
      'daily',
      'hourly',
      'half_hourly',
    ]),
    capturedVia: z
      .enum(['voice', 'chat', 'mobile_app', 'web_form', 'email', 'sms'])
      .optional(),
  })
  .passthrough();
const ConsentRecordResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        accountId: z.string(),
        purposeId: z.string(),
        status: z.enum(['granted', 'withdrawn', 'expired']),
        grantedGranularity: z.enum([
          'monthly_total',
          'daily',
          'hourly',
          'half_hourly',
        ]),
        capturedVia: z
          .enum(['voice', 'chat', 'mobile_app', 'web_form', 'email', 'sms'])
          .optional(),
        grantedAt: z.string().datetime({ offset: true }).optional(),
        withdrawnAt: z.string().datetime({ offset: true }).optional(),
        effectiveFromNextInteraction: z.boolean().optional(),
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
  captureConsent_Body,
  Problem,
  MeteringGranularity,
  RegulatedRole,
  DataPurpose,
  ResponseMeta,
  DataPurposeListResponse,
  Channel,
  ConsentRecord,
  ConsentRecordListResponse,
  ConsentRecordCreate,
  ConsentRecordResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/consent/purposes',
    alias: 'listDataPurposes',
    requestFormat: 'json',
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  name: z.string(),
                  lawfulBasis: z.enum([
                    'contract_performance',
                    'legal_obligation',
                    'legitimate_interest',
                    'consent',
                  ]),
                  maxGranularity: z.enum([
                    'monthly_total',
                    'daily',
                    'hourly',
                    'half_hourly',
                  ]),
                  permittedRoles: z
                    .array(
                      z.enum([
                        'supplier',
                        'network_operator',
                        'affiliated_service_provider',
                      ])
                    )
                    .optional(),
                  retentionPeriod: z.string().optional(),
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
    method: 'get',
    path: '/v1/consent/records',
    alias: 'listConsentRecords',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string(),
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
                  purposeId: z.string(),
                  status: z.enum(['granted', 'withdrawn', 'expired']),
                  grantedGranularity: z.enum([
                    'monthly_total',
                    'daily',
                    'hourly',
                    'half_hourly',
                  ]),
                  capturedVia: z
                    .enum([
                      'voice',
                      'chat',
                      'mobile_app',
                      'web_form',
                      'email',
                      'sms',
                    ])
                    .optional(),
                  grantedAt: z.string().datetime({ offset: true }).optional(),
                  withdrawnAt: z.string().datetime({ offset: true }).optional(),
                  effectiveFromNextInteraction: z.boolean().optional(),
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
    path: '/v1/consent/records',
    alias: 'captureConsent',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: captureConsent_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            accountId: z.string(),
            purposeId: z.string(),
            status: z.enum(['granted', 'withdrawn', 'expired']),
            grantedGranularity: z.enum([
              'monthly_total',
              'daily',
              'hourly',
              'half_hourly',
            ]),
            capturedVia: z
              .enum(['voice', 'chat', 'mobile_app', 'web_form', 'email', 'sms'])
              .optional(),
            grantedAt: z.string().datetime({ offset: true }).optional(),
            withdrawnAt: z.string().datetime({ offset: true }).optional(),
            effectiveFromNextInteraction: z.boolean().optional(),
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
    path: '/v1/consent/records/:consentId/withdrawal',
    alias: 'withdrawConsent',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ reason: z.string() }).partial().passthrough(),
      },
      {
        name: 'consentId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            accountId: z.string(),
            purposeId: z.string(),
            status: z.enum(['granted', 'withdrawn', 'expired']),
            grantedGranularity: z.enum([
              'monthly_total',
              'daily',
              'hourly',
              'half_hourly',
            ]),
            capturedVia: z
              .enum(['voice', 'chat', 'mobile_app', 'web_form', 'email', 'sms'])
              .optional(),
            grantedAt: z.string().datetime({ offset: true }).optional(),
            withdrawnAt: z.string().datetime({ offset: true }).optional(),
            effectiveFromNextInteraction: z.boolean().optional(),
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
