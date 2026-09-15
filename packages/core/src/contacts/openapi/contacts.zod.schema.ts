import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const openContactSession_Body = z
  .object({
    channel: z.enum([
      'voice',
      'chat',
      'mobile_app',
      'web_form',
      'email',
      'sms',
    ]),
    accountReference: z.string(),
    meterPointId: z.string().optional(),
    declaredRole: z
      .enum(['supplier', 'network_operator', 'affiliated_service_provider'])
      .optional(),
    purposeId: z.string().optional(),
    cohortId: z.string().optional(),
  })
  .passthrough();
const escalateToAdvisor_Body = z
  .object({
    reason: z.enum([
      'vulnerability_gate',
      'outside_policy',
      'low_confidence',
      'customer_request',
      'unbundling_block',
      'data_unavailable',
    ]),
    targetQueue: z.string().optional(),
  })
  .passthrough();
const recordAdvisorCorrection_Body = z
  .object({
    wasExplanationCorrect: z.boolean(),
    advisorReference: z.string(),
    correctExplanation: z.string().optional(),
    suspectedDataDefect: z.boolean().optional(),
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
const MeteringGranularity = z.enum([
  'monthly_total',
  'daily',
  'hourly',
  'half_hourly',
]);
const ContactSession = z
  .object({
    id: z.string(),
    channel: z.enum([
      'voice',
      'chat',
      'mobile_app',
      'web_form',
      'email',
      'sms',
    ]),
    accountId: z.string().optional(),
    meterPointId: z.string().optional(),
    regulatedRole: z.enum([
      'supplier',
      'network_operator',
      'affiliated_service_provider',
    ]),
    purposeId: z.string(),
    granularityCeiling: z
      .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
      .optional(),
    outcome: z.enum([
      'in_progress',
      'resolved',
      'escalated',
      'abandoned',
      'blocked_by_policy',
    ]),
    firstContactResolution: z.boolean().optional(),
    dataUsed: z.array(z.string()).optional(),
    releaseId: z.string().optional(),
    cohortId: z.string().optional(),
    explanationCorrectedByAdvisor: z.boolean().optional(),
    openedAt: z.string().datetime({ offset: true }).optional(),
    secondsToFirstSubstantiveAnswer: z.number().int().optional(),
    releaseVersionId: z.string().optional(),
    packageCompleteness: z.number().gte(0).lte(1).optional(),
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
const ContactSessionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              channel: z.enum([
                'voice',
                'chat',
                'mobile_app',
                'web_form',
                'email',
                'sms',
              ]),
              accountId: z.string().optional(),
              meterPointId: z.string().optional(),
              regulatedRole: z.enum([
                'supplier',
                'network_operator',
                'affiliated_service_provider',
              ]),
              purposeId: z.string(),
              granularityCeiling: z
                .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
                .optional(),
              outcome: z.enum([
                'in_progress',
                'resolved',
                'escalated',
                'abandoned',
                'blocked_by_policy',
              ]),
              firstContactResolution: z.boolean().optional(),
              dataUsed: z.array(z.string()).optional(),
              releaseId: z.string().optional(),
              cohortId: z.string().optional(),
              explanationCorrectedByAdvisor: z.boolean().optional(),
              openedAt: z.string().datetime({ offset: true }).optional(),
              secondsToFirstSubstantiveAnswer: z.number().int().optional(),
              releaseVersionId: z.string().optional(),
              packageCompleteness: z.number().gte(0).lte(1).optional(),
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
const ContactSessionCreate = z
  .object({
    channel: z.enum([
      'voice',
      'chat',
      'mobile_app',
      'web_form',
      'email',
      'sms',
    ]),
    accountReference: z.string(),
    meterPointId: z.string().optional(),
    declaredRole: z
      .enum(['supplier', 'network_operator', 'affiliated_service_provider'])
      .optional(),
    purposeId: z.string().optional(),
    cohortId: z.string().optional(),
  })
  .passthrough();
const ContactSessionResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        channel: z.enum([
          'voice',
          'chat',
          'mobile_app',
          'web_form',
          'email',
          'sms',
        ]),
        accountId: z.string().optional(),
        meterPointId: z.string().optional(),
        regulatedRole: z.enum([
          'supplier',
          'network_operator',
          'affiliated_service_provider',
        ]),
        purposeId: z.string(),
        granularityCeiling: z
          .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
          .optional(),
        outcome: z.enum([
          'in_progress',
          'resolved',
          'escalated',
          'abandoned',
          'blocked_by_policy',
        ]),
        firstContactResolution: z.boolean().optional(),
        dataUsed: z.array(z.string()).optional(),
        releaseId: z.string().optional(),
        cohortId: z.string().optional(),
        explanationCorrectedByAdvisor: z.boolean().optional(),
        openedAt: z.string().datetime({ offset: true }).optional(),
        secondsToFirstSubstantiveAnswer: z.number().int().optional(),
        releaseVersionId: z.string().optional(),
        packageCompleteness: z.number().gte(0).lte(1).optional(),
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
const Intent = z
  .object({
    name: z.enum([
      'bill_higher_than_expected',
      'consumption_query',
      'meter_read_dispute',
      'tariff_change_query',
      'payment_difficulty',
      'disconnection_query',
      'move_in_move_out',
      'outage_query',
      'meter_fault',
      'complaint',
    ]),
    confidence: z.number(),
    triggersVulnerabilityGate: z.boolean().optional(),
    requiredGranularity: z
      .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
      .optional(),
  })
  .passthrough();
const IntentResponse = z
  .object({
    data: z
      .object({
        name: z.enum([
          'bill_higher_than_expected',
          'consumption_query',
          'meter_read_dispute',
          'tariff_change_query',
          'payment_difficulty',
          'disconnection_query',
          'move_in_move_out',
          'outage_query',
          'meter_fault',
          'complaint',
        ]),
        confidence: z.number(),
        triggersVulnerabilityGate: z.boolean().optional(),
        requiredGranularity: z
          .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
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
const EscalationEventResponse = z
  .object({
    data: z
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
const CustomerAccount = z
  .object({
    id: z.string(),
    meterPointIds: z.array(z.string()),
    paymentMethod: z
      .enum(['direct_debit', 'on_receipt', 'prepayment'])
      .optional(),
    arrearsBalance: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
    priorityServicesRegistered: z.boolean().optional(),
  })
  .passthrough();
const MeterPoint = z
  .object({
    id: z.string(),
    commodity: z.enum(['electricity', 'gas', 'heat']),
    meterType: z.enum(['smart_interval', 'smart_daily', 'traditional']),
    networkOperatorId: z.string().optional(),
    readSubmissionLag: z.string().optional(),
  })
  .passthrough();
const TariffPlan = z
  .object({
    id: z.string(),
    name: z.string(),
    structure: z.enum(['fixed', 'variable', 'time_of_use', 'dynamic']),
    standingChargePerDay: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
    unitRates: z
      .array(
        z
          .object({
            band: z.string(),
            pricePerKwh: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough(),
          })
          .partial()
          .passthrough()
      )
      .optional(),
    networkChargePassThrough: z.boolean().optional(),
    effectiveFrom: z.string().optional(),
  })
  .passthrough();
const MeterReading = z
  .object({
    meterPointId: z.string(),
    readAt: z.string().datetime({ offset: true }),
    valueKwh: z.number(),
    readType: z.enum(['actual', 'estimated', 'customer_submitted', 'deemed']),
    granularity: z
      .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
      .optional(),
  })
  .passthrough();
const AccountContext = z
  .object({
    account: z
      .object({
        id: z.string(),
        meterPointIds: z.array(z.string()),
        paymentMethod: z
          .enum(['direct_debit', 'on_receipt', 'prepayment'])
          .optional(),
        arrearsBalance: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough()
          .optional(),
        priorityServicesRegistered: z.boolean().optional(),
      })
      .passthrough(),
    meterPoints: z.array(
      z
        .object({
          id: z.string(),
          commodity: z.enum(['electricity', 'gas', 'heat']),
          meterType: z.enum(['smart_interval', 'smart_daily', 'traditional']),
          networkOperatorId: z.string().optional(),
          readSubmissionLag: z.string().optional(),
        })
        .passthrough()
    ),
    currentTariff: z
      .object({
        id: z.string(),
        name: z.string(),
        structure: z.enum(['fixed', 'variable', 'time_of_use', 'dynamic']),
        standingChargePerDay: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough()
          .optional(),
        unitRates: z
          .array(
            z
              .object({
                band: z.string(),
                pricePerKwh: z
                  .object({ amount: z.number(), currency: z.string() })
                  .passthrough(),
              })
              .partial()
              .passthrough()
          )
          .optional(),
        networkChargePassThrough: z.boolean().optional(),
        effectiveFrom: z.string().optional(),
      })
      .passthrough()
      .optional(),
    previousTariff: z
      .object({
        id: z.string(),
        name: z.string(),
        structure: z.enum(['fixed', 'variable', 'time_of_use', 'dynamic']),
        standingChargePerDay: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough()
          .optional(),
        unitRates: z
          .array(
            z
              .object({
                band: z.string(),
                pricePerKwh: z
                  .object({ amount: z.number(), currency: z.string() })
                  .passthrough(),
              })
              .partial()
              .passthrough()
          )
          .optional(),
        networkChargePassThrough: z.boolean().optional(),
        effectiveFrom: z.string().optional(),
      })
      .passthrough()
      .optional(),
    recentReadings: z
      .array(
        z
          .object({
            meterPointId: z.string(),
            readAt: z.string().datetime({ offset: true }),
            valueKwh: z.number(),
            readType: z.enum([
              'actual',
              'estimated',
              'customer_submitted',
              'deemed',
            ]),
            granularity: z
              .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
              .optional(),
          })
          .passthrough()
      )
      .optional(),
    granularityCeiling: z.enum([
      'monthly_total',
      'daily',
      'hourly',
      'half_hourly',
    ]),
    purposeId: z.string().optional(),
  })
  .passthrough();
const AccountContextResponse = z
  .object({
    data: z
      .object({
        account: z
          .object({
            id: z.string(),
            meterPointIds: z.array(z.string()),
            paymentMethod: z
              .enum(['direct_debit', 'on_receipt', 'prepayment'])
              .optional(),
            arrearsBalance: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough()
              .optional(),
            priorityServicesRegistered: z.boolean().optional(),
          })
          .passthrough(),
        meterPoints: z.array(
          z
            .object({
              id: z.string(),
              commodity: z.enum(['electricity', 'gas', 'heat']),
              meterType: z.enum([
                'smart_interval',
                'smart_daily',
                'traditional',
              ]),
              networkOperatorId: z.string().optional(),
              readSubmissionLag: z.string().optional(),
            })
            .passthrough()
        ),
        currentTariff: z
          .object({
            id: z.string(),
            name: z.string(),
            structure: z.enum(['fixed', 'variable', 'time_of_use', 'dynamic']),
            standingChargePerDay: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough()
              .optional(),
            unitRates: z
              .array(
                z
                  .object({
                    band: z.string(),
                    pricePerKwh: z
                      .object({ amount: z.number(), currency: z.string() })
                      .passthrough(),
                  })
                  .partial()
                  .passthrough()
              )
              .optional(),
            networkChargePassThrough: z.boolean().optional(),
            effectiveFrom: z.string().optional(),
          })
          .passthrough()
          .optional(),
        previousTariff: z
          .object({
            id: z.string(),
            name: z.string(),
            structure: z.enum(['fixed', 'variable', 'time_of_use', 'dynamic']),
            standingChargePerDay: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough()
              .optional(),
            unitRates: z
              .array(
                z
                  .object({
                    band: z.string(),
                    pricePerKwh: z
                      .object({ amount: z.number(), currency: z.string() })
                      .passthrough(),
                  })
                  .partial()
                  .passthrough()
              )
              .optional(),
            networkChargePassThrough: z.boolean().optional(),
            effectiveFrom: z.string().optional(),
          })
          .passthrough()
          .optional(),
        recentReadings: z
          .array(
            z
              .object({
                meterPointId: z.string(),
                readAt: z.string().datetime({ offset: true }),
                valueKwh: z.number(),
                readType: z.enum([
                  'actual',
                  'estimated',
                  'customer_submitted',
                  'deemed',
                ]),
                granularity: z
                  .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
                  .optional(),
              })
              .passthrough()
          )
          .optional(),
        granularityCeiling: z.enum([
          'monthly_total',
          'daily',
          'hourly',
          'half_hourly',
        ]),
        purposeId: z.string().optional(),
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
  openContactSession_Body,
  escalateToAdvisor_Body,
  recordAdvisorCorrection_Body,
  Channel,
  Problem,
  RegulatedRole,
  MeteringGranularity,
  ContactSession,
  ResponseMeta,
  ContactSessionListResponse,
  ContactSessionCreate,
  ContactSessionResponse,
  Intent,
  IntentResponse,
  EscalationEvent,
  EscalationEventResponse,
  Money,
  CustomerAccount,
  MeterPoint,
  TariffPlan,
  MeterReading,
  AccountContext,
  AccountContextResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/accounts/:accountId/context',
    alias: 'getAccountContext',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accountId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'purposeId',
        type: 'Query',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            account: z
              .object({
                id: z.string(),
                meterPointIds: z.array(z.string()),
                paymentMethod: z
                  .enum(['direct_debit', 'on_receipt', 'prepayment'])
                  .optional(),
                arrearsBalance: z
                  .object({ amount: z.number(), currency: z.string() })
                  .passthrough()
                  .optional(),
                priorityServicesRegistered: z.boolean().optional(),
              })
              .passthrough(),
            meterPoints: z.array(
              z
                .object({
                  id: z.string(),
                  commodity: z.enum(['electricity', 'gas', 'heat']),
                  meterType: z.enum([
                    'smart_interval',
                    'smart_daily',
                    'traditional',
                  ]),
                  networkOperatorId: z.string().optional(),
                  readSubmissionLag: z.string().optional(),
                })
                .passthrough()
            ),
            currentTariff: z
              .object({
                id: z.string(),
                name: z.string(),
                structure: z.enum([
                  'fixed',
                  'variable',
                  'time_of_use',
                  'dynamic',
                ]),
                standingChargePerDay: z
                  .object({ amount: z.number(), currency: z.string() })
                  .passthrough()
                  .optional(),
                unitRates: z
                  .array(
                    z
                      .object({
                        band: z.string(),
                        pricePerKwh: z
                          .object({ amount: z.number(), currency: z.string() })
                          .passthrough(),
                      })
                      .partial()
                      .passthrough()
                  )
                  .optional(),
                networkChargePassThrough: z.boolean().optional(),
                effectiveFrom: z.string().optional(),
              })
              .passthrough()
              .optional(),
            previousTariff: z
              .object({
                id: z.string(),
                name: z.string(),
                structure: z.enum([
                  'fixed',
                  'variable',
                  'time_of_use',
                  'dynamic',
                ]),
                standingChargePerDay: z
                  .object({ amount: z.number(), currency: z.string() })
                  .passthrough()
                  .optional(),
                unitRates: z
                  .array(
                    z
                      .object({
                        band: z.string(),
                        pricePerKwh: z
                          .object({ amount: z.number(), currency: z.string() })
                          .passthrough(),
                      })
                      .partial()
                      .passthrough()
                  )
                  .optional(),
                networkChargePassThrough: z.boolean().optional(),
                effectiveFrom: z.string().optional(),
              })
              .passthrough()
              .optional(),
            recentReadings: z
              .array(
                z
                  .object({
                    meterPointId: z.string(),
                    readAt: z.string().datetime({ offset: true }),
                    valueKwh: z.number(),
                    readType: z.enum([
                      'actual',
                      'estimated',
                      'customer_submitted',
                      'deemed',
                    ]),
                    granularity: z
                      .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
                      .optional(),
                  })
                  .passthrough()
              )
              .optional(),
            granularityCeiling: z.enum([
              'monthly_total',
              'daily',
              'hourly',
              'half_hourly',
            ]),
            purposeId: z.string().optional(),
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
        description: `Purpose does not permit reading this context`,
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
    method: 'post',
    path: '/v1/contacts',
    alias: 'openContactSession',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: openContactSession_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            channel: z.enum([
              'voice',
              'chat',
              'mobile_app',
              'web_form',
              'email',
              'sms',
            ]),
            accountId: z.string().optional(),
            meterPointId: z.string().optional(),
            regulatedRole: z.enum([
              'supplier',
              'network_operator',
              'affiliated_service_provider',
            ]),
            purposeId: z.string(),
            granularityCeiling: z
              .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
              .optional(),
            outcome: z.enum([
              'in_progress',
              'resolved',
              'escalated',
              'abandoned',
              'blocked_by_policy',
            ]),
            firstContactResolution: z.boolean().optional(),
            dataUsed: z.array(z.string()).optional(),
            releaseId: z.string().optional(),
            cohortId: z.string().optional(),
            explanationCorrectedByAdvisor: z.boolean().optional(),
            openedAt: z.string().datetime({ offset: true }).optional(),
            secondsToFirstSubstantiveAnswer: z.number().int().optional(),
            releaseVersionId: z.string().optional(),
            packageCompleteness: z.number().gte(0).lte(1).optional(),
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
      {
        status: 422,
        description: `Semantically invalid request (e.g. PACK_EMPTY)`,
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
    path: '/v1/contacts',
    alias: 'listContactSessions',
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
        name: 'outcome',
        type: 'Query',
        schema: z
          .enum(['resolved', 'escalated', 'abandoned', 'blocked_by_policy'])
          .optional(),
      },
      {
        name: 'channel',
        type: 'Query',
        schema: z
          .enum(['voice', 'chat', 'mobile_app', 'web_form', 'email', 'sms'])
          .optional(),
      },
      {
        name: 'vulnerabilityOnly',
        type: 'Query',
        schema: z.boolean().optional(),
      },
      {
        name: 'complaintClockRunning',
        type: 'Query',
        schema: z.boolean().optional(),
      },
      {
        name: 'escalatedOnly',
        type: 'Query',
        schema: z.boolean().optional().default(false),
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
                  channel: z.enum([
                    'voice',
                    'chat',
                    'mobile_app',
                    'web_form',
                    'email',
                    'sms',
                  ]),
                  accountId: z.string().optional(),
                  meterPointId: z.string().optional(),
                  regulatedRole: z.enum([
                    'supplier',
                    'network_operator',
                    'affiliated_service_provider',
                  ]),
                  purposeId: z.string(),
                  granularityCeiling: z
                    .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
                    .optional(),
                  outcome: z.enum([
                    'in_progress',
                    'resolved',
                    'escalated',
                    'abandoned',
                    'blocked_by_policy',
                  ]),
                  firstContactResolution: z.boolean().optional(),
                  dataUsed: z.array(z.string()).optional(),
                  releaseId: z.string().optional(),
                  cohortId: z.string().optional(),
                  explanationCorrectedByAdvisor: z.boolean().optional(),
                  openedAt: z.string().datetime({ offset: true }).optional(),
                  secondsToFirstSubstantiveAnswer: z.number().int().optional(),
                  releaseVersionId: z.string().optional(),
                  packageCompleteness: z.number().gte(0).lte(1).optional(),
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
    path: '/v1/contacts/:sessionId',
    alias: 'getContactSession',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sessionId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            channel: z.enum([
              'voice',
              'chat',
              'mobile_app',
              'web_form',
              'email',
              'sms',
            ]),
            accountId: z.string().optional(),
            meterPointId: z.string().optional(),
            regulatedRole: z.enum([
              'supplier',
              'network_operator',
              'affiliated_service_provider',
            ]),
            purposeId: z.string(),
            granularityCeiling: z
              .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
              .optional(),
            outcome: z.enum([
              'in_progress',
              'resolved',
              'escalated',
              'abandoned',
              'blocked_by_policy',
            ]),
            firstContactResolution: z.boolean().optional(),
            dataUsed: z.array(z.string()).optional(),
            releaseId: z.string().optional(),
            cohortId: z.string().optional(),
            explanationCorrectedByAdvisor: z.boolean().optional(),
            openedAt: z.string().datetime({ offset: true }).optional(),
            secondsToFirstSubstantiveAnswer: z.number().int().optional(),
            releaseVersionId: z.string().optional(),
            packageCompleteness: z.number().gte(0).lte(1).optional(),
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
    method: 'post',
    path: '/v1/contacts/:sessionId/advisor-correction',
    alias: 'recordAdvisorCorrection',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: recordAdvisorCorrection_Body,
      },
      {
        name: 'sessionId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            channel: z.enum([
              'voice',
              'chat',
              'mobile_app',
              'web_form',
              'email',
              'sms',
            ]),
            accountId: z.string().optional(),
            meterPointId: z.string().optional(),
            regulatedRole: z.enum([
              'supplier',
              'network_operator',
              'affiliated_service_provider',
            ]),
            purposeId: z.string(),
            granularityCeiling: z
              .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
              .optional(),
            outcome: z.enum([
              'in_progress',
              'resolved',
              'escalated',
              'abandoned',
              'blocked_by_policy',
            ]),
            firstContactResolution: z.boolean().optional(),
            dataUsed: z.array(z.string()).optional(),
            releaseId: z.string().optional(),
            cohortId: z.string().optional(),
            explanationCorrectedByAdvisor: z.boolean().optional(),
            openedAt: z.string().datetime({ offset: true }).optional(),
            secondsToFirstSubstantiveAnswer: z.number().int().optional(),
            releaseVersionId: z.string().optional(),
            packageCompleteness: z.number().gte(0).lte(1).optional(),
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
    path: '/v1/contacts/:sessionId/handover',
    alias: 'escalateToAdvisor',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: escalateToAdvisor_Body,
      },
      {
        name: 'sessionId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
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
    path: '/v1/contacts/:sessionId/intents',
    alias: 'classifyContactIntent',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ utterance: z.string() }).passthrough(),
      },
      {
        name: 'sessionId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            name: z.enum([
              'bill_higher_than_expected',
              'consumption_query',
              'meter_read_dispute',
              'tariff_change_query',
              'payment_difficulty',
              'disconnection_query',
              'move_in_move_out',
              'outage_query',
              'meter_fault',
              'complaint',
            ]),
            confidence: z.number(),
            triggersVulnerabilityGate: z.boolean().optional(),
            requiredGranularity: z
              .enum(['monthly_total', 'daily', 'hourly', 'half_hourly'])
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
