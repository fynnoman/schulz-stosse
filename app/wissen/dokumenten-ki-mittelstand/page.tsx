import type { Metadata } from "next";
import WissenArticle from "@/components/WissenArticle";
import { SITE_URL } from "@/components/Schema";

const SLUG = "dokumenten-ki-mittelstand";
const URL = `${SITE_URL}/wissen/${SLUG}`;
const TITLE = "Dokumenten-KI im Mittelstand";
const SUBTITLE =
  "Wo LLMs im Alltag wirklich tragen, wo sie nur teuer aussehen und wie eine belastbare Pipeline strukturiert ist.";

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
      cat="KI"
      minutes={12}
      cta={{
        eyebrow: "Nächster Schritt",
        title: "Ihre Dokumente, strukturiert.",
        body: "Ein Kennenlerngespräch klärt, ob eine Dokumenten-KI in Ihrem Kontext wirtschaftlich ist und wo Kontrollpunkte sinnvoll bleiben.",
      }}
      intro={
        <>
          <p>
            Dokumenten-KI ist im Mittelstand kein neues Thema mehr. Nahezu
            jeder Betrieb, der eine relevante Menge PDFs, E-Mails oder
            Formulare verarbeitet, hat sich das Thema schon einmal
            angesehen. Der Unterschied zwischen Betrieben, die daraus einen
            wirtschaftlichen Nutzen ziehen, und jenen, die nach sechs
            Monaten wieder bei manuellen Prozessen landen, liegt selten am
            Modell. Er liegt an der Struktur der Pipeline und an der
            klaren Trennung zwischen Automation und Kontrollpunkt.
          </p>
        </>
      }
      sections={[
        {
          eyebrow: "Grundhaltung",
          heading: "Automation mit Kontrollpunkten schlägt Voll-Automation.",
          body: (
            <>
              <p>
                Ein Denkfehler in vielen ersten KI-Projekten ist die Annahme,
                dass Automation gleichbedeutend mit „ohne menschliche
                Freigabe" sein muss. Das Gegenteil ist wirtschaftlich
                sinnvoller. Ein System, das sichere Fälle selbstständig
                entscheidet und unsichere Fälle sauber eskaliert, ist
                belastbarer als eines, das alle Fälle in gleicher Qualität zu
                lösen versucht.
              </p>
              <p>
                Der wirtschaftliche Nutzen entsteht dann nicht durch 100
                Prozent Automation, sondern durch 80 bis 90 Prozent Automation
                bei gleichzeitig sinkendem Bearbeitungsaufwand für den Rest.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Pipeline",
          heading: "Wie eine belastbare Pipeline strukturiert ist.",
          body: (
            <>
              <p>
                Eine belastbare Dokumenten-KI besteht aus sechs Ebenen. Sie
                sind unabhängig voneinander wartbar und sollten es auch
                bleiben. Wer sie vermischt, baut ein System, das man später
                nicht mehr entkoppeln kann.
              </p>
              <p>
                <strong>Ingest:</strong> Dokumente werden aus Postfach,
                Upload, API oder Scanner eingezogen. Die Ingest-Ebene weiß
                nichts über den Inhalt, nur über die Quelle.
              </p>
              <p>
                <strong>Klassifikation:</strong> Ein LLM ordnet das Dokument
                einer definierten Kategorie zu. Die Kategorien sollten
                bewusst wenige sein und sich am tatsächlichen Prozess
                orientieren, nicht an einer Wunschliste.
              </p>
              <p>
                <strong>Extraktion:</strong> Strukturierte Daten werden entlang
                eines Schemas extrahiert. Das Schema ist der Vertrag
                zwischen KI und Zielsystem. Wenn es unklar ist, wird die
                Extraktion unklar.
              </p>
              <p>
                <strong>Validierung:</strong> Regelbasierte Prüfungen
                validieren die Extraktion. Formatprüfungen, Bereichsprüfungen
                und Abgleich mit Stammdaten sind wichtiger als es klingt.
                Sie fangen bis zu einem großen Teil der Modell-Fehler ab,
                bevor sie ins Zielsystem gelangen.
              </p>
              <p>
                <strong>Routing:</strong> Das Dokument wird zusammen mit den
                Daten in das passende System geroutet. ERP, DMS, Ticket-
                oder Auftragssystem. Routing gehört zur KI-Ebene, nicht zum
                Zielsystem.
              </p>
              <p>
                <strong>Audit-Log:</strong> Jede Entscheidung wird protokolliert.
                Modell, Zeitpunkt, Konfidenz, verwendeter Prompt. Ohne
                Audit-Log ist nachträgliche Fehleranalyse unmöglich.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Modell-Wahl",
          heading: "Wann Frontier, wann lokal.",
          body: (
            <>
              <p>
                Die Wahl zwischen Frontier-Modellen (OpenAI, Anthropic,
                Google) und lokalen Modellen (z. B. Llama, Mistral) ist kein
                Trend-Thema. Sie ist eine Kostenrechnung mit
                Datenschutzkomponente.
              </p>
              <p>
                Frontier-Modelle sind wirtschaftlich bei komplexen,
                semantisch anspruchsvollen Aufgaben mit moderatem Volumen.
                Sie schneiden bei nuancierten Klassifikationen und schwierigen
                Extraktionen deutlich besser ab, oft mit kürzerer
                Prompt-Entwicklung.
              </p>
              <p>
                Lokale Modelle rechnen sich bei hohem Volumen, bei
                Anwendungen mit strengen Datenschutzanforderungen und bei
                Anwendungsfällen, in denen die Latenzkosten der API-Nutzung
                die eigene Infrastruktur überschreiten. Sie erfordern mehr
                Aufwand in Training, Prompt-Engineering und Betrieb.
              </p>
              <p>
                Die Wahl trifft man pro Anwendungsfall, nicht pro Betrieb.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Fallen",
          heading: "Wo Dokumenten-KI-Projekte scheitern.",
          body: (
            <>
              <p>
                <strong>Zu große Kategorien am Anfang.</strong> Eine
                Klassifikation mit 40 Kategorien scheitert vorhersehbar.
                Beginnen Sie mit fünf bis acht klar getrennten Kategorien.
                Feinere Unterscheidungen können hinzukommen, wenn die
                Grundklassifikation trägt.
              </p>
              <p>
                <strong>Unklares Zielsystem.</strong> Wenn nicht klar ist,
                wohin die Daten fließen sollen, produziert die KI-Ebene
                Ergebnisse, die niemand nutzt. Das Zielsystem gehört in die
                erste Phase der Analyse.
              </p>
              <p>
                <strong>Fehlende Validierungsebene.</strong> Ein LLM ohne
                nachgelagerte regelbasierte Validierung produziert
                gelegentlich sinnvolle Ausgaben, die trotzdem falsch sind.
                Validierung ist nicht optional.
              </p>
              <p>
                <strong>Fehlende Audit-Log-Disziplin.</strong> Ohne Audit-Log
                ist eine Fehleranalyse nach drei Monaten unmöglich. Das gilt
                doppelt, sobald Modelle wechseln.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Datenschutz",
          heading: "Wie wir mit sensiblen Daten umgehen.",
          body: (
            <>
              <p>
                In Deutschland ist die Datenschutzfrage bei LLM-Nutzung
                nicht trivial, aber lösbar. Wir betreiben Frontier-Modelle in
                europäischen Regionen mit Enterprise-Verträgen, die eine
                Verwendung der Daten zum Modelltraining ausschließen. Prompts
                sind redaktierbar, sensible Felder können vor Übergabe an das
                Modell entfernt oder maskiert werden. Für streng vertrauliche
                Anwendungen kommen lokale Modelle in Betracht, die
                vollständig in unserer oder Ihrer Infrastruktur laufen.
              </p>
              <p>
                Wichtig ist, den Datenfluss zu dokumentieren. Auch aus
                Compliance-Sicht: Wer nicht sagen kann, wohin ein Dokument
                geflossen ist, hat kein System, sondern eine Blackbox.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          q: "Wie hoch ist die Genauigkeit einer LLM-basierten Klassifikation?",
          a: "In gut abgegrenzten Kategorien erreichen wir Genauigkeiten, bei denen der Mensch nur noch Ausnahmen prüfen muss. Wichtig ist die Kombination aus klar definierter Kategorienliste, regelbasierter Validierung und Freigabepunkt für unsichere Fälle.",
        },
        {
          q: "Ist Dokumenten-KI mit DSGVO vereinbar?",
          a: "Ja, wenn Datenflüsse dokumentiert, Modelle in EU-Regionen mit Enterprise-Verträgen betrieben und Trainingsverwendung der Daten ausgeschlossen sind. Für streng vertrauliche Anwendungen kommen lokale Modelle in Betracht.",
        },
        {
          q: "Wie schnell rechnet sich ein Dokumenten-KI-Projekt?",
          a: "Das hängt vom Volumen ab. Ab einem konstanten Aufkommen mehrerer hundert Dokumente pro Woche mit wiederkehrender Struktur rechnet sich der Einsatz häufig innerhalb eines Jahres.",
        },
      ]}
      related={[
        {
          href: "/loesungen/dokumenten-ki",
          eyebrow: "Lösung",
          title: "Dokumenten-KI",
          sub: "Leistungsseite mit Pipeline und Prinzipien.",
        },
        {
          href: "/leistungen/ki-automatisierung",
          eyebrow: "Leistung",
          title: "KI-Integration und Automatisierung",
          sub: "Übergeordnete Leistung.",
        },
        {
          href: "/wissen/operations-software-dienstleister",
          eyebrow: "Wissen",
          title: "Operations-Software für Dienstleister",
          sub: "Wie KI in der Praxis in Operations-Systeme eingebettet ist.",
        },
      ]}
    />
  );
}
