// data\projects.ts
import { Project, ProjectDetail } from "@/types/projects";

const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    category: "Cow",
  },
  {
    id: "proj-2",
    title: "Kitui Hills",
    date: "Jan 6, 2025",
    location: "Tanzania",
    category: "Chicken",
  },
  {
    id: "proj-3",
    title: "Kasama Town",
    date: "Jan 6, 2025",
    location: "Tanzania",
    category: "Goat",
  },
  {
    id: "proj-4",
    title: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    category: "Pig",
  },
  {
    id: "proj-5",
    title: "Kitui Hills",
    date: "Jan 6, 2025",
    location: "Tanzania",
    category: "Chicken",
  },
  {
    id: "proj-6",
    title: "Kasama Town",
    date: "Jan 6, 2025",
    location: "Tanzania",
    category: "Cow",
  },
  {
    id: "proj-7",
    title: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    category: "Business",
  },
];

const INITIAL_DETAILS: Record<string, ProjectDetail> = {
  "proj-1": {
    id: "proj-1",
    title: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    category: "Cow",
    program: "Kingdom Empowerment",
    village: "Kirembe Park View",
    basicInfoLocation: "Lower Kasese, Kasese District Uganda",
    pastor: "Alvin",
    sponsor: "Eric Lumika",
    established: "8/11/24",
    stories: "In a small village in Uganda, families wake up each day hoping for enough water and food to make it through. Children walk long distances to school, their dreams bigger than their circumstances. Mothers work tirelessly—farming, cooking, caring—yet still struggle to provide the basics. Even with so little, the community holds onto hope, sharing whatever they have. Their resilience shines brighter than their hardships, reminding us of the strength in unity.",
    details: "The first batch of cow farm training has been successfully completed.",
    recentUpdates: "The first batch of cow farm training has been successfully completed.",
    impact: "120 families have directly benefited from our projects.",
    pastorSupport: ["$100 USD", "$100 USD", "$100 USD"],
    livestock: ["$100 Chickens (35)", "$100 Chickens (35)", "$100 Chickens (35)"],
    other: ["$100 USD"],
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
        program: "",
        village: "",
        basicInfoLocation: "",
        pastor: "",
        sponsor: "",
        established: new Date().toLocaleDateString(),
        stories: "",
        details: "",
        recentUpdates: "",
        impact: "",
        pastorSupport: [],
        livestock: [],
        other: [],
        title: project.title, // Ensure title is preserved
        date: project.date,
        location: project.location,
        category: project.category
      }),
    };
  },

  create: async (data: Omit<ProjectDetail, "id">): Promise<Project> => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const newId = `proj-${Date.now()}`;
    const newProject: Project = {
      id: newId,
      title: data.title || "Untitled",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      location: data.location,
      category: data.category
    };
    
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
      title: data.title || existingProject.title,
      location: data.location || existingProject.location,
      category: data.category || existingProject.category
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
  
  delete: async (id: string): Promise<void> => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      projects = projects.filter(p => p.id !== id);
      delete details[id];
  }
};
