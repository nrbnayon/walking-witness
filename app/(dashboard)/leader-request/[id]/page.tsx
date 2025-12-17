// app\(dashboard)\leader-request\[id]\page.tsx // dynamically get data and for functionality
import { RequestDetails } from "@/components/Dashboard/LeaderRequest/RequestDetails";

export default async function RequestDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return (
    <div className="p-4 md:p-8 w-full mx-auto">
      <h1 className="text-2xl font-bold text-primary dark:text-gray-50 mb-6">
        Request details
      </h1>
      <RequestDetails id={id} />
    </div>
  );
}
