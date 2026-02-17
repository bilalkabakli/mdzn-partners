# Multi-Agent Teams — Rules

Multi-agent system managing Jira development workflows via hierarchical delegation.
Agent definitions in `.claude/agents/`. Full workflow reference in `referances/jira-workflow.md`.

## Hierarchy

```
top-orchestrator
├── head-of-product → product-manager
├── head-of-design  → designer
└── head-of-engineering → fe-developer, be-developer, tester
```

## Routing

| Label | Head Agent | Team |
|---|---|---|
| frontend, ui, react, css | head-of-product + head-of-design → head-of-engineering | PM + Designer + FE |
| backend, api, database, server | head-of-product → head-of-engineering | PM + BE |
| fullstack or no label | head-of-product + head-of-design → head-of-engineering | PM + Designer + FE + BE |
| design, ux | head-of-product + head-of-design | PM + Designer |
| Epic or missing AC | head-of-product first | PM |

## Spawn Order (follows Jira status pipeline)

1. **Backlog:** top-orchestrator → head-of-product + head-of-design (product track + design track in flexible order, handshake gate) → product-manager (specs + Product Definition subtask) + designer (.html designs)
2. **Product Review:** WAIT — human PM approves/rejects `[Product Definition]` subtask (contains requirements + .html design links)
3. **Tech Backlog (grooming):** top-orchestrator → head-of-product + head-of-engineering (collaborate) → product-manager (creates [FE]/[BE] subtasks) → head-of-product (approves subtasks)
4. **Tech Backlog (development):** head-of-engineering → fe-developer + be-developer + tester (in PARALLEL)
5. **UAT:** head-of-engineering appends preview link to main task description → WAIT — human PM tests via preview link and approves/rejects
6. **Code Review:** WAIT — human reviews PRs/code and approves/rejects
7. **Done:** top-orchestrator → head-of-engineering (deployment — MUST ask user approval)
8. **Deployed:** final status

## Fast-Track Bug Fix Flow

When the human PM explicitly describes the bug AND the fix, skip product/design tracks but keep the engineering team:

- **Eligibility:** Bug fix + human explicitly described what to fix + straightforward + small scope
- **SKIP:** Product track, design track, handshake gate, Tech Backlog grooming
- **KEEP:** Full engineering team — `head-of-engineering` → `fe-developer`/`be-developer` + `tester` (NO single-agent shortcuts)
- **Process:** Engineering team builds fix → preview deployment → `[Product Definition]` subtask with preview links → Product Review
- **Key difference:** Code is written BEFORE Product Review (human reviews the actual result). No product/design agent involvement.
- **Same gates apply:** Product Review, UAT, Code Review, deployment approval
- **When in doubt, use Standard Flow.** See `referances/jira-workflow.md` → "Fast-Track Bug Fix Flow" for full details.

## Approval Required (ask user)

Issue close, release/deployment, priority change, PR merge, critical decision, scope change.

## Agent Teams

- Inter-agent communication via mailbox + Jira comments
- FE and BE must work on separate files (conflict prevention)
- **API contract flow:** BE developer → Jira comment + mailbox → FE developer (coordinated by head-of-engineering)
- **Design handoff flow:** designer → Jira comment + mailbox → FE developer (coordinated by head-of-design)
- **Requirement questions:** any agent → product-manager via mailbox + Jira comment
- **Technical questions:** FE/BE → head-of-engineering via mailbox
- **Design questions:** FE/designer → head-of-design via mailbox

## Agent Delegation Protocol (MANDATORY)

**Every task at every status MUST be handled through agent delegation. The top-orchestrator never does the work alone.**

1. **Orchestrator gathers context:** Jira issue details, comments, subtasks, rejection feedback, codebase files, agent definitions
2. **Orchestrator spawns agents:** Passes full context package to the appropriate head agents
3. **Agents do the work:** Analyze, write specs, create designs, review, code — return output to orchestrator
4. **Orchestrator posts to Jira:** Comments, subtask updates, attachments, transitions

See `referances/jira-workflow.md` → "Agent Delegation Protocol" for the complete specification.

## Mandatory Spawn Sequence — Backlog (Standard Flow)

Each step is a SEPARATE agent spawn. NEVER combine roles. NEVER skip steps.

1. **head-of-product** → analyzes task, creates brief
2. **product-manager** → writes specs, AC, creates [Product Definition] subtask
3. **head-of-product** → reviews PM output → FEEDBACK LOOP until approved
4. **head-of-design** → analyzes design needs, creates brief for designer
5. **designer** → creates .html design file
6. **head-of-design** → reviews design → FEEDBACK LOOP until approved
7. **head-of-product + head-of-design** → handshake gate → both must approve
8. Orchestrator → attach files, verify links, transition to Product Review

**Minimum 7 agent spawns per Backlog task. No shortcuts.**

## Workflow Violations (NEVER DO THESE)

1. NEVER combine multiple agent roles into one spawn
2. NEVER skip the head agent review/feedback loop
3. NEVER skip the handshake gate
4. NEVER write specs, designs, or code as orchestrator
5. NEVER move to Product Review without attached .html design files
6. NEVER use "product+design+engineering combined" single agents
7. NEVER hardcode Jira transition IDs — always look up transitions first, match by `to.name`, then verify after
8. NEVER approve deliverables based on description text alone — head agents MUST verify planned Jira artifacts (subtasks, attachments) actually exist before approving

## Jira Transition Safety

Before every status transition: look up available transitions → match by target status name → use correct ID → verify status after. Never assume IDs from memory.

## Conventions

Commit: `feat|fix|docs|test|refactor|style(scope): description`
Branch: `feature|bugfix|hotfix/PROJ-123-short-description`
PR: `## [ISSUE-KEY] Title` + Summary + Changes + Jira link + Test plan + AC checklist

### Review Subtask Conventions

Subtask prefixes and when they are created:
- `[Product Definition]` — created by product-manager during **Backlog**, contains both requirements AND .html design links, reviewed by human PM during Product Review
- `[FE]` / `[BE]` — created by product-manager during **Tech Backlog grooming** (NOT during Backlog), used by developers during development

Design file storage:
- `.html` design files: `referances/designs/ISSUE-KEY/` (runnable HTML+CSS, openable in browser)
- Images (PNG/JPEG): only for illustrations, icons, or non-interface assets when truly needed — NOT for interface mockups

**Description-first rule:** Review subtask descriptions contain the final deliverables (not comments). Comments are for discussion and rejection feedback only. On revision, agents update the **description**, not add new comments.

**Main task description is read-only:** The parent issue description belongs to the stakeholder. No agent may modify it. All refined requirements, AC, designs, and deliverables go into review subtasks only. **Exception:** `head-of-engineering` may append a preview link to the last line when moving a task to UAT.
