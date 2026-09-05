"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ss-cookie-consent-v1";
const EVENT = "ss-consent-change";

export type ConsentValue = "all" | "essential";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "all" || v === "essential" ? v : null;
}

export function setConsent(v: ConsentValue) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, v);
  window.dispatchEvent(new CustomEvent(EVENT, { detail: v }));
}

export function useConsent(): ConsentValue | null {
  const [value, setValue] = useState<ConsentValue | null>(null);

  useEffect(() => {
    setValue(getConsent());
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConsentValue>).detail;
      setValue(detail);
    };
    window.addEventListener(EVENT, handler as EventListener);
    return () => window.removeEventListener(EVENT, handler as EventListener);
  }, []);

  return value;
}

export function openConsentBanner() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(EVENT, { detail: null }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setVisible(getConsent() === null);
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConsentValue | null>).detail;
      setVisible(detail === null);
    };
    window.addEventListener(EVENT, handler as EventListener);
    return () => window.removeEventListener(EVENT, handler as EventListener);
  }, []);

  if (!mounted) return null;

  const accept = () => {
    setConsent("all");
    setVisible(false);
  };
  const decline = () => {
    setConsent("essential");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-x-0 bottom-0 z-[90] pointer-events-none"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie-Hinweis"
        >
          <div className="container-x pb-4 sm:pb-6">
            <div
              className="pointer-events-auto glass rounded-2xl md:rounded-full p-4 sm:p-5 md:pl-6 md:pr-3 flex flex-col md:flex-row md:items-center gap-4"
              style={{ WebkitBackdropFilter: "blur(28px) saturate(1.6)" }}
            >
              <div className="flex items-start md:items-center gap-3 flex-1 min-w-0">
                <span className="hidden sm:inline-flex shrink-0 w-2 h-2 rounded-full bg-signal-500" />
                <p className="text-[13.5px] leading-[1.5] text-ink-800 max-w-[62ch]">
                  Wir setzen ausschließlich technisch notwendige Cookies. Für die
                  Terminbuchung über Calendly werden erst nach Ihrer Zustimmung
                  Daten an einen Drittanbieter (Calendly LLC, USA) übertragen.
                  Details in der{" "}
                  <a
                    href="/datenschutz"
                    className="text-ink-950 underline underline-offset-2 hover:text-signal-500 transition-colors"
                  >
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
                <button
                  type="button"
                  onClick={decline}
                  className="btn btn-ghost !py-2 !px-4 text-[13px]"
                >
                  Nur essenzielle
                </button>
                <button
                  type="button"
                  onClick={accept}
                  className="btn btn-primary !py-2 !px-4 text-[13px]"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
