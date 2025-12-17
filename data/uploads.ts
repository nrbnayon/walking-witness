import {
  Upload,
  UploadDetail,
  UploadStatus,
  UploadType,
} from "@/types/uploads";

const INITIAL_UPLOADS: Upload[] = [
  {
    id: "up-1",
    title: "Walking Witness Handbook",
    type: "Book",
    createdAt: "Jan 10, 2025",
    status: "Published",
  },
  {
    id: "up-2",
    title: "Become The Movement",
    type: "Content",
    createdAt: "Jan 12, 2025",
    status: "Draft",
  },
];

const INITIAL_DETAILS: Record<string, UploadDetail> = {
  "up-1": {
    id: "up-1",
    title: "Walking Witness Handbook",
    type: "Book",
    createdAt: "Jan 10, 2025",
    status: "Published",
    bookName: "Walking Witness Handbook",
    section: "Book",
    information:
      "Core handbook for leaders participating in the Walking Witness movement.",
    description:
      "Covers foundational principles, testimonies, and practical guidance for leaders.",
    coverImage: "",
    pdfUrl: "",
  },
  "up-2": {
    id: "up-2",
    title: "Become The Movement",
    type: "Content",
    createdAt: "Jan 12, 2025",
    status: "Draft",
    section: "Introduction",
    information:
      "High-level introduction text used on the Become The Movement page.",
    description:
      "Tells the story behind the movement and sets context for donors and leaders.",
  },
};

// In-memory storage simulation
let uploads: Upload[] = [...INITIAL_UPLOADS];
const uploadDetails: Record<string, UploadDetail> = { ...INITIAL_DETAILS };

export const UploadsService = {
  getAll: async (): Promise<Upload[]> => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return [...uploads];
  },

  getById: async (id: string): Promise<UploadDetail | null> => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const base = uploads.find((u) => u.id === id);
    if (!base) return null;

    return (
      uploadDetails[id] || {
        ...base,
      }
    );
  },

  create: async (
    data: Omit<UploadDetail, "id" | "createdAt" | "status">
  ): Promise<Upload> => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const now = new Date();
    const newId = `up-${now.getTime()}`;

    const base: Upload = {
      id: newId,
      title: data.title || data.bookName || "Untitled",
      type: data.type,
      createdAt: now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: "Draft",
    };

    const detail: UploadDetail = {
      ...data,
      ...base,
      id: newId,
    };

    uploads = [base, ...uploads];
    uploadDetails[newId] = detail;

    return base;
  },

  update: async (
    id: string,
    data: Partial<UploadDetail>
  ): Promise<Upload | null> => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const index = uploads.findIndex((u) => u.id === id);
    if (index === -1) return null;

    const existing = uploads[index];
    const updatedBase: Upload = {
      ...existing,
      title: data.title || data.bookName || existing.title,
      type: (data.type as UploadType) || existing.type,
      status: (data.status as UploadStatus) || existing.status,
    };

    const existingDetail = uploadDetails[id] || existing;
    const updatedDetail: UploadDetail = {
      ...existingDetail,
      ...data,
      ...updatedBase,
      id,
    };

    uploads[index] = updatedBase;
    uploadDetails[id] = updatedDetail;

    return updatedBase;
  },

  updateStatus: async (id: string, status: UploadStatus): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const index = uploads.findIndex((u) => u.id === id);
    if (index !== -1) {
      uploads[index] = { ...uploads[index], status };
    }
    if (uploadDetails[id]) {
      uploadDetails[id] = { ...uploadDetails[id], status };
    }
  },

  delete: async (id: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    uploads = uploads.filter((u) => u.id !== id);
    delete uploadDetails[id];
  },
};
