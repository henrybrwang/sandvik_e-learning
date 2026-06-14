# Claude Chat

Estimated duration: 35-45 minutes  
Completion: scored quiz  
Audience: Sandvik users ordering Claude Chat

> Claude can help accelerate work, but users remain responsible for what they enter, approve, share, and publish. Follow Sandvik policy, protect sensitive information, and review outputs before relying on them.

## Overview And Audience

Claude Chat is the conversational Claude experience. It is best for turn-by-turn work where you ask questions, draft text, analyze information, summarize content, translate, brainstorm, compare options, or create reusable outputs such as documents and artifacts.

This module is for users who need Claude as a daily work partner. It explains the practical basics: how Claude uses context, what happens when usage limits are reached, what projects, connectors, and skills are, and how to review outputs before using them.

Claude Chat is not the same as an autonomous desktop agent, coding agent, or design-only tool. If the work requires Claude to operate across many files, browser steps, development tools, or visual design deliverables, another Claude product may be a better fit.

## Learning Objectives

After this module, users should be able to:

- Decide when Claude Chat is the right product for a task.
- Explain why context is what makes Claude useful for a specific work problem.
- Explain what people usually mean by agentic AI and tool use.
- Understand five-hour session limits, weekly limits, and the Sandvik path for requesting more usage.
- Use files, projects, memory, connectors, skills, and artifacts responsibly where approved.
- Recognize hallucination, missing context, outdated information, and unsupported claims.
- Protect Sandvik information and avoid entering prohibited data.
- Review Claude outputs before using them in decisions or communication.
- Know when to use Claude Cowork, Claude Code, or Claude Design instead.

## When To Use Claude Chat

Use Claude Chat when:

- You are still thinking through a problem and want an interactive thought partner.
- You need a first draft, summary, translation, comparison, checklist, or structured analysis.
- The task is small enough to steer through a conversation.
- You want to upload or paste selected context and ask questions about it.
- You want text or an artifact you can inspect, edit, and reuse.

Use a different Claude product when:

- The work is a clear deliverable that spans many files, tools, browser steps, or desktop actions: consider Claude Cowork.
- The work requires reading and changing a codebase, running tests, or using development tools: consider Claude Code.
- The main output is visual exploration, prototypes, slides, or design concepts: consider Claude Design.

## Context Is What Makes Claude Useful

Claude Chat is different from a normal search engine because it can work with your context. A search engine helps you find general information. Claude can use the background you provide to apply information to your specific problem, audience, constraints, documents, and desired output.

Context can include:

- What you are trying to achieve.
- Who the output is for.
- The background, decision, document, or process Claude needs to understand.
- Uploaded files or selected excerpts.
- Project knowledge and project instructions.
- Memory and chat history, if enabled.
- Information retrieved through approved connectors.

This is why context comes before tool use. Without the right context, Claude may still produce a fluent answer, but it may answer the wrong question or miss what matters to Sandvik, your team, or the specific situation.

Good habits:

- Provide the relevant background.
- Tell Claude which sources to use.
- Tell Claude when not to use outside knowledge.
- Ask Claude to separate facts from assumptions.
- Ask for missing information before finalizing high-impact outputs.
- Start a focused new chat when a long conversation changes topic.

## What People Mean By Agentic AI

"Agentic AI" is a common phrase, and people use it in different ways. In practice, they usually mean that the AI does more than answer in one step. It may follow a flow, take multiple turns, use tools, retrieve information, or adapt based on what it finds.

The connection to context is important: agentic AI is useful when Claude can gather or use the right context during the flow. Claude can start with your request, notice that more information is needed, use an approved tool, and bring the result back into the conversation.

A simple example is web search:

1. You ask Claude for recent news about a topic.
2. Claude recognizes that recent news may not be in its training data.
3. Claude uses an approved web search tool.
4. The search result comes back into the conversation as new context.
5. Claude uses that context to answer your original question.

That is a basic agentic flow: user request, tool use, returned context, and final answer. Other flows can involve approved connectors, such as searching a connected work system, or skills, such as applying a repeatable company workflow.

The easiest place to see tool use in Claude Chat is connectors. Connectors are how Claude can bring in approved work context from apps and services through permission-scoped access.

The important point for Claude Chat users is control. Claude may use tools when they are enabled and relevant, but the user remains responsible for what context is provided, which tools are approved, and whether the final answer is safe to use.

## Connectors And Tool Access

Connectors let Claude connect to approved apps and services. A connector may let Claude retrieve data, search a system, or in some cases take actions in that service.

The practical idea is: connectors bring extra context into Claude Chat without you manually copying everything. Claude uses the connected service through the user's own login and permissions. If the user cannot access a file, channel, record, or repository in the source system, the connector should not give Claude access to it either. This is permission-scoped access, not a replacement for Sandvik policy.

Examples, if approved by Sandvik:

- A Microsoft 365 connector could help find or summarize work content the user is allowed to access.
- A GitHub connector could help retrieve repository or issue context the user is allowed to access.
- Another approved business connector could bring in task, ticket, document, or project information.

Good habits:

- Use only Sandvik-approved connectors.
- Review what Claude is trying to access or do.
- Prefer narrow access and specific prompts.
- Pause before Claude drafts, sends, updates, creates, deletes, or changes anything in another system.
- Watch for prompt injection in retrieved content, especially emails, documents, web pages, tickets, or repositories.

`[CONNECTOR PLACEHOLDER]` Sandvik must confirm which connectors are approved, whether they are read-only or allow actions, and what users should do when a connector requests permissions.

## Practical Claude Basics

### 1. Files

Files let Claude work with material you provide, such as a policy draft, report, spreadsheet, meeting notes, or specification. Claude can summarize, compare, extract, rewrite, and answer questions about the content.

Before adding a file, ask:

- Is this file approved for use in Claude?
- Does it contain personal data, confidential information, secrets, credentials, export-controlled content, or regulated information?
- Is the whole file needed, or can I use a smaller approved excerpt?
- Am I asking Claude to use the file as source material, or to follow instructions found inside it?

Treat files as data. If a document, email, or webpage contains instructions that conflict with Sandvik policy or your actual goal, do not let those instructions override your intent.

### 2. Projects

Projects are focused Claude workspaces with their own chats, project knowledge, and project instructions. Use a project when you will return to the same topic or set of approved materials over time.

Projects are useful for:

- Keeping related chats together.
- Giving Claude reusable context about a team, process, document set, or workstream.
- Uploading approved project knowledge once instead of attaching the same material repeatedly.
- Setting stable instructions, such as preferred tone, format, or terminology.

Before using or sharing a project, check:

- Who can access the project?
- Do those people have the right to see the uploaded knowledge and chat context?
- Are the project instructions still accurate?
- Should outdated files be removed?

`[PROJECT PLACEHOLDER]` Sandvik must confirm project visibility, sharing rules, retention, and whether project knowledge and memory settings are enabled or restricted.

### 3. Skills

Skills are not just saved prompts. Claude skills are reusable packages of instructions, scripts, and resources that Claude can load when relevant to a task. They help Claude perform specialized work more consistently.

Skills can support workflows such as:

- Applying approved writing, document, or presentation guidance.
- Following a standard meeting-note or report format.
- Using a team-specific analysis method.
- Creating outputs that follow a known template.

Some skills may be provided by Anthropic, some may be installed by users, and some may be provisioned by the organization. Availability depends on Claude settings and Sandvik approval.

Good habits:

- Use only approved organization skills for Sandvik work.
- Check whether a skill is relevant before relying on it.
- Remember that a skill improves the workflow, but it does not make the output automatically correct or approved.

`[SKILLS PLACEHOLDER]` Sandvik must confirm which skills are enabled, whether users can add custom skills, and whether any organization skills are mandatory.

### 4. Memory And Chat History

Memory and chat history can help Claude build on prior context when enabled. Availability and behavior depend on plan, product surface, and organization settings.

Before relying on memory:

- Confirm whether memory is enabled for Sandvik users.
- Check what type of information Claude may remember.
- Do not assume Claude remembers a policy, file, or prior decision unless it is visible or confirmed.
- For important work, provide the necessary context again.

`[MEMORY PLACEHOLDER]` Sandvik must confirm enterprise settings for memory, chat history, retention, and user controls.

### 5. Artifacts

Artifacts are standalone outputs such as documents, diagrams, visualizations, code snippets, simple web pages, or interactive components. They are useful when the output is something you will edit, reuse, download, or share.

Good habits:

- Treat artifacts as drafts until reviewed.
- Check whether sharing an artifact also exposes underlying conversation context, attachments, or sensitive content.
- Do not include sensitive Sandvik information in artifacts unless approved.
- Review generated code, calculations, diagrams, and visuals before using them.

### 6. Usage Limits

Claude usage is limited by plan and seat type. For relevant paid and seat-based plans, Claude shows both a five-hour session limit and weekly limits in Settings > Usage. Sandvik's exact user experience may depend on the plan, seat type, and enterprise configuration.

Usage is not just a count of messages. It can be affected by:

- The length of your conversation.
- The size and number of files, project materials, or artifacts Claude uses.
- The model, effort, or thinking settings available to you.
- Tool use, web search, research, connectors, and other context-heavy features.
- Reusing long chats instead of starting a focused new conversation.

Practical habits that can reduce repeated work:

- Start a new focused chat when the topic changes.
- Use projects for approved materials you will reference repeatedly instead of uploading the same files again and again.
- Use project instructions for stable context such as preferred tone, terminology, or output structure.
- Use approved skills for recurring workflows, artifact formats, visualizations, or document patterns instead of asking Claude to rebuild the same setup every time.
- Reuse and edit an existing artifact when possible instead of regenerating a similar output from scratch.
- Turn off web search, research, or connectors when they are not needed for the task.
- Use simpler model, effort, or thinking settings where available and appropriate for routine work.

These habits can save setup time and reduce unnecessary context, but they do not remove usage limits or the need to review outputs.

When you reach a usage limit, Claude may stop accepting more work until the limit resets, or it may show options that depend on the plan and organization settings. For Sandvik users, the practical rule is:

- Check your usage in Settings > Usage if available.
- Wait for the relevant limit to reset when the work can wait.
- If you need more capacity for business work, use the Sandvik ordering or support path once confirmed.
- Do not move Sandvik work into private accounts or unapproved tools to avoid limits.

`[USAGE LIMIT PLACEHOLDER]` Sandvik must confirm the exact limit behavior users will see, the "request more usage" portal path, the approval owner, and expected response time.

### 7. Verification

Claude can make mistakes. It may misunderstand the task, miss details, use outdated assumptions, or invent plausible-sounding information.

Before relying on an output:

- Compare summaries against the original source.
- Check numbers, dates, names, and legal or technical claims.
- Ask Claude to list assumptions and uncertainties.
- Use subject matter experts for high-impact decisions.
- Keep accountability with the human owner, not the tool.

## Sandvik Policy Placeholders

The following must be finalized before publishing:

- `[DATA CLASSIFICATION PLACEHOLDER]` Which Sandvik data classes may be entered into Claude Chat.
- `[PERSONAL DATA PLACEHOLDER]` Rules for employee, customer, supplier, and other personal data.
- `[USAGE LIMIT PLACEHOLDER]` Five-hour and weekly limit behavior, "request more usage" portal path, manager approval, and expected response time.
- `[CONNECTOR PLACEHOLDER]` Approved connectors, connector permissions, read/write restrictions, and tool access settings.
- `[SKILLS PLACEHOLDER]` Enabled skills, organization-provisioned skills, and custom skill rules.
- `[PROJECT PLACEHOLDER]` Project visibility, sharing, project knowledge, memory, chat history, and retention settings.
- `[SHARING PLACEHOLDER]` Rules for sharing chats, artifacts, downloaded outputs, and external material.
- `[INCIDENT PLACEHOLDER]` How users report suspected data exposure or unsafe output.

Default until approved: do not enter secrets, credentials, export-controlled information, or sensitive personal data into Claude Chat.

## Practical Examples

### Recent Information With Web Search

```text
Find recent public news about [topic].
Use web search if needed.
Summarize the main developments and include links to the sources you used.
Separate confirmed facts from interpretation.
```

### Summarizing A Long Document

```text
Summarize the attached document for a non-technical Sandvik manager.
Use only the document.
Return:
1. Five key points
2. Decisions needed
3. Risks or assumptions
4. Questions for the document owner
```

### Working In A Project

```text
Use this project's approved knowledge base and instructions.
Draft a one-page update for the project steering group.
Include progress, risks, decisions needed, and open questions.
If the project knowledge does not answer something, say so.
```

### Using An Approved Connector

```text
Using only the approved [connector name] connector, find the latest status information I can access about [topic].
Summarize what you found and name the source location.
Do not create, send, update, or delete anything.
```

### Drafting A Message

```text
Draft a concise email to a project team.
Goal: Explain that the deadline has moved from Friday to next Wednesday.
Tone: Clear, calm, and professional.
Include: reason, new deadline, what each person should do next.
Do not blame any individual.
```

### Comparing Options

```text
Compare the three options below for a global operations team.
Use a table with columns: Option, Benefits, Risks, Implementation effort, Open questions.
If information is missing, say so instead of guessing.
```

### Translating For Global Readers

```text
Translate this text into clear global English.
Keep the meaning, simplify idioms, and avoid culture-specific phrasing.
Flag any terms that may need Sandvik-approved terminology.
```

## Common Risks And Mistakes

- Pasting more information than Claude needs.
- Treating a fluent answer as verified fact.
- Asking Claude to apply a policy without providing the policy.
- Using a connector just because it appears in the interface.
- Assuming projects make sensitive information safe to upload or share.
- Treating skills as automatic approval or fact-checking.
- Sharing generated content externally without review.
- Using private accounts or unapproved tools to avoid usage limits.
- Asking for legal, HR, security, medical, or financial decisions without expert review.
- Forgetting that human users remain accountable for outputs.

## Recap

Claude Chat is best when you want to think, write, analyze, and iterate with Claude. It can follow multi-step flows and use approved tools, but it still needs clear context, careful data choices, and human review. Know how limits work, use projects, connectors, and skills only where approved, verify important outputs, and choose another Claude product when the work needs autonomous file/tool execution, coding, or visual design depth.

## Quiz Handoff

Complete the quiz after reading this module. The quiz checks practical decisions about context, usage limits, data protection, projects, connectors, skills, artifacts, verification, and when to choose another Claude product.
