# Operations

Conditions and Rules both contain operations. 

Operations are operators applied to entity artifacts and logic branching.

They condition and rule operations are responsible for "constraining" what state you care about and describing desired state positions.

## EVM

### condition operations:

- beforeBlock(Number)
- afterBlock(Number)
- beforeTimestamp(String)
- afterTimestamp(String)
- to(Address)
- from(Address)
- nonce(Condition, Number)
- value(Condition, Number)
- observe(key:String, operator: Operator, value: String | Number)
- observeOneOf([(key:String, operator: Operator, value: String | Number)])

### rule operations:

**Operations applied to conditions or other rules.**
- all([ConditionOrRuleId]) - All conditions listed must be satisfied.
- oneOf([ConditionOrRuleId]) - One of the conditions listed must be satisfied.
- range([[ConditionOrRuleIdOne], [ConditionOrRuleIdTwo, ConditionOrRuleIdThree] ) - One of the conditions listed must be satisfied.

**Operations applied to conditions.**
- beforeBlock(Number, [ConditionId])receipt
- afterBlock(Number, [ConditionId])
- beforeTimestamp(String, [ConditionId])
- afterTimestamp(String, [ConditionId])

## Identity

### condition operations:

- issuedBy(DID | DIDRegistry)
- issuedByOneOf([DID] | DIDRegistry)
- issuedBefore(Number)
- issuedAfter(Number)
- expirationBefore(Number)
- expirationAfter(Number)
- observe(key:String, operator: Operator, value: String | Number)
- observeOneOf([(key:String, operator: Operator, value: String | Number)])