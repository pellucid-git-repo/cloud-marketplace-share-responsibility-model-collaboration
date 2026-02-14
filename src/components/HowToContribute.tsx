import { Search, GitFork, FileEdit, GitPullRequest, Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse the framework and identify gaps in responsibilities or MCoE pillars",
  },
  {
    icon: GitFork,
    title: "Fork",
    description: "Fork the GitHub repository to your own account",
  },
  {
    icon: FileEdit,
    title: "Edit",
    description: "Update the responsibility data or MCoE pillars in the code",
  },
  {
    icon: GitPullRequest,
    title: "Submit a PR",
    description: "Open a Pull Request with your reasoning and evidence",
  },
];

const HowToContribute = () => (
  <section className="mx-auto max-w-7xl px-6 py-20">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">How to Contribute</h2>
      <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
        This is an open framework — version 1.0. We invite industry practitioners to refine and extend it based on real-world implementations.
      </p>
    </div>

    {/* Steps */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={step.title} className="relative flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 mb-4">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            {i < steps.length - 1 && (
              <div className="absolute top-6 left-[calc(50%+32px)] hidden w-[calc(100%-64px)] border-t border-dashed border-primary/30 lg:block" />
            )}
            <span className="text-xs font-semibold text-primary mb-1">Step {i + 1}</span>
            <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        );
      })}
    </div>

    {/* CTA Card */}
    <Card className="border-primary/30 bg-primary/10 backdrop-blur-sm p-8 sm:p-12 text-center">
      <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-3">
        Help us define the standard.
      </h3>
      <p className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
        Fork the repo, add your workflow, and submit a Pull Request. Every contribution strengthens the framework for the entire industry.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <Button size="lg" className="gap-2" asChild>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            Contribute on GitHub
          </a>
        </Button>
        <Button variant="ghost" size="lg" className="gap-2 text-muted-foreground" asChild>
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            View License
          </a>
        </Button>
      </div>
      <Badge variant="outline" className="border-primary/40 text-primary">
        Licensed under CC BY 4.0
      </Badge>
    </Card>
  </section>
);

export default HowToContribute;
