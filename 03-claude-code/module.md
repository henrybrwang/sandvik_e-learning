# Claude Code

Estimated duration: 35-45 minutes  
Completion: scored quiz  
Audience: Sandvik developers and technical builders ordering Claude Code

> Claude can help accelerate work, but users remain responsible for what they enter, approve, share, and publish. Follow Sandvik policy, protect sensitive information, and review outputs before relying on them.

## Overview And Audience

Claude Code is an agentic coding system for working with software projects. It can inspect codebases, propose plans, edit files, run commands, execute tests, investigate failures, and support development workflows.

This module is for developers, technical builders, and approved users who need Claude to work inside or alongside code repositories.

At Sandvik, Claude Code is one of the selectable tools under the Claude Enterprise license. It complements GitHub Copilot for development use cases and is intended for agentic coding workflows, advanced debugging, scripting, and complex technical work where repository and terminal access are useful.

The central skill is not "let Claude write code." The central skill is deciding what kind of engineering work this is, giving Claude enough specification and repository context, and using it inside the same quality, security, and release process you would apply to human-written code.

## Learning Objectives

After this module, users should be able to:

- Decide when Claude Code is the right product.
- Choose the right level of process for throwaway, experimental, shared, or production-bound work.
- Start with safe repository access and a clear goal.
- Use plan mode or equivalent review steps to create a specification before implementation.
- Use project instruction files such as `CLAUDE.md` and `AGENTS.md` effectively.
- Control file changes, command execution, commits, pushes, pull requests, and releases.
- Protect secrets, credentials, production data, and restricted repositories.
- Use tests, code review, CI, and independent review loops as verification.
- Recognize the limits of AI-written tests and AI self-review.
- Apply Sandvik engineering guardrails before release.
- Understand that longer or more complex Claude Code work can increase pay-as-you-go usage.

## Where Claude Code Runs

Claude Code can be used in several surfaces, depending on Sandvik enablement and local setup:

- Desktop app: use the Claude desktop app and open the Code surface where enabled.
- Terminal or CLI: install Claude Code through the Sandvik-approved route, open a terminal in the project folder, and run `claude`.
- IDE integrations: use the Claude Code extension or plugin in supported IDEs such as VS Code, Cursor or other VS Code-based editors, and JetBrains IDEs where approved.

Use your Sandvik-approved Claude Enterprise account. Do not move Sandvik work into private accounts, personal API keys, or unapproved tools to avoid limits or access controls.

## When To Use Claude Code

Use Claude Code when:

- You need help understanding an unfamiliar codebase.
- You need to implement a change across files.
- You want tests, linting, or build output interpreted and fixed.
- You need help with refactoring, migration, documentation, or CI failure analysis.
- The work belongs in a repository and should follow engineering workflow.

Use another Claude product when:

- The task is discussion, writing, or analysis without code edits: use Claude Chat.
- The task is office-document or desktop workflow delegation: use Claude Cowork.
- The main task is visual concept, prototype, slide, or design exploration: use Claude Design.

## Core Concepts

### 1. Know Your Intent Before You Start

Before asking Claude Code to build or change something, decide what kind of work this is.

Fast iteration may be acceptable when:

- The output is a throwaway script, personal helper, learning exercise, or local prototype.
- It does not handle secrets, production data, customer data, employee data, or restricted information.
- It will not be used by other people without review.
- It is clearly marked as experimental and can be discarded.

Normal engineering process is required when:

- Other Sandvik users will rely on it.
- It will be maintained, reused, deployed, scheduled, or integrated with other systems.
- It affects production, customers, employees, suppliers, finance, safety, legal, security, identity, access, logging, retention, or compliance.
- It introduces dependencies, data flows, permissions, APIs, infrastructure, or operational support needs.

Useful questions:

- Who will use this, and what happens if it is wrong?
- Is this temporary, or will someone maintain it?
- Which repository, owner, backlog item, or approval path applies?
- What data can it access?
- What test, review, documentation, and support expectations apply?

If the answer is "this may be used by others," treat it as software, not as a chat output.

### 2. Specification Comes Before Implementation

Claude Code is most useful when it can execute against a clear specification. If you do not make the important decisions, Claude may fill the gaps with plausible assumptions.

For non-trivial work, use plan mode or ask Claude to produce a specification before editing. In the CLI, plan mode can be started with `claude --permission-mode plan` or toggled during a session where supported. In IDE integrations, use the plan review flow where available.

Good specification prompts ask for:

- Goal and user need.
- Non-goals.
- Inputs and constraints.
- Assumptions.
- Decisions needed from the human owner.
- Acceptance criteria.
- Files or components likely affected.
- Test and verification plan.
- Security, privacy, dependency, or operational risks.
- Open questions.

Example:

```text
Use plan mode for this task.
First inspect the repository and write a short specification.
Include goal, non-goals, users, assumptions, decisions I need to make,
acceptance criteria, affected files, test plan, risks, and open questions.
Do not edit files until I approve the specification.
```

Review the plan like you would review a design note. Correct the goal, remove assumptions, add missing constraints, and decide open questions before implementation starts.

### 3. Repository Context And Instruction Files Matter

Claude Code should inspect the project before changing it. Good instructions ask it to understand architecture, existing patterns, tests, and constraints.

Example:

```text
Inspect the repository and explain the relevant files before making changes.
Then propose a short implementation plan.
Do not edit files until I approve the plan.
```

Project instruction files reduce repeated prompting. Use them for stable information that Claude should know at the start of work:

- Build, test, lint, and format commands.
- Repository layout and ownership notes.
- Coding conventions and architecture constraints.
- Branch, commit, pull request, and review expectations.
- Dependency, security, privacy, and data-handling reminders.
- Known commands that must not be run without approval.

Keep instruction files short, specific, and current. "Run `npm test -- --runInBand` for backend tests" is better than "test carefully." If an instruction is long, conditional, or only relevant for one folder, use a linked document, scoped rule, or repeatable skill instead of putting everything into the always-loaded file.

Claude Code reads `CLAUDE.md`. If a repository already uses `AGENTS.md` for coding-agent instructions, create a `CLAUDE.md` that imports it so the guidance is not duplicated:

```md
@AGENTS.md

## Claude Code

Use plan mode before modifying authentication, authorization, logging, or deployment files.
Do not commit, push, or open a pull request without human approval.
```

Instruction files guide Claude's behavior, but they are not a hard control. Permissions, hooks, repository protections, tests, CI, code review, and Sandvik policy still matter.

### 4. Human Approval Remains Essential

Claude Code may suggest or make changes quickly, but humans remain accountable for quality, security, and release decisions.

Require review before:

- Running unfamiliar commands.
- Installing dependencies.
- Editing security-sensitive code.
- Changing authentication, authorization, logging, data retention, encryption, or deployment behavior.
- Creating commits, pushing branches, opening pull requests, or deploying.
- Taking actions in connected tools such as issue trackers, CI systems, package registries, cloud services, or source-control platforms.

If Claude proposes a command, ask what it does and what files, systems, or data it can affect. If the command is destructive, external, or unclear, stop and use the approved project process.

### 5. Secrets And Production Data Are Out Of Scope

Do not paste or expose:

- Passwords
- API keys
- Tokens
- Private keys
- Certificates
- Connection strings
- Production customer data
- Restricted logs or dumps

Repository work can expose sensitive material indirectly through `.env` files, local configuration, build logs, database dumps, test fixtures, screenshots, or command output. Before giving Claude access to a folder or output, check whether it contains secrets, credentials, personal data, confidential information, export-controlled content, or regulated data.

If a task requires sensitive values, use approved secret-management and development workflows rather than giving the values to Claude. Prefer development data, anonymized examples, redacted logs, and minimal excerpts.

### 6. Tests Are Evidence, Not Proof

Claude Code should help run appropriate checks, but passing tests does not replace human review.

Good verification asks Claude Code to:

- Identify the relevant existing tests before changing code.
- Run targeted tests first.
- Run broader tests when the change is risky.
- Explain failures.
- Avoid changing unrelated tests just to make the suite pass.
- Summarize what was verified and what was not.

AI-written tests can be useful, especially for scaffolding, regression coverage, and edge cases you already understand. But tests written by the same model that wrote the code can be self-defeating: the model may encode its own assumptions instead of independently checking the intended behavior.

Use stronger test habits:

- Define expected behavior yourself before asking Claude to write tests.
- Prefer existing human-reviewed test patterns.
- Ask Claude to write a failing test for the bug before the fix when practical.
- Review test names, assertions, fixtures, and edge cases.
- Check that tests would fail against the old behavior or a plausible bug.
- Use CI, code review, and subject-matter review for higher-risk changes.

AI-written tests are useful scaffolding, not independent proof.

### 7. Use Review Loops

LLMs are often especially useful as reviewers, evaluators, and assistants. They should not be treated as sole creators of high-stakes outputs.

Practical review loops:

- Plan review: ask Claude to critique its own specification and list assumptions before implementation.
- Diff review: ask Claude to summarize changed files, risks, and unrelated edits.
- Test review: ask Claude whether the tests actually verify the stated behavior.
- Security review: ask for likely authentication, authorization, logging, data-handling, injection, dependency, or secret-exposure risks.
- CI review: ask Claude to explain failing checks and propose the smallest safe fix.
- Human review: use the normal pull request, engineering, and security review process before merge or release.

If your team uses a named review loop such as a "Ralph loop," define it for the project and put the steps in the repository instructions. The important idea is repeated review and correction: plan, implement, review, test, revise, and only then release through the approved process.

### 8. Git Workflow Must Stay Controlled

Claude Code can support Git tasks, but Sandvik should define the allowed workflow.

Default safe pattern:

- Work on a branch.
- Keep changes scoped.
- Review diffs.
- Run tests.
- Open a pull request.
- Require human review before merge.
- Do not push or deploy without approval.

When work is experimental, keep that visible in the branch name, notes, or pull request. When work is intended for shared use, make sure ownership, documentation, test evidence, and review status are visible.

### 9. Usage And Cost Awareness

Claude Code work can involve large repositories, long context, command output, tests, debugging loops, and repeated agentic steps. These can consume more usage than a short chat.

Sandvik users have normal plan usage limits, including five-hour session limits and weekly limits. Further use is pay as you go and charged to the user's cost center. If a developer needs a higher monthly usage or spending limit for business work, they must use the intranet form and get approval from their cost approver. The monthly spending limit should be visible in the user's Claude account.

Good cost habits:

- Start with a focused goal.
- Use plan mode for complex changes so wrong directions are caught early.
- Avoid giving Claude the whole repository when a smaller scope is enough.
- Stop or redirect when the work drifts.
- Summarize decisions and continue in a focused session when the conversation becomes too broad.

## Sandvik Policy Placeholders

The following must be finalized before publishing:

- `[REPOSITORY PLACEHOLDER]` Which repositories Claude Code may access.
- `[BRANCH PLACEHOLDER]` Branching, commit, and pull request rules.
- `[COMMAND PLACEHOLDER]` Approved command execution boundaries.
- `[SECRET PLACEHOLDER]` Secret handling and prohibited data.
- `[TEST PLACEHOLDER]` Minimum test expectations by project type, including expectations for AI-written tests.
- `[SECURITY PLACEHOLDER]` Security review triggers.
- `[DEPLOYMENT PLACEHOLDER]` Rules for release, production access, and deployment.
- `[OPEN SOURCE PLACEHOLDER]` Dependency and license review requirements.
- `[INSTRUCTION FILE PLACEHOLDER]` Ownership and required content for repository instruction files such as `CLAUDE.md` and `AGENTS.md`.
- `[COST PLACEHOLDER]` Final intranet form link, cost-approver workflow details, monthly spending-limit visibility, and expected response time.

Default until approved: Claude Code may assist development, but humans must review intent, specifications, code, tests, security impact, and release decisions.

## Practical Examples

### Classify The Work First

```text
Before implementing anything, help me classify this task.
Is it a throwaway local helper, an experimental prototype, or software intended for other Sandvik users?
List the engineering, test, review, documentation, and approval steps that should apply.
Ask me for decisions where the answer is unclear.
```

### Write A Specification In Plan Mode

```text
Use plan mode.
Inspect the repository and draft a short specification before editing.
Include goal, non-goals, affected files, acceptance criteria, test plan, risks, and open questions.
Do not implement until I approve the specification.
```

### Set Up Repository Instructions

```text
Review this repository's existing AGENTS.md, README, package files, and test configuration.
Propose a concise CLAUDE.md that imports AGENTS.md and adds Claude Code-specific rules.
Include build commands, test commands, code style, review expectations, and prohibited actions.
Do not edit until I approve the proposed instruction file.
```

### Build A Local Throwaway Helper

```text
Create a local script for my own one-time use.
Constraints: no production data, no secrets, no external services, no commits unless I ask.
Keep it simple and explain how to delete it when done.
Run only local checks that are needed for this script.
```

### Implement A Shared Internal Change

```text
This change may be used by other Sandvik employees.
Follow the repository's standard development process.
Start with a specification and test plan, then wait for approval.
After implementation, summarize the diff, tests run, risks, and documentation updates needed.
Do not commit, push, open a PR, or deploy without approval.
```

### Review AI-Written Tests

```text
Review the tests you added.
For each test, explain what behavior it proves, what bug it would catch, and whether it would fail against the previous implementation.
Identify any tests that only mirror implementation details or your assumptions.
Suggest missing edge cases before changing code.
```

### Investigate CI Failure

```text
Read the CI failure log and identify the root cause.
Check whether the failure is test-only, environment-related, dependency-related, or product code.
Propose the smallest safe fix.
Do not disable checks or delete tests unless there is a reviewed reason.
```

## Common Risks And Mistakes

- Treating every task like a quick prototype when it will actually be used by others.
- Letting Claude Code edit before it understands the repository.
- Skipping specification because the request feels obvious.
- Letting Claude make product, security, or architecture decisions by assumption.
- Running commands without knowing their impact.
- Exposing secrets, production data, restricted logs, or sensitive local files.
- Accepting generated code without tests or review.
- Trusting AI-written tests without reviewing what they actually prove.
- Changing unrelated files during a small task.
- Treating a green test suite as a complete security review.
- Allowing commits, pushes, pull requests, or deploys without human approval.

## Recap

Claude Code is strongest when paired with clear engineering judgment. Decide the intent first, use plan mode or equivalent review to specify the work, give it repository context through concise instruction files, control commands and Git actions, protect secrets, use tests carefully, monitor usage for larger work, and use review loops before shared or production-bound code is released.

## Quiz Handoff

Complete the quiz after reading this module. The quiz checks product choice, task intent, specification, repository instructions, safe prompting, secrets, command execution, tests, AI-written test limitations, Git workflow, review loops, usage awareness, and human accountability.
