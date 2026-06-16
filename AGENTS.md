# Agent Guide

This repository contains source material for Sandvik Claude Enterprise e-learning modules. Treat the Markdown and YAML files as the editable source of truth.

## Project Shape

- `README.md` gives the top-level purpose and working model.
- `00-program/` contains program context, rollout, governance placeholders, source tracking, and review checklists.
- `01-claude-chat/`, `02-claude-cowork/`, `03-claude-code/`, and `04-claude-design/` each contain a module, portal copy, quiz bank, and review notes.
- `90-shared/` contains shared glossary, prompt patterns, quiz schema, brand/tone, and Sandvik policy placeholder material.
- `95-exports/` contains generated LMS or SCORM output. Do not edit exports directly unless the export format itself becomes the maintained source.
- `old-assets/` contains reference material from earlier course work. Use it for context, not as approved policy.

## Editing Rules

- Keep module content practical, role-specific, and tied to the product being ordered.
- Separate Claude product capabilities from Sandvik policy and approval rules.
- Use official Claude and Anthropic sources for product facts, tracked in `00-program/source-register.md`.
- Use Sandvik internal sources for Sandvik launch, ordering, pricing, approval, cost-center, and entitlement details.
- Keep placeholders visible when Sandvik policy is not final. Use the existing placeholder labels in `00-program/governance-placeholders.md`.
- Update module review notes and the source register when product facts, launch context, pricing, or approval guidance changes.
- If source module content changes, assume exported LMS files may be stale until regenerated.

## Current Sandvik Context

The Sandvik intranet post "Introducing Claude Enterprise", published 2026-06-16, is the current internal source for launch and cost context:

- Planned launch: 2026-06-30, subject to possible delay.
- Pre-ordering before launch reserves a license but does not grant early access.
- One Claude Enterprise license can cover Claude Chat, Claude Code, Claude Cowork, and Claude Design at the same base cost.
- Claude Cowork is described as an early preview.
- Base fee: 350 SEK per user/month.
- Usage is consumption-based, with additional usage costs charged on top.
- Full cost is charged to the user's cost center with no markup.
- Users have normal plan usage limits, including five-hour session limits and weekly limits.
- Further use is pay as you go.
- Higher monthly usage or spending limits require the intranet form and cost-approver approval.
- The monthly spending limit should be visible in the user's Claude account.

## Quality Checks

Before finishing a docs change:

- Search source docs for older usage-escalation wording and update it where the intranet context now applies.
- Check that every affected module still stands alone.
- Keep quiz questions aligned with the module text.
- Leave `95-exports/` untouched unless explicitly asked to regenerate or edit exports.
