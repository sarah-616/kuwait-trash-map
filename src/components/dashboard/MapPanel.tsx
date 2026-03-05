import kuwaitMap from "@/assets/kuwait-map.png";

const zones = [
  { name: "Kuwait City", status: "high", x: "38%", y: "52%" },
  { name: "Hawalli", status: "medium", x: "62%", y: "62%" },
  { name: "Jahra", status: "low", x: "30%", y: "58%" },
  { name: "Ahmadi", status: "high", x: "58%", y: "38%" },
  { name: "Farwaniya", status: "medium", x: "68%", y: "25%" },
];

const statusColors: Record<string, string> = {
  low: "bg-success",
  medium: "bg-warning",
  high: "bg-destructive",
};

const statusPulse: Record<string, string> = {
  low: "bg-success/40",
  medium: "bg-warning/40",
  high: "bg-destructive/40",
};

const MapPanel = () => {
  return (
    <div className="rounded-lg bg-card border border-border p-5 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
        <h2 className="text-lg font-semibold text-foreground">Live Pollution Density Map</h2>
          <p className="text-xs text-muted-foreground">Trash & tire pollution monitoring across Kuwait</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          {[
            { label: "Clean", color: "bg-success" },
            { label: "Moderate", color: "bg-warning" },
            { label: "Critical", color: "bg-destructive" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
              <span className="text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 rounded-md overflow-hidden bg-background min-h-[350px]">
        <img
          src={kuwaitMap}
          alt="Kuwait trash density map"
          className="w-full h-full object-contain"
        />
        {zones.map((zone) => (
          <div
            key={zone.name}
            className="absolute group cursor-pointer"
            style={{ left: zone.x, top: zone.y, transform: "translate(-50%, -50%)" }}
          >
            <div className={`w-4 h-4 rounded-full ${statusColors[zone.status]} relative`}>
              <div className={`absolute inset-0 rounded-full ${statusPulse[zone.status]} animate-pulse-glow`} />
            </div>
            <div className="glass absolute bottom-6 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="font-medium text-foreground">{zone.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapPanel;
