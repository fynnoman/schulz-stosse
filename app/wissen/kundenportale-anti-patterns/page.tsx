import type { Metadata } from "next";
import WissenArticle from "@/components/WissenArticle";
import { SITE_URL } from "@/components/Schema";

const SLUG = "kundenportale-anti-patterns";
const URL = `${SITE_URL}/wissen/${SLUG}`;
const TITLE = "Kundenportale · Sechs Anti-Patterns";
const SUBTITLE =
  "Sechs Muster, an denen Kundenportale zuverlässig scheitern, und was stattdessen trägt.";

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
      cat="Produkt"
      minutes={8}
      cta={{
        eyebrow: "Nächster Schritt",
        title: "Ihr Kundenkontakt, professionalisiert.",
        body: "Ein Kennenlerngespräch zeigt, welche Portalstruktur zu Ihrem Prozess und Ihren Kunden passt.",
      }}
      intro={
        <>
          <p>
            Kundenportale gehören zu den am häufigsten falsch dimensionierten
            Produkten in der Unternehmenssoftware. Sie werden zu groß
            geplant, zu spät gestartet, zu selten benutzt. Die folgenden
            sechs Muster sehen wir immer wieder. Sie sind vermeidbar, wenn
            man sie kennt.
          </p>
        </>
      }
      sections={[
        {
          eyebrow: "Anti-Pattern 01",
          heading: "Das Portal als vollständige Zweitanwendung.",
          body: (
            <>
              <p>
                Ein Portal, das alles können soll, wird nie fertig. Der
                erste sichtbare Nutzen liegt oft im Bruchteil des geplanten
                Funktionsumfangs. Wer das nicht akzeptiert, produziert ein
                Portal, das zwei Jahre in der Entwicklung bleibt und danach
                als „nicht fertig" wahrgenommen wird.
              </p>
              <p>
                Besser: Ein Portal löst die drei häufigsten Vorgänge, und
                zwar besser als die aktuelle E-Mail. Alles andere wird später
                bei Bedarf ergänzt.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Anti-Pattern 02",
          heading: "Fünf Rollen ab Tag eins.",
          body: (
            <>
              <p>
                Ein häufiger Wunsch: „Wir brauchen einen Kunden-Admin, einen
                Kunden-Nutzer, einen Kunden-Beobachter, einen internen
                Bearbeiter und einen internen Freigeber, alle mit
                unterschiedlichen Rechten." Der Aufwand für die
                Rechte-Modellierung übersteigt den Aufwand für den
                eigentlichen Inhalt.
              </p>
              <p>
                Besser: eine Rolle pro Seite, klar. Weitere Rollen werden
                hinzugefügt, sobald ein realer Bedarf existiert, nicht auf
                Vorrat.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Anti-Pattern 03",
          heading: "Formulare als Ersatz für Prozesse.",
          body: (
            <>
              <p>
                Ein digitales Formular macht einen unklaren Prozess nicht
                besser. Es macht ihn nur formal digital. Wenn nicht klar ist,
                wer ein Formular ausfüllt, was danach passiert und wer den
                Vorgang freigibt, ersetzt das Formular die E-Mail nur durch
                eine langsamere Variante.
              </p>
              <p>
                Besser: Der Prozess wird zuerst geklärt. Erst danach entsteht
                das passende Formular. Ein Formular ist ein Endpunkt eines
                Prozesses, nicht sein Anfang.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Anti-Pattern 04",
          heading: "Das Portal als Insel.",
          body: (
            <>
              <p>
                Ein Portal, das nicht mit dem internen System spricht,
                erzeugt eine zweite Datenpflege. Kundenanfragen werden im
                Portal erfasst und intern nochmal ins CRM übertragen. Nach
                sechs Wochen benutzt niemand mehr das Portal, weil die
                E-Mail schneller ist.
              </p>
              <p>
                Besser: Das Portal ist ab dem ersten Release mit dem internen
                System gekoppelt. Wenn eine solche Kopplung technisch nicht
                möglich ist, ist der Start des Portals verfrüht.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Anti-Pattern 05",
          heading: "Design-getriebene Nutzenverschiebung.",
          body: (
            <>
              <p>
                Wer ein Portal am Design entlang plant, priorisiert
                Startseite, Bilder, Farben, Login-Optik und Dashboards.
                Wichtig ist der operative Nutzen, meistens in unspektakulären
                Listen und Detailseiten. Ein Portal muss nicht schön wirken,
                es muss den Vorgang schneller machen.
              </p>
              <p>
                Besser: Der Nutzen definiert das Design, nicht umgekehrt. Ein
                Portal darf ruhig unaufgeregt aussehen, wenn es den täglichen
                Ablauf spürbar verbessert.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Anti-Pattern 06",
          heading: "Kein Bezug zum internen Prozess.",
          body: (
            <>
              <p>
                Ein Portal, dessen internes Gegenstück nicht existiert, wird
                zu einer Fassade. Der Kunde sieht Statusmeldungen, aber
                intern liegt der Vorgang weiter in E-Mails und Excel. Das
                fällt spätestens bei der ersten Reklamation auf.
              </p>
              <p>
                Besser: Portal und internes System werden gemeinsam gedacht.
                Der Kunde sieht einen Ausschnitt dessen, was intern ohnehin
                sauber läuft, nicht eine simulierte Fassade.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          q: "Wie klein darf ein Portal starten?",
          a: "So klein wie möglich. Drei Vorgänge, eine Rolle, klare Kopplung an das interne System. Das ist genug, wenn diese drei Vorgänge häufig und wichtig sind. Der Rest kann inkrementell entstehen.",
        },
        {
          q: "Wann ist ein Portal die falsche Antwort?",
          a: "Wenn die Kundenkommunikation heute überwiegend telefonisch läuft und dabei stabil funktioniert. Ein Portal löst geschriebene Prozesse. Was mündlich stabil ist, kann mündlich bleiben.",
        },
        {
          q: "Wie messen wir, ob ein Portal wirtschaftlich ist?",
          a: "An der Reduktion wiederkehrender Vorgänge. Wie viele E-Mails wurden ersetzt? Wie viele Statusanfragen bleiben aus? Wie viele Freigaben laufen digital ohne Rückfrage durch? Wenn diese Zahlen nicht sichtbar sinken, trägt das Portal nicht.",
        },
      ]}
      related={[
        {
          href: "/loesungen/kundenportal",
          eyebrow: "Lösung",
          title: "Kundenportal",
          sub: "Detail-Angebotsseite zur Kundenportal-Entwicklung.",
        },
        {
          href: "/leistungen/individualsoftware",
          eyebrow: "Leistung",
          title: "Individuelle Softwareentwicklung",
          sub: "Grundlage für Portale mit Prozessbindung.",
        },
        {
          href: "/wissen/multi-tenant-saas-architektur",
          eyebrow: "Wissen",
          title: "Multi-Tenant SaaS · Entscheidungen, die man teuer bezahlt",
          sub: "Wenn das Portal zum SaaS-Produkt werden soll.",
        },
      ]}
    />
  );
}
