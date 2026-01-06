/* eslint-disable @next/next/no-img-element */
// components/Dashboard/Projects/ProjectDetails.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronDown, Plus, Trash2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { HugeiconsIcon } from "@hugeicons/react";
import { Edit02Icon, ImageUploadIcon } from "@hugeicons/core-free-icons";
import { ProjectsService } from "@/data/projects";
import { ProjectDetail } from "@/types/projects";
import { cn } from "@/lib/utils";
import { PROJECT_CATEGORIES } from "@/lib/project-categories";

const DEFAULT_PROJECT: ProjectDetail = {
  id: "",
  title: "",
  program: "Kingdom Empowerment",
  date: "",
  location: "",
  category: "Cow",
  
  village: "",
  basicInfoLocation: "",
  pastor: "",
  sponsor: "",
  established: "",
  
  stories: "",
  details: "",
  recentUpdates: "",
  impact: "",
  
  pastorSupport: ["$100 USD"],
  livestock: ["$100 Chickens (35)"],
  other: ["$100 USD"],
  
  coverImage: "",
};

const PROGRAMS = ["Kingdom Empowerment", "Walking Witness Women", "Adopt A Village / Prison"];

type SectionKey =
  | "title"
  | "basic"
  | "details"
  | "updates"
  | "category"
  | "stories"
  | "impact"
  | "pastorSupport"
  | "livestock"
  | "other";

export function ProjectDetails({ id }: { id: string }) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<ProjectDetail>(DEFAULT_PROJECT);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isNew = id === "new";

  const [editSections, setEditSections] = useState<Record<SectionKey, boolean>>(
    {
      title: isNew,
      basic: isNew,
      details: isNew,
      updates: isNew,
      category: isNew,
      stories: isNew,
      impact: isNew,
      pastorSupport: isNew,
      livestock: isNew,
      other: isNew,
    }
  );

  useEffect(() => {
    const loadProject = async () => {
      if (isNew) {
        setFormData({ ...DEFAULT_PROJECT });
        setIsLoading(false);
        return;
      }

      try {
        const data = await ProjectsService.getById(id);
        if (data) {
          setFormData(data);
        } else {
          router.push("/projects");
        }
      } catch (error) {
        console.error("Failed to load project", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [id, isNew, router]);

  const toggleEdit = (section: SectionKey) => {
    if (isNew) return;
    setEditSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const isEditing = (section: SectionKey) => isNew || editSections[section];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = "Project Title is required";
    if (!formData.village.trim()) newErrors.village = "Village name is required";
    if (!formData.basicInfoLocation.trim()) newErrors.basicInfoLocation = "Location is required";
    if (!formData.pastor.trim()) newErrors.pastor = "Pastor name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsSaving(true);
    try {
      if (isNew) {
        await ProjectsService.create(formData);
      } else {
        await ProjectsService.update(id, formData);
      }
      router.push("/projects");
    } catch (error) {
      console.error("Failed to save project", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
      if (confirm("Are you sure you want to delete this project?")) {
          await ProjectsService.delete(id);
          router.push("/projects");
      }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, coverImage: imageUrl });
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFormData({ ...formData, coverImage: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const updateArrayField = (
    field: "pastorSupport" | "livestock" | "other",
    index: number,
    value: string
  ) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayItem = (field: "pastorSupport" | "livestock" | "other", initialValue: string) => {
    setFormData({ ...formData, [field]: [...formData[field], initialValue] });
  };

  const removeArrayItem = (field: "pastorSupport" | "livestock" | "other", index: number) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const Label = ({
    children,
    required,
  }: {
    children: React.ReactNode;
    required?: boolean;
  }) => (
    <label className="text-sm font-medium flex gap-1 text-gray-700 dark:text-gray-300">
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );

  const ErrorMsg = ({ error }: { error?: string }) => {
    if (!error) return null;
    return <span className="text-xs text-red-500 mt-1">{error}</span>;
  };

  const SectionHeader = ({
    title,
    section,
  }: {
    title: string;
    section: SectionKey;
  }) => (
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-primary ">{title}</h3>
      {!isNew && (
        <button
          onClick={() => toggleEdit(section)}
          className={cn(
            "p-1.5 rounded-full transition-colors",
            editSections[section]
              ? "bg-primary/10 text-primary"
              : "text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
        >
          <HugeiconsIcon icon={Edit02Icon} size={18} />
        </button>
      )}
    </div>
  );

  const DisplayText = ({
    value,
    placeholder = "-",
  }: {
    value?: string;
    placeholder?: string;
  }) => (
    <p className={cn("text-sm py-2 px-1", !value && "text-gray-400 italic")}>
      {value || placeholder}
    </p>
  );

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-48 w-[300px] rounded-lg" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-secondary dark:text-gray-400">
            <span
              className="cursor-pointer hover:text-primary"
              onClick={() => router.push("/projects")}
            >
              Project
            </span>
            <span className="text-secondary">/</span>
            <span className="font-medium text-primary ">
               Project details
            </span>
          </div>
          
          {!isNew && (
             <Button variant="outline" className="text-gray-600 gap-2 border-none bg-gray-100" onClick={handleDelete}>
                 <Trash2 size={16} /> Delete
             </Button>
          )}
      </div>

      <div className="space-y-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Upload Cover
        </span>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {formData.coverImage ? (
          <div className="relative w-[300px] h-[180px] rounded-lg overflow-hidden border border-gray-200 mt-2 group">
            <img
              src={formData.coverImage}
              alt="Project Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button
                variant="destructive"
                size="sm"
                onClick={handleRemoveImage}
                className="h-8 w-8 p-0 rounded-full"
              >
                <X size={16} />
              </Button>
            </div>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-[300px] h-[180px] bg-white dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors mt-2"
          >
            <div className="w-10 h-10 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-1">
              <HugeiconsIcon icon={ImageUploadIcon} size={24} />
            </div>
            <span className="text-sm text-secondary dark:text-gray-400">
              Add image
            </span>
          </div>
        )}
      </div>

      {/* Top Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 bg-white p-4 rounded-lg border border-gray-200">
                 <div className="flex items-center justify-between">
                    <Label>Project Title</Label>
                    {!isNew && (
                        <button
                        onClick={() => toggleEdit("title")}
                        className={cn(
                            "p-1.5 rounded-full transition-colors",
                            editSections["title"]
                            ? "bg-primary/10 text-primary"
                            : "text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700"
                        )}
                        >
                        <HugeiconsIcon icon={Edit02Icon} size={18} />
                        </button>
                    )}
                 </div>
                {isEditing("title") ? (
                     <>
                        <Input 
                        value={formData.title} 
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="e.g. Mwati Village"
                        className={cn(
                            errors.title &&
                            "border-red-500 focus-visible:ring-red-500"
                        )}
                        />
                        <ErrorMsg error={errors.title} />
                     </>
                ) : (
                    <DisplayText value={formData.title} />
                )}
            </div>
             <div className="space-y-2 bg-white p-4 rounded-lg border border-gray-200">
                <Label>Project Name</Label>
                 <div className="relative">
                    <select
                      className="w-full appearance-none bg-white font-normal text-base border-transparent border-b border-b-gray-100 px-0 py-2 pr-8 focus:outline-none focus:ring-0 focus:border-b-primary shadow-none cursor-pointer"
                      value={formData.program}
                      onChange={(e) =>
                        setFormData({ ...formData, program: e.target.value })
                      }
                    >
                      <option value="" disabled>Select a project</option>
                      {PROGRAMS.map((prog) => (
                        <option key={prog} value={prog}>
                          {prog}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary pointer-events-none" />
                </div>
            </div>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <SectionHeader title="Basic Information" section="basic" />
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Village: <span className="font-normal text-gray-900">{isEditing("basic") ? "" : formData.village}</span></Label>
                {isEditing("basic") && (
                     <Input
                      value={formData.village}
                      onChange={(e) => setFormData({...formData, village: e.target.value})}
                      placeholder="e.g. Kirembe Park View"
                    />
                )}
              </div>
              <div className="grid gap-2">
                 <Label>Location: <span className="font-normal text-gray-900">{isEditing("basic") ? "" : formData.basicInfoLocation}</span></Label>
                 {isEditing("basic") && (
                    <Input
                      value={formData.basicInfoLocation}
                      onChange={(e) => setFormData({...formData, basicInfoLocation: e.target.value})}
                      placeholder="e.g. Lower Kasese"
                    />
                 )}
              </div>
              <div className="grid gap-2">
                <Label>Pastor: <span className="font-normal text-gray-900">{isEditing("basic") ? "" : formData.pastor}</span></Label>
                 {isEditing("basic") && (
                    <Input
                      value={formData.pastor}
                      onChange={(e) => setFormData({...formData, pastor: e.target.value})}
                      placeholder="Pastor name"
                    />
                 )}
              </div>
              <div className="grid gap-2">
                 <Label>Sponsor: <span className="font-normal text-gray-900">{isEditing("basic") ? "" : formData.sponsor}</span></Label>
                 {isEditing("basic") && (
                    <Input
                      value={formData.sponsor}
                      onChange={(e) => setFormData({...formData, sponsor: e.target.value})}
                      placeholder="Sponsor name"
                    />
                 )}
              </div>
              <div className="grid gap-2">
                 <Label>Established: <span className="font-normal text-gray-900">{isEditing("basic") ? "" : formData.established}</span></Label>
                 {isEditing("basic") && (
                    <Input
                      value={formData.established}
                      onChange={(e) => setFormData({...formData, established: e.target.value})}
                      placeholder="Date"
                    />
                 )}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <SectionHeader title="Details" section="details" />
            <div className="grid gap-2">
              {isEditing("details") ? (
                  <textarea
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Enter details..."
                  />
              ) : (
                <div className="text-sm text-gray-600 dark:text-gray-300 min-h-[50px] whitespace-pre-wrap">
                  {formData.details || "-"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Project Category */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <SectionHeader title="Project Category" section="category" />
            {isEditing("category") ? (
              <div className="relative">
                <select
                  className="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 text-sm pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  {PROJECT_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary pointer-events-none" />
              </div>
            ) : (
              <DisplayText value={formData.category} />
            )}
          </div>

          {/* Stories */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <SectionHeader title="Stories" section="stories" />
            <div className="grid gap-2">
              {isEditing("stories") ? (
                  <textarea
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    value={formData.stories}
                    onChange={(e) => setFormData({ ...formData, stories: e.target.value })}
                    placeholder="Tell the story..."
                  />
              ) : (
                <div className="text-sm text-gray-600 dark:text-gray-300 min-h-[100px] whitespace-pre-wrap">
                  {formData.stories || "-"}
                </div>
              )}
            </div>
          </div>

          {/* Impact so far */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <SectionHeader title="Impact so far" section="impact" />
            <div className="grid gap-2">
              {isEditing("impact") ? (
                  <textarea
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    value={formData.impact}
                    onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                    placeholder="Describe impact..."
                  />
              ) : (
                <div className="text-sm text-gray-600 dark:text-gray-300 min-h-[100px] whitespace-pre-wrap">
                  {formData.impact || "-"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Sections */}
      <div className="space-y-6">
          {/* Recent Updates */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <SectionHeader title="Recent Updates" section="updates" />
            <div className="grid gap-2">
              {isEditing("updates") ? (
                <textarea
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                  value={formData.recentUpdates}
                  onChange={(e) => setFormData({ ...formData, recentUpdates: e.target.value })}
                  placeholder="Enter updates..."
                />
              ) : (
                <div className="text-sm text-gray-600 dark:text-gray-300 min-h-[50px] whitespace-pre-wrap">
                  {formData.recentUpdates || "No updates yet."}
                </div>
              )}
            </div>
          </div>
          
           {/* Pastor Support */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
             <div className="flex items-center justify-between mb-2">
               <SectionHeader title="Pastor Support" section="pastorSupport" />
               {isEditing("pastorSupport") && (
                 <Button variant="ghost" size="sm" onClick={() => addArrayItem("pastorSupport", "")} className="h-6">
                    <Plus className="h-4 w-4" />
                 </Button>
               )}
            </div>
            
            <div className="space-y-3">
              <label className="text-xs text-gray-500">Set price</label>
              <div className="space-y-3">
                {formData.pastorSupport.map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    {isEditing("pastorSupport") ? (
                      <>
                        <Input
                          value={item}
                          onChange={(e) => updateArrayField("pastorSupport", idx, e.target.value)}
                          placeholder="$100 USD"
                        />
                         <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeArrayItem("pastorSupport", idx)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm w-full text-gray-700">
                        {item}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
            {/* Livestock for Village */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
             <div className="flex items-center justify-between mb-2">
               <SectionHeader title="Livestock for Village" section="livestock" />
               {isEditing("livestock") && (
                 <Button variant="ghost" size="sm" onClick={() => addArrayItem("livestock", "")} className="h-6">
                    <Plus className="h-4 w-4" />
                 </Button>
               )}
            </div>
            
            <div className="space-y-3">
              <label className="text-xs text-gray-500">Set price of animals & number</label>
              <div className="space-y-3">
                {formData.livestock.map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    {isEditing("livestock") ? (
                      <>
                        <Input
                          value={item}
                          onChange={(e) => updateArrayField("livestock", idx, e.target.value)}
                          placeholder="$100 Chickens (35)"
                        />
                         <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeArrayItem("livestock", idx)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm w-full text-gray-700">
                        {item}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
           {/* Other */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
             <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-primary">Other</h3>
                     <span className="text-xs text-gray-500">(used for items for the church)</span>
                </div>
               {isEditing("other") ? (
                 <Button variant="ghost" size="sm" onClick={() => addArrayItem("other", "")} className="h-6">
                    <Plus className="h-4 w-4" />
                 </Button>
               ) : (
                 !isNew && (
                    <button
                      onClick={() => toggleEdit("other")}
                      className={cn(
                        "p-1.5 rounded-full transition-colors",
                        editSections["other"] ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700"
                      )}
                    >
                      <HugeiconsIcon icon={Edit02Icon} size={18} />
                    </button>
                 )
               )}
            </div>
            
            <div className="space-y-3">
              <label className="text-xs text-gray-500">Set price</label>
              <div className="space-y-3">
                {formData.other.map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    {isEditing("other") ? (
                      <>
                        <Input
                          value={item}
                          onChange={(e) => updateArrayField("other", idx, e.target.value)}
                          placeholder="$100 USD"
                        />
                         <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeArrayItem("other", idx)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm w-full text-gray-700">
                        {item}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
           <div className="flex gap-3 mt-4">
              <Button onClick={handleSave} disabled={isSaving} className="bg-gray-900 text-white hover:bg-gray-800">
                 {isSaving ? "Saving..." : "Save"}
              </Button>
              <Button variant="outline" onClick={() => router.push("/projects")} disabled={isSaving}>
                 Cancel
              </Button>
          </div>
      </div>
    </div>
  );
}
