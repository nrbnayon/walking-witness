export type ProjectStatus = 'Pending' | 'Approved' | 'Declined';

export interface Project {
  id: string;
  projectName: string;
  date: string;
  location: string;
  leader: string;
  amount: string;
  status: ProjectStatus;
}

export interface ProjectDetail extends Project {
  village: string;
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
