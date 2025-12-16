'use client'
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Dashboard/Shared/Badge";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { usersData } from "@/data";
import { UserType, User } from "@/types";
import { useState } from "react";
import { DeleteConfirmationModal } from "@/components/Dashboard/Shared/DeleteConfirmationModal";

interface UsersTableProps {
  limit?: number;
  filter?: "All" | UserType;
  showPagination?: boolean;
}

export function UsersTable({ limit, filter = "All", showPagination = false }: UsersTableProps) {
  const [allUsers, setAllUsers] = useState<User[]>(usersData);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const filteredUsers = filter === "All" 
    ? allUsers 
    : allUsers.filter(u => u.type === filter);
  
  const handleDelete = () => {
    if (userToDelete) {
      setAllUsers(prev => prev.filter(u => u.id !== userToDelete.id));
      setUserToDelete(null);
    }
  };
  
  const displayUsers = limit ? filteredUsers.slice(0, limit) : filteredUsers;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-b-xl shadow-none border border-[#FAFAFA] dark:border-gray-700 overflow-hidden">
        {/* Table Header Wrapper used in Home page, but maybe handled outside? Design has "All User" inside the card-like container?
            In Home page, "All User" is a heading above the table interactions. 
            I'll render the table content here.
        */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 uppercase">
            <tr>
              <th className="p-5 font-medium">Name</th>
              <th className="p-5 font-medium">Email address</th>
              <th className="p-5 font-medium">Joining Date</th>
              <th className="p-5 font-medium">Location</th>
              <th className="p-5 font-medium">User type</th>
              <th className="p-5 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {displayUsers.map((user, idx) => (
              <tr key={`${user.id}-${idx}`} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="p-5">
                  <Link href={`/users/${user.id}`} className="flex items-center gap-3 group">
                   <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                       {user.image ? (
                           <Image 
                             src={user.image} 
                             alt={user.name} 
                             fill 
                             sizes="32px"
                             className="object-cover"
                           />
                       ) : (
                        <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                            {user.name.charAt(0)}{user.name.split(" ")[1]?.charAt(0)}
                        </div>
                       )}
                   </div>
                   <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{user.name}</span>
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{user.email}</td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{user.date}</td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{user.location}</td>
                <td className="px-6 py-4">
                  <Badge variant={user.type.toLowerCase() as any}>{user.type}</Badge>
                </td>
                <td className="px-6 py-4">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setUserToDelete(user);
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer p-2 rounded-sm hover:bg-red-50 dark:hover:bg-red-900"
                  >
                    <Trash2 className="w-4 h-4 text-red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {showPagination && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 dark:border-gray-700">
             <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors">
                Previous
             </button>
             <div className="hidden sm:flex gap-1">
                 {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
                     <button 
                        key={i}
                        className={cn(
                            "w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors",
                            page === 1 
                                ? "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400" 
                                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        )}
                     >
                         {page}
                     </button>
                 ))}
             </div>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors">
                Next
             </button>
        </div>
      )}
      <DeleteConfirmationModal 
        isOpen={!!userToDelete}
        onClose={() => setUserToDelete(null)}
        onConfirm={handleDelete}
        title="Delete User"
        description={`Are you sure you want to delete ${userToDelete?.name}? This action cannot be undone.`}
      />
    </div>
  );
}
