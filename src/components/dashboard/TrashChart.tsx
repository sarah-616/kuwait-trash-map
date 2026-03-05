import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "06:00", score: 15, tires: 5 },
  { time: "08:00", score: 32, tires: 12 },
  { time: "10:00", score: 45, tires: 22 },
  { time: "12:00", score: 72, tires: 38 },
  { time: "14:00", score: 58, tires: 28 },
  { time: "16:00", score: 65, tires: 31 },
  { time: "18:00", score: 48, tires: 18 },
  { time: "20:00", score: 35, tires: 10 },
  { time: "22:00", score: 20, tires: 6 },
];

const TrashChart = () => {
  return (
    <div className="rounded-lg bg-card border border-border p-5">
      <h2 className="text-lg font-semibold text-foreground mb-1">Trash & Tire Timeline</h2>
      <p className="text-xs text-muted-foreground mb-4">Trash index and tire pollution across all zones today</p>
      <div className="flex items-center gap-4 mb-3 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-muted-foreground">Trash Score</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-warning" />
          <span className="text-muted-foreground">Tire Pollution</span>
        </div>
      </div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="trashGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(165, 80%, 45%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(165, 80%, 45%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="tireGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0} />
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
              dataKey="score"
              stroke="hsl(165, 80%, 45%)"
              strokeWidth={2}
              fill="url(#trashGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrashChart;
