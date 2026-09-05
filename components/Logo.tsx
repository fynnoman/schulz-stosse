"use client";

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
  const src = onDark ? "/logo-light.png" : "/logo-dark.png";
  return (
    <img
      src={src}
      alt="Schulz & Stosse — Software for Real Progress"
      className={`${heightClass} w-auto object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
