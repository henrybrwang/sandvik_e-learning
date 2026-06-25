# Sandvik Claude Training

This folder contains the source material for four separate Claude training modules intended for Sandvik's ordering portal.

The modules are:

| Module | Audience | Recommended duration | Completion |
| --- | --- | ---: | --- |
| Claude Chat | All users ordering Claude Chat | 35-45 minutes | Scored quiz |
| Claude Cowork | Users ordering Claude Cowork | 20-30 minutes | Scored quiz |
| Claude Code | Developers and technical builders ordering Claude Code | 25-35 minutes | Scored quiz |
| Claude Design | Users ordering Claude Design | 20-30 minutes | Scored quiz |

## Source Of Truth

Markdown files are the editable source of truth. Quiz banks are stored as YAML so they can be imported, transformed, or mapped to a future LMS/portal format.

Rendered module designs are maintained in `claude-design-final-versions/`, and the packaged LMS/SCORM modules in `scorm-final-versions/`. When a module changes, keep both in sync with the Markdown source.

## Current Sandvik Context

Sandvik announced Claude Enterprise on the intranet on 2026-06-16. The planned launch date is 2026-06-30, but the launch may be delayed. Pre-ordering before launch reserves a license but does not grant earlier access.

One Claude Enterprise license can cover Claude Chat, Claude Code, Claude Cowork, and Claude Design at the same base cost. The current internal pricing context is 350 SEK per user/month, plus consumption-based pay-as-you-go usage costs. Costs are charged to the user's cost center with no markup.

Usage is direct and consumption-based, with no five-hour session or weekly limits; usage is billed pay as you go to the user's cost center. Higher monthly usage or spending limits require an intranet form and approval from the user's cost approver. The monthly spending limit should be visible in the user's Claude account.

## Working Model

1. Draft and maintain content in each module folder.
2. Keep shared definitions, policy placeholders, prompt patterns, and quiz schema in `90-shared/`.
3. Track official Claude and Anthropic source material in `00-program/source-register.md`.
4. Track Sandvik internal launch, ordering, pricing, and approval context in `00-program/source-register.md`.
5. Route modules through the review checklist before publishing.
6. Export approved content to the portal/LMS format once the target format is known.

## Review Gates

Each module should pass these gates before release:

1. Product owner review for learning objectives and product fit.
2. Sandvik IT Security review for access, connectors, local file use, and tool permissions.
3. Legal and Data Protection review for sensitive data, retention, and approved use.
4. Brand review for tone, visual examples, and external-facing design guidance.
5. Portal/LMS owner review for quiz behavior, tracking, and completion rules.
6. Pilot feedback from a small mixed Sandvik group.

## Maintenance

Recheck official Claude and Anthropic sources quarterly and before any major relaunch. Update the source register whenever product capabilities, availability, pricing, admin controls, security guidance, or Sandvik internal launch and ordering guidance changes.
