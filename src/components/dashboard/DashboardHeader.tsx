import { Activity, Leaf } from "lucide-react";

const DashboardHeader = () => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center glow-primary">
          <Leaf className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">EcoWatch Kuwait</h1>
          <p className="text-xs text-muted-foreground">Smart Trash & Tire Pollution Monitoring</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Activity className="w-3.5 h-3.5 text-primary" />
          <span>System Active</span>
        </div>
        <div className="text-right">
          <p className="text-sm font-mono font-medium text-foreground">{timeStr}</p>
          <p className="text-[10px] text-muted-foreground">{dateStr}</p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
