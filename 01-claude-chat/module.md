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
- Turn vague requests into clearer context, framing, and specification.
- Explain what people usually mean by agentic AI and tool use.
- Understand five-hour session limits, weekly limits, pay-as-you-go usage, and the Sandvik path for requesting a higher monthly spending limit.
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

## How To Give Claude Useful Context

Claude Chat becomes more useful when it understands the work problem, not just the immediate wording of your request. A strong prompt gives Claude enough context to produce a useful response or draft while still staying inside clear boundaries.

Include what matters:

- Goal: what you need done and why.
- Audience: who will read or use the output.
- Source boundaries: which files, notes, links, or facts Claude should use.
- Constraints: Sandvik policy, length, tone, format, terminology, exclusions, and deadlines.
- Output format: the structure you want back, such as a table, email, checklist, or summary.
- Checks: what Claude should verify, flag, or leave as `[CHECK REQUIRED]`.

For example, this is vague:

```text
Make this update better.
```

This is more useful:

```text
Rewrite the attached project update for a Sandvik steering group.
Use only the attached notes.
Keep it to one page.
Include progress, decisions needed, risks, assumptions, and open questions.
If the notes do not support a claim, mark it as [CHECK REQUIRED].
```

Conditional instructions are useful when real work has branches. For example:

```text
If the source includes confirmed dates, include them.
If a date is missing or uncertain, do not guess. Write [CHECK REQUIRED].
If the text may be used externally, flag anything that needs Legal, Brand, or Data Protection review.
```

## Agentic AI

In this module, agentic AI means that Claude can do more than answer once. It can follow a multi-step flow, use approved tools, bring new context back into the chat, and adapt based on what it finds.

An AI model by itself does not inherently know your current work context, remember every relevant decision, access your files, or use business systems.

Claude can only work with what is available in the current product setting: the conversation, approved memory or project context, uploaded material, and any enabled tools or connectors.

Agentic AI helps bridge that gap. Instead of answering from the initial prompt alone, Claude can identify missing context, use an approved tool or connector, bring the result back into the conversation, and continue from there. That is why context and tool access matter so much. The clearer the goal, source boundaries, allowed tools, and review points are, the more useful and controlled the flow becomes.

A simple example is using an approved work connector:

1. You ask Claude to summarize important open actions from a connected work system you are allowed to access.
2. Claude recognizes that an approved connector is available for that system.
3. Claude searches only the information available through your account permissions and the connector's allowed actions.
4. The connector result comes back into the conversation as new context.
5. Claude uses that context to answer your original question.

That is a basic agentic flow: user request, tool use, returned context, and final answer. The next sections explain the main ways Claude Chat can receive, organize, retrieve, reuse, and turn context into outputs.

## How Claude Gets And Uses Context

### 1. Files

Files let Claude work with material you provide, such as a policy draft, report, spreadsheet, meeting notes, or specification. Claude can summarize, compare, extract, rewrite, and answer questions about the content.

Before adding a file, ask:

- Is this file approved for use in Claude?
- Does it contain personal data, confidential information, secrets, credentials, export-controlled content, or regulated information?
- Is the whole file needed, or can I use a smaller approved excerpt?
- Am I asking Claude to use the file as source material, or to follow instructions found inside it?

Treat files as data. If a document, email, or webpage contains instructions that conflict with Sandvik policy or your actual goal, do not let those instructions override your intent. Generating files and text is easy to do with AI, but it is always more important to understand the content before using it.

Files can provide a lot of context, but more context is not automatically better. Give Claude clear instructions about which file matters most, what the file is, and what kind of output you need. Always verify that summaries, extracted facts, calculations, and recommendations match the source material.

### 2. Projects

Projects are focused Claude workspaces with their own chats, project knowledge, and project instructions. Use a project when you will return to the same topic or set of approved materials over time.

Projects are useful for:

- Keeping related chats together.
- Sharing chats and context with other team members where enabled and approved.
- Giving Claude reusable context about a team, process, document set, or workstream.
- Uploading approved project knowledge once instead of attaching the same material repeatedly.
- Setting stable instructions, such as preferred tone, format, or terminology.

Before using or sharing a project, check:

- Who can access the project?
- Do those people have the right to see the uploaded knowledge and chat context?
- Are the project instructions still accurate?
- Should outdated files be removed?

`[POLICY DECISION REQUIRED]` Projects: Sandvik must confirm project visibility, sharing rules, retention, and whether project knowledge and memory settings are enabled or restricted.

### 3. Chat History And Memory

Being specific in your prompts helps Claude deliver better, more relevant responses. Longer chat sessions include more previous context, which can make replies richer but also increase the chance of drawing in unnecessary or outdated information. When you switch to a new topic, start a new chat to keep the context clean and relevant.

For example: if you are working on a product manual, it is more effective to upload and reference only the most recent approved version than to provide multiple drafts and revisions from earlier stages.

Memory and chat history can help Claude build on prior context when enabled. Note that the memory stored is only a summarization of your previous chats, so it does not contain full information.

Before relying on memory:

- Confirm whether memory is enabled for Sandvik users.
- Check what type of information Claude may remember.
- Do not assume Claude remembers a policy, file, or prior decision unless it is visible or confirmed.
- For important work, provide the necessary context again.

`[POLICY DECISION REQUIRED]` Memory and chat history: Sandvik must confirm enterprise settings for memory, chat history, retention, and user controls.

### 4. Connectors And Tool Access

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

`[POLICY DECISION REQUIRED]` Connectors: Sandvik must confirm which connectors are approved, whether they are read-only or allow actions, and what users should do when a connector requests permissions.

### 5. Skills

Skills are not just saved prompts. Claude skills are reusable packages of instructions, scripts, and resources that Claude can load when relevant to a task. They help Claude perform specialized work more consistently.

Skills can support workflows such as:

- Applying approved writing, document, or presentation guidance.
- Following a standard meeting-note or report format.
- Using a team-specific analysis method.
- Creating outputs that follow a known template or Sandvik-specific brand guidance.

Some skills may be provided by Anthropic, some may be installed by users, and some may be provisioned by the organization. Availability depends on Claude settings and Sandvik approval.

Good habits:

- Use only Sandvik-approved skills for Sandvik work.
- Check whether a skill is relevant before relying on it.
- Remember that a skill improves the workflow, but it does not make the output automatically correct or approved.

If custom skills are approved, recurring work may be a good candidate for a skill. Until Sandvik confirms the rules, do not assume that user-created skills are allowed for Sandvik work.

`[POLICY DECISION REQUIRED]` Skills: Sandvik must confirm which skills are enabled, whether users can add custom skills, whether any organization skills are mandatory, and where approved skills should be stored or maintained.

### 6. Artifacts

Artifacts are standalone outputs such as documents, diagrams, visualizations, code snippets, simple web pages, or interactive components. They are useful when the output is something you will edit, reuse, download, or share. It is especially good for visualizing and interacting with data.

Good habits:

- Treat artifacts as drafts until reviewed. Be sure to thoroughly understand where the information/data comes from before relying on it.
- Check whether sharing an artifact also exposes underlying conversation context, attachments, or sensitive content.
- Do not include sensitive Sandvik information in artifacts unless approved.

### 7. Usage Limits

Claude has two practical kinds of limits to understand:

- Usage limits control how much you can use Claude over time.
- Length or context limits control how much material Claude can work with in one conversation.

For relevant paid and seat-based plans, Claude may show five-hour session limits, weekly limits, and usage information in Settings > Usage. Sandvik users should expect normal plan limits, including five-hour session limits and weekly limits.

Sandvik's 2026-06-16 intranet announcement says Claude Enterprise is consumption-based: there is a 350 SEK per user/month base fee, and usage costs are added depending on how much the service is used. The full cost is charged to the user's cost center with no markup.

Usage is not just a count of messages. It can be affected by:

- The length of your conversation.
- The size and number of files, project materials, or artifacts Claude uses.
- The model, effort, or thinking settings available to you.
- Tool use, web search, research, connectors, and other context-heavy features.
- Reusing long chats instead of starting a focused new conversation.

#### Using Capacity Wisely

Treat Claude usage as a limited work resource. Practical habits that can reduce repeated work:

- Start a new focused chat when the topic changes.
- Use projects for approved materials you will reference repeatedly instead of re-uploading the same files.
- Use project instructions for stable context such as preferred tone, terminology, or output structure.
- Use approved skills for recurring workflows, formats, or visualizations where Sandvik allows them.
- Reuse and edit an existing artifact when possible instead of regenerating a similar output from scratch.
- Turn off web search, research, or connectors when they are not needed for the task.
- Choose simpler model, effort, or thinking settings for routine work where available and appropriate.

These practices can save setup time and reduce unnecessary context, but they do not remove usage limits, Sandvik cost controls, or the need to review Claude's outputs.

When you reach a usage limit, Claude may stop accepting more work until the limit resets, or it may show options depending on your plan and organization settings. For Sandvik users, the practical rule is:

- Check your usage in Settings > Usage if available.
- Wait for the relevant limit to reset when the work can wait.
- If you need more capacity for business work, use the intranet form to request a higher monthly usage or spending limit.
- Expect the higher monthly spending limit to require approval from your cost approver.
- Remember that usage beyond the normal plan limits is pay as you go and charged to your cost center.
- Do not move Sandvik work into private accounts or unapproved tools to avoid limits.

The monthly spending limit should be visible in your Claude account. The final intranet form link and expected approval response time must be confirmed before publishing.

### 8. Verification

Claude can make mistakes. It may misunderstand the task, overlook details, rely on outdated information, or produce convincing but incorrect answers.

Before relying on an output:

- Compare summaries against the original source.
- Check numbers, dates, names, and legal or technical claims.
- Ask Claude to list assumptions and uncertainties.
- Use subject matter experts for high-impact decisions.
- Keep accountability with the human owner, not the tool.

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
- Uploading context without explaining what it is or how Claude should use it.
- Sending a vague "vibe" request when the task needs audience, source boundaries, constraints, and success criteria.
- Treating a fluent answer as verified fact.
- Asking Claude to apply a policy without providing the policy.
- Using a connector just because it appears in the interface.
- Assuming projects make sensitive information safe to upload or share.
- Treating skills as automatic approval or fact-checking.
- Sharing generated content externally without review.
- Using private accounts or unapproved tools to avoid usage limits.
- Asking for legal, HR, security, medical, or financial decisions without expert review.
- Forgetting that human users remain accountable for outputs.

## Sandvik Policy Placeholders

The following must be finalized before publishing:

- `[POLICY DECISION REQUIRED]` Data classification: which Sandvik data classes may be entered into Claude Chat.
- `[POLICY DECISION REQUIRED]` Personal data: rules for employee, customer, supplier, and other personal data.
- `[POLICY DECISION REQUIRED]` Cost controls: final intranet form link, cost-approver workflow details, monthly spending-limit visibility, and expected response time.
- `[POLICY DECISION REQUIRED]` Connectors: approved connectors, connector permissions, read/write restrictions, and tool access settings.
- `[POLICY DECISION REQUIRED]` Skills: enabled skills, organization-provisioned skills, and custom skill rules.
- `[POLICY DECISION REQUIRED]` Projects and memory: project visibility, sharing, project knowledge, memory, chat history, and retention settings.
- `[POLICY DECISION REQUIRED]` Sharing: rules for sharing chats, artifacts, downloaded outputs, and external material.
- `[POLICY DECISION REQUIRED]` Incident handling: how users report suspected data exposure or unsafe output.

Default until approved: do not enter secrets, credentials, export-controlled information, or sensitive personal data into Claude Chat.

## Recap

Claude Chat is best when you want to think, write, analyze, and iterate with Claude. It can follow multi-step flows and use approved tools, but it still needs clear context, framed source material, practical specification, careful data choices, and human review. Know how limits and monthly spending approvals work, use projects, connectors, and skills only where approved, verify important outputs, and choose another Claude product when the work needs autonomous file/tool execution, coding, or visual design depth.

## Quiz Handoff

Complete the quiz after reading this module. The quiz checks practical decisions about context, framing instructions, specification, usage limits, data protection, projects, connectors, skills, artifacts, verification, and when to choose another Claude product.
