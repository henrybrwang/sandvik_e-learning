# Sandvik Policy Placeholders

This file is a working list of policy sections that need Sandvik review. It is not approved policy.

## Global Training Notice

Use this notice in each module until replaced by approved guidance:

> Sandvik-specific rules for data classification, connectors, tool access, retention, and external sharing must be confirmed before this module is published. When in doubt, do not enter sensitive information into Claude and ask your manager, IT Security, or Data Protection contact for guidance.

## Legal

[POLICY DECISION REQUIRED]

Confirm rules for:

- Use of copyrighted third-party material.
- Use of supplier, customer, competitor, and contract information.
- Generated content that may be sent externally.
- Use of Claude outputs in commercial commitments.
- Required human review before publication or decision-making.

## IT Security

[POLICY DECISION REQUIRED]

Confirm rules for:

- Approved Claude products and surfaces.
- Approved connectors, plugins, skills, and MCP servers.
- Local folder access for Cowork and Claude Code.
- Browser automation and logged-in web sessions.
- Command execution and file modification.
- Credentials, API keys, private keys, certificates, tokens, and secrets.
- Incident reporting path for suspected data exposure or misuse.

Default training assumption until approved:

- Do not paste or upload secrets.
- Do not grant broad filesystem access.
- Review actions before Claude sends, posts, submits, deletes, or changes files.

## Data Protection

[POLICY DECISION REQUIRED]

Confirm rules for:

- Personal data.
- Sensitive personal data.
- Employee data.
- Customer and supplier contacts.
- Data retention and exports.
- Chat history, memory, and project knowledge.
- Use of personal data in generated artifacts or shared outputs.

Default training assumption until approved:

- Minimize personal data.
- Use anonymized or aggregated examples where possible.
- Do not use Claude for decisions that materially affect a person without approved process and human review.

## Brand

[POLICY DECISION REQUIRED]

Confirm rules for:

- Sandvik visual identity in Claude Design and artifacts.
- Approved templates, colors, typography, logos, and image use.
- External-facing presentations, one-pagers, web pages, and prototypes.
- Review requirements before publication.

Default training assumption until approved:

- Generated visual material is a draft until reviewed.
- Do not publish externally without Brand and Legal approval.

## Procurement And Cost Management

[POLICY DECISION REQUIRED]

Confirm rules for:

- Product eligibility.
- Ordering approvals.
- Usage budgets and spend limits.
- Chargeback or cost center behavior.
- When to request Cowork, Code, or Design instead of only Chat.

Default training assumption until approved:

- Users should choose the smallest Claude product that fits the work.
- Long-running, tool-heavy, or repeated tasks may create higher usage and should be monitored.

## Engineering

[POLICY DECISION REQUIRED]

Confirm rules for Claude Code:

- Approved repositories and environments.
- Branching and pull request workflow.
- Test expectations.
- Deployment restrictions.
- Production data restrictions.
- Open-source dependency review.
- Security scanning and code review requirements.

Default training assumption until approved:

- Claude Code may draft code, but humans remain accountable for review, tests, security, and release decisions.
