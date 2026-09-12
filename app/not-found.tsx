import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description:
    "Diese Seite existiert nicht oder wurde verschoben. Springen Sie zurück zur Startseite oder wählen Sie eine unserer Leistungen.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <Nav />
      <section className="container-x pt-40 pb-24 min-h-[70vh]">
        <div className="max-w-[70ch]">
          <div className="eyebrow mb-4">Fehler · 404</div>
          <h1 className="display text-[clamp(48px,8vw,120px)] leading-[0.95] tracking-tighter mb-8">
            Diese Seite ist{" "}
            <em className="italic text-ink-500">nicht auffindbar</em>.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-700 max-w-[54ch] mb-12">
            Vermutlich hat sich der Link geändert oder die Seite existiert
            nicht mehr. Zurück zur Startseite oder direkt zu einer unserer
            Leistungen:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[720px]">
            <Link href="/" className="card-glass block group">
              <div className="eyebrow mb-2">Start</div>
              <div className="display text-[22px] leading-[1.15] group-hover:text-signal-500 transition-colors">
                Zur Startseite
              </div>
            </Link>
            <Link href="/team" className="card-glass block group">
              <div className="eyebrow mb-2">Über</div>
              <div className="display text-[22px] leading-[1.15] group-hover:text-signal-500 transition-colors">
                Team &amp; Gründer
              </div>
            </Link>
            <Link
              href="/leistungen/individualsoftware"
              className="card-glass block group"
            >
              <div className="eyebrow mb-2">Leistung · 01</div>
              <div className="display text-[22px] leading-[1.15] group-hover:text-signal-500 transition-colors">
                Individuelle Softwareentwicklung
              </div>
            </Link>
            <Link
              href="/leistungen/ki-automatisierung"
              className="card-glass block group"
            >
              <div className="eyebrow mb-2">Leistung · 02</div>
              <div className="display text-[22px] leading-[1.15] group-hover:text-signal-500 transition-colors">
                KI-Integration und Automatisierung
              </div>
            </Link>
            <Link
              href="/leistungen/saas-entwicklung"
              className="card-glass block group"
            >
              <div className="eyebrow mb-2">Leistung · 03</div>
              <div className="display text-[22px] leading-[1.15] group-hover:text-signal-500 transition-colors">
                SaaS-Entwicklung
              </div>
            </Link>
            <Link href="/kontakt" className="card-glass block group">
              <div className="eyebrow mb-2">Kontakt</div>
              <div className="display text-[22px] leading-[1.15] group-hover:text-signal-500 transition-colors">
                E-Mail, Telefon, Termin
              </div>
            </Link>
            <Link href="/wissen" className="card-glass block group">
              <div className="eyebrow mb-2">Wissen</div>
              <div className="display text-[22px] leading-[1.15] group-hover:text-signal-500 transition-colors">
                Aufsätze aus der Praxis
              </div>
            </Link>
            <Link href="/faq" className="card-glass block group">
              <div className="eyebrow mb-2">FAQ</div>
              <div className="display text-[22px] leading-[1.15] group-hover:text-signal-500 transition-colors">
                Häufige Fragen
              </div>
            </Link>
            <Link href="/sitemap" className="card-glass block group">
              <div className="eyebrow mb-2">Sitemap</div>
              <div className="display text-[22px] leading-[1.15] group-hover:text-signal-500 transition-colors">
                Alle Seiten im Überblick
              </div>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-3">
            <Link href="/" className="btn btn-primary">
              Zur Startseite
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a href="mailto:info@schulz-stosse.de" className="btn btn-ghost">
              info@schulz-stosse.de
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
