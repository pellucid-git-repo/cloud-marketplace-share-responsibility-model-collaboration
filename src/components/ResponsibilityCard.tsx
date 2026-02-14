import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ResponsibilityItem from "./ResponsibilityItem";
import DoesNotOwnBox from "./DoesNotOwnBox";

interface ResponsibilityData {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ResponsibilityCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  accentColor: string;
  responsibilities: ResponsibilityData[];
  doesNotOwn: string[];
}

const ResponsibilityCard = ({
  icon: HeaderIcon,
  title,
  subtitle,
  accentColor,
  responsibilities,
  doesNotOwn,
}: ResponsibilityCardProps) => (
  <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
    <CardHeader className="pb-4">
      <div className="flex items-center gap-3 mb-1">
        <div className={`rounded-lg p-2.5 ${accentColor}`}>
          <HeaderIcon className="h-6 w-6" />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-0">
        {responsibilities.map((r) => (
          <ResponsibilityItem key={r.title} icon={r.icon} title={r.title} description={r.description} />
        ))}
      </div>
      <DoesNotOwnBox items={doesNotOwn} />
    </CardContent>
  </Card>
);

export default ResponsibilityCard;
