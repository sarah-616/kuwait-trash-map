import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "06:00", score: 15 },
  { time: "08:00", score: 32 },
  { time: "10:00", score: 45 },
  { time: "12:00", score: 72 },
  { time: "14:00", score: 58 },
  { time: "16:00", score: 65 },
  { time: "18:00", score: 48 },
  { time: "20:00", score: 35 },
  { time: "22:00", score: 20 },
];

const TrashChart = () => {
  return (
    <div className="rounded-lg bg-card border border-border p-5">
      <h2 className="text-lg font-semibold text-foreground mb-1">Trash Score Timeline</h2>
      <p className="text-xs text-muted-foreground mb-4">Average trash index across all zones today</p>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="trashGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(165, 80%, 45%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(165, 80%, 45%)" stopOpacity={0} />
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
