export interface Project {
  id: string;
  title: string; // Project name column in list, Project Title in details
  date: string;
  location: string;
  category: string;
}

export interface ProjectDetail extends Project {
  program: string; // Project Name in details (e.g. Kingdom Empowerment)
  
  // Basic Information
  village: string;
  basicInfoLocation: string; // Location in basic info
  pastor: string;
  sponsor: string;
  established: string;
  
  // Content
  stories: string;
  details: string;
  recentUpdates: string;
  impact: string;
  
  // Lists
  pastorSupport: string[];
  livestock: string[];
  other: string[];
  
  coverImage?: string;
}
