import { AlertTriangle } from "lucide-react";

interface DoesNotOwnBoxProps {
  items: string[];
}

const DoesNotOwnBox = ({ items }: DoesNotOwnBoxProps) => (
  <div className="mt-4 rounded-lg border border-danger/30 bg-danger-muted p-4">
    <div className="flex items-center gap-2 mb-2">
      <AlertTriangle className="h-4 w-4 text-danger" />
      <h4 className="text-sm font-bold text-danger">Does Not Own</h4>
    </div>
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="text-xs text-danger/80 flex items-start gap-1.5">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-danger/60" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default DoesNotOwnBox;
