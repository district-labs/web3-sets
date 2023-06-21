import { hydrateSet } from './hydrate'
import { injectArtifacts } from './inject-artifacts'
import { RuntimeInput, RuntimeOutput } from './types'

/**
 * @name Runtime
 * @description Runtime is the main entrypoint for the EVM runtime engine.
 */
export async function runtime({
  set,
  state,
  clients,
  args,
}: RuntimeInput): Promise<RuntimeOutput | void> {
  // 1. Fetch externally referenced data objects (e.g. ABI files from URI location like IPFS)
  // 2. Inject the arguments into the condition and rule operation inputs
  // 3. Co-locate the conditions with the entities and create fields for the artifacts and operation matches.
  const set_hydrated = await hydrateSet({ set, clients, args })

  // 4. Inject EVM artifacts into hydrated Entities.
  const _set_hydrated_with_artifacts = injectArtifacts({
    set: set_hydrated,
    state,
  })
}
