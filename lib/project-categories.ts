export const PROJECT_CATEGORIES = [
  "Chicken",
  "Cow",
  "Goat",
  "Pig",
  "Business",
  "Become The Movement",
  "Kingdom Empowerment",
  "Walking Witness Women",
  "Adopt A Village / Prison",
  "Bible Books And More",
  "Living in The Kingdom",
];

export interface LeaderRequestDetails {
  id: string;
  leader: string;
  email: string;
  projectName: string;
  date: string;
  location: string;
  amount: string;
  village: string;
  pastor: string;
  sponsor: string;
  established: string;
  category: string;
  stories: string;
  details: string;
  updates: string;
  impact: string;
  pastorSupport: number[];
  livestock: { name: string; count: number }[];
  other: number[];
  coverImage?: string;
}