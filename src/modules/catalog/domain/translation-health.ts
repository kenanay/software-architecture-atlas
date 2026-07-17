import type { TranslationHealth } from "../../../core/domain/models";

interface TranslatableDocument { data: { translationKey: string; locale: "tr" | "en"; version: string } }

export function calculateTranslationHealth(documents: TranslatableDocument[]): TranslationHealth[] {
  const groups = new Map<string, Partial<Record<"tr" | "en", string>>>();
  for (const document of documents) {
    const versions = groups.get(document.data.translationKey) ?? {};
    versions[document.data.locale] = document.data.version;
    groups.set(document.data.translationKey, versions);
  }
  return [...groups].map(([key, versions]) => ({
    key,
    trVersion: versions.tr,
    enVersion: versions.en,
    status: !versions.tr ? "missing-tr" : !versions.en ? "missing-en" : versions.tr === versions.en ? "synchronized" : "update-required",
  }));
}
