import { FileText, Download, Eye } from "lucide-react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import detection1 from "@/assets/detection-1.jpg";
import detection2 from "@/assets/detection-2.jpg";
import detection3 from "@/assets/detection-3.jpg";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import NavBar from "@/components/dashboard/NavBar";

const reports = [
  { id: 1, date: "2026-03-08 14:32", location: "Kuwait City – Zone A", level: "high" as const, score: 78, image: detection1 },
  { id: 2, date: "2026-03-08 13:15", location: "Salmiya Park – Zone B", level: "low" as const, score: 12, image: detection2 },
  { id: 3, date: "2026-03-08 11:47", location: "Shuwaikh Beach – Zone C", level: "medium" as const, score: 54, image: detection3 },
  { id: 4, date: "2026-03-07 16:20", location: "Jahra – Zone D", level: "low" as const, score: 8, image: detection2 },
  { id: 5, date: "2026-03-07 10:05", location: "Ahmadi – Zone E", level: "high" as const, score: 82, image: detection1 },
  { id: 6, date: "2026-03-06 09:30", location: "Farwaniya – Zone F", level: "medium" as const, score: 45, image: detection3 },
];

const levelConfig = {
  low: { label: "Low", variant: "outline" as const, className: "border-success text-success" },
  medium: { label: "Medium", variant: "outline" as const, className: "border-warning text-warning" },
  high: { label: "High", variant: "outline" as const, className: "border-destructive text-destructive" },
};

const Reports = () => {
  const [filter, setFilter] = useState<"all" | "low" | "medium" | "high">("all");

  const filtered = filter === "all" ? reports : reports.filter((r) => r.level === filter);

  return (
    <div className="min-h-screen bg-background px-6 pb-8">
      <div className="max-w-[1440px] mx-auto">
        <DashboardHeader />

        <div className="rounded-lg bg-card border border-border p-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent" />
              <h2 className="text-lg font-semibold text-foreground">Detection Reports</h2>
              <span className="text-xs text-muted-foreground ml-1">({filtered.length} records)</span>
            </div>
            <div className="flex items-center gap-2">
              {(["all", "low", "medium", "high"] as const).map((f) => (
                <Button
                  key={f}
                  size="sm"
                  variant={filter === f ? "default" : "outline"}
                  className="text-xs h-7 capitalize"
                  onClick={() => setFilter(f)}
                >
                  {f === "all" ? "All" : f}
                </Button>
              ))}
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Trash Level</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Image</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((report) => {
                const config = levelConfig[report.level];
                return (
                  <TableRow key={report.id}>
                    <TableCell className="font-mono text-xs text-muted-foreground">{report.date}</TableCell>
                    <TableCell className="text-sm font-medium text-foreground">{report.location}</TableCell>
                    <TableCell>
                      <Badge variant={config.variant} className={config.className}>
                        {config.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className={`font-mono font-semibold text-sm ${
                        report.score > 60 ? "text-destructive" : report.score > 30 ? "text-warning" : "text-success"
                      }`}>
                        {report.score}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex items-center gap-1.5 text-xs text-accent hover:underline">
                            <Eye className="w-3.5 h-3.5" />
                            View
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg p-2">
                          <img src={report.image} alt={report.location} className="w-full rounded-md" />
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
