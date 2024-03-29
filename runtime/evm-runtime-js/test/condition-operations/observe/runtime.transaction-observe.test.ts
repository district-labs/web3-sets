import { runtime } from 'src/runtime'
import { expect, test } from 'vitest'

import set_fail from './data/set-fail.json'
import set_success from './data/set-success.json'
import { EVMSet, EVMStateArtifacts } from 'src/types'

import transactions from './data/transactions.json'

test('expect set to success on observe condition operation', async () => {
  const _analysis = await runtime({
    set: EVMSet.parse(set_success),
    artifacts: EVMStateArtifacts.parse({
      transactions,
    }),
  })

  expect(_analysis?.status).toBe(true)
})

test('expect set to fail on observe condition operation', async () => {
  const _analysis = await runtime({
    set: EVMSet.parse(set_fail),
    artifacts: EVMStateArtifacts.parse({
      transactions,
    }),
  })

  expect(_analysis?.status).toBe(false)
})
