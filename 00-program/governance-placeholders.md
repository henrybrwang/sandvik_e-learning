# Governance Placeholders

This file captures Sandvik decisions that must be confirmed before publishing. Do not treat these placeholders as approved policy.

## Placeholder Labels

Use these labels consistently:

- `[POLICY DECISION REQUIRED]` for unresolved Sandvik policy.
- `[OWNER REQUIRED]` for a missing accountable reviewer.
- `[PORTAL DECISION REQUIRED]` for LMS or ordering-flow behavior.
- `[SOURCE CHECK REQUIRED]` for Claude product facts that must be revalidated.
- `[LOCALIZATION REQUIRED]` for future translation or regional adjustment.

## Required Decisions

| Area | Decision Needed | Suggested Owner |
| --- | --- | --- |
| Data classification | Which Sandvik data classes may be entered into Claude products. | Data Protection |
| Confidential data | What confidential business information is allowed, restricted, or prohibited. | Legal / Data Protection |
| Personal data | Whether and how personal data may be processed. | Data Protection |
| Secrets | Rule for credentials, tokens, API keys, certificates, and private keys. | IT Security |
| Connectors | Which connectors are approved and under what conditions. | IT Security / Platform owner |
| Local files | Rules for granting access to folders and local files. | IT Security |
| Browser actions | Rules for logged-in browser use, form filling, and approvals. | IT Security / Legal |
| Code repositories | Which repositories and branches Claude Code may access. | Engineering / IT Security |
| External sharing | Whether generated artifacts, designs, documents, or code may be shared externally. | Legal / Brand |
| Cost controls | Usage limits, spend monitoring, and escalation paths. | Procurement / Platform owner |
| Incident handling | How to report suspected data exposure, unsafe output, or tool misuse. | IT Security |

## Approval Log

| Date | Area | Decision | Owner | Status |
| --- | --- | --- | --- | --- |
| 2026-06-09 | Initial structure | Placeholders created for review. | Program owner | Draft |

## Publishing Rule

No module should be published until every placeholder that affects user behavior has either:

- been replaced with approved Sandvik guidance, or
- been explicitly accepted as a launch-time placeholder by the accountable owner.
