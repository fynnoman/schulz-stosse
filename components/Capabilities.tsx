"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Group = {
  title: string;
  eyebrow: string;
  items: { t: string; d: string }[];
};

const groups: Group[] = [
  {
    eyebrow: "Integrations",
    title: "Wir sprechen mit jedem System, das Sie im Einsatz haben.",
    items: [
      { t: "REST · GraphQL · gRPC", d: "APIs sauber angebunden, versioniert, dokumentiert." },
      { t: "SOAP & Legacy-Bridges", d: "Alte SAP·Navision·AS400-Systeme werden nicht ersetzt, sondern gebrückt." },
      { t: "Webhooks & Event-Busse", d: "Kafka, RabbitMQ, SQS, Pub/Sub, Redis Streams – realtime, verlässlich." },
      { t: "iPaaS · Zapier · n8n · Make", d: "Wir bauen native oder integrieren in bestehende Automation-Layer." },
      { t: "ERP · CRM · DMS · HR", d: "SAP, DATEV, Salesforce, HubSpot, DocuWare, Personio, Lexoffice u. v. m." },
      { t: "SSO · SAML · OIDC · SCIM", d: "Enterprise-Login und Nutzerprovisionierung nativ integriert." },
    ],
  },
  {
    eyebrow: "AI & Automation",
    title: "KI, die in reale Prozesse eingebettet ist.",
    items: [
      { t: "LLM-Assistenten mit Kontext", d: "OpenAI, Anthropic, Mistral, Google, offene Modelle. Wir wählen passend zum Case." },
      { t: "RAG · Vector Search", d: "Ihre Dokumente werden durchsuchbar und LLM-fähig. Qdrant, pgvector, Pinecone." },
      { t: "Dokumenten-KI · OCR", d: "Rechnungen, Verträge, Prüfberichte werden automatisch klassifiziert und extrahiert." },
      { t: "Agents mit Tools & Memory", d: "Mehrschrittige Workflows: verstehen, entscheiden, ausführen, protokollieren." },
      { t: "Sprache · Speech-to-Text · TTS", d: "Whisper, Deepgram, ElevenLabs für Sprach-Interfaces und Diktate." },
      { t: "Vision · Computer Vision", d: "Bilderkennung für Qualität, Zählung, Zustand, Sicherheit." },
    ],
  },
  {
    eyebrow: "Data & Backend",
    title: "Datenarchitekturen, die auch in fünf Jahren tragen.",
    items: [
      { t: "PostgreSQL · Supabase · Neon", d: "Relational, sauber modelliert, mit Row-Level-Security, wenn nötig." },
      { t: "ClickHouse · BigQuery · Snowflake", d: "Analytics und Reporting im Terabyte-Bereich, ohne Kompromisse." },
      { t: "MongoDB · Dynamo · Firestore", d: "Wenn das Datenmodell nicht relational sein soll, wird es das nicht." },
      { t: "Event Sourcing · CQRS", d: "Für Domänen, in denen Historie zur Wahrheit gehört." },
      { t: "Realtime · WebSockets · SSE", d: "Live-Kollaboration, Kursanzeigen, Chat, Multiplayer-UX." },
      { t: "Data Pipelines · dbt · Airflow", d: "Ingest, Transform, Warehouse, wieder ins Produkt zurück." },
    ],
  },
  {
    eyebrow: "Product & Interface",
    title: "Interfaces, die man wirklich benutzen möchte.",
    items: [
      { t: "Next.js · React · SvelteKit", d: "Moderne Web-Apps mit Server-Rendering, Edge, streaming UI." },
      { t: "iOS · Swift · SwiftUI", d: "Native Apps für iPhone, iPad, Vision Pro. Nicht Wrapper." },
      { t: "Android · Kotlin · Jetpack", d: "Native Android-Apps mit sauberer Material-3-Umsetzung." },
      { t: "Cross-Platform · React Native · Expo", d: "Wenn ein Codebase reicht, ohne die Nutzung zu opfern." },
      { t: "Design Systems · Tokens", d: "Vom Farbwert bis zur Komponente. Konsistent über Web + App." },
      { t: "Micro-Interactions · Motion", d: "Details, die man nicht bewusst sieht, aber deutlich fühlt." },
    ],
  },
  {
    eyebrow: "Ops & Cloud",
    title: "Betrieb ist Teil des Produkts.",
    items: [
      { t: "AWS · GCP · Azure · Hetzner", d: "Cloud-agnostisch, mit Fokus auf Kosten und Kontrolle." },
      { t: "Terraform · Pulumi · CDK", d: "Infrastruktur als Code, reviewbar, versioniert, reproduzierbar." },
      { t: "Docker · Kubernetes · Nomad", d: "Von Single-Container bis Multi-Cluster, so groß wie nötig." },
      { t: "CI/CD · GitHub Actions · Vercel", d: "Deploys ohne Angst. Preview-Umgebungen für jede Änderung." },
      { t: "Observability · OTEL · Sentry", d: "Wir sehen, was passiert, bevor Sie es merken." },
      { t: "Backups · Disaster Recovery", d: "Getestet, nicht nur konfiguriert." },
    ],
  },
  {
    eyebrow: "Security & Compliance",
    title: "DSGVO ist Ausgangspunkt, nicht Nachgedanke.",
    items: [
      { t: "AuthN/AuthZ · RBAC · ABAC", d: "Rollen und Rechte auf Ressourcen-Ebene, mit Audit-Trail." },
      { t: "Encryption at Rest & in Transit", d: "Sensible Daten sind sensibel behandelt. Keine Ausrede." },
      { t: "GDPR · TDDDG · ISO 27001-ready", d: "Wir bauen so, dass Zertifizierung möglich bleibt." },
      { t: "Penetration Testing", d: "Wir arbeiten mit externen Testern, wo es der Case verlangt." },
      { t: "Secrets Management · Vault · KMS", d: "Kein Secret in Code oder Umgebungsvariablen ohne Rotation." },
      { t: "DPA · AVV · Löschkonzepte", d: "Rechtsgrundlagen sind sauber, nicht symbolisch." },
    ],
  },
  {
    eyebrow: "Payments & Commerce",
    title: "Bezahlen, verkaufen, abrechnen — technisch.",
    items: [
      { t: "Stripe · Adyen · Mollie", d: "Karten, SEPA, Wallets, Recurring, Invoicing, Tax." },
      { t: "Marketplaces · Split · Escrow", d: "Zwei- und mehrseitige Modelle mit Auszahlungen und KYC." },
      { t: "Subscription & Metered Billing", d: "Preismodelle, die man auch später wieder ändern kann." },
      { t: "Buchhaltung · DATEV · Lexoffice", d: "Automatisierte Übergaben statt Excel-Exporte." },
    ],
  },
  {
    eyebrow: "Realtime & Edge",
    title: "Wenn Millisekunden über die UX entscheiden.",
    items: [
      { t: "Edge Functions · Cloudflare · Vercel", d: "Antwortzeiten dort, wo die Nutzer sitzen." },
      { t: "WebRTC · Live-Video · Audio", d: "1-zu-1, 1-zu-N und Konferenzen, in eigener Anwendung." },
      { t: "MQTT · IoT · Sensordaten", d: "Feldgeräte in Ihre digitale Welt integrieren." },
      { t: "Offline-first · Sync", d: "Apps, die auch ohne Netz sauber weiterarbeiten." },
    ],
  },
];

export default function Capabilities() {
  const [open, setOpen] = useState<string | null>(groups[0].eyebrow);

  return (
    <section id="capabilities" className="relative py-32 md:py-48 bg-bone-50 text-ink-950 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(50% 40% at 15% 10%, rgba(28,57,187,0.06), transparent 60%), radial-gradient(60% 40% at 90% 90%, rgba(28,57,187,0.05), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6 items-end mb-16">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow mb-4">Ω · Was wir technisch abdecken</div>
            <h2 className="display text-[clamp(40px,6vw,88px)] leading-[0.95] max-w-[22ch]">
              Wenn es technisch sinnvoll ist,
              <em className="italic text-signal-500"> bauen wir es</em>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-[16px] leading-[1.6] text-ink-500 max-w-[38ch]">
              Kein „das können wir nicht“. Sondern eine ehrliche Einschätzung,
              was Sinn ergibt und was nicht. Hier ist ein Auszug dessen, was
              wir regelmäßig einsetzen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
          {/* Accordion column */}
          <div className="col-span-12 lg:col-span-7 rounded-[24px] border border-black/[0.06] bg-white/60 backdrop-blur-xl overflow-hidden">
            {groups.map((g, gi) => {
              const isOpen = open === g.eyebrow;
              return (
                <div key={g.eyebrow} className={`${gi > 0 ? "border-t border-black/[0.06]" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : g.eyebrow)}
                    className="w-full flex items-baseline justify-between gap-4 px-5 md:px-8 py-5 md:py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-4 md:gap-6 min-w-0">
                      <span className="font-mono text-[10.5px] tracking-[0.16em] text-ink-300 uppercase w-24 shrink-0">
                        {g.eyebrow}
                      </span>
                      <span className="display text-[clamp(20px,2.4vw,34px)] leading-[1.1] tracking-tighter2 text-ink-950">
                        {g.title}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
                      className="ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full border border-black/10 text-ink-950 shrink-0 group-hover:bg-black/[0.04] transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-8 pb-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {g.items.map((it) => (
                        <div key={it.t} className="border-t border-black/[0.06] pt-4">
                          <div className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-signal-500 shrink-0" />
                            <div>
                              <div className="text-[14.5px] font-medium text-ink-950 tracking-[-0.01em]">
                                {it.t}
                              </div>
                              <div className="text-[13px] text-ink-500 leading-[1.55] mt-0.5">
                                {it.d}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Meta panel */}
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-32 space-y-3">
              <div className="rounded-[24px] border border-black/[0.06] bg-white/70 backdrop-blur-xl p-6 md:p-8">
                <div className="eyebrow mb-4">Stack im Alltag</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript", "Next.js", "React", "Node", "Bun", "Go", "Python", "Rust",
                    "PostgreSQL", "ClickHouse", "Kafka", "Redis", "Supabase", "Vercel", "AWS",
                    "OpenAI", "Anthropic", "Ollama", "Whisper", "pgvector", "Stripe", "Tailwind",
                    "Framer Motion", "SwiftUI", "Kotlin", "Terraform", "Docker", "K8s",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11.5px] text-ink-700 hover:bg-signal-500 hover:text-bone-50 hover:border-signal-500 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-black/[0.06] bg-ink-950 text-bone-100 p-6 md:p-8 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 30% 20%, rgba(28,57,187,0.35), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="eyebrow !text-bone-300 mb-4">Grundprinzip</div>
                  <p className="display text-[clamp(20px,2.2vw,30px)] leading-[1.15] text-bone-50 max-w-[26ch]">
                    Wir sagen ehrlich, was passt. Kein Overengineering aus Prinzip.
                  </p>
                  <div className="hairline my-6 !bg-white/10" />
                  <ul className="space-y-2 text-[13.5px] text-ink-100">
                    <li className="flex gap-2"><span className="text-signal-400">✓</span> Fester Ansprechpartner</li>
                    <li className="flex gap-2"><span className="text-signal-400">✓</span> Zwei-Wochen-Zyklen mit Demos</li>
                    <li className="flex gap-2"><span className="text-signal-400">✓</span> Klare Reviews und Freigaben</li>
                    <li className="flex gap-2"><span className="text-signal-400">✓</span> Verantwortlicher Betrieb</li>
                  </ul>

                  <a
                    href="#contact"
                    className="btn btn-primary w-full justify-center mt-6 bg-bone-50 text-ink-950 hover:bg-bone-100"
                  >
                    Vorhaben besprechen
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
