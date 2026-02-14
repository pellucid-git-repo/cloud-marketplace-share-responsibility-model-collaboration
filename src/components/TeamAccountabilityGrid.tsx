import { useState } from "react";
import {
  Code,
  ShoppingCart,
  Wallet,
  Shield,
  Scale,
  ClipboardCheck,
  TrendingUp,
  Server,
  Handshake,
  ChevronDown,
  LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface TeamData {
  icon: LucideIcon;
  name: string;
  role: string;
  bullets: string[];
}

const teams: TeamData[] = [
  {
    icon: Code,
    name: "Engineering",
    role: "Discovers and evaluates tools; initiates procurement requests; owns technical integration",
    bullets: [
      "Evaluate marketplace offerings against technical requirements",
      "Initiate procurement requests with business justification",
      "Own deployment, integration, and ongoing maintenance",
      "Provide technical input for vendor security assessments",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Procurement",
    role: "Executes purchase orders; manages vendor relationships; coordinates RFx processes",
    bullets: [
      "Execute purchase orders through marketplace or P2P systems",
      "Manage vendor relationships and contract renewals",
      "Coordinate RFx processes for competitive evaluations",
      "Ensure purchases align with organizational policies",
    ],
  },
  {
    icon: Wallet,
    name: "Finance",
    role: "Allocates budgets; maps spend to cloud commitments (EDP/MACC); manages PO attribution",
    bullets: [
      "Allocate budgets and map spend to cloud commitments",
      "Track EDP/MACC burn-down against marketplace purchases",
      "Manage PO attribution and cost center alignment",
      "Provide spend analytics and marketplace ROI reporting",
    ],
  },
  {
    icon: Shield,
    name: "Security",
    role: "Conducts vendor risk assessments; validates compliance (SOC 2, ISO 27001); reviews data handling",
    bullets: [
      "Conduct vendor InfoSec questionnaires and risk assessments",
      "Validate compliance certifications (SOC 2, ISO 27001, FedRAMP)",
      "Review data handling practices and privacy implications",
      "Define security baselines for marketplace vendor onboarding",
    ],
  },
  {
    icon: Scale,
    name: "Legal",
    role: "Reviews SCMP and contract terms; negotiates amendments; manages licensing compliance",
    bullets: [
      "Review Standard Contract for Marketplace Purchases (SCMP)",
      "Negotiate contract amendments and custom terms",
      "Manage licensing compliance and usage rights",
      "Assess liability, indemnification, and IP provisions",
    ],
  },
  {
    icon: ClipboardCheck,
    name: "Compliance",
    role: "Monitors regulatory requirements; ensures audit readiness; tracks policy adherence",
    bullets: [
      "Monitor regulatory requirements (GDPR, HIPAA, SOX)",
      "Ensure audit readiness for marketplace transactions",
      "Track policy adherence across procurement workflows",
      "Validate vendor compliance with internal standards",
    ],
  },
  {
    icon: TrendingUp,
    name: "FinOps",
    role: "Optimizes cloud spend; tracks commitment burn-down; provides cost visibility and recommendations",
    bullets: [
      "Optimize cloud spend and marketplace purchase allocation",
      "Track commitment burn-down and utilization rates",
      "Provide cost visibility dashboards and recommendations",
      "Model total cost of ownership for marketplace vs. direct",
    ],
  },
  {
    icon: Server,
    name: "IT Ops",
    role: "Provisions user access; configures IAM; manages P2P system integrations",
    bullets: [
      "Provision user access and configure IAM policies",
      "Manage P2P system integrations (Coupa, SAP Ariba)",
      "Set up Private Marketplace configurations",
      "Handle technical deployment and access provisioning",
    ],
  },
  {
    icon: Handshake,
    name: "Vendor Management",
    role: "Manages vendor lifecycle; tracks SLAs and performance; coordinates renewals",
    bullets: [
      "Manage end-to-end vendor lifecycle in marketplace",
      "Track SLAs, performance metrics, and satisfaction",
      "Coordinate contract renewals and renegotiations",
      "Maintain vendor scorecards and relationship health",
    ],
  },
];

const TeamCard = ({ team }: { team: TeamData }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = team.icon;

  return (
    <Card
      className="border-border/50 bg-card/80 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-primary/30"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/15 p-2">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{team.name}</h3>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "mt-4 max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm text-muted-foreground mb-3">{team.role}</p>
          <ul className="space-y-1.5">
            {team.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

const TeamAccountabilityGrid = () => (
  <section className="mx-auto max-w-7xl px-6 py-20">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
        The 9-Team Accountability Grid
      </h2>
      <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
        Every marketplace transaction touches these nine teams. Click any team to see their specific responsibilities — and why coordination is the missing link.
      </p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {teams.map((team) => (
        <TeamCard key={team.name} team={team} />
      ))}
    </div>
  </section>
);

export default TeamAccountabilityGrid;
