# Web3Set::Identity

![CI](https://github.com/web3-sets/identity-schema/actions/workflows/main.yml/badge.svg)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

The Identity Web3 Set schema describes how to formally request [verifiable presentations](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-presentations) from users.

Verifiable presentations are used to request 1 or more verifiable credentials from a user.

An Identity set describes what verifiable credentials and under what circumstances are required to meet certain conditions, and how they can generate a verifiable presentation that will meet this conditions.

## Entities
Multiple entities are used in the set schema.

- Verifiable Credential
- Decentralized Identifier
- Decentralized Identifier Registry

The `Entities` are referenced in multiple location of the set schema. Both as a referencle `Entity` object and also as `Condition` arguments. 

### Type::VerifiableCredential
```json
{
    "type":"credential",
    "id": "disco:credential:gm",
    "name": "GM Credential",
    "schema": "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/GMCredential/1-0-0.json",
}
```

### Type::DecentralizedIdentifier
```json
"conditions": [
    {
        "id": "condition:issuance",
        "eid": "disco:credential:disconaut",
        "operations": ["issuedBy"],
        "args": [
            ["did:3:kjzl6cwe1jw14bfc93dsmejffll3j687kpq3te8ntmcjb98erxj9x8mdrdompf6"]
        ]
    } 
]
```

### Type::DecentralizedIdentifierRegistry
```json
"conditions": [
    {
        "id": "condition:issuance",
        "eid": "disco:credential:disconaut",
        "operations": ["issuedByOneOf"],
        "args": [
            ["registry:eip155:10:v0:0x0000000000000000000000000000000000000000"]
        ]
    } 
]
```

## Conditions

The Web3Set::Identity schema `Conditions` define how an `Entity` should behave.

### Type::VerifiableCredential

- Who issued the verifiable credential? 
- When was the credential issued? 
- When will the credential expire?
- Does it contain a specific value? 
- Does it contain a range of potential values?

#### Operations & Arguments
```
issuedBy(DID | DIDRegistry)
issuedByOneOf([DID] | DIDRegistry)
issuedBefore(Number)
issuedAfter(Number)
expirationBefore(Number)
expirationAfter(Number)
is(key:String, operator: Operator, value: String | Number)
isOneOf(key:String, operator: [Operator], value: [String | Number])
```

### Type::DecentralizedIdentifier
Coming soon.

### Type::DecentralizedIdentifierRegistry
Coming soon.

## Rules

### Operations & Arguments

```
all([ConditionId]) - All conditions listed must be satisfied.
oneOf([ConditionId]) - One of the conditions listed must be satisfied.
range([[ConditionIdOne], [ConditionIdTwo, ConditionIdThree]] ) - One of the conditions listed must be satisfied.
count([ConditionId], [Number]) - Number of credentials that must be presented i.e. 50 GMs
```