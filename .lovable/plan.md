

# Phase 2: The Coordination Gap and MCoE Framework

## Narrative Purpose
These two sections build the "before and after" story of the framework. The Coordination Gap shows the **problem** (manual gridlock costing weeks and dozens of person-hours), and the MCoE Pillars present the **solution** (a structured, cross-functional coordination function). Together they answer: "Now that I understand *who* owns what, *why* does it matter and *how* do I fix it?"

---

## Section 1: The Coordination Gap — Timeline Comparison

A high-contrast split-view showing the painful "before" against the streamlined "after."

### Layout
Two side-by-side cards within a `max-w-7xl` container (stacks vertically on mobile).

### Left Card — "Current State: Ad Hoc Coordination" (Red/Danger Tint)
- Red-tinted border and subtle red background (reusing existing `danger-muted` token)
- A vertical **timeline** with numbered step indicators and connecting lines:
  1. **Day 1** — Engineering discovers tool in marketplace
  2. **Days 2-5** — Engineering requests access; Procurement asks for justification
  3. **Days 6-10** — Finance questions budget allocation, no clear commitment mapping
  4. **Days 11-20** — Security requests vendor InfoSec questionnaire, manual back-and-forth
  5. **Days 21-25** — Legal reviews SCMP, requests amendments
  6. **Days 26-30** — Procurement creates manual PO workaround
  7. **Days 31-40** — IT provisions access, discovers integration issues
  8. **Week 7+** — Tool finally deployed, engineers frustrated

### Left Card — "Cost of Manual Coordination" Callout Box
Below the timeline, a highlighted stat box showing the business impact:
- **3-6 weeks** per transaction
- **9 teams** involved, 2-5 hours each
- **20-30 person-hours** per $10K purchase
- Result: governance failures, shadow IT, lost engineering productivity

### Right Card — "Target State: Marketplace-Native" (Green/Success Tint)
- Green-tinted border and subtle green background (new `success` color token)
- A compact **outcome list** with speed indicators:
  - **Same-day (hours)** — Pre-approved vendor, under spending threshold
  - **3-5 days** — Pre-approved vendor, over threshold, automated approval routing
  - **1-2 weeks** — New vendor, standard risk profile, parallel security/legal reviews
  - **2-4 weeks** — New vendor, high-risk, full assessment with visibility and automation
- Each item has an icon and a brief explanation of what enables that speed (pre-approval, automated routing, parallel workflows, etc.)

### Right Card — "What Makes This Possible" Callout Box
Below the outcomes, a matching stat box highlighting the enablers:
- Automated approval routing
- Pre-approved vendor catalogs (Private Marketplace)
- Parallel (not sequential) cross-functional reviews
- Integrated P2P and financial tracking

---

## Section 2: MCoE Pillars of Excellence — The Organizational Solution

### Section Header
- Title: "The Marketplace Center of Excellence (MCoE)"
- Subtitle explaining the MCoE as a cross-functional coordination function — not a new department, but a governance layer that connects existing teams.

### Layout
A responsive **3x2 grid** of cards (stacks to 2x3 on tablet, 1x6 on mobile).

### The Six Pillar Cards

Each card has: a Lucide icon in a colored badge, pillar name, one-line description, and a bullet list of specific responsibilities.

1. **Governance** (Shield icon)
   - "Sets the rules, thresholds, and approval authority"
   - Approval workflows and spending thresholds
   - Commitment tracking (EDP/MACC alignment)
   - Private Marketplace curation and policies
   - Security baselines for vendor onboarding
   - Compliance monitoring and audit readiness

2. **Procurement** (ShoppingCart icon)
   - "Executes purchases and manages vendor relationships"
   - Purchase execution and order management
   - Vendor relationship management
   - Contract negotiations and renewals
   - Pipeline management and demand forecasting
   - RFx coordination for marketplace vendors

3. **Finance** (Wallet icon)
   - "Tracks budgets, commitments, and cost attribution"
   - Budget allocation and cloud commitment mapping
   - PO attribution and requisition tracking
   - Spend analytics and marketplace ROI reporting
   - EDP/MACC burn-down monitoring
   - Cost center and GL code alignment

4. **Security** (Lock icon)
   - "Validates vendor risk and compliance posture"
   - Vendor security assessments (questionnaires, pen test reviews)
   - Compliance validation (SOC 2, ISO 27001, GDPR, HIPAA, FedRAMP)
   - Third-party risk scoring and continuous monitoring
   - Data handling and privacy review
   - Integration security requirements

5. **Technology** (Cpu icon)
   - "Configures platforms and integrates systems"
   - IAM configuration and Private Marketplace setup
   - P2P system integration (Coupa, SAP Ariba, Oracle, NetSuite)
   - Technical enablement and team training
   - Deployment support and access provisioning
   - Tool evaluation and architecture review

6. **Innovation** (Lightbulb icon)
   - "Accelerates adoption and reduces procurement friction"
   - Self-service access and guided buying experiences
   - AI/ML adoption acceleration through marketplace
   - Experimentation support (sandbox environments, PoC funding)
   - Procurement friction reduction initiatives
   - Competitive advantage through faster time-to-market

---

## Technical Implementation

### New Files

1. **`src/components/CoordinationGap.tsx`**
   - Self-contained section component
   - Two-column grid layout (`lg:grid-cols-2`, stacks on mobile)
   - Left card: vertical timeline with numbered step dots connected by a line, styled with `danger`/`danger-muted` tokens; stat callout box below
   - Right card: outcome list with speed badges, styled with new `success`/`success-muted` tokens; enabler callout box below
   - Uses existing `Card` component from shadcn/ui

2. **`src/components/McoePillars.tsx`**
   - Self-contained section component
   - 3x2 responsive grid (`lg:grid-cols-3 md:grid-cols-2`)
   - Each pillar card uses the existing `Card`/`CardHeader`/`CardContent` components
   - Icon badge matches the style used in `ResponsibilityCard` header (rounded-lg, accent background)
   - Bullet list styled consistently with `ResponsibilityItem` (small text, muted foreground)

### Modified Files

3. **`src/index.css`**
   - Add two new CSS custom properties under `:root`:
     - `--success: 142 71% 45%` (green)
     - `--success-muted: 142 50% 12%` (dark green background)

4. **`tailwind.config.ts`**
   - Add `success` color tokens to match `danger` pattern:
     - `success.DEFAULT` and `success.muted`

5. **`src/pages/Index.tsx`**
   - Import `CoordinationGap` and `McoePillars`
   - Render them between the Matrix section and the Footer
   - Each section gets its own `id` for potential future anchor navigation

### Visual Consistency
- All new cards follow the same border/backdrop-blur styling as `ResponsibilityCard`
- Section headings use the same `text-2xl font-bold sm:text-3xl` pattern
- Container widths match existing sections (`max-w-7xl`)
- Color tokens follow the established `danger`/`danger-muted` pattern for the new `success` pair
