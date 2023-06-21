import { Log } from './log'
import { Transaction } from './transaction'
import { TransactionReceipt } from './transaction-receipt'
import { z } from 'zod'

export const EVMStateArtifacts = z.object({
  transactions: z.array(Transaction),
  receipts: z.array(TransactionReceipt),
  logs: z.array(Log),
})

export type EVMStateArtifacts = z.infer<typeof EVMStateArtifacts>
