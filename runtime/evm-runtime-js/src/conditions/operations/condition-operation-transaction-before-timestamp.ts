import { Transaction } from 'src/types'
import { ConditionOperation } from 'src/types/set/condition'
import { isStringOrNumber } from 'src/utils/is-string-or-number'

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

  if (operation.args.length !== 1 || !isStringOrNumber(operation.args[0]))
    throw new Error('Invalid operation arguments')

  return BigInt(transaction.timeStamp) < BigInt(operation.args[0])
}