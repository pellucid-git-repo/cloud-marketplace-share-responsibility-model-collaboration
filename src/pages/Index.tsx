import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Cloud,
  Package,
  Shield,
  Search,
  Lock,
  CreditCard,
  Key,
  Settings,
  Eye,
  FileText,
  ShieldCheck,
  Cpu,
  RefreshCw,
  Award,
  Headphones,
  DollarSign,
  Gift,
  ShoppingCart,
  Users,
  ClipboardCheck,
  Briefcase,
  Wallet,
  Link,
  BookOpen,
} from "lucide-react";
import ResponsibilityCard from "@/components/ResponsibilityCard";

const cloudProviderResponsibilities = [
  { icon: Search, title: "Discovery & Search", description: "Product catalog, search, vendor listings, pricing transparency" },
  { icon: Lock, title: "Platform Security", description: "Infrastructure security, transaction data protection, fraud prevention" },
  { icon: CreditCard, title: "Transaction Infrastructure", description: "Payment processing, billing aggregation, metering, invoicing" },
  { icon: Key, title: "Entitlement Management", description: "Grant/revoke access, subscriptions, license enforcement" },
  { icon: Settings, title: "Governance Capabilities", description: "IAM framework, Private Marketplace, procurement APIs, policy tools" },
  { icon: Eye, title: "Spend Visibility", description: "Cost & usage reports, marketplace analytics, billing API access" },
  { icon: FileText, title: "Standard Contract Frameworks", description: "SCMP, standard licensing models, amendment mechanisms" },
];

const cloudProviderDoesNotOwn = [
  "Customer procurement policy design",
  "Vendor selection criteria",
  "Contract negotiation outcomes",
  "Customer security assessment execution",
  "Customer approval workflows",
];

const vendorResponsibilities = [
  { icon: ShieldCheck, title: "Product Security", description: "Application security, vulnerability management, data protection" },
  { icon: Cpu, title: "Software Functionality", description: "Features, performance, reliability, uptime" },
  { icon: RefreshCw, title: "Updates & Maintenance", description: "Patches, upgrades, bug fixes, deprecation management" },
  { icon: Award, title: "Licensing & Compliance", description: "License terms, usage rights, compliance attestations (SOC 2, FedRAMP, ISO 27001)" },
  { icon: Headphones, title: "Support & SLAs", description: "Customer support, service level commitments, escalation procedures" },
  { icon: DollarSign, title: "Pricing & Commercial Terms", description: "Pricing models, discount structures, contract terms" },
  { icon: Gift, title: "Private Offer Creation", description: "Custom offers, negotiated pricing, CPPO facilitation" },
];

const vendorDoesNotOwn = [
  "Customer procurement processes",
  "Customer security review timelines",
  "Customer approval workflows",
  "Customer ERP/P2P integration",
  "CSP platform infrastructure",
];

const customerResponsibilities = [
  { icon: ShoppingCart, title: "Procurement Strategy", description: "Marketplace vs. traditional channel, vendor selection, multi-marketplace approach" },
  { icon: Users, title: "Cross-Functional Process Design", description: "Define roles, workflows across procurement, finance, security, IT, legal" },
  { icon: ClipboardCheck, title: "Vendor Assessment", description: "Security review, compliance validation, third-party risk scoring" },
  { icon: Briefcase, title: "Contract Management", description: "Commercial negotiation, legal review, amendment tracking, renewals" },
  { icon: Wallet, title: "Financial Management", description: "Budget allocation, PO management, spend attribution, commitment tracking" },
  { icon: Link, title: "Integration & Deployment", description: "P2P system connectivity, IAM configuration, user access provisioning" },
  { icon: BookOpen, title: "Policy Definition", description: "Acceptable use policies, security baselines, spending thresholds, approval authority" },
];

const customerDoesNotOwn = [
  "CSP platform infrastructure",
  "Vendor product roadmaps or security architecture",
  "CSP billing system design",
  "Vendor SLA commitments",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:py-36">
          <Badge variant="outline" className="mb-6 border-primary/40 text-primary">
            v1.0 — Open for Industry Contribution
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
            The Cloud Marketplace<br />
            <span className="text-primary">Shared Responsibility Model</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            An open framework defining who owns what across Cloud Providers, Vendors, and Customers in marketplace procurement — closing the three-party responsibility gap.
          </p>
          <Button
            size="lg"
            className="mt-8 gap-2"
            onClick={() => document.getElementById("matrix")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore the Framework <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Context */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Why This Model Exists</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Traditional shared responsibility models like AWS's cover infrastructure layers — compute, storage, networking. But <span className="text-foreground font-medium">cloud marketplace transactions are fundamentally different</span>: they're three-party, business-process-centric interactions spanning procurement, finance, security, and legal. This framework maps the responsibilities that fall between the cracks.
        </p>
      </section>

      {/* Matrix */}
      <section id="matrix" className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
          The Three-Party Responsibility Matrix
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <ResponsibilityCard
            icon={Cloud}
            title="Cloud Provider"
            subtitle="Platform Layer"
            accentColor="bg-primary/15 text-primary"
            responsibilities={cloudProviderResponsibilities}
            doesNotOwn={cloudProviderDoesNotOwn}
          />
          <ResponsibilityCard
            icon={Package}
            title="Vendor"
            subtitle="Product Layer"
            accentColor="bg-primary/15 text-primary"
            responsibilities={vendorResponsibilities}
            doesNotOwn={vendorDoesNotOwn}
          />
          <ResponsibilityCard
            icon={Shield}
            title="Customer"
            subtitle="Governance & Workflow Layer"
            accentColor="bg-primary/15 text-primary"
            responsibilities={customerResponsibilities}
            doesNotOwn={customerDoesNotOwn}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>Enterprise Marketplace Shared Responsibility Model v1.0</p>
        <p className="mt-1">
          Licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            CC BY 4.0
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
