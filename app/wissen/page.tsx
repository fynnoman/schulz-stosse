import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageSchema from "@/components/PageSchema";
import { SITE_URL, ORG_ID, FYNN_ID, JULIAN_ID, TASKEY_ID } from "@/components/Schema";
import { articles } from "./articles";

const URL = `${SITE_URL}/wissen`;

export const metadata: Metadata = {
  title: "Wissen · Individuelle Software, KI und SaaS in der Praxis",
  description:
    "Aufsätze und Analysen aus der Praxis der individuellen Softwareentwicklung, KI-Integration und SaaS-Produktentwicklung. Aus dem laufenden Betrieb, nicht aus dem Whitepaper.",
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Wissen · Schulz & Stosse",
    description:
      "Aufsätze aus der Praxis der Softwareentwicklung, KI-Integration und SaaS-Produktentwicklung.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wissen · Schulz & Stosse",
    description:
      "Praxis-Aufsätze zu Individualsoftware, KI und SaaS.",
    images: ["/og-image.png"],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${URL}#collection`,
  name: "Wissen · Schulz & Stosse",
  url: URL,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  inLanguage: "de-DE",
  publisher: { "@id": ORG_ID },
  hasPart: articles.map((a) => ({
    "@type": "Article",
    headline: a.title,
    url: `${URL}/${a.slug}`,
    datePublished: a.date,
    dateModified: a.date,
    author: [{ "@id": FYNN_ID }, { "@id": JULIAN_ID }],
    publisher: { "@id": ORG_ID },
    inLanguage: "de-DE",
  })),
};

export default function WissenIndexPage() {
  return (
    <main>
      <PageSchema
        path="/wissen"
        title="Wissen · Schulz & Stosse"
        description="Aufsätze aus der Praxis der Softwareentwicklung, KI-Integration und SaaS-Produktentwicklung."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Wissen", href: "/wissen" },
        ]}
        about={[ORG_ID]}
        mentions={[FYNN_ID, JULIAN_ID, TASKEY_ID]}
        type="CollectionPage"
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Wissen", href: "/wissen" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-4">Wissen · Praxis</div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Aus dem Betrieb.{" "}
            <em className="italic text-ink-500">Nicht aus der Broschüre.</em>
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Analysen, Prinzipien und Beobachtungen aus der Arbeit an
            individueller Software, KI-Integration und dem laufenden Betrieb
            unserer eigenen Plattform Taskey. Kürzer als ein Whitepaper,
            konkreter als ein Blogpost.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((a) => (
            <li key={a.slug}>
              <a
                href={`/wissen/${a.slug}`}
                className="card-glass block group h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="eyebrow">{a.cat}</div>
                  <div className="font-mono text-[11px] text-ink-300">
                    {a.minutes} min · <time dateTime={a.date}>{a.dateLabel}</time>
                  </div>
                </div>
                <h2 className="display text-[26px] leading-[1.1] mb-3 group-hover:text-signal-500 transition-colors">
                  {a.title}
                </h2>
                <p className="text-[14.5px] text-ink-700 leading-[1.55]">
                  {a.subtitle}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[13px] text-ink-950 border-b border-ink-950/40 group-hover:border-ink-950 transition-colors">
                  Aufsatz lesen
                  <span aria-hidden>→</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </article>

      <Footer />
    </main>
  );
}
