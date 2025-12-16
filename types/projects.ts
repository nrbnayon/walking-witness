// types\projects.ts
export interface Project {
  id: string;
  projectName: string;
  date: string;
  location: string;
  leader: string;
  amount: string;
}

export interface ProjectDetail {
  id: string;
  village: string;
  location: string;
  pastor: string;
  sponsor: string;
  established: string;
  category: string;
  stories: string;
  details: string;
  updates: string;
  impact: string;
  coverImage?: string;
  pastorSupport: number[];
  livestock: {
    name: string;
    count: number;
  }[];
  other: number[];
}