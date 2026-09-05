"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];
const INTERVAL = 2600;

export default function HeroImage() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % images.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  // preload all images so switch is instant
  useEffect(() => {
    if (typeof window === "undefined") return;
    images.forEach((src) => {
      const im = new window.Image();
      im.src = src;
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* soft blue halo */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-[48px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(28,57,187,0.22), rgba(28,57,187,0) 70%)",
          filter: "blur(28px)",
        }}
      />

      {/* Straight frame, larger */}
      <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden border border-black/10 shadow-hard bg-ink-800">
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={images[i]}
            src={images[i]}
            alt=""
            initial={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
