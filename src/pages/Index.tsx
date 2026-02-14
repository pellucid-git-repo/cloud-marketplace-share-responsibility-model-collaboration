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
import type { LucideIcon } from "lucide-react";
import ResponsibilityCard from "@/components/ResponsibilityCard";
import responsibilitiesData from "@/data/data/responsibilities.json";
import CoordinationGap from "@/components/CoordinationGap";
import McoePillars from "@/components/McoePillars";
import TeamAccountabilityGrid from "@/components/TeamAccountabilityGrid";
import HowToContribute from "@/components/HowToContribute";

// Map responsibility titles to their icons
const iconMap: Record<string, LucideIcon> = {
  "Discovery & Search": Search,
  "Platform Security": Lock,
  "Transaction Infrastructure": CreditCard,
  "Entitlement Management": Key,
  "Governance Capabilities": Settings,
  "Spend Visibility": Eye,
  "Standard Contracts": FileText,
  "Product Security": ShieldCheck,
  "Software Functionality": Cpu,
  "Updates & Maintenance": RefreshCw,
  "Licensing & Compliance": Award,
  "Support & SLAs": Headphones,
  "Pricing & Commercial Terms": DollarSign,
  "Private Offer Creation": Gift,
  "Procurement Strategy": ShoppingCart,
  "Cross-Functional Alignment": Users,
  "Vendor Assessment": ClipboardCheck,
  "Contract Management": Briefcase,
  "Financial Management": Wallet,
  "Integration & Deployment": Link,
  "Policy Definition": BookOpen,
};

function parseResponsibilities(items: string[]) {
  return items.map((item) => {
    const cleaned = item.replace(/\s*\[cite:[^\]]*\]/g, "");
    const colonIndex = cleaned.indexOf(":");
    const title = colonIndex !== -1 ? cleaned.slice(0, colonIndex).trim() : cleaned;
    const description = colonIndex !== -1 ? cleaned.slice(colonIndex + 1).trim().replace(/\.$/, "") : "";
    return { icon: iconMap[title] || FileText, title, description };
  });
}

function parseDoesNotOwn(items: string[]) {
  return items.map((item) => item.replace(/\s*\[cite:[^\]]*\]/g, "").replace(/\.$/, ""));
}

const { cloudProvider, vendor, customer } = responsibilitiesData.framework;

const cloudProviderResponsibilities = parseResponsibilities(cloudProvider.responsibilities);
const cloudProviderDoesNotOwn = parseDoesNotOwn(cloudProvider.doesNotOwn);
const vendorResponsibilities = parseResponsibilities(vendor.responsibilities);
const vendorDoesNotOwn = parseDoesNotOwn(vendor.doesNotOwn);
const customerResponsibilities = parseResponsibilities(customer.responsibilities);
const customerDoesNotOwn = parseDoesNotOwn(customer.doesNotOwn);

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

      {/* Coordination Gap */}
      <CoordinationGap />

      {/* MCoE Pillars */}
      <McoePillars />

      {/* Team Accountability Grid */}
      <TeamAccountabilityGrid />

      {/* How to Contribute */}
      <HowToContribute />

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
