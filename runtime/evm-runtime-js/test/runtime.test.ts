import { runtime } from '../src/runtime'
import { expect, test } from 'vitest'

import { EVMSet, EVMStateArtifacts } from '../src/types'
import set from './data/set-2.json'
import receipts from './data/transaction-receipts-2.json'

test('expect runtime to execute', async () => {
  const _analysis = await runtime({
    set: EVMSet.parse(set),
    artifacts: EVMStateArtifacts.parse({
      receipts,
    }),
  })
})
