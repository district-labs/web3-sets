import { filterTransactionReceiptsMatchingConditionOperations } from './conditions/filter-transaction-receipts-matching-condition-operations'
import { debugRuntime } from './debug'
import {
  ConditionOperationResults,
  ConditionOperationsGroupedByEntityRef,
  SetHydrated,
} from './types'
import { Condition } from './types/set/condition'

export function applyConditionOperations(set: SetHydrated): SetHydrated {
  const set_new = { ...set }

  // Loop through each entity in the set
  for (let index = 0; index < set.entities.length; index++) {
    const entity = set_new.entities[index]

    const _entityRef = {
      id: entity.id,
      status: false,
      conditions: [] as ConditionOperationResults[],
    } as ConditionOperationsGroupedByEntityRef

    // ----------------------------------------------
    // Receipts
    // ----------------------------------------------
    const _totalMatches = entity.conditions
      .map((condition: Condition) => {
        if (condition.type !== 'receipt') {
          const artifacts =
            filterTransactionReceiptsMatchingConditionOperations({
              condition,
              receipts: entity.artifacts.parsed.receipts,
            })
        }
        // debugRuntime(matches, 'matchesSSS')
        return matches
      })
      .flatMap((matches: Boolean) => matches)
  }

  return set_new
}
