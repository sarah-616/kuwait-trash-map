import { Trash2, Users, MapPin, AlertTriangle, Circle } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import MapPanel from "@/components/dashboard/MapPanel";
import DetectionPanel from "@/components/dashboard/DetectionPanel";
import TrashChart from "@/components/dashboard/TrashChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-6 pb-8">
      <div className="max-w-[1440px] mx-auto">
        <DashboardHeader />

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <StatsCard
            title="Trash Score"
            value="47.2"
            subtitle="Average across zones"
            icon={<Trash2 className="w-4 h-4" />}
            trend={{ value: -8.3, label: "vs yesterday" }}
            variant="warning"
          />
          <StatsCard
            title="People Detected"
            value="1,284"
            subtitle="In monitored areas"
            icon={<Users className="w-4 h-4" />}
            trend={{ value: 12.5, label: "vs yesterday" }}
            variant="default"
          />
          <StatsCard
            title="Active Zones"
            value="24"
            subtitle="Out of 30 total"
            icon={<MapPin className="w-4 h-4" />}
            variant="success"
          />
          <StatsCard
            title="Alerts Today"
            value="7"
            subtitle="3 critical, 4 moderate"
            icon={<AlertTriangle className="w-4 h-4" />}
            trend={{ value: 42, label: "vs yesterday" }}
            variant="danger"
          />
          <StatsCard
            title="Tire Pollution"
            value="156"
            subtitle="Tires detected today"
            icon={<Circle className="w-4 h-4" />}
            trend={{ value: 23.1, label: "vs yesterday" }}
            variant="warning"
          />
        </div>

        {/* Map + Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          <div className="lg:col-span-3">
            <MapPanel />
          </div>
          <div className="lg:col-span-2">
            <TrashChart />
          </div>
        </div>

        {/* Detection Panel */}
        <DetectionPanel />
      </div>
    </div>
  );
};

export default Index;
