import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const approveAutomationRelease_Body = z
  .object({
    capability: z.string(),
    version: z.string(),
    approvedBy: z.string(),
    changeSummary: z.string().optional(),
    affectedIntents: z.array(z.string()).optional(),
  })
  .passthrough();
const generateEvidencePack_Body = z
  .object({ sessionId: z.string(), complaintCaseId: z.string().optional() })
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
const RegulatedRole = z.enum([
  'supplier',
  'network_operator',
  'affiliated_service_provider',
]);
const UnbundlingCheck = z
  .object({
    id: z.string(),
    sessionId: z.string(),
    declaredRole: z.enum([
      'supplier',
      'network_operator',
      'affiliated_service_provider',
    ]),
    requestedDataSource: z
      .enum(['supply_side', 'network_side', 'affiliate'])
      .optional(),
    purposeId: z.string().optional(),
    verdict: z.enum(['permitted', 'blocked']),
    rationale: z.string().optional(),
    checkedAt: z.string().datetime({ offset: true }).optional(),
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
const UnbundlingCheckListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              sessionId: z.string(),
              declaredRole: z.enum([
                'supplier',
                'network_operator',
                'affiliated_service_provider',
              ]),
              requestedDataSource: z
                .enum(['supply_side', 'network_side', 'affiliate'])
                .optional(),
              purposeId: z.string().optional(),
              verdict: z.enum(['permitted', 'blocked']),
              rationale: z.string().optional(),
              checkedAt: z.string().datetime({ offset: true }).optional(),
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
const AutomationRelease = z
  .object({
    id: z.string(),
    capability: z.string(),
    version: z.string(),
    approvedBy: z.string(),
    approvedAt: z.string().datetime({ offset: true }),
    changeSummary: z.string().optional(),
    status: z
      .enum(['approved', 'active', 'superseded', 'rolled_back'])
      .optional(),
  })
  .passthrough();
const AutomationReleaseListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              capability: z.string(),
              version: z.string(),
              approvedBy: z.string(),
              approvedAt: z.string().datetime({ offset: true }),
              changeSummary: z.string().optional(),
              status: z
                .enum(['approved', 'active', 'superseded', 'rolled_back'])
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
const AutomationReleaseCreate = z
  .object({
    capability: z.string(),
    version: z.string(),
    approvedBy: z.string(),
    changeSummary: z.string().optional(),
    affectedIntents: z.array(z.string()).optional(),
  })
  .passthrough();
const AutomationReleaseResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        capability: z.string(),
        version: z.string(),
        approvedBy: z.string(),
        approvedAt: z.string().datetime({ offset: true }),
        changeSummary: z.string().optional(),
        status: z
          .enum(['approved', 'active', 'superseded', 'rolled_back'])
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
  .passthrough();
const EscalationEvent = z
  .object({
    id: z.string(),
    sessionId: z.string(),
    reason: z.enum([
      'vulnerability_gate',
      'outside_policy',
      'low_confidence',
      'customer_request',
      'unbundling_block',
      'data_unavailable',
    ]),
    targetQueue: z.string().optional(),
    packageComplete: z.boolean().optional(),
    conversationTranscriptRef: z.string().optional(),
    dataUsed: z.array(z.string()).optional(),
    escalatedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const EvidencePack = z
  .object({
    id: z.string(),
    sessionId: z.string(),
    complaintCaseId: z.string().optional(),
    conversationTranscriptRef: z.string().optional(),
    dataUsed: z.array(z.string()).optional(),
    purposeId: z.string().optional(),
    regulatedRole: z
      .enum(['supplier', 'network_operator', 'affiliated_service_provider'])
      .optional(),
    releaseId: z.string().optional(),
    escalationDecisions: z
      .array(
        z
          .object({
            id: z.string(),
            sessionId: z.string(),
            reason: z.enum([
              'vulnerability_gate',
              'outside_policy',
              'low_confidence',
              'customer_request',
              'unbundling_block',
              'data_unavailable',
            ]),
            targetQueue: z.string().optional(),
            packageComplete: z.boolean().optional(),
            conversationTranscriptRef: z.string().optional(),
            dataUsed: z.array(z.string()).optional(),
            escalatedAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough()
      )
      .optional(),
    unbundlingChecks: z
      .array(
        z
          .object({
            id: z.string(),
            sessionId: z.string(),
            declaredRole: z.enum([
              'supplier',
              'network_operator',
              'affiliated_service_provider',
            ]),
            requestedDataSource: z
              .enum(['supply_side', 'network_side', 'affiliate'])
              .optional(),
            purposeId: z.string().optional(),
            verdict: z.enum(['permitted', 'blocked']),
            rationale: z.string().optional(),
            checkedAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough()
      )
      .optional(),
    specialCategoryMinimised: z.boolean().optional(),
    generatedAt: z.string().datetime({ offset: true }),
    releaseVersionId: z.string().optional(),
    integrityAttested: z.boolean().optional(),
  })
  .passthrough();
const EvidencePackResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        sessionId: z.string(),
        complaintCaseId: z.string().optional(),
        conversationTranscriptRef: z.string().optional(),
        dataUsed: z.array(z.string()).optional(),
        purposeId: z.string().optional(),
        regulatedRole: z
          .enum(['supplier', 'network_operator', 'affiliated_service_provider'])
          .optional(),
        releaseId: z.string().optional(),
        escalationDecisions: z
          .array(
            z
              .object({
                id: z.string(),
                sessionId: z.string(),
                reason: z.enum([
                  'vulnerability_gate',
                  'outside_policy',
                  'low_confidence',
                  'customer_request',
                  'unbundling_block',
                  'data_unavailable',
                ]),
                targetQueue: z.string().optional(),
                packageComplete: z.boolean().optional(),
                conversationTranscriptRef: z.string().optional(),
                dataUsed: z.array(z.string()).optional(),
                escalatedAt: z.string().datetime({ offset: true }).optional(),
              })
              .passthrough()
          )
          .optional(),
        unbundlingChecks: z
          .array(
            z
              .object({
                id: z.string(),
                sessionId: z.string(),
                declaredRole: z.enum([
                  'supplier',
                  'network_operator',
                  'affiliated_service_provider',
                ]),
                requestedDataSource: z
                  .enum(['supply_side', 'network_side', 'affiliate'])
                  .optional(),
                purposeId: z.string().optional(),
                verdict: z.enum(['permitted', 'blocked']),
                rationale: z.string().optional(),
                checkedAt: z.string().datetime({ offset: true }).optional(),
              })
              .passthrough()
          )
          .optional(),
        specialCategoryMinimised: z.boolean().optional(),
        generatedAt: z.string().datetime({ offset: true }),
        releaseVersionId: z.string().optional(),
        integrityAttested: z.boolean().optional(),
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
  approveAutomationRelease_Body,
  generateEvidencePack_Body,
  Problem,
  RegulatedRole,
  UnbundlingCheck,
  ResponseMeta,
  UnbundlingCheckListResponse,
  AutomationRelease,
  AutomationReleaseListResponse,
  AutomationReleaseCreate,
  AutomationReleaseResponse,
  EscalationEvent,
  EvidencePack,
  EvidencePackResponse,
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/v1/compliance/evidence-packs',
    alias: 'generateEvidencePack',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: generateEvidencePack_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            sessionId: z.string(),
            complaintCaseId: z.string().optional(),
            conversationTranscriptRef: z.string().optional(),
            dataUsed: z.array(z.string()).optional(),
            purposeId: z.string().optional(),
            regulatedRole: z
              .enum([
                'supplier',
                'network_operator',
                'affiliated_service_provider',
              ])
              .optional(),
            releaseId: z.string().optional(),
            escalationDecisions: z
              .array(
                z
                  .object({
                    id: z.string(),
                    sessionId: z.string(),
                    reason: z.enum([
                      'vulnerability_gate',
                      'outside_policy',
                      'low_confidence',
                      'customer_request',
                      'unbundling_block',
                      'data_unavailable',
                    ]),
                    targetQueue: z.string().optional(),
                    packageComplete: z.boolean().optional(),
                    conversationTranscriptRef: z.string().optional(),
                    dataUsed: z.array(z.string()).optional(),
                    escalatedAt: z
                      .string()
                      .datetime({ offset: true })
                      .optional(),
                  })
                  .passthrough()
              )
              .optional(),
            unbundlingChecks: z
              .array(
                z
                  .object({
                    id: z.string(),
                    sessionId: z.string(),
                    declaredRole: z.enum([
                      'supplier',
                      'network_operator',
                      'affiliated_service_provider',
                    ]),
                    requestedDataSource: z
                      .enum(['supply_side', 'network_side', 'affiliate'])
                      .optional(),
                    purposeId: z.string().optional(),
                    verdict: z.enum(['permitted', 'blocked']),
                    rationale: z.string().optional(),
                    checkedAt: z.string().datetime({ offset: true }).optional(),
                  })
                  .passthrough()
              )
              .optional(),
            specialCategoryMinimised: z.boolean().optional(),
            generatedAt: z.string().datetime({ offset: true }),
            releaseVersionId: z.string().optional(),
            integrityAttested: z.boolean().optional(),
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
        status: 404,
        description: `Resource not found`,
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
    path: '/v1/compliance/releases',
    alias: 'listAutomationReleases',
    requestFormat: 'json',
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  capability: z.string(),
                  version: z.string(),
                  approvedBy: z.string(),
                  approvedAt: z.string().datetime({ offset: true }),
                  changeSummary: z.string().optional(),
                  status: z
                    .enum(['approved', 'active', 'superseded', 'rolled_back'])
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
  {
    method: 'post',
    path: '/v1/compliance/releases',
    alias: 'approveAutomationRelease',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: approveAutomationRelease_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            capability: z.string(),
            version: z.string(),
            approvedBy: z.string(),
            approvedAt: z.string().datetime({ offset: true }),
            changeSummary: z.string().optional(),
            status: z
              .enum(['approved', 'active', 'superseded', 'rolled_back'])
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
    path: '/v1/compliance/unbundling-checks',
    alias: 'listUnbundlingChecks',
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
        name: 'verdict',
        type: 'Query',
        schema: z.enum(['permitted', 'blocked']).optional(),
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
                  declaredRole: z.enum([
                    'supplier',
                    'network_operator',
                    'affiliated_service_provider',
                  ]),
                  requestedDataSource: z
                    .enum(['supply_side', 'network_side', 'affiliate'])
                    .optional(),
                  purposeId: z.string().optional(),
                  verdict: z.enum(['permitted', 'blocked']),
                  rationale: z.string().optional(),
                  checkedAt: z.string().datetime({ offset: true }).optional(),
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
