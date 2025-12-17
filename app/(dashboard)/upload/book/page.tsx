// app/(dashboard)/upload/book/page.tsx
import DashboardHeader from "@/components/Dashboard/Shared/DashboardHeader";
import { UploadsClient } from "@/components/Dashboard/Upload/UploadsClient";
import type { UploadType } from "@/types/uploads";

const FILTER_TYPE: UploadType = "Book";

export default function UploadBookPage() {
  return (
    <div>
      <DashboardHeader
        title="Upload Books"
        description="View and manage all uploaded book files."
      />
      <div className="p-4 md:p-8 w-full mx-auto">
        <UploadsClient filterType={FILTER_TYPE} />
      </div>
    </div>
  );
}
