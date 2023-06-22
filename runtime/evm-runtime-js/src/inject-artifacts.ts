import {
  EVMStateArtifacts,
  SetHydrated,
  Transaction,
  TransactionReceipt,
} from './types'
import { decodeFunctionData } from 'viem'

interface Input {
  set: SetHydrated
  artifacts: EVMStateArtifacts
}

export function injectArtifacts({ set, artifacts }: Input): SetHydrated {
  const set_new = { ...set }

  // Loop through each entity in the set.
  // For each entity, filter the state for transactions and receipts
  // that match the entity address.
  // Then, decode the function data for each transaction.
  // Finally, add the decoded function data to the entity's artifacts.
  for (let index = 0; index < set_new.entities.length; index++) {
    // Filter the state for transactions and receipts that match the entity address.
    set_new.entities[index].artifacts.raw = {
      // Transactions are filtered by the `to` field for contract transactions.
      transactions: artifacts?.transactions?.filter(
        (_transaction: Transaction) =>
          _transaction.to?.toLowerCase() ===
          set_new.entities[index].address.toLowerCase(),
      ),
      // Receipts are filtered by the `to` field for contract transactions.
      receipts: artifacts?.receipts?.filter(
        (_receipt: TransactionReceipt) =>
          _receipt.to?.toLowerCase() ===
          set_new.entities[index].address.toLowerCase(),
      ),
      // Logs are filtered by the `address` field for contract events.
      logs: artifacts?.logs?.filter(
        (_log: any) =>
          _log.address?.toLowerCase() ===
          set_new.entities[index].address.toLowerCase(),
      ),
    }

    // Decode the function data for each artifact type.
    set_new.entities[index].artifacts.parsed = {
      receipts: set_new.entities[index].artifacts?.raw?.receipts?.map(
        (tx: any) => {
          const decoded = decodeFunctionData({
            abi: set_new.entities[index].abi,
            data: tx.data || tx.input, // Support for Default and Etherscan API transaction objects
          })

          // Return the TransactionReceiptParsed object.
          return {
            hash: tx.hash,
            args: decoded.args,
            functionName: decoded.functionName,
          }
        },
      ),
      transactions: set_new.entities[index].artifacts?.raw?.transactions?.map(
        (tx: any) => {
          const decoded = decodeFunctionData({
            abi: set_new.entities[index].abi,
            data: tx.data || tx.input, // Support for Default and Etherscan API transaction objects
          })

          // Return the TransactionParsed object.
          return {
            hash: tx.hash,
            args: decoded.args,
            functionName: decoded.functionName,
          }
        },
      ),
      // TODO: Add support for decoding event logs.
      // logs: set_new.entities[index].artifacts?.raw?.logs?.map((log: any) => {}
    }
  }

  return set_new
}
