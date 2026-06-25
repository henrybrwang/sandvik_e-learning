# Sandvik tool-module template: authoring and reuse guide

A reusable SCORM e-learning template for Sandvik AI **tool modules**. The first
build is the **Claude Chat** module; the same shell, navigation, quiz engine and
SCORM hooks are designed to carry any future tool (Claude Code, Cowork, Design,
M365 Copilot, Copilot Studio, GitHub Copilot, SAP Joule, and so on).

## Files

| File | What it is |
|---|---|
| `Claude Chat Module.dc.html` | The working prototype: full multi-section course with quiz, progress and SCORM placeholders. |
| `module-content/claude-chat.module.json` | The content for this module as a structured object, and the schema future modules follow. |
| `module-content/module-template-guide.md` | This guide. |
| `fonts/`, `assets/` | Sandvik Sans fonts plus the logo and symbol used by the template. |

---

## Section structure

Every tool module follows the same scalable spine. This is what makes new modules
fast to add and consistent for learners. The section count is flexible: capability
content is split into one page per feature, so a module can have however many
sections it needs.

1. **Course start**: title, tool, journey placement, duration, audience, completion rule, "what this module adds", start or resume.
2. **Journey context**: foundation-journey vs tool-module diagram, assumed-knowledge panel, "this module focuses on", objectives.
3. **Tool fit**: when to use this tool, and a table for when to reach for another Claude product.
4. **Core workflow**: the reusable five-step rhythm, plus tool-specific patterns (here: agentic chat and a tool-assisted flow).
5. **Tool capabilities**: one page per feature, grouped under a single "Tool capabilities" heading in the nav. The Claude Chat module ships five: Files, Connectors, Projects, Skills, Artifacts.
6. **Rules and governance**: approved use, sensitive data, connectors and permissions, sharing, cost, usage, support, and policy placeholders.
7. **Practical scenario**: a realistic task with title, source material, goal, tool actions, and a review checklist.
8. **Common risks**: grouped risk categories, each with a "do instead".
9. **Knowledge check**: an authored quiz with per-answer feedback, score and pass mark.
10. **Completion**: recap, "you can now", next step, and completion status.

Learners always know: **which journey** (header breadcrumb and rail, gold marks
the active journey), **what's assumed** (journey context and rail), **what the tool
is and does** (tool fit through to the capability pages), **what's allowed or needs
approval** (governance), **costs and limits** (governance), **what can be shared**
(capabilities, governance and scenario), **what to verify** (workflow, scenario and
risks), and **how to complete** (course start rule and the knowledge check).

---

## How to reuse the template for a new tool module

1. **Copy** `Claude Chat Module.dc.html` to e.g. `Claude Code Module.dc.html`.
2. **Swap the content.** All copy lives as plain, editable markup inside each
   `<section data-screen-label="…">`. Edit text directly in the editor, or follow
   the JSON instance as your content map.
3. **Edit the section list** in the logic class (`this.sections`). Each entry has an
   `id` and `title`; capability pages also carry `group: "Tool capabilities"` so they
   nest under one heading in the rail. Add, remove or reorder freely. The section
   switches in `renderVals()` are keyed by `id`, so nothing is tied to a fixed index.
4. **Capability pages (on or off):** keep, delete, reorder or add a page per feature.
   The JSON `capabilities.pages[].enabled` flag documents which pages a module shows.
   For a Claude Code module, enable a Repositories page; for Cowork, a Browser actions
   page; for Design, a Design assets page. Each page reuses the same layout: icon,
   title, role label, lead paragraph, structured body, and a "good habits" panel.
5. **Rewrite the quiz** in `this.quizData` (logic class), which mirrors the JSON
   `quiz.questions` shape. The engine handles selection, feedback, scoring and the
   pass mark. `this.PASS_MARK` (or the `passMark` prop) sets the threshold.
6. **Journey variant.** For a Champion, Builder or Leader tool module, switch the
   `journeyVariant` prop (updates the breadcrumb and rail together), tighten the
   governance section with more approval gates, and raise the bar in the scenario.
   The structure is identical.

> The gold accent always marks the **active journey** only. Everything else stays
> monochrome (black, white, warm paper) per the Sandvik 2023 identity.

---

## Tweakable props

Exposed on the root component and surfaced in the host Tweaks panel:

- `journeyVariant`: AI Fluency / AI Champion / Developer or Builder / Leader. Updates the breadcrumb and rail label.
- `passMark`: the quiz pass threshold (default 0.8).
- `requireAllSections`: whether every section must be viewed for completion (default true).

---

## Content schema

`claude-chat.module.json` is the canonical shape. Top-level keys:

- `tool`: `{ name, tagline, summary }`
- `journey`: `{ id, label, type, moduleKind, variant }`
- `meta`: `{ duration, audience, completion: { requireAllSectionsViewed, quizPassMark } }`
- `responsibilityNote`: the standing accountability statement
- `courseStart`, `journeyContext`, `toolFit`, `coreWorkflow`, `capabilities`,
  `governance`, `scenario`, `risks`, `quiz`, `completion`: one object per section group
- `capabilities.pages[]`: one object per capability page, each with `id`, `enabled`,
  `icon`, `title`, `role`, `lead`, and feature-specific body fields
- `scorm`: `{ version, storageKey, cmiMap }`

To drive the prototype from JSON at runtime later, load this object and bind it in
the logic class's `renderVals()`. The template field names already match closely.

---

## SCORM integration

The prototype ships with a SCORM **placeholder** layer (`this.scorm` in the logic
class) that mirrors a CMI model into `localStorage`, so progress, score, completion
and resume all work offline today.

| Tracked value | CMI field (1.2) | 2004 equivalent |
|---|---|---|
| Completion status | `cmi.core.lesson_status` | `cmi.completion_status` / `cmi.success_status` |
| Quiz score (0 to 100) | `cmi.core.score.raw` | `cmi.score.raw` / `.scaled` |
| Resume location | `cmi.core.lesson_location` | `cmi.location` |
| Resume data | `cmi.suspend_data` | `cmi.suspend_data` |

To connect a real LMS:
1. In `scorm.init()`, locate the LMS API (`API` for 1.2 in a parent window, or
   `API_1484_11` for 2004).
2. Replace the `scorm.set()/get()/commit()/finish()` bodies with
   `API.LMSSetValue / LMSGetValue / LMSCommit / LMSFinish` calls.
3. Wrap the package with an `imsmanifest.xml` and zip it as a SCORM package.

No external services are required: everything runs from static HTML, CSS and JS.

---

## Completion rule (this module)

View every section and pass the knowledge check at 80%. Both are tracked live in the
right rail and written to the SCORM completion field once met.
