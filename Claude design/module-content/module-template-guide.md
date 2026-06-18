# Sandvik tool-module template — authoring & reuse guide

A reusable SCORM e-learning template for Sandvik AI **tool modules**. The first
build is the **Claude Chat** module; the same shell, navigation, quiz engine and
SCORM hooks are designed to carry any future tool (Claude Code, Cowork, Design,
M365 Copilot, Copilot Studio, GitHub Copilot, SAP Joule, …).

## Files

| File | What it is |
|---|---|
| `Claude Chat Module.dc.html` | The working prototype — full 10-section course with quiz, progress and SCORM placeholders. |
| `module-content/claude-chat.module.json` | The content for this module as a structured object — the schema future modules follow. |
| `module-content/module-template-guide.md` | This guide. |
| `fonts/`, `assets/` | Sandvik Sans fonts + logo/symbol used by the template. |

---

## The 10-section structure

Every tool module follows the same scalable spine. This is what makes new modules
fast to add and consistent for learners.

1. **Course start** — title, tool, journey placement, duration, audience, completion rule, "what this module adds", start/resume.
2. **Journey context** — foundation-journey vs tool-module diagram, assumed-knowledge panel, "this module focuses on", objectives.
3. **Tool fit** — when to use this tool vs another; decision table.
4. **Core workflow** — the reusable 5-step rhythm, plus tool-specific patterns (here: agentic chat + tool-assisted flow).
5. **Tool capabilities** — the "context stack" cards. Authors turn cards on/off per tool.
6. **Rules & governance** — approved use, sensitive data, connectors/permissions, sharing, cost, usage, support, policy placeholders.
7. **Practical scenario** — a realistic task: title, source material, goal, tool actions, review checklist.
8. **Common risks** — grouped risk categories, each with a "do instead".
9. **Knowledge check** — authored quiz with per-answer feedback, score and pass mark.
10. **Completion** — recap, "you can now", next step, completion status.

Learners always know: **which journey** (header breadcrumb + rail, gold = active
journey), **what's assumed** (section 2 + rail), **what the tool is and does**
(sections 1–5), **what's allowed / needs approval** (section 6), **costs & limits**
(section 6), **what can be shared** (sections 5–7), **what to verify** (workflow +
scenario + risks), and **how to complete** (section 1 rule + section 9 quiz).

---

## How to reuse the template for a new tool module

1. **Copy** `Claude Chat Module.dc.html` to e.g. `Claude Code Module.dc.html`.
2. **Swap the content.** All copy lives as plain, editable markup inside each
   `<section data-screen-label="…">`. Edit text directly in the editor, or follow
   the JSON instance as your content map.
3. **Edit the section list** in the logic class (`this.sections`) only if you
   rename or reorder sections — titles drive the header and the rail nav.
4. **Capabilities cards (on/off):** keep, delete, reorder or add cards in section
   5. The JSON `capabilities.cards[].enabled` flag documents which cards a module
   shows — e.g. enable *Repositories* / *Browser actions* / *Design assets* for
   Code / Cowork / Design modules; disable *Connectors* where not relevant.
5. **Rewrite the quiz** in `this.quizData` (logic class) — same shape as the JSON
   `quiz.questions`. The engine handles selection, feedback, scoring and the
   pass mark automatically. `this.PASS_MARK` sets the threshold.
6. **Journey variant.** For a Champion / Builder / Leader tool module, change the
   header breadcrumb + rail label, tighten the governance section (more approval
   gates), and raise the bar in the scenario. The structure is identical.

> The gold accent always marks the **active journey** only. Keep everything else
> monochrome — black, white, warm paper — per the Sandvik 2023 identity.

---

## Content schema

`claude-chat.module.json` is the canonical shape. Top-level keys:

- `tool` — `{ name, tagline, summary }`
- `journey` — `{ id, label, type, moduleKind, variant }`
- `meta` — `{ duration, audience, completion: { requireAllSectionsViewed, quizPassMark } }`
- `responsibilityNote` — the standing accountability statement
- `courseStart`, `journeyContext`, `toolFit`, `coreWorkflow`, `capabilities`,
  `governance`, `scenario`, `risks`, `quiz`, `completion` — one object per section
- `scorm` — `{ version, storageKey, cmiMap }`

Each section object holds only the fields that section renders (lists of
strings, `{title, body}` step objects, `{tag, title, body}` governance rows,
`{work, use}` decision rows, quiz `{prompt, options[], explanation}`). To drive
the prototype from JSON at runtime later, load this object and bind it in the
logic class's `renderVals()` — the template holes already match these field
names closely.

---

## SCORM integration

The prototype ships with a SCORM **placeholder** layer (`this.scorm` in the logic
class) that mirrors a CMI model into `localStorage` so progress, score, completion
and resume all work offline today.

| Tracked value | CMI field (1.2) | 2004 equivalent |
|---|---|---|
| Completion status | `cmi.core.lesson_status` | `cmi.completion_status` / `cmi.success_status` |
| Quiz score (0–100) | `cmi.core.score.raw` | `cmi.score.raw` / `.scaled` |
| Resume location | `cmi.core.lesson_location` | `cmi.location` |
| Resume data | `cmi.suspend_data` | `cmi.suspend_data` |

To connect a real LMS:
1. In `scorm.init()`, locate the LMS API (`API` for 1.2 in a parent window, or
   `API_1484_11` for 2004).
2. Replace `scorm.set()/get()/commit()/finish()` bodies with
   `API.LMSSetValue / LMSGetValue / LMSCommit / LMSFinish` calls.
3. Wrap the package with an `imsmanifest.xml` and zip as a SCORM package.

No external services are required — everything runs from static HTML, CSS and JS.

---

## Completion rule (this module)

`View all 10 sections + pass the knowledge check at 80%.` Both are tracked live in
the right rail and written to the SCORM completion field once met.
