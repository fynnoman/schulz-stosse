import { SITE_URL } from "./Schema";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href.startsWith("http") ? c.href : `${SITE_URL}${c.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300">
          {items.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i === items.length - 1 ? (
                <span className="text-ink-700" aria-current="page">
                  {c.label}
                </span>
              ) : (
                <a
                  href={c.href}
                  className="hover:text-ink-950 transition-colors"
                >
                  {c.label}
                </a>
              )}
              {i < items.length - 1 && (
                <span aria-hidden="true" className="text-ink-200">
                  ·
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
