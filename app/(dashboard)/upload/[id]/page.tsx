// app/(dashboard)/upload/[id]/page.tsx
import DashboardHeader from "@/components/Dashboard/Shared/DashboardHeader";
import { UploadDetails } from "@/components/Dashboard/Upload/UploadDetails";

export default async function UploadDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const isNew = id === "new";

  return (
    <div>
      <DashboardHeader
        title={isNew ? "New Upload" : "Upload Details"}
        description={
          isNew
            ? "Upload a new book or content item."
            : "View and manage upload details."
        }
      />
      <div className="p-4 md:p-8 w-full mx-auto">
        <UploadDetails id={id} />
      </div>
    </div>
  );
}
