import { z } from 'zod'

const transaction = z.object({
  opidx: z.number(),
  hash: z.string(),
})

const artifact = z.object({
  transactions: z.array(transaction),
})

const condition = z.object({
  cid: z.string(),
  operations: z.array(
    z.object({
      status: z.boolean(),
      metadata: z.unknown(),
    }),
  ),
  artifacts: artifact,
})

const entity = z.object({
  id: z.string(),
  status: z.boolean(),
  conditions: z.array(condition),
})

const rule = z.object({
  id: z.string(),
  status: z.boolean(),
})

export const RuntimeOutput = z.object({
  status: z.boolean(),
  results: z.object({
    entities: z.array(entity),
    rules: z.array(rule),
  }),
})

export type RuntimeOutput = z.infer<typeof RuntimeOutput>
