# Claude Cowork

Estimated duration: 20-30 minutes  
Completion: scored quiz  
Audience: Sandvik users ordering Claude Cowork

> Claude can help accelerate work, but users remain responsible for what they enter, approve, share, and publish. Follow Sandvik policy, protect sensitive information, and review outputs before relying on them.

## Overview And Audience

Claude Chat helps you think in conversation. Claude Cowork helps you hand off a defined task that can use approved files, tools, browser steps, and desktop actions.

Use Cowork when you need a delegated deliverable, not just an answer: a report, spreadsheet, presentation draft, organized folder, or follow-up pack.

The pattern is simple: choose the right task, prepare context, brief Cowork clearly, control what it may do, and verify before use.

## Safe Defaults

Cowork capabilities depend on Sandvik policy, product settings, and user permissions. Use these defaults unless rules say otherwise:

- Use approved sources.
- Grant narrow access.
- Treat browser actions, desktop actions, connectors, plugins, and skills as available only if enabled.
- Pause before consequential actions such as sending, submitting, uploading, deleting, changing records, or editing outside the working folder.
- Do not use Cowork with secrets, credentials, prohibited data, or unapproved sensitive information.

## Learning Objectives

After this module, users should be able to:

- Choose when Cowork is a better fit than Chat.
- Prepare a controlled working folder with approved context.
- Brief Cowork with goal, sources, boundaries, verification, pause points, and definition of done.
- Control file access, browser actions, connector use, desktop actions, background delegation, and scheduled work.
- Verify and review deliverables before using or sharing them.

## When To Use Claude Cowork

Use Cowork when:

- You have a clear deliverable in mind, not only a question.
- The work needs approved context from a working folder, template, export, browser system, connector, or app.
- Claude needs to produce a finished document, spreadsheet, presentation, report, or organized file set.
- The task may take time, touch several sources, or benefit from background delegation.
- The work is repeated and could use a reusable manual brief or a scheduled task.

Use Claude Chat instead when:

- You are still exploring the problem.
- You want quick drafting, analysis, or translation in a conversation.
- The task does not need local files, browser activity, desktop apps, or longer-running delegation.
- You need to stay present for every step.

## Cowork Workflow

### 1. Choose And Define The Deliverable

Start by deciding what finished means. Cowork works best when you brief it like a capable colleague who can act inside a bounded workspace. A vague instruction such as "handle this" can lead to wrong scope, unnecessary access, or unusable output.

Useful starting decisions:

- Goal: what deliverable should Claude create or update?
- Audience: who will use the output?
- Sources: what approved files, folders, systems, or connectors may Claude use?
- Boundaries: what must Claude not access, edit, send, submit, upload, or delete?
- Output: what file, format, location, and level of detail are expected?
- Verification: what checks should Claude perform before calling the work complete?
- Pause points: when should Claude stop and ask for human approval?

If you cannot define the deliverable, use Claude Chat first. Move to Cowork when you know what outcome you want delegated.

### 2. Prepare The Working Folder

A working folder is a context package. It should contain only the materials Claude needs for the task and a clear place to save outputs.

Good working folder contents:

- Approved source files, exports, notes, spreadsheets, or screenshots.
- Templates, examples, or previous versions Claude should follow.
- A short instruction file if the task has special rules.
- An output folder for generated files.
- Review expectations, such as "mark uncertain claims" or "show a plan first."

Treat the folder as a controlled workspace. When you attach or approve a working folder, assume Cowork may be able to read, create, and modify files inside it, depending on Sandvik settings and task permissions. A narrow working folder is safer than a broad personal, project, or shared directory.

Good folder habits:

- Start with the smallest approved folder or source set that fits the task.
- Remove unrelated, sensitive, personal, or outdated files.
- Keep originals unchanged unless editing them is the explicit task.
- Ask Claude to summarize a complex folder before it starts.
- Avoid treating a broad folder as "more context." Random context can increase cost, expose information unnecessarily, and make the result worse.

### 3. Brief Cowork

The brief connects the deliverable to the working folder and approval boundaries. Use a stable structure so important controls are not forgotten.

Reusable Cowork brief:

```text
Goal:
Context:
Allowed sources:
Not allowed:
Output:
Verification:
Pause before:
Definition of done:
```

Simple example:

```text
Goal: create a two-page summary for regional sales managers.
Context: approved files in this working folder.
Allowed sources: this working folder only.
Output: management-summary.md in the output folder.
Verification: compare key findings against the source files and mark uncertain claims as [CHECK REQUIRED].
Pause before: using any browser, connector, desktop app, or editing source files.
Definition of done: include key findings, risks, open questions, and source notes.
```

### 4. Control Tools And Actions

Cowork may work with browser sessions, desktop apps, connectors, skills, or plugins when Sandvik settings and user permissions allow it. These capabilities can help complete real workflows, but they can also affect real systems.

Examples of useful tool or desktop work:

- Reading approved information from a logged-in business system.
- Pulling values from an approved dashboard into a report template.
- Updating a local spreadsheet from approved inputs.
- Preparing a draft in a document or presentation.
- Navigating a browser workflow and stopping before submission.

Before approving tool, browser, or desktop actions:

- Confirm the site, system, app, connector, or folder is approved for the task.
- Check whether the action changes a record, sends information, submits a form, deletes content, uploads files, or triggers a workflow.
- Complete login, multi-factor authentication (MFA), and access approval steps yourself.
- Do not ask Cowork to enter, store, manage, approve, bypass, or reveal passwords, MFA codes, access tokens, or credentials.
- Pause before consequential actions such as sending, submitting, uploading, deleting, changing records, or editing outside the working folder.

### 5. Verify And Review

Cowork may plan, execute, verify, and deliver work, but the user remains responsible. Stay close enough to notice drift, especially when the task touches files, systems, or business data.

Good review points:

- After Claude explains its plan.
- Before accessing a new source.
- Before changing files.
- Before consequential actions.
- Before using personal, customer, supplier, or confidential data.
- Before accepting a final deliverable.

If the task starts to drift, interrupt it. Give a correction, narrow the scope, ask it to show its current state, or stop the task entirely.

Verification should be part of the brief, not an afterthought. Ask Cowork to compare claims against source files, list source locations, check row counts, flag missing data, name assumptions, or mark uncertain claims as `[CHECK REQUIRED]`. Human review is still required before the output is used or shared.

### 6. Reuse Background Briefs Carefully

Some Cowork tasks are useful because the same brief can be reused. Reuse does not automatically mean scheduling.

Think in three patterns:

- One-off background work: Cowork completes a defined task while you do something else, then you review the result.
- Reusable manual brief: you save a clear prompt for repeated work, but start each run yourself.
- Scheduled or recurring work: Cowork runs the brief on a cadence and produces a draft you review after each run.

A repeatable brief should still include approved sources, output location, pause points, verification, stop conditions, and a cost boundary. A scheduled task runs only while your computer is awake, and each run produces a draft you still review before using or sharing it.

### 7. Keep Long Work Scoped

Longer tasks, many sources, tool-heavy work, background work, and repeated runs can consume more usage than a short chat. Sandvik's Claude Enterprise is direct and consumption-based, with no five-hour session or weekly limits (those apply only to individual Claude plans); usage is billed pay as you go. The base license fee is 350 SEK per user/month, and additional usage is charged to the user's cost center with no markup. New licenses start with a default usage limit of $25 per user per month.

Good habits:

- Use clear scope.
- Avoid unnecessary working folders or source systems.
- Reuse reviewed outputs rather than rerunning the same work.
- Stop tasks that are no longer useful.
- Request a higher monthly usage or spending limit through the intranet form when business needs justify it.
- Remember that higher monthly spending limits require cost-approver approval.

## Before Publishing

Final Sandvik rules must be confirmed before publishing. Until then, use approved sources, grant narrow access, pause before consequential actions, and avoid secrets, credentials, prohibited data, or unapproved sensitive information.

Open placeholders: `[LOCAL FILE PLACEHOLDER]`, `[BROWSER PLACEHOLDER]`, `[DESKTOP APP PLACEHOLDER]`, `[CONNECTOR PLACEHOLDER]`, `[APPROVAL PLACEHOLDER]`, and `[COST PLACEHOLDER]`.

## Practical Examples

### Create A Management Summary From A Prepared Folder

```text
Goal: create a management summary for department leadership.
Context: the folder contains meeting notes, an exported issue list, and the Sandvik summary template.
Allowed sources: approved files in this working folder only.
Output: management-summary.md in the output folder.
Verification: cite or name the source file behind each key theme and mark uncertain claims as [CHECK REQUIRED].
Pause before: using any browser, connector, desktop app, or editing source files.
Definition of done: include key themes, decisions needed, risks, owners, and missing information. Do not edit original files.
```

### Build A Spreadsheet From Local Inputs

```text
Goal: create an Excel workbook from the CSV and XLSX files in this working folder.
Context: local data exports prepared for this task.
Allowed sources: this working folder only.
Output: supplier-input-summary.xlsx in the output folder.
Verification: compare row counts against the source files and flag any mismatch.
Pause before: using any browser, connector, or desktop app.
Definition of done: one sheet per source file, one summary sheet, checked formulas, flagged missing values, and assumptions listed on a notes sheet.
```

### Draft A Briefing In The Background

```text
Goal: draft a one-page briefing from the approved files in this working folder.
Context: I want a first draft while I work on something else.
Allowed sources: this working folder only.
Output: briefing-draft.md saved in the output folder.
Verification: list every source file used and mark uncertain claims as [CHECK REQUIRED].
Pause before: using any browser, connector, or desktop app.
Definition of done: include summary, risks, decisions needed, and open questions. This is a one-off task; do not schedule or repeat it automatically.
```

The same brief can become a scheduled weekly draft; each scheduled run produces a draft you review before using it.

### Use An Approved Browser Workflow

```text
Goal: collect current values for this report.
Allowed sources: approved browser system [name] and fields listed in instructions.md.
Output: update the report template in this working folder.
Verification: save a source note with system name, date, fields used, and uncertainty.
Pause before: any write-back, submit, upload, or record change.
```

### Prepare A Supplier Follow-Up Pack

```text
Goal: prepare a supplier follow-up pack.
Context: supplier briefing folder plus approved browser records listed in instructions.md.
Allowed sources: files in this working folder and the approved browser records listed in instructions.md.
Output: follow-up-pack.md and an updated local action-tracker.xlsx in the output folder.
Verification: list each source used, flag missing information, and compare action owners against the source notes.
Pause before: any send, submit, upload, record change, or edit outside the working folder.
Definition of done: create the pack and, if desktop app access is enabled, update only the local action-tracker.xlsx copy. Do not send emails, submit forms, change supplier records, or upload files.
```

### Draft A Recurring Weekly Update

```text
Prepare a weekly Friday draft as a scheduled task.
Sources: approved project folder and dashboard export only.
Output: weekly-updates/status-draft.md.
Verification: compare against the dashboard export and list missing data.
Pause before: sending, publishing, or continuing if source data is missing or inconsistent.
```

### Organize A Folder After Showing A Plan

```text
Review this working folder and propose an organization plan.
Include: subfolders, naming conventions, duplicate candidates, and files needing review.
Do not move, rename, delete, or edit anything yet.
Verification: explain why each suggested change is needed.
Wait for approval before making changes.
```

## Common Risks And Mistakes

- Delegating a vague goal and expecting Cowork to infer the right outcome.
- Giving Cowork a broad folder when a small working folder is enough.
- Forgetting that Cowork may read, create, and modify files inside an approved working folder.
- Treating a scheduled task's output as final instead of reviewing each run's draft.
- Letting Cowork act in a logged-in browser or desktop app without review.
- Asking Cowork to handle passwords, MFA, credentials, or access approval steps.
- Forgetting that browser and desktop actions may affect real systems.
- Running long tasks without checking scope, quality, verification, or cost.
- Using Cowork when Chat would be simpler.

## Recap

Claude Cowork is best for delegated deliverables that need controlled action. Choose Cowork when the outcome is clear, prepare the working folder, write a complete brief, grant narrow access, pause before consequential actions, verify against sources, and review the result before using it. Reuse manual briefs carefully, schedule recurring work and review each run's draft, and keep longer work scoped so usage and cost stay visible.

## Quiz Handoff

Complete the quiz after reading this module. The five quiz questions check what to assume about an attached working folder, how a scheduled task runs and is reviewed, the risk of desktop automation, recognizing prompt injection, and handling login and MFA yourself.
