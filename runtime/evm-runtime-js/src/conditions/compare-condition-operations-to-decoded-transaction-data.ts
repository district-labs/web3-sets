import { debugRuntimeOperations } from '../debug'
import { TransactionParsed } from '../types'
import { ConditionOperation } from '../types/set/condition'

export function compareConditionOperationsToDecodedTransactionData(
  transaction: TransactionParsed,
  operations: ConditionOperation[],
) {
  debugRuntimeOperations(
    'compareConditionOperationsToDecodedTransactionData',
    transaction,
    operations,
  )
}

export default compareConditionOperationsToDecodedTransactionData
