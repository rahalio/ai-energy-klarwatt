# Klarwatt — User stories

**Product:** [PRODUCT.md](./PRODUCT.md)


### Residential customer

- As a customer, I want to be told in plain language why my bill went up and by how much for each reason, so that I can decide whether to act rather than call to argue about the total.
- As a customer, I want to be told when part of my bill was based on an estimated reading and what changed when the real reading arrived, so that I can trust the explanation instead of suspecting it.
- As a customer, I want a person immediately when I say I cannot pay, so that I am not negotiated with by a machine at the point where I am most exposed.
- As a customer, I want to refuse detailed use of my half-hourly data and still get an answer, so that privacy is not the price of service.

### Contact centre advisor and team leader

- As an advisor, I want an escalated contact to arrive with the conversation, the data used, and the escalation reason, so that I continue the conversation rather than restart it.
- As an advisor, I want to see the same consumption decomposition the customer was shown, so that I am not contradicting an explanation my own employer gave five minutes earlier.
- As a team leader, I want to see which intents escalate most and why, so that I can staff to real demand instead of to a forecast built on last year's tree.
- As an advisor, I want to mark an automated explanation as wrong and have that contact excluded from resolution metrics, so that a bad answer is not counted as a success.

### Vulnerability and priority services officer

- As a vulnerability officer, I want any indication of medical dependence on supply or of a safeguarding concern to route to my team before any outcome is proposed, so that statutory protections are applied by a person.
- As a vulnerability officer, I want the vulnerability gate to be unwaivable in configuration, so that a containment target can never be met by automating a protected conversation.

### Compliance and data protection officer

- As a compliance officer, I want a per-interaction record of the regulated role, the data used, and the lawful purpose, so that I can answer a regulator without reconstructing intent from logs.
- As a data protection officer, I want granularity of metering data use bounded by purpose with consent required above a threshold, so that we are not processing occupancy-revealing data to answer a question that a monthly total would settle.
- As a compliance officer, I want a complaint recognised inside an automated conversation to start the same clock as one raised to an advisor, so that automation cannot delay a regulatory deadline.
- As a compliance officer, I want to produce an evidence pack for an ombudsman case containing the conversation, the data used, the version that served it, and every escalation decision, so that the case is answerable on record.

### Retail analytics and platform owner

- As an analytics lead, I want each capability to run against a comparison group with a scale-or-stop decision date, so that we learn what works and what does not rather than accumulate permanent pilots.
- As an analytics lead, I want cohort results adjusted for weather and for price-change events, so that a mild-spring pilot is not used to justify a winter rollout.
- As a platform owner, I want every capability release versioned with a named approver and every served interaction pinned to its version, so that a regression is attributable rather than mysterious.
- As a platform owner, I want a suspected metering data defect surfaced to billing operations as a work item, so that a pattern of wrong explanations produces a data fix rather than a script change.
