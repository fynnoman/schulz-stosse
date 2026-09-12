import type { Metadata } from "next";
import WissenArticle from "@/components/WissenArticle";
import { SITE_URL } from "@/components/Schema";

const SLUG = "operations-software-dienstleister";
const URL = `${SITE_URL}/wissen/${SLUG}`;
const TITLE = "Operations-Software für Dienstleister";
const SUBTITLE =
  "Was wir aus dem laufenden Betrieb von Taskey gelernt haben und warum operative Software eigene Regeln hat.";

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
      cat="Praxis"
      minutes={10}
      cta={{
        eyebrow: "Nächster Schritt",
        title: "Operations, ohne Reibung.",
        body: "Ein Kennenlerngespräch zeigt, welche Module in Ihrem Betrieb den größten Hebel haben.",
      }}
      intro={
        <>
          <p>
            Operative Software hat eigene Regeln. Sie wird nicht am
            Büroschreibtisch benutzt, sondern in Treppenhäusern, auf
            Baustellen, in Autos und in wechselnden Umgebungen. Wer sie so
            baut wie eine klassische Büroanwendung, produziert Software, die
            nach vier Wochen umgangen wird.
          </p>
          <p>
            Wir betreiben mit Taskey selbst eine Operations-Plattform für
            Dienstleistungsunternehmen. Die folgenden Beobachtungen kommen aus
            dem laufenden Betrieb, nicht aus einem Whitepaper.
          </p>
        </>
      }
      sections={[
        {
          eyebrow: "Beobachtung 01",
          heading: "Bedienschritte zählen mehr als Features.",
          body: (
            <>
              <p>
                Eine Funktion, die drei Taps braucht, wird benutzt. Eine
                Funktion, die fünf Taps braucht, wird umgangen, sobald eine
                Alternative existiert. Die Alternative heißt fast immer
                WhatsApp oder Papier.
              </p>
              <p>
                Für Operations-Software heißt das: Der Entwurf einer
                Oberfläche beginnt nicht bei den Feldern, sondern bei den
                Bedienschritten. Wenn ein Standardvorgang mehr als drei
                Schritte braucht, muss der Vorgang zerlegt oder anders
                strukturiert werden.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Beobachtung 02",
          heading: "Offline ist keine Option, sondern eine Anforderung.",
          body: (
            <>
              <p>
                Wer in einem Keller, in einer Tiefgarage oder auf einem
                großen Objekt arbeitet, hat kein durchgehendes Mobilnetz.
                Wenn eine Auftragserfassung Verbindung verlangt, geht sie im
                Alltag verloren.
              </p>
              <p>
                Operations-Software muss vollständig offline funktionieren:
                Daten werden lokal geschrieben, Konflikte serverseitig
                aufgelöst, Zustände klar an den Nutzer kommuniziert. Das ist
                aufwendig, aber der Unterschied zwischen einer Software, die
                benutzt wird, und einer, die nicht benutzt wird.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Beobachtung 03",
          heading: "Rollen sind selten so klar wie in der Anforderung.",
          body: (
            <>
              <p>
                In der Anforderung heißt es „Objektleiter", „Reinigungskraft",
                „Disponent". In der Realität übernimmt der Objektleiter auch
                Auftragserfassung, der Disponent macht selbst gelegentlich
                Nachweise, und der Geschäftsführer schaut manchmal in eine
                Kundenreklamation. Ein starres Rollenmodell frisst diese
                Flexibilität und wird umgangen.
              </p>
              <p>
                Wir bauen Rollen deshalb als Bündel von Berechtigungen, die
                pro Nutzer feiner konfigurierbar bleiben. Das kostet
                Modellierungsaufwand, spart aber viele nachträgliche
                Diskussionen.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Beobachtung 04",
          heading: "KI trägt dort, wo der Mensch sortiert.",
          body: (
            <>
              <p>
                Der wirtschaftlich stärkste Einsatz von KI in Operations-
                Software ist nicht die Generierung, sondern die Zuordnung.
                Eine E-Mail, die dem richtigen Auftrag zugeordnet wird. Ein
                PDF, das automatisch an das richtige Objekt geheftet wird.
                Eine Reklamation, die selbstständig als solche erkannt und in
                den Bearbeitungsstatus geschoben wird.
              </p>
              <p>
                Diese Arbeit macht heute in vielen Betrieben eine Person am
                Vormittag. KI übernimmt sie zuverlässig, wenn die Kategorien
                sauber definiert sind. Der eingesparte Aufwand ist der
                deutlichste sichtbare Nutzen von KI in Operations-Kontexten.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Beobachtung 05",
          heading: "Nachweise sind das eigentliche Produkt.",
          body: (
            <>
              <p>
                In vielen Dienstleistungsbranchen ist der Nachweis wichtiger
                als die Ausführung selbst. Wer eine Reinigung dokumentiert
                hat, hat sie beim Kunden auch erbracht. Wer sie ohne
                Nachweis erbracht hat, muss regelmäßig erklären.
              </p>
              <p>
                Deshalb behandeln wir Nachweise nicht als Zusatzmodul,
                sondern als Kern. Sie sollen so einfach zu erzeugen sein, dass
                sie im Alltag entstehen, nicht als extra Arbeitsschritt.
                Fotos, Unterschriften, kurze Notizen, alles ohne
                Ballast-UI.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Beobachtung 06",
          heading: "Betrieb ist kein Randthema.",
          body: (
            <>
              <p>
                Operations-Software läuft täglich, oft 24/7, oft mit
                Notruf-Charakter für den Kunden. Ausfälle sind sichtbar,
                sofort, für alle. Deshalb ist der Betrieb keine
                nachgelagerte Aufgabe, sondern Teil des Produkts.
              </p>
              <p>
                Konkret bedeutet das: klare Monitoring-Ebene, definierte
                Alarme, wiederhergestellte Backups, dokumentierte Recovery-
                Prozesse und ein Ansprechpartner mit Verantwortung. Software,
                die morgens still steht, ist unabhängig vom Feature-Umfang
                wertlos.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          q: "Kann man eine Operations-Plattform inkrementell einführen?",
          a: "Ja, und das ist meistens der richtige Weg. Ein produktiver Kern (Objekte, Aufträge, Nutzer, mobile Bedienung) trägt zuerst. Weitere Module (KI-Klassifikation, Kundenportal, Reports) kommen dazu, ohne den Kernbetrieb zu unterbrechen.",
        },
        {
          q: "Braucht es eine eigene Plattform, wenn Taskey verfügbar ist?",
          a: "Für viele Dienstleistungsunternehmen ist Taskey der schnellere Weg. Für Betriebe, deren Prozess das Alleinstellungsmerkmal ist und deutlich vom Standard abweicht, ist eine eigene Plattform sinnvoller. Wir sagen offen im Erstgespräch, welcher Weg wirtschaftlicher ist.",
        },
        {
          q: "Was ist der häufigste Fehler bei der Einführung von Operations-Software?",
          a: "Ein zu großer Big-Bang. Betriebe, die den gesamten Prozess in einem Schritt umstellen wollen, scheitern häufig an der Umstellungsphase. Eine inkrementelle Einführung mit einem klar produktiven Kern ist zuverlässiger.",
        },
      ]}
      related={[
        {
          href: "/loesungen/operations-plattform",
          eyebrow: "Lösung",
          title: "Operations-Plattform",
          sub: "Direktes Angebot zu diesem Thema.",
        },
        {
          href: "/branchen/reinigung",
          eyebrow: "Branche",
          title: "Software für Reinigungsunternehmen",
          sub: "Erste Zielbranche für Operations-Software.",
        },
        {
          href: "/branchen/facility-management",
          eyebrow: "Branche",
          title: "Software für Facility Management",
          sub: "Erweitertes Anwendungsfeld.",
        },
      ]}
    />
  );
}
