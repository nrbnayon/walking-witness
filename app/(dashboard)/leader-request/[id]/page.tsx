// app\(dashboard)\leader-request\[id]\page.tsx
import { RequestDetails } from "@/components/Dashboard/LeaderRequest/RequestDetails";

// Fix the type definition - params should be a Promise
export default async function RequestDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
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
