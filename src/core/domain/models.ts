export type Locale = "tr" | "en";
export type BilingualText = Record<Locale, string>;
export type TranslationStatus = "original" | "translated" | "review-required" | "reviewed" | "outdated" | "missing";
export type RelationType = "uses" | "implements" | "extends" | "depends-on" | "runs-on" | "compiled-by" | "interpreted-by" | "defined-by" | "standardized-by" | "suitable-for" | "alternative-to" | "influenced-by" | "supersedes" | "obsoletes" | "updates" | "related-to";

export interface KnowledgeRelation { from: string; type: RelationType; to: string; evidenceSourceIds: string[]; }

export interface TranslationHealth {
  key: string;
  trVersion?: string;
  enVersion?: string;
  status: "synchronized" | "update-required" | "missing-tr" | "missing-en";
}

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
  importAll(notes: UserNote[]): Promise<number>;
}

export interface DecisionWeights { performance: number; security: number; maintainability: number; scalability: number; cost: number; }
export interface ScoredCandidate { name: string; score: number; reasons: string[]; }

export interface DecisionInput {
  domain: "web" | "mobile" | "desktop" | "embedded" | "ai" | "games" | "networks" | "server-cloud" | "data" | "graphics" | "security";
  scale: "small" | "medium" | "large";
  offline: boolean;
  realtime: boolean;
  safetyCritical: boolean;
  teamExperience: "beginner" | "mixed" | "expert";
  dataVolume: "low" | "medium" | "high";
  latency: "relaxed" | "interactive" | "realtime";
  deployment: "local" | "on-premise" | "cloud" | "edge";
  securityLevel: "standard" | "high" | "regulated";
  aiRequired: boolean;
  hardwareAccess: boolean;
  licenseConstraint: "none" | "permissive-only" | "commercial-allowed";
  weights?: DecisionWeights;
}

export interface DecisionResult {
  languages: string[];
  architectures: string[];
  rationale: string[];
  risks: string[];
  dataSystems: string[];
  deploymentModel: string;
  testStrategy: string[];
  unsuitableOptions: string[];
  evidence: Array<{ claim: string; sourceId: string; qualityAttributes: string[] }>;
  alternatives: Array<{ option: string; preferWhen: string }>;
  confidenceReason: string;
  confidence: "low" | "medium" | "high";
  scoredLanguages: ScoredCandidate[];
  scoredArchitectures: ScoredCandidate[];
}
