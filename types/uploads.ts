export type UploadType = "Book" | "Content";

export type UploadStatus = "Draft" | "Published";

export interface Upload {
  id: string;
  title: string;
  type: UploadType;
  createdAt: string;
  status: UploadStatus;
}

export interface UploadDetail extends Upload {
  // Shared fields
  section?: string; // e.g. "Introduction", "Chapter 1" for content

  // Book specific
  bookName?: string;
  coverImage?: string;
  pdfUrl?: string;

  // Content specific
  information?: string;
  description?: string;
}
