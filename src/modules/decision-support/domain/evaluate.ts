import type { DecisionInput, DecisionResult } from "../../../core/domain/models";

const domainChoices = {
  web: { languages: ["TypeScript", "Python"], architectures: ["Modüler Monolit", "Katmanlı Mimari"], qualities: ["maintainability", "accessibility"], sourceId: "source.swebok-v4" },
  mobile: { languages: ["Kotlin", "Swift"], architectures: ["Clean Architecture", "Katmanlı Mimari"], qualities: ["portability", "energy-efficiency"], sourceId: "source.swebok-v4" },
  desktop: { languages: ["C#", "Rust"], architectures: ["Modüler Monolit", "Eklenti Tabanlı Mimari"], qualities: ["maintainability", "portability"], sourceId: "source.iso-42010" },
  embedded: { languages: ["C", "Rust"], architectures: ["Katmanlı Mimari", "Olay Güdümlü Mimari"], qualities: ["determinism", "safety"], sourceId: "source.iso-42010" },
  ai: { languages: ["Python", "C++"], architectures: ["Pipeline Architecture", "Modüler Monolit"], qualities: ["traceability", "robustness"], sourceId: "source.nist.ai-rmf-1" },
  games: { languages: ["C++", "C#"], architectures: ["Entity–Component–System", "Veri Odaklı Mimari"], qualities: ["performance", "determinism"], sourceId: "source.swebok-v4" },
  networks: { languages: ["Rust", "C"], architectures: ["Olay Güdümlü Mimari", "Boru ve Filtre"], qualities: ["throughput", "security"], sourceId: "source.rfc-editor" },
  "server-cloud": { languages: ["Go", "Java"], architectures: ["Modüler Monolit", "Olay Güdümlü Mimari"], qualities: ["scalability", "observability"], sourceId: "source.swebok-v4" },
  data: { languages: ["Python", "SQL"], architectures: ["Pipeline Architecture", "Olay Güdümlü Mimari"], qualities: ["data-quality", "lineage"], sourceId: "source.swebok-v4" },
  graphics: { languages: ["C++", "Rust"], architectures: ["Veri Odaklı Mimari", "Boru ve Filtre"], qualities: ["performance", "latency"], sourceId: "source.swebok-v4" },
  security: { languages: ["Rust", "Go"], architectures: ["Katmanlı Mimari", "Hexagonal Architecture"], qualities: ["security", "auditability"], sourceId: "source.spdx.3" },
} as const;

export function evaluateDecision(input: DecisionInput): DecisionResult {
  const choice = domainChoices[input.domain];
  const architectures = [...choice.architectures];
  const rationale = [`${choice.languages[0]}, seçilen uygulama alanındaki ekosistem uygunluğu nedeniyle birinci adaydır.`];
  const risks: string[] = [];
  const unsuitableOptions: string[] = [];
  const testStrategy = ["Birim testleri", "Entegrasyon testleri", "Mimari bağımlılık kontrolleri"];
  if (input.scale === "large" && input.realtime) {
    architectures.unshift("Olay Güdümlü Mimari");
    rationale.push("Yüksek ölçek ve gerçek zaman gereksinimi asenkron sınırları destekler.");
  }
  if (input.offline) rationale.push("Yerel öncelikli veri saklama ve açık senkronizasyon stratejisi gerekir.");
  if (input.safetyCritical) risks.push("Güvenlik kritik kapsam için biçimsel doğrulama, izlenebilirlik ve bağımsız inceleme gerekir.");
  if (input.safetyCritical) testStrategy.push("Tehlike analizi ve güvenlik gereksinimi izlenebilirliği");
  if (input.teamExperience === "beginner") { risks.push("Karmaşık dağıtık mimariler ekip deneyimiyle orantılı seçilmelidir."); unsuitableOptions.push("Erken mikroservis ayrıştırması"); }
  if (input.securityLevel === "regulated") { risks.push("Mevzuat, veri yerleşimi, denetim izi ve ayrıştırılmış görevler proje bağlamında doğrulanmalıdır."); testStrategy.push("Güvenlik ve uyumluluk testleri"); }
  if (input.licenseConstraint === "permissive-only") risks.push("Framework, model, veri seti ve geçişli bağımlılık lisansları SBOM üzerinden doğrulanmalıdır.");
  if (input.latency === "realtime" && choice.languages[0] === "Python") unsuitableOptions.push("Gecikme kritik yürütme yolunda saf Python");
  if (input.aiRequired) rationale.push("AI bileşenleri için model/veri sürümleme, değerlendirme, gözlemleme ve güvenlik sınırları gerekir.");
  const dataSystems = input.dataVolume === "high" ? ["İlişkisel veritabanı", "Nesne depolama", "Arama/indeks"] : input.offline ? ["Yerel veritabanı", "Senkronizasyon günlüğü"] : ["İlişkisel veritabanı"];
  const evidence = [
    { claim: `${input.domain} alanı için adaylar kalite öznitelikleri üzerinden değerlendirilmiştir.`, sourceId: choice.sourceId, qualityAttributes: [...choice.qualities] },
    { claim: "Mimari karar; paydaş, kaygı, kanıt ve ödünleşimleri izlenebilir tutmalıdır.", sourceId: "source.iso-42010", qualityAttributes: ["traceability"] },
  ];
  if (input.aiRequired) evidence.push({ claim: "AI risk yönetimi yaşam döngüsü boyunca sürekli yürütülmelidir.", sourceId: "source.nist.ai-rmf-1", qualityAttributes: ["safety", "robustness"] });
  if (input.licenseConstraint !== "none") evidence.push({ claim: "Bileşen, lisans ve tedarik zinciri metadata'sı makinece işlenebilir tutulmalıdır.", sourceId: "source.spdx.3", qualityAttributes: ["compliance", "traceability"] });
  const alternatives = [
    { option: choice.languages[1], preferWhen: "İkinci adayın ekosistemi ekip deneyimi ve mevcut sistemlerle daha iyi örtüştüğünde." },
    { option: choice.architectures[1], preferWhen: "Operasyonel sadelik veya mevcut dağıtım sınırları birinci mimari adaydan daha önemli olduğunda." },
  ];
  const confidence = input.safetyCritical || input.securityLevel === "regulated" ? "medium" : "high";
  const weights = input.weights ?? { performance: 3, security: 3, maintainability: 3, scalability: 3, cost: 3 };
  const totalWeight = Object.values(weights).reduce((sum, value) => sum + value, 0) || 1;
  const score = (name: string, rank: number, architecture = false) => {
    let points = (3 - rank) * 10;
    const reasons = [rank === 0 ? "Alan profiliyle birincil eşleşme" : "Uygulanabilir alternatif"];
    if (input.latency === "realtime" && /Rust|C\+\+|C|Olay|Veri/.test(name)) { points += weights.performance * 2; reasons.push("Gecikme ve performans ağırlığı"); }
    if ((input.securityLevel !== "standard" || input.safetyCritical) && /Rust|Katmanlı|Hexagonal|Clean/.test(name)) { points += weights.security * 2; reasons.push("Güvenlik sınırları"); }
    if (input.scale === "large" && /Olay|Micro|Go|Java/.test(name)) { points += weights.scalability * 2; reasons.push("Yüksek ölçek"); }
    if (input.teamExperience === "beginner" && architecture && /Micro|Olay/.test(name)) { points -= weights.cost * 2; reasons.push("Operasyonel öğrenme maliyeti"); }
    return { name, score: Math.max(0, Math.min(100, Math.round(50 + points * 50 / totalWeight))), reasons };
  };
  const scoredLanguages = [...choice.languages].map((name, rank) => score(name, rank)).sort((a,b)=>b.score-a.score);
  const scoredArchitectures = [...new Set(architectures)].map((name, rank) => score(name, rank, true)).sort((a,b)=>b.score-a.score);
  return {
    languages: [...choice.languages],
    architectures: [...new Set(architectures)],
    rationale,
    risks,
    dataSystems,
    deploymentModel: input.deployment,
    testStrategy,
    unsuitableOptions,
    evidence,
    alternatives,
    confidenceReason: confidence === "medium" ? "Güvenlik kritik veya düzenlemeye tabi bağlam, bağımsız uzman incelemesi ve proje özelinde kanıt gerektirir." : "Girdiler kural tabanındaki kapsanan alanlarla eşleşiyor; yine de sonuç bir ön değerlendirmedir.",
    confidence,
    scoredLanguages,
    scoredArchitectures,
  };
}
