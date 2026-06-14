# Source Register

Checked on: 2026-06-14

Use official Claude and Anthropic sources as the baseline for product facts. Recheck sources quarterly and before release.

| ID | Source | Official URL | Used For | Notes |
| --- | --- | --- | --- | --- |
| AGENT-001 | Anthropic Building effective agents article | https://www.anthropic.com/engineering/building-effective-agents | Agentic AI framing, workflows versus agents, tool-use explanation | Use only for plain-language concepts in end-user modules; avoid developer implementation detail. |
| ENT-001 | Claude Enterprise plan help article | https://support.claude.com/en/articles/9797531-what-is-the-claude-enterprise-plan | Enterprise security, admin, usage, connectors, and billing context | Recheck before publishing because enterprise packaging and usage terms can change. |
| CHAT-001 | Claude artifacts help article | https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them | Chat and Design artifact concepts, export, sharing, storage, and MCP considerations | Product capabilities may vary by plan and admin settings. |
| CHAT-002 | Claude projects help article | https://support.claude.com/en/articles/9517075-what-are-projects | Projects, project knowledge, and focused workspaces | Use for Chat module context guidance. |
| CHAT-003 | Claude connectors help article | https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities | Connectors, permissions inheritance, tool access concepts, and connector directory | Sandvik must separately approve which connectors are allowed and whether actions are enabled. |
| CHAT-004 | Claude memory and chat search help article | https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context | Memory, chat search, user controls, and retention reminders | Confirm Sandvik enterprise settings before launch. |
| CHAT-005 | Claude usage and length limits help article | https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work | Difference between usage limits and length limits, what affects usage, and what happens at a limit | Recheck before publishing because limits and plan behavior change often. |
| CHAT-006 | Claude usage limit best practices help article | https://support.claude.com/en/articles/9797557-usage-limit-best-practices | Five-hour session limits, weekly limits, usage settings, and practical usage guidance | Sandvik must confirm which usage dashboard and limits users will see. |
| CHAT-007 | Claude skills help article | https://support.claude.com/en/articles/12512176-what-are-skills | Skills definition, skill types, and how Claude loads skills | Sandvik must confirm enabled, provisioned, and custom skill rules. |
| CHAT-008 | Claude Team and seat-based Enterprise usage credits help article | https://support.claude.com/en/articles/12005970-manage-usage-credits-for-team-and-seat-based-enterprise-plans | What can happen after included limits are reached on Team or seat-based Enterprise plans | Use only as Anthropic product context; Sandvik ordering and approval flow must be confirmed separately. |
| CHAT-009 | Claude Microsoft 365 connector setup help article | https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector | M365 connector setup, delegated permissions, and read-only permission reference | Use only for conditional examples until Sandvik confirms whether M365 is enabled. |
| CHAT-010 | Claude GitHub integration help article | https://support.claude.com/en/articles/10167454-use-the-github-integration | GitHub repository context in chats and projects | Use only for conditional examples until Sandvik confirms whether GitHub is enabled and which repositories are allowed. |
| COWORK-001 | Claude Cowork overview documentation | https://claude.com/docs/cowork/overview | Cowork capabilities, local files, browser, sub-agents, outputs, and extensions | Recheck because Cowork is a newer product surface. |
| COWORK-002 | Choosing between Claude Cowork or Chat | https://claude.com/resources/tutorials/choosing-between-claude-cowork-or-chat | Decision guidance for Chat vs Cowork | Useful for ordering portal descriptions and quiz scenarios. |
| COWORK-003 | Claude Cowork product page | https://claude.com/product/cowork | Enterprise deployment, observability, and product positioning | Recheck before procurement or admin claims. |
| CODE-001 | Claude Code product page | https://www.anthropic.com/product/claude-code | Code capability overview, safety posture, and use cases | Pair with Sandvik engineering policy before publishing. |
| DESIGN-001 | Claude Design announcement | https://www.anthropic.com/news/claude-design-anthropic-labs | Design capability overview, supported work types, and preview status | Recheck availability and plan eligibility before publishing. |

## Source Rules

- Quote sparingly in module content; prefer paraphrase and link to the source register.
- Do not copy product marketing language into policy sections.
- If a source changes materially, update affected modules and quiz questions.
- If a Sandvik rule conflicts with a product capability, the Sandvik rule takes precedence in training.
