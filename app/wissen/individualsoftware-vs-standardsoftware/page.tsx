import type { Metadata } from "next";
import WissenArticle from "@/components/WissenArticle";
import { SITE_URL } from "@/components/Schema";

const SLUG = "individualsoftware-vs-standardsoftware";
const URL = `${SITE_URL}/wissen/${SLUG}`;
const TITLE = "Wann Standardsoftware kippt";
const SUBTITLE =
  "Der Bruchpunkt zwischen Baukasten und eigener Lösung, und warum er selten dort liegt, wo man ihn erwartet.";

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
      cat="Strategie"
      minutes={9}
      cta={{
        eyebrow: "Nächster Schritt",
        title: "Wo Standardsoftware für Sie endet.",
        body: "Ein Kennenlerngespräch zeigt in einer Stunde, ob individuelle Softwareentwicklung wirtschaftlich sinnvoll ist. Wir sagen offen, wenn nicht.",
      }}
      intro={
        <>
          <p>
            Der wirtschaftliche Bruchpunkt zwischen Standardsoftware und einer
            eigenen Lösung liegt selten dort, wo er im Prospekt suggeriert
            wird. Er liegt nicht bei einer bestimmten Mitarbeiterzahl, nicht
            bei einer bestimmten Branche und nicht bei einem bestimmten
            Umsatz. Er liegt genau dort, wo ein Prozess das Alleinstellungsmerkmal
            eines Unternehmens geworden ist und weiterhin von einem
            Werkzeug abgebildet wird, das für den Durchschnitt der Branche
            gedacht war.
          </p>
          <p>
            Die eigentliche Frage lautet also nicht: „Ist unser Unternehmen
            groß genug für Individualsoftware?" Sondern: „Ist unser Prozess
            austauschbar oder ist er unser Kern?"
          </p>
        </>
      }
      sections={[
        {
          eyebrow: "Beobachtung",
          heading: "Standardsoftware ist gut, wenn der Prozess austauschbar ist.",
          body: (
            <>
              <p>
                Standardsoftware ist die richtige Wahl, wenn ein Prozess in
                Ihrem Unternehmen weitgehend so läuft wie in vielen anderen
                Unternehmen derselben Größe und Branche. Buchhaltung ist ein
                gutes Beispiel. Die gesetzlichen Anforderungen sind für alle
                gleich, die Praxis unterscheidet sich nur in Nuancen. Eine
                DATEV- oder sevDesk-Installation trägt das zuverlässig.
              </p>
              <p>
                Sobald ein Prozess aber vom Durchschnitt abweicht und diese
                Abweichung Teil des Angebots ist, dreht sich das Verhältnis.
                Die Standardlösung muss dann fortlaufend angepasst,
                umgangen oder ergänzt werden. Kosten für Customizing,
                Workarounds und Zusatzsoftware summieren sich, oft still.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Woran es sichtbar wird",
          heading: "Fünf Symptome, an denen Standardsoftware kippt.",
          body: (
            <>
              <p>
                <strong>Erstens:</strong> Es gibt Schatten-Excel-Dateien, in
                denen der eigentliche Prozess lebt. Die Standardsoftware ist
                nur noch die Ablage.
              </p>
              <p>
                <strong>Zweitens:</strong> Neue Mitarbeitende brauchen keine
                Software-Schulung, sondern eine Prozess-Schulung, weil die
                Software nur einen Ausschnitt der Realität zeigt.
              </p>
              <p>
                <strong>Drittens:</strong> Jede kleine Anpassung der
                Standardsoftware kostet Wochen und dennoch bildet sie das
                Sonderfall-Problem nicht sauber ab.
              </p>
              <p>
                <strong>Viertens:</strong> Es gibt eine feste Kette aus
                Werkzeugen (CRM, Excel, E-Mail, PDF-Formulare), die niemand
                mehr zusammenhält, aber jeder für den Alltag braucht.
              </p>
              <p>
                <strong>Fünftens:</strong> Ausnahmen und Reklamationen
                verursachen unverhältnismäßig hohen manuellen Aufwand, weil
                die Software den Regelfall optimiert hat.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Rechnung",
          heading: "Warum die Wirtschaftlichkeit oft falsch gerechnet wird.",
          body: (
            <>
              <p>
                Der klassische Vergleich lautet: „Individualsoftware ist
                teuer, Standardsoftware ist günstig." Diese Rechnung stimmt
                nur, wenn die Standardsoftware unverändert läuft. In der
                Praxis läuft sie nie unverändert. Sie wird durch
                Zusatzlizenzen, Customizing, Fremdsysteme und manuelle
                Prozesse ergänzt.
              </p>
              <p>
                Der ehrliche Vergleich lautet: Kosten der Standardsoftware
                zuzüglich aller Umbau- und Umgehungskosten über einen
                mehrjährigen Zeitraum, gegen Investitions- und Betriebskosten
                einer eigenen Lösung. In vielen Fällen ist die eigene Lösung
                nicht teurer, sondern nur anders verteilt.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Bruchpunkt",
          heading: "Wann Individualsoftware konkret sinnvoll wird.",
          body: (
            <>
              <p>
                Nach unserer Erfahrung ist der Übergang typischerweise
                erreicht, wenn zwei oder mehr der folgenden Bedingungen
                zusammenkommen: Der operative Prozess ist Teil des
                Marktvorteils. Es gibt mehrere Rollen mit unterschiedlichem
                Blick auf denselben Vorgang. Es gibt mehrere parallele
                Prozesse, die miteinander verbunden sind. Es gibt Ausnahmen,
                die häufig genug auftreten, um relevant zu sein, aber selten
                genug, dass Standardmasken sie nicht abbilden.
              </p>
              <p>
                Wenn nur einer dieser Punkte gilt, reicht meistens ein gutes
                Standardwerkzeug in Kombination mit klarer Prozessdisziplin.
                Wenn drei oder mehr gelten, wird die Reibung teurer als die
                eigene Lösung.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Praxis",
          heading: "Wie ein Umstieg realistisch abläuft.",
          body: (
            <>
              <p>
                Der Umstieg auf eine individuelle Lösung erfolgt fast nie in
                einem Schritt. Er beginnt mit einem klar umrissenen Kernprozess,
                der in einem produktiven Release trägt, und wächst dann
                inkrementell. Bestehende Systeme wie CRM, ERP oder DMS
                werden nicht abgelöst, sondern über Schnittstellen
                eingebunden.
              </p>
              <p>
                In der Regel ist ein tragender Kern nach 10 bis 16 Wochen
                produktiv nutzbar. Weitere Module folgen ohne Unterbrechung
                des Kernbetriebs. Das ist wichtig, weil Betriebe, die ihre
                Software wechseln müssen, keine sechsmonatige Umstellung
                aushalten.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          q: "Ab welcher Unternehmensgröße lohnt sich Individualsoftware?",
          a: "Die Größe ist nicht der entscheidende Faktor. Entscheidend ist, ob der operative Prozess ein Wettbewerbsvorteil ist. Es gibt kleine Unternehmen mit einem sehr eigenständigen Prozess, für die eine eigene Lösung sinnvoll ist, und große Unternehmen mit sehr standardisierten Abläufen, für die eine Standardsoftware wirtschaftlicher bleibt.",
        },
        {
          q: "Wie lange dauert ein Umstieg?",
          a: "Ein produktiver Kern ist häufig nach 10 bis 16 Wochen nutzbar. Der vollständige Umstieg über alle Prozesse hinweg dauert länger, verläuft aber inkrementell und ohne Unterbrechung des laufenden Betriebs.",
        },
        {
          q: "Was passiert mit bestehenden Systemen wie DATEV oder CRM?",
          a: "In den meisten Fällen bleiben sie erhalten und werden über Schnittstellen eingebunden. Individualsoftware ersetzt selten alles. Sie ergänzt in der Regel die Prozessebene, die die bestehenden Systeme nicht abbilden.",
        },
      ]}
      related={[
        {
          href: "/leistungen/individualsoftware",
          eyebrow: "Leistung",
          title: "Individuelle Softwareentwicklung",
          sub: "Detail-Leistungsseite mit Vorgehen und Stack.",
        },
        {
          href: "/loesungen/operations-plattform",
          eyebrow: "Lösung",
          title: "Operations-Plattform",
          sub: "Häufigster Anwendungsfall für Individualsoftware.",
        },
        {
          href: "/wissen/operations-software-dienstleister",
          eyebrow: "Wissen",
          title: "Operations-Software für Dienstleister",
          sub: "Erfahrungen aus dem laufenden Betrieb von Taskey.",
        },
      ]}
    />
  );
}
