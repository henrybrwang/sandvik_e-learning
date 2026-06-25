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
| Cost controls | Confirm final intranet form link, approval workflow, response time, reporting, and any manager guidance beyond the known cost-approver approval model. | Procurement / Platform owner |
| Incident handling | How to report suspected data exposure, unsafe output, or tool misuse. | IT Security |

## Known Sandvik Context

The 2026-06-16 Sandvik intranet post confirms the current launch and cost-management baseline:

- Planned Claude Enterprise launch: 2026-06-30.
- Pre-ordering before launch reserves a license but does not grant early access.
- One license can cover Claude Chat, Claude Code, Claude Cowork, and Claude Design at the same base cost.
- Base fee: 350 SEK per user/month.
- Usage costs are charged on top, depending on use.
- Full cost is charged to the user's cost center with no markup.
- Usage is direct and consumption-based, with no five-hour session or weekly limits; usage is pay as you go, charged to the user's cost center.
- Further usage is pay as you go.
- Higher monthly usage or spending limits require an intranet form and cost-approver approval.
- The monthly spending limit should be visible in the user's Claude account.

## Approval Log

| Date | Area | Decision | Owner | Status |
| --- | --- | --- | --- | --- |
| 2026-06-09 | Initial structure | Placeholders created for review. | Program owner | Draft |
| 2026-06-16 | Cost controls | Added intranet-confirmed launch, pricing, cost-center, pay-as-you-go, monthly spending-limit, and cost-approver context. Final form link and workflow details still pending. | Program owner | Partially confirmed |

## Publishing Rule

No module should be published until every placeholder that affects user behavior has either:

- been replaced with approved Sandvik guidance, or
- been explicitly accepted as a launch-time placeholder by the accountable owner.
