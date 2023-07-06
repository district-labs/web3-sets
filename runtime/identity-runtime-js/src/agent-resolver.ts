import { IResolver, createAgent } from '@veramo/core'

import { DIDResolverPlugin } from '@veramo/did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

export const agent = createAgent<IResolver>({
  plugins: [
    new DIDResolverPlugin({
      ...webDidResolver(),
    }),
  ],
})
