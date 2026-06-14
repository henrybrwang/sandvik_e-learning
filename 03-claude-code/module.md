# Claude Code

Estimated duration: 25-35 minutes  
Completion: scored quiz  
Audience: Sandvik developers and technical builders ordering Claude Code

> Claude can help accelerate work, but users remain responsible for what they enter, approve, share, and publish. Follow Sandvik policy, protect sensitive information, and review outputs before relying on them.

## Overview And Audience

Claude Code is an agentic coding system for working with software projects. It can help inspect codebases, propose plans, edit files, run commands, execute tests, investigate failures, and support development workflows.

This module is for developers, technical builders, and approved users who need Claude to work inside or alongside code repositories.

## Learning Objectives

After this module, users should be able to:

- Decide when Claude Code is the right product.
- Start with safe repository access and a clear goal.
- Ask Claude Code to inspect before editing.
- Control file changes, command execution, commits, and pushes.
- Protect secrets, credentials, production data, and restricted repositories.
- Use tests, code review, and CI as verification.
- Apply Sandvik engineering guardrails before release.

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

### 1. Repository Context Comes First

Claude Code should inspect the project before changing it. Good instructions ask it to understand architecture, existing patterns, tests, and constraints.

Example:

```text
Inspect the repository and explain the relevant files before making changes.
Then propose a short implementation plan.
Do not edit files until I approve the plan.
```

### 2. Human Approval Remains Essential

Claude Code may suggest or make changes quickly, but humans remain accountable for quality, security, and release decisions.

Require review before:

- Running unfamiliar commands.
- Installing dependencies.
- Editing security-sensitive code.
- Changing authentication, authorization, logging, data retention, or encryption.
- Creating commits, pushing branches, opening pull requests, or deploying.

### 3. Secrets And Production Data Are Out Of Scope

Do not paste or expose:

- Passwords
- API keys
- Tokens
- Private keys
- Certificates
- Connection strings
- Production customer data
- Restricted logs or dumps

If a task requires sensitive values, use approved secret-management and development workflows rather than giving the values to Claude.

### 4. Tests Are Part Of The Work

Claude Code should help run the appropriate checks, but passing tests does not replace human review.

Good verification asks Claude Code to:

- Run targeted tests first.
- Run broader tests when the change is risky.
- Explain failures.
- Avoid changing unrelated tests just to make the suite pass.
- Summarize what was verified and what was not.

### 5. Git Workflow Must Stay Controlled

Claude Code can support Git tasks, but Sandvik should define the allowed workflow.

Default safe pattern:

- Work on a branch.
- Keep changes scoped.
- Review diffs.
- Run tests.
- Open a pull request.
- Require human review before merge.
- Do not push or deploy without approval.

## Sandvik Policy Placeholders

The following must be finalized before publishing:

- `[REPOSITORY PLACEHOLDER]` Which repositories Claude Code may access.
- `[BRANCH PLACEHOLDER]` Branching, commit, and pull request rules.
- `[COMMAND PLACEHOLDER]` Approved command execution boundaries.
- `[SECRET PLACEHOLDER]` Secret handling and prohibited data.
- `[TEST PLACEHOLDER]` Minimum test expectations by project type.
- `[SECURITY PLACEHOLDER]` Security review triggers.
- `[DEPLOYMENT PLACEHOLDER]` Rules for release, production access, and deployment.
- `[OPEN SOURCE PLACEHOLDER]` Dependency and license review requirements.

Default until approved: Claude Code may assist development, but humans must review code, tests, security impact, and release decisions.

## Practical Examples

### Understand A Codebase

```text
Inspect this repository and explain the architecture for a new team member.
Focus on entry points, main modules, data flow, tests, and where configuration lives.
Do not modify files.
```

### Fix A Bug

```text
Investigate this bug report.
First identify likely files and explain the cause.
Then propose a minimal fix and tests.
Do not edit until I approve the plan.
```

### Add Tests

```text
Add tests for the behavior described below.
Follow existing test patterns.
Run the relevant test command and summarize failures.
Do not change production code unless the tests reveal a confirmed bug.
```

### Refactor Safely

```text
Refactor this module to reduce duplication.
Keep behavior unchanged.
Make small commits or logical change groups if approved.
Run tests before and after.
Explain any risk areas.
```

### Investigate CI Failure

```text
Read the CI failure log and identify the root cause.
Check whether the failure is test-only, environment-related, or product code.
Propose the smallest safe fix.
```

## Common Risks And Mistakes

- Letting Claude Code edit before it understands the repository.
- Running commands without knowing their impact.
- Exposing secrets, production data, or restricted logs.
- Accepting generated code without tests or review.
- Changing unrelated files during a small task.
- Treating a green test suite as a complete security review.
- Allowing commits, pushes, or deploys without human approval.

## Recap

Claude Code is strongest when paired with clear engineering guardrails. Give it a scoped goal, make it inspect first, control commands and Git actions, protect secrets, run tests, and use human review before release.

## Quiz Handoff

Complete the quiz after reading this module. The quiz checks repository access, safe prompting, secrets, command execution, tests, Git workflow, and review responsibilities.
