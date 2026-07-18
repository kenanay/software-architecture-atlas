import type { TranslationHealth } from "../../../core/domain/models";

interface TranslatableDocument { data: { translationKey: string; locale: "tr" | "en" | "es"; version: string } }

export function calculateTranslationHealth(documents: TranslatableDocument[]): TranslationHealth[] {
  const groups = new Map<string, Partial<Record<"tr" | "en" | "es", string>>>();
  for (const document of documents) {
    const versions = groups.get(document.data.translationKey) ?? {};
    versions[document.data.locale] = document.data.version;
    groups.set(document.data.translationKey, versions);
  }
  return [...groups].map(([key, versions]) => {
    let status: "synchronized" | "update-required" | "missing-tr" | "missing-en" | "missing-es" = "synchronized";
    if (!versions.tr) status = "missing-tr";
    else if (!versions.en) status = "missing-en";
    else if (!versions.es) status = "missing-es";
    else if (versions.tr !== versions.en || versions.tr !== versions.es) status = "update-required";

    return {
      key,
      trVersion: versions.tr,
      enVersion: versions.en,
      esVersion: versions.es,
      status,
    };
  });
}
