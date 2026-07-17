export type Locale = "tr" | "en";
export type BilingualText = Record<Locale, string>;

export interface UserNote {
  id: string;
  documentId: string;
  body: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface NotesRepository {
  save(note: UserNote): Promise<void>;
  findByDocumentId(documentId: string): Promise<UserNote[]>;
  remove(noteId: string): Promise<void>;
  exportAll(): Promise<UserNote[]>;
}

export interface DecisionInput {
  domain: "web" | "mobile" | "desktop" | "embedded" | "ai";
  scale: "small" | "medium" | "large";
  offline: boolean;
  realtime: boolean;
  safetyCritical: boolean;
  teamExperience: "beginner" | "mixed" | "expert";
}

export interface DecisionResult {
  languages: string[];
  architectures: string[];
  rationale: string[];
  risks: string[];
  confidence: "low" | "medium" | "high";
}
