import { z } from 'zod'

export const Transaction = z.object({
  from: z.string(),
  to: z.string().nullable(),
  gas: z.string(),
  hash: z.string(),
  data: z.string(),
  nonce: z.string(),
  value: z.string(),
})

export type Transaction = z.infer<typeof Transaction>

export const TransactionParsed = z.object({
  hash: z.string(),
  functionName: z.string(),
  args: z.unknown(),
})

export type TransactionParsed = z.infer<typeof TransactionParsed>

export const TransactionMatch = z.object({
  id: z.string(),
})

export type TransactionMatch = z.infer<typeof TransactionMatch>
