import { Abi } from 'abitype/zod'
import { z } from 'zod'

export const Entity = z.object({
  address: z.string(),
  chainId: z.number(),
  name: z.string(),
  abi: Abi,
})

export type Entity = z.infer<typeof Entity>
