// app\(dashboard)\projects\[id]\page.tsx
import { ProjectDetails } from "@/components/Dashboard/Projects/ProjectDetails";
import DashboardHeader from "@/components/Dashboard/Shared/DashboardHeader";

export default async function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <DashboardHeader title="Request details"/>
      <div className="p-4 md:p-8 w-full mx-auto">
        <ProjectDetails id={id} />
      </div>
    </div>
  );
}
