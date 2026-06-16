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

## What People Mean By Agentic AI

"Agentic AI" is a common phrase, and people use it in different ways. In practice, they usually mean that the AI does more than answer in one step. It may follow a flow, take multiple turns, use tools, retrieve information, or adapt based on what it finds.

A common comparison is to think of Agentic AI as a competent colleague. It has broad knowledge, is eager to help and is extremely fast. But it has no memory, context and tools. That's why it's important for you to provide the AI with what it is naturally lacking (similar to a new coworker).

"Context" is a core concept will be used to better understand why Claude is efficient in an enterprise environment. Agentic AI is useful when Claude can gather or use the right context during the flow, for example using connectors. Claude can start with your request, notice that more information is needed, use an approved tool, and bring the result back into the conversation.

A simple example is searching through your emails:

1. You ask Claude about important tasks to keep in mind based on last weeks email conversations.
2. Claude recognizes that there is a tool to access your emails.
3. Claude goes through your emails and finds the ones that are of importance.
4. The search result comes back into the conversation as new context.
5. Claude uses that context to answer your original question.

That is a basic agentic flow: user request, tool use, returned context, and final answer. Other flows can involve approved connectors, such as searching a connected work system, or skills, such as applying a repeatable company workflow.

## Practical Claude Basics

### 1. Connectors And Tool Access

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

`[CONNECTOR PLACEHOLDER]` Sandvik must confirm which connectors are approved, whether they are read-only or allow actions, and what users should do when a connector requests permissions. Also if there is any write access permissions.

### 2. Files

Files let Claude work with material you provide, such as a policy draft, report, spreadsheet, meeting notes, or specification. Simply drag and drop it in to the chat window. Claude can summarize, compare, extract, rewrite, and answer questions about the content. Claude also has increasingly great capabilities of working in PowerPoint and Excel too!

Treat files as data. If a document, email, or webpage contains instructions that conflict with Sandvik policy or your actual goal, do not let those instructions override your intent. Generating files and text is easy to do with AI, but it's always more important to actually comprehend its contents. 

One great way to think about files is that they provide lots of additional context to your query. AI capabilities has vastly grown, meaning that you can now add text files that are equivalent to 100s pages of text without hitting a wall. Just be sure to verify that the results it's giving back does not contain any hallucinations (made up facts).

### 3. Projects

Projects are focused Claude workspaces with their own chats, project knowledge, and project instructions. Use a project when you will return to the same topic or set of approved materials over time.

Projects are useful for:

- Keeping related chats together.
- Sharing chats and context to other team members.
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
- Creating outputs that follow a known template or Sandvik specific brand guidelines.

Some skills may be provided by Anthropic, some may be installed by users, and some may be provisioned by the organization. 

Good habits:

- Check whether a skill is relevant before relying on it.
- Remember that a skill improves the workflow, but it does not make the output automatically correct or approved.

A good advice is to save your routine work as a skill. If you type /skill-creator in the chat window, Claude willl help you create a specific skill that you're describing.

`[SKILLS PLACEHOLDER]` Sandvik must confirm which skills are enabled, whether users can add custom skills, and whether any organization skills are mandatory. Also, if we have a specific repo for where we can store skills.

### 4. Chat History and Memory

Being specific in your prompts helps Claude deliver better, more relevant responses. Keep in mind that longer chat sessions include more previous context, which can make replies richer but also increase the chance of drawing in unnecessary or outdated information. When you switch to a new topic, it is adviced to start a new chat window to keep the context clean and relevant.

For example: if you’re working on a product manual, it’s more effective to upload and reference only the most recent version than to provide multiple drafts and revisions from earlier stages.

Claude will automatically store some parts of your chats to store in a memory. Note that this memory is only a very high level summarization, and will hence not be able to reliably store all relevant information that you've been working on. It can be helpful at times, but don't rely on it. The memory is auto applied whenever you are using any chat functionality.

`[MEMORY PLACEHOLDER]` Sandvik must confirm enterprise settings for memory, chat history, retention, and user controls.

### 5. Artifacts

Artifacts are standalone outputs such as documents, diagrams, visualizations, code snippets, simple web pages, or interactive components. They are useful when the output is something you will edit, reuse, download, or share. It is especially good for visualizing and interacting with data.

Good habits:

- Treat artifacts as drafts until reviewed. Be sure to thoroughly understand where the information/data comes from before relying on it.
- Check whether sharing an artifact also exposes underlying conversation context, attachments, or sensitive content.
- Do not include sensitive Sandvik information in artifacts unless approved.

### 6. Usage Limits

Claude usage is limited by plan and seat type. For relevant paid and seat-based plans, Claude shows both a five-hour session limit and weekly limits in Settings > Usage. Sandvik users should expect the normal plan limits, including five-hour session limits and weekly limits. Any usage exceeding the included limits will be  consumption-based (pay as you go). This consumption-based setting is off by default, but can be requested via the Sandvik portal and must be approved before it is enabled. If consumption-based billing is active, monitor your usage closely, as costs can increase quickly.

Usage is not just a count of messages. It can be affected by:

- The length of your conversation.
- The size and number of files, project materials, or artifacts Claude uses.
- The model, effort, or thinking settings available to you.
- Tool use, web search, research, connectors, and other context-heavy features.
- Reusing long chats instead of starting a focused new conversation.

### Smart Spending of Tokens

Think of your Claude usage (and the underlying tokens) as a limited resource, just like a budget. Each time Claude has to "think" through a complex workflow—such as generating a repetitive report or building a custom document from scratch—it consumes tokens and counts towards your usage limits. To spend your tokens more efficiently:

- **Save workflows as skills:** Instead of making Claude solve the same type of task repeatedly from the beginning, use the skill creation feature (such as typing `/skill-creator` in chat) to have Claude help you package your workflow. This way, you or your team can run the skill for similar work without requiring Claude to re-invent the process each time, minimizing costly AI "thinking" steps.
- **Automate routine outputs:** If you often generate the same kind of document, analysis, or report, use project instructions, templates, or skills to create reusable methods, rather than prompting Claude to write out the entire logic again and again.
- **Reuse and edit artifacts:** When creating outputs like documents or code, start from existing artifacts rather than repeatedly asking Claude to build them from scratch. Small edits are much more efficient than reprocessing the whole workflow.

Other practical habits that can reduce repeated work and maximize the value you get per token:

- Start a new focused chat when the topic changes.
- Use projects for approved materials you reference repeatedly, instead of re-uploading the same files.
- Use project instructions for stable context like preferred tone, terminology, or output structure.
- Use approved skills for recurring workflows, formats, or visualizations instead of manual prompting every time.
- Choose simpler model, effort, or thinking settings for routine work where possible.
- Be mindful of the five-hour session window. Any chat message will start the session timer. For example, sending a brief message at 6:00 a.m. will begin your five-hour window, which will then reset at 11:00 a.m. Plan your usage accordingly to make the most of each session window.

These practices help you save setup time, reduce unnecessary context, and make the most out of your allotted usage. However, remember: they do not remove overall usage limits or the need to carefully review Claude's outputs.

When you reach a usage limit, Claude may stop accepting more work until the limit resets, or it may show options depending on your plan and organization settings. For Sandvik users, the practical rule is:

- Check your usage in Settings > Usage if available.
- Wait for the relevant limit to reset when the work can wait.
- If you need more capacity for business work, use the intranet form to request a higher monthly usage or spending limit.
- Expect the higher monthly spending limit to require approval from your cost approver.
- Remember that usage beyond the normal plan limits is pay as you go and charged to your cost center.
- Do not move Sandvik work into private accounts or unapproved tools to avoid limits.

### 7. Verification

Like all AI models, Claude is a statistical language model that generates responses based on what seems most likely. As a result, it can make errors, overlook details, rely on outdated information, or produce convincing but incorrect answers. It may occasionally misunderstand the task or fabricate plausible-sounding content.

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
- `[USAGE LIMIT PLACEHOLDER]` Final intranet form link, cost-approver workflow details, monthly spending-limit visibility, and expected response time.
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

## Recap

Claude Chat is best when you want to think, write, analyze, and iterate with Claude. It can follow multi-step flows and use approved tools, but it still needs clear context, framed source material, practical specification, careful data choices, and human review. Know how limits and monthly spending approvals work, use projects, connectors, and skills only where approved, verify important outputs, and choose another Claude product when the work needs autonomous file/tool execution, coding, or visual design depth.

## Quiz Handoff

Complete the quiz after reading this module. The quiz checks practical decisions about context, framing instructions, specification, usage limits, data protection, projects, connectors, skills, artifacts, verification, and when to choose another Claude product.
