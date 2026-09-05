"use client";

import Image from "next/image";

/**
 * Shared Logo component.
 * Uses the black lockup on light backgrounds and the white lockup on dark.
 */
export default function Logo({
  onDark = false,
  className = "",
  heightClass = "h-9",
}: {
  onDark?: boolean;
  className?: string;
  heightClass?: string;
}) {
  const src = onDark ? "/logo-light.webp" : "/logo-dark.webp";
  return (
    <Image
      src={src}
      alt="Schulz & Stosse — Software for Real Progress"
      width={600}
      height={327}
      priority
      className={`${heightClass} w-auto object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
