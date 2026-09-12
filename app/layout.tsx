import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CalendlyProvider from "@/components/CalendlyProvider";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";
import Schema from "@/components/Schema";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://schulz-stosse.de";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Schulz & Stosse · Individuelle Software, KI & digitale Produkte",
    template: "%s · Schulz & Stosse",
  },
  description:
    "Schulz & Stosse entwickelt individuelle Softwaresysteme, KI-gestützte Prozesse und digitale Produkte für Unternehmen mit Anforderungen, die Standardsoftware nicht abbilden kann. Softwareagentur aus dem Saarland, aktiv in ganz DACH.",
  applicationName: "Schulz & Stosse",
  generator: "Next.js",
  keywords: [
    "Individuelle Softwareentwicklung",
    "Custom Software",
    "Softwareagentur",
    "KI-Integration",
    "KI-Automatisierung",
    "SaaS-Entwicklung",
    "Digitale Produkte",
    "Prozessautomatisierung",
    "Softwareentwicklung Saarland",
    "Softwareagentur Völklingen",
    "Softwareagentur Saarbrücken",
    "Business Software",
    "Operations Software",
    "Kundenportal Entwicklung",
    "Management Dashboard",
    "Dokumenten KI",
    "LLM Integration",
    "Product Engineering",
  ],
  authors: [
    { name: "Fynn-Luca Schulz", url: `${SITE_URL}/team#fynn-schulz` },
    { name: "Julian Stosse", url: `${SITE_URL}/team#julian-stosse` },
  ],
  creator: "Schulz & Stosse GbR",
  publisher: "Schulz & Stosse GbR",
  category: "Softwareentwicklung",
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Schulz & Stosse",
    title: "Schulz & Stosse · Individuelle Software, KI & digitale Produkte",
    description:
      "Softwareagentur für individuelle Softwaresysteme, KI-gestützte Prozesse und digitale Produkte. Von der Konzeption bis zum Betrieb.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Schulz & Stosse · Software, die sich Ihrem Unternehmen anpasst.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schulz & Stosse · Individuelle Software, KI & digitale Produkte",
    description:
      "Softwareagentur für individuelle Softwaresysteme, KI-gestützte Prozesse und digitale Produkte.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="alternate" type="application/rss+xml" title="Schulz & Stosse · Wissen" href="/wissen.xml" />
        <Schema />
      </head>
      <body>
        <ScrollProgress />
        <CalendlyProvider>{children}</CalendlyProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
