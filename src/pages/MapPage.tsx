import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MapPanel from "@/components/dashboard/MapPanel";
import NavBar from "@/components/dashboard/NavBar";

const MapPage = () => {
  return (
    <div className="min-h-screen bg-background px-6 pb-8">
      <div className="max-w-[1440px] mx-auto">
        <DashboardHeader />
        <NavBar />
        <MapPanel />
      </div>
    </div>
  );
};

export default MapPage;
