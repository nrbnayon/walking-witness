// types\leader-request.ts

export type RequestStatus = "Pending" | "Approved" | "Declined";

export interface Request {
  id: string;
  leader: string;
  projectName: string;
  date: string;
  location: string;
  amount: string;
  status?: RequestStatus; 
}