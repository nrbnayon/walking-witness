import { StatsCard } from "@/components/Dashboard/Shared/StatsCard";
import { DonationsClient } from "@/components/Dashboard/Donations/DonationsClient";
import DashboardHeader from "@/components/Dashboard/Shared/DashboardHeader";

export default function DonationsPage() {
  return (
    <div >
       <DashboardHeader title="Donations" description="Track, manage and forecast your customers and Donations." />
      <div className="p-4 md:p-8 w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsCard
          label="Total Donations"
          value="2,420"
          trend={40}
          trendLabel="vs last month"
          className="h-full"
        />
        <StatsCard
          label="Active Donations"
          value="1316"
          trend={40}
          trendLabel="vs last month"
          className="h-full"
        />
      </div>

      <div className="space-y-4 mt-6">
        <DonationsClient />
      </div>
      </div>
    </div>
  );
}
