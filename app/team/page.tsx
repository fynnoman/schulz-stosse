import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageSchema from "@/components/PageSchema";
import { SITE_URL, ORG_ID, FYNN_ID, JULIAN_ID } from "@/components/Schema";

const URL = `${SITE_URL}/team`;

export const metadata: Metadata = {
  title: "Team · Fynn-Luca Schulz & Julian Stosse",
  description:
    "Die Gründer und Verantwortlichen hinter Schulz & Stosse: Fynn-Luca Schulz (Head of Product & Strategy) und Julian Stosse (Head of Engineering). Kurze Wege, klare Verantwortung, hohe Qualitätsansprüche.",
  keywords: [
    "Fynn-Luca Schulz",
    "Julian Stosse",
    "Schulz & Stosse Team",
    "Softwareagentur Gründer",
    "Softwareentwickler Saarland",
    "Head of Engineering",
    "Head of Product",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    url: URL,
    title: "Team · Schulz & Stosse",
    description:
      "Die Gründer hinter Schulz & Stosse: Fynn-Luca Schulz und Julian Stosse.",
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: URL,
  name: "Team · Schulz & Stosse",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.png`,
  },
  about: [
    { "@id": FYNN_ID },
    { "@id": JULIAN_ID },
  ],
  isPartOf: { "@id": ORG_ID },
};

const leadership = [
  {
    id: "fynn-schulz",
    schemaId: FYNN_ID,
    name: "Fynn-Luca Schulz",
    role: "Head of Product & Strategy",
    photo: "/fynn.webp",
    intro:
      "Verantwortlich für Produktstrategie, Prozessdesign, Business Modeling und Konzeption. Bei ihm werden Geschäftsprobleme in tragfähige digitale Produkte übersetzt.",
    body: [
      "Fynn-Luca führt bei Schulz & Stosse Produkt und Strategie. Er übersetzt operative Realitäten in Softwareprodukte, die im Alltag tragen, statt in Konzepten stecken zu bleiben.",
      "Seine Arbeit setzt vor dem Code an: Wo verläuft der Prozess tatsächlich, welche Rolle entscheidet was, welche Ausnahmen gibt es, welche Systeme sind bereits vorhanden und welches Geschäftsmodell muss das Produkt tragen. Aus dieser Klärung wird die Architektur.",
      "Neben der Kundenarbeit verantwortet er die Positionierung und den Business-Development-Ansatz von Schulz & Stosse. Klientel sind Unternehmen mit Anforderungen, die Standardsoftware strukturell nicht bedient.",
    ],
    focus: [
      "Produktstrategie",
      "Prozess-Design",
      "Business Modeling",
      "UX-Konzeption",
      "Product Discovery",
      "Business Development",
    ],
  },
  {
    id: "julian-stosse",
    schemaId: JULIAN_ID,
    name: "Julian Stosse",
    role: "Head of Engineering",
    photo: "/julian.webp",
    intro:
      "Verantwortlich für Software Engineering, System-Architektur und Produktentwicklung. Aus Anforderungen entstehen bei ihm stabile, skalierbare Systeme, die im Betrieb tragen.",
    body: [
      "Julian führt bei Schulz & Stosse die Engineering-Seite. Er verantwortet Architektur, Umsetzung und operativen Betrieb der Systeme, die wir für unsere Kunden bauen.",
      "Sein Fokus liegt auf sauberer Systemzeichnung: Datenmodell, Domänen-Schnitt, API-Grenzen, Skalierungspfad. Was einmal gut gezeichnet ist, trägt Jahre weiter, ohne dass man es refactoren muss.",
      "Julian integriert KI-Systeme dort, wo sie tatsächlich Wirkung erzeugen: Dokumentenverstehen, Klassifikation, Agents mit Geschäftskontext. Nicht als Show-Effekt, sondern als Werkzeug in bestehenden Prozessen.",
    ],
    focus: [
      "System-Architektur",
      "Backend & Frontend",
      "KI-Integration",
      "Datenmodelle & APIs",
      "Cloud-Infrastruktur",
      "DevOps",
    ],
  },
];

export default function TeamPage() {
  return (
    <main>
      <PageSchema
        path="/team"
        title="Team · Fynn-Luca Schulz & Julian Stosse"
        description="Die Gründer und Verantwortlichen hinter Schulz & Stosse: Fynn-Luca Schulz (Head of Product & Strategy) und Julian Stosse (Head of Engineering)."
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Team", href: "/team" },
        ]}
        about={[FYNN_ID, JULIAN_ID, ORG_ID]}
        mentions={[ORG_ID]}
        type="AboutPage"
      />
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <article className="container-x pt-40 pb-32">
        <Breadcrumbs
          items={[
            { label: "Start", href: "/" },
            { label: "Team", href: "/team" },
          ]}
        />

        <header className="mb-16 max-w-[72ch]">
          <div className="eyebrow mb-4">Team · Leadership</div>
          <h1 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] tracking-tighter mb-6">
            Die Menschen hinter <em className="italic text-ink-500">Ihrer</em>{" "}
            Software.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-700 max-w-[62ch]">
            Klare Verantwortung für Engineering, Produkt und Strategie.
            Entscheidungen kurz, Wege schnell, Qualität hoch. Wir bauen die
            Systeme, die wir verantworten, mit den Menschen, die sie später
            weiterentwickeln.
          </p>
        </header>

        <div className="space-y-24">
          {leadership.map((p, i) => (
            <section
              key={p.id}
              id={p.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start scroll-mt-32"
              aria-labelledby={`${p.id}-name`}
            >
              <div className="md:col-span-4">
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-black/10 bg-ink-100 shadow-[0_16px_60px_-20px_rgba(8,8,10,0.35)]">
                  <Image
                    src={p.photo}
                    alt={`Portrait von ${p.name}`}
                    fill
                    sizes="(min-width: 768px) 224px, 160px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="eyebrow mb-3">Rolle · {String(i + 1).padStart(2, "0")}</div>
                <h2
                  id={`${p.id}-name`}
                  className="display text-[clamp(32px,4.5vw,60px)] leading-[1.02] mb-2"
                >
                  {p.name}
                </h2>
                <div className="font-mono text-[12px] tracking-[0.14em] text-ink-300 uppercase mb-6">
                  {p.role}
                </div>
                <p className="text-[16px] leading-[1.6] text-ink-700 mb-6 max-w-[62ch]">
                  {p.intro}
                </p>
                <div className="space-y-4 text-[15px] leading-[1.65] text-ink-700 max-w-[62ch]">
                  {p.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                <div className="hairline my-8" />
                <div className="eyebrow mb-3">Fokus</div>
                <div className="flex flex-wrap gap-2">
                  {p.focus.map((x) => (
                    <span
                      key={x}
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[12px] text-ink-700"
                    >
                      <span className="w-1 h-1 rounded-full bg-signal-500" />
                      {x}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="btn btn-ghost text-[13px] py-2 px-4"
                  >
                    Gespräch mit {p.name.split(" ")[0]}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-32 border-t border-black/[0.08] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="eyebrow mb-3">Wie wir arbeiten</div>
              <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-6 max-w-[22ch]">
                Eine Schicht Kommunikation, kein Übersetzungsstapel.
              </h2>
              <p className="text-[15.5px] leading-[1.65] text-ink-700 max-w-[52ch]">
                Es gibt bei uns keine Übersetzungsschicht zwischen Beratung,
                Umsetzung und Betrieb. Die Personen, die Sie im ersten Gespräch
                treffen, sind auch drei Jahre später noch verantwortlich.
                Kurze Wege bedeuten schnellere Entscheidungen und weniger
                Missverständnisse.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">Standort und Reichweite</div>
              <h2 className="display text-[clamp(28px,4vw,52px)] leading-[1.05] mb-6 max-w-[22ch]">
                Aus dem Saarland. Für die DACH-Region.
              </h2>
              <p className="text-[15.5px] leading-[1.65] text-ink-700 max-w-[52ch]">
                Schulz & Stosse sitzt in Völklingen, Saarland. Wir arbeiten
                deutschlandweit sowie in Österreich und der Schweiz.
                Vor-Ort-Termine im Rhein-Main- und Saar-Lor-Lux-Raum,
                remote sonst.
              </p>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
