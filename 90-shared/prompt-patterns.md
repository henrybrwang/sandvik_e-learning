# Prompt Patterns

Use these patterns across modules. They are examples, not mandatory templates.

## Basic Pattern

```text
Goal: What I need done.
Context: Background Claude needs to understand.
Inputs: Files, text, links, or facts to use.
Constraints: Policies, audience, length, tone, format, and exclusions.
Output: Exact structure I want back.
Checks: How Claude should verify or flag uncertainty.
```

## Verification Pattern

```text
Review the answer before finalizing it.
Separate facts from assumptions.
Flag anything that needs a source, owner, or human decision.
Do not invent missing details. Ask for clarification if required.
```

## Claude Chat Pattern

```text
Act as a careful writing and analysis partner.
Audience: [audience].
Task: [summarize / draft / compare / translate / brainstorm / analyze].
Use only the information below unless you clearly label assumptions.
Output format: [table / bullets / email / executive summary].
Highlight risks, missing facts, and questions for the owner.
```

## Claude Cowork Pattern

```text
Goal: Produce [deliverable] in this folder.
Inputs: Use the files in [folder] and the approved connector [name].
Definition of done: [clear criteria].
Constraints: Do not send, submit, delete, or change files outside this folder without asking.
Review points: Pause before external actions or irreversible changes.
Final output: Save the result as [filename] and summarize what you changed.
```

## Claude Code Pattern

```text
Goal: Implement [change] in this repository.
First: Inspect the relevant files and propose a short plan.
Constraints: Follow existing patterns, do not expose secrets, and do not modify unrelated files.
Verification: Run [tests/checks] and summarize results.
Git: Do not commit or push until I approve.
```

## Claude Design Pattern

```text
Goal: Create [prototype / slide / one-pager / visual concept].
Audience: [audience].
Brand constraints: Use Sandvik-approved assets and tone. Treat anything else as placeholder.
Content: Base the work on [source].
Output: Provide [format] with editable structure.
Review: Flag accessibility, brand, legal, or factual risks before finalizing.
```

## Better Follow-Up Prompts

- "Show me what assumptions you made."
- "Give me three options with tradeoffs."
- "Rewrite for a global English-speaking audience."
- "What would you verify before using this externally?"
- "Turn this into a checklist for a manager."
- "Find likely errors or missing context."
- "Make the output shorter without losing decisions."

## Prompts To Avoid

- "Make this compliant" without naming the policy.
- "Use everything in this folder" without checking file sensitivity.
- "Send this when done" without human review.
- "Fix the code and deploy it" without test and release controls.
- "Create a Sandvik branded design" without approved brand assets.
