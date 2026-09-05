export default function ServiceCTA({
  eyebrow = "Nächster Schritt",
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative bg-ink-950 text-bone-50 py-24 md:py-32 overflow-hidden">
      <div className="grain absolute inset-0 opacity-[0.05]" />
      <div className="container-x relative">
        <div className="max-w-[720px]">
          <div className="eyebrow !text-bone-300 mb-4">{eyebrow}</div>
          <h2 className="display text-[clamp(36px,6vw,72px)] leading-[0.98] tracking-tighter">
            {title}
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-ink-100 max-w-[52ch]">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn btn-primary bg-bone-50 text-ink-950 hover:bg-bone-100"
            >
              Kennenlerngespräch buchen
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="mailto:info@schulz-stosse.de"
              className="btn btn-ghost !border-white/15 !text-bone-50 hover:!bg-white/[0.06]"
            >
              info@schulz-stosse.de
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
