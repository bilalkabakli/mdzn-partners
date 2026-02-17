# Jira Workflow — Agent Reference Guide

This document defines the complete Jira workflow, agent responsibilities at each status, communication rules, and transition logic. Every agent MUST follow this guide.

---

## Jira Statuses (in order)

```
To Do → Backlog → Product Review → Tech Backlog → UAT → Code Review → Done → Deployed
```

---

## Status Definitions & Agent Responsibilities

### 1. To Do

**Owner:** Human Product Manager
**Agents:** None

- Human PM creates tasks (stories, bugs, tasks) with:
  - Description
  - Screenshots / attachments
- Human PM moves the task to **Backlog** when ready for the product team.

---

### 2. Backlog

**Owner:** Product Team + Design Team (collaborative)
**Agents:** `head-of-product`, `product-manager`, `head-of-design`, `designer`

Backlog has two flexible tracks that run in the order decided by `head-of-product` (parallel, product-first, or design-first depending on the task). Both tracks must complete before moving to Product Review.

#### Product Track

**head-of-product:**
- Read issue/epic, understand business context and priority
- Create a **brief** for `product-manager` — post as Jira comment with:
  - Task context and business goal
  - What specifications are needed
  - Key areas to cover (user flows, edge cases, scope boundaries)
- Spawn `product-manager` with the brief

**product-manager:**
- Read the brief from `head-of-product`
- Analyze the task description, screenshots, and any comments
- Write requirements and acceptance criteria (Given/When/Then format)
- **Create the `[Product Definition]` subtask** (see [Product Definition Subtask](#product-definition-subtask))
- Post AC and requirements as Jira comment on the parent issue
- Notify `head-of-product` for review

**head-of-product (review):**
- Review product-manager's specifications for quality and completeness
- **Rejection loop:** if specifications are insufficient → provide feedback as Jira comment → product-manager revises (updates subtask description) → re-review → repeat until approved

#### Design Track

**head-of-product + head-of-design (collaboration):**
- Discuss what needs to be designed and how
- Agree on design scope, key screens, interaction patterns
- Post collaboration decisions as Jira comment

**head-of-design:**
- Based on the collaboration with head-of-product, create a **brief** for `designer` — post as Jira comment with:
  - Design scope and key screens to create
  - Interaction patterns and UX direction
  - Design system references to follow
- Spawn `designer` with the brief

**designer:**
- Read the brief from `head-of-design`
- Follow `design-system.md` for all design decisions (tokens, spacing, typography, colors, a11y)
- Create `.html` interface files (HTML+CSS, openable in browser) for all key screens and flows
- Save `.html` files to `referances/designs/ISSUE-KEY/`
- Post design notes as Jira comment
- Notify `head-of-design` for review

**head-of-design (review):**
- Review designer's `.html` files against `design-system.md` and the agreed design scope
- Check for consistency, accessibility, token usage
- **Rejection loop:** if designs are insufficient → provide feedback as Jira comment → designer revises → re-review → repeat until approved

#### Handshake Gate

When both tracks are complete (product specs approved by head-of-product, designs approved by head-of-design):

1. **head-of-product + head-of-design** review the combined output together
2. Both must approve:
   - Do the requirements and designs align?
   - Is the [Product Definition] subtask complete with both requirements AND design links?
   - Is everything clear for a human reviewer?
3. If either disagrees → send work back to their respective team for revision
4. On approval: `product-manager` consolidates everything into the **[Product Definition] subtask** (requirements + links to `.html` design files)
5. `head-of-product` transitions task to **Product Review**
6. Notify `top-orchestrator`

> **NOTE:** `[FE]`/`[BE]` subtasks are NOT created during Backlog. They are created later during the grooming session at Tech Backlog.

**Design-ready flow:** When the human PM provides completed designs with the task, the design track is simplified — `designer` reviews existing designs against `design-system.md` instead of creating new ones. The handshake gate still applies.

---

### 3. Product Review

**Owner:** Human Product Manager
**Agents:** None (waiting for human)

- Human PM reviews the **`[Product Definition]` subtask**:
  - Read the subtask **description** — it contains the final requirements, user flows, AC, scope, and links to `.html` design files
  - Open the `.html` design files in a browser to review the interface designs
  - The description is the single source of truth — no need to search through comments
- If NOT approved: human **comments on the Product Definition subtask** with feedback → product-manager and head-of-product review the feedback and rework (may involve designer and head-of-design if design changes are needed)
  - On rework: product-manager updates the subtask **description** with revised content (NOT comments)
  - Human reviews the updated description again
- If approved: human moves task to **Tech Backlog**

---

### 4. Tech Backlog

**Owner:** Engineering Team + Product Team (grooming)
**Agents:** `head-of-engineering`, `head-of-product`, `product-manager`, `fe-developer`, `be-developer`, `tester`

Tech Backlog has two phases: **Grooming** (product + engineering collaborate) then **Development** (engineering executes).

#### Phase 1: Grooming Session

`top-orchestrator` spawns BOTH `head-of-product` and `head-of-engineering` to collaborate on technical breakdown.

**head-of-engineering:**
- Read the task, AC, design specs, and all prior comments
- Collaborate with `head-of-product` on technical breakdown:
  - Propose architecture, FE/BE split, development order, API contracts
  - Post architecture and grooming decisions as Jira comment
  - Identify risks, unknowns, or blockers

**head-of-product:**
- Read the task, AC, Product Definition, and design files
- Collaborate with `head-of-engineering` on the technical breakdown
- Agree on FE/BE split and subtask scope
- Spawn `product-manager` → delegate `[FE]`/`[BE]` subtask creation based on grooming agreement

**product-manager:**
- Create `[FE]` and `[BE]` subtasks based on the grooming agreement
- Each subtask has a clear description with AC references
- If API contract needed, document as Jira comment
- Notify `head-of-product` for review

**head-of-product (subtask review):**
- Review subtasks — do they match the grooming agreement?
- If NOT approved: provide feedback → product-manager revises → repeat
- If approved: notify `top-orchestrator` that grooming is complete

**Grooming complete when:** `[FE]`/`[BE]` subtasks exist, are approved by head-of-product, and match the architecture agreed with head-of-engineering.

#### Phase 2: Development

Development begins ONLY after grooming is complete and subtasks are approved.

**head-of-engineering:**
- Verify subtasks match the grooming agreement
- Spawn FE developer, BE developer, and tester in PARALLEL
  - FE developer → implement [FE] subtasks
  - BE developer → implement [BE] subtasks
  - Tester → write test plan, validate AC coverage
- Coordinate with `tester` to run in parallel with developers

**fe-developer:**
- Read AC and design files (`.html`)
- Implement frontend (components, state, API integration, validation, responsive)
- Follow design files and `design-system.md`
- Create branch, commit, open PR with Jira link
- Notify `head-of-engineering` when done

**be-developer:**
- Read AC and technical requirements
- Design API (endpoints, schemas, auth, error format)
- Post API contract as Jira comment
- Implement backend (controller → service → repository)
- Write tests (unit + integration)
- Create branch, commit, open PR with Jira link and API docs
- Notify `head-of-engineering` when done

**tester:**
- Read AC and write test plan (in parallel with developers)
- Post test plan as Jira comment
- Review developer output for AC coverage gaps
- Validate API contract compliance
- Report findings:
  - Minor issues → Jira comment
  - Bugs → create new Jira bug issue
- Notify `head-of-engineering` with test summary

**head-of-engineering (review):**
- Review PRs for code quality, patterns, test coverage
- Check API contract compliance between FE and BE
- Review tester findings
- If NOT approved: provide feedback as Jira comment → developers and tester revise (task stays in Tech Backlog)
- If approved:
  1. **Add preview link to the main task** — append the preview/deployment URL to the **last line** of the parent issue description with a human-readable label (e.g., `🔗 Preview: <URL> — Click to test the latest changes before UAT`)
  2. Move task to **UAT**
- Notify `top-orchestrator`

> **Preview Link Exception:** Adding the preview link to the main task description is the ONLY permitted modification to the parent issue description. This is an exception to the "never modify main task description" rule. The preview link is always appended to the last line — never replaces or edits existing content.

**Rejection loop:** head-of-engineering rejects → devs/tester revise → head-of-engineering re-reviews → repeat until approved.

---

### 5. UAT (User Acceptance Testing)

**Owner:** Human Product Manager
**Agents:** Potentially `head-of-engineering` + `head-of-product` (on rejection)

- Human PM reviews the final output end-to-end using the **preview link** on the main task
- If NOT approved: human moves task back to **Tech Backlog** with feedback comments
  - `head-of-engineering` handles technical rework
  - `head-of-product` validates that AC is still met after changes (depending on feedback nature)
  - They collaborate to ensure the task meets both technical and product requirements
- If approved: human moves task to **Code Review**

---

### 6. Code Review

**Owner:** Human
**Agents:** None (waiting for human)

- Human reviews the PRs, code, and test results
- If NOT approved: human moves task back to **Tech Backlog** with feedback comments → head-of-engineering and tech team rework
- If approved: human moves task to **Done**

---

### 7. Done

**Owner:** `head-of-engineering` (deployment)
**Agents:** `head-of-engineering`

- Task has been approved through UAT and Code Review by humans
- `head-of-engineering` prepares for deployment
- **MUST ask user for approval before deploying** (approval required)
- On user approval:
  1. Merge PR to `main` branch on GitHub
  2. Vercel automatically detects the merge and deploys
  3. Verify the deployment is live (check Vercel URL)
  4. Post the live URL as Jira comment
  5. Move task to **Deployed**
- Notify `top-orchestrator`

---

### 8. Deployed

**Final status.** Task is complete and live in production.

---

## Agent Delegation Protocol

### Core Rule: top-orchestrator Owns Jira, Agents Own Thinking

The `top-orchestrator` is the ONLY agent that directly interacts with Jira (read issues, post comments, update descriptions, transition statuses, attach files). All other agents receive context FROM the orchestrator and return their output TO the orchestrator.

**This is mandatory for every task at every status. No agent works alone — the orchestrator always delegates to the appropriate team agents.**

### MANDATORY SPAWN SEQUENCE — Backlog (Standard Flow)

Each step is a SEPARATE agent spawn. NEVER combine multiple roles into one agent. NEVER skip steps. NEVER collapse the sequence.

**Product Track (3 steps minimum):**
1. Spawn `head-of-product` → analyzes task, creates brief for product-manager
2. Spawn `product-manager` (with brief) → writes specs, AC, creates [Product Definition] subtask
3. Spawn `head-of-product` (with PM output) → reviews quality → **FEEDBACK LOOP** until approved

**Design Track (3 steps minimum):**
4. Spawn `head-of-design` (with head-of-product collaboration input) → creates brief for designer
5. Spawn `designer` (with brief) → creates .html design file
6. Spawn `head-of-design` (with designer output) → reviews against design system → **FEEDBACK LOOP** until approved

**Handshake Gate (1 step):**
7. Spawn `head-of-product` + `head-of-design` (with all outputs) → both review combined output → both must approve

**Orchestrator Consolidation:**
8. Attach .html design file to [Product Definition] subtask as Jira attachment
9. Verify subtask has clickable links to designs and all required sections
10. Transition to Product Review

> **MINIMUM 7 separate agent spawns per Standard Flow Backlog task. No shortcuts. No combining.**

### CORRECTION LOOP RULES

- Head agents MUST review leaf agent output before the orchestrator can proceed
- If a head agent rejects → the orchestrator spawns the leaf agent again with the head's feedback → the leaf revises → the orchestrator spawns the head again to review → repeat until approved
- Each round of feedback MUST be posted as a Jira comment by the orchestrator
- Minimum 1 review cycle per head agent (even if first output is accepted)

### WORKFLOW VIOLATIONS (NEVER DO THESE)

1. **NEVER combine multiple agent roles into one spawn** — e.g., "product+design combined" or "head-of-product + product-manager combined"
2. **NEVER skip the review/feedback loop** — head agents MUST review leaf agent output
3. **NEVER skip the handshake gate** — BOTH heads must approve before Product Review
4. **NEVER write specs, designs, or code as orchestrator** — delegate everything
5. **NEVER move to Product Review without attached .html design files** on the subtask
6. **NEVER use a single agent for "combined product+design+engineering"** — each role is separate
7. **NEVER collapse the Backlog phase into fewer than 7 agent spawns** (Standard Flow)
8. **NEVER approve deliverables based on description text alone** — head agents MUST verify that planned Jira artifacts (subtasks, attachments, links) actually exist in Jira before approving. If the PM says "create per-page subtasks," the HoP must check that those subtasks were actually created.

### Orchestrator Context-Gathering (before every delegation)

Before spawning ANY agent, the `top-orchestrator` MUST gather and prepare a context package:

1. **Issue context:** Read the main task from Jira (description, status, labels, type, attachments)
2. **Comments:** Read all comments on the main task and relevant subtasks
3. **Subtasks:** Read subtask descriptions (especially `[Product Definition]`, `[FE]`, `[BE]`)
4. **Rejection feedback:** If returning from a human review, read the rejection comments
5. **Files:** Read relevant codebase files (components, design system, existing designs)
6. **Agent definition:** Read the target agent's definition from `.claude/agents/`
7. **Workflow rules:** Include relevant workflow rules from this document

### Delegation Flow

```
top-orchestrator
  ├── 1. Gather context (Jira + files)
  ├── 2. Spawn head agent with full context package
  │     └── Head agent analyzes, decides, returns output
  │           └── (Head agent may request orchestrator to spawn leaf agents)
  ├── 3. Receive agent output
  ├── 4. Post to Jira (comments, description updates, attachments)
  ├── 5. If head agent requests leaf agent work:
  │     ├── Gather additional context if needed
  │     ├── Spawn leaf agent with context
  │     ├── Receive leaf agent output
  │     └── Post to Jira
  └── 6. Transition issue when workflow step is complete
```

### What Gets Passed to Agents

Every agent spawn MUST include:

| Context Item | Required For |
|---|---|
| Agent's own definition file (`.claude/agents/<name>.md`) | ALL agents |
| Main task description + attachments summary | ALL agents |
| All Jira comments on the task | ALL agents |
| Subtask descriptions (if they exist) | ALL agents |
| Relevant codebase files (components, CSS, etc.) | designer, fe-developer, be-developer |
| Design system (`referances/design-system.md`) | designer, head-of-design |
| Rejection feedback (if applicable) | ALL agents (on rejection cycles) |
| Brief from head agent (if leaf agent) | product-manager, designer |
| Grooming decisions (if Tech Backlog) | fe-developer, be-developer, tester |

### What Agents Return

Agents return their work as structured output to the orchestrator:

| Agent | Returns |
|---|---|
| `head-of-product` | Brief for PM, review decisions, approval/rejection, handshake decision |
| `product-manager` | Subtask description content (ADF or markdown), AC, requirements |
| `head-of-design` | Brief for designer, review decisions, design system update recommendations |
| `designer` | `.html` design files (written to repo), design notes |
| `head-of-engineering` | Architecture decisions, grooming output, PR review feedback |
| `fe-developer` | Code changes (committed to branch), PR description |
| `be-developer` | Code changes (committed to branch), API docs, PR description |
| `tester` | Test plan, test results, bug reports |

### Orchestrator Posts to Jira

After receiving agent output, the orchestrator:
1. Posts the agent's decisions/output as a Jira comment (attributed to the agent role)
2. Updates subtask descriptions if the agent produced new content
3. Attaches files if the agent created design files or other artifacts
4. Transitions the issue if the workflow step is complete

### MANDATORY: Jira Transition Safety Protocol

**NEVER hardcode or assume Jira transition IDs.** Before every status transition:

1. **Look up:** `GET /rest/api/3/issue/{issueKey}/transitions` → get available transitions
2. **Match:** Find the transition where `to.name` equals the target status name (e.g., "Product Review")
3. **Use:** Use that transition's `id` in the POST call
4. **Verify:** After transitioning, `GET /rest/api/3/issue/{issueKey}?fields=status` to confirm the issue is in the correct status

> Transition IDs can differ between boards, projects, and issue types. Never reuse an ID from a previous call without checking first.

### Status-Specific Delegation Table

| Status | Orchestrator Gathers | Spawns | Agents Return | Orchestrator Posts |
|---|---|---|---|---|
| **Backlog** | Issue, comments, attachments, codebase files, design system | head-of-product, head-of-design | Briefs, specs, designs, handshake decision | Comments, [Product Definition] subtask, .html files, transition to Product Review |
| **Backlog (rejection)** | Issue, comments, subtask, rejection feedback, current designs | head-of-product, head-of-design | Revised specs, revised designs, handshake decision | Updated subtask description, updated .html files, transition to Product Review |
| **Tech Backlog (grooming)** | Issue, [Product Definition], comments, codebase | head-of-product + head-of-engineering | Grooming decisions, [FE]/[BE] subtask content | Grooming comment, [FE]/[BE] subtasks |
| **Tech Backlog (dev)** | Issue, subtasks, codebase, design files | head-of-engineering → fe/be-developer + tester | Code, PRs, test plans | Code commits, PR creation, comments, preview link, transition to UAT |
| **UAT (rejection)** | Issue, rejection feedback, current code | head-of-engineering + head-of-product | Rework decisions, code fixes | Comments, code commits, transition back to UAT |
| **Done** | Issue, PRs, deployment config | head-of-engineering | Deployment confirmation | Merge PR, verify deployment, post live URL, transition to Deployed |

---

## Communication Rules

### Central Rule: Every Agent Reports to top-orchestrator

After EVERY status change, action, or significant update, the acting agent MUST notify `top-orchestrator`. This includes:

- Task picked up
- AC / specs / designs created or revised
- Review feedback given (approval or rejection)
- PR opened
- Test results posted
- Task moved to a new status
- Blockers or problems encountered

### top-orchestrator Responsibilities

- **Gathers all Jira context** before delegating to any agent
- **Spawns agents with full context packages** — agents never need to fetch from Jira themselves
- **Posts all Jira updates** — comments, descriptions, attachments, transitions
- Maintains awareness of every task's current state
- If a problem arises, spawns or involves the relevant agents to resolve it
- Manages cross-team communication (e.g. product ↔ design ↔ engineering)
- Escalates to the user when approval is required
- Provides summary reports on request

### Inter-Agent Communication

- **API contracts:** BE developer → Jira comment + mailbox → FE developer
- **Design handoff:** designer → Jira comment + mailbox → FE developer
- **Requirement questions:** any agent → product-manager via mailbox + Jira comment
- **Technical questions:** FE/BE → head-of-engineering via mailbox
- **Design questions:** FE/designer → head-of-design via mailbox

### Approval-Required Actions (MUST ask user)

- Issue close
- Release / deployment
- Priority change
- PR merge
- Critical decisions
- Scope changes

---

## Review Subtask Rules

Human review (Product Review) uses a dedicated subtask so the human reviewer has a single, clear place to review deliverables.

### Core Principles

1. **Description is the source of truth** — The subtask description always reflects the latest version. Comments are only for discussion and rejection feedback.
2. **Single review subtask** — One `[Product Definition]` subtask containing both requirements AND design links.
3. **Designs are `.html` files** — Interface designs are runnable HTML+CSS files stored in the repo. Image generation (PNG/JPEG) is only for illustrations, icons, or non-interface assets when truly needed.
4. **Never use comments for final deliverables** — If requirements or designs change, update the description. Do not add a new comment with the revision.
5. **Never modify the main task description** — The parent issue description is the stakeholder's original input and must remain untouched. All refined requirements, AC, designs, and deliverables go into the review subtask. No agent may edit the parent issue's description field. **Exception:** `head-of-engineering` may append a preview link to the last line of the description when moving a task to UAT (see [UAT](#5-uat-user-acceptance-testing)).

### Product Definition Subtask

| Field | Value |
|---|---|
| Created by | `product-manager` (requirements); `designer` contributes `.html` files |
| Reviewed by | Human PM (during Product Review) |
| Naming | `[Product Definition] <parent task title>` |
| Link | Subtask of the parent issue |
| Design files stored at | `referances/designs/ISSUE-KEY/` (`.html` files) |

**Description template:** Summary → User Flows → Design (linked `.html` files) → Requirements → Acceptance Criteria → Scope

**On rejection:** Human comments on the subtask → PM reads comment → PM updates the **description** with revised content. If design changes needed, head-of-design coordinates with designer to update `.html` files.

### Design File Rules

- Interface designs are `.html` files (HTML+CSS), openable in a browser
- Stored at `referances/designs/ISSUE-KEY/` in the repo
- Linked from the [Product Definition] subtask description under the Design section
- Use clear, descriptive filenames (e.g., `hero-section.html`, `login-form.html`)
- **Images (PNG/JPEG)** are only created when truly needed for non-interface assets: illustrations, icons, graphics. NOT for interface mockups.
- On revision: update the `.html` files in place and update the subtask description

### File Storage Structure

```
referances/
└── designs/
    └── ISSUE-KEY/
        ├── hero-section.html
        ├── login-form.html
        ├── illustration-hero.png    ← only if illustration/image needed
        └── ...
```

---

## Flow Variants

### Standard Flow

```
To Do → Backlog → Product Review → Tech Backlog → UAT → Code Review → Done → Deployed
          (product track       (human)    (grooming then    (human    (human      (HoE       (live)
           + design track                  devs build,       PM       reviews      deploys)
           + handshake)                    tester tests,     tests)   code/PRs)
                                           HoE reviews,
                                           adds preview link)
```

### Design-Ready Flow

When human PM provides completed designs with the task:

```
To Do → Backlog → Product Review → Tech Backlog → UAT → Code Review → Done → Deployed
          (PM writes specs,    (human)    (same as          (human    (human      (HoE       (live)
           designer REVIEWS                standard)         PM       reviews      deploys)
           only, handshake)                                  tests)   code/PRs)
```

Key differences:
- `designer` reviews existing designs against `design-system.md` — does NOT create new `.html` files
- `product-manager` writes specs for tech team only (no design requirements)
- Handshake gate still applies
- All other phases remain the same

### Fast-Track Bug Fix Flow

When the human PM explicitly describes the bug AND the fix (e.g., "page X is wrong, make it match page Y — fix it"), the orchestrator MAY skip the product and design tracks but **MUST keep the full engineering team working together**.

```
Backlog → Product Review → UAT → Code Review → Done → Deployed
  (SKIP product+design   (human         (human    (human      (HoE       (live)
   tracks. Engineering    PM reviews     PM        reviews     deploys)
   team builds fix,       the fix +      tests)    code/PRs)
   preview link           preview)
   generated)
```

**Eligibility criteria (ALL must be true):**
1. The task is a **bug fix** (not a new feature or enhancement)
2. The human PM **explicitly described** what is wrong and what the fix should be
3. The fix is **straightforward** — no ambiguity, no architectural decisions, no design exploration needed
4. The scope is **small** — affects a limited number of components/files

**What is SKIPPED:**
- Product track (no head-of-product → product-manager)
- Design track (no head-of-design → designer)
- Handshake gate
- Tech Backlog grooming (no [FE]/[BE] subtask creation)

**What is KEPT — the engineering team works together:**
- `head-of-engineering` is spawned and coordinates the fix
- `fe-developer` and/or `be-developer` implement the code changes (as applicable)
- `tester` runs Design Fidelity Review (if design files exist) and/or functional testing
- The full engineering delegation chain is used — **NO single-agent shortcuts**

**How it works:**
1. `top-orchestrator` gathers full context (Jira issue + codebase files + designs)
2. `top-orchestrator` spawns `head-of-engineering` with full context + user's bug description
3. `head-of-engineering` spawns `fe-developer` / `be-developer` to implement the fix
4. `head-of-engineering` spawns `tester` to verify the fix (design fidelity if applicable + functional)
5. `head-of-engineering` reviews the work and reports back to orchestrator
6. `top-orchestrator` commits, pushes, generates a Vercel preview deployment
7. `top-orchestrator` creates a `[Product Definition]` subtask with:
   - Summary of what was wrong and what was fixed
   - **Clickable preview links** (MANDATORY)
   - Acceptance criteria
   - List of changed files
8. Task moves to **Product Review** — human PM reviews the fix via preview link
9. If approved → move to **UAT** (code already exists, human tests via preview)
10. If rejected → orchestrator spawns `head-of-engineering` again with feedback for rework

**What stays the same as Standard Flow:**
- Engineering team works as a proper team (head → developers + tester)
- `[Product Definition]` subtask is still created with full description and preview links
- Human PM still reviews and approves/rejects at Product Review
- UAT and Code Review gates still apply
- Deployment still requires human approval
- `top-orchestrator` still handles all Jira interactions

> **IMPORTANT:** If ANY eligibility criterion is NOT met, use the Standard Flow. When in doubt, use the Standard Flow.
> **NO SINGLE-AGENT SHORTCUTS:** Even in fast-track mode, the engineering team MUST work together. Never collapse all roles into a single generalPurpose agent.

### Tech Backlog: Grooming → Development

All tasks follow this two-phase process at Tech Backlog:

1. **Grooming:** `head-of-product` + `head-of-engineering` collaborate → `product-manager` creates `[FE]`/`[BE]` subtasks → `head-of-product` approves
2. **Development:** `head-of-engineering` spawns developers and tester using the approved subtasks

`[FE]`/`[BE]` subtasks are NEVER created before Tech Backlog.

---

## Future: Slack Integration

A Slack channel will be configured for:
- Agent status updates (task transitions, completions, blockers)
- Delivering agent questions to humans when input is needed
- Deployment notifications
- Summary reports from top-orchestrator

_(Configuration pending — will be updated when Slack is connected)_

---

## Quick Reference: Agent → Status Mapping

| Agent | Active In |
|---|---|
| `product-manager` | Backlog (product track), Tech Backlog (grooming — creates [FE]/[BE] subtasks) |
| `head-of-product` | Backlog (product track + handshake), Tech Backlog (grooming — collaborates + reviews subtasks), UAT (on rejection) |
| `designer` | Backlog (design track) |
| `head-of-design` | Backlog (design track + handshake) |
| `fe-developer` | Tech Backlog (development phase) |
| `be-developer` | Tech Backlog (development phase) |
| `tester` | Tech Backlog (development phase) |
| `head-of-engineering` | Tech Backlog (grooming + development), Done (deployment) |
| `top-orchestrator` | ALL statuses (receives updates, coordinates) |

| Status | Human Action Required |
|---|---|
| To Do | Human PM creates task |
| Backlog | — |
| Product Review | Human PM approves/rejects |
| Tech Backlog | — |
| UAT | Human PM approves/rejects (uses preview link) |
| Code Review | Human approves/rejects PRs |
| Done | Human approves deployment |
| Deployed | — |
