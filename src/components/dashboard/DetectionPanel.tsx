import { Camera } from "lucide-react";
import detection1 from "@/assets/detection-1.jpg";
import detection2 from "@/assets/detection-2.jpg";
import detection3 from "@/assets/detection-3.jpg";

const feeds = [
  { id: 1, location: "Zone A — Kuwait City", status: "Trash Detected", score: 78, image: detection1, alert: true },
  { id: 2, location: "Zone B — Salmiya Park", status: "Clean", score: 12, image: detection2, alert: false },
  { id: 3, location: "Zone C — Shuwaikh Beach", status: "Moderate", score: 54, image: detection3, alert: true },
];

const DetectionPanel = () => {
  return (
    <div className="rounded-lg bg-card border border-border p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Camera className="w-4 h-4 text-accent" />
        <h2 className="text-lg font-semibold text-foreground">Camera Detections</h2>
        <span className="ml-auto text-xs font-mono text-primary animate-pulse-glow">● LIVE</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {feeds.map((feed) => (
          <div key={feed.id} className="rounded-md overflow-hidden border border-border bg-background">
            <div className="relative aspect-square">
              <img src={feed.image} alt={feed.location} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 glass rounded px-2 py-1 text-[10px] font-mono text-foreground flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${feed.alert ? "bg-destructive" : "bg-success"}`} />
                CAM-{String(feed.id).padStart(2, "0")}
              </div>
              {feed.alert && (
                <div className="absolute top-2 right-2 bg-destructive/90 text-destructive-foreground rounded px-2 py-0.5 text-[10px] font-semibold">
                  ALERT
                </div>
              )}
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-foreground truncate">{feed.location}</p>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-xs text-muted-foreground">{feed.status}</span>
                <span className={`text-xs font-mono font-semibold ${
                  feed.score > 60 ? "text-destructive" : feed.score > 30 ? "text-warning" : "text-success"
                }`}>
                  {feed.score}%
                </span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    feed.score > 60 ? "bg-destructive" : feed.score > 30 ? "bg-warning" : "bg-success"
                  }`}
                  style={{ width: `${feed.score}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetectionPanel;
