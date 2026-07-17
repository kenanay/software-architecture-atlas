import type { DecisionInput, DecisionResult } from "../../../core/domain/models";

const domainChoices = {
  web: { languages: ["TypeScript", "Python"], architectures: ["Modüler Monolit", "Katmanlı Mimari"] },
  mobile: { languages: ["Kotlin", "Swift"], architectures: ["Clean Architecture", "Katmanlı Mimari"] },
  desktop: { languages: ["C#", "Rust"], architectures: ["Modüler Monolit", "Eklenti Tabanlı Mimari"] },
  embedded: { languages: ["C", "Rust"], architectures: ["Katmanlı Mimari", "Olay Güdümlü Mimari"] },
  ai: { languages: ["Python", "C++"], architectures: ["Pipeline Architecture", "Modüler Monolit"] },
} as const;

export function evaluateDecision(input: DecisionInput): DecisionResult {
  const choice = domainChoices[input.domain];
  const architectures = [...choice.architectures];
  const rationale = [`${choice.languages[0]}, seçilen uygulama alanındaki ekosistem uygunluğu nedeniyle birinci adaydır.`];
  const risks: string[] = [];
  if (input.scale === "large" && input.realtime) {
    architectures.unshift("Olay Güdümlü Mimari");
    rationale.push("Yüksek ölçek ve gerçek zaman gereksinimi asenkron sınırları destekler.");
  }
  if (input.offline) rationale.push("Yerel öncelikli veri saklama ve açık senkronizasyon stratejisi gerekir.");
  if (input.safetyCritical) risks.push("Güvenlik kritik kapsam için biçimsel doğrulama, izlenebilirlik ve bağımsız inceleme gerekir.");
  if (input.teamExperience === "beginner") risks.push("Karmaşık dağıtık mimariler ekip deneyimiyle orantılı seçilmelidir.");
  return {
    languages: [...choice.languages],
    architectures: [...new Set(architectures)],
    rationale,
    risks,
    confidence: input.safetyCritical ? "medium" : "high",
  };
}
