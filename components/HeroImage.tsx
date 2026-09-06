"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images: { src: string; alt: string }[] = [
  {
    src: "/hero-1.webp",
    alt: "Schulz & Stosse: Arbeitsumgebung mit Fokus auf digitale Prozesse",
  },
  {
    src: "/hero-2.webp",
    alt: "Schulz & Stosse: Zusammenarbeit an einem Softwaresystem im Team",
  },
  {
    src: "/hero-3.webp",
    alt: "Schulz & Stosse: Individuelle Softwareentwicklung im Alltag",
  },
];
const INTERVAL = 2600;

export default function HeroImage() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % images.length), INTERVAL);
    return () => clearInterval(t);
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
        {images.map((image, idx) => (
          <motion.div
            key={image.src}
            initial={false}
            animate={{
              opacity: idx === i ? 1 : 0,
              scale: idx === i ? 1 : 1.04,
              filter: idx === i ? "blur(0px)" : "blur(6px)",
            }}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0"
            aria-hidden={idx !== i}
          >
            <Image
              src={image.src}
              alt={idx === i ? image.alt : ""}
              fill
              priority={idx === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
