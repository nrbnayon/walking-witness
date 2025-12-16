//components\Dashboard\Projects\ProjectsClient.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Plus } from "lucide-react";
import { Pagination } from "@/components/Dashboard/Shared/Pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignSquareIcon } from "@hugeicons/core-free-icons";

import { MOCK_PROJECTS_DATA } from "@/data/projects";

export function ProjectsClient() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 7;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = MOCK_PROJECTS_DATA.filter((item) =>
    item.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.leader.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleRowClick = (id: string) => {
    router.push(`/projects/${id}`);
  };

  const handleAction = (e: React.MouseEvent, action: string, id: string) => {
    e.stopPropagation();
    console.log(`${action} project ${id}`);
    // Implement action logic here
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Project</h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 transition-colors text-sm font-medium cursor-pointer">
        <HugeiconsIcon
          icon={PlusSignSquareIcon}
          size={20}
          strokeWidth={1}
        />
          Add
        </button>
      </div>
      
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 h-10"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-b-xl">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400">Project name</th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400">Date</th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400">Location</th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400">Leader</th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400">Amount</th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {isLoading
              ? Array.from({ length: 7 }).map((_, index) => (
                  <tr key={index} className="bg-white dark:bg-gray-800">
                    <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                    <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-6 py-4 flex gap-4"><Skeleton className="h-4 w-16" /><Skeleton className="h-4 w-16" /></td>
                  </tr>
                ))
              : currentData.map((item, index) => (
                  <tr 
                    key={index} 
                    onClick={() => handleRowClick(item.id)}
                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{item.projectName}</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{item.date}</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{item.location}</td>
                    <td className="px-6 py-4 text-primary dark:text-blue-400">{item.leader}</td>
                    <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{item.amount}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4 font-medium">
                        <button 
                          onClick={(e) => handleAction(e, "Approve", item.id)}
                          className="text-[#027A48] hover:text-[#026aa2] dark:text-green-400 dark:hover:text-green-300 transition-colors"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={(e) => handleAction(e, "Decline", item.id)}
                          className="text-[#B42318] hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                        >
                          Decline
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={isLoading ? 1 : totalPages}
        onPageChange={setCurrentPage}
        className="border-t border-gray-200 dark:border-gray-700"
      />
    </div>
  );
}
