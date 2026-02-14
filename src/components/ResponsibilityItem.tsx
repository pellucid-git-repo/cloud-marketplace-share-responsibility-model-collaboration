import { LucideIcon } from "lucide-react";

interface ResponsibilityItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ResponsibilityItem = ({ icon: Icon, title, description }: ResponsibilityItemProps) => (
  <div className="flex items-start gap-3 py-3 border-b border-border/50 last:border-b-0">
    <div className="mt-0.5 shrink-0 rounded-md bg-accent p-1.5">
      <Icon className="h-4 w-4 text-primary" />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

export default ResponsibilityItem;
