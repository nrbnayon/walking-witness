import { RequestDetails } from "@/components/Dashboard/LeaderRequest/RequestDetails";

export default async function RequestDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Request details</h1>
      <RequestDetails id={id} />
    </div>
  );
}
