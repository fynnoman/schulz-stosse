import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum · Schulz & Stosse",
};

export default function Impressum() {
  return (
    <main>
      <Nav />
      <section className="container-x pt-40 pb-32">
        <div className="eyebrow mb-4">Rechtliches</div>
        <h1 className="display text-[clamp(40px,6vw,80px)] leading-none mb-12">Impressum</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[15px] leading-[1.7] text-ink-700 max-w-4xl">
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Angaben gem. § 5 TMG
            </h2>
            <p>
              Schulz &amp; Stosse GbR
              <br />
              Julian Stosse · Fynn-Luca Schulz
              <br />
              Saarbrücken · Deutschland
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Kontakt
            </h2>
            <p>
              E-Mail: hello@schulz-stosse.de
              <br />
              Web: schulz-stosse.de
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Verantwortlich für den Inhalt
            </h2>
            <p>Julian Stosse und Fynn-Luca Schulz (Anschrift wie oben).</p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-2">
              Haftung
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
