import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "06:00", trash: 15, tires: 3 },
  { time: "08:00", trash: 32, tires: 8 },
  { time: "10:00", trash: 45, tires: 15 },
  { time: "12:00", trash: 72, tires: 28 },
  { time: "14:00", trash: 58, tires: 22 },
  { time: "16:00", trash: 65, tires: 35 },
  { time: "18:00", trash: 48, tires: 18 },
  { time: "20:00", trash: 35, tires: 12 },
  { time: "22:00", trash: 20, tires: 5 },
];

const TrashChart = () => {
  return (
    <div className="rounded-lg bg-card border border-border p-5 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-foreground mb-1">Pollution Timeline</h2>
      <p className="text-xs text-muted-foreground mb-4">Trash & tire pollution index across all zones today</p>
      <div className="flex items-center gap-4 text-xs mb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-muted-foreground">Trash Score</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive" />
          <span className="text-muted-foreground">Tire Pollution</span>
        </div>
      </div>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="trashGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(165, 80%, 45%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(165, 80%, 45%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="tireGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 18%)" />
            <XAxis dataKey="time" tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(220, 22%, 12%)",
                border: "1px solid hsl(220, 16%, 18%)",
                borderRadius: "8px",
                color: "hsl(210, 20%, 92%)",
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="trash"
              stroke="hsl(165, 80%, 45%)"
              strokeWidth={2}
              fill="url(#trashGradient)"
            />
            <Area
              type="monotone"
              dataKey="tires"
              stroke="hsl(0, 72%, 55%)"
              strokeWidth={2}
              fill="url(#tireGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrashChart;
