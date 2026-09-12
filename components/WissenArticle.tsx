import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import PageSchema from "@/components/PageSchema";
import { SITE_URL, ORG_ID, FYNN_ID, JULIAN_ID, TASKEY_ID } from "@/components/Schema";

export type ArticleSection = {
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
};

export type ArticleFAQ = { q: string; a: string };

export type ArticleRelated = { href: string; eyebrow: string; title: string; sub: string };

export type WissenArticleProps = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  dateLabel: string;
  cat: string;
  minutes: number;
  intro: React.ReactNode;
  sections: ArticleSection[];
  faqs?: ArticleFAQ[];
  related?: ArticleRelated[];
  cta: { eyebrow: string; title: string; body: string };
};

export default function WissenArticle({
  slug,
  title,
  subtitle,
  date,
  dateLabel,
  cat,
  minutes,
  intro,
  sections,
  faqs,
  related,
  cta,
}: WissenArticleProps) {
  const url = `${SITE_URL}/wissen/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description: subtitle,
    url,
    datePublished: date,
    dateModified: date,
    author: [{ "@id": FYNN_ID }, { "@id": JULIAN_ID }],
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: url,
    inLanguage: "de-DE",
    image: `${SITE_URL}/og-image.png`,
    articleSection: cat,
    wordCount: minutes * 220,
  };

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <main>
      <PageSchema
        path={`/wissen/${slug}`}
        title={title}
        description={subtitle}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Wissen", href: "/wissen" },
          { label: title, href: `/wissen/${slug}` },
        ]}
        about={[ORG_ID]}
        mentions={[FYNN_ID, JULIAN_ID, TASKEY_ID]}
        datePublished={date}
        dateModified={date}
        speakableSelectors={["h1", ".answer-first", "h2"]}
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Wissen", href: "/wissen" },
            { label: title, href: `/wissen/${slug}` },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
            <div className="eyebrow">Wissen · {cat}</div>
            <div className="eyebrow !text-ink-500">
              {minutes} min ·{" "}
              <time dateTime={date}>{dateLabel}</time>
            </div>
          </div>
          <h1 className="display text-[clamp(38px,5.5vw,80px)] leading-[0.98] tracking-tighter mb-6">
            {title}
          </h1>
          <p className="answer-first text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            {subtitle}
          </p>
        </header>

        <div className="mb-16 max-w-[68ch] text-[16px] leading-[1.7] text-ink-800 space-y-4">
          {intro}
        </div>

        {sections.map((s, i) => (
          <section key={i} className="mb-16 max-w-[72ch]">
            <div className="eyebrow mb-3">{s.eyebrow}</div>
            <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
              {s.heading}
            </h2>
            <div className="text-[15.5px] leading-[1.7] text-ink-700 space-y-4 max-w-[68ch]">
              {s.body}
            </div>
          </section>
        ))}

        {faqs && faqs.length > 0 && (
          <section className="mb-16">
            <div className="eyebrow mb-3">Häufige Fragen</div>
            <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-8 max-w-[24ch]">
              Zum Thema.
            </h2>
            <dl className="space-y-6 max-w-[72ch]">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="display text-[20px] leading-[1.2] mb-2">
                    {f.q}
                  </dt>
                  <dd className="text-[15px] leading-[1.6] text-ink-700 max-w-[68ch]">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="border-t border-black/[0.08] pt-10 max-w-[72ch]">
          <div className="eyebrow mb-3">Autoren</div>
          <p className="text-[14.5px] leading-[1.65] text-ink-700 max-w-[64ch]">
            Fynn-Luca Schulz (Head of Product &amp; Strategy) und Julian Stosse
            (Head of Engineering) verantworten die Arbeit an{" "}
            <a
              href="https://taskeyapp.com"
              rel="noopener"
              className="underline underline-offset-4 hover:text-ink-950"
            >
              Taskey
            </a>{" "}
            und an den individuellen Systemen, die Schulz &amp; Stosse
            entwickelt und betreibt.
          </p>
        </section>

        {related && related.length > 0 && (
          <section aria-label="Weiter lesen" className="border-t border-black/[0.08] pt-10 mt-10">
            <div className="eyebrow mb-3">Weiter lesen</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <a key={r.href} href={r.href} className="card-glass block group">
                  <div className="eyebrow mb-2">{r.eyebrow}</div>
                  <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                    {r.title}
                  </div>
                  <div className="text-[13.5px] text-ink-500 leading-snug">
                    {r.sub}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </article>

      <ServiceCTA
        eyebrow={cta.eyebrow}
        title={cta.title}
        body={cta.body}
      />

      <Footer />
    </main>
  );
}
