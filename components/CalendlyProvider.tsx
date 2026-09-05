"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import CalendlyModal from "./CalendlyModal";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const CalendlyCtx = createContext<Ctx | null>(null);

export function useCalendly() {
  const ctx = useContext(CalendlyCtx);
  if (!ctx) throw new Error("useCalendly must be used within CalendlyProvider");
  return ctx;
}

export default function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  // Global delegation: any anchor href="#contact" opens the modal.
  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash) return;
      // intercept #contact and data-book attributes
      if (hash === "#contact" || anchor.dataset.book === "calendly") {
        e.preventDefault();
        open();
      }
    }
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <CalendlyCtx.Provider value={value}>
      {children}
      <CalendlyModal open={isOpen} onClose={close} />
    </CalendlyCtx.Provider>
  );
}
