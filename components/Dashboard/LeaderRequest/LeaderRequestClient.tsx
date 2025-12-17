"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Pagination } from "@/components/Dashboard/Shared/Pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { MOCK_DATA } from "@/data/leader-request";

export function LeaderRequestClient() {
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

  const filteredData = MOCK_DATA.filter((item) =>
    item.leader.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.projectName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleRowClick = (id: string) => {
    router.push(`/dashboard/leader-request/${id}`);
  };

  const handleAction = (e: React.MouseEvent, action: string, id: string) => {
    e.stopPropagation();
    console.log(`${action} request ${id}`);
  };

  return (
    <div className="bg-white border border-gray-200  rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-primary mb-3">Leader Request</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white  text-primary dark:text-gray-100 placeholder-gray-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-b-lg">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 ">
              <th className="p-5 font-medium text-gray-500 dark:text-gray-400">Leader</th>
              <th className="p-5 font-medium text-gray-500 dark:text-gray-400">Project name</th>
              <th className="p-5 font-medium text-gray-500 dark:text-gray-400">Date</th>
              <th className="p-5 font-medium text-gray-500 dark:text-gray-400">Location</th>
              <th className="p-5 font-medium text-gray-500 dark:text-gray-400">Amount</th>
              <th className="p-5 font-medium text-gray-500 dark:text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {isLoading
              ? Array.from({ length: 7 }).map((_, index) => (
                  <tr key={index} className="bg-white ">
                    <td className="px-5 py-4"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-5 py-4"><Skeleton className="h-4 w-32" /></td>
                    <td className="px-5 py-4"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-5 py-4"><Skeleton className="h-4 w-32" /></td>
                    <td className="px-5 py-4"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-5 py-4 flex gap-4"><Skeleton className="h-4 w-16" /><Skeleton className="h-4 w-16" /></td>
                  </tr>
                ))
              : currentData.map((item, index) => (
                  <tr 
                    key={index} 
                    onClick={() => handleRowClick(item.id)}
                    className="bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <td className="px-5 py-4 text-primary">{item.leader}</td>
                    <td className="px-5 py-4 font-medium text-primary">{item.projectName}</td>
                    <td className="px-5 py-4 text-gray-500">{item.date}</td>
                    <td className="px-5 py-4 text-gray-500">{item.location}</td>
                    <td className="px-5 py-4 text-primary">{item.amount}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-4 font-medium">
                        <button 
                          onClick={(e) => handleAction(e, "Approve", item.id)}
                          className="text-[#027A48] hover:text-[#026aa2] transition-colors"
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
        className="border-t border-gray-200 "
      />
    </div>
  );
}
