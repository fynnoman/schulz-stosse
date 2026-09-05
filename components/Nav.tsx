"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "#what", label: "Was wir bauen" },
  { href: "#services", label: "Leistungen" },
  { href: "#process", label: "Vorgehen" },
  { href: "#cases", label: "Cases" },
  { href: "#founders", label: "Team" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container-x pt-4">
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(250,248,244,0.62)" : "rgba(250,248,244,0.0)",
            borderColor: scrolled ? "rgba(8,8,10,0.08)" : "rgba(8,8,10,0.0)",
            boxShadow: scrolled
              ? "inset 0 1px 0 rgba(255,255,255,0.65), 0 20px 60px -30px rgba(8,8,10,0.35)"
              : "inset 0 1px 0 rgba(255,255,255,0), 0 20px 60px -30px rgba(8,8,10,0)",
          }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="pointer-events-auto flex items-center justify-between rounded-full border px-4 sm:px-5 py-2.5 backdrop-blur-2xl"
          style={{ WebkitBackdropFilter: "blur(28px) saturate(1.6)" }}
        >
          <a href="#top" className="group flex items-center pl-1">
            <Logo heightClass="h-8 md:h-9" />
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] text-ink-700 hover:text-ink-950 hover:bg-black/[0.04] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="btn btn-primary text-[13px] py-2 px-4"
            >
              Projekt besprechen
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
            <button
              aria-label="Menü"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-full w-9 h-9 border border-black/10 text-ink-900"
            >
              <span className="sr-only">Menü</span>
              <div className="relative w-4 h-4">
                <motion.span
                  className="absolute left-0 right-0 h-px bg-current"
                  animate={{ y: open ? 8 : 4, rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.span
                  className="absolute left-0 right-0 h-px bg-current"
                  animate={{ y: open ? 8 : 12, rotate: open ? -45 : 0, opacity: open ? 1 : 1 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                />
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
        className="md:hidden fixed inset-0 z-40 bg-bone-50/85 backdrop-blur-2xl pt-24 px-6"
      >
        <ul className="flex flex-col gap-2">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={false}
              animate={{
                y: open ? 0 : 12,
                opacity: open ? 1 : 0,
              }}
              transition={{
                duration: 0.32,
                delay: open ? i * 0.04 : 0,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="display text-5xl block py-2 text-ink-950"
              >
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

