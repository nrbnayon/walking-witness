// app\(dashboard)\leader-request\page.tsx
"use client";

import { useRef } from "react";
import { LeaderRequestClient } from "@/components/Dashboard/LeaderRequest/LeaderRequestClient";
import { Button } from "@/components/ui/button";

export default function LeaderRequestPage() {
  const handleApproveAll = () => {
    if (typeof window !== 'undefined' && (window as any).handleApproveAll) {
      (window as any).handleApproveAll();
    }
  };

  const handleDeclineAll = () => {
    if (typeof window !== 'undefined' && (window as any).handleDeclineAll) {
      (window as any).handleDeclineAll();
    }
  };

  return (
    <div className="p-4 md:p-8 w-full mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Leader request</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track, manage and forecast your customers and Donations.
          </p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="bg-[#344054] text-white hover:bg-[#475467] border-transparent hover:text-white"
            onClick={handleApproveAll}
          >
            Approve All
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-300 dark:border-gray-600"
            onClick={handleDeclineAll}
          >
            Decline All
          </Button>
        </div>
      </div>

      <LeaderRequestClient onApproveAll={handleApproveAll} onDeclineAll={handleDeclineAll} />
    </div>
  );
}