

# The Cloud Marketplace Shared Responsibility Model — Landing Page

## Overview
A single-page, dark-mode cybersecurity-themed landing page presenting the Cloud Marketplace Shared Responsibility Model as an open framework. Uses Inter font, Lucide icons, and a polished professional aesthetic.

---

## 1. Hero Section
- Full-width dark hero with subtle gradient/grid background pattern
- Title: **"The Cloud Marketplace Shared Responsibility Model: An Open Framework"**
- Subtitle explaining the three-party responsibility gap in marketplace procurement
- Version badge: "v1.0 — Open for Industry Contribution"
- CTA button to scroll down to the matrix

## 2. Context Section — "Why This Model Exists"
- Brief explanation that AWS's Shared Responsibility Model covers infrastructure (EC2, S3, RDS) but **does not** address Marketplace transactions
- Highlight that marketplace transactions are three-party and business-process-centric

## 3. The Three-Party Responsibility Matrix
A responsive three-column grid (stacks on mobile), each column as a styled card:

### Column 1: Cloud Provider — Platform Layer
*(Icon: Server or Cloud)*
- **Discovery & Search** — Product catalog, search, vendor listings, pricing transparency
- **Platform Security** — Infrastructure security, transaction data protection, fraud prevention
- **Transaction Infrastructure** — Payment processing, billing aggregation, metering, invoicing
- **Entitlement Management** — Grant/revoke access, subscriptions, license enforcement
- **Governance Capabilities** — IAM framework, Private Marketplace, procurement APIs, policy tools
- **Spend Visibility** — Cost & usage reports, marketplace analytics, billing API access
- **Standard Contract Frameworks** — SCMP, standard licensing models, amendment mechanisms
- 🔴 **Does Not Own** (red-tinted box): Customer procurement policy design, Vendor selection criteria, Contract negotiation outcomes, Customer security assessment execution, Customer approval workflows

### Column 2: Vendor — Product Layer
*(Icon: Package or Code)*
- **Product Security** — Application security, vulnerability management, data protection
- **Software Functionality** — Features, performance, reliability, uptime
- **Updates & Maintenance** — Patches, upgrades, bug fixes, deprecation management
- **Licensing & Compliance** — License terms, usage rights, compliance attestations (SOC 2, FedRAMP, ISO 27001)
- **Support & SLAs** — Customer support, service level commitments, escalation procedures
- **Pricing & Commercial Terms** — Pricing models, discount structures, contract terms
- **Private Offer Creation** — Custom offers, negotiated pricing, CPPO facilitation
- 🔴 **Does Not Own** (red-tinted box): Customer procurement processes, Customer security review timelines, Customer approval workflows, Customer ERP/P2P integration, CSP platform infrastructure

### Column 3: Customer — Governance & Workflow Layer
*(Icon: Shield or Building)*
- **Procurement Strategy** — Marketplace vs. traditional channel, vendor selection, multi-marketplace approach
- **Cross-Functional Process Design** — Define roles, workflows across procurement, finance, security, IT, legal
- **Vendor Assessment** — Security review, compliance validation, third-party risk scoring
- **Contract Management** — Commercial negotiation, legal review, amendment tracking, renewals
- **Financial Management** — Budget allocation, PO management, spend attribution, commitment tracking
- **Integration & Deployment** — P2P system connectivity, IAM configuration, user access provisioning
- **Policy Definition** — Acceptable use policies, security baselines, spending thresholds, approval authority
- 🔴 **Does Not Own** (red-tinted box): CSP platform infrastructure, Vendor product roadmaps or security architecture, CSP billing system design, Vendor SLA commitments

## 4. Footer
- "Licensed under CC BY 4.0" with a link
- "Enterprise Marketplace Shared Responsibility Model v1.0"

## Design Details
- **Dark mode** by default with deep navy/slate backgrounds
- **Inter font** throughout
- Cards with subtle borders and glow effects
- Lucide icons for each responsibility area (Shield, DollarSign, Search, Server, Package, Lock, FileText, Users, etc.)
- "Does Not Own" sections in a distinct red-tinted/bordered box at the bottom of each card
- Smooth scroll and responsive layout (3 columns → 1 column on mobile)

