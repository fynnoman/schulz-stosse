import type { Metadata } from "next";
import WissenArticle from "@/components/WissenArticle";
import { SITE_URL } from "@/components/Schema";

const SLUG = "multi-tenant-saas-architektur";
const URL = `${SITE_URL}/wissen/${SLUG}`;
const TITLE = "Multi-Tenant SaaS · Entscheidungen, die man teuer bezahlt";
const SUBTITLE =
  "Sechs Architektur-Entscheidungen am Anfang eines SaaS-Produkts, die später nicht mehr revidierbar sind.";

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: `${TITLE} · Schulz & Stosse`,
    description: SUBTITLE,
    images: ["/og-image.png"],
    locale: "de_DE",
    siteName: "Schulz & Stosse",
    publishedTime: "2026-09-12",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · Schulz & Stosse`,
    description: SUBTITLE,
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <WissenArticle
      slug={SLUG}
      title={TITLE}
      subtitle={SUBTITLE}
      date="2026-09-12"
      dateLabel="12. September 2026"
      cat="Architektur"
      minutes={11}
      cta={{
        eyebrow: "Nächster Schritt",
        title: "Ihr SaaS, tragfähig aufgesetzt.",
        body: "Ein Kennenlerngespräch zeigt, ob eine Architektur-Analyse oder eine gemeinsame Umsetzung sinnvoller ist.",
      }}
      intro={
        <>
          <p>
            SaaS-Produkte scheitern selten an einzelnen Features. Sie
            scheitern an frühen Architektur-Entscheidungen, die sich zwei
            oder drei Jahre später als nicht mehr rückführbar herausstellen.
            Wer schon einmal versucht hat, ein produktives Multi-Tenant-System
            von Shared-Schema auf Isolated-Schema zu migrieren, weiß, was
            gemeint ist.
          </p>
          <p>
            Die folgenden sechs Entscheidungen betreffen den Kern jeder
            SaaS-Architektur. Sie sollten am Anfang bewusst getroffen werden,
            nicht implizit im ersten Sprint entstehen.
          </p>
        </>
      }
      sections={[
        {
          eyebrow: "Entscheidung 01",
          heading: "Tenant-Isolation · Shared vs. Isolated Schema.",
          body: (
            <>
              <p>
                Shared-Schema ist einfacher, günstiger und tragfähig für
                mittelgroße SaaS. Isolated-Schema ist teurer im Betrieb, aber
                zwingend bei streng regulierten Kunden oder wenn Tenants
                sehr unterschiedliche Datenmodell-Erweiterungen benötigen.
              </p>
              <p>
                Die Fehlwahl ist selten „Shared", sondern „Wir entscheiden
                später." Wer die Entscheidung nicht trifft, produziert
                unfreiwillig ein Shared-Schema, das später nicht mehr trennbar
                ist. Wenn eine spätere Isolation absehbar sein könnte, muss
                der Datenzugriff von Anfang an so gebaut sein, dass die
                Tenant-Grenze im Datenmodell explizit sichtbar ist.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Entscheidung 02",
          heading: "Auth · Wer definiert Identity.",
          body: (
            <>
              <p>
                Die Wahl zwischen selbst gebauter Authentifizierung, einem
                Auth-Dienst (Auth0, Clerk, WorkOS) und einem
                Enterprise-Identity-Provider (SAML, OIDC gegen Kunden-Systeme)
                ist keine Detail-Entscheidung. Sie prägt den Enterprise-Fit
                des Produkts.
              </p>
              <p>
                Eigenbau ist oft die kürzeste Antwort im Prototyp und der
                längste Weg in die Zukunft. Ein Auth-Dienst kostet, gibt aber
                SSO, MFA und Compliance-Zertifikate ohne Eigenaufwand.
                Enterprise-SSO ist ein Muss, sobald ein Kunde mit mehr als
                100 Nutzern auftritt.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Entscheidung 03",
          heading: "Datenmodell · Wie hart ist das Schema.",
          body: (
            <>
              <p>
                Ein starres Datenmodell ist schneller zu bauen und schwerer
                zu pflegen, wenn Tenants unterschiedliche Felder brauchen.
                Ein zu flexibles Datenmodell (Key-Value-Overloading, EAV) ist
                schwer zu abfragen und produziert langsame Reports.
              </p>
              <p>
                Ein pragmatischer Kompromiss: strenges Kernschema mit klar
                definierten Erweiterungspunkten pro Tenant. Wichtige Daten
                bleiben normalisiert und schnell auswertbar. Optionale
                Zusatzfelder liegen in gut typisierten Erweiterungstabellen.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Entscheidung 04",
          heading: "Rechte · Rollen vs. Berechtigungen.",
          body: (
            <>
              <p>
                Ein rein rollenbasiertes Modell (RBAC) ist einfach, wird aber
                schnell unflexibel, sobald ein Kunde eigene Rollen benötigt.
                Ein rein berechtigungsbasiertes Modell (ABAC) ist flexibel,
                aber schwer verständlich für Betriebe ohne IT-Abteilung.
              </p>
              <p>
                In der Praxis trägt ein hybrider Ansatz: fest definierte
                Rollen pro Tenant, jede Rolle als Bündel klar benannter
                Berechtigungen. Neue Rollen sind eine Kombination bestehender
                Berechtigungen. So bleibt das System für den Kunden
                verständlich und für uns wartbar.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Entscheidung 05",
          heading: "Billing · Von der ersten Zeile Code aus.",
          body: (
            <>
              <p>
                Billing wird oft am Ende eingebaut. Das ist der Grund, warum
                Preisänderungen später so schmerzhaft sind. Wenn Nutzung,
                Nutzer, Ressourcen oder Speicher-Verbrauch verrechnet werden
                sollen, muss die Zählung vom ersten Tag an sauber laufen.
              </p>
              <p>
                Ein guter Ansatz: eine klar getrennte Metering-Ebene, die
                alle relevanten Ereignisse aggregiert (Nutzer-Anmeldungen,
                API-Aufrufe, Speicher, Feature-Nutzung). Die Preisgestaltung
                sitzt darüber und ist austauschbar. So kann das Pricing-Modell
                sich ändern, ohne dass die Anwendung sich ändern muss.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Entscheidung 06",
          heading: "Deployment · Wie viele Umgebungen wirklich.",
          body: (
            <>
              <p>
                Ein produktives SaaS braucht typischerweise mehr Umgebungen,
                als am Anfang gedacht: mindestens Preview, Staging und
                Production, oft dazu ein Sandbox-Bereich für Kunden. Wer das
                später nachbaut, migriert schmerzhaft.
              </p>
              <p>
                Zusätzlich zur Umgebungszahl entscheidet die Deployment-
                Strategie über den Betrieb: containerisiert auf einer eigenen
                Cloud (AWS, Azure) oder auf einer Plattform (Vercel, Fly). Die
                Wahl hängt vom Nutzungsprofil, den Compliance-Anforderungen
                und der Team-Struktur ab. Sie ist selten „einmal für alle".
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          q: "Können solche Entscheidungen später korrigiert werden?",
          a: "Teilweise. Auth, Deployment und Rechte-Modell lassen sich mit erheblichem Aufwand austauschen. Tenant-Isolation und Datenmodell sind nach ein bis zwei Jahren produktiven Betriebs meist nicht mehr sauber revidierbar. Deshalb gehören sie an den Anfang.",
        },
        {
          q: "Wie lange dauert ein sauberer SaaS-Kern?",
          a: "Für einen produktiven SaaS-Kern rechnen wir typischerweise 12 bis 20 Wochen, abhängig davon, wie viele der oben genannten Entscheidungen sofort komplexe Anforderungen mitbringen (z. B. Enterprise-SSO, Isolated-Schema, umfangreiches Berechtigungsmodell).",
        },
        {
          q: "Bauen Sie SaaS-Produkte auch als Weiterentwicklung eines bestehenden Systems?",
          a: "Ja. Häufig kommen Betriebe mit einem internen System, das zum SaaS werden soll. Der Umbau ist möglich, erfordert aber eine ehrliche Analyse, wo Multi-Tenancy nachträglich sauber realisierbar ist und wo neu gedacht werden muss.",
        },
      ]}
      related={[
        {
          href: "/leistungen/saas-entwicklung",
          eyebrow: "Leistung",
          title: "SaaS- und Produktentwicklung",
          sub: "Detail-Leistungsseite zur SaaS-Entwicklung.",
        },
        {
          href: "/loesungen/kundenportal",
          eyebrow: "Lösung",
          title: "Kundenportal",
          sub: "Häufiger Einstieg vor einer vollen SaaS-Umsetzung.",
        },
        {
          href: "/wissen/operations-software-dienstleister",
          eyebrow: "Wissen",
          title: "Operations-Software für Dienstleister",
          sub: "SaaS-Erfahrungen aus dem laufenden Taskey-Betrieb.",
        },
      ]}
    />
  );
}
