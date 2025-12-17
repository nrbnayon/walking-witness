// app/(dashboard)/upload/content/page.tsx
import DashboardHeader from "@/components/Dashboard/Shared/DashboardHeader";
import { UploadsClient } from "@/components/Dashboard/Upload/UploadsClient";
import type { UploadType } from "@/types/uploads";

const FILTER_TYPE: UploadType = "Content";

export default function UploadContentPage() {
  return (
    <div>
      <DashboardHeader
        title="Upload Content"
        description="View and manage all uploaded content items."
      />
      <div className="p-4 md:p-8 w-full mx-auto">
        <UploadsClient filterType={FILTER_TYPE} />
      </div>
    </div>
  );
}
