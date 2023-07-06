import { IDIDManager, IKeyManager, createAgent } from '@veramo/core'
import {
  CredentialPlugin,
  ICredentialIssuer,
  ICredentialVerifier,
} from '@veramo/credential-w3c'
import { DIDManager, MemoryDIDStore } from '@veramo/did-manager'
import { WebDIDProvider } from '@veramo/did-provider-web'
import {
  KeyManager,
  MemoryKeyStore,
  MemoryPrivateKeyStore,
} from '@veramo/key-manager'
import { KeyManagementSystem } from '@veramo/kms-local'

export const agent = createAgent<
  IKeyManager & IDIDManager & ICredentialIssuer & ICredentialVerifier
>({
  plugins: [
    new KeyManager({
      store: new MemoryKeyStore(),
      kms: {
        mem: new KeyManagementSystem(new MemoryPrivateKeyStore()),
      },
    }),
    new DIDManager({
      providers: {
        'did:web': new WebDIDProvider({
          defaultKms: 'mem',
        }),
      },
      defaultProvider: 'did:web',
      store: new MemoryDIDStore(),
    }),
    new CredentialPlugin(),
  ],
})
