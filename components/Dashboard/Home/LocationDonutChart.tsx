"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { locationStatsData } from "@/data";

export function LocationDonutChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-full">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-6">Total earning by Location</h3>
     
      <div className="h-[200px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={locationStatsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              startAngle={0}
              endAngle={360}
              dataKey="value"
              stroke="none"
            >
              {locationStatsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 space-y-3">
        {locationStatsData.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-100">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}