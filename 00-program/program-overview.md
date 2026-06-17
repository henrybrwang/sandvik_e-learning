# Program Overview

## Purpose

This program gives Sandvik users the minimum required knowledge to use the Claude product they are ordering responsibly and effectively. The training is mandatory in the ordering flow and is completed per product, not as one combined course.

## Relationship To The AI Fluency Program

The Claude access modules should be treated as tool-specific modules within the broader Sandvik AI Fluency learning landscape. The current Sandvik old-assets context is:

- `old-assets/Sandvik/AI Fluency Journey.docx`: current e-learning program source material for the AI Fluency foundation and AI Champion foundation.
- `old-assets/Sandvik/AI e-learnings.png`: journey map showing how foundation courses, role journeys, and tool modules fit together.

The journey map shows four tracks:

- AI Fluency Journey for everyone, moving from L0 to L2.
- AI Champion Journey for approved AI Champions, moving from L2 to L3.
- Developer Journey for AI-assisted development, moving from L2 to L3.
- Leader Journey for AI decision making, moving from L2 to L3.

The AI Fluency foundation courses already cover the broad concepts: why AI fluency matters, safe and smart use, Copilot basics, building a first agent, and keeping fluency alive through community and additional tool modules. The AI Champion foundation covers building for others, governance, publishing paths, data classification principles, cost responsibility, maintenance, and multiplier behavior.

Tool modules are intended to sit beside those foundations. They should be focused introductions to a specific tool, distributed based on access or license, and should explain what is different about that tool, when to use it, what hands-on workflows it supports, and what responsibilities apply. They should not become general AI awareness courses.

For Claude Chat specifically, the learning spine should be: when to use Chat, what is different from the general AI Fluency foundation and Copilot-style chat, how Claude uses context, how tool-assisted or agentic chat works, how approved connectors bring in work context, how Claude-specific features such as files, projects, memory, skills, artifacts, usage limits, and verification work, and when another Claude product or non-Claude tool is a better fit.

The old-assets material is partly Sandvik Coromant-specific. This repository should adapt reusable program structure to Sandvik-wide Claude Enterprise training and keep final policy, access, and approval claims tied to current Sandvik sources.

## User Journey

1. The user selects a Claude product in the Sandvik ordering portal.
2. The portal assigns the matching module only.
3. The user completes the module content.
4. The user passes the scored quiz.
5. The portal records completion and continues the provisioning workflow.

## Sandvik Launch And Ordering Context

Sandvik announced Claude Enterprise on the intranet on 2026-06-16. The planned launch date is 2026-06-30, with a pre-order form available before launch. Submitting an order before launch reserves a license but does not grant earlier access, and the launch date may still change.

Claude Enterprise is described as a Sandvik-approved AI assistant for writing, research, analysis, and coding. It complements GitHub Copilot and Microsoft 365 Copilot rather than replacing all existing AI tools at launch.

The intranet post lists four selectable Claude tools under one license:

- Claude Chat: web, desktop, and mobile assistant for questions, document analysis, drafting, and research.
- Claude Code: terminal-based coding assistant for writing and debugging code.
- Claude Cowork: desktop agent for working with files such as spreadsheets and documents, currently described as an early preview.
- Claude Design: visual design agent for creating and refining designs, layouts, and graphics through chat.

The post also notes a future direction of one AI assistant license per user per use case. Examples given are Microsoft 365 Copilot versus Claude Chat for office use, and GitHub Copilot versus Claude Code for development. This is not enforced yet, but training should remind users to choose the tool they need rather than ordering overlapping licenses by default.

## Pricing And Usage Context

Claude Enterprise is consumption-based at Sandvik. The intranet post states a base fee of 350 SEK per user/month, with additional usage costs charged on top depending on service use. The full cost is charged to the user's cost center with no markup.

Users have the normal plan usage limits, including five-hour session limits and weekly limits. Further usage is pay as you go. Users who need a higher usage or spending limit must use the intranet form and receive approval from their cost approver. The spending limit is monthly and should be visible to users in their Claude account.

Training should continue to avoid private-account workarounds. If a user reaches a limit, the safe choices are to wait for the reset, reduce unnecessary context or tool use, or request a higher monthly spending limit through the approved intranet flow.

## Program Principles

- Keep modules practical, role-specific, and tied to the product being ordered.
- Keep each module in the tool-module pattern: what this tool is, when to use it, what is different, how to start safely, and what decisions the user must make.
- Avoid duplicating general AI Fluency foundation courses unless a concept is needed to explain the Claude product.
- When a foundation concept is necessary, use a short recap and immediately connect it to the Claude-specific behavior.
- Prefer one coherent scenario thread per module over a catalog of unrelated examples.
- Make Sandvik policy visible but clearly separated from product facts.
- Use official Claude and Anthropic sources for product capabilities.
- Avoid promising availability, cost, or admin behavior beyond confirmed Sandvik communication.
- Prefer short examples that users can adapt immediately.
- Make quiz questions test decisions users will actually face.
- Route users to the AI Fluency community, Data & AI SharePoint, Service Portal/IT Service Desk, AI Champions, or the Agentic Automation CoE only where the final Sandvik support path has been confirmed or clearly marked as a placeholder.

## Scenario And Organization Context

Planning material in `old-assets/Personal/Quick Sandvik org levels.png` shows examples across Group, Business Areas, and Divisions/Brands. Module examples should be written so they work across Sandvik unless a specific scenario requires a named organizational level. When examples involve connectors, access, approvals, or data visibility, they should avoid implying that one Business Area, division, function, or team has the same systems and permissions as another.

## Module Independence

Each module must stand alone because users order Claude Chat, Claude Cowork, Claude Code, and Claude Design separately. Shared concepts can be referenced from `90-shared/`, but a user should not need to complete another module to understand the one they ordered.

At the same time, the old-assets journey model assumes tool modules build on a foundation. To reconcile those needs, each Claude module should include only a brief foundation recap, then spend most of its time on Claude-specific tool behavior, Sandvik access and policy boundaries, practical examples, and product-choice decisions.

## Roles And Responsibilities

| Role | Responsibility |
| --- | --- |
| Program owner | Owns the training program, roadmap, release timing, and review coordination. |
| Product/platform owner | Confirms Claude product availability, admin settings, and ordering logic. |
| IT Security | Approves rules for tool access, local files, connectors, browser use, and secrets. |
| Data Protection | Approves rules for personal data, confidential information, retention, and sharing. |
| Legal | Reviews acceptable use, IP, third-party content, and external publication risks. |
| Brand | Reviews tone, visual examples, templates, and design guidance. |
| Portal/LMS owner | Confirms completion tracking, quiz behavior, import format, and reporting. |

## Definition Of Done

A module is ready for publishing when:

- The Markdown source has complete module content.
- The quiz bank has the required number of questions.
- Portal copy is approved.
- Policy placeholders are resolved or explicitly approved as launch-time guidance.
- The review checklist is complete.
- The module has been tested in the target portal/LMS flow.
- The source register has been checked for current Claude product facts.
