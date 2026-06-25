# Agent Guide

This repository contains source material for Sandvik Claude Enterprise e-learning modules. Treat the Markdown and YAML files as the editable source of truth.

## Project Shape

- `README.md` gives the top-level purpose and working model.
- `00-program/` contains program context, rollout, governance placeholders, source tracking, and review checklists.
- `01-claude-chat/`, `02-claude-cowork/`, `03-claude-code/`, and `04-claude-design/` each contain a module, portal copy, quiz bank, and review notes.
- `90-shared/` contains shared glossary, prompt patterns, quiz schema, brand/tone, and Sandvik policy placeholder material.
- `claude-design-final-versions/` contains the rendered module designs (the `.dc.html` files, with their assets, fonts, and module-content JSON).
- `scorm-final-versions/` contains the packaged LMS/SCORM modules (wired `index.html`, `imsmanifest.xml`, support, assets, fonts, and the importable zips).
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
- Usage is direct and consumption-based, with no five-hour session or weekly limits; usage is billed pay as you go to the user's cost center.
- Further use is pay as you go.
- Higher monthly usage or spending limits require the intranet form and cost-approver approval.
- The monthly spending limit should be visible in the user's Claude account.

## Quality Checks

Before finishing a docs change:

- Search source docs for older usage-escalation wording and update it where the intranet context now applies.
- Check that every affected module still stands alone.
- Keep quiz questions aligned with the module text.
- When a module's content changes, update both its rendered design in `claude-design-final-versions/` and its package in `scorm-final-versions/` so they stay in sync.

## SCORM: Clean-Slate Retake (Workday "Retake course")

The wired SCORM package `scorm-final-versions/claude-chat/index.html` resets to a clean
start when a learner clicks "Retake course" in Workday, instead of resuming the previous
completed state. (The design-source `.dc.html` files still use the placeholder `scorm`
object and do not have this wiring.)

Root cause it fixes: the module restores its state from browser `localStorage`
(`this.STORAGE_KEY`), which is not scoped to the LMS attempt. On a retake the old completed
quiz/section state was restored and immediately re-reported as complete. The original
`init()` also only reset `lesson_status` when it was blank/`not attempted`, so a retained
`completed` carried over.

How the fix works (three coordinated changes in the inline `scorm` object and the constructor):

1. The `scorm` object has a `freshAttempt` flag and `init()` reads `cmi.core.entry`. When
   the LMS reports `"ab-initio"` (a new attempt, e.g. Retake), it sets `freshAttempt = true`
   and clears the prior result: `lesson_status` → `incomplete`, and `score.raw`,
   `lesson_location`, `suspend_data` → empty.
2. The constructor calls `this.scorm.init()` **before** `this.load()`, so the attempt type
   is known before any state is restored.
3. When `freshAttempt` is true, the constructor deletes the `localStorage` key and starts
   from empty state (`saved = {}`) instead of restoring.

Behavior: `ab-initio` → clean start (`incomplete`); `resume` → restores progress;
plain relaunch after completion (`entry` empty) → stays `completed` (normal SCORM resume).

Dependency to verify: this relies on Workday sending `cmi.core.entry = "ab-initio"` on
Retake. Confirm with one retake cycle in Workday. If it does not, add a content-side
fallback that resets when the SCO launches while already `completed`/`passed`.

When regenerating `claude-chat-scorm.zip`, zip the **contents** of `claude-chat/` (so
`imsmanifest.xml` sits at the zip root), not the folder.
