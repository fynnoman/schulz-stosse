import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import PageSchema from "@/components/PageSchema";
import { SITE_URL, ORG_ID, FYNN_ID, JULIAN_ID, TASKEY_ID } from "@/components/Schema";
import { articles } from "@/app/wissen/articles";

const URL = `${SITE_URL}/team/julian-stosse`;
const TITLE = "Julian Stosse · Head of Engineering";
const SUBTITLE =
  "Julian Stosse verantwortet Engineering bei Schulz & Stosse. Er entwirft und baut Systeme, die im Betrieb tragen, statt in Konzepten stecken zu bleiben.";

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    url: URL,
    title: `${TITLE} · Schulz & Stosse`,
    description: SUBTITLE,
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · Schulz & Stosse`,
    description: SUBTITLE,
    images: ["/og-image.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${URL}#profile`,
  url: URL,
  mainEntity: {
    "@type": "Person",
    "@id": JULIAN_ID,
    name: "Julian Stosse",
    givenName: "Julian",
    familyName: "Stosse",
    url: URL,
    image: `${SITE_URL}/julian.webp`,
    jobTitle: "Head of Engineering",
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Software-Architektur",
      "Backend-Entwicklung",
      "Frontend-Entwicklung",
      "KI-Integration",
      "Datenmodelle",
      "APIs",
      "Cloud-Infrastruktur",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "LLM-Integration",
      "Multi-Tenant SaaS",
    ],
    knowsLanguage: ["Deutsch", "Englisch"],
    nationality: "DE",
    homeLocation: {
      "@type": "Place",
      name: "Völklingen, Saarland, Deutschland",
    },
  },
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": ORG_ID },
};

const authoredArticles = articles;

export default function JulianPage() {
  return (
    <main>
      <PageSchema
        path="/team/julian-stosse"
        title={TITLE}
        description={SUBTITLE}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Team", href: "/team" },
          { label: "Julian Stosse", href: "/team/julian-stosse" },
        ]}
        about={[JULIAN_ID, ORG_ID]}
        mentions={[FYNN_ID, TASKEY_ID]}
        type="AboutPage"
        speakableSelectors={["h1", ".answer-first"]}
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <article className="container-x pt-40 pb-24">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Team", href: "/team" },
            { label: "Julian Stosse", href: "/team/julian-stosse" },
          ]}
        />

        <header className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-4">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-black/10 bg-ink-100 shadow-[0_16px_60px_-20px_rgba(8,8,10,0.35)]">
              <Image
                src="/julian.webp"
                alt="Portrait von Julian Stosse"
                fill
                sizes="(min-width: 768px) 224px, 160px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="eyebrow mb-3">Person · Schulz & Stosse</div>
            <h1 className="display text-[clamp(36px,5vw,72px)] leading-[1.02] tracking-tighter mb-2">
              Julian Stosse
            </h1>
            <div className="font-mono text-[12px] tracking-[0.14em] text-ink-300 uppercase mb-6">
              Head of Engineering · Mitgründer
            </div>
            <p className="answer-first text-[17px] leading-[1.55] text-ink-700 max-w-[62ch]">
              Julian Stosse ist Mitgründer von Schulz &amp; Stosse und
              verantwortet Engineering. Er entwirft und baut Softwaresysteme,
              die im Betrieb tragen, statt in Konzepten stecken zu bleiben.
            </p>
          </div>
        </header>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Rolle</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Was Julian bei Schulz &amp; Stosse verantwortet.
          </h2>
          <div className="text-[15.5px] leading-[1.7] text-ink-700 space-y-4">
            <p>
              Julian führt bei Schulz &amp; Stosse die Engineering-Seite. Er
              verantwortet Architektur, Umsetzung und operativen Betrieb der
              Systeme, die wir für unsere Kunden bauen.
            </p>
            <p>
              Sein Fokus liegt auf sauberer Systemzeichnung: Datenmodell,
              Domänen-Schnitt, API-Grenzen, Skalierungspfad. Was einmal gut
              gezeichnet ist, trägt Jahre weiter, ohne dass man es refactoren
              muss.
            </p>
            <p>
              Er integriert KI-Systeme dort, wo sie tatsächlich Wirkung
              erzeugen: Dokumentenverstehen, Klassifikation, Agents mit
              Geschäftskontext. Nicht als Show-Effekt, sondern als Werkzeug in
              bestehenden Prozessen.
            </p>
          </div>
        </section>

        <section className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-3">Fokus</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-6 max-w-[28ch]">
            Themen, an denen Julian arbeitet.
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "System-Architektur",
              "Backend-Entwicklung",
              "Frontend-Entwicklung",
              "TypeScript",
              "Next.js",
              "PostgreSQL",
              "KI-Integration",
              "LLM-Integration",
              "Datenmodelle & APIs",
              "Cloud-Infrastruktur",
              "DevOps",
              "Multi-Tenant SaaS",
            ].map((x) => (
              <span
                key={x}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[13px] text-ink-700"
              >
                <span className="w-1 h-1 rounded-full bg-signal-500" />
                {x}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="eyebrow mb-3">Veröffentlichungen</div>
          <h2 className="display text-[clamp(26px,3.4vw,44px)] leading-[1.1] mb-8 max-w-[28ch]">
            Aufsätze, an denen Julian mitgeschrieben hat.
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authoredArticles.map((a) => (
              <li key={a.slug}>
                <a href={`/wissen/${a.slug}`} className="card-glass block group h-full">
                  <div className="eyebrow mb-2">{a.cat}</div>
                  <div className="display text-[20px] leading-[1.2] mb-2 group-hover:text-signal-500 transition-colors">
                    {a.title}
                  </div>
                  <div className="text-[13px] text-ink-500 leading-snug">
                    {a.subtitle}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-black/[0.08] pt-10 max-w-[72ch]">
          <div className="eyebrow mb-3">Kontakt</div>
          <p className="text-[15px] leading-[1.65] text-ink-700 max-w-[62ch]">
            Für ein technisches Erstgespräch oder eine Architektur-Einschätzung
            schreiben Sie an{" "}
            <a
              href="mailto:info@schulz-stosse.de"
              className="underline underline-offset-4 hover:text-ink-950"
            >
              info@schulz-stosse.de
            </a>{" "}
            oder rufen Sie an unter{" "}
            <a
              href="tel:+4915168488999"
              className="underline underline-offset-4 hover:text-ink-950"
            >
              +49 151 68488999
            </a>
            .
          </p>
        </section>
      </article>

      <ServiceCTA
        eyebrow="Nächster Schritt"
        title="Gespräch mit Julian."
        body="Ein Kennenlerngespräch ist der schnellste Weg, um technische Machbarkeit und Aufwand realistisch einzuordnen."
      />

      <Footer />
    </main>
  );
}
