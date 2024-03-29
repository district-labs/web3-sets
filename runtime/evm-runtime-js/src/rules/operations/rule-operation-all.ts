import {
  EntityResults,
  RuleOperationResults,
  RuleOperationResultsRef,
} from 'src/types'
import { Rule, RuleOperation, RuleOperationAllArgs } from 'src/types/set/rule'
import { flattenConditionOperationResults } from 'src/utils/flatten-condition-operation-results'

/**
 * @name ruleOperationAll
 * @description Check if all the conditions and rules are satisfied
 * @param operation The operation containing the method and arguments
 * @param state The state containing the entity results, rules and artifacts
 * @returns Returns the result of the logic operation
 * @throws If the operation method is not 'all'
 * @throws If the operation arguments are invalid
 * @throws If the reference is invalid
 */
export function ruleOperationAll(
  { method, args }: RuleOperation,
  {
    entityResults,
  }: {
    entityResults: EntityResults[]
    rules: Rule[]
  },
): RuleOperationResults {
  if (method !== 'all') throw new Error('Invalid operation method')

  const safeArgs = RuleOperationAllArgs.safeParse(args)
  if (!safeArgs.success) throw new Error('Invalid operation arguments')

  const refs = safeArgs.data

  const conditions = flattenConditionOperationResults(entityResults)
  const references: Array<RuleOperationResultsRef | undefined> = refs.map(
    (ref) => {
      if (ref.startsWith('condition:')) {
        const match = conditions.find((item) => item.cid === ref)
        if (!match) throw new Error(`Could not find condition with cid ${ref}`)

        return {
          id: match.cid,
          status: match.status,
          reference: 'condition',
        }
      }
      if (ref.startsWith('rule:')) {
        return undefined
        // TODO: Add rule support using recursion here
      }

      throw new Error(`${ref} is not a valid reference`)
    },
  )

  return {
    method,
    status: references.every((ref) => ref?.status === true),
    references: references.filter(
      (item): item is RuleOperationResultsRef => item !== undefined,
    ),
  }
}
