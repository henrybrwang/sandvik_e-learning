# Claude Training Content Input Notes

Status: working notes  
Created: 2026-06-14  
Updated: 2026-06-16
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
- Users have the normal plan usage limits, including five-hour session limits and weekly limits.
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

### AI Fluency Journey Map: `old-assets/AI e-learnings.png`

Useful program context:

- The Claude Chat module appears to sit inside the broader AI Fluency Journey as a tool module, not as one of the foundation courses.
- The foundation fluency courses already cover general AI introduction, getting started, Copilot basics, building an agent, and continued learning.
- Separate journeys exist for AI Champions, Developers, and Leaders, with their own foundation courses and tool modules.
- Claude Code belongs more naturally in the Developer Journey; Claude Cowork and Design may appear in Champion or Leader tool modules depending on the audience.
- The maturity model shown in the image moves from Unaware, to Use, to Embed, to Normalize.

Implications for Claude access modules:

- Do not turn the Claude Chat module into a general AI fluency course. Keep it tool-specific, practical, and tied to ordering/provisioning.
- Avoid over-teaching broad prompt engineering if that is already handled in the AI Fluency Journey foundation courses.
- Keep the "red thread" for Claude Chat focused on: when to use Chat, why context matters, how agentic tool use works, how connectors bring in approved work context, and how to use Claude-specific features responsibly.
- If general concepts are needed, explain them briefly only to support Claude usage.
- Treat the journey map as planning context, not a final policy or product-availability source.

### Sandvik Organization Context: `old-assets/Quick Sandvik org levels.png`

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

### Echandia PPT: `old-assets/Agentic AI usage & Claude.pptx`

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

### B3 SCORM: `old-assets/index.html`

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
- Explain how normal plan usage limits, pay-as-you-go usage, and monthly spending-limit approval work.

## Tone And Design Notes

- Keep the tone clear, practical, calm, and direct.
- Separate "Claude can do this" from "Sandvik allows this".
- Avoid hype and unsupported productivity claims.
- Prefer short examples over long theory sections.
- Use official Claude/Anthropic sources for product claims and Sandvik-approved sources for policy claims.
- Build knowledge checks around realistic user decisions, not memorization.
