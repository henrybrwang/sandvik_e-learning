# Claude Chat

Estimated duration: 35-45 minutes  
Completion: scored quiz  
Audience: Sandvik users ordering Claude Chat

> Claude can help accelerate work, but users remain responsible for what they enter, approve, share, and publish. Follow Sandvik policy, protect sensitive information, and review outputs before relying on them.

## Overview And Audience

Claude Chat is the conversational Claude experience. It is suitable for work where you ask questions, draft text, analyze information, summarize content, translate, brainstorm, compare options, or create reusable outputs such as documents and simpler visualizations.

This module is for users who need Claude Chat as a daily work partner. It explains when Chat is the right Claude product, how to give it useful context, how approved tools and connectors can extend a conversation, how Claude-specific features such as files, connectors, projects, skills, and artifacts work, and how to review outputs before using them.

Claude Chat contains the foundational features of Claude. It is not the same as Claude Cowork, Claude Code, Claude Design, which are other Claude products. If the work needs desktop actions, work with code, visual design depth, another Claude module might may be a better fit.

## What This Module Adds

The AI Fluency foundation already covers the general rules of safe AI use: use approved tools, protect information, give useful context, iterate, and check confident answers before acting on them.

It also introduces creating agents: small AI tools you set up for a recurring job. An agent has a role, instructions, and data sources. You build it once so it can be reused, and sometimes shared, under the right governance rules.

Agents are useful because they do more than answer one prompt. They can follow steps, use available context or tools, bring information back, and continue from there. For example, a morning brief agent might check recent mail and meeting context, identify what needs attention, and summarize it for you. Think of it as prompts that can take turns multiple turns to reach the answer.

Claude uses the same ideas with heavy emphasis on connecting your chats to your relevant data sources and saving your ways of working. This is done by customizations in the form of connectors and skills. Claude can use them during the chat to gather context and continue the task. That is what this module means by agentic or tool-assisted chat: not a separate agent you have built, but Claude working through multiple steps inside the conversation.

## Learning Objectives

After this module, users should be able to:

- Use the features within Claude Chat to get better context into your prompts
- Use files, connectors, projects, skills, and artifacts responsibly where approved.
- Manage usage and cost by scoping context, tool use, and long conversations deliberately.
- Verify and share outputs safely, with Sandvik policy and human accountability in mind.

## When To Use Claude Chat

Use Claude Chat when:

- You are still thinking through a problem and want an interactive thought partner.
- You need a first draft, summary, translation, comparison, checklist, or structured analysis.
- You want to upload or paste selected context and ask questions about it.
- You want text or an artifact you can inspect, edit, and reuse.
- You want Claude to use approved chat tools or connectors as part of a controlled conversation.

Use a different Claude product or tool when:

- The work is a clear deliverable that spans many files, browser steps, desktop files, or desktop actions: consider Claude Cowork.
- The work requires reading and changing a codebase, running tests, or using development tools: consider Claude Code.
- The main output is visual exploration, prototypes, slides, or design concepts: consider Claude Design.

## Agentic Chat

Claude works mainly through an agentic multi-step flow where it can plan, create a checklist, and then cross out the items one by one. It manages the work process within the chat, and you can follow its steps:

For example, you might write:
Help me prepare a one-page project update. First make a plan, then create a checklist, then work through each item one by one. Mark each item as done when it is complete, and stop to ask me if information is missing.

Claude might then create a checklist such as:
[ ] Clarify audience
[ ] Identify key messages
[ ] Draft update
[ ] Check risks and assumptions
[ ] Shorten for leadership
[ ] Prepare final version

As the conversation continues, Claude works through the list and updates it. It is agentic because Claude is keeping track of progress, and adapting based on your feedback. You can also ask Claude to come up with a plan and read through it yourself before confirming the workflow.

## Agentic Tool use

Claude can also make use of Sandvik approved tools. This can be to bring new context back into the chat, and adapt based on what it finds.

A simple tool-assisted chat flow looks like this:

1. You ask Claude to prepare a daily summary from your emails.
2. Claude identifies that context from your email inbox is required to fulfill your request.
3. Claude uses a Sandvik approved email connector to access your permitted data.
4. The connector returns email contents.
5. Claude uses the returned email context to draft the daily summary.
6. You review the included sources, flagged assumptions, policy considerations, and the final summary before sharing or acting on it.

That is agentic chat: user goal, approved tool use, returned context, Claude output, and human review. You remain responsible for deciding whether the tool should be used, if the context is appropriate, and whether the output is reliable enough to act on.

## The Claude Chat Interacts With Context

Claude Chat can use context in several different ways. Think of the features below as a context stack: each one changes what Claude can see, retrieve, reuse, or produce.

### 1. Files: Context You Attach

Files let Claude work with material you provide, such as a policy draft, report, spreadsheet, meeting notes, or specification. Claude can summarize, compare, extract, rewrite, and answer questions about the content.

Claude can work with long documents, including documents that are hundreds of pages, as long as the material fits within the available context and is organized enough to follow. More context is not always better. Large or messy uploads can make it harder for Claude to focus on the right evidence and can increase the risk of missed details or confident mistakes.

For large files, tell Claude exactly what to look for, which sections matter most, and what it should ignore. For spreadsheets or datasets, treat Claude as a simpler reasoning and explanation assistant rather than a dedicated data-analysis system. It can help summarize, inspect, and explain patterns, but important calculations, formulas, row counts, and conclusions needs to be checked against the original file or a proper analysis tool.

### 2. Connectors And Tool Access: Context Claude Retrieves

Connectors let Claude connect to approved apps and services. A connector may let Claude retrieve data, search a system, or in some cases take actions in that service.

The practical idea is that connectors bring extra context into Claude Chat without you manually copying everything. Claude uses the connected service through your login and permissions. If you cannot access a file, channel, record, or repository through your own account in the source system, the connector cannot give Claude access to it either.

Examples of using the Microsoft 365 connector (pending approval):

- Find or summarize documents from Sharepoint.
- Get the last weeks meeting transcripts and summarize action points.
- Find available time slots for meeting.

Other example use cases in Sandvik approved connectors:

- HubSpot (CRM system): get me customer data and help me analyse my sales pipeline
- GitHub (code repository): help me understand my code base

Good habits:

- Understand what Claude is trying to access or do through connectors.
- Prefer narrow access and specific prompts.
- Pause before Claude drafts, sends, updates, creates, deletes, or changes anything in another system.
- Watch for prompt injection in retrieved content, especially emails, documents, web pages, tickets, or repositories.

### 3. Projects: Context You Organize

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

### 4. Skills: Reusable Instructions And Resources

Claude skills are reusable packages of instructions, scripts, and resources that Claude can load when relevant to a task. They help Claude perform specialized work more consistently. Claude skills captures the essence of Microsoft Copilot: to save instructions and workflows for reuse.

Skills can support workflows such as:

- Applying approved writing, document or presentation guidelines.
- Following a standard meeting-note or report format.
- Using a team-specific analysis method.
- Saving reusable workflows such as summarizing meeting transcripts or emails

Good habits:

- Check whether a skill is relevant before relying on it.
- Remember that a skill improves the workflow, but it does not make the output automatically correct or approved.

To create a skill in Claude, simply write "/skill-creator". It will then create a skill for you can decide to save it for future use. If you want to share the skill to other people, please refer to the guidance in AI Champion Journey.

## Artifacts And Sharing

Artifacts are standalone outputs such as documents, diagrams, visualizations, code snippets, simple web pages, or interactive components. They are useful when the output is something you will inspect, edit, download, reuse, or share.

For the steering-group update scenario, an artifact might be a visual chart such as a timeline of key project milestones, a flow diagram mapping out process steps, or a risk heatmap summarizing current challenges and priorities. These visualizations help convey complex information quickly, but should always be treated as drafts until they have been checked against the source material and relevant Sandvik policy.

Before sharing a visualization artifact or any downloaded output, check:

- Does it contain sensitive Sandvik information that the receciver should not have access to?
- Could the visualization or its annotations reveal context, attachments, links, or source material that should not be widely shared?
- Have you validated the information in the output?

## Work Efficiently And Manage Usage

Claude has two practical kinds of limits to understand:

- Usage limits control how much you can use Claude over time.
- Length or context limits control how much material Claude can work with in one conversation.

For relevant paid and seat-based plans, Claude may show five-hour session limits, weekly limits, and usage information in Settings > Usage. Sandvik users should expect normal plan limits, including five-hour session limits and weekly limits.

Usage is not just a count of messages. It can be affected by:

- The length of your conversation.
- The size and number of files, project materials, or artifacts Claude uses.
- The model, effort, or thinking settings available to you.
- Tool use, web search, research, connectors, and other context-heavy features.
- Reusing long chats instead of starting a focused new conversation.
- The amount of "reasoning" required by the model to reach its conclusion (creating scripts, understanding images, etc)

Practical habits:

- Start a new focused chat when the topic changes.
- Use projects for approved materials you will reference repeatedly instead of re-uploading the same files.
- Use project instructions for stable context such as preferred tone, terminology, or output structure.
- Use approved skills for recurring workflows, formats, or visualizations where Sandvik allows them.
- Reuse and edit an existing artifact when possible instead of regenerating a similar output from scratch.
- Turn off web search, research, or connectors when they are not needed for the task.
- Choose simpler model, effort, or thinking settings for routine work where available and appropriate.

These practices can save setup time and reduce unnecessary context, but they do not remove usage limits, Sandvik cost controls, or the need to review Claude's outputs.

If you reach a usage limit, Claude may stop accepting more work until the limit resets, or it may show options depending on your plan and organization settings. For Sandvik users, the practical rule is:

- Check your usage in Settings > Usage if available.
- Wait for the relevant limit to reset when the work can wait.
- If you need more capacity for business work, use the intranet form to request a higher monthly usage or spending limit. 
- Expect the higher monthly spending limit to require approval from your cost approver.
- Keep in mind that any usage beyond the standard plan limits is billed on a pay-as-you-go basis to your cost center. Note that costs for usage exceeding session limits can rise quickly.
- Do not move Sandvik work into private accounts or unapproved tools to avoid limits.

The monthly spending limit should be visible in your Claude account.

## Common Risks And Mistakes

- Not exploring options to add context. Don't underestimate how much Claude can understand about your situation and thereby give you better answers.
- Not managing context correctly (continuing the same chat conversation for too long)
- Treating a fluent answer as verified fact.
- Sharing artifacts or downloaded outputs without checking what they expose.
- Using private accounts or unapproved tools to avoid usage limits.
- Forgetting that human users remain accountable for outputs.

## Recap

Claude Chat is best when you want to think, write, analyze, and iterate with Claude in a conversation. It can support agentic or tool-assisted chat when Claude works through steps, uses approved tools or connectors, brings back context, and continues from there.

The practical pattern is simple: choose Chat for the right kind of work, give clear context and boundaries, use the Claude Chat context features deliberately, manage usage and cost, treat artifacts as drafts, verify important outputs, and follow Sandvik policy before sharing or relying on the result.

## Quiz Handoff

Complete the quiz after reading this module. The quiz checks practical decisions about product choice, context, built agents versus agentic chat, connector use, files, projects, skills, artifacts, usage limits, verification, sharing, and Sandvik accountability.
