import type { Metadata } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CalendlyProvider from "@/components/CalendlyProvider";
import ScrollProgress from "@/components/ScrollProgress";

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

export const metadata: Metadata = {
  title: "Schulz & Stosse · Software, die sich Ihrem Unternehmen anpasst.",
  description:
    "Schulz & Stosse entwickelt individuelle Softwaresysteme, digitale Produkte und KI-gestützte Prozesse für Unternehmen mit Anforderungen, die Standardsoftware nicht abbilden kann.",
  metadataBase: new URL("https://schulz-stosse.de"),
  openGraph: {
    title: "Schulz & Stosse",
    description: "Software, die sich Ihrem Unternehmen anpasst. Nicht umgekehrt.",
    type: "website",
    locale: "de_DE",
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
      <body>
        <ScrollProgress />
        <CalendlyProvider>{children}</CalendlyProvider>
      </body>
    </html>
  );
}
