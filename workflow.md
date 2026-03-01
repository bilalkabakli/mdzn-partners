# MDZN Partners -- Delivery Workflow

## Jira Board Columns

```
To Do → Backlog → Product Review → Tech Backlog → UAT → Code Review → Done → Deployed
```

## Column Definitions

| Column | Owner | Purpose |
|--------|-------|---------|
| To Do | Human PM | PM adds tasks with descriptions, screenshots, wireframes |
| Backlog | AI Team | Product & Design teams collaborate on definition and mockups |
| Product Review | Human PM | Human PM reviews the product definition and design output |
| Tech Backlog | AI Team | Grooming and technical planning, subtask creation |
| UAT | Human PM | Human PM reviews the implemented feature |
| Code Review | AI + Human | HoE agent reviews first, then human engineer does final review |
| Done | Human Engineer | Approved code, ready for deployment |
| Deployed | Team Leader | Deployed to production |

---

## Task Movement Rules

- **Team Leader** is the only agent that moves tasks in Jira
- Agents never move tasks directly -- they report to Team Leader when ready
- Human PM and Human Engineer move tasks at their review stages
- **Before and after every operation**, Team Leader verifies the task's current Jira column and moves it to the correct position per this workflow
- Team Leader adds a comment on every status transition

## Jira Deliverable Rules

- **All deliverables are Jira subtasks.** Product definitions, designs, and tech specs are created as subtasks under the parent Jira issue -- never as comments, never only in the repo.
- **Attach files to Jira subtasks.** Design mockups (.html) and other files are attached directly to the subtask in Jira.
- **Never modify the parent task's original content.** The original description, screenshots, and attachments from the human PM are the historical record and must remain untouched. The ONLY exception is appending UAT preview links (see below).
- **Add UAT branch links to the parent task description.** When a task reaches UAT, append a "UAT Preview" section at the end of the parent task's description containing the Vercel preview URL and the Git branch link. The original content above must never be changed.
- **Comment after every operation.** Every phase completion, every deliverable, every status change is logged as a comment on the Jira task for a full audit trail.
- **When replacing a deliverable, delete the old attachment.** If a new version of a design mockup or file is created, remove the outdated version from the Jira subtask first. Only the current version should exist on the subtask. No stale files.
- **Do NOT wait for human confirmation if the task is already in the correct column.** Jira is the source of truth. If a task is in a column, the decision has already been made. Proceed with the next phase immediately without pausing or asking for confirmation.

---

## Phase 1: Heads Alignment (Backlog)

**Trigger**: Human PM moves a task from To Do to Backlog.

**Participants**: Head of Product, Head of Design

1. Team Leader picks up the task from Backlog and delegates to HoP and HoD
2. HoP and HoD read the Jira task together (description, screenshots, wireframes)
3. They create a **joint brief** about what needs to be achieved
4. They discuss and iterate until both agree on the brief
5. If needed, they ask their team members (PM, Designer) to do research:
   - Competitor analysis
   - Similar feature reviews on the internet
   - Market research
   - A brief research summary will be included in the final deliverable

**Output**: Agreed joint brief that guides both teams.

---

## Phase 2: Product Definition (Backlog)

**Participants**: Head of Product, Product Manager

1. HoP creates a **brief** for the PM based on the joint brief
2. PM produces the **product definition**:
   - Concise bullet points
   - Simple and easy for a human to review
   - Not too much, not too little
3. HoP **reviews** the PM's work
   - If approved: move to Phase 3
   - If not approved: HoP provides feedback, PM reworks accordingly
4. **Loop** continues until HoP approves the product definition

**Output**: Approved product definition in concise bullets.

---

## Phase 3: Design (Backlog)

**Participants**: Head of Design, Designer

1. HoD creates a **brief** for the Designer based on the joint brief and approved product definition
2. Designer creates a **static HTML/CSS mockup** (.html file)
3. HoD **reviews** the Designer's work
   - If approved: move to Phase 4
   - If not approved: HoD provides feedback, Designer reworks accordingly
4. **Loop** continues until HoD approves the design

**Output**: Approved static HTML/CSS mockup (.html file).

---

## Phase 4: Final Joint Review (Backlog → Product Review)

**Participants**: Head of Product, Head of Design

1. HoP and HoD review the combined output together:
   - Product definition
   - HTML/CSS mockup
   - Research summary
2. If **both approve**:
   - They report to Team Leader
   - Team Leader creates a subtask on the parent Jira issue containing:
     - Product definition (bullets)
     - .html design mockup (attached)
     - Brief research summary
   - Team Leader moves the subtask to **Product Review**
3. If **not satisfied**, severity determines the response:
   - **Small issue**: send back to the specific team (product or design) to fix
   - **Big issue**: restart both product definition and design (Phase 2 + 3)
   - **Huge issue** (last resort): go back to the joint brief (Phase 1) and rethink the approach

---

## Product Review (Human PM)

**Owner**: Human PM

- Human PM reviews the subtask (product definition + design mockup + research summary)
- **Approved**: Human PM moves the task to **Tech Backlog**
- **Not approved**: Human PM moves the task back to **Backlog** with a feedback comment
  - AI team restarts from Phase 1, incorporating the feedback

---

## Phase 5: Grooming Session (Tech Backlog)

**Trigger**: Human PM moves task to Tech Backlog.

**Participants**: Head of Product, Product Manager, Head of Engineering (may invite Developers)

1. Team Leader picks up the task and initiates the grooming session
2. HoP, PM, and HoE discuss:
   - How to implement the feature
   - Where to start
   - Execution strategy
   - Technical considerations and risks
3. HoE may call Developers into the session if technical input is needed
4. PM creates **new subtasks** for the tech team, each containing:
   - Detailed requirements
   - Acceptance criteria

**Output**: Subtasks with detailed requirements and acceptance criteria, assigned by HoE.

---

## Phase 6: Development (Tech Backlog)

**Participants**: Head of Engineering, Developers

1. HoE assigns subtasks to Developers
2. HoE sets the technical strategy and direction
3. For each subtask:
   - HoE **briefs** the Developer
   - Developer **codes** the implementation
   - HoE **reviews** the Developer's work
     - If approved: move to Phase 7
     - If not approved: HoE provides feedback, Developer reworks accordingly
   - **Loop** continues until HoE approves

**Output**: Implemented code, reviewed and approved by HoE.

---

## Phase 7: Testing (Tech Backlog)

**Participants**: Tester, Head of Engineering, Developers

1. Tester verifies the implementation against three criteria:
   - **Design fidelity**: matches the .html mockup exactly
   - **Functional correctness**: works as described in requirements
   - **Acceptance criteria**: all criteria from the subtask are met
2. If **issues found**:
   - Tester reports to HoE
   - HoE sends back to the Developer to fix
   - Developer fixes, Tester tests again
   - **Loop** continues until all tests pass
3. If **all tests pass**: Tester reports to HoE

**Output**: Fully tested implementation that matches design and requirements.

---

## Phase 8: Final Cross-Team Review (Tech Backlog → UAT)

**Participants**: Head of Engineering, Head of Product, Head of Design

1. HoE, HoP, and HoD review the completed task together
2. If **all three approve**:
   - They report to Team Leader
   - Team Leader moves the task to **UAT**
3. If **not approved**:
   - Back to the relevant team for rework (Phase 6 or 7)

---

## UAT -- User Acceptance Testing (Human PM)

**Owner**: Human PM

- Human PM reviews the implemented feature
- **Approved**: Human PM moves the task to **Code Review**
- **Not approved**: Human PM moves the task back to **Tech Backlog** with feedback comments
  - AI team reworks accordingly

---

## Code Review

**Participants**: Head of Engineering, Developers, Tester, Human Engineer

### AI Review (first)

1. HoE reviews the code for:
   - Code quality, patterns, and standards
   - Performance and security
   - Maintainability
2. If **issues found**:
   - HoE sends back to Developer to fix
   - Tester tests again after fixes
   - HoE reviews again
   - **Loop** continues until HoE approves
3. Once HoE approves, code is ready for human review

### Human Review (final)

- Human engineer does the final code review
- **Approved**: Human engineer moves the task to **Done**
- **Not approved**: feedback is provided, AI team fixes accordingly

---

## Done

**Owner**: Head of Engineering

- Task is code-reviewed and approved
- HoE decides **when and how** to deploy to production
- Deployment is executed to Vercel

---

## Deployed

**Owner**: Team Leader

- After deployment, Team Leader moves the task to **Deployed**
- Team Leader adds a **comment** confirming the deployment
