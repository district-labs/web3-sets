import { z } from 'zod'

export const TransactionOrReceiptConditionOperationMatch = z.object({
  opidx: z.number(),
  hash: z.string(),
})

export type TransactionOrReceiptConditionOperationMatch = z.infer<
  typeof TransactionOrReceiptConditionOperationMatch
>

export const ConditionOperationArtifactRef = z.object({
  id: z.string(),
  reference: z.string(),
})
export type ConditionOperationArtifactRef = z.infer<
  typeof ConditionOperationArtifactRef
>

export const ConditionOperationResults = z.object({
  cid: z.string(),
  operations: z.array(
    z.object({
      status: z.boolean(),
      artifacts: z.array(ConditionOperationArtifactRef),
      metadata: z.unknown(),
    }),
  ),
})
export type ConditionOperationResults = z.infer<
  typeof ConditionOperationResults
>

export const ConditionOperationsGroupedByEntityRef = z.object({
  id: z.string(),
  status: z.boolean(),
  conditions: z.array(ConditionOperationResults),
})
export type ConditionOperationsGroupedByEntityRef = z.infer<
  typeof ConditionOperationsGroupedByEntityRef
>

export const RuleOperationResults = z.object({
  id: z.string(),
  status: z.boolean(),
})
export type RuleOperationResults = z.infer<typeof RuleOperationResults>

export const RuntimeOutput = z.object({
  status: z.boolean(),
  results: z.object({
    entities: z.array(ConditionOperationsGroupedByEntityRef),
    rules: z.array(RuleOperationResults),
  }),
})
export type RuntimeOutput = z.infer<typeof RuntimeOutput>
