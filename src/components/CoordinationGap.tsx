import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  Clock,
  Users,
  Timer,
  Zap,
  CheckCircle2,
  ArrowRight,
  Shield,
  GitBranch,
  Link,
} from "lucide-react";

const timelineSteps = [
  { day: "Day 1", text: "Engineering discovers tool in marketplace" },
  { day: "Days 2-5", text: "Engineering requests access; Procurement asks for justification" },
  { day: "Days 6-10", text: "Finance questions budget allocation, no clear commitment mapping" },
  { day: "Days 11-20", text: "Security requests vendor InfoSec questionnaire, manual back-and-forth" },
  { day: "Days 21-25", text: "Legal reviews SCMP, requests amendments" },
  { day: "Days 26-30", text: "Procurement creates manual PO workaround" },
  { day: "Days 31-40", text: "IT provisions access, discovers integration issues" },
  { day: "Week 7+", text: "Tool finally deployed, engineers frustrated" },
];

const targetOutcomes = [
  {
    speed: "Same-day (hours)",
    text: "Pre-approved vendor, under spending threshold",
    icon: Zap,
  },
  {
    speed: "3-5 days",
    text: "Pre-approved vendor, over threshold — automated approval routing",
    icon: ArrowRight,
  },
  {
    speed: "1-2 weeks",
    text: "New vendor, standard risk profile — parallel security/legal reviews",
    icon: GitBranch,
  },
  {
    speed: "2-4 weeks",
    text: "New vendor, high-risk — full assessment with visibility and automation",
    icon: Shield,
  },
];

const costStats = [
  { value: "3-6 weeks", label: "per transaction" },
  { value: "9 teams", label: "involved, 2-5 hrs each" },
  { value: "20-30 hrs", label: "per $10K purchase" },
];

const enablers = [
  "Automated approval routing",
  "Pre-approved vendor catalogs (Private Marketplace)",
  "Parallel (not sequential) cross-functional reviews",
  "Integrated P2P and financial tracking",
];

const CoordinationGap = () => (
  <section id="coordination-gap" className="mx-auto max-w-7xl px-6 pb-20">
    <h2 className="mb-4 text-center text-2xl font-bold text-foreground sm:text-3xl">
      The Coordination Gap
    </h2>
    <p className="mx-auto mb-10 max-w-3xl text-center text-muted-foreground leading-relaxed">
      Manual marketplace procurement creates organizational gridlock. Here's what changes when you move to a marketplace-native approach.
    </p>

    <div className="grid gap-6 lg:grid-cols-2">
      {/* Current State */}
      <Card className="border-danger/30 bg-danger-muted/30 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="rounded-lg bg-danger/15 p-2.5">
              <AlertTriangle className="h-6 w-6 text-danger" />
            </div>
            <div>
              <CardTitle className="text-lg">Current State: Ad Hoc Coordination</CardTitle>
              <p className="text-xs text-muted-foreground font-medium">Manual handoffs, sequential approvals</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Timeline */}
          <div className="relative ml-3 border-l-2 border-danger/30 pl-6 space-y-4">
            {timelineSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full bg-danger/20 text-[10px] font-bold text-danger ring-2 ring-danger/30">
                  {i + 1}
                </div>
                <p className="text-sm">
                  <span className="font-semibold text-danger">{step.day}</span>
                  <span className="text-muted-foreground"> — {step.text}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Cost Callout */}
          <div className="mt-6 rounded-lg border border-danger/20 bg-danger-muted/50 p-4">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-danger">
              Cost of Manual Coordination
            </h4>
            <div className="grid grid-cols-3 gap-3 text-center">
              {costStats.map((s) => (
                <div key={s.value}>
                  <p className="text-lg font-bold text-foreground">{s.value}</p>
                  <p className="text-[11px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              Result: governance failures, shadow IT, lost engineering productivity
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Target State */}
      <Card className="border-success/30 bg-success-muted/30 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="rounded-lg bg-success/15 p-2.5">
              <CheckCircle2 className="h-6 w-6 text-success" />
            </div>
            <div>
              <CardTitle className="text-lg">Target State: Marketplace-Native</CardTitle>
              <p className="text-xs text-muted-foreground font-medium">Automated routing, parallel reviews</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Outcome List */}
          <div className="space-y-4">
            {targetOutcomes.map((o) => (
              <div key={o.speed} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 rounded-md bg-success/15 p-1.5">
                  <o.icon className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-success">{o.speed}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{o.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enablers Callout */}
          <div className="mt-6 rounded-lg border border-success/20 bg-success-muted/50 p-4">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-success">
              What Makes This Possible
            </h4>
            <ul className="space-y-2">
              {enablers.map((e) => (
                <li key={e} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default CoordinationGap;
