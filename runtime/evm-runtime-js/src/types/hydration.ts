import { LogMatch, LogParsed } from './evm/log'
import { TransactionMatch, TransactionParsed } from './evm/transaction'
import { TransactionReceiptParsed } from './evm/transaction-receipt'
import { Condition } from './set/condition'
import { Entity } from './set/entity'
import { Rule } from './set/rule'
import { Abi } from 'abitype'
import { Address, Client, Log, Transaction, TransactionReceipt } from 'viem'

type EVMArtifacts = {
  raw: {
    transactions: Transaction
    receipts: TransactionReceipt
    logs: Log
  }
  parsed: {
    transactions: TransactionParsed
    receipts: TransactionReceiptParsed
    logs: LogParsed
  }
}

type EVMArtifactMatches = {
  transactions: TransactionMatch
  logs: LogMatch
}

export type EntityHydrated = {
  id: String
  address: Address
  chainId: Number
  abi: Abi
  conditions: Condition[]
  artifacts: EVMArtifacts
  matches: EVMArtifactMatches
}

export type SetHydrated = {
  clients: Client[]
  entities: Entity[]
  rules: Rule
}
