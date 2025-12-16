// data\projects.ts
import { Project, ProjectDetail } from "@/types/projects";

export const MOCK_PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    projectName: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Phoenix Baker",
    amount: "$2,800",
  },
  {
    id: "proj-2",
    projectName: "Kitui Hills",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Drew cano",
    amount: "$3,500",
  },
  {
    id: "proj-3",
    projectName: "Kasama Town",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Phoenix Baker",
    amount: "$1,800",
  },
  {
    id: "proj-4",
    projectName: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Drew cano",
    amount: "$2,800",
  },
  {
    id: "proj-5",
    projectName: "Kitui Hills",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Phoenix Baker",
    amount: "$3,500",
  },
  {
    id: "proj-6",
    projectName: "Kasama Town",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Drew cano",
    amount: "$1,800",
  },
  {
    id: "proj-7",
    projectName: "Mwati Village",
    date: "Jan 6, 2025",
    location: "Tanzania",
    leader: "Phoenix Baker",
    amount: "$2,600",
  },
];

export const MOCK_PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "proj-1": {
    id: "proj-1",
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