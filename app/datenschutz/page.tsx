import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutz · Schulz & Stosse",
};

export default function Datenschutz() {
  return (
    <main>
      <Nav />
      <section className="container-x pt-40 pb-32">
        <div className="eyebrow mb-4">Rechtliches</div>
        <h1 className="display text-[clamp(40px,6vw,80px)] leading-none mb-12">
          Datenschutz
        </h1>
        <div className="prose prose-neutral max-w-3xl text-[15px] leading-[1.7] text-ink-700 space-y-8">
          <p>
            Diese Datenschutzerklärung gilt für die Website schulz-stosse.de.
            Wir behandeln personenbezogene Daten vertraulich und entsprechend
            der gesetzlichen Vorschriften (DSGVO, BDSG, TDDDG).
          </p>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              1. Verantwortlicher
            </h2>
            <p>
              Schulz &amp; Stosse GbR, In der Acht 44, 66333 Völklingen,
              Deutschland.
              <br />
              Telefon: +49 151 68488999 · E-Mail:{" "}
              <a
                href="mailto:info@schulz-stosse.de"
                className="text-ink-950 hover:text-signal-500 transition-colors"
              >
                info@schulz-stosse.de
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              2. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder über unsere Terminbuchung
              (Calendly) kontaktieren, verarbeiten wir Ihre Angaben zur
              Bearbeitung Ihrer Anfrage und für den Fall anschließender
              Rückfragen (Art. 6 Abs. 1 lit. b DSGVO). Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              3. Terminbuchung über Calendly
            </h2>
            <p>
              Für die Online-Terminbuchung setzen wir den Dienst Calendly ein
              (Calendly LLC, USA). Bei Nutzung werden von Calendly die für die
              Terminierung erforderlichen Daten (u. a. Name, E-Mail, gewählter
              Zeitraum) verarbeitet. Details entnehmen Sie der{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-950 hover:text-signal-500 transition-colors underline underline-offset-2"
              >
                Datenschutzerklärung von Calendly
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              4. Server-Logfiles
            </h2>
            <p>
              Beim Aufruf unserer Website werden technische Zugriffsdaten
              gespeichert (Datum, Uhrzeit, User-Agent, anonymisierte IP), soweit
              dies zur sicheren Bereitstellung des Angebots erforderlich ist
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch. Wenden Sie sich hierzu an:{" "}
              <a
                href="mailto:info@schulz-stosse.de"
                className="text-ink-950 hover:text-signal-500 transition-colors"
              >
                info@schulz-stosse.de
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
