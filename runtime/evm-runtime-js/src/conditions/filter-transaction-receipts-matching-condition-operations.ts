import {
  TransactionParsed,
  TransactionReceiptMatch,
  TransactionReceiptParsed,
} from '..'
import { Condition } from '../types/set/condition'
import compareConditionOperationsToDecodedTransactionData from './compare-condition-operations-to-decoded-transaction-data'

export function filterTransactionReceiptsMatchingConditionOperations({
  condition,
  receipts,
}: {
  condition: Condition
  receipts?: TransactionReceiptParsed[]
}): TransactionReceiptMatch[] {
  if (!receipts) {
    return []
  }
  // Web3 Sets use a function with a signature like:
  // `set(uint256, bool)`
  // We want to compare the function name, not the signature
  // so we split the signature on the first `(` and take the first
  // part of the string.
  // When we use viem.decodeFunctionData to parse the transaction
  // data, we get a `functionName` property that is just the function name.
  const conditionFunctionName = condition?.signature.split('(')[0]
  const filtered = receipts
    .map((tx: TransactionParsed) => {
      console.log(tx?.args, tx.functionName)
      if (tx?.args && tx.functionName === conditionFunctionName) {
        const _comparator = compareConditionOperationsToDecodedTransactionData(
          tx,
          condition.operations,
        )
        return true
      } else {
        return null
      }
    })
    .filter((tx) => tx !== null)

  // @ts-ignore
  return filtered
}
