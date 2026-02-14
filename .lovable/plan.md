

# Phase 3: The Collaboration Layer

## Overview
Transform the static landing page into a community-enabled portal by adding two new sections before the footer: a **9-Team Accountability Grid** showing every team involved in marketplace transactions, and a **"How to Contribute" section** with a prominent GitHub CTA card and clear contribution instructions.

---

## Section 1: The 9-Team Accountability Grid

### Purpose
Show exactly which teams are involved in a marketplace transaction and why coordination is the missing link. Each team is clickable to reveal their specific role.

### Layout
A responsive grid of 9 interactive cards (3x3 on desktop, 2-col on tablet, 1-col on mobile).

### The 9 Teams
Each card has a Lucide icon, team name, and a short role description that expands on click (using Collapsible or a simple toggle state):

1. **Engineering** (Code icon) -- Discovers and evaluates tools; initiates procurement requests; owns technical integration
2. **Procurement** (ShoppingCart icon) -- Executes purchase orders; manages vendor relationships; coordinates RFx processes
3. **Finance** (Wallet icon) -- Allocates budgets; maps spend to cloud commitments (EDP/MACC); manages PO attribution
4. **Security** (Shield icon) -- Conducts vendor risk assessments; validates compliance (SOC 2, ISO 27001); reviews data handling
5. **Legal** (Scale icon) -- Reviews SCMP and contract terms; negotiates amendments; manages licensing compliance
6. **Compliance** (ClipboardCheck icon) -- Monitors regulatory requirements; ensures audit readiness; tracks policy adherence
7. **FinOps** (TrendingUp icon) -- Optimizes cloud spend; tracks commitment burn-down; provides cost visibility and recommendations
8. **IT Ops** (Server icon) -- Provisions user access; configures IAM; manages P2P system integrations
9. **Vendor Management** (Handshake icon) -- Manages vendor lifecycle; tracks SLAs and performance; coordinates renewals

### Interaction
Each card starts collapsed showing only the icon and team name. Clicking toggles an expanded view with the role description and 3-4 bullet points of specific responsibilities in a marketplace transaction.

---

## Section 2: How to Contribute

### Layout
A full-width section with two parts:

1. **Contribution Steps** -- A numbered 4-step visual walkthrough:
   - Step 1: **Discover** -- Browse the framework and identify gaps
   - Step 2: **Fork** -- Fork the GitHub repository to your account
   - Step 3: **Edit** -- Update the responsibility data or MCoE pillars in the code
   - Step 4: **Submit a PR** -- Open a Pull Request with your reasoning

2. **The CTA Card** -- A large, dark-themed "Contribution Card" with:
   - Headline: "Help us define the standard."
   - Body: "Fork the repo, add your workflow, and submit a Pull Request."
   - CC BY 4.0 license badge
   - A prominent "Contribute on GitHub" button (links to the repository)
   - A secondary "View License" link to Creative Commons

---

## Technical Implementation

### New Files

1. **`src/components/TeamAccountabilityGrid.tsx`**
   - Self-contained section component
   - 9 team cards in a responsive 3x3 grid (`lg:grid-cols-3 md:grid-cols-2`)
   - Each card uses React `useState` to toggle expanded/collapsed state on click
   - Collapsed: icon + team name in a compact card
   - Expanded: reveals role description and responsibility bullets
   - Uses existing `Card` components and consistent styling (border-border/50, backdrop-blur)

2. **`src/components/HowToContribute.tsx`**
   - Self-contained section component
   - Top half: 4-step contribution workflow displayed as a horizontal stepper (vertical on mobile) with numbered circles and connecting lines
   - Bottom half: large CTA card with dark gradient background, GitHub button (`Github` Lucide icon), and CC BY 4.0 badge
   - GitHub link will point to the repository URL (placeholder initially, easily updated once repo is connected)

### Modified Files

3. **`src/pages/Index.tsx`**
   - Import `TeamAccountabilityGrid` and `HowToContribute`
   - Render them after `McoePillars` and before the footer
   - Order: Matrix -> Coordination Gap -> MCoE Pillars -> Team Grid -> How to Contribute -> Footer

### Design Consistency
- All new cards follow the same `border-border/50 bg-card/80 backdrop-blur-sm` styling
- Section headings use `text-2xl font-bold sm:text-3xl` with centered layout
- Container widths use `max-w-7xl` to match existing sections
- The CTA card uses a distinctive `bg-primary/10 border-primary/30` treatment to stand out
- Team card expansion uses smooth height transitions for polish
