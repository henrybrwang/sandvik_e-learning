# Claude Cowork

Estimated duration: 20-30 minutes  
Completion: scored quiz  
Audience: Sandvik users ordering Claude Cowork

> Claude can help accelerate work, but users remain responsible for what they enter, approve, share, and publish. Follow Sandvik policy, protect sensitive information, and review outputs before relying on them.

## Overview And Audience

Claude Cowork is for delegating multi-step work to Claude in the desktop environment. It is suited for clear deliverables that may involve local files, approved connectors, browser steps, desktop apps, and longer-running work.

This module is for users who need Claude to help assemble finished work, not only respond in a conversation.

## Learning Objectives

After this module, users should be able to:

- Decide when Cowork is a better fit than Chat.
- Write delegation prompts with a clear goal and definition of done.
- Grant file, browser, connector, and desktop access carefully.
- Monitor plans, progress, approvals, and review points.
- Recognize when to interrupt or redirect a task.
- Review finished deliverables before using or sharing them.
- Understand cost, usage, and control considerations for longer-running tasks.

## When To Use Claude Cowork

Use Cowork when:

- You have a clear deliverable in mind.
- The work spans several files, folders, sources, or tools.
- Claude needs to produce a finished document, spreadsheet, presentation, report, or organized file set.
- The task may benefit from parallel workstreams.
- The work is recurring or scheduled, if Sandvik enables that capability.

Use Claude Chat instead when:

- You are still exploring the problem.
- You want quick drafting or analysis in a conversation.
- The task does not require local files, browser activity, or desktop apps.
- You need to stay present for every step.

## Core Concepts

### 1. Delegation Requires A Definition Of Done

Cowork works best when the requested outcome is clear. A strong prompt says what to produce, where inputs live, what constraints apply, when to pause, and how to report completion.

Example:

```text
Create a two-page summary from the files in this folder.
Audience: regional sales managers.
Definition of done: save a Markdown summary with key findings, risks, and open questions.
Do not edit the source files.
Pause before using any browser or connector.
```

### 2. Cowork Can Work Across Your Computer

Depending on Sandvik settings and user permissions, Cowork may work with local folders, files, browser sessions, desktop apps, connectors, skills, or plugins. This makes it powerful, but also means users must be deliberate about what they allow.

Good habits:

- Start with the smallest folder or source set that fits the task.
- Use a dedicated working folder when possible.
- Avoid granting access to broad personal or shared directories.
- Pause before consequential actions such as sending, submitting, deleting, or editing outside the working folder.

### 3. Stay In Control

Cowork may plan, execute, verify, and deliver work, but the user remains responsible. Monitor the task, review intermediate plans where available, and interrupt if the task moves in the wrong direction.

Good review points:

- Before accessing a new source.
- Before changing files.
- Before sending or submitting anything.
- Before using personal, customer, supplier, or confidential data.
- Before accepting a final deliverable.

### 4. Browser And Desktop Actions Need Extra Care

Cowork may be able to operate logged-in web pages or desktop applications when enabled. A logged-in browser can expose systems Claude would otherwise not access.

Before approving browser or desktop actions:

- Confirm the site or app is approved.
- Check whether the action changes a record, sends information, or triggers a workflow.
- Avoid tasks involving secrets, credentials, regulated data, or high-impact decisions unless approved.
- Ask Cowork to pause before submission.

### 5. Cost And Usage Awareness

Longer tasks, many sources, parallel work, and repeated runs can consume more usage than a short chat. Sandvik will define the relevant cost controls and monitoring expectations.

Good habits:

- Use clear scope.
- Avoid unnecessary source folders.
- Stop tasks that are no longer useful.
- Reuse outputs rather than rerunning the same work repeatedly.

## Sandvik Policy Placeholders

The following must be finalized before publishing:

- `[LOCAL FILE PLACEHOLDER]` Approved folder access patterns and prohibited locations.
- `[BROWSER PLACEHOLDER]` Approved browser automation rules.
- `[DESKTOP APP PLACEHOLDER]` Which desktop apps Claude may operate.
- `[CONNECTOR PLACEHOLDER]` Approved connectors, plugins, and skills.
- `[APPROVAL PLACEHOLDER]` Actions that always require human approval.
- `[SCHEDULE PLACEHOLDER]` Whether recurring or scheduled Cowork tasks are allowed.
- `[COST PLACEHOLDER]` Usage monitoring, spend limits, and escalation path.

Default until approved: grant only the minimum access needed, keep a human review point before consequential actions, and do not use Cowork with secrets or prohibited data.

## Practical Examples

### Create A Report From A Folder

```text
Use the files in this folder to create a management summary.
Definition of done: one Markdown file called management-summary.md.
Include: key themes, decisions needed, risks, and missing information.
Do not edit original files.
Ask before using any connector or browser.
```

### Build A Spreadsheet From Inputs

```text
Create a spreadsheet from the CSV files in this folder.
Include one sheet per source file and a summary sheet.
Check formulas and flag rows with missing values.
Save the result in this folder.
```

### Prepare A Presentation Draft

```text
Draft a 6-slide internal presentation from the approved briefing notes in this folder.
Audience: senior operations leaders.
Use clear global English.
Mark all unknowns as [CHECK REQUIRED].
Do not use external images.
```

### Research Across Approved Sources

```text
Using only the approved connector [name] and the files in this folder, prepare a comparison table.
Do not browse the open web.
Pause if the connector requests additional permissions.
```

## Common Risks And Mistakes

- Delegating a vague goal and expecting a complete result.
- Giving Cowork a broad folder when a small working folder is enough.
- Letting Cowork act in a logged-in browser without review.
- Forgetting that desktop and browser actions may affect real systems.
- Running long tasks without checking scope, quality, or cost.
- Using Cowork when Chat would be simpler and safer.

## Recap

Claude Cowork is best for clear deliverables that span files, tools, and multi-step work. Start with a precise goal, grant narrow access, watch approval points, and review the result before using it.

## Quiz Handoff

Complete the quiz after reading this module. The quiz checks when to choose Cowork, how to delegate safely, and how to manage files, tools, browser actions, approvals, and review.
