import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageSchema from "@/components/PageSchema";
import { SITE_URL, ORG_ID } from "@/components/Schema";
import { articles } from "@/app/wissen/articles";

const URL = `${SITE_URL}/sitemap`;

export const metadata: Metadata = {
  title: "Sitemap · Alle Seiten von Schulz & Stosse",
  description:
    "Übersicht aller Seiten auf schulz-stosse.de. Leistungen, Lösungen, Branchen, Wissen, Cases und Rechtliches.",
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
};

type Group = { label: string; items: { href: string; label: string; sub?: string }[] };

export default function SitemapPage() {
  const groups: Group[] = [
    {
      label: "Start",
      items: [
        { href: "/", label: "Startseite" },
        { href: "/team", label: "Team" },
        { href: "/team/fynn-schulz", label: "Fynn-Luca Schulz · Head of Product & Strategy" },
        { href: "/team/julian-stosse", label: "Julian Stosse · Head of Engineering" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    {
      label: "Leistungen",
      items: [
        { href: "/leistungen/individualsoftware", label: "Individuelle Softwareentwicklung" },
        { href: "/leistungen/ki-automatisierung", label: "KI-Integration und Automatisierung" },
        { href: "/leistungen/saas-entwicklung", label: "SaaS- und Produktentwicklung" },
      ],
    },
    {
      label: "Lösungen",
      items: [
        { href: "/loesungen/operations-plattform", label: "Operations-Plattform" },
        { href: "/loesungen/kundenportal", label: "Kundenportal" },
        { href: "/loesungen/dokumenten-ki", label: "Dokumenten-KI" },
      ],
    },
    {
      label: "Branchen",
      items: [
        { href: "/branchen/reinigung", label: "Software für Reinigungsunternehmen" },
        { href: "/branchen/facility-management", label: "Software für Facility Management" },
        { href: "/branchen/handwerk", label: "Software für Handwerksbetriebe" },
      ],
    },
    {
      label: "Regionen",
      items: [
        { href: "/regionen/saarland", label: "Softwareagentur im Saarland" },
      ],
    },
    {
      label: "Cases",
      items: [
        { href: "/cases/taskey", label: "Taskey · Operations-Software" },
      ],
    },
    {
      label: "Wissen",
      items: [
        { href: "/wissen", label: "Alle Aufsätze" },
        ...articles.map((a) => ({ href: `/wissen/${a.slug}`, label: a.title, sub: a.cat })),
      ],
    },
    {
      label: "Antworten",
      items: [{ href: "/faq", label: "Häufige Fragen" }],
    },
    {
      label: "Rechtliches",
      items: [
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" },
      ],
    },
  ];

  return (
    <main>
      <PageSchema
        path="/sitemap"
        title="Sitemap · Schulz & Stosse"
        description="Übersicht aller Seiten auf schulz-stosse.de."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Sitemap", href: "/sitemap" },
        ]}
        about={[ORG_ID]}
        type="CollectionPage"
      />
      <Nav />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Sitemap", href: "/sitemap" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-4">Sitemap</div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Alle Seiten.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-700 max-w-[64ch]">
            Übersicht der öffentlichen Seiten auf schulz-stosse.de. Falls Sie
            eine bestimmte Information suchen und nicht finden, schreiben Sie
            uns an{" "}
            <a
              href="mailto:info@schulz-stosse.de"
              className="underline underline-offset-4 hover:text-ink-950"
            >
              info@schulz-stosse.de
            </a>
            .
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {groups.map((g) => (
            <section key={g.label}>
              <div className="eyebrow mb-4">{g.label}</div>
              <ul className="space-y-2 text-[15px]">
                {g.items.map((i) => (
                  <li key={i.href}>
                    <a
                      href={i.href}
                      className="text-ink-700 hover:text-signal-500 transition-colors"
                    >
                      {i.label}
                    </a>
                    {i.sub && (
                      <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300">
                        · {i.sub}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-black/[0.08] text-[13px] text-ink-500">
          Maschinenlesbare Sitemap:{" "}
          <a
            href="/sitemap.xml"
            className="underline underline-offset-4 hover:text-ink-950"
          >
            /sitemap.xml
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
