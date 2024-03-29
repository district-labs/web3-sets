import { Transaction } from 'src/types'
import {
  ConditionOperation,
  ConditionOperationBeforeTimestampArgs,
} from 'src/types/set/condition'

/**
 * @name conditionOperationTransactionBeforeTimestamp
 * @description Check if a transaction has occurred before a certain timestamp
 * @param transaction The transaction to check
 * @param operation The operation containing the set condition timestamp
 * @returns Returns true if the transaction timestamp is less than the set condition timestamp
 * @throws If the operation method is not 'beforeTimestamp' or the transaction has no timestamp
 */
export function conditionOperationTransactionBeforeTimestamp(
  transaction: Transaction,
  operation: ConditionOperation,
): boolean {
  if (operation.method !== 'beforeTimestamp')
    throw new Error('Only beforeTimestamp operations are supported')

  if (!transaction.timeStamp) throw new Error('Transaction has no timeStamp')

  const safeArgs = ConditionOperationBeforeTimestampArgs.safeParse(
    operation.args,
  )
  if (!safeArgs.success) throw new Error('Invalid operation arguments')

  const [timeStamp] = safeArgs.data

  return BigInt(transaction.timeStamp) < BigInt(timeStamp)
}
