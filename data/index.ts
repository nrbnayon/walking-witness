import { User, UserDetails, ChartDataPoint, DoubleBarDataPoint } from "@/types";

export const usersData: User[] = [
  {
    id: "1",
    name: "Olivia Rhye",
    image: "/avatars/olivia.jpg",
    email: "phoenix@untitledui.com",
    date: "Jan 6, 2025",
    location: "Overland Park, KS",
    type: "Donor",
  },
  {
    id: "2",
    name: "Phoenix Baker",
    image: "/avatars/phoenix.jpg",
    email: "phoenix@untitledui.com",
    date: "Jan 6, 2025",
    location: "Overland Park, KS",
    type: "Leader",
  },
  {
    id: "3",
    name: "Candice Wu",
    image: "/avatars/candice.jpg",
    email: "candice@untitledui.com",
    date: "Jan 6, 2025",
    location: "Overland Park, KS",
    type: "Donor",
  },
  {
    id: "4",
    name: "Drew Cano",
    image: "/avatars/drew.jpg",
    email: "drew@untitledui.com",
    date: "Jan 6, 2025",
    location: "Overland Park, KS",
    type: "Leader",
  },
  {
    id: "5",
    name: "Candice Wu",
    image: "/avatars/candice.jpg",
    email: "candice@untitledui.com",
    date: "Jan 6, 2025",
    location: "Overland Park, KS",
    type: "Donor",
  },
   {
    id: "6",
    name: "Orlando Diggs",
    image: "/avatars/orlando.jpg",
    email: "orlando@untitledui.com",
    date: "Jan 6, 2025",
    location: "Overland Park, KS",
    type: "Donor",
  },
   {
    id: "7",
    name: "Andi Lane",
    image: "/avatars/andi.jpg",
    email: "andi@untitledui.com",
    date: "Jan 6, 2025",
    location: "Overland Park, KS",
    type: "Leader",
  },
   {
    id: "8",
    name: "Kate Morrison",
    image: "/avatars/kate.jpg",
    email: "kate@untitledui.com",
    date: "Jan 6, 2025",
    location: "Overland Park, KS",
    type: "Donor",
  },
];

export const userDetailsData: UserDetails = {
  id: "1",
  name: "Danial Smith",
  email: "danial@gmail.com",
  image: "/avatars/danial.jpg",
  location: "Tanzania",
  date: "Jan 6, 2025",
  joined: "6 Jan, 2025",
  type: "Leader",
  earnings: "2,420",
  projectsCount: 10,
  earningsTrend: 40,
  projectsTrend: -40,
  projectList: [
    {
       id: 1,
       title: "Mwati Village",
       location: "Tanzania",
       families: 24,
       image: "/projects/mwati.jpg",
       tags: ["Adopt Prisons/ Villages"]
    },
    {
       id: 2,
       title: "Kitui Hills",
       location: "Tanzania",
       families: 24,
       image: "/projects/kitui.jpg",
       tags: ["Adopt Prisons/ Villages"]
    },
    {
       id: 3,
       title: "Kasama Town",
       location: "Tanzania",
       families: 24,
       image: "/projects/kasama.jpg",
       tags: ["Adopt Prisons/ Villages"]
    },
     {
       id: 4,
       title: "Kasama Town",
       location: "Tanzania",
       families: 24,
       image: "/projects/kasama2.jpg",
       tags: ["Adopt Prisons/ Villages"]
    }
  ]
};

export const monthlyViewsData: DoubleBarDataPoint[] = [
  { name: "Jan", current: 45000, previous: 52000 },
  { name: "Feb", current: 45000, previous: 28000 },
  { name: "Mar", current: 50000, previous: 32000 },
  { name: "Apr", current: 45000, previous: 28000 },
  { name: "May", current: 45000, previous: 35000 },
  { name: "Jun", current: 46000, previous: 28000 },
  { name: "Jul", current: 32000, previous: 28000 },
  { name: "Aug", current: 38000, previous: 45000 },
  { name: "Sep", current: 42000, previous: 28000 },
  { name: "Oct", current: 45000, previous: 32000 },
  { name: "Nov", current: 45000, previous: 38000 },
  { name: "Dec", current: 45000, previous: 28000 },
];

export const locationStatsData: ChartDataPoint[] = [
{ name: "United States", value: 52.1, color: "#000000" },
  { name: "Canada", value: 22.8, color: "#92BFFF" },
  { name: "Mexico", value: 13.9, color: "#94E9B8" },
  { name: "Other", value: 11.2, color: "#AEC7ED" }, 
];
