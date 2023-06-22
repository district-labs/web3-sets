import { Log, LogMatch, LogParsed } from './evm/log'
import {
  Transaction,
  TransactionMatch,
  TransactionParsed,
} from './evm/transaction'
import {
  TransactionReceipt,
  TransactionReceiptMatch,
  TransactionReceiptParsed,
} from './evm/transaction-receipt'
import { Condition } from './set/condition'
import { Rule } from './set/rule'
import { Abi } from 'abitype'
import { Address, Client } from 'viem'

type EVMArtifacts = {
  raw: {
    transactions?: Transaction[]
    receipts?: TransactionReceipt[]
    logs?: Log[]
  }
  parsed: {
    transactions?: TransactionParsed[]
    receipts?: TransactionReceiptParsed[]
    logs?: LogParsed[]
  }
}

type EVMArtifactMatches = {
  receipts?: TransactionReceiptMatch[]
  transactions?: TransactionMatch[]
  logs?: LogMatch[]
}

export type EntityHydrated = {
  id: String
  address: Address
  chainId: Number
  abi: string | Abi
  conditions: Condition[]
  artifacts: EVMArtifacts
  matches: EVMArtifactMatches
}

export type SetHydrated = {
  entities: EntityHydrated[]
  rules: Rule[]
  clients?: Client[]
}
