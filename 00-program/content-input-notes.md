# Claude Training Content Input Notes

Status: working notes  
Created: 2026-06-14  
Updated: 2026-06-17
Purpose: capture the initial content direction before drafting or revising modules.

## Training Purpose

This project supports mandatory Sandvik e-learning for people ordering access to Claude. The training should help users understand what Claude includes, what it is useful for, how to work with it effectively, and what responsibilities apply before access is provisioned.

The current direction is that the Claude modules should be aimed at users who are ready for slightly more advanced guidance than a generic AI awareness course. The content should still be practical, accessible, and tied to the ordering flow.

## Manager Input

The manager's requested content areas, translated into working points:

- Include prompt engineering basics, especially how to give Claude useful goals, context, constraints, output formats, and verification instructions.
- Explain which Claude model is suitable for which type of work. This needs a current source check before publishing.
- Include policy guidance and remind users not to share sensitive information unnecessarily.
- Cover personal data and sensitive personal data, including personally identifiable information (PII), according to approved Sandvik guidance.
- Focus strongly on what the service actually contains and what Claude is good at.
- Include bonus material on what can be done through the M365 connector and the GitHub connector.
- Make room for additional connectors later as Sandvik adds more approved integrations.
- Note that the connector setup is not fully implemented yet, so connector details need source checks and Sandvik implementation confirmation.
- Explain usage caps and the escalation path: users should know they can request a higher monthly spending limit through the intranet form, with cost-approver approval.

## Sandvik Intranet Context From 2026-06-16

Sandvik published an intranet post titled "Introducing Claude Enterprise" on 2026-06-16. Treat this as current Sandvik context for ordering, launch timing, and cost model until a newer internal source replaces it.

Key points to carry into the training:

- Claude Enterprise is planned for launch on 2026-06-30, but the launch date may be delayed.
- A pre-order form is available before launch; submitting a request reserves a license but does not grant access before 2026-06-30.
- Claude Enterprise is Sandvik approved for writing, research, analysis, and coding.
- It complements GitHub Copilot and Microsoft 365 Copilot.
- Primary audience: developers and heavy users who need more advanced coding, automation, complex analysis, large-dataset, desktop automation, or file-manipulation capabilities.
- One license can cover Claude Chat, Claude Code, Claude Cowork, and Claude Design at the same base cost, regardless of how many of the four tools the user selects.
- Claude Cowork is described as an early preview.
- A future direction is one AI assistant license per user per use case, such as Microsoft 365 Copilot versus Claude Chat for office use, or GitHub Copilot versus Claude Code for development. This is not enforced yet.
- Pricing is consumption-based: 350 SEK per user/month as the base fee, plus usage costs depending on use.
- Full cost is charged to the user's cost center with no markup.
- Usage is direct and consumption-based, with no five-hour session or weekly limits; usage is pay as you go, charged to the user's cost center.
- Further usage is pay as you go.
- Users who want to raise their usage or spending limit must use an intranet form and receive cost-approver approval.
- The spending limit is monthly and should be visible in the user's Claude account.

## Content That Needs Sandvik Confirmation

These items should not be treated as final policy or final product behavior until confirmed:

- Which Claude products and models Sandvik will offer in the ordering portal.
- Which model picker options users will actually see.
- Which data classes may be entered into Claude.
- Rules for personal data, sensitive personal data, customer data, employee data, supplier data, and confidential business information.
- Rules for secrets, credentials, API keys, certificates, private keys, and source code.
- Which connectors are approved at launch.
- Whether the M365 connector is enabled, which M365 sources it can access, and how permissions are inherited.
- Whether the GitHub connector is enabled, which repositories it can access, and what actions are allowed.
- Whether memory, projects, artifacts, file uploads, sharing, and external links are enabled or restricted.
- Exact intranet form link for raising monthly usage or spending limits, cost-approver workflow details, and expected response time.
- Completion rules in the Sandvik portal or LMS.

## Notes From Old Assets

### AI Fluency Journey Source: `old-assets/Sandvik/AI Fluency Journey.docx`

Useful program context:

- The AI Fluency foundation journey contains five courses: Introduction: Why AI Fluency; Getting Started: Safe & Smart Use; Copilot Basic; Build Your Own Agent; Keep Going.
- The foundation already teaches why AI fluency matters, safe and responsible AI use, approved-tool thinking, basic prompting habits, everyday Copilot Chat use cases, hallucination/verification, first-agent building, community participation, and how tool modules work.
- The old course copy describes tool modules as focused introductions that appear based on tool access or license. Each tool module should explain what is different about that tool, when to use it, and how to access it.
- The "Keep Going" course positions tool modules as going wider, while the AI Champion path goes deeper into building AI tools for others.
- The AI Champion foundation contains Welcome AI Champion, Building for Others, and Multiplier Mindset. It covers the Champion role, CoE/community support, governance for shared agents, publishing paths, data classification checks, org-wide review, cost responsibility, maintenance, and multiplier behavior.

### AI Journey Map: `old-assets/Sandvik/AI e-learnings.png`

Useful program context:

- The map shows four tracks: AI Fluency Journey, AI Champion Journey, Developer Journey, and Leader Journey.
- The maturity model moves from Unaware (0), to Use (1), to Embed (2), to Normalize (3).
- Claude Chat appears as a Tool Module - Fluency item.
- Claude Code appears as a Tool Modules - Builder item in the Developer Journey.
- Claude Cowork and Design appear in Champion and Leader tool-module areas, depending on audience and use case.
- The map labels Fluency and Champion journeys as created, with Developer and Leader journeys to complete with additional material.

Implications for Claude access modules:

- Do not turn the Claude Chat module into a general AI fluency course. Keep it tool-specific, practical, and tied to ordering/provisioning.
- Avoid over-teaching broad prompt engineering, responsible AI basics, hallucination basics, or what an AI agent is if those concepts are already handled in the AI Fluency foundation. Include short recaps only where a standalone module requires them.
- Keep the "red thread" for Claude Chat focused on: what is different about Claude Chat, when to use Chat, why context matters specifically in Claude, how agentic tool use works, how connectors bring in approved work context, and how to use Claude-specific features responsibly.
- If general concepts are needed, explain them briefly only to support Claude usage.
- Treat the journey map and Word document as planning context, not final Sandvik-wide policy or product-availability sources.
- If the Claude module mentions support paths, align with the old-assets pattern but mark final routes as placeholders until confirmed: AI Fluency community, Data & AI SharePoint, Service Portal/IT Service Desk, AI Champions, and Agentic Automation CoE.

### Module 1 Coherence Implications

The current Claude Chat module has the right ingredients but can become more coherent if it behaves more explicitly like a tool module:

- Open by saying what Claude Chat adds beyond the foundation: a Claude-specific conversational workspace, files, projects, memory, connectors, skills, artifacts, and usage/cost behavior.
- Keep prompt guidance short and practical. The foundation already teaches context, specificity, iteration, and checking output.
- Reframe the feature catalog around one idea: "Claude is useful when you give it the right context, and these features are different ways context enters, stays organized, is retrieved, or becomes an output."
- Place agentic AI as the bridge between context and tools, not as a separate theory lesson.
- Use one recurring Sandvik work scenario across examples, such as preparing a steering-group update from approved notes and connector context, so the module feels like a guided workflow rather than separate mini-lessons.
- Move usage/cost awareness near the end under "working efficiently" so it does not interrupt the context/tool story.
- Keep policy reminders embedded in user decisions: "Can I upload this?", "Can this connector access it?", "Can I share this artifact?", "What do I need to verify?"

### Sandvik Organization Context: `old-assets/Personal/Quick Sandvik org levels.png`

Useful program context:

- Sandvik examples may need to work across Group, Business Areas, and Divisions/Brands.
- Group-level functions include areas such as IT, Finance, HR, and Communications.
- Business Areas shown include Machining, Mining, Rock Processing, and Intelligent Manufacturing.
- Division/brand examples include Coromant, Seco Tools, Walter Tools, Dormer Pramet, Underground Drilling, Ground Support, Surface Drilling, and Rotary Drilling.
- Different organizational layers may have different functions, terminology, systems, and approval paths.

Implications for examples and scenarios:

- Prefer examples that work across Sandvik rather than assuming one Business Area or division.
- When a scenario needs specificity, name the organizational level, such as "Group HR", "a Business Area finance team", or "a division marketing team".
- Be careful with connector examples: access and data visibility may differ by Group, Business Area, division, team, and user permissions.
- Avoid implying that one division's workflow, terminology, or approved tools automatically apply to all of Sandvik.
- Treat the org-level image as orientation for scenario design, not as an authoritative org chart.

### Echandia PPT: `old-assets/Personal/Agentic AI usage & Claude.pptx`

Useful content patterns:

- Starts with the message that prompt engineering has changed from prompt hacks toward context, specification, and business judgment.
- Uses practical before/after examples to show why context matters.
- Explains that vague prompts make Claude guess, while specific prompts define source, timeframe, metrics, breakdown, output, and goal.
- Introduces breaking complex work into steps and adding conditional logic for branching scenarios.
- Shows plan mode as a way to let Claude ask clarifying questions when the user does not yet know what to specify.
- Explains agentic AI as tool use across multiple turns: gather data, use tools, and perform actions.
- Walks through Claude Enterprise-style capabilities: connectors, artifacts, Excel, PowerPoint, skills, memory, and projects.
- Repeats best practices: verify outputs, be specific, manage context, and be thoughtful about data sources.
- Includes access guidance and policy reminders: review and verify, own the output, use provisioned tools, avoid sensitive data in non-provisioned tools, and be careful with agent/tool permissions.
- Includes developer-specific guidance around responsibility for agents, evaluations before production use, and sensitive data rules.

Reusable ideas for Sandvik:

- If using a "prompt engineering has changed" idea, keep it brief because foundation fluency courses may already cover general prompting.
- Keep examples close to real work, such as summarizing documents, analyzing customer/account information, preparing emails, or reviewing project material.
- Use connector examples as optional or conditional content until Sandvik confirms the implementation.
- Include prompt injection guidance for emails, documents, repositories, and connector data: treat retrieved content as data, not as instructions.

### B3 SCORM: `old-assets/Personal/index.html`

Useful content patterns:

- The course is structured as short pages with progress dots, save-for-later behavior, knowledge checks, and a final results page.
- It uses a simple three-part learning spine: prompt engineering, context handling, and specification/logic.
- It teaches that modern AI skill is less about "magic words" and more about clear intent, relevant context, review, and iteration.
- The "AI as a colleague with amnesia" framing is effective for explaining why context must be supplied every time.
- It includes practical frameworks for what context to provide: background materials, framing instructions, role and constraints, desired output, and checks.
- It uses "bad prompt" and "better prompt" examples to make abstract guidance concrete.
- It includes conditional logic and decomposition as advanced but still approachable prompt engineering techniques.
- It ends modules with key takeaways and scored knowledge checks.
- It includes confidentiality and verification reminders as part of the learning, not as a separate legal appendix.

Reusable ideas for Sandvik:

- Keep the module experience compact and scenario-based.
- Use repeated patterns: concept, example, decision point, knowledge check.
- Turn policy into practical user decisions, for example "Can I upload this?", "Should I use this connector?", or "What should I verify before sending?"
- Preserve the strong emphasis on context, specification, and human accountability.

## Suggested Initial Content Backbone

This is not yet a final module outline. It is a starting backbone for the Claude access e-learning:

1. Why this training exists: Claude access, mandatory completion, and user responsibility.
2. When to use the specific Claude product being ordered.
3. Why context matters for applying Claude to a specific Sandvik problem.
4. Agentic AI and tool use where relevant to that product.
5. Claude product features such as chat, files, projects, artifacts, memory, connectors, and skills where approved.
6. Choosing the right model or product surface: match task type, complexity, speed, cost/usage, and risk.
7. Responsible use and policy: sensitive information, PII, confidential data, secrets, source material, and review obligations.
8. Usage caps: what a usage cap means, how to request a higher monthly spending limit through the intranet form, and when cost-approver approval is needed.
9. Knowledge check: practical scenarios that test safe and effective decisions.

## Draft Learning Outcomes

After the training, a user should be able to:

- Explain what Claude is intended to help with at Sandvik.
- Choose an appropriate Claude model or product surface for common work types, subject to current Sandvik availability.
- Explain why context is what makes Claude useful for a specific Sandvik problem.
- Decide whether information is appropriate to enter into Claude.
- Recognize when connector access changes the data and permission risk.
- Use M365 and GitHub connector concepts responsibly if those connectors are approved.
- Verify Claude outputs before using them in communication, decisions, documents, or code.
- Explain how consumption-based pay-as-you-go usage and monthly spending-limit approval work.

## Tone And Design Notes

- Keep the tone clear, practical, calm, and direct.
- Separate "Claude can do this" from "Sandvik allows this".
- Avoid hype and unsupported productivity claims.
- Prefer short examples over long theory sections.
- Use official Claude/Anthropic sources for product claims and Sandvik-approved sources for policy claims.
- Build knowledge checks around realistic user decisions, not memorization.
