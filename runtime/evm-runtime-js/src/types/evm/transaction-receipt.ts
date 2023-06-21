import { z } from 'zod'

export const TransactionReceipt = z.object({
  blockHash: z.string().nullable(),
  blockNumber: z.string().nullable(),
  transactionHash: z.string(),
  transactionIndex: z.string().nullable(),
  from: z.string(),
  to: z.string().nullable(),
  cumulativeGasUsed: z.string(),
  gasUsed: z.string(),
  contractAddress: z.string().nullable(),
  logs: z.array(
    z.object({
      address: z.string(),
      topics: z.array(z.string()),
      data: z.string(),
    }),
  ),
  status: z.string(),
  gas: z.string(),
  hash: z.string(),
  input: z.string(),
  nonce: z.string(),
  r: z.string(),
  s: z.string(),
  typeHex: z.string().nullable(),
  v: z.string(),
  value: z.string(),
})

export type TransactionReceipt = z.infer<typeof TransactionReceipt>

export const TransactionReceiptParsed = z.object({
  name: z.string(),
  signature: z.string(),
  topic: z.string(),
  args: z.unknown(),
})

export type TransactionReceiptParsed = z.infer<typeof TransactionReceiptParsed>

export const TransactionReceiptMatch = z.object({
  id: z.string(),
})

export type TransactionReceiptMatch = z.infer<typeof TransactionReceiptMatch>
