# Web3Set::Identity

The Identity Web3 Set schema describes how to formally request verifiable presentations from users.

## Entities
Multiple entities are used in the set schema.

- Decentralized Identifier
- Decentralized Identifier Registry
- Verifiable Credential

## Conditions

### Operations & Arguments

### Verifiable Credential Type
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

### Dencentralized Identifier Type

### Dencentralized Identifier Registry Type

## Rules

### Operations & Arguments

```
all([ConditionId]) - All conditions listed must be satisfied.
oneOf([ConditionId]) - One of the conditions listed must be satisfied.
range([[ConditionIdOne], [ConditionIdTwo, ConditionIdThree]] ) - One of the conditions listed must be satisfied.
count([ConditionId], [Number]) - Number of credentials that must be presented i.e. 50 GMs
```