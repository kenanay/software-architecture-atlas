import { getCollection } from "astro:content";

export async function GET(context: { site: URL }) {
  const docs = await getCollection("documents");
  const trDocs = docs.filter(d => d.data.locale === "tr" && d.data.status !== "draft");

  const siteUrl = context.site ? context.site.href : "https://software-architecture-atlas.local/";

  const itemsXml = trDocs.map(doc => {
    const title = typeof doc.data.title === "object" ? doc.data.title.tr : doc.data.title;
    const summary = typeof doc.data.summary === "object" ? doc.data.summary.tr : doc.data.summary;
    const link = `${siteUrl}tr/docs/${doc.data.id}/`;
    const pubDate = new Date(doc.data.lastReviewedAt).toUTCString();

    return `
    <item>
      <title><![CDATA[${title}]]></title>
      <description><![CDATA[${summary}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  }).join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Software Architecture Atlas</title>
    <description>Local-first, trilingual software architectures and engineering knowledge platform by Kenan AY.</description>
    <link>${siteUrl}</link>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
