import { buildWebPageGraph, type WebPageInput } from "./Schema";

/**
 * Injects WebPage + BreadcrumbList JSON-LD for a specific URL.
 * Complements the site-wide graph emitted from RootLayout.
 */
export default function PageSchema(props: WebPageInput) {
  const graph = buildWebPageGraph(props);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
