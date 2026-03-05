import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  trend?: { value: number; label: string };
  variant?: "default" | "success" | "warning" | "danger";
}

const variantStyles = {
  default: "border-border",
  success: "border-success/30",
  warning: "border-warning/30",
  danger: "border-destructive/30",
};

const iconBgStyles = {
  default: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-destructive/10 text-destructive",
};

const StatsCard = ({ title, value, subtitle, icon, trend, variant = "default" }: StatsCardProps) => {
  return (
    <div className={`rounded-lg bg-card border ${variantStyles[variant]} p-5 flex flex-col gap-3`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <div className={`w-9 h-9 rounded-md flex items-center justify-center ${iconBgStyles[variant]}`}>
          {icon}
        </div>
      </div>
      <div>
        <span className="text-3xl font-bold tracking-tight text-foreground">{value}</span>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-xs">
          <span className={trend.value >= 0 ? "text-success" : "text-destructive"}>
            {trend.value >= 0 ? "↑" : "↓"} {Math.abs(trend.value)}%
          </span>
          <span className="text-muted-foreground">{trend.label}</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
