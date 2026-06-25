# Claude Design

Estimated duration: 20-30 minutes  
Completion: scored quiz  
Audience: Sandvik users ordering Claude Design

> Claude can help accelerate work, but users remain responsible for what they enter, approve, share, and publish. Follow Sandvik policy, protect sensitive information, and review outputs before relying on them.

## Overview And Audience

Claude Design is for creating visual work with Claude, such as design directions, prototypes, slides, one-pagers, layouts, graphics, and shareable visual concepts. You can start from a rough idea, source material, approved assets, or a design system, then refine the result through feedback until it is ready for human review.

As of the 2026-06-16 source check, Anthropic describes Claude Design as a research-preview product for Claude Pro, Max, Team, and Enterprise subscribers. For Enterprise organizations, Anthropic says Claude Design is off by default and must be enabled by an administrator. Sandvik availability, settings, approved inputs, export routes, and review rules must be confirmed before this module is published.

At Sandvik, Claude Design is one of the selectable tools under the Claude Enterprise license. You apply for it through the Sandvik service portal order form, the same order form used for the other Claude tools, by selecting Claude Design among the tools you need. Your request is reviewed and approved, and the license is provisioned with the cost assigned to your cost center. The intranet launch context describes Claude Design as a visual design agent for creating and refining designs, layouts, and graphics through chat.

This module is for users who need Claude to help explore, draft, or refine visual outputs while following Sandvik brand, legal, accessibility, information protection, and review expectations.

## Learning Objectives

After this module, users should be able to:

- Decide when Claude Design is the right product.
- Prepare approved source material, assets, and constraints before designing.
- Write a clear visual brief.
- Explore, compare, and refine design directions without treating them as final.
- Review outputs for brand, accessibility, factual accuracy, IP risk, sensitive information, and audience fit.
- Export, share, hand off, and monitor usage through approved routes.

## When To Use Claude Design

Use Claude Design when the main output is visual and reviewable. Good fits include:

- Exploring several visual directions before choosing one.
- Creating an internal one-pager, slide concept, layout, or visual explanation.
- Creating a prototype concept before investing in production implementation.
- Preparing a draft that a designer, Brand, Legal, or business owner can review.

Use another Claude product when:

- The task is mainly text, analysis, or discussion: use Claude Chat.
- The task is a multi-step deliverable across files or desktop tools: use Claude Cowork.
- The task requires production code, repository changes, tests, or pull requests: use Claude Code.

Do not use Claude Design to bypass review. A polished generated design is still a draft until the right owner approves it.

## Claude Design Workflow

### 1. Choose The Fit And Outcome

Start by naming the deliverable and the decision it should support. A design exploration for a meeting is different from a prototype that may later become software, and both are different from external-facing campaign material.

Before designing, identify the audience, intended action, internal or external sharing status, approved sources, required reviewers, and target format.

If the answers are unclear, use Claude Chat first to clarify the message, audience, and source material before moving into visual work.

### 2. Prepare Sources And Assets

Visual work can expose information quickly. Before prompting, prepare the smallest approved source set that can support the design.

Approved-source and asset checklist:

- Use approved Sandvik templates, brand assets, imagery, colors, typography, and product names where available.
- Remove unrelated files, personal data, confidential figures, customer names, supplier details, and screenshots Claude does not need.
- Replace missing logos, screenshots, customer names, or visual assets with clear placeholders.
- Confirm that charts, numbers, dates, claims, and third-party material are sourced and allowed.
- Track source material so reviewers can verify the output.

If an approved asset is missing, do not ask Claude to invent it. Ask Claude to mark it clearly:

```text
Do not invent Sandvik logos, product screenshots, customer logos, certification marks, or brand assets.
Follow the Sandvik Design System for brand. Use [SCREENSHOT PLACEHOLDER] where an approved screenshot is missing.
```

Where Sandvik provides them, start from an approved design system and a template rather than from a blank page. A design system teaches Claude an approved visual language, so generated work follows Sandvik brand instead of an invented one. A template gives the output a consistent structure. Both are covered in Tool Capabilities below.

### 3. Write A Visual Brief

A good design prompt is a brief, not a vibe request. It gives Claude enough context to make design choices while keeping policy boundaries visible.

Visual brief template:

```text
Goal:
Audience:
Use case:
Source material:
Format:
Brand constraints:
Accessibility needs:
Do not use:
Review required:
Output needed:
```

Example:

```text
Goal: Create a draft one-page internal concept sheet.
Audience: Sandvik managers.
Use case: Explain a proposed onboarding workflow before a review meeting.
Source material: Use only the notes pasted below.
Format: One-page layout with sections and review notes.
Brand constraints: Use the Sandvik Design System.
Accessibility needs: Clear headings, readable contrast, no meaning by color alone.
Do not use: External images, invented metrics, real employee names, or customer details.
Review required: Brand, process owner, and Legal if shared outside Sandvik.
Output needed: Editable draft structure plus a list of facts to verify.
```

### 4. Explore Directions, Then Choose

Claude Design is useful for exploring options quickly. Ask for a small number of distinct directions, then choose one to refine. This keeps exploration useful without burning unnecessary usage.

Good exploration prompt:

```text
Create three distinct visual directions for this internal one-pager.
For each direction, describe the layout, intended audience effect, strengths, risks, and what source facts still need verification.
Do not finalize the design yet.
```

Choose based on the business goal, not only appearance. A strong leadership concept may be too dense for frontline users, and a visually striking prototype may still fail if the flow is unclear or inaccessible.

### 5. Refine With Specific Feedback

Refinement works best when feedback is specific. Instead of "make it better," name the problem and the desired change.

Useful refinement prompts:

- "Make the hierarchy clearer: the action users must take should be visible first."
- "Simplify the wording for global English readers."
- "Reduce the number of sections and keep only decision-relevant information."
- "Show the same workflow as a three-step process and a swimlane option."
- "Mark all unsupported numbers as [CHECK REQUIRED]."
- "Keep the layout, but replace any invented imagery with approved assets from the Sandvik Design System."

Claude Design also lets you give feedback directly on the design. Use Mark up to point at a specific element and describe the change you want, instead of describing the whole layout again in text. Comments and direct edits work the same way. These tools make refinement precise, but they do not approve the result: a marked-up draft is still a draft. Use fine-grained editing, mark up, comments, design-system support, and export options only within Sandvik-approved settings. Product features do not replace Sandvik policy.

### 6. Review Before Sharing

Generated visual work can look finished before it is ready. Treat every output as a draft until approved.

Design review checklist:

- Purpose: The design supports the intended audience and decision.
- Source accuracy: Facts, numbers, dates, names, and claims match approved source material.
- Brand: Logos, colors, typography, templates, product names, and imagery follow approved Sandvik guidance or are marked as placeholders.
- Accessibility: Headings are clear, text is readable, contrast is sufficient, and meaning does not rely on color alone.
- Data protection: Screenshots, diagrams, labels, charts, and metadata do not expose unnecessary personal, confidential, customer, supplier, or restricted information.
- IP and legal: Third-party images, icons, logos, references, and generated media are allowed or removed.
- Status and handoff: The draft or approval status, sharing limits, and any production assumptions are documented.

For external use, do not publish generated Sandvik-branded material without Brand and Legal review according to Sandvik rules.

### 7. Export, Share, Or Handoff

Designs are shareable. Claude Design can produce a share link and present the result, support sharing inside an organization, export to formats such as PDF, PPTX, HTML, or other tools, and package design work for handoff to Claude Code. Sharing is fast, so review before you share, not after. Use only the routes Sandvik approves.

Export, sharing, and handoff checklist:

- Use approved export formats and Sandvik storage locations.
- Confirm who can view, comment, or edit before sharing a link.
- Remove unnecessary sensitive information and check for metadata or hidden content.
- Label drafts clearly and include source facts reviewers should verify.
- State what is design intent, what is approved, and what still needs review.

If the design becomes production software, hand off to Claude Code or a development team. Include purpose, audience, selected concept, approved assets, source data, accessibility notes, open brand or legal questions, and implementation notes. A prototype is not production-ready software.

### 8. Monitor Usage And Cost

Visual exploration can involve many iterations, generated variants, large files, exports, and repeated refinement. At Sandvik, Claude Design usage is direct and consumption-based: there are no five-hour session or weekly limits, but every action consumes tokens billed pay as you go to the user's cost center, so costs can rise quickly. Each new license starts with a default limit of $25 per user per month.

Good usage habits:

- Start with a clear brief.
- Explore a limited number of directions, then choose before deep refinement.
- Reuse approved templates and design systems, and avoid uploading unnecessary files.
- Refine and reuse an existing project instead of regenerating a new one from scratch.
- Request a higher monthly usage or spending limit through the intranet form when business needs justify it.

Higher monthly usage or spending limits require cost-approver approval. The monthly spending limit should be visible in the user's Claude account.

## Tool Capabilities

Claude Design has features that support the workflow above. Each is a Claude capability, not a Sandvik approval. Use them only within approved settings, and keep the review step in place.

### Design Systems

A design system teaches Claude your visual language, so generated work follows approved brand rather than an invented one. The screenshots show a "Sandvik Design System" selected for new designs. A design system can be created by connecting Figma or GitHub, by uploading slides and assets, or by building from existing React components with Claude Code, which gives the highest fidelity.

For Sandvik work, the Sandvik Design System is your default. Select it for every new design so the output follows Sandvik's branding from the start. It is the strongest brand-control lever in Claude Design, and it does not replace Brand review.

Good habit: select the approved design system at the start, and still run the brand review. A design system improves consistency, but it does not replace Brand approval.

### Templates

A template gives a new design a consistent starting structure and format. The screenshots show a Template selector that defaults to "None". Starting from an approved template keeps layouts predictable and reduces rework.

Claude Design offers five standard templates:

- Prototype: a clickable concept that shows the flow and interaction of a screen before anything is built.
- Slides: a presentation deck for a concept or an update.
- Document: a text-led page such as a one-pager, brief, or report.
- Wireframe: a low-fidelity layout that focuses on structure, not finished visuals.
- Animation: a short motion or animated concept.

Good habit: start from an approved template where one exists, instead of a blank page, and confirm the template itself is approved for the audience and use.

### Editing The Output

Each design Claude generates is a project. The first version is never the finished product. It is a starting point you adjust, and one you can share with other people. Once a design is generated, the toolbar in the top right of Claude Design gives you the tools to refine it: mark up an element to describe a change, leave comments, edit the content directly, toggle tweaks, or present the design full screen.

Editing makes refinement precise, but it does not approve anything. A project is still a draft until the right owner signs off.

Good habit: use mark up to make feedback specific, then run the full review before sharing.

### Sharing

Designs are shareable. Claude Design can create a share link, present the result, and export to other formats. Sharing is fast, which makes the review step more important, not less.

Before sharing, confirm who can view, comment, or edit, remove unnecessary sensitive information, label the draft or approval status, and use only Sandvik-approved sharing and export routes. For anything external or Sandvik-branded, follow the `[EXTERNAL SHARING PLACEHOLDER]` and `[EXPORT PLACEHOLDER]` rules and get Brand and Legal review.

Good habit: review first, then share through an approved route. Never share a generated draft as if it were approved.

## Sandvik Policy Placeholders

The following must be finalized before publishing:

- `[IP PLACEHOLDER]` Use of third-party images, icons, references, style examples, and generated media.
- `[EXTERNAL SHARING PLACEHOLDER]` Rules for publishing or sharing visual outputs outside Sandvik.
- `[ACCESSIBILITY PLACEHOLDER]` Accessibility standard and review process.
- `[SCREENSHOT PLACEHOLDER]` Rules for screenshots of internal systems or data.
- `[EXPORT PLACEHOLDER]` Approved export formats, internal sharing settings, and storage locations.
- `[COST PLACEHOLDER]` Final intranet form link, cost-approver workflow details, monthly spending-limit visibility, and expected response time.

Default until approved: treat generated designs as internal drafts and do not publish externally without Brand and Legal review.

## Practical Scenarios

### Internal One-Pager

```text
Create an internal one-page draft from the notes below.
Audience: global business users.
Purpose: explain what changes, why it matters, what users need to do, and where to get help.
Use only the supplied notes. Mark unsupported claims as [CHECK REQUIRED].
Use the Sandvik Design System for brand.
Return a draft layout plus a short review checklist for the process owner.
```

### Slide Concept

```text
Create a five-slide concept deck.
Audience: regional managers.
Use simple layouts, clear headings, and speaker notes.
Do not use external images or invented numbers.
Include a final slide listing facts, figures, and claims that need verification before presentation.
```

### Clickable Prototype Concept

```text
Create a clickable prototype concept for an internal request form.
Focus on user flow, field grouping, required information, and review states.
Do not create production code.
Use [SCREENSHOT PLACEHOLDER] instead of real system screenshots.
Include handoff notes for a development team: assumptions, open questions, accessibility concerns, and data fields that need owner approval.
```

### Visual Explanation From Source Material

```text
Turn the source workflow into a visual explanation for non-technical users.
Use clear labels, minimal text, and no data classified i4 (Secret).
Show two options: a step-by-step process and a swimlane view.
Flag any terms that need Sandvik-approved wording.
```

## Common Risks And Mistakes

- Starting from a vague "make it look nice" request.
- Uploading too many files, screenshots, or examples without checking sensitivity.
- Letting Claude invent logos, product screenshots, customer names, metrics, or certification marks.
- Treating generated visual work as approved final material or production-ready software.
- Publishing Sandvik-branded content externally without Brand and Legal review.
- Using third-party material, ignoring accessibility, or exporting through unapproved routes.
- Iterating many variants without monitoring usage and cost.

## Recap

Claude Design is strongest as a visual workflow: choose the fit, prepare approved sources and assets, write a clear brief, explore a few directions, refine with specific feedback, review carefully, and only then export, share, or hand off through approved Sandvik routes. Use the capabilities to support that workflow: an approved design system and template keep work on brand, and you refine each project with mark up before review. Keep generated designs visibly draft until reviewed, protect sensitive information, use placeholders, and monitor usage during repeated exploration.

## Quiz Handoff

Complete the quiz after reading this module. The quiz checks product fit, visual briefs, approved sources and assets, the Claude Design capabilities (design systems, templates, editing the output, and sharing), design iteration, review decisions, accessibility, IP risk, screenshots, sharing, exports, usage cost, and handoff.
