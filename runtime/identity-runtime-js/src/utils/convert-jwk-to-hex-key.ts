import { base64ToUint8Array } from './base64-to-uint8-array'
import { bytesToHex } from './byes-to-hex'

export function convertJWKToHexKey(JWK: any) {
  const xBytes = base64ToUint8Array(JWK.x)
  const dBytes = base64ToUint8Array(JWK.d)

  const bytes = new Uint8Array(xBytes.length + dBytes.length)
  bytes.set(xBytes)
  bytes.set(dBytes, xBytes.length)

  return bytesToHex(bytes)
}
