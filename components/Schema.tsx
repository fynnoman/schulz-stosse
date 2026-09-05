import Script from "next/script";

const SITE_URL = "https://schulz-stosse.de";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PLACE_ID = `${SITE_URL}/#place`;
const FYNN_ID = `${SITE_URL}/#fynn-schulz`;
const JULIAN_ID = `${SITE_URL}/#julian-stosse`;

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: "Schulz & Stosse",
      alternateName: "Schulz & Stosse GbR",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-dark.webp`,
        width: 600,
        height: 327,
      },
      image: `${SITE_URL}/og-image.png`,
      description:
        "Schulz & Stosse entwickelt individuelle Softwaresysteme, KI-gestützte Prozesse und digitale Produkte für Unternehmen mit Anforderungen, die Standardsoftware nicht abbilden kann.",
      email: "info@schulz-stosse.de",
      telephone: "+49 151 68488999",
      vatID: "DE458914838",
      foundingDate: "2025",
      founder: [{ "@id": FYNN_ID }, { "@id": JULIAN_ID }],
      knowsAbout: [
        "Individuelle Softwareentwicklung",
        "Custom Software Development",
        "Künstliche Intelligenz",
        "KI-Integration",
        "Prozessautomatisierung",
        "SaaS-Entwicklung",
        "Digitale Produkte",
        "System-Architektur",
        "Business-Automatisierung",
        "Operations-Software",
        "Kundenportale",
        "Management-Dashboards",
      ],
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
        { "@type": "Place", name: "DACH" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "In der Acht 44",
        postalCode: "66333",
        addressLocality: "Völklingen",
        addressRegion: "Saarland",
        addressCountry: "DE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@schulz-stosse.de",
        telephone: "+49 151 68488999",
        areaServed: ["DE", "AT", "CH"],
        availableLanguage: ["de", "en"],
      },
      sameAs: [],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Individuelle Softwareentwicklung",
            url: `${SITE_URL}/leistungen/individualsoftware`,
            description:
              "Custom-Softwaresysteme für Betriebs-, Verwaltungs- und Prozessanforderungen, die Standardsoftware nicht abbilden kann.",
            provider: { "@id": ORG_ID },
            areaServed: "DACH",
            serviceType: "Custom Software Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "KI-Integration und Automatisierung",
            url: `${SITE_URL}/leistungen/ki-automatisierung`,
            description:
              "Dokumenten-KI, Klassifikation und Routing, Agents mit Geschäftskontext, LLM-basierte Workflows und KI-native Automatisierung operativer Prozesse.",
            provider: { "@id": ORG_ID },
            areaServed: "DACH",
            serviceType: "AI Integration and Process Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS- und Produktentwicklung",
            url: `${SITE_URL}/leistungen/saas-entwicklung`,
            description:
              "Von der Produkt-Discovery über MVP bis zur skalierbaren SaaS-Architektur. Multi-Tenant, Auth, Billing, Analytics.",
            provider: { "@id": ORG_ID },
            areaServed: "DACH",
            serviceType: "SaaS Product Development",
          },
        },
      ],
      location: { "@id": PLACE_ID },
    },
    {
      "@type": "Place",
      "@id": PLACE_ID,
      name: "Schulz & Stosse GbR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "In der Acht 44",
        postalCode: "66333",
        addressLocality: "Völklingen",
        addressRegion: "Saarland",
        addressCountry: "DE",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Schulz & Stosse",
      description:
        "Softwareagentur für individuelle Softwaresysteme, KI-gestützte Prozesse und digitale Produkte.",
      publisher: { "@id": ORG_ID },
      inLanguage: "de-DE",
    },
    {
      "@type": "Person",
      "@id": FYNN_ID,
      name: "Fynn-Luca Schulz",
      givenName: "Fynn-Luca",
      familyName: "Schulz",
      url: `${SITE_URL}/team#fynn-schulz`,
      image: `${SITE_URL}/fynn.webp`,
      jobTitle: "Head of Product & Strategy",
      worksFor: { "@id": ORG_ID },
      knowsAbout: [
        "Produktstrategie",
        "Prozess-Design",
        "Business Modeling",
        "UX-Konzeption",
        "Digitalisierung",
        "Product Discovery",
      ],
      knowsLanguage: ["Deutsch", "Englisch"],
    },
    {
      "@type": "Person",
      "@id": JULIAN_ID,
      name: "Julian Stosse",
      givenName: "Julian",
      familyName: "Stosse",
      url: `${SITE_URL}/team#julian-stosse`,
      image: `${SITE_URL}/julian.webp`,
      jobTitle: "Head of Engineering",
      worksFor: { "@id": ORG_ID },
      knowsAbout: [
        "Software-Architektur",
        "Backend-Entwicklung",
        "Frontend-Entwicklung",
        "KI-Integration",
        "Datenmodelle",
        "APIs",
        "Cloud-Infrastruktur",
      ],
      knowsLanguage: ["Deutsch", "Englisch"],
    },
  ],
};

export default function Schema() {
  return (
    <Script
      id="schema-org-graph"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}

export {
  SITE_URL,
  ORG_ID,
  WEBSITE_ID,
  FYNN_ID,
  JULIAN_ID,
};
