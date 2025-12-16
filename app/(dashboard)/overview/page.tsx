import { OverviewStats } from "@/components/Dashboard/Home/OverviewStats";
import { MonthlyViewsChart } from "@/components/Dashboard/Home/MonthlyViewsChart";
import { LocationDonutChart } from "@/components/Dashboard/Home/LocationDonutChart";
import { UsersTable } from "@/components/Dashboard/Users/UsersTable";
import DashboardHeader from "@/components/Dashboard/Shared/DashboardHeader";

export default function OverviewPage() {
  return (
    <>  
      <DashboardHeader title="Admin Overview" description="Track, manage and forecast your customers and Donations." />
      <div className="p-4 md:p-8 w-full mx-auto">
      {/* Stats Row */}
      <OverviewStats />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4 md:mb-8">
        <div className="lg:col-span-2">
          <MonthlyViewsChart />
        </div>
        <div className="lg:col-span-1">
          <LocationDonutChart />
        </div>
      </div>

      {/* Recent Users Table */}
      <div className="bg-white rounded-xl shadow-xs border border-[#E9EAEB]">
        <h2 className="text-lg font-semibold text-primary p-5">All User</h2>
        <UsersTable limit={5} />
      </div>
      </div>
    </>
  );
}
