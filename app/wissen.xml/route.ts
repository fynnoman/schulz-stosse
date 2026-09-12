import { articles } from "@/app/wissen/articles";
import { SITE_URL } from "@/components/Schema";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const dynamic = "force-static";

export function GET() {
  const feedUrl = `${SITE_URL}/wissen.xml`;
  const items = articles
    .map((a) => {
      const url = `${SITE_URL}/wissen/${a.slug}`;
      const pubDate = new Date(a.date).toUTCString();
      return `    <item>
      <title>${escape(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escape(a.cat)}</category>
      <description>${escape(a.subtitle)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Schulz &amp; Stosse · Wissen</title>
    <link>${SITE_URL}/wissen</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>Aufsätze aus der Praxis der Softwareentwicklung, KI-Integration und SaaS-Produktentwicklung.</description>
    <language>de-DE</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
