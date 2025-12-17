// app/(dashboard)/upload/page.tsx
import DashboardHeader from "@/components/Dashboard/Shared/DashboardHeader";
import { UploadsClient } from "@/components/Dashboard/Upload/UploadsClient";

export default function UploadPage() {
  return (
    <div>
      <DashboardHeader
        title="All Uploads"
        description="Manage uploaded books and content for the Walking Witness platform."
      />
      <div className="p-4 md:p-8 w-full mx-auto">
        <UploadsClient />
      </div>
    </div>
  );
}
