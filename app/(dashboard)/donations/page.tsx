import { StatsCard } from "@/components/Dashboard/Shared/StatsCard";
import { DonationsClient } from "@/components/Dashboard/Donations/DonationsClient";

export default function DonationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Donations</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Track, manage and forecast your customers and Donations.
        </p>
      </div>

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

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Donations</h2>
        <DonationsClient />
      </div>
    </div>
  );
}
