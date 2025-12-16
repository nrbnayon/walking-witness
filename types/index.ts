export type UserType = "Leader" | "Donor";

export interface User {
  id: string;
  name: string;
  image?: string;
  email: string;
  date: string; // Joining Date
  location: string;
  type: UserType;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  families: number;
  image?: string;
  tags?: string[];
}

export interface UserDetails extends User {
  joined: string; // Maybe same as date, but design has specific format sometimes
  earnings: string;
  projectsCount: number;
  earningsTrend: number;
  projectsTrend: number;
  projectList: Project[];
}

export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
  [key: string]: any;
}

export interface DoubleBarDataPoint {
  name: string;
  current: number;
  previous: number;
}
