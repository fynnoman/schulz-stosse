"use client";

import Logo from "./Logo";
import { openConsentBanner } from "./CookieConsent";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-bone-100 border-t border-white/6">
      {/* Marquee band */}
      <div className="overflow-hidden border-b border-white/6">
        <div className="marquee-track flex whitespace-nowrap py-8 md:py-12">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10 shrink-0">
              {[
                "We build software around businesses",
                "Complex processes. Simple software.",
                "From operational problem to working software",
                "Built for the way your business actually works",
                "Software sollte Prozesse lösen. Nicht neue schaffen.",
              ].map((s, i) => (
                <span key={i} className="display italic text-[clamp(28px,5vw,72px)] leading-none text-bone-100">
                  {s}
                  <span className="text-signal-500"> ·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <div className="mb-6">
              <Logo onDark heightClass="h-16 md:h-20" />
            </div>
            <p className="text-[14px] leading-[1.6] text-ink-100 max-w-[46ch]">
              Individuelle Softwaresysteme, digitale Produkte und KI-gestützte
              Prozesse für Unternehmen mit Anforderungen, die Standardsoftware
              nicht abbilden kann.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="eyebrow !text-bone-300 mb-4">Leistungen</div>
            <ul className="space-y-2 text-[14px]">
              <li><a href="/leistungen/individualsoftware" className="hover:text-signal-500 transition-colors">Individualsoftware</a></li>
              <li><a href="/leistungen/ki-automatisierung" className="hover:text-signal-500 transition-colors">KI &amp; Automatisierung</a></li>
              <li><a href="/leistungen/saas-entwicklung" className="hover:text-signal-500 transition-colors">SaaS-Entwicklung</a></li>
              <li><a href="/#services" className="hover:text-signal-500 transition-colors">Alle Leistungen</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="eyebrow !text-bone-300 mb-4">Unternehmen</div>
            <ul className="space-y-2 text-[14px]">
              <li><a href="/team" className="hover:text-signal-500 transition-colors">Team</a></li>
              <li><a href="/kontakt" className="hover:text-signal-500 transition-colors">Kontakt</a></li>
              <li><a href="/#process" className="hover:text-signal-500 transition-colors">Vorgehen</a></li>
              <li><a href="/#cases" className="hover:text-signal-500 transition-colors">Cases</a></li>
              <li><a href="/#faq" className="hover:text-signal-500 transition-colors">Häufige Fragen</a></li>
              <li><a href="mailto:info@schulz-stosse.de" className="hover:text-signal-500 transition-colors">info@schulz-stosse.de</a></li>
              <li><a href="tel:+4915168488999" className="hover:text-signal-500 transition-colors">+49 151 68488999</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow !text-bone-300 mb-4">Standort</div>
            <address className="not-italic text-[14px] leading-[1.6] text-ink-100">
              Schulz &amp; Stosse GbR
              <br />
              In der Acht 44
              <br />
              66333 Völklingen · Deutschland
              <br />
              <span className="text-bone-300">Remote weltweit</span>
            </address>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Web", "iOS", "Android", "Backend", "AI"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-bone-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-white/6 grid grid-cols-12 gap-6">
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow !text-bone-300 mb-4">Lösungen</div>
            <ul className="space-y-2 text-[14px]">
              <li><a href="/loesungen/operations-plattform" className="hover:text-signal-500 transition-colors">Operations-Plattform</a></li>
              <li><a href="/loesungen/kundenportal" className="hover:text-signal-500 transition-colors">Kundenportal</a></li>
              <li><a href="/loesungen/dokumenten-ki" className="hover:text-signal-500 transition-colors">Dokumenten-KI</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow !text-bone-300 mb-4">Branchen</div>
            <ul className="space-y-2 text-[14px]">
              <li><a href="/branchen/reinigung" className="hover:text-signal-500 transition-colors">Reinigung</a></li>
              <li><a href="/branchen/facility-management" className="hover:text-signal-500 transition-colors">Facility Management</a></li>
              <li><a href="/branchen/handwerk" className="hover:text-signal-500 transition-colors">Handwerk</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow !text-bone-300 mb-4">Wissen</div>
            <ul className="space-y-2 text-[14px]">
              <li><a href="/wissen" className="hover:text-signal-500 transition-colors">Alle Aufsätze</a></li>
              <li><a href="/wissen/individualsoftware-vs-standardsoftware" className="hover:text-signal-500 transition-colors">Wann Standardsoftware kippt</a></li>
              <li><a href="/wissen/dokumenten-ki-mittelstand" className="hover:text-signal-500 transition-colors">Dokumenten-KI im Mittelstand</a></li>
              <li><a href="/wissen/multi-tenant-saas-architektur" className="hover:text-signal-500 transition-colors">Multi-Tenant SaaS</a></li>
              <li><a href="/wissen/operations-software-dienstleister" className="hover:text-signal-500 transition-colors">Operations-Software</a></li>
              <li><a href="/wissen/kundenportale-anti-patterns" className="hover:text-signal-500 transition-colors">Kundenportale · Anti-Patterns</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow !text-bone-300 mb-4">Antworten</div>
            <ul className="space-y-2 text-[14px]">
              <li><a href="/faq" className="hover:text-signal-500 transition-colors">Häufige Fragen</a></li>
              <li><a href="/kontakt" className="hover:text-signal-500 transition-colors">Kontakt</a></li>
              <li><a href="/#contact" className="hover:text-signal-500 transition-colors">Kennenlerngespräch</a></li>
              <li><a href="/cases/taskey" className="hover:text-signal-500 transition-colors">Case · Taskey</a></li>
              <li><a href="/regionen/saarland" className="hover:text-signal-500 transition-colors">Softwareagentur Saarland</a></li>
              <li><a href="/team/fynn-schulz" className="hover:text-signal-500 transition-colors">Fynn-Luca Schulz</a></li>
              <li><a href="/team/julian-stosse" className="hover:text-signal-500 transition-colors">Julian Stosse</a></li>
              <li><a href="/sitemap" className="hover:text-signal-500 transition-colors">Alle Seiten</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-bone-300">
          <div>© {new Date().getFullYear()} Schulz &amp; Stosse. Alle Rechte vorbehalten.</div>
          <div className="flex items-center gap-5">
            <a href="/impressum" className="hover:text-bone-50 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-bone-50 transition-colors">Datenschutz</a>
            <button
              type="button"
              onClick={openConsentBanner}
              className="hover:text-bone-50 transition-colors"
            >
              Cookies
            </button>
            <span className="font-mono">v.2026.09</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
