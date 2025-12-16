// components\Dashboard\Projects\ProjectDetails.tsx
"use client";

import { useState, useEffect } from "react";
import { 
  ChevronRight, 
  Image as ImageIcon, 
  ChevronDown 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { HugeiconsIcon } from "@hugeicons/react";
import { Edit02Icon, ImageUploadIcon } from "@hugeicons/core-free-icons";

const PROJECT_CATEGORIES = [
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

export function ProjectDetails({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
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
  });

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6">
         <div className="flex items-center gap-2 text-sm text-gray-500">
          <Skeleton className="h-4 w-16" /> <ChevronRight className="h-4 w-4" /> <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-48 w-[300px] rounded-lg" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <span>Project</span>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium  text-primary dark:text-gray-100">Project details</span>
      </div>

      {/* Upload Cover */}
      <div className="space-y-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Upload Cover</span>
        <div className="w-[300px] h-[180px] bg-white dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors mt-2">
          <div className="w-10 h-10 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-1">
          <HugeiconsIcon
            icon={ImageUploadIcon}
            size={24}
          />
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Add image</span>
        </div>
        <Button variant="outline" size="sm" className="bg-gray-100 border-none text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300">
           Delete
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold  text-primary dark:text-gray-100">Basic Information</h3>
              <HugeiconsIcon
                icon={Edit02Icon}
                size={16}
                strokeWidth={1.5}
              />
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex gap-2">
                <span className="font-medium  text-primary dark:text-gray-200 w-24">Village:</span>
                <span>{formData.village}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium  text-primary dark:text-gray-200 w-24">Location:</span>
                <span>{formData.location}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium  text-primary dark:text-gray-200 w-24">Pastor:</span>
                <span>{formData.pastor}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium  text-primary dark:text-gray-200 w-24">Sponsor:</span>
                <span>{formData.sponsor}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium  text-primary dark:text-gray-200 w-24">Established:</span>
                <span>{formData.established}</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold  text-primary dark:text-gray-100">Details</h3>
              <HugeiconsIcon
              icon={Edit02Icon}
              size={16}
              strokeWidth={1.5}
            />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{formData.details}</p>
          </div>

          {/* Recent Updates */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold  text-primary dark:text-gray-100">Recent Updates</h3>
              <HugeiconsIcon
              icon={Edit02Icon}
              size={16}
              strokeWidth={1.5}
            />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{formData.updates}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:col-span-2">
           {/* Project Category */}
           <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold  text-primary dark:text-gray-100 mb-2">Project Category</h3>
            <div className="relative">
              <select 
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 text-sm pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {PROJECT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Stories */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold  text-primary dark:text-gray-100">Stories</h3>
              <HugeiconsIcon
              icon={Edit02Icon}
              size={16}
              strokeWidth={1.5}
            />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              {formData.stories}
            </p>
          </div>

          {/* Impact so far */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold  text-primary dark:text-gray-100">Impact so far</h3>
              <HugeiconsIcon
              icon={Edit02Icon}
              size={16}
              strokeWidth={1.5}
            />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{formData.impact}</p>
          </div>
        </div>
      </div>

      {/* Pastor Support */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-2">
           <h3 className="font-semibold  text-primary">Pastor Support</h3>
           <HugeiconsIcon
             icon={Edit02Icon}
             size={16}
             strokeWidth={1.5}
           />
        </div>
        <div className="space-y-4">
          <label className="text-xs font-medium text-gray-500">Set price</label>
          {formData.pastorSupport.map((amount, idx) => (
            <Input 
              key={idx}
              value={`$${amount} USD`} 
              readOnly 
              className="bg-white dark:bg-gray-800 text-primary dark:text-gray-100"
            />
          ))}
        </div>
      </div>

      {/* Livestock for Village */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-2">
           <h3 className="font-semibold  text-primary dark:text-gray-100">Livestock for Village</h3>
           <HugeiconsIcon
             icon={Edit02Icon}
             size={16}
             strokeWidth={1.5}
           />
        </div>
        <div className="space-y-4">
          <label className="text-xs font-medium text-gray-500">Set price of animals & number</label>
          {formData.livestock.map((item, idx) => (
            <Input 
              key={idx}
              value={`${item.name} (${item.count})`} 
              readOnly 
              className="bg-white dark:bg-gray-800 text-primary dark:text-gray-100"
            />
          ))}
        </div>
      </div>

      {/* Other */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-2">
           <h3 className="font-semibold  text-primary dark:text-gray-100">Other <span className="text-gray-500 font-normal text-xs">(used for items for the church)</span></h3>
           <HugeiconsIcon
             icon={Edit02Icon}
             size={16}
             strokeWidth={1.5}
           />
        </div>
        <div className="space-y-4">
          <label className="text-xs font-medium text-gray-500">Set price</label>
          <Input 
            value={`$${formData.other[0]} usd`} 
            readOnly 
            className="bg-white dark:bg-gray-800 text-primary dark:text-gray-100"
          />
        </div>
      </div>
      
      <div className="flex gap-3 w-full justify-end">
        <Button className="bg-gradient-red hover:bg-gradient-red-hover">Save</Button>
        <Button variant="outline" className="border-gray-300 dark:border-gray-600">Cancel</Button>
      </div>
    </div>
  );
}
