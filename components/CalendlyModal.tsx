"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getConsent, setConsent } from "./CookieConsent";

const CAL_URL =
  "https://calendly.com/fynn-taskeyapp/kennenlerngesprach?primary_color=0d4ca7";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

function loadCalendlyScript(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();
    if (window.Calendly) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    document.head.appendChild(s);
  });
}

export default function CalendlyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const holderRef = useRef<HTMLDivElement>(null);
  const [allowed, setAllowed] = useState(false);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Re-check consent whenever modal opens
  useEffect(() => {
    if (!open) return;
    setAllowed(getConsent() === "all");
  }, [open]);

  // Init widget only after consent is granted
  useEffect(() => {
    if (!open || !allowed) return;
    let cancelled = false;
    (async () => {
      await loadCalendlyScript();
      if (cancelled || !holderRef.current) return;
      holderRef.current.innerHTML = "";
      window.Calendly?.initInlineWidget({
        url: CAL_URL,
        parentElement: holderRef.current,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [open, allowed]);

  const grantAndLoad = () => {
    setConsent("all");
    setAllowed(true);
  };

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Backdrop */}
          <motion.button
            aria-label="Schließen"
            onClick={onClose}
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-md"
          />

          {/* Dialog */}
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Kennenlerngespräch buchen"
              initial={{ y: 32, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 16, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.36, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-[980px] max-h-[92vh] overflow-hidden rounded-[24px] border border-white/12 bg-bone-50 shadow-hard"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-4 px-5 md:px-7 py-4 border-b border-black/[0.08] bg-white/70 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em] text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
                    Termin
                  </span>
                  <span className="text-[13px] text-ink-700">
                    Kennenlerngespräch mit{" "}
                    <span className="text-ink-950 font-medium">Schulz &amp; Stosse</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 text-ink-950 hover:bg-black/[0.05] transition-colors active:scale-[0.97]"
                  aria-label="Schließen"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Widget holder */}
              <div className="relative w-full" style={{ height: "min(700px, 78vh)" }}>
                {allowed ? (
                  <div
                    ref={holderRef}
                    className="calendly-inline-widget w-full h-full"
                    data-url={CAL_URL}
                    style={{ minWidth: 320, height: "100%" }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                    <div className="max-w-[520px] w-full text-center">
                      <div className="eyebrow mb-4">Externer Dienst</div>
                      <h3 className="display text-[clamp(24px,3vw,36px)] leading-[1.05] mb-4">
                        Calendly zur Terminbuchung laden?
                      </h3>
                      <p className="text-[14.5px] leading-[1.6] text-ink-700 mb-6">
                        Für die Terminbuchung nutzen wir den externen Dienst
                        Calendly (Calendly LLC, USA). Beim Laden werden
                        Verbindungs- und Nutzungsdaten an Calendly übertragen.
                        Weitere Informationen finden Sie in unserer{" "}
                        <a
                          href="/datenschutz"
                          className="text-ink-950 underline underline-offset-2 hover:text-signal-500 transition-colors"
                        >
                          Datenschutzerklärung
                        </a>
                        .
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={grantAndLoad}
                          className="btn btn-primary"
                        >
                          Zustimmen und Termin buchen
                        </button>
                        <a
                          href="mailto:info@schulz-stosse.de"
                          className="btn btn-ghost"
                        >
                          Alternativ per E-Mail
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
