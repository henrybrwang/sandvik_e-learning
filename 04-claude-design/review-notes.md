# Review Notes: Claude Design

## Status

Draft created: 2026-06-09
Workflow-first rebuild drafted: 2026-06-16
Tool capabilities and content map added: 2026-06-24

## Open Policy Items

- Product availability and research-preview status. The module now states that users apply for Claude Design through the Sandvik service portal order form (sys_id 27882eb6..., the shared Claude order form) and that requests are reviewed and approved before provisioning. Confirm this order route and link before publishing.
- Approved Sandvik brand assets, design systems, templates, colors, typography, imagery, and logo rules.
- Third-party asset and IP rules.
- External sharing and publication rules.
- Accessibility standard and review process.
- Screenshot and internal-system image rules.
- Approved export formats, internal sharing settings, and storage locations.
- Final intranet form link, cost-approver workflow details, monthly spending-limit visibility, and expected response time.
- Product-feature behavior of design systems, templates, projects, mark up, and sharing. The 2026-06-24 capabilities content is drawn from product screenshots and must be verified against an official Claude Design source before publishing.
- Five product screenshots are now embedded in both the rendered design and the SCORM package (added 2026-06-24). Source images live in `04-claude-design/assets/` and were copied, renamed, into both build `assets/` folders. Confirm Brand approves embedding live product UI before publishing.
- The rendered build (`.dc.html` / SCORM `index.html`) is now richer than the `claude-design.module.json` content map: the Getting started and How Design works sections, the thickened capability tables, and the rebuilt scenario (worked brief + one-pager mockup) live in the rendered build only. This matches the established pattern (the Chat module's rendered build also exceeds its JSON map). The content map is kept in sync for the quiz and the core content; treat the `.dc.html` as authoritative for the rendered module.

## Review Log

| Date | Reviewer | Area | Status | Notes |
| --- | --- | --- | --- | --- |
| 2026-06-09 | Program draft | Initial content | Draft | Needs Sandvik Brand, Legal, and product availability review. |
| 2026-06-16 | Program draft | Sandvik intranet context | Draft | Added Claude Enterprise positioning and usage-cost context for Claude Design. |
| 2026-06-16 | Program draft | Workflow-first rebuild | Draft | Rebuilt module around choose, prepare, brief, explore, refine, review, export/share, and handoff workflow. Quiz and portal copy updated to match. |
| 2026-06-24 | Program draft | Tool capabilities | Draft | Added a Tool Capabilities section for design systems, templates, projects, mark up, and sharing, drawn from product screenshots. Needs official-source verification of feature behavior. |

## Change Log

| Date | Change | Owner |
| --- | --- | --- |
| 2026-06-09 | Initial module, portal copy, and quiz bank created. | Program owner |
| 2026-06-16 | Added Sandvik intranet launch and usage-cost context. | Program owner |
| 2026-06-16 | Rebuilt Claude Design module as a practical visual workflow; replaced quiz with scenario-based questions; updated portal copy. | Program owner |
| 2026-06-24 | Added Tool Capabilities section (design systems, templates, projects, mark up, sharing); refreshed three quiz items to cover the features; updated portal copy; created claude-design.module.json content map and module-content folder. | Program owner |
| 2026-06-24 | Built the rendered design (claude-design-final-versions/Claude Design/Claude Design Module.dc.html, based on the Code shell) and the wired SCORM package (scorm-final-versions/claude-design/ + claude-design-scorm.zip). Open in a browser/Claude Design to confirm rendering before LMS upload. | Program owner |
| 2026-06-24 | Added five product screenshots as figures (with alt text and captions) in both the .dc.html and SCORM index.html: products sidebar (journey context), add-design-system modal and start-with-context (Design systems), start screen (Templates), toolbar (Mark up). | Program owner |
| 2026-06-24 | Committed the five screenshot PNGs into both build assets/ folders (from 04-claude-design/assets/) and re-zipped the SCORM package. All image references resolve. | Program owner |
| 2026-06-24 | Corrected the "Projects" concept: in Claude Design a project IS the generated output, not a Chat-style workspace. Removed the Projects capability page; renamed "Mark up" to "Editing the output" (output is a project, a starting point to adjust and share, never the finished product); added a new "Sharing" capability page with the Share-link and Export screenshots. Fixed stray workspace-style "project" references in module.md, the content map, and the rendered build. Still four capability pages: Design systems, Templates, Editing the output, Sharing. | Program owner |
| 2026-06-24 | Rebalanced the Journey context layout: the sidebar screenshot now sits in a two-column block (image left, a short "Finding Claude Design" explanation right) instead of a narrow figure with empty space beside it. Collapses to one column under 900px. | Program owner |
| 2026-06-24 | Reframed availability from "off by default / admin-enabled" to the Sandvik apply route: users order Claude Design via the service portal order form (shared Claude order form, sys_id 27882eb6...). Added the order link to the tool-fit box and the governance Approved-use row; updated journey context, governance intro, module.md, the content map, and portal-copy prerequisites to match. | Program owner |
| 2026-06-24 | Quality pass against the polished Chat/Cowork modules. Fixed two bugs (risks footnote Code-ism "what the code does"; Mark up "Show tweaks" vs the screenshot's "Hide tweaks"). Added two sections (Getting started; How Design works) bringing the rendered module to 15 sections. Rebuilt the Practical scenario with a worked visual brief, a one-pager artifact mockup, and a sample-data caution. Thickened Templates (table), Mark up (toolbar action list), and Projects (project-contents table + Private-visibility warning). Rebalanced the two Design-systems screenshots side by side. Governance: added a Pending-approval card and de-duplicated the "Sharing or publishing" row label. Swapped one quiz item to test product fit (rendered quiz, content map, and quiz.yaml q09; quiz version 0.3). Regenerated the SCORM package. | Program owner |
| 2026-06-24 | Synced stale capability naming left over from the Projects/Mark up rename. Updated five spots that still read "design systems, templates, projects and mark up" to "editing the output and sharing": portal-copy.md long description, and the "What this module is about" box and "You can now" recap in both the rendered .dc.html and the SCORM index.html. Rebuilt claude-design-scorm.zip. | Program owner |
| 2026-06-24 | Aligned quiz.yaml to the five questions served in the built module (bank 5, serve 5, randomize off), renumbered to design-q01..q05 in build order with matching answers and feedback. | Program owner |
