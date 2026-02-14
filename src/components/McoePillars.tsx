import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  ShoppingCart,
  Wallet,
  Lock,
  Cpu,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  tagline: string;
  items: string[];
}

const pillars: Pillar[] = [
  {
    icon: Shield,
    title: "Governance",
    tagline: "Sets the rules, thresholds, and approval authority",
    items: [
      "Approval workflows and spending thresholds",
      "Commitment tracking (EDP/MACC alignment)",
      "Private Marketplace curation and policies",
      "Security baselines for vendor onboarding",
      "Compliance monitoring and audit readiness",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Procurement",
    tagline: "Executes purchases and manages vendor relationships",
    items: [
      "Purchase execution and order management",
      "Vendor relationship management",
      "Contract negotiations and renewals",
      "Pipeline management and demand forecasting",
      "RFx coordination for marketplace vendors",
    ],
  },
  {
    icon: Wallet,
    title: "Finance",
    tagline: "Tracks budgets, commitments, and cost attribution",
    items: [
      "Budget allocation and cloud commitment mapping",
      "PO attribution and requisition tracking",
      "Spend analytics and marketplace ROI reporting",
      "EDP/MACC burn-down monitoring",
      "Cost center and GL code alignment",
    ],
  },
  {
    icon: Lock,
    title: "Security",
    tagline: "Validates vendor risk and compliance posture",
    items: [
      "Vendor security assessments (questionnaires, pen test reviews)",
      "Compliance validation (SOC 2, ISO 27001, GDPR, HIPAA, FedRAMP)",
      "Third-party risk scoring and continuous monitoring",
      "Data handling and privacy review",
      "Integration security requirements",
    ],
  },
  {
    icon: Cpu,
    title: "Technology",
    tagline: "Configures platforms and integrates systems",
    items: [
      "IAM configuration and Private Marketplace setup",
      "P2P system integration (Coupa, SAP Ariba, Oracle, NetSuite)",
      "Technical enablement and team training",
      "Deployment support and access provisioning",
      "Tool evaluation and architecture review",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    tagline: "Accelerates adoption and reduces procurement friction",
    items: [
      "Self-service access and guided buying experiences",
      "AI/ML adoption acceleration through marketplace",
      "Experimentation support (sandbox environments, PoC funding)",
      "Procurement friction reduction initiatives",
      "Competitive advantage through faster time-to-market",
    ],
  },
];

const McoePillars = () => (
  <section id="mcoe-pillars" className="mx-auto max-w-7xl px-6 pb-20">
    <h2 className="mb-4 text-center text-2xl font-bold text-foreground sm:text-3xl">
      The Marketplace Center of Excellence (MCoE)
    </h2>
    <p className="mx-auto mb-10 max-w-3xl text-center text-muted-foreground leading-relaxed">
      Not a new department — a cross-functional coordination function that connects existing teams under a shared governance layer to eliminate procurement gridlock.
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {pillars.map((p) => (
        <Card
          key={p.title}
          className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="rounded-lg bg-primary/15 p-2.5">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">{p.title}</CardTitle>
                <p className="text-xs text-muted-foreground font-medium">{p.tagline}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {p.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default McoePillars;
