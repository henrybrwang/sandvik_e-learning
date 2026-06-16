# Claude Cowork

Estimated duration: 20-30 minutes  
Completion: scored quiz  
Audience: Sandvik users ordering Claude Cowork

> Claude can help accelerate work, but users remain responsible for what they enter, approve, share, and publish. Follow Sandvik policy, protect sensitive information, and review outputs before relying on them.

## Overview And Audience

Claude Cowork is Claude Chat plus action in the desktop environment. Chat is best when you want to think, ask, draft, and refine in a conversation. Cowork is for handing off a defined outcome and letting Claude work across approved local files and folders, connectors, browser steps, desktop apps, and longer-running delegated work.

This module is for users who need Claude to assemble finished work, not only answer questions. Cowork is especially useful when the right context already exists on your computer: source folders, spreadsheets, templates, briefing notes, screenshots, exports, or approved browser-based systems.

## Current Sandvik Approval Status

Claude Cowork capabilities depend on Sandvik policy, product settings, and user permissions. Until final Sandvik rules are published:

- Use only approved information, folders, systems, and connectors.
- Grant the minimum access needed for the task.
- Treat browser actions, desktop actions, connectors, plugins, skills, and scheduled tasks as available only if Sandvik enables them.
- Keep a human review point before consequential actions such as sending, submitting, deleting, changing records, or editing outside the working folder.
- Do not use Cowork with secrets, credentials, prohibited data, or unapproved sensitive information.

Detailed policy decisions are tracked in the placeholders later in this module.

## Learning Objectives

After this module, users should be able to:

- Decide when Cowork is a better fit than Chat.
- Prepare a local working folder that gives Claude useful context.
- Write delegation prompts with a clear goal, inputs, constraints, and definition of done.
- Brief background, reusable, or scheduled automation-style tasks with sources, outputs, review points, and stop conditions.
- Grant file, browser, connector, and desktop access carefully and deliberately.
- Monitor plans, progress, approvals, and review points.
- Recognize when to interrupt or redirect a task.
- Review finished deliverables before using or sharing them.
- Understand cost, usage, and control considerations for longer-running tasks.

## When To Use Claude Cowork

Use Cowork when:

- You have a clear deliverable in mind, not only a question.
- The work needs context from local files, folders, templates, or exports.
- Claude needs to produce a finished document, spreadsheet, presentation, report, or organized file set.
- The task spans approved connectors, browser steps, desktop apps, or several sources.
- The work is repetitive, recurring, or scheduled, if Sandvik enables that capability.
- The task may benefit from longer-running work or parallel workstreams.

Use Claude Chat instead when:

- You are still exploring the problem.
- You want quick drafting or analysis in a conversation.
- The task does not require local files, browser activity, or desktop apps.
- You need to stay present for every step.

## Core Concepts

### 1. Cowork Is For Delegated Work

Cowork works best when you brief it like a capable colleague who can take action on your computer. The request should describe the outcome, the sources, the rules, the review points, and what finished means.

A strong Cowork brief includes:

- Goal: the deliverable Claude should create or update.
- Inputs: the approved files, folders, browser systems, or connectors Claude may use.
- Boundaries: what Claude must not access, change, send, submit, or delete.
- Definition of done: file name, format, audience, quality checks, and where to save the result.
- Review points: when Claude should pause for approval.

Use this reusable structure when you want a reliable Cowork result:

```text
Goal:
Context folder:
Allowed sources:
Not allowed:
Output:
Pause before:
Definition of done:
```

Simple example:

```text
Create a two-page summary from the approved files in this working folder.
Audience: regional sales managers.
Definition of done: save a Markdown summary with key findings, risks, and open questions.
Do not edit the source files.
Pause before using any browser or connector.
```

### 2. Folders Are Context Packages

One of Cowork's most useful capabilities is local file and folder access. A well-prepared folder is a practical way to give Claude context without pasting everything into a chat.

Think of the folder as a context package. It should contain only the materials Claude needs for the task:

- Approved source files, exports, notes, spreadsheets, or screenshots.
- Templates, examples, or previous versions Claude should follow.
- A short instruction file if the task has special rules.
- A clear place to save outputs.
- Any review expectations, such as "mark uncertain claims" or "show a plan first."

Good folder habits:

- Start with the smallest folder or source set that fits the task.
- Use a dedicated working folder when possible.
- Remove unrelated, sensitive, personal, or outdated files.
- Ask Claude to summarize the folder contents before it starts if the folder is complex.
- Keep original source files unchanged unless editing them is the explicit task.

Avoid treating a broad folder as "more context." Random context can increase cost, expose information unnecessarily, and make the result worse.

### 3. Automations Need A Clear Brief

Cowork can support automation-style work when Sandvik settings and product capabilities allow it. Automation does not only mean scheduled work. Think in three patterns:

- Start-and-return background work: ask Cowork to complete a one-off task while you do something else, then review the result.
- Reusable manual briefs: keep a clear prompt for work you repeat, but start each run yourself.
- Scheduled or recurring work: ask Cowork to run on a cadence only if Sandvik policy and product settings allow it.

These patterns are useful for work such as preparing a status draft, refreshing a report from approved sources, organizing a folder, or collecting information from an approved system. They also increase responsibility because the task may run for longer, repeat, or touch several systems.

A clear automation brief says:

- Pattern and cadence: one-off background task, reusable manual task, weekly, monthly, or only when you ask.
- Trigger: what should start the work.
- Sources: exactly which folders, files, connectors, dashboards, or browser systems are approved.
- Output: what should be created, updated, and where it should be saved.
- Approval points: what requires human confirmation before continuing.
- Stop conditions: when Claude should pause, ask, or stop instead of guessing.
- Cost boundary: how much work is reasonable before asking for approval.

Until Sandvik confirms scheduled or recurring task rules, treat recurring automation as conditional and policy dependent.

### 4. Browser And Desktop Actions Extend What Claude Can Do

Depending on Sandvik settings and user permissions, Cowork may work with browser sessions, desktop apps, connectors, skills, or plugins. This is the difference between asking for advice and asking Claude to help complete a workflow.

Examples of useful browser or desktop work include:

- Reading approved information from a logged-in business system.
- Pulling figures from an approved dashboard into a report template.
- Updating a local spreadsheet from approved inputs.
- Preparing a draft in a document or presentation.
- Navigating a browser workflow and stopping before submission.

Browser and desktop actions need extra care because they can affect real systems. A logged-in browser can expose information and permissions Claude would otherwise not have.

Before approving browser or desktop actions:

- Confirm the site, system, or app is approved for the task.
- Check whether the action changes a record, sends information, submits a form, deletes content, or triggers a workflow.
- Avoid tasks involving secrets, credentials, regulated data, or high-impact decisions unless approved.
- Ask Cowork to pause before sending, submitting, deleting, changing records, or editing outside the working folder.
- Review any information copied from a browser or app before using it in a deliverable.

### 5. Stay In Control

Cowork may plan, execute, verify, and deliver work, but the user remains responsible. Monitor the task, review intermediate plans where available, and interrupt if the task moves in the wrong direction.

Good review points:

- After Claude explains its plan.
- Before accessing a new source.
- Before changing files.
- Before sending or submitting anything.
- Before using personal, customer, supplier, or confidential data.
- Before accepting a final deliverable.

If the task starts to drift, interrupt it. Give a correction, narrow the scope, ask it to show its current state, or stop the task entirely.

### 6. Cost And Usage Awareness

Longer tasks, many sources, parallel work, and repeated runs can consume more usage than a short chat. Sandvik's Claude Enterprise cost model includes normal plan usage limits, such as five-hour session limits and weekly limits, plus pay-as-you-go usage beyond those limits. The base license fee is 350 SEK per user/month, and additional usage is charged to the user's cost center with no markup.

Good habits:

- Use clear scope.
- Avoid unnecessary source folders.
- Avoid repeated automation runs when one reviewed output is enough.
- Stop tasks that are no longer useful.
- Reuse outputs rather than rerunning the same work repeatedly.
- Request a higher monthly usage or spending limit through the intranet form when business needs justify it.
- Remember that higher monthly spending limits require cost-approver approval.

## Sandvik Policy Placeholders

The following must be finalized before publishing:

- `[LOCAL FILE PLACEHOLDER]` Approved folder access patterns and prohibited locations.
- `[BROWSER PLACEHOLDER]` Approved browser automation rules.
- `[DESKTOP APP PLACEHOLDER]` Which desktop apps Claude may operate.
- `[CONNECTOR PLACEHOLDER]` Approved connectors, plugins, and skills.
- `[APPROVAL PLACEHOLDER]` Actions that always require human approval.
- `[SCHEDULE PLACEHOLDER]` Whether recurring or scheduled Cowork tasks are allowed.
- `[COST PLACEHOLDER]` Final intranet form link, cost-approver workflow details, monthly spending-limit visibility, and expected response time.

Default until approved: grant only the minimum access needed, keep a human review point before consequential actions, and do not use Cowork with secrets or prohibited data.

## Practical Examples

### Create A Management Summary From A Prepared Folder

```text
Use only the approved files in this working folder to create a management summary.
Context: the folder contains meeting notes, an exported issue list, and the Sandvik summary template.
Audience: department leadership.
Definition of done: save one Markdown file called management-summary.md in the output folder.
Include: key themes, decisions needed, risks, owners, and missing information.
Mark uncertain claims as [CHECK REQUIRED].
Do not edit original files.
Show your outline before writing the final version.
```

### Build A Spreadsheet From Local Inputs

```text
Create an Excel workbook from the CSV and XLSX files in this working folder.
Use one sheet per source file and add a summary sheet.
Check formulas, flag rows with missing values, and list assumptions on a separate notes sheet.
Do not use any browser or connector.
Save the result as supplier-input-summary.xlsx in the output folder.
```

### Draft A Briefing In The Background

```text
Start a one-off Cowork task while I work on something else.
Goal: draft a one-page briefing from the approved files in this working folder.
Allowed sources: this folder only.
Output: briefing-draft.md saved in the output folder.
Pause before using any browser, connector, or desktop app.
Do not schedule this task or repeat it automatically.
Definition of done: include summary, risks, decisions needed, open questions, and [CHECK REQUIRED] markers for uncertain claims.
```

### Draft A Recurring Weekly Update

```text
If scheduled Cowork tasks are enabled by Sandvik, prepare a weekly draft every Friday morning.
Sources: the approved project folder and the approved dashboard export only.
Output: a draft status update in Markdown saved to the weekly-updates folder.
Include: progress, blockers, decisions needed, and items requiring human follow-up.
Do not send or publish the update.
Pause and ask if source data is missing, inconsistent, or unusually large.
```

### Use An Approved Browser Workflow

```text
Use the approved browser system [name] to collect the current values needed for this report.
Use only the fields listed in instructions.md.
Copy the values into the report template in this working folder.
Do not submit forms, change records, or download unrelated files.
Pause before any action that writes back to the browser system.
Save a short source note explaining what you used.
```

### Organize A Folder After Showing A Plan

```text
Review the files in this working folder and propose an organization plan.
Include: suggested subfolders, naming conventions, duplicate candidates, and files that need human review.
Do not move, rename, delete, or edit any files yet.
Wait for my approval before making changes.
```

## Common Risks And Mistakes

- Delegating a vague goal and expecting Cowork to infer the right outcome.
- Giving Cowork a broad folder when a small context package is enough.
- Treating recurring or scheduled tasks as approved before Sandvik has enabled them.
- Letting Cowork act in a logged-in browser or desktop app without review.
- Forgetting that desktop and browser actions may affect real systems.
- Running long tasks without checking scope, quality, or cost.
- Using Cowork when Chat would be simpler and safer.

## Recap

Claude Cowork is best for clear deliverables that need action: local files and folders as context, approved tools and systems, browser or desktop steps, and longer-running delegated work. Start with a precise goal, package the right context, use a clear brief, grant narrow access, define automation boundaries, watch approval points, monitor usage, and review the result before using it.

## Quiz Handoff

Complete the quiz after reading this module. The quiz checks when to choose Cowork, how to delegate safely, and how to manage files, folders, automation-style work, tools, browser actions, approvals, and review.
