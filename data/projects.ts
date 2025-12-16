// data\projects.ts
import { Project, ProjectDetail, ProjectStatus } from "@/types/projects";

const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-1",
    projectName: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Phoenix Baker",
    amount: "$2,800",
    status: "Pending",
  },
  {
    id: "proj-2",
    projectName: "Kitui Hills",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Drew cano",
    amount: "$3,500",
    status: "Approved",
  },
  {
    id: "proj-3",
    projectName: "Kasama Town",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Phoenix Baker",
    amount: "$1,800",
    status: "Declined",
  },
  {
    id: "proj-4",
    projectName: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Drew cano",
    amount: "$2,800",
    status: "Approved",
  },
  {
    id: "proj-5",
    projectName: "Kitui Hills",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Phoenix Baker",
    amount: "$3,500",
    status: "Pending",
  },
  {
    id: "proj-6",
    projectName: "Kasama Town",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Drew cano",
    amount: "$1,800",
    status: "Approved",
  },
  {
    id: "proj-7",
    projectName: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Phoenix Baker",
    amount: "$2,600",
    status: "Pending",
  },
];

const INITIAL_DETAILS: Record<string, ProjectDetail> = {
  "proj-1": {
    id: "proj-1",
    projectName: "Mwati Village",
    date: "Jan 6, 2025",
    leader: "Phoenix Baker",
    amount: "$2,800",
    status: "Pending",
    village: "Kirembe Park View",
    location: "Lower Kasese, Kasese District Uganda",
    pastor: "Alvin",
    sponsor: "Eric Lumika",
    established: "8/11/24",
    category: "Cow",
    stories: "In a small village in Uganda, families wake up each day hoping for enough water and food to make it through. Children walk long distances to school, their dreams bigger than their circumstances. Mothers work tirelessly—farming, cooking, caring—yet still struggle to provide the basics. Even with so little, the community holds onto hope, sharing whatever they have. Their resilience shines brighter than their hardships, reminding us of the strength in unity.",
    details: "The first batch of cow farm training has been successfully completed.",
    updates: "The first batch of cow farm training has been successfully completed.",
    impact: "120 families have directly benefited from our projects.",
    pastorSupport: [100, 100, 100],
    livestock: [
      { name: "$100 Chickens", count: 35 },
      { name: "$100 Chickens", count: 35 },
      { name: "$100 Chickens", count: 35 },
    ],
    other: [100],
  },
};

// In-memory storage simulation
let projects = [...INITIAL_PROJECTS];
let details = { ...INITIAL_DETAILS };

export const ProjectsService = {
  getAll: async (): Promise<Project[]> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [...projects];
  },

  getById: async (id: string): Promise<ProjectDetail | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const project = projects.find((p) => p.id === id);
    const detail = details[id];

    if (!project) return null;

    // Merge project data with details, or create default details if missing
    return {
      ...project,
      ...(detail || {
        village: "",
        pastor: "",
        sponsor: "",
        established: new Date().toLocaleDateString(),
        category: "Cow",
        stories: "",
        details: "",
        updates: "",
        impact: "",
        pastorSupport: [],
        livestock: [],
        other: [],
      }),
    };
  },

  create: async (data: Omit<ProjectDetail, "id">): Promise<Project> => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const newId = `proj-${Date.now()}`;
    const newProject: Project = {
      id: newId,
      projectName: data.projectName || data.village, // Fallback
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      location: data.location,
      leader: data.pastor, // Mapping pastor to leader for list view
      amount: "$0", // Calculate from support/livestock
      status: "Pending",
    };
    
    // Calculate amount
    const totalAmount = (data.pastorSupport?.reduce((a, b) => a + b, 0) || 0) + 
                        (data.other?.reduce((a, b) => a + b, 0) || 0) +
                        (data.livestock?.reduce((a, b) => a + (b.count * 100), 0) || 0); // Assuming 100 per unit for mock
    
    newProject.amount = `$${totalAmount.toLocaleString()}`;

    const newDetail: ProjectDetail = {
      ...newProject,
      ...data,
      id: newId,
    };

    projects = [newProject, ...projects];
    details[newId] = newDetail;

    return newProject;
  },

  update: async (id: string, data: Partial<ProjectDetail>): Promise<Project> => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Project not found");

    const existingProject = projects[index];
    const existingDetail = details[id] || {};

    const updatedProject = {
      ...existingProject,
      projectName: data.projectName || existingProject.projectName,
      location: data.location || existingProject.location,
      leader: data.pastor || existingProject.leader,
      // Recalculate amount if needed, skipping for simple update
    };

    const updatedDetail = {
      ...existingDetail,
      ...data,
      id,
    } as ProjectDetail;

    projects[index] = updatedProject;
    details[id] = updatedDetail;

    return updatedProject;
  },

  updateStatus: async (id: string, status: ProjectStatus): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const index = projects.findIndex((p) => p.id === id);
    if (index !== -1) {
      projects[index] = { ...projects[index], status };
    }
    if (details[id]) {
      details[id] = { ...details[id], status };
    }
  },
  
  delete: async (id: string): Promise<void> => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      projects = projects.filter(p => p.id !== id);
      delete details[id];
  }
};
