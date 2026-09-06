import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Schulz & Stosse",
    short_name: "Schulz & Stosse",
    description:
      "Deutsche Softwareagentur für individuelle Softwaresysteme, KI-gestützte Prozesse und digitale Produkte.",
    start_url: "/",
    id: "/",
    display: "browser",
    background_color: "#faf8f4",
    theme_color: "#faf8f4",
    lang: "de-DE",
    dir: "ltr",
    orientation: "portrait",
    categories: ["business", "productivity", "developer"],
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
