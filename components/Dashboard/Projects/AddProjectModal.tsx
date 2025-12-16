"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HugeiconsIcon } from "@hugeicons/react";
import { ImageUploadIcon } from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";

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

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddProjectModal({ isOpen, onClose }: AddProjectModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    projectName: "",
    date: "",
    location: "",
    leader: "",
    amount: "",
    village: "",
    pastor: "",
    sponsor: "",
    established: "",
    category: "Cow",
    stories: "",
    details: "",
    updates: "",
    impact: "",
    pastorSupport: ["100", "100", "100"],
    livestock: [
      { name: "$100 Chickens", count: "35" },
      { name: "$100 Chickens", count: "35" },
      { name: "$100 Chickens", count: "35" },
    ],
    other: "100",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectId = addProject(
      {
        projectName: formData.projectName,
        date: formData.date,
        location: formData.location,
        leader: formData.leader,
        amount: formData.amount,
      },
      {
        village: formData.village,
        location: formData.location,
        pastor: formData.pastor,
        sponsor: formData.sponsor,
        established: formData.established,
        category: formData.category,
        stories: formData.stories,
        details: formData.details,
        updates: formData.updates,
        impact: formData.impact,
        pastorSupport: formData.pastorSupport.map(Number),
        livestock: formData.livestock.map((item) => ({
          name: item.name,
          count: Number(item.count),
        })),
        other: [Number(formData.other)],
      }
    );

    // Reset form
    setFormData({
      projectName: "",
      date: "",
      location: "",
      leader: "",
      amount: "",
      village: "",
      pastor: "",
      sponsor: "",
      established: "",
      category: "Cow",
      stories: "",
      details: "",
      updates: "",
      impact: "",
      pastorSupport: ["100", "100", "100"],
      livestock: [
        { name: "$100 Chickens", count: "35" },
        { name: "$100 Chickens", count: "35" },
        { name: "$100 Chickens", count: "35" },
      ],
      other: "100",
    });

    onClose();
    router.push(`/projects/${projectId}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Add New Project</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Upload Cover</label>
            <div className="w-full h-[180px] bg-white dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="w-10 h-10 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-1">
                <HugeiconsIcon icon={ImageUploadIcon} size={24} />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Add image</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Name *</label>
              <Input
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Date *</label>
              <Input
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                placeholder="Jan 6, 2025"
                required
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Village *</label>
              <Input
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Location *</label>
              <Input
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Pastor *</label>
              <Input
                value={formData.pastor}
                onChange={(e) => setFormData({ ...formData, pastor: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Leader *</label>
              <Input
                value={formData.leader}
                onChange={(e) => setFormData({ ...formData, leader: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sponsor *</label>
              <Input
                value={formData.sponsor}
                onChange={(e) => setFormData({ ...formData, sponsor: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Amount *</label>
              <Input
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="$2,800"
                required
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Established *</label>
              <Input
                value={formData.established}
                onChange={(e) => setFormData({ ...formData, established: e.target.value })}
                placeholder="8/11/24"
                required
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Category *</label>
              <div className="relative mt-1">
                <select
                  className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Stories *</label>
            <textarea
              value={formData.stories}
              onChange={(e) => setFormData({ ...formData, stories: e.target.value })}
              required
              rows={4}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Details *</label>
            <textarea
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              required
              rows={3}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Updates *</label>
            <textarea
              value={formData.updates}
              onChange={(e) => setFormData({ ...formData, updates: e.target.value })}
              required
              rows={3}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Impact so far *</label>
            <textarea
              value={formData.impact}
              onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
              required
              rows={2}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button type="submit" className="bg-gradient-red hover:bg-gradient-red-hover">
              Add Project
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="border-gray-300 dark:border-gray-600">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}