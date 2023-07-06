import JWK from './data/issuer_key.json'
import { TKeyType } from '@veramo/core'
import { agent } from 'src/agent-signer'
import { convertJWKToHexKey } from 'src/utils/convert-jwk-to-hex-key'
import { expect, test } from 'vitest'

test('Agent Signer - Create Verifiable Credential', async () => {
  const DID = {
    did: 'did:web:identity.web3sets.app',
    provider: 'did:web',
    controllerKeyId: 'imported',
    keys: [
      {
        kid: 'imported',
        kms: 'mem',
        type: <TKeyType>'Ed25519',
        privateKeyHex: convertJWKToHexKey(JWK),
      },
    ],
    services: [],
  }

  await agent.didManagerImport(DID)

  const credential = await agent.createVerifiableCredential({
    credential: {
      credentialSubject: { id: 'did:example:subject', name: 'Alice' },
      issuer: { id: 'did:web:identity.web3sets.app' },
      type: ['Example'],
    },
    proofFormat: 'jwt',
    save: false,
  })

  console.log(credential)

  expect(credential).toBeDefined()
})
